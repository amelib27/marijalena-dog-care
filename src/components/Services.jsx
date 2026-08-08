import { useState } from "react";
import { services } from "../data.js";

export default function Services({ onSelectService }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (service) => {
    setSelected(service.id);
    onSelectService(service.name);
  };

  return (
    <section className="section" id="services">
      <div className="section-head">
        <span className="kicker">Services</span>
        <h2>Care that fits your dog's day, not the other way around.</h2>
      </div>
      <div className="services-row">
        {services.map((service, i) => (
          <button
            key={service.id}
            className={`service-card ${i === 1 ? "service-card-alt" : ""} ${
              selected === service.id ? "service-card-selected" : ""
            }`}
            onClick={() => handleClick(service)}
          >
            <div className="paw-mark">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <div className="price">{service.price}</div>
            <div className="card-cta">
              {selected === service.id ? "Selected ✓" : "Book this →"}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
