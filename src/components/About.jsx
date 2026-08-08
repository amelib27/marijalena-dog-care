import { profile } from "../data.js";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-photo">
        <span>🐾</span>
      </div>
      <div>
        <span className="kicker">About {profile.name.split(" ")[0]}</span>
        <blockquote>"{profile.quote}"</blockquote>
        <p className="small">{profile.bio}</p>
        <div className="about-contact">
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
    </section>
  );
}
