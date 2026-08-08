import { useState } from "react";

export default function Navbar({ onBookClick }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#areas", label: "Areas" },
    { href: "#about", label: "About" },
    { href: "#reviews", label: "Reviews" },
  ];

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="nav">
      <a href="#top" className="logo">
        <span className="paw">🐾</span> Marijalena
      </a>

      <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={handleLinkClick}>
            {l.label}
          </a>
        ))}
        <button
          className="nav-cta nav-cta-mobile"
          onClick={() => {
            handleLinkClick();
            onBookClick();
          }}
        >
          Get in touch
        </button>
      </div>

      <button className="nav-cta nav-cta-desktop" onClick={onBookClick}>
        Get in touch
      </button>

      <button
        className={`hamburger ${open ? "hamburger-open" : ""}`}
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
