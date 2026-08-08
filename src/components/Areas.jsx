import { useState } from "react";
import { areas } from "../data.js";

export default function Areas() {
  const [active, setActive] = useState(areas[0]);

  return (
    <section className="areas" id="areas">
      <div className="section areas-section-pad">
        <div className="areas-inner">
          <div>
            <span className="kicker">Coverage</span>
            <h2>Wherever you are in Düsseldorf, she's nearby.</h2>
            <p className="areas-note">
              Tap a district to see it highlighted. Not listed? Ask — she
              often makes exceptions for regulars.
            </p>
            <p className="areas-active">
              Currently showing: <strong>{active}</strong>
            </p>
          </div>
          <div className="area-list">
            {areas.map((area) => (
              <button
                key={area}
                className={`area-pill ${active === area ? "area-pill-active" : ""}`}
                onClick={() => setActive(area)}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
