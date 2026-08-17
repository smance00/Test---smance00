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
        <h3>We&apos;ll be in touch.</h3>
        <p className="demo-form-lead">
          Your request is ready to send. If your mail app didn&apos;t open, email{" "}
          <a href="mailto:info@joinolevy.com">info@joinolevy.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="demo-form reveal" onSubmit={onSubmit} id="request-demo">
      <h3>Request a demo</h3>
      <p className="demo-form-lead">Schedule a 30-minute product demo with a real, live person.</p>
      <label>
        <span>
          <i aria-hidden="true">*</i> First Name:
        </span>
        <input
          type="text"
          name="firstName"
          autoComplete="given-name"
          required
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label>
        <span>
          <i aria-hidden="true">*</i> Last Name:
        </span>
        <input
          type="text"
          name="lastName"
          autoComplete="family-name"
          required
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label>
        <span>
          <i aria-hidden="true">*</i> Email Address:
        </span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      {error ? <p className="demo-error">{error}</p> : null}
      <button type="submit" className="demo-submit">
        Get Started
      </button>
      <p className="demo-legal">
        By submitting your information, you agree to Olevy&apos;s{" "}
        <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>. You can opt out anytime.
      </p>
    </form>
  );
}
