"use client";

import { useState } from "react";

const SIGNALS = [
  { id: "advance", label: "Advance Candidate X", hint: "91% fit" },
  { id: "fatigue", label: "Flag Friday fatigue", hint: "85% reject" },
  { id: "coach", label: "Coach Manager B", hint: "Variance" },
];

export function LoopBubbles() {
  const [popped, setPopped] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setPopped((current) => ({ ...current, [id]: !current[id] }));
  }

  return (
    <div className="loop-stage">
      <div className="loop-stage-copy">
        <p className="loop-kicker">Try the loop</p>
        <h2>
          <span className="loop-human">Pop one.</span>
          <span className="loop-rest">Or let it float.</span>
        </h2>
        <p>
          Three live signals. Click a bubble to pop it. Click again to let it return. That is the whole product.
        </p>
      </div>
      <div className="loop-field" aria-label="AI signals you can pop or leave">
        {SIGNALS.map((signal, index) => {
          const gone = Boolean(popped[signal.id]);
          return (
            <button
              key={signal.id}
              type="button"
              className={`loop-bubble b${index + 1} ${gone ? "popped" : ""}`}
              onClick={() => toggle(signal.id)}
              aria-pressed={gone}
            >
              <span className="loop-sheen" aria-hidden="true" />
              <span className="loop-bubble-label">{signal.label}</span>
              <span className="loop-bubble-hint">{gone ? "Popped — you acted" : signal.hint}</span>
            </button>
          );
        })}
        <p className="loop-hint">Click a bubble to pop it. Click again to let it return.</p>
      </div>
      <div className="loop-beats">
        <article>
          <span>01</span>
          <h3>AI floats the signal</h3>
          <p>Levy raises a recommendation from ATS and HRIS data you already have.</p>
        </article>
        <article>
          <span>02</span>
          <h3>You decide</h3>
          <p>Pop it to act — advance, flag, or coach — or let it float. The human stays in the loop.</p>
        </article>
        <article>
          <span>03</span>
          <h3>The next bubble learns</h3>
          <p>Your choice feeds the model, so the next signal is sharper and still yours to pop.</p>
        </article>
      </div>
    </div>
  );
}
