"use client";

import { useState } from "react";

export function HeroOrbs() {
  const [popped, setPopped] = useState(false);

  return (
    <button
      type="button"
      className={`olv-orb brand ${popped ? "popped" : ""}`}
      aria-label={popped ? "Restore recommendation" : "Pop the recommendation"}
      aria-pressed={popped}
      onClick={() => setPopped((current) => !current)}
    >
      <span className="olv-orb-sheen" aria-hidden="true" />
      <img src="/brand/olevy-mark.png" alt="" className="olv-orb-logo" />
    </button>
  );
}
