
import { experiences } from "@/lib/experience-data";

export default function EditorialMagazine() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');

        .editorial-page {
          font-family: 'Source Serif 4', Georgia, serif;
          background: #faf8f3;
          color: #1a1a2e;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .editorial-masthead {
          text-align: center;
          padding: 60px 40px 40px;
          border-bottom: 3px double #1a1a2e;
          position: relative;
        }

        .editorial-masthead::before {
          content: '✦ CAREER CHRONICLE ✦';
          display: block;
          font-size: 0.65rem;
          letter-spacing: 8px;
          text-transform: uppercase;
          color: #8b7355;
          margin-bottom: 16px;
          font-family: 'Source Serif 4', serif;
        }

        .editorial-masthead h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 6.5rem);
          font-weight: 900;
          line-height: 1;
          margin: 0 0 12px;
          letter-spacing: -1px;
          color: #1a1a2e;
        }

        .editorial-masthead .tagline {
          font-style: italic;
          font-size: 1.15rem;
          color: #8b7355;
          font-weight: 300;
        }

        .editorial-masthead .edition {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid #d4c5a9;
          font-size: 0.7rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: #999;
        }

        .editorial-nav {
          display: flex;
          justify-content: center;
          gap: 32px;
          padding: 16px 40px;
          border-bottom: 1px solid #d4c5a9;
          font-size: 0.72rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #8b7355;
        }

        .editorial-nav span.active {
          color: #1a1a2e;
          font-weight: 600;
          border-bottom: 2px solid #1a1a2e;
          padding-bottom: 2px;
        }

        .editorial-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 50px 40px;
        }

        .editorial-section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .editorial-section-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 6px;
          margin: 0 0 8px;
          color: #1a1a2e;
        }

        .editorial-section-header .rule {
          width: 80px;
          height: 1px;
          background: #8b7355;
          margin: 0 auto;
        }

        .editorial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        .editorial-entry {
          padding: 36px 32px;
          border-bottom: 1px solid #e2d9c8;
          position: relative;
          transition: background 0.3s ease;
        }

        .editorial-entry:nth-child(odd) {
          border-right: 1px solid #e2d9c8;
        }

        .editorial-entry:hover {
          background: rgba(139, 115, 85, 0.04);
        }

        .editorial-entry .dropcap {
          float: left;
          font-family: 'Playfair Display', serif;
          font-size: 3.8rem;
          font-weight: 900;
          line-height: 1;
          margin-right: 10px;
          margin-top: 4px;
          color: #8b7355;
        }

        .editorial-entry .entry-date {
          font-size: 0.68rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #8b7355;
          margin-bottom: 6px;
          font-weight: 600;
        }

        .editorial-entry .entry-role {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 4px;
          color: #1a1a2e;
        }

        .editorial-entry .entry-company {
          font-size: 0.82rem;
          color: #8b7355;
          font-style: italic;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #ebe3d5;
        }

        .editorial-entry .entry-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .editorial-entry .entry-bullets li {
          font-size: 0.82rem;
          line-height: 1.7;
          margin-bottom: 8px;
          color: #3a3a4a;
          text-indent: 0;
        }

        .editorial-entry .entry-bullets li strong {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 0.8rem;
          color: #1a1a2e;
        }

        .editorial-entry .entry-bullets li::before {
          content: '— ';
          color: #8b7355;
        }

        .editorial-footer {
          border-top: 3px double #1a1a2e;
          text-align: center;
          padding: 30px;
          font-size: 0.65rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: #999;
        }

        .editorial-pullquote {
          grid-column: 1 / -1;
          text-align: center;
          padding: 40px 60px;
          border-top: 2px solid #1a1a2e;
          border-bottom: 2px solid #1a1a2e;
          margin: 0;
        }

        .editorial-pullquote blockquote {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-style: italic;
          color: #1a1a2e;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .editorial-grid { grid-template-columns: 1fr; }
          .editorial-entry:nth-child(odd) { border-right: none; }
          .editorial-masthead { padding: 40px 20px 30px; }
          .editorial-content { padding: 30px 20px; }
          .editorial-nav { flex-wrap: wrap; gap: 16px; padding: 12px 20px; }
          .editorial-pullquote { padding: 30px 20px; }
          .editorial-pullquote blockquote { font-size: 1.2rem; }
        }
      `}</style>

      <div className="editorial-page">
        <div className="editorial-masthead">
          <h1>Kittitat Upaphong</h1>
          <div className="tagline">
            A decade of engineering — from startups to enterprise, Web to Blockchain
          </div>
          <div className="edition">
            Volume X · 2014–2025 · Bangkok, Thailand
          </div>
        </div>

        <div className="editorial-nav">
          <span className="active">Experience</span>
          <span>Skills</span>
          <span>Education</span>
          <span>Certifications</span>
        </div>

        <div className="editorial-content">
          <div className="editorial-section-header">
            <h2>Experience</h2>
            <div className="rule" />
          </div>

          <div className="editorial-grid">
            {experiences.map((exp, i) => (
              <div key={i} style={{ display: 'contents' }}>
                {i === 5 && (
                  <div className="editorial-pullquote">
                    <blockquote>
                      &ldquo;Passionate about evolving traditional development workflows
                      by integrating AI-driven architectures to maximize efficiency.&rdquo;
                    </blockquote>
                  </div>
                )}
                <div className="editorial-entry">
                  <div className="dropcap">
                    {exp.company.charAt(0)}
                  </div>
                  <div className="entry-date">
                    {exp.startDate} — {exp.endDate}
                  </div>
                  <div className="entry-role">{exp.role}</div>
                  <div className="entry-company">
                    {exp.company}, {exp.location}
                  </div>
                  <ul className="entry-bullets">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="editorial-footer">
          Design 02 — Editorial Magazine — resume.bytat.dev
        </div>
      </div>
    </>
  );
}
