"use client";

import { FormEvent, useState } from "react";
import { isValidEmail } from "@/lib/utils";

export function DemoRequestForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    if (!firstName.trim() || !lastName.trim()) {
      setError("Enter your first and last name.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Enter a valid email.");
      return;
    }

    const subject = encodeURIComponent("Request a demo with Olevy");
    const body = encodeURIComponent(
      `First name: ${firstName.trim()}\nLast name: ${lastName.trim()}\nEmail: ${email.trim()}\n\nI'd like to request a demo of Olevy.`,
    );
    window.location.href = `mailto:info@joinolevy.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="demo-form reveal vis">
        <p className="demo-form-kicker">Request a demo</p>
        <h3>We&apos;ll be in touch.</h3>
        <p className="demo-form-note">
          Your request is ready to send. If your mail app didn&apos;t open, email{" "}
          <a href="mailto:info@joinolevy.com">info@joinolevy.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="demo-form reveal" onSubmit={onSubmit} id="request-demo">
      <p className="demo-form-kicker">Request a demo</p>
      <h3>See Olevy on your hiring data.</h3>
      <div className="demo-row">
        <label>
          First name
          <input
            type="text"
            name="firstName"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Jordan"
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            autoComplete="family-name"
            required
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Lee"
          />
        </label>
      </div>
      <label>
        Email
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
        />
      </label>
      {error ? <p className="demo-error">{error}</p> : null}
      <button type="submit" className="demo-submit">
        Request a demo
      </button>
    </form>
  );
}
