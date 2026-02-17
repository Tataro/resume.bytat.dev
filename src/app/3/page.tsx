import { experiences } from "@/lib/experience-data";
import { Linkedin, Github, Mail, Youtube, GraduationCap, Award } from "lucide-react";
import {
  about,
  skills,
  education,
  certifications,
  contactLinks,
} from "@/lib/resume-data";

export default function JapaneseAnime() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&family=Zen+Maru+Gothic:wght@400;700;900&display=swap');

        html { scroll-behavior: smooth; }

        .anime-page {
          font-family: 'Outfit', sans-serif;
          background: #0a0a16;
          color: #eee8ff;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        .anime-page::before {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(ellipse 600px 600px at 15% 30%, rgba(255, 107, 157, 0.18) 0%, transparent 70%),
            radial-gradient(ellipse 500px 500px at 85% 15%, rgba(78, 205, 255, 0.15) 0%, transparent 70%),
            radial-gradient(ellipse 500px 500px at 50% 80%, rgba(167, 139, 250, 0.12) 0%, transparent 70%),
            radial-gradient(ellipse 400px 400px at 70% 55%, rgba(255, 184, 77, 0.10) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .anime-page::after {
          content: '';
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
          z-index: 0;
        }

        /* ===== LIQUID GLASS MIXIN ===== */

        /* ===== HERO ===== */
        .anime-hero {
          position: relative;
          z-index: 1;
          padding: 80px 40px 60px;
          text-align: center;
        }

        .speed-lines {
          position: absolute;
          top: 50%; left: 50%;
          width: 200%; height: 200%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          overflow: hidden;
        }

        .speed-line {
          position: absolute;
          top: 50%; left: 50%;
          height: 2px;
          transform-origin: left center;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 157, 0.25), transparent);
          animation: speed-shoot 3s linear infinite;
        }

        @keyframes speed-shoot {
          0% { opacity: 0; width: 0; }
          20% { opacity: 1; }
          100% { opacity: 0; width: 600px; }
        }

        .anime-hero h1 {
          font-family: 'Zen Maru Gothic', 'Outfit', sans-serif;
          font-size: clamp(3.5rem, 9vw, 7rem);
          font-weight: 900;
          line-height: 1.15;
          margin: 0 0 16px;
          padding-bottom: 10px;
          background: linear-gradient(135deg, #ff8fba, #6dd8ff, #ffc86e);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
          position: relative;
          filter: drop-shadow(0 2px 12px rgba(255, 107, 157, 0.25));
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .anime-hero .kanji-badge {
          display: inline-block;
          font-family: 'Zen Maru Gothic', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 8px 28px;
          border: 2px solid rgba(255, 107, 157, 0.5);
          color: #ff8fba;
          letter-spacing: 4px;
          text-transform: uppercase;
          position: relative;
          margin-bottom: 24px;
          background: rgba(255, 107, 157, 0.06);
          border-radius: 30px;
          backdrop-filter: blur(12px);
        }

        .anime-hero .kanji-badge::before,
        .anime-hero .kanji-badge::after {
          content: '◆';
          margin: 0 8px;
          font-size: 0.5rem;
          vertical-align: middle;
        }

        .anime-hero .subtitle {
          font-size: 1.05rem;
          color: rgba(238, 232, 255, 0.65);
          font-weight: 300;
          letter-spacing: 2px;
        }

        /* ===== NAV ===== */
        .anime-nav {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 0 20px 40px;
          flex-wrap: wrap;
        }

        .anime-nav a {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(238, 232, 255, 0.5);
          text-decoration: none;
          padding: 8px 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
        }

        .anime-nav a:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(255, 107, 157, 0.15), inset 0 1px 0 rgba(255,255,255,0.15);
        }

        /* ===== SECTION DIVIDER ===== */
        .anime-section-divider {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 40px;
          margin: 0 0 40px;
        }

        .anime-section-divider::before,
        .anime-section-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 157, 0.4), transparent);
        }

        .anime-section-divider h2 {
          font-family: 'Zen Maru Gothic', sans-serif;
          font-size: 1.6rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 6px;
          color: #ff8fba;
          white-space: nowrap;
          text-shadow: 0 0 30px rgba(255, 107, 157, 0.3);
        }

        .anime-section-divider.blue::before,
        .anime-section-divider.blue::after {
          background: linear-gradient(90deg, transparent, rgba(78, 205, 255, 0.4), transparent);
        }
        .anime-section-divider.blue h2 { color: #6dd8ff; text-shadow: 0 0 30px rgba(78, 205, 255, 0.3); }

        .anime-section-divider.gold::before,
        .anime-section-divider.gold::after {
          background: linear-gradient(90deg, transparent, rgba(255, 184, 77, 0.4), transparent);
        }
        .anime-section-divider.gold h2 { color: #ffc86e; text-shadow: 0 0 30px rgba(255, 184, 77, 0.3); }

        .anime-section-divider.purple::before,
        .anime-section-divider.purple::after {
          background: linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.4), transparent);
        }
        .anime-section-divider.purple h2 { color: #b8a4fb; text-shadow: 0 0 30px rgba(167, 139, 250, 0.3); }

        .anime-section-divider.green::before,
        .anime-section-divider.green::after {
          background: linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.4), transparent);
        }
        .anime-section-divider.green h2 { color: #5ee8b7; text-shadow: 0 0 30px rgba(52, 211, 153, 0.3); }

        /* ===== CONTENT WRAPPER ===== */
        .anime-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px 60px;
        }

        /* ===== ABOUT ===== */
        .anime-about {
          position: relative;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          padding: 36px 40px;
          margin-bottom: 60px;
          backdrop-filter: blur(24px) saturate(1.4);
          -webkit-backdrop-filter: blur(24px) saturate(1.4);
          overflow: hidden;
          line-height: 1.8;
          font-size: 0.95rem;
          color: rgba(238, 232, 255, 0.88);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(255, 255, 255, 0.03);
        }

        .anime-about::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #ff8fba, #6dd8ff, #ffc86e);
        }

        .anime-about .about-quote-mark {
          font-family: 'Zen Maru Gothic', sans-serif;
          font-size: 4rem;
          line-height: 1;
          color: rgba(255, 143, 186, 0.3);
          margin-bottom: -16px;
          display: block;
        }

        /* ===== SKILLS ===== */
        .anime-skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 60px;
        }

        .anime-skill-tag {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(238, 232, 255, 0.9);
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .anime-skill-tag:nth-child(4n+1) {
          border-color: rgba(255, 143, 186, 0.35);
          color: #ff8fba;
          background: rgba(255, 107, 157, 0.08);
        }
        .anime-skill-tag:nth-child(4n+2) {
          border-color: rgba(109, 216, 255, 0.35);
          color: #6dd8ff;
          background: rgba(78, 205, 255, 0.08);
        }
        .anime-skill-tag:nth-child(4n+3) {
          border-color: rgba(255, 200, 110, 0.35);
          color: #ffc86e;
          background: rgba(255, 184, 77, 0.08);
        }
        .anime-skill-tag:nth-child(4n+4) {
          border-color: rgba(184, 164, 251, 0.35);
          color: #b8a4fb;
          background: rgba(167, 139, 250, 0.08);
        }

        .anime-skill-tag:hover {
          transform: translateY(-2px) scale(1.05);
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 28px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15);
        }

        /* ===== EXPERIENCE GRID ===== */
        .anime-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }

        .anime-card {
          position: relative;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 28px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(24px) saturate(1.4);
          -webkit-backdrop-filter: blur(24px) saturate(1.4);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(255, 255, 255, 0.03);
        }

        .anime-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 3px;
          background: var(--card-accent, linear-gradient(90deg, #ff8fba, #6dd8ff));
        }

        .anime-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow:
            0 24px 64px rgba(0, 0, 0, 0.35),
            0 0 40px rgba(255, 107, 157, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .anime-card:nth-child(3n+2) { --card-accent: linear-gradient(90deg, #6dd8ff, #b8a4fb); }
        .anime-card:nth-child(3n+3) { --card-accent: linear-gradient(90deg, #ffc86e, #ff8fba); }

        .anime-card .card-date {
          display: inline-block;
          background: rgba(255, 143, 186, 0.15);
          color: #ff8fba;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 20px;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .anime-card:nth-child(3n+2) .card-date {
          background: rgba(109, 216, 255, 0.15);
          color: #6dd8ff;
        }

        .anime-card:nth-child(3n+3) .card-date {
          background: rgba(255, 200, 110, 0.15);
          color: #ffc86e;
        }

        .anime-card .card-role {
          font-family: 'Zen Maru Gothic', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 4px;
          color: #fff;
        }

        .anime-card .card-company {
          font-size: 0.78rem;
          color: rgba(238, 232, 255, 0.55);
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .anime-card .card-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .anime-card .card-bullets li {
          position: relative;
          font-size: 0.8rem;
          line-height: 1.6;
          color: rgba(238, 232, 255, 0.8);
          margin-bottom: 10px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          border-bottom-left-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .anime-card .card-bullets li strong {
          display: block;
          color: #fff;
          font-weight: 600;
          font-size: 0.75rem;
          margin-bottom: 2px;
          letter-spacing: 0.5px;
        }

        .anime-card .card-number {
          position: absolute;
          top: 16px; right: 20px;
          font-family: 'Zen Maru Gothic', sans-serif;
          font-size: 2.5rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.05);
          line-height: 1;
        }

        /* ===== EDUCATION CARD ===== */
        .anime-edu-card {
          position: relative;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 32px 36px;
          margin-bottom: 60px;
          backdrop-filter: blur(24px) saturate(1.4);
          -webkit-backdrop-filter: blur(24px) saturate(1.4);
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 28px;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .anime-edu-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #ffc86e, #ff8fba);
        }

        .anime-edu-icon {
          flex-shrink: 0;
          width: 72px; height: 72px;
          border-radius: 50%;
          background: rgba(255, 200, 110, 0.12);
          border: 2px solid rgba(255, 200, 110, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #ffc86e;
          box-shadow: 0 0 20px rgba(255, 184, 77, 0.1);
        }

        .anime-edu-info h3 {
          font-family: 'Zen Maru Gothic', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 4px;
        }

        .anime-edu-info .edu-degree {
          font-size: 0.85rem;
          color: rgba(238, 232, 255, 0.75);
          margin-bottom: 6px;
        }

        .anime-edu-meta {
          display: flex;
          gap: 16px;
          font-size: 0.75rem;
        }

        .anime-edu-meta span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          border-radius: 20px;
          font-weight: 600;
        }

        .anime-edu-meta .edu-year {
          background: rgba(255, 200, 110, 0.15);
          color: #ffc86e;
        }

        .anime-edu-meta .edu-gpa {
          background: rgba(94, 232, 183, 0.15);
          color: #5ee8b7;
        }

        /* ===== CERTIFICATIONS ===== */
        .anime-certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
        }

        .anime-cert-card {
          position: relative;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 28px;
          backdrop-filter: blur(24px) saturate(1.4);
          -webkit-backdrop-filter: blur(24px) saturate(1.4);
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .anime-cert-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #b8a4fb, #6dd8ff);
        }

        .anime-cert-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow:
            0 16px 48px rgba(0, 0, 0, 0.3),
            0 0 30px rgba(167, 139, 250, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .anime-cert-card .cert-icon {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: rgba(184, 164, 251, 0.12);
          border: 1px solid rgba(184, 164, 251, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 16px;
          color: #b8a4fb;
          box-shadow: 0 0 16px rgba(167, 139, 250, 0.08);
        }

        .anime-cert-card h3 {
          font-family: 'Zen Maru Gothic', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px;
        }

        .anime-cert-card p {
          font-size: 0.8rem;
          color: rgba(238, 232, 255, 0.65);
          margin: 0;
          line-height: 1.5;
        }

        /* ===== CONTACT ===== */
        .anime-contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
          margin-bottom: 60px;
        }

        .anime-contact-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px 24px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          text-decoration: none;
          color: rgba(238, 232, 255, 0.9);
          transition: all 0.3s ease;
          backdrop-filter: blur(24px) saturate(1.4);
          -webkit-backdrop-filter: blur(24px) saturate(1.4);
          box-shadow:
            0 4px 20px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .anime-contact-link:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .anime-contact-link .contact-icon {
          flex-shrink: 0;
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .anime-contact-link.linkedin .contact-icon {
          background: rgba(109, 216, 255, 0.12);
          border: 1px solid rgba(109, 216, 255, 0.3);
          color: #6dd8ff;
        }
        .anime-contact-link.linkedin:hover {
          border-color: rgba(109, 216, 255, 0.35);
        }

        .anime-contact-link.github .contact-icon {
          background: rgba(238, 232, 255, 0.1);
          border: 1px solid rgba(238, 232, 255, 0.2);
          color: #eee8ff;
        }
        .anime-contact-link.github:hover {
          border-color: rgba(238, 232, 255, 0.3);
        }

        .anime-contact-link.email .contact-icon {
          background: rgba(255, 143, 186, 0.12);
          border: 1px solid rgba(255, 143, 186, 0.3);
          color: #ff8fba;
        }
        .anime-contact-link.email:hover {
          border-color: rgba(255, 143, 186, 0.35);
        }

        .anime-contact-link.youtube .contact-icon {
          background: rgba(255, 200, 110, 0.12);
          border: 1px solid rgba(255, 200, 110, 0.3);
          color: #ffc86e;
        }
        .anime-contact-link.youtube:hover {
          border-color: rgba(255, 200, 110, 0.35);
        }

        .anime-contact-link .contact-label {
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
          color: #fff;
        }

        .anime-contact-link .contact-handle {
          font-size: 0.72rem;
          color: rgba(238, 232, 255, 0.5);
          margin-top: 2px;
        }

        /* ===== FOOTER ===== */
        .anime-footer {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 30px 40px;
          font-size: 0.65rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(238, 232, 255, 0.35);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* ===== FLOATING SHAPES ===== */
        .anime-shape {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          animation: float-shape 8s ease-in-out infinite;
        }

        @keyframes float-shape {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -30px) rotate(5deg); }
          50% { transform: translate(-10px, -60px) rotate(-3deg); }
          75% { transform: translate(30px, -20px) rotate(4deg); }
        }

        @media (max-width: 768px) {
          .anime-hero { padding: 50px 20px 40px; }
          .anime-content { padding: 0 20px 40px; }
          .anime-grid { grid-template-columns: 1fr; }
          .anime-section-divider { padding: 0 20px; }
          .anime-about { padding: 28px 24px; }
          .anime-edu-card { flex-direction: column; text-align: center; }
          .anime-edu-meta { justify-content: center; }
          .anime-contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="anime-page">
        {/* Floating shapes */}
        <div
          className="anime-shape"
          style={{
            width: 300, height: 300, top: '10%', left: '-5%',
            background: 'radial-gradient(circle, rgba(255,107,157,0.08), transparent 70%)',
            animationDelay: '0s',
          }}
        />
        <div
          className="anime-shape"
          style={{
            width: 250, height: 250, top: '50%', right: '-8%',
            background: 'radial-gradient(circle, rgba(78,205,255,0.06), transparent 70%)',
            animationDelay: '2s',
          }}
        />
        <div
          className="anime-shape"
          style={{
            width: 200, height: 200, bottom: '10%', left: '15%',
            background: 'radial-gradient(circle, rgba(255,184,77,0.06), transparent 70%)',
            animationDelay: '4s',
          }}
        />

        {/* Hero */}
        <div className="anime-hero">
          <div className="speed-lines">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="speed-line"
                style={{
                  transform: `rotate(${i * 30}deg)`,
                  animationDelay: `${i * 0.25}s`,
                }}
              />
            ))}
          </div>

          <div className="kanji-badge">Senior Full Stack Engineer</div>
          <h1>Kittitat<br />Upaphong</h1>
          <div className="subtitle">
            10+ Years of Experience ✦ Web · Mobile · VR · Blockchain
          </div>
        </div>

        {/* Navigation */}
        <nav className="anime-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* About */}
        <div id="about" className="anime-content">
          <div className="anime-section-divider">
            <h2>★ About ★</h2>
          </div>
          <div className="anime-about">
            <span className="about-quote-mark">&ldquo;</span>
            <strong>Software Engineering Lead</strong> with over <strong>10 years of experience</strong> spanning diverse domains including <strong>Web, Mobile, VR, and Blockchain</strong>. My career demonstrates a proven track record with industry giants like <strong>True Digital Group</strong> and <strong>PTTEP</strong>, as well as scaling high-growth startups like <strong>Zanroo</strong> from inception to <strong>Series-A funding</strong>. Currently <strong>leading a team of 7-10 developers</strong>, I am passionate about evolving traditional development workflows by integrating <strong>AI-driven architectures (MCP, Sub-agents)</strong> to maximize efficiency. I thrive in collaborative environments and am seeking to join a team of talented, positive-minded professionals where we can <strong>push technological boundaries together</strong>.
          </div>
        </div>

        {/* Skills */}
        <div id="skills" className="anime-content">
          <div className="anime-section-divider blue">
            <h2>★ Skills ★</h2>
          </div>
          <div className="anime-skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="anime-skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div id="experience" className="anime-content">
          <div className="anime-section-divider">
            <h2>★ Experience ★</h2>
          </div>
          <div className="anime-grid">
            {experiences.map((exp, i) => (
              <div key={i} className="anime-card">
                <div className="card-number">
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
                      <strong>{b.title}</strong>
                      {b.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div id="education" className="anime-content">
          <div className="anime-section-divider gold">
            <h2>★ Education ★</h2>
          </div>
          <div className="anime-edu-card">
            <div className="anime-edu-icon"><GraduationCap size={32} /></div>
            <div className="anime-edu-info">
              <h3>{education.institution}</h3>
              <div className="edu-degree">{education.degree}</div>
              <div className="anime-edu-meta">
                <span className="edu-year">📅 {education.startYear} — {education.endYear}</span>
                <span className="edu-gpa">📊 GPA: {education.gpa}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div id="certifications" className="anime-content">
          <div className="anime-section-divider purple">
            <h2>★ Certifications & Licenses ★</h2>
          </div>
          <div className="anime-certs-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="anime-cert-card">
                <div className="cert-icon"><Award size={24} /></div>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="anime-content">
          <div className="anime-section-divider green">
            <h2>★ Contact ★</h2>
          </div>
          <div className="anime-contact-grid">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.icon !== 'email' ? '_blank' : undefined}
                rel={link.icon !== 'email' ? 'noopener noreferrer' : undefined}
                className={`anime-contact-link ${link.icon}`}
              >
                <div className="contact-icon">
                  {link.icon === 'linkedin' && <Linkedin size={22} />}
                  {link.icon === 'github' && <Github size={22} />}
                  {link.icon === 'email' && <Mail size={22} />}
                  {link.icon === 'youtube' && <Youtube size={22} />}
                </div>
                <div>
                  <div className="contact-label">{link.label}</div>
                  <div className="contact-handle">
                    {link.icon === 'email' ? 'tat.kittitat@gmail.com' : link.url.replace(/https?:\/\//, '').replace(/\/$/, '')}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="anime-footer">
          resume.bytat.dev — Kittitat Upaphong
        </div>
      </div>
    </>
  );
}
