
import { experiences } from "@/lib/experience-data";

export default function NeonGlassmorphism() {
  const accents = [
    { border: "#06d6a0", glow: "rgba(6, 214, 160, 0.25)" },
    { border: "#e040fb", glow: "rgba(224, 64, 251, 0.25)" },
    { border: "#00e5ff", glow: "rgba(0, 229, 255, 0.25)" },
    { border: "#ffab40", glow: "rgba(255, 171, 64, 0.25)" },
    { border: "#7c4dff", glow: "rgba(124, 77, 255, 0.25)" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Outfit:wght@300;400;600;800&display=swap');

        .neon-page {
          font-family: 'Outfit', sans-serif;
          background: #0a0a0f;
          color: #e8e8f0;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        /* Animated mesh gradient background */
        .neon-mesh {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .neon-mesh .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          animation: mesh-float 20s ease-in-out infinite;
        }

        @keyframes mesh-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(60px, -80px) scale(1.1); }
          50% { transform: translate(-40px, 60px) scale(0.95); }
          75% { transform: translate(80px, 40px) scale(1.05); }
        }

        .neon-header {
          position: relative;
          z-index: 1;
          padding: 80px 48px 60px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .neon-header .label {
          font-family: 'Sora', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: #06d6a0;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .neon-header .label::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 2px;
          background: #06d6a0;
        }

        .neon-header h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 800;
          line-height: 1.05;
          margin: 0 0 16px;
          background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -2px;
        }

        .neon-header .desc {
          font-size: 1rem;
          color: rgba(232, 232, 240, 0.45);
          font-weight: 300;
          max-width: 520px;
          line-height: 1.7;
        }

        .neon-section-header {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px 32px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .neon-section-header h2 {
          font-family: 'Sora', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: rgba(232, 232, 240, 0.35);
          white-space: nowrap;
        }

        .neon-section-header::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.1), transparent);
        }

        .neon-list {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px 80px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .neon-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 32px 36px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          transform: translateY(20px);
          animation: neon-reveal 0.6s ease forwards;
        }

        @keyframes neon-reveal {
          to { opacity: 1; transform: translateY(0); }
        }

        .neon-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--neon-color, rgba(6, 214, 160, 0.3));
          box-shadow: 0 0 60px var(--neon-glow, rgba(6, 214, 160, 0.1));
          transform: translateY(-2px);
        }

        /* Left accent bar */
        .neon-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--neon-color, #06d6a0);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .neon-card:hover::before {
          opacity: 1;
        }

        .neon-card .top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .neon-card .card-role {
          font-family: 'Sora', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
        }

        .neon-card .card-date {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--neon-color, #06d6a0);
          letter-spacing: 1px;
          white-space: nowrap;
          padding: 4px 14px;
          border: 1px solid var(--neon-color, rgba(6, 214, 160, 0.3));
          border-radius: 20px;
        }

        .neon-card .card-company {
          font-size: 0.8rem;
          color: rgba(232, 232, 240, 0.4);
          margin-bottom: 18px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .neon-card .card-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 10px;
        }

        .neon-card .card-bullets li {
          font-size: 0.8rem;
          line-height: 1.6;
          color: rgba(232, 232, 240, 0.6);
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
          border-left: 2px solid rgba(255, 255, 255, 0.06);
          transition: border-color 0.3s ease;
        }

        .neon-card:hover .card-bullets li {
          border-left-color: var(--neon-color, rgba(6, 214, 160, 0.2));
        }

        .neon-card .card-bullets li strong {
          color: #fff;
          font-weight: 600;
          display: block;
          margin-bottom: 2px;
          font-size: 0.75rem;
          letter-spacing: 0.3px;
        }

        .neon-footer {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 30px 48px;
          font-size: 0.65rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(232, 232, 240, 0.2);
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        @media (max-width: 768px) {
          .neon-header { padding: 50px 24px 40px; }
          .neon-section-header { padding: 0 24px 20px; }
          .neon-list { padding: 0 24px 50px; }
          .neon-card { padding: 24px; }
          .neon-card .card-bullets { grid-template-columns: 1fr; }
          .neon-footer { padding: 20px 24px; }
        }
      `}</style>

      <div className="neon-page">
        {/* Animated mesh gradient */}
        <div className="neon-mesh">
          <div
            className="blob"
            style={{
              width: 500, height: 500, top: '5%', left: '10%',
              background: 'rgba(6, 214, 160, 0.06)',
              animationDelay: '0s',
            }}
          />
          <div
            className="blob"
            style={{
              width: 400, height: 400, top: '40%', right: '5%',
              background: 'rgba(224, 64, 251, 0.05)',
              animationDelay: '5s',
            }}
          />
          <div
            className="blob"
            style={{
              width: 450, height: 450, bottom: '10%', left: '30%',
              background: 'rgba(0, 229, 255, 0.04)',
              animationDelay: '10s',
            }}
          />
        </div>

        <div className="neon-header">
          <div className="label">Senior Full Stack Software Engineer</div>
          <h1>Kittitat<br />Upaphong</h1>
          <div className="desc">
            Over a decade of engineering across Web, Mobile, VR, and Blockchain.
            Building the future, one system at a time.
          </div>
        </div>

        <div className="neon-section-header">
          <h2>Work Experience</h2>
        </div>

        <div className="neon-list">
          {experiences.map((exp, i) => {
            const accent = accents[i % accents.length];
            return (
              <div
                key={i}
                className="neon-card"
                style={{
                  "--neon-color": accent.border,
                  "--neon-glow": accent.glow,
                  animationDelay: `${i * 0.08}s`,
                } as React.CSSProperties}
              >
                <div className="top-row">
                  <div className="card-role">{exp.role}</div>
                  <div className="card-date">
                    {exp.startDate} — {exp.endDate}
                  </div>
                </div>
                <div className="card-company">
                  {exp.company} · {exp.location}
                </div>
                <ul className="card-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>
                      <strong>{b.title}</strong>
                      {b.description}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="neon-footer">
          Design 05 — Neon Glassmorphism — resume.bytat.dev
        </div>
      </div>
    </>
  );
}
