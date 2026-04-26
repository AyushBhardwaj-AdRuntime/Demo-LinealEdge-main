import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import CTASection from '../components/CTASection';
import PageHeader from '../components/PageHeader';

const trustStats = [
  { value: '50+', label: 'Years of Trust' },
  { value: '1500+', label: 'Clients Guided' },
  { value: '3 Generations', label: 'of Expertise' },
];

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <main className="page-content careers-coming-page">
      <PageHeader
              title="Careers"
              // description="Learn who we are, what we stand for, and how we guide clients with clarity and long-term focus."
            />
      <style>{`
        // .careers-coming-page {
        //   min-height: 100vh;
        //   background:
        //     radial-gradient(circle at 18% 18%, rgba(57, 181, 74, 0.08), transparent 26%),
        //     radial-gradient(circle at 82% 10%, rgba(245, 200, 66, 0.10), transparent 28%),
        //     linear-gradient(180deg, #f8fafc 0%, #f4f7fb 44%, #eef3f9 100%);
        //   color: #18386f;
        // }

        .careers-coming-shell {
          position: relative;
          overflow: hidden;
          // padding: clamp(120px, 14vw, 164px) 80px clamp(84px, 10vw, 120px);
          
        }

        .careers-coming-shell::before,
        .careers-coming-shell::after {
          content: '';
          position: absolute;
          border-radius: 999px;
          filter: blur(56px);
          pointer-events: none; 
        }

        .careers-coming-shell::before {
          width: min(34vw, 340px);
          height: min(34vw, 340px);
          top: 8%;
          left: -3%;
          // background: radial-gradient(circle, rgba(57, 181, 74, 0.12) 0%, transparent 72%);
        }

        .careers-coming-shell::after {
          width: min(38vw, 380px);
          height: min(38vw, 380px);
          right: -4%;
          bottom: 6%;
          // background: radial-gradient(circle, rgba(245, 200, 66, 0.12) 0%, transparent 72%);
        }

        .careers-coming-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          padding: 0 80px;
        }

        // .careers-coming-panel {
        //   position: relative;
        //   padding: clamp(32px, 5vw, 56px);
        //   border-radius: 34px;
        //   border: 1px solid rgba(24, 56, 111, 0.08);
        //   background:
        //     linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 250, 252, 0.92)),
        //     rgba(255, 255, 255, 0.9);
        //   box-shadow:
        //     inset 0 1px 0 rgba(255, 255, 255, 0.7),
        //     0 28px 80px rgba(18, 41, 76, 0.08);
        //   backdrop-filter: blur(20px);
        //   overflow: hidden;
        // }

        // .careers-coming-panel::before {
        //   content: '';
        //   position: absolute;
        //   inset: 0;
        //   background:
        //     linear-gradient(120deg, rgba(255, 255, 255, 0.5), transparent 34%),
        //     linear-gradient(180deg, transparent 0%, rgba(24, 56, 111, 0.02) 100%);
        //   pointer-events: none;
        // }

        .careers-coming-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
          gap: clamp(28px, 5vw, 64px);
          // align-items: start; /* 🔥 KEY CHANGE */
        }

        .careers-coming-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 42px;
          padding: 0 16px;
          border-radius: 999px;
          border: 1px solid rgba(24, 56, 111, 0.1);
          background: rgba(255, 255, 255, 0.9);
          color: rgba(24, 56, 111, 0.72);
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .careers-coming-title {
          margin: 24px 0 20px;
          font-family: 'Lora', 'Times New Roman', serif !important;
          font-size: clamp(3rem, 5.5vw, 5rem) !important;
          line-height: 1.04 !important;
          sure 
          font-weight: 500 !important;
          max-width: 11ch;
          text-wrap: balance;
        }

        .careers-coming-copy {
          margin: 0;
          max-width: 60ch;
          font-family: 'Inter', sans-serif !important;
          font-size: 1.01rem !important;
          line-height: 1.7 !important;
          color: #596266 !important;
        }

        .careers-coming-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 32px;
          padding: 14px 18px;
          border-radius: 18px;
          border: 1px solid rgba(245, 200, 66, 0.22);
          background: rgba(245, 200, 66, 0.12);
          color: #9c7630;
          font-family: 'Inter', sans-serif;
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .careers-coming-side {
          position: relative;
          min-height: 100%;
          padding: clamp(24px, 3vw, 32px);
          border-radius: 28px;
          border: 1px solid rgba(24, 56, 111, 0.08);
          background:
            radial-gradient(circle at top, rgba(245, 200, 66, 0.10), transparent 46%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 247, 251, 0.96));
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.75);
        }

        .careers-coming-side::after {
          content: '';
          position: absolute;
          inset: auto -20% -22% auto;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 1px solid rgba(245, 200, 66, 0.16);
          opacity: 0.65;
        }

        .careers-coming-side-label {
          color: #5c6467 !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 12px !important;
          line-height: 1.4 !important;
          letter-spacing: 0.08em !important;
          text-transform: uppercase;
          margin: 0 0 20px;
        }

        .careers-coming-stats {
          display: grid;
          gap: 16px;
        }

        .careers-coming-stat {
          padding: 20px 20px 18px;
          border-radius: 22px;
          border: 1px solid rgba(24, 56, 111, 0.08);
          background: rgba(255, 255, 255, 0.78);
        }

        .careers-coming-stat-value {
          display: block;
          font-family: 'Lora', 'Times New Roman', serif !important;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1;
          color: #111517;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .careers-coming-stat-label {
          display: block;
          font-family: 'Inter', sans-serif !important;
          font-size: 1.01rem !important;
          line-height: 1.6 !important;
          color: #596266 !important;
        }

        .careers-coming-soon {
          margin-top: 22px;
          padding-top: 22px;
          border-top: 1px solid rgba(24, 56, 111, 0.08);
        }

        .careers-coming-soon strong {
          display: inline-block;
          font-family: 'Inter', sans-serif !important;
          font-size: 12px !important;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #39b54a;
          margin-bottom: 10px;
        }

        .careers-coming-soon p {
          margin: 0;
          font-family: 'Inter', sans-serif !important;
          font-size: 1.01rem !important;
          line-height: 1.7 !important;
          color: #596266 !important;
        }

        @media (max-width: 1100px) {
          .careers-coming-shell {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (max-width: 920px) {
          .careers-coming-grid {
            grid-template-columns: 1fr;
          }

          .careers-coming-title {
            max-width: 12ch;
          }
        }

        @media (max-width: 640px) {
          .careers-coming-shell {
            padding-top: 104px;
            padding-left: 20px;
            padding-right: 20px;
          }

          .careers-coming-panel {
            border-radius: 28px;
            padding: 24px;
          }

          .careers-coming-title {
            font-size: clamp(2.5rem, 13vw, 4rem) !important;
          }
        }
      `}</style>

      <section className="careers-coming-shell">
        <div className="careers-coming-container">
          <div className="careers-coming-panel">
            <div className="careers-coming-grid">
              <div>
                {/* <span className="careers-coming-kicker">
                  <BriefcaseBusiness size={14} strokeWidth={1.8} />
                  Careers at Lineal Edge
                </span> */}

                <h1 className="careers-coming-title">We Cultivate Trust Across Generations</h1>

                <p className="careers-coming-copy">
                  At Lineal Edge, our approach is rooted in discipline, clarity, and long-term
                  thinking. We work closely with individuals and families to simplify financial
                  decisions and bring structure to their journey so they can move forward with
                  confidence and peace of mind.
                </p>

                <div className="careers-coming-badge">
                  <Sparkles size={16} strokeWidth={1.8} />
                  Coming Soon
                </div>
              </div>

              <aside className="careers-coming-side">
                <p className="careers-coming-side-label">A legacy built carefully</p>

                <div className="careers-coming-stats">
                  {trustStats.map((stat) => (
                    <div key={stat.value} className="careers-coming-stat">
                      <span className="careers-coming-stat-value">{stat.value}</span>
                      <span className="careers-coming-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="careers-coming-soon">
                  <strong>Coming Soon</strong>
                  <p>
                    We are preparing a thoughtful careers experience that reflects the same care,
                    trust, and long-term mindset we bring to every client relationship.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
