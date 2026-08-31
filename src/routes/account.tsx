import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/account")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Your Profile — The Napoleon Library" },
      {
        name: "description",
        content: "Your reader profile for The Napoleon Library: name, email and account details.",
      },
      { property: "og:title", content: "Your Profile — The Napoleon Library" },
      {
        property: "og:description",
        content: "Manage your reader profile in The Napoleon Library.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState("");
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      if (!active) return;
      if (!user) {
        navigate({ to: "/auth", replace: true });
        return;
      }
      setEmail(user.email ?? "");
      setJoined(new Date(user.created_at).toLocaleDateString());
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .maybeSingle();
      if (!active) return;
      setName(profile?.full_name ?? "");
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [navigate]);

  async function saveName() {
    setSaving(true);
    setMessage(null);
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      navigate({ to: "/auth", replace: true });
      return;
    }
    const { error } = await supabase
      .from("profiles")
      .upsert({ id: data.user.id, full_name: name.trim(), updated_at: new Date().toISOString() });
    setSaving(false);
    setMessage(error ? error.message : "Profile saved.");
  }

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/", replace: true });
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <div className="surface-imperial">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-xl text-gold">The Napoleon Library</span>
          <Link
            to="/"
            className="rounded-full border border-gold/40 px-4 py-2 text-sm text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            ← Back to main page
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full max-w-2xl flex-1 px-6 py-14">
        {loading ? (
          <p className="text-center text-sm opacity-70">Loading your profile…</p>
        ) : (
          <div className="rounded-2xl border border-border bg-card p-8 shadow-frame">
            <p className="text-eyebrow opacity-70">Reader Profile</p>
            <h1 className="mt-3 font-display heading-section">{name || "Unnamed reader"}</h1>
            <p className="mt-2 text-sm opacity-70">
              {email} · Member since {joined}
            </p>

            <div className="mt-8 space-y-2">
              <label htmlFor="displayName" className="block text-sm opacity-80">
                Name
              </label>
              <input
                id="displayName"
                value={name}
                maxLength={100}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
              />
            </div>

            {message && <p className="mt-4 text-sm opacity-80">{message}</p>}

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={saveName}
                disabled={saving}
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {saving ? "Saving…" : "Save changes"}
              </button>
              <button
                type="button"
                onClick={signOut}
                className="rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-gold hover:text-gold"
              >
                Log out
              </button>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <p className="text-eyebrow opacity-70">Exclusive Library</p>
              <p className="mt-3 text-sm opacity-80">
                Unlock the exclusive room on the main page, then visit
                <em> Napoleon's Greatest Wars</em> anytime.
              </p>
              <Link
                to="/great-wars"
                className="mt-4 inline-block rounded-full border border-gold/50 px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                Visit Greatest Wars →
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
