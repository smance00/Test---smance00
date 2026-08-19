"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  {
    id: "calibration",
    title: "Manager Calibration Over Time",
    desc: "Compare Team A vs. Team B. If Manager A interviews slowly but their hires stay 3 years, does their rigor justify the scheduling cost?",
  },
  {
    id: "attribution",
    title: "Feature Attribution Analytics",
    desc: "Isolate which pre-hire signals — a specific coding-test score vs. a cultural interview note — carry the highest mathematical correlation to high performance 18 months later.",
  },
  {
    id: "drift",
    title: "Process Drift Detection",
    desc: "Spot when a fast-growing engineering team's interview loops are actively slowing down quarter-over-quarter.",
  },
  {
    id: "augment",
    title: "Augmenting, Not Replacing Humans",
    desc: "The AI acts as an internal coach. It suggests workflow adjustments — e.g. “Team A's loop feels mechanical, candidate drop-out risk is high; prompt a 10-minute informal sync.”",
  },
];

function MetricRow({
  label,
  value,
  right,
  tone = "",
}: {
  label: string;
  value: number;
  right?: string;
  tone?: string;
}) {
  return (
    <div className="mrow">
      <div className="mrow-top">
        <span className="ml">{label}</span>
        {right ? <span className="mv">{right}</span> : null}
      </div>
      <div className="mtrack">
        <span className={`mfill ${tone}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Panel({ id }: { id: string }) {
  switch (id) {
    case "calibration":
      return (
        <div className="mock">
          <p className="mock-lb">Team calibration</p>
          <div className="mrow-hd">
            <span className="mh-t">Team A · deliberate</span>
            <span className="mh-tag on">3.1 yr tenure</span>
          </div>
          <MetricRow label="Interview speed" value={38} tone="mut" right="slow" />
          <div className="mock-div">
            <div className="mrow-hd">
              <span className="mh-t">Team B · fast</span>
              <span className="mh-tag">1.4 yr tenure</span>
            </div>
            <MetricRow label="Interview speed" value={86} right="fast" />
          </div>
        </div>
      );
    case "attribution":
      return (
        <div className="mock">
          <p className="mock-lb">Signal → 18-month performance</p>
          <MetricRow label="Take-home code score" value={91} right="0.91" />
          <MetricRow label="Referral source" value={64} right="0.64" />
          <MetricRow label="Culture interview note" value={29} tone="mut" right="0.29" />
          <MetricRow label="Years of experience" value={18} tone="mut" right="0.18" />
        </div>
      );
    case "drift":
      return (
        <div className="mock">
          <p className="mock-lb">Interview loop length · QoQ</p>
          <div className="drift">
            {[
              { q: "Q1", d: "11d", h: 32 },
              { q: "Q2", d: "14d", h: 48 },
              { q: "Q3", d: "19d", h: 68 },
              { q: "Q4", d: "26d", h: 92 },
            ].map((item, index) => (
              <div className="dcol" key={item.q}>
                <span className="dv">{item.d}</span>
                <span className={`dbar ${index === 3 ? "hot" : ""}`} style={{ height: `${item.h}px` }} />
                <span className="dq">{item.q}</span>
              </div>
            ))}
          </div>
          <p className="flagline">Loop slowing 2.4× — process drift flagged</p>
        </div>
      );
    case "augment":
      return (
        <div className="mock">
          <p className="mock-lb">Coaching suggestion</p>
          <div className="nudge">
            <span className="nl">
              <i /> Live nudge · Team A
            </span>
            <p className="nb">
              This loop feels mechanical — candidate drop-out risk is high. Prompt a 10-minute informal sync before the
              onsite.
            </p>
            <div className="nact">
              <span className="pill-primary">Apply nudge</span>
              <span className="pill-ghost">Not now</span>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function IntelligenceExplorer() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % ITEMS.length), 5000);
    return () => clearInterval(timer);
  }, [paused, reduced]);

  const active = ITEMS[index];

  return (
    <div className="expl">
      <div className="expl-head">
        <h3>See where hiring slows.</h3>
        <span className="expl-hint">(click to explore)</span>
      </div>
      <div className="expl-grid">
        <div role="tablist" aria-label="Where hiring slows" aria-orientation="vertical" className="expl-list">
          <span className="expl-cursor" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3l14 8.5-6.2 1.3L9.7 19 5 3z" stroke="var(--surface)" strokeWidth="1" />
            </svg>
          </span>
          {ITEMS.map((item, itemIndex) => (
            <button
              key={item.id}
              role="tab"
              id={`intel-tab-${item.id}`}
              aria-selected={itemIndex === index}
              aria-controls={`intel-panel-${item.id}`}
              tabIndex={itemIndex === index ? 0 : -1}
              className={`expl-opt ${itemIndex === index ? "on" : ""}`}
              onClick={() => {
                setIndex(itemIndex);
                setPaused(true);
              }}
            >
              <span className="ebar" aria-hidden="true" />
              <span className="en">{String(itemIndex + 1).padStart(2, "0")}</span>
              <span className="et">{item.title}</span>
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id={`intel-panel-${active.id}`}
          aria-labelledby={`intel-tab-${active.id}`}
          className="expl-detail reveal vis"
        >
          <p className="d">{active.desc}</p>
          <div className="expl-mock">
            <Panel id={active.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
