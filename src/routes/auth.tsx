import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Sign In or Create Account — The Napoleon Library" },
      {
        name: "description",
        content:
          "Sign in or create a free account to keep your own reader profile in The Napoleon Library.",
      },
      { property: "og:title", content: "Sign In — The Napoleon Library" },
      {
        property: "og:description",
        content: "Access your reader profile in The Napoleon Library.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

type Mode = "login" | "signup";

const MAX_ATTEMPTS = 6;
const LOCKOUT_MS = 5 * 60 * 1000;

type AttemptRecord = { count: number; lockedUntil: number };

function attemptKey(email: string) {
  return `napoleon-login-attempts:${email.trim().toLowerCase()}`;
}

function readAttempts(email: string): AttemptRecord {
  try {
    const raw = window.localStorage.getItem(attemptKey(email));
    if (!raw) return { count: 0, lockedUntil: 0 };
    const parsed = JSON.parse(raw) as AttemptRecord;
    return { count: parsed.count ?? 0, lockedUntil: parsed.lockedUntil ?? 0 };
  } catch {
    return { count: 0, lockedUntil: 0 };
  }
}

function writeAttempts(email: string, record: AttemptRecord) {
  window.localStorage.setItem(attemptKey(email), JSON.stringify(record));
}

function clearAttempts(email: string) {
  window.localStorage.removeItem(attemptKey(email));
}

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    const remembered = window.localStorage.getItem("napoleon-library-email");
    if (remembered) setEmail(remembered);
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/account", replace: true });
    });
  }, [navigate]);


  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setNotice(null);

    if (!email.trim() || !password) {
      setError("Please fill in every field.");
      return;
    }
    if (mode === "signup" && !name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (mode === "login") {
      const record = readAttempts(email);
      if (record.lockedUntil > Date.now()) {
        const minutes = Math.ceil((record.lockedUntil - Date.now()) / 60000);
        setError(
          `Too many failed attempts. Please wait about ${minutes} minute${minutes === 1 ? "" : "s"} before trying again.`,
        );
        return;
      }
    }

    setLoading(true);
    try {
      window.localStorage.setItem("napoleon-library-email", email.trim());
      if (mode === "signup") {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/account`,
            data: { full_name: name.trim() },
          },
        });
        if (signUpError) throw signUpError;
        if (data.session) {
          await supabase
            .from("profiles")
            .upsert({ id: data.session.user.id, full_name: name.trim() });
          navigate({ to: "/account", replace: true });
        } else {
          setNotice(
            "Account created. Check your email inbox and click the confirmation link to finish signing up.",
          );
        }
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
        if (signInError) {
          const prev = readAttempts(email);
          const count = prev.count + 1;
          if (count >= MAX_ATTEMPTS) {
            writeAttempts(email, { count, lockedUntil: Date.now() + LOCKOUT_MS });
            setError(
              "Too many failed attempts. Sign-in is paused for 5 minutes for your security.",
            );
          } else {
            writeAttempts(email, { count, lockedUntil: 0 });
            const left = MAX_ATTEMPTS - count;
            setError(
              `${signInError.message} ${left} attempt${left === 1 ? "" : "s"} left before a short lockout.`,
            );
          }
          setLoading(false);
          return;
        }
        clearAttempts(email);
        navigate({ to: "/account", replace: true });
      }


    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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

      <div className="flex flex-1 items-start justify-center px-6 py-14 lg:items-center">
        <div className="grid w-full max-w-5xl gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-frame lg:sticky lg:top-10">
              <p className="text-eyebrow opacity-70">Why create an account?</p>
              <h2 className="mt-3 font-display text-3xl leading-tight">
                Your personal key to the library
              </h2>
              <p className="mt-4 text-sm leading-relaxed opacity-70">
                A free reader account unlocks the full Napoleon Library experience and keeps your
                progress safe across visits.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  {
                    title: "Unlock exclusive rooms",
                    text: "Read member-only deep dives like the Greatest Wars collection, covering Austerlitz, Jena, Wagram, and Waterloo.",
                  },
                  {
                    title: "Save your place",
                    text: "Your reading progress and unlocked sections are tied to your account, so nothing is lost when you return.",
                  },
                  {
                    title: "Build your reader profile",
                    text: "Choose your display name and manage your membership from one simple profile page.",
                  },
                  {
                    title: "Free for now",
                    text: "The library is currently free to unlock. Create an account today and keep access as the collection grows.",
                  },
                ].map((benefit) => (
                  <li key={benefit.title} className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-ink text-xs font-bold">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-medium">{benefit.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed opacity-70">{benefit.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 w-full max-w-md justify-self-center lg:order-2 lg:max-w-none lg:justify-self-start">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-frame">
              <p className="text-eyebrow text-center opacity-70">Reader Account</p>
              <h1 className="mt-3 text-center font-display text-4xl leading-tight">
                {mode === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-3 text-center text-sm leading-relaxed opacity-70">
                {mode === "login"
                  ? "Sign in with your Gmail and password to reach your profile and unlocked rooms."
                  : "Enter your name, Gmail and a password to join the library and unlock exclusive content."}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-1 rounded-full border border-border p-1">
                {(["login", "signup"] as Mode[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => {
                      setMode(m);
                      setError(null);
                      setNotice(null);
                    }}
                    className={`rounded-full px-4 py-2 text-sm transition-colors ${
                      mode === m ? "bg-gold text-ink" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    {m === "login" ? "Log in" : "Sign up"}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {mode === "signup" && (
                  <div>
                    <label htmlFor="name" className="block text-sm opacity-80">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      maxLength={100}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Napoleon Bonaparte"
                      className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm opacity-80">
                    Gmail
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    maxLength={255}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@gmail.com"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm opacity-80">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    autoComplete={mode === "login" ? "current-password" : "new-password"}
                    value={password}
                    maxLength={72}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  />
                </div>

                {error && (
                  <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {error}
                  </p>
                )}
                {notice && (
                  <p className="rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-sm">
                    {notice}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {loading
                    ? "Please wait…"
                    : mode === "login"
                      ? "Log in"
                      : "Create account & unlock"}
                </button>
              </form>

              <p className="mt-6 text-center text-sm opacity-70">
                {mode === "login" ? "New to the library?" : "Already have an account?"}{" "}
                <button
                  type="button"
                  className="text-gold underline-offset-4 hover:underline"
                  onClick={() => {
                    setMode(mode === "login" ? "signup" : "login");
                    setError(null);
                    setNotice(null);
                  }}
                >
                  {mode === "login" ? "Create one" : "Log in"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
