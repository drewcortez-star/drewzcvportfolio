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

    setLoading(true);
    try {
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
        if (signInError) throw signInError;
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

      <div className="flex flex-1 items-center justify-center px-6 py-14">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-frame">
          <p className="text-eyebrow text-center opacity-70">Reader Account</p>
          <h1 className="mt-3 text-center font-display text-4xl leading-tight">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-3 text-center text-sm leading-relaxed opacity-70">
            {mode === "login"
              ? "Sign in with your Gmail and password to reach your profile."
              : "Enter your name, Gmail and a password to join the library."}
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
                  : "Create account"}
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
    </main>
  );
}
