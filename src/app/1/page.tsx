import { experiences } from "@/lib/experience-data";
import {
  about,
  skills,
  education,
  certifications,
  contactLinks,
} from "@/lib/resume-data";
import { Linkedin, Github, Mail, Youtube, GraduationCap, Award, Download } from "lucide-react";

export default function BrutalistTimeline() {
  const contactIcons: Record<string, React.ReactNode> = {
    linkedin: <Linkedin size={20} />,
    github: <Github size={20} />,
    email: <Mail size={20} />,
    youtube: <Youtube size={20} />,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Bebas+Neue&display=swap');

        html { scroll-behavior: smooth; }

        .brutalist-page {
          font-family: 'Space Mono', monospace;
          background: #f5f5f0;
          color: #0a0a0a;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .brutalist-page::before {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 49px, #ddd 49px, #ddd 50px),
            repeating-linear-gradient(90deg, transparent, transparent 49px, #ddd 49px, #ddd 50px);
          opacity: 0.3;
          pointer-events: none;
          z-index: 0;
        }

        /* ===== HEADER ===== */
        .brutalist-header {
          border-bottom: 8px solid #0a0a0a;
          padding: 60px 40px 40px;
          position: relative;
          z-index: 1;
        }

        .brutalist-header h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 10vw, 9rem);
          line-height: 0.85;
          letter-spacing: -3px;
          text-transform: uppercase;
          margin: 0;
          color: #0a0a0a;
        }

        .brutalist-header .subtitle {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 6px;
          margin-top: 16px;
          color: #e63946;
          font-weight: 700;
          border-top: 3px solid #e63946;
          display: inline-block;
          padding-top: 8px;
        }

        .brutalist-download {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          position: absolute;
          top: 40px;
          right: 40px;
          padding: 14px 28px;
          background: #0a0a0a;
          color: #fff;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-decoration: none;
          border: 3px solid #0a0a0a;
          transition: all 0.15s ease;
        }

        .brutalist-download:hover {
          background: #e63946;
          border-color: #e63946;
          transform: translate(-3px, -3px);
          box-shadow: 6px 6px 0 #0a0a0a;
        }

        /* ===== NAV ===== */
        .brutalist-nav {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          border-bottom: 4px solid #0a0a0a;
        }

        .brutalist-nav a {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-decoration: none;
          color: #0a0a0a;
          padding: 14px 24px;
          border-right: 2px solid #0a0a0a;
          transition: all 0.15s ease;
        }

        .brutalist-nav a:hover {
          background: #e63946;
          color: #fff;
        }

        /* ===== SECTION TITLE ===== */
        .brutalist-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          text-transform: uppercase;
          letter-spacing: 4px;
          padding: 40px 40px 20px;
          border-bottom: 4px solid #0a0a0a;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .brutalist-section-title::before {
          content: '■';
          color: #e63946;
          font-size: 0.6em;
        }

        /* ===== ABOUT ===== */
        .brutalist-about {
          position: relative;
          z-index: 1;
          padding: 40px;
          border-bottom: 4px solid #0a0a0a;
        }

        .brutalist-about-inner {
          border: 4px solid #0a0a0a;
          padding: 36px;
          position: relative;
          background: #fff;
        }

        .brutalist-about-inner::before {
          content: '//ABOUT';
          position: absolute;
          top: -12px;
          left: 24px;
          background: #e63946;
          color: #fff;
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 3px;
          padding: 2px 12px;
        }

        .brutalist-about p {
          font-size: 0.82rem;
          line-height: 1.9;
          color: #333;
          margin: 0;
        }

        /* ===== SKILLS ===== */
        .brutalist-skills {
          position: relative;
          z-index: 1;
          padding: 40px;
          border-bottom: 4px solid #0a0a0a;
        }

        .brutalist-skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
        }

        .brutalist-skill {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 12px 20px;
          border: 2px solid #0a0a0a;
          margin: -1px;
          transition: all 0.15s ease;
          cursor: default;
        }

        .brutalist-skill:nth-child(4n+1) {
          background: #fff;
          color: #0a0a0a;
        }
        .brutalist-skill:nth-child(4n+2) {
          background: #0a0a0a;
          color: #fff;
        }
        .brutalist-skill:nth-child(4n+3) {
          background: #e63946;
          color: #fff;
        }
        .brutalist-skill:nth-child(4n+4) {
          background: #fff;
          color: #e63946;
          border-color: #e63946;
        }

        .brutalist-skill:hover {
          background: #e63946;
          color: #fff;
          border-color: #e63946;
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 #0a0a0a;
        }

        /* ===== TIMELINE ===== */
        .timeline-container {
          position: relative;
          z-index: 1;
          padding: 0 40px;
        }

        .timeline-line {
          position: absolute;
          left: 80px;
          top: 0; bottom: 0;
          width: 4px;
          background: #0a0a0a;
        }

        .experience-block {
          position: relative;
          padding: 40px 0 40px 80px;
          border-bottom: 2px solid #0a0a0a;
          transition: background 0.2s ease;
        }

        .experience-block:hover {
          background: rgba(230, 57, 70, 0.04);
        }

        .experience-block::before {
          content: '';
          position: absolute;
          left: -12px;
          top: 48px;
          width: 28px; height: 28px;
          background: #e63946;
          border: 4px solid #0a0a0a;
          z-index: 2;
        }

        .experience-block:hover::before {
          background: #0a0a0a;
        }

        .exp-date {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          letter-spacing: 3px;
          color: #e63946;
          margin-bottom: 4px;
        }

        .exp-role {
          font-size: 1.1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.3;
          margin-bottom: 2px;
        }

        .exp-company {
          font-size: 0.8rem;
          color: #555;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 2px dashed #ccc;
        }

        .exp-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .exp-bullets li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 10px;
          font-size: 0.78rem;
          line-height: 1.6;
          color: #333;
        }

        .exp-bullets li::before {
          content: '//';
          position: absolute;
          left: 0;
          color: #e63946;
          font-weight: 700;
        }

        .exp-bullets li strong {
          color: #0a0a0a;
          text-transform: uppercase;
          font-size: 0.72rem;
          letter-spacing: 1px;
        }

        .brutalist-idx {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          color: rgba(230, 57, 70, 0.12);
          position: absolute;
          right: 20px;
          top: 20px;
          line-height: 1;
        }

        /* ===== EDUCATION ===== */
        .brutalist-education {
          position: relative;
          z-index: 1;
          padding: 40px;
          border-bottom: 4px solid #0a0a0a;
        }

        .brutalist-edu-card {
          border: 4px solid #0a0a0a;
          background: #fff;
          display: flex;
          align-items: stretch;
          overflow: hidden;
        }

        .brutalist-edu-icon {
          width: 100px;
          background: #0a0a0a;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .brutalist-edu-info {
          padding: 28px 32px;
          flex: 1;
        }

        .brutalist-edu-info h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          letter-spacing: 2px;
          margin: 0 0 4px;
          text-transform: uppercase;
        }

        .brutalist-edu-degree {
          font-size: 0.82rem;
          color: #333;
          margin-bottom: 12px;
        }

        .brutalist-edu-meta {
          display: flex;
          gap: 0;
        }

        .brutalist-edu-meta span {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 16px;
          border: 2px solid #0a0a0a;
          margin-right: -2px;
        }

        .brutalist-edu-meta .meta-year {
          background: #e63946;
          color: #fff;
          border-color: #e63946;
        }

        .brutalist-edu-meta .meta-gpa {
          background: #0a0a0a;
          color: #fff;
        }

        /* ===== CERTIFICATIONS ===== */
        .brutalist-certs {
          position: relative;
          z-index: 1;
          padding: 40px;
          border-bottom: 4px solid #0a0a0a;
        }

        .brutalist-certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 0;
        }

        .brutalist-cert-card {
          border: 4px solid #0a0a0a;
          padding: 28px;
          background: #fff;
          margin: -2px;
          transition: all 0.15s ease;
          position: relative;
        }

        .brutalist-cert-card:hover {
          background: #e63946;
          color: #fff;
          transform: translate(-3px, -3px);
          box-shadow: 6px 6px 0 #0a0a0a;
        }

        .brutalist-cert-icon {
          width: 48px; height: 48px;
          border: 3px solid #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          background: #f5f5f0;
        }

        .brutalist-cert-card:hover .brutalist-cert-icon {
          background: #fff;
          color: #e63946;
        }

        .brutalist-cert-card h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin: 0 0 6px;
        }

        .brutalist-cert-card p {
          font-size: 0.78rem;
          color: #555;
          margin: 0;
          line-height: 1.5;
        }

        .brutalist-cert-card:hover p {
          color: rgba(255, 255, 255, 0.8);
        }

        /* ===== CONTACT ===== */
        .brutalist-contact {
          position: relative;
          z-index: 1;
          padding: 40px;
          border-bottom: 4px solid #0a0a0a;
        }

        .brutalist-contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 0;
        }

        .brutalist-contact-link {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          border: 3px solid #0a0a0a;
          margin: -1.5px;
          text-decoration: none;
          color: #0a0a0a;
          background: #fff;
          transition: all 0.15s ease;
        }

        .brutalist-contact-link:hover {
          background: #0a0a0a;
          color: #fff;
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 #e63946;
        }

        .brutalist-contact-icon {
          width: 44px; height: 44px;
          border: 3px solid currentColor;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .brutalist-contact-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .brutalist-contact-handle {
          font-size: 0.65rem;
          color: #888;
          letter-spacing: 0.5px;
          margin-top: 1px;
          word-break: break-all;
        }

        .brutalist-contact-link:hover .brutalist-contact-handle {
          color: rgba(255, 255, 255, 0.6);
        }

        /* ===== FOOTER ===== */
        .brutalist-footer {
          border-top: 8px solid #0a0a0a;
          padding: 30px 40px;
          font-size: 0.7rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          text-align: center;
          position: relative;
          z-index: 1;
          color: #999;
        }

        @media (max-width: 768px) {
          .brutalist-header { padding: 30px 20px 20px; }
          .brutalist-download {
            position: static;
            margin-top: 16px;
            padding: 12px 20px;
            font-size: 0.65rem;
          }
          .brutalist-section-title { padding: 30px 20px 15px; font-size: 2.5rem; }
          .brutalist-nav {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            border-bottom: none;
          }
          .brutalist-nav a {
            padding: 14px 10px;
            font-size: 0.6rem;
            text-align: center;
            border: 1px solid #0a0a0a;
            border-right: none;
          }
          .brutalist-nav a:nth-child(3n) {
            border-right: 1px solid #0a0a0a;
          }
          .timeline-container { padding: 0 20px; }
          .timeline-line { left: 50px; }
          .experience-block { padding: 30px 0 30px 50px; }
          .experience-block::before { left: -14px; width: 24px; height: 24px; }
          .brutalist-idx { font-size: 2.5rem; }
          .brutalist-about, .brutalist-skills, .brutalist-education,
          .brutalist-certs, .brutalist-contact { padding: 30px 20px; }
          .brutalist-edu-card { flex-direction: column; }
          .brutalist-edu-icon { width: 100%; height: 60px; }
          .brutalist-contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="brutalist-page">
        <div className="brutalist-header">
          <h1>Kittitat<br />Upaphong</h1>
          <div className="subtitle">Software Engineering Lead / 10+ Years / 2014—Present</div>
          <a
            href="/files/Kittitat_Upaphong_Resume.pdf"
            download
            className="brutalist-download"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <nav className="brutalist-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certs</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* ===== ABOUT ===== */}
        <div id="about" className="brutalist-section-title">About</div>
        <div className="brutalist-about">
          <div className="brutalist-about-inner">
            <p>
              <strong>Software Engineering Lead</strong> with over <strong>10 years of experience</strong> spanning diverse domains including <strong>Web, Mobile, VR, and Blockchain</strong>. My career demonstrates a proven track record with industry giants like <strong>True Digital Group</strong> and <strong>PTTEP</strong>, as well as scaling high-growth startups like <strong>Zanroo</strong> from inception to <strong>Series-A funding</strong>. Currently <strong>leading a team of 7-10 developers</strong>, I am passionate about evolving traditional development workflows by integrating <strong>AI-driven architectures (MCP, Sub-agents)</strong> to maximize efficiency. I thrive in collaborative environments and am seeking to join a team of talented, positive-minded professionals where we can <strong>push technological boundaries together</strong>.
            </p>
          </div>
        </div>

        {/* ===== SKILLS ===== */}
        <div id="skills" className="brutalist-section-title">Skills</div>
        <div className="brutalist-skills">
          <div className="brutalist-skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="brutalist-skill">{skill}</div>
            ))}
          </div>
        </div>

        {/* ===== EXPERIENCE ===== */}
        <div id="experience" className="brutalist-section-title">Experience</div>
        <div className="timeline-container">
          <div className="timeline-line" />
          {experiences.map((exp, i) => (
            <div key={i} className="experience-block">
              <div className="brutalist-idx">{String(i + 1).padStart(2, "0")}</div>
              <div className="exp-date">
                {exp.startDate} — {exp.endDate}
              </div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-company">
                {exp.company} · {exp.location}
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>
                    <strong>{b.title}:</strong> {b.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===== EDUCATION ===== */}
        <div id="education" className="brutalist-section-title">Education</div>
        <div className="brutalist-education">
          <div className="brutalist-edu-card">
            <div className="brutalist-edu-icon">
              <GraduationCap size={36} />
            </div>
            <div className="brutalist-edu-info">
              <h3>{education.institution}</h3>
              <div className="brutalist-edu-degree">{education.degree}</div>
              <div className="brutalist-edu-meta">
                <span className="meta-year">{education.startYear}–{education.endYear}</span>
                <span className="meta-gpa">GPA {education.gpa}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CERTIFICATIONS ===== */}
        <div id="certifications" className="brutalist-section-title">Certifications</div>
        <div className="brutalist-certs">
          <div className="brutalist-certs-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="brutalist-cert-card">
                <div className="brutalist-cert-icon">
                  <Award size={22} />
                </div>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CONTACT ===== */}
        <div id="contact" className="brutalist-section-title">Contact</div>
        <div className="brutalist-contact">
          <div className="brutalist-contact-grid">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.icon !== "email" ? "_blank" : undefined}
                rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
                className="brutalist-contact-link"
              >
                <div className="brutalist-contact-icon">
                  {contactIcons[link.icon]}
                </div>
                <div>
                  <div className="brutalist-contact-label">{link.label}</div>
                  <div className="brutalist-contact-handle">
                    {link.icon === "email"
                      ? "tat.kittitat@gmail.com"
                      : link.url.replace(/https?:\/\//, "").replace(/\/$/, "")}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="brutalist-footer">
          Design 01 — Brutalist Timeline — resume.bytat.dev
        </div>
      </div>
    </>
  );
}
