
import { experiences } from "@/lib/experience-data";

export default function BrutalistTimeline() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Bebas+Neue&display=swap');

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
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 49px, #ddd 49px, #ddd 50px),
            repeating-linear-gradient(90deg, transparent, transparent 49px, #ddd 49px, #ddd 50px);
          opacity: 0.3;
          pointer-events: none;
          z-index: 0;
        }

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

        .timeline-container {
          position: relative;
          z-index: 1;
          padding: 0 40px;
        }

        .timeline-line {
          position: absolute;
          left: 80px;
          top: 0;
          bottom: 0;
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
          width: 28px;
          height: 28px;
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

        .brutalist-idx {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 4rem;
          color: rgba(230, 57, 70, 0.12);
          position: absolute;
          right: 20px;
          top: 20px;
          line-height: 1;
        }

        @media (max-width: 768px) {
          .brutalist-header { padding: 30px 20px 20px; }
          .brutalist-section-title { padding: 30px 20px 15px; font-size: 2.5rem; }
          .timeline-container { padding: 0 20px; }
          .timeline-line { left: 50px; }
          .experience-block { padding: 30px 0 30px 50px; }
          .experience-block::before { left: -14px; width: 24px; height: 24px; }
          .brutalist-idx { font-size: 2.5rem; }
        }
      `}</style>

      <div className="brutalist-page">
        <div className="brutalist-header">
          <h1>Kittitat<br />Upaphong</h1>
          <div className="subtitle">Experience / Work History / 2014—Present</div>
        </div>

        <div className="brutalist-section-title">Experience</div>

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

        <div className="brutalist-footer">
          Design 01 — Brutalist Timeline — resume.bytat.dev
        </div>
      </div>
    </>
  );
}
