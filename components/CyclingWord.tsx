"use client";

import { useEffect, useState } from "react";

const WORDS = ["engineers", "designers", "marketers", "operators", "recruiters"];

export function CyclingWord() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setIndex((current) => (current + 1) % WORDS.length);
        setPhase("in");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setPhase(""));
        });
      }, 350);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="cyc" aria-live="polite">
      <span className={`cyc-word ${phase}`}>{WORDS[index]}</span>
    </span>
  );
}
