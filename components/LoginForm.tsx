"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, KeyRound, LoaderCircle, Mail } from "lucide-react";
import { isValidEmail } from "@/lib/utils";

export function LoginForm() {
  const router = useRouter();
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [devCode, setDevCode] = useState<string | null>(null);

  async function requestCode(event: FormEvent) {
    event.preventDefault();
    setError(null);
    if (!isValidEmail(email)) {
      setError("Enter a valid email.");
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 450));
    const generated = String(Math.floor(100000 + Math.random() * 900000));
    sessionStorage.setItem("olevy-otp", generated);
    sessionStorage.setItem("olevy-email", email);
    setDevCode(generated);
    setStep("code");
    setLoading(false);
  }

  async function verifyCode(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 450));
    const expected = sessionStorage.getItem("olevy-otp");
    if (code !== expected) {
      setError("Invalid code.");
      setLoading(false);
      return;
    }
    sessionStorage.setItem("olevy-session", email);
    router.replace("/dashboard");
  }

  return (
    <div className="w-full max-w-sm animate-fade-in">
      <h2 className="heading text-3xl">
        {step === "email" ? "Welcome to Olevy" : "Check your inbox"}
      </h2>
      <p className="mt-2 text-sm text-muted">
        {step === "email"
          ? "We'll email you a one-time code — no passwords."
          : `We sent a 6-digit code to ${email}.`}
      </p>

      {step === "email" ? (
        <form onSubmit={requestCode} className="mt-7 space-y-4">
          <div>
            <label className="label" htmlFor="email">
              Email address
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                id="email"
                type="email"
                autoFocus
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="input pl-10"
              />
            </div>
          </div>
          {error ? <p className="text-sm text-red-500">{error}</p> : null}
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <>
                Send code <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={verifyCode} className="mt-7 space-y-4">
          {devCode ? (
            <div className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm">
              <span className="font-semibold text-fg">Dev mode</span>
              <span className="text-muted"> — no email provider set. Your code is </span>
              <span className="font-mono font-bold text-brand">{devCode}</span>
            </div>
          ) : null}
          <div>
            <label className="label" htmlFor="code">
              One-time code
            </label>
            <div className="relative">
              <KeyRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                id="code"
                inputMode="numeric"
                autoFocus
                required
                maxLength={6}
                value={code}
                onChange={(event) => setCode(event.target.value.replace(/\D/g, ""))}
                placeholder="••••••"
                className="input pl-10 text-center text-lg font-mono tracking-[0.5em]"
              />
            </div>
          </div>
          {error ? <p className="text-sm text-red-500">{error}</p> : null}
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Verify & continue"}
          </button>
          <button
            type="button"
            onClick={() => {
              setStep("email");
              setCode("");
              setError(null);
            }}
            className="btn-ghost w-full"
          >
            Use a different email
          </button>
        </form>
      )}

      <p className="mt-8 text-center text-xs text-muted">
        By continuing you agree to Olevy&apos;s curated community guidelines.
      </p>
    </div>
  );
}
