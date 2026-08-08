import { useState } from "react";
import { steps } from "../data.js";

export default function HowItWorks() {
  const [openStep, setOpenStep] = useState(0);

  return (
    <section className="section steps">
      <div className="section-head">
        <span className="kicker">How it works</span>
        <h2>Three steps, then it's routine.</h2>
      </div>
      {steps.map((step, i) => (
        <div
          className={`step-row ${openStep === i ? "step-row-active" : ""}`}
          key={step.num}
          onClick={() => setOpenStep(openStep === i ? -1 : i)}
        >
          <div className="step-num">{step.num}</div>
          <div className="step-text">
            <h3>{step.title}</h3>
            {openStep === i && <p>{step.text}</p>}
          </div>
          <div className="step-toggle">{openStep === i ? "–" : "+"}</div>
        </div>
      ))}
    </section>
  );
}
