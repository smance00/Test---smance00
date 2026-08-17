function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function InterviewsMock() {
  return (
    <div className="slows-mock">
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
}

function ManagerMock() {
  return (
    <div className="slows-mock">
      <p className="mock-lb">Subjective-trait scoring audit</p>
      <div className="bias">
        {[
          { m: "Manager J", a: 84, b: 82, flag: false },
          { m: "Manager K", a: 88, b: 71, flag: true },
          { m: "Manager L", a: 79, b: 80, flag: false },
        ].map((row) => (
          <div className="biasrow" key={row.m}>
            <span className="bm">{row.m}</span>
            <span className="bs">
              {row.a} <span className="bo">/</span> {row.b}
            </span>
            <span className={`btag ${row.flag ? "am" : ""}`}>{row.flag ? "Variance" : "OK"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OutcomesMock() {
  return (
    <div className="slows-mock">
      <p className="mock-lb">Signal → 18-month performance</p>
      <div className="mrow">
        <div className="mrow-top">
          <span className="ml">Take-home code score</span>
          <span className="mv">0.91</span>
        </div>
        <div className="mtrack">
          <span className="mfill" style={{ width: "91%" }} />
        </div>
      </div>
      <div className="mrow">
        <div className="mrow-top">
          <span className="ml">Referral source</span>
          <span className="mv">0.64</span>
        </div>
        <div className="mtrack">
          <span className="mfill" style={{ width: "64%" }} />
        </div>
      </div>
      <div className="mrow">
        <div className="mrow-top">
          <span className="ml">Culture interview note</span>
          <span className="mv">0.29</span>
        </div>
        <div className="mtrack">
          <span className="mfill mut" style={{ width: "29%" }} />
        </div>
      </div>
    </div>
  );
}

const CARDS = [
  {
    id: "interviews",
    title: "Interviews",
    glow: "pink",
    desc: "Spot when interview loops are slowing down quarter-over-quarter, and flag fatigue before it costs a great candidate.",
    Mock: InterviewsMock,
  },
  {
    id: "managers",
    title: "Manager behavior",
    glow: "gold",
    desc: "Compare scoring history across managers to see whose rigor pays off — and automatically flag calibration variance.",
    Mock: ManagerMock,
  },
  {
    id: "outcomes",
    title: "Hiring outcomes",
    glow: "mint",
    desc: "Isolate which pre-hire signals actually correlate to performance later, so the next shortlist is built on who worked out.",
    Mock: OutcomesMock,
  },
];

export function HiringSlowsCards() {
  return (
    <div className="slows" id="hiring-slows">
      <div className="slows-head reveal">
        <div className="slows-lead">
          <a className="slows-pill" href="#hiring-slows">
            Human in the Loop <ArrowIcon />
          </a>
          <h2>See where hiring slows.</h2>
        </div>
        <div className="slows-copy">
          <p>
            Surface patterns across interviews, manager behavior, and hiring outcomes to understand where risk is forming and what consistently leads to stronger hires. Use those insights to refine the process and improve the decisions that follow.
          </p>
          <a className="textlink" href="#ask-levy">
            Learn more <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="slows-cards">
        {CARDS.map(({ id, title, glow, desc, Mock }) => (
          <article className={`slows-card reveal glow-${glow}`} key={id}>
            <div className="slows-visual">
              <span className="slows-glow" aria-hidden="true" />
              <Mock />
            </div>
            <div className="slows-body">
              <div className="slows-title">
                <h3>{title}</h3>
                <a className="slows-go" href="#ask-levy" aria-label={`Learn more about ${title}`}>
                  <ArrowIcon />
                </a>
              </div>
              <p>{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
