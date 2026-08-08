import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <a href="#top" className="logo">
          <span className="paw">🐾</span> Marijalena
        </a>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          <a
            href={`https://instagram.com/${profile.instagram.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
          >
            {profile.instagram}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Marijalena's Dog Care</span>
        <span>Düsseldorf, Germany</span>
      </div>
    </footer>
  );
}
