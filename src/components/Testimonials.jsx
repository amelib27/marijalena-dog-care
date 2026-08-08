import { useState } from "react";
import { testimonials } from "../data.js";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const next = () =>
    setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const visible = Array.from({ length: visibleCount }, (_, i) =>
    testimonials[(index + i) % testimonials.length]
  );

  return (
    <section className="testimonials" id="reviews">
      <div className="section testimonials-pad">
        <div className="section-head testimonials-head">
          <span className="kicker kicker-light">Reviews</span>
          <h2>What Düsseldorf's dogs (and owners) say</h2>
        </div>

        <div className="test-grid">
          {visible.map((t, i) => (
            <div className="test-card" key={t.who + i}>
              <div className="stars">{"★".repeat(t.stars)}</div>
              <p>"{t.text}"</p>
              <div className="who">— {t.who}</div>
            </div>
          ))}
        </div>

        <div className="test-controls">
          <button onClick={prev} aria-label="Previous review">
            ← Prev
          </button>
          <button onClick={next} aria-label="Next review">
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
