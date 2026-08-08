export default function CTA({ onBookClick }) {
  return (
    <section className="cta-band" id="contact">
      <span className="kicker">Get started</span>
      <h2>Let's set up a meet &amp; greet.</h2>
      <button className="btn-primary" onClick={onBookClick}>
        Book now →
      </button>
    </section>
  );
}
