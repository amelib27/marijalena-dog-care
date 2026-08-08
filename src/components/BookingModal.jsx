import { useState, useEffect } from "react";
import { services } from "../data.js";

export default function BookingModal({ open, onClose, presetService }) {
  const [form, setForm] = useState({
    name: "",
    dogName: "",
    service: services[0].name,
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (presetService) {
      setForm((f) => ({ ...f, service: presetService }));
    }
  }, [presetService]);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setError("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.dogName || !form.date) {
      setError("Please fill in your name, your dog's name, and a date.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {!submitted ? (
          <>
            <span className="kicker">Book a visit</span>
            <h2 className="modal-title">Let's meet your dog.</h2>
            <p className="modal-sub">
              This is a demo form — no booking is actually sent anywhere.
            </p>
            <form onSubmit={handleSubmit} className="booking-form">
              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Anna Schmidt"
                />
              </label>
              <label>
                Dog's name
                <input
                  type="text"
                  name="dogName"
                  value={form.dogName}
                  onChange={handleChange}
                  placeholder="Bruno"
                />
              </label>
              <label>
                Service
                <select name="service" value={form.service} onChange={handleChange}>
                  {services.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Preferred date
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </label>
              <label>
                Anything Marijalena should know?
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Bruno is friendly but pulls on the leash..."
                />
              </label>

              {error && <p className="form-error">{error}</p>}

              <button type="submit" className="btn-primary btn-full">
                Send request
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="success-paw">🐾</div>
            <h2 className="modal-title">Request sent!</h2>
            <p className="modal-sub">
              Thanks, {form.name.split(" ")[0] || "there"}! Marijalena will
              reach out about {form.dogName || "your dog"}'s{" "}
              {form.service.toLowerCase()} on {form.date || "your chosen date"}.
            </p>
            <button className="btn-primary btn-full" onClick={onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
