import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const OWNER_EMAIL = "drewlolalt@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

const inputSchema = z.object({
  name: z.string().trim().max(100).optional().default(""),
  category: z.enum(["suggestion", "bug"]),
  message: z.string().trim().min(10).max(3000),
});

function b64(input: string) {
  return btoa(
    Array.from(new TextEncoder().encode(input), (byte) => String.fromCharCode(byte)).join(""),
  );
}

function header(value: string) {
  return /^[\x00-\x7F]*$/.test(value) ? value : `=?UTF-8?B?${b64(value)}?=`;
}

function buildRawEmail(opts: {
  to: string;
  replyTo: string;
  subject: string;
  body: string;
}) {
  const email = [
    `To: ${opts.to}`,
    `Reply-To: ${opts.replyTo}`,
    `Subject: ${header(opts.subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "",
    opts.body,
  ].join("\r\n");
  return b64(email).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export const submitFeedback = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data, context }) => {
    const userEmail = (context.claims['email'] as string | undefined) ?? "";
    if (!userEmail) {
      throw new Error("Your account has no email address on file.");
    }

    const senderName = data.name || userEmail;

    const { error } = await context.supabase.from("feedback_messages").insert({
      user_id: context.userId,
      sender_name: senderName,
      sender_email: userEmail,
      category: data.category,
      message: data.message,
    });
    if (error) {
      console.error("[feedback] insert failed", error);
      throw new Error("Could not save your message. Please try again.");
    }

    const lovableApiKey = process.env['LOVABLE_API_KEY'];
    const gmailKey = process.env['GOOGLE_MAIL_API_KEY'];
    if (!lovableApiKey || !gmailKey) {
      console.error("[feedback] missing gmail connector credentials");
      return { saved: true, emailed: false };
    }

    const label = data.category === "bug" ? "Bug report" : "Suggestion";
    const raw = buildRawEmail({
      to: OWNER_EMAIL,
      replyTo: userEmail,
      subject: `[Napoleon Library] ${label} from ${senderName}`,
      body: [
        `${label} received from a Napoleon Library member.`,
        "",
        `Name:  ${senderName}`,
        `Email: ${userEmail}`,
        `Type:  ${label}`,
        "",
        "Message:",
        data.message,
        "",
        "— Reply directly to this email and the member will receive your response in their inbox.",
      ].join("\n"),
    });

    const response = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableApiKey}`,
        "X-Connection-Api-Key": gmailKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[feedback] gmail send failed [${response.status}]: ${errorBody}`);
      return { saved: true, emailed: false };
    }

    return { saved: true, emailed: true };
  });
