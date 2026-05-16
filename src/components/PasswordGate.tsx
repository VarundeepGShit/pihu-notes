"use client";

import { useState, useEffect, type ReactNode } from "react";
const STORAGE_KEY = "sw-auth-token";

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEY);
    if (token) setAuthed(true);
    setChecking(false);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const { token } = await res.json();
        localStorage.setItem(STORAGE_KEY, token);
        setAuthed(true);
      } else {
        setError("Wrong password, try again!");
        setPassword("");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-sw-pink animate-spin" />
      </div>
    );
  }

  if (authed) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="mesh-bg" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-sm animate-fade-in-up">
        {/* Heart icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center text-4xl">
            🩷
          </div>
        </div>

        {/* Card */}
        <div className="glass rounded-2xl p-8 text-center">
          <h1 className="font-heading text-2xl font-bold text-white mb-1">
            Sammy Wise
          </h1>
          <p className="text-sm text-white/40 mb-6">
            Enter the password to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm outline-none focus:border-sw-pink/50 focus:ring-1 focus:ring-sw-pink/30 transition-all"
            />

            {error && (
              <p className="text-sw-rose text-xs">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full btn-glow py-3 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Checking..." : "Let me in 🩷"}
            </button>
          </form>
        </div>

        <p className="text-center text-white/20 text-xs mt-6">
          Made with 🩷
        </p>
      </div>
    </div>
  );
}
