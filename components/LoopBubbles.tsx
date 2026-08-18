"use client";

import { useState } from "react";

const SIGNALS = [
  { id: "advance", label: "Advance Candidate X", hint: "91% fit" },
  { id: "fatigue", label: "Flag Friday fatigue", hint: "85% reject" },
  { id: "coach", label: "Coach Manager B", hint: "Variance" },
];

export function LoopBubbles() {
  const [acted, setActed] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setActed((current) => ({ ...current, [id]: !current[id] }));
  }

  return (
    <div className="loop-stage">
      <div className="loop-stage-copy">
        <p className="loop-kicker">In practice</p>
        <h2>
          <span className="loop-human">A recommendation.</span>
          <span className="loop-rest">Then a person.</span>
        </h2>
        <p>
          Three examples from a hiring process. Act on one, or leave it. The model notices either way.
        </p>
      </div>
      <div className="loop-field" aria-label="Example hiring recommendations">
        {SIGNALS.map((signal, index) => {
          const done = Boolean(acted[signal.id]);
          return (
            <button
              key={signal.id}
              type="button"
              className={`loop-bubble b${index + 1} ${done ? "popped" : ""}`}
              onClick={() => toggle(signal.id)}
              aria-pressed={done}
            >
              <span className="loop-sheen" aria-hidden="true" />
              <span className="loop-bubble-label">{signal.label}</span>
              <span className="loop-bubble-hint">{done ? "Acted" : signal.hint}</span>
            </button>
          );
        })}
        <p className="loop-hint">Click a recommendation to act. Click again to undo.</p>
      </div>
      <div className="loop-beats">
        <article>
          <span>01</span>
          <h3>Olevy surfaces a signal</h3>
          <p>A recommendation from the ATS and HRIS data you already have.</p>
        </article>
        <article>
          <span>02</span>
          <h3>You decide</h3>
          <p>Advance, flag, coach — or dismiss. The hiring manager stays in control.</p>
        </article>
        <article>
          <span>03</span>
          <h3>The model learns</h3>
          <p>Your choice feeds the next recommendation, still yours to accept or ignore.</p>
        </article>
      </div>
    </div>
  );
}
