
import { experiences } from "@/lib/experience-data";

export default function BentoGrid() {
  const gridSpans = [
    "bento-wide", "bento-tall", "bento-normal", "bento-normal",
    "bento-wide", "bento-normal", "bento-tall", "bento-normal",
    "bento-normal", "bento-wide",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700&family=Noto+Sans+JP:wght@300;400;700;900&display=swap');

        .bento-page {
          font-family: 'DM Sans', sans-serif;
          background: #f7f4ed;
          color: #2c2c2c;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .bento-header {
          padding: 60px 48px 48px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .bento-header .overline {
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: #b8a88a;
          margin-bottom: 12px;
        }

        .bento-header h1 {
          font-family: 'Noto Sans JP', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 1.05;
          margin: 0 0 12px;
          color: #1a1a1a;
          letter-spacing: -1px;
        }

        .bento-header .desc {
          font-size: 1rem;
          color: #888;
          font-weight: 300;
          max-width: 560px;
          line-height: 1.6;
        }

        .bento-section-label {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 48px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .bento-section-label h2 {
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: #b8a88a;
          white-space: nowrap;
        }

        .bento-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #ddd5c3;
        }

        .bento-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 48px 60px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(220px, auto);
          gap: 16px;
        }

        .bento-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
        }

        .bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.08);
        }

        .bento-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--bento-accent, #b8a88a);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .bento-card:hover::after {
          opacity: 1;
        }

        .bento-wide {
          grid-column: span 2;
        }

        .bento-tall {
          grid-row: span 2;
        }

        .bento-card .card-idx {
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 5rem;
          font-weight: 900;
          color: rgba(0, 0, 0, 0.03);
          position: absolute;
          right: 16px;
          top: -8px;
          line-height: 1;
        }

        .bento-card .card-date {
          font-size: 0.68rem;
          font-weight: 500;
          color: #b8a88a;
          letter-spacing: 2px;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .bento-card .card-role {
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 4px;
          color: #1a1a1a;
        }

        .bento-card .card-company {
          font-size: 0.78rem;
          color: #999;
          margin-bottom: 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid #f0ebe0;
        }

        .bento-card .card-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          flex: 1;
        }

        .bento-card .card-bullets li {
          font-size: 0.78rem;
          line-height: 1.65;
          color: #666;
          margin-bottom: 8px;
          padding-left: 16px;
          position: relative;
        }

        .bento-card .card-bullets li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ddd5c3;
        }

        .bento-card .card-bullets li strong {
          color: #2c2c2c;
          font-weight: 700;
        }

        /* Card accent colors */
        .bento-card:nth-child(5n+1) { --bento-accent: #c9896d; }
        .bento-card:nth-child(5n+2) { --bento-accent: #7da87b; }
        .bento-card:nth-child(5n+3) { --bento-accent: #8b97b3; }
        .bento-card:nth-child(5n+4) { --bento-accent: #c4a35f; }
        .bento-card:nth-child(5n+5) { --bento-accent: #b87d9f; }

        .bento-footer {
          max-width: 1300px;
          margin: 0 auto;
          padding: 24px 48px;
          border-top: 1px solid #e8e0d0;
          font-size: 0.65rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          text-align: center;
          color: #bbb;
        }

        @media (max-width: 900px) {
          .bento-container { grid-template-columns: repeat(2, 1fr); }
          .bento-header { padding: 40px 24px 32px; }
          .bento-section-label { padding: 0 24px 16px; }
          .bento-container { padding: 0 24px 40px; }
          .bento-footer { padding: 20px 24px; }
        }

        @media (max-width: 600px) {
          .bento-container { grid-template-columns: 1fr; }
          .bento-wide { grid-column: span 1; }
          .bento-tall { grid-row: span 1; }
        }
      `}</style>

      <div className="bento-page">
        <div className="bento-header">
          <div className="overline">履歴書 — Portfolio</div>
          <h1>Kittitat Upaphong</h1>
          <div className="desc">
            A decade of crafting software — from microservices to blockchain to VR.
            Building with intention, delivering with precision.
          </div>
        </div>

        <div className="bento-section-label">
          <h2>Experience</h2>
        </div>

        <div className="bento-container">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`bento-card ${gridSpans[i] || "bento-normal"}`}
            >
              <div className="card-idx">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="card-date">
                {exp.startDate} — {exp.endDate}
              </div>
              <div className="card-role">{exp.role}</div>
              <div className="card-company">
                {exp.company} · {exp.location}
              </div>
              <ul className="card-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>
                    <strong>{b.title}:</strong> {b.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bento-footer">
          Design 04 — Bento Grid — resume.bytat.dev
        </div>
      </div>
    </>
  );
}
