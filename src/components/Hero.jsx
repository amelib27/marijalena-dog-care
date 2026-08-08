export default function Hero({ onBookClick }) {
  return (
    <>
      <section className="hero" id="top">
        <span className="eyebrow">Based in Düsseldorf, walking daily</span>
        <h1>
          While you're busy, <br />
          <span className="accent">someone's</span> at the park.
        </h1>
        <p className="hero-sub">
          Marijalena looks after dogs across Düsseldorf — walks, drop-in
          visits, and overnight stays, with photo updates so you never miss a
          wag.
        </p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={onBookClick}>
            Book a meet &amp; greet
          </button>
          <a href="#services" className="btn-secondary">
            See services →
          </a>
        </div>
      </section>

      <svg className="trail" viewBox="0 0 1100 60" preserveAspectRatio="none">
        <path
          d="M0,30 C150,0 300,60 450,30 C600,0 750,60 900,30 C1000,10 1050,50 1100,30"
          fill="none"
          stroke="#24392E"
          strokeWidth="2"
          strokeDasharray="1,14"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    </>
  );
}
