"use client";

import { useState } from "react";

const ORBS = ["a", "b", "c"] as const;

export function HeroOrbs() {
  const [popped, setPopped] = useState<Record<string, boolean>>({});

  return (
    <div className="olv-open-art">
      {ORBS.map((id) => (
        <button
          key={id}
          type="button"
          className={`olv-orb ${id} ${popped[id] ? "popped" : ""}`}
          aria-label={popped[id] ? "Restore recommendation" : "Act on recommendation"}
          aria-pressed={Boolean(popped[id])}
          onClick={() => setPopped((current) => ({ ...current, [id]: !current[id] }))}
        />
      ))}
    </div>
  );
}
