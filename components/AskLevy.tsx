export function AskLevy() {
  return (
    <div className="levy-chat" id="ask-levy" aria-label="Ask Levy">
      <div className="levy-head">
        <span className="levy-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3M6.2 6.2l2.1 2.1M15.7 15.7l2.1 2.1M17.8 6.2l-2.1 2.1M8.3 15.7l-2.1 2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
          </svg>
        </span>
        <strong>Ask Levy</strong>
      </div>
      <div className="levy-thread">
        <div className="levy-msg you">
          <span className="levy-who">You</span>
          <p>
            I am opening a new Account Manager role for talent. What characteristics have proven to be successful in this role from previous placements?
          </p>
        </div>
        <div className="levy-msg levy">
          <span className="levy-who">Levy</span>
          <p>
            Successful Account Managers on this team share three traits: they ran multi-threaded accounts (economic buyer plus a champion), they forecasted from pipeline evidence rather than hope, and they stayed in the role past 18 months.
          </p>
          <p>
            Prioritize mid-market or enterprise AM/AE experience with a documented 90-day ramp and a clean closer handoff. Skip hunter-only profiles unless the seat is entirely new.
          </p>
        </div>
        <div className="levy-msg you">
          <span className="levy-who">You</span>
          <p>What questions do you recommend that I ask?</p>
        </div>
      </div>
      <div className="levy-compose">
        <label className="sr-only" htmlFor="levy-question">
          Ask a hiring question
        </label>
        <input
          id="levy-question"
          type="text"
          readOnly
          placeholder="Ask a hiring question..."
        />
        <button type="button" aria-label="Send" className="levy-send">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
