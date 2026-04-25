import React, { useState } from "react";

const generations = [
  {
    year: "1971",
    chapter: "Generation 1",
    label: "Planting the Seed",
    color: "#1A3260",
    accent: "#b4e89a",
    accentSoft: "rgba(180,232,154,0.12)",
    tagBg: "rgba(180,232,154,0.15)",
    tagColor: "#b4e89a",
    icon: "🌱",
    body: "Over five decades ago, our founder began traveling 50 kilometers a day on a bicycle to instill the raw discipline of savings into families. By distributing home piggy banks to children, he planted the very first seeds of financial responsibility — laying the deep, structural groundwork that true wealth requires.",
  },
  {
    year: "1990",
    chapter: "Generation 2",
    label: "Nurturing & Protecting the Roots",
    color: "#0e2d54",
    accent: "#39B54A",
    accentSoft: "rgba(57,181,74,0.10)",
    tagBg: "rgba(57,181,74,0.12)",
    tagColor: "#2a9e3a",
    icon: "🛡️",
    body: "As the seedling emerged, the next generation stepped in to nurture and defend it. For decades, our focus was on shielding our clients from external threats through comprehensive life and health insurance, ensuring the roots grew strong and unbreakable. As markets evolved, we guided that protected capital into Mutual Funds — watering the roots through the power of compounding.",
  },
  {
    year: "2023",
    chapter: "Generation 3",
    label: "The Canopy & The Harvest",
    color: "#071F45",
    accent: "#f5c842",
    accentSoft: "rgba(245,200,66,0.10)",
    tagBg: "rgba(245,200,66,0.12)",
    tagColor: "#c49a00",
    icon: "🌳", 
    body: "Today, that carefully protected sapling has grown into a lush, solid tree. Lineal Edge is focused on the harvest — honoring the deep roots of existing clients while welcoming new families with sophisticated, high-yield instruments: Alternative Investment Funds (AIFs), Portfolio Management Services (PMS), and comprehensive Estate Planning — delivered with brilliant technical and real-world clarity.",
  },
];

function TreeVisual({ active }) {
  return (
    <svg viewBox="0 0 120 180" width="120" height="180" style={{ display: "block" }}>
      {/* Trunk */}
      <rect x="54" y="110" width="12" height="60" rx="4"
        fill={active === 2 ? "#5a8a3a" : active === 1 ? "#7aaa5a" : "#a0c078"}
        style={{ transition: "fill 0.6s ease" }}
      />
      {/* Layer 3 - top canopy (gen 3) */}
      <ellipse cx="60" cy="52" rx={active >= 2 ? 38 : 12} ry={active >= 2 ? 30 : 8}
        fill={active >= 2 ? "#2a7a3a" : "#a0c890"}
        opacity={active >= 2 ? 1 : 0.4}
        style={{ transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1)" }}
      />
      {/* Layer 2 - mid canopy (gen 2) */}
      <ellipse cx="60" cy="74" rx={active >= 1 ? 44 : 16} ry={active >= 1 ? 28 : 10}
        fill={active >= 1 ? "#3a9a4a" : "#b0d89a"}
        opacity={active >= 1 ? 1 : 0.4}
        style={{ transition: "all 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.1s" }}
      />
      {/* Layer 1 - base canopy (gen 1) */}
      <ellipse cx="60" cy="96" rx={active >= 0 ? 48 : 20} ry={active >= 0 ? 24 : 12}
        fill={active >= 0 ? "#5ab860" : "#c0e0a8"}
        opacity={active >= 0 ? 1 : 0.3}
        style={{ transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.2s" }}
      />
      {/* Ground */}
      <ellipse cx="60" cy="168" rx="36" ry="6" fill="rgba(26,50,96,0.1)" />
      {/* Roots hint */}
      <path d="M54 168 Q44 172 36 170" stroke="rgba(26,50,96,0.2)" strokeWidth="1.5" fill="none" />
      <path d="M66 168 Q76 172 84 170" stroke="rgba(26,50,96,0.2)" strokeWidth="1.5" fill="none" />
      <path d="M60 168 Q58 176 56 178" stroke="rgba(26,50,96,0.2)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export default function GenerationsTimeline() {
  const [active, setActive] = useState(0);
  const gen = generations[active];

  return (
    <div style={{
      fontFamily: "system-ui, -apple-system, sans-serif",
      background: "linear-gradient(160deg, #f7f9fc 0%, #eef3f9 100%)",
      padding: "60px 24px 80px",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: "52px" }}>
          <span style={{
            display: "inline-block",
            background: "#fff",
            border: "1px solid rgba(26,50,96,0.12)",
            padding: "8px 24px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#1A3260",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}>Our Journey</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
            <h2 style={{
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 400,
              fontFamily: "Georgia, serif",
              color: "#1A3260",
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: "15ch",
            }}>
              <span style={{ color: "#39B54A" }}>1500+ Clients</span> Managed
            </h2>
          </div>
        </div>

        {/* ── Main Layout ── */}
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "32px", alignItems: "start" }}>

          {/* ── Left: Timeline Nav ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px", position: "sticky", top: "100px" }}>

            {/* Tree Visual */}
            <div style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "28px 24px 20px",
              marginBottom: "16px",
              boxShadow: "0 8px 24px rgba(10,30,20,0.07)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}>
              <TreeVisual active={active} />
              <p style={{ fontSize: "12px", color: "#6a8a7a", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>
                {active === 0 ? "Roots forming…" : active === 1 ? "Growing strong…" : "Full canopy 🌿"}
              </p>
            </div>

            {/* Chapter Buttons */}
            {generations.map((g, i) => (
              <button
                key={g.year}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "20px 24px",
                  borderRadius: "14px",
                  border: "none",
                  background: active === i ? "#1A3260" : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.25s ease",
                  marginBottom: "4px",
                }}
              >
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px",
                  background: active === i ? "rgba(255,255,255,0.12)" : "rgba(26,50,96,0.07)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px", flexShrink: 0,
                  transition: "background 0.25s ease",
                }}>
                  {g.icon}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: active === i ? "rgba(255,255,255,0.7)" : "#8a9aaa", marginBottom: "4px" }}>
                    {g.chapter}
                  </div>
                  <div style={{ fontSize: "18px", fontWeight: 600, color: active === i ? "#fff" : "#1A3260", lineHeight: 1.2 }}>
                    {g.year}
                  </div>
                </div>
                {active === i && (
                  <div style={{ marginLeft: "auto", width: "6px", height: "6px", borderRadius: "50%", background: g.accent, flexShrink: 0 }} />
                )}
              </button>
            ))}
          </div>

          {/* ── Right: Story Card ── */}
          <div key={active} style={{
            background: gen.color,
            borderRadius: "24px",
            padding: "52px 52px 48px",
            boxShadow: "0 24px 56px rgba(10,20,50,0.22)",
            position: "relative",
            overflow: "hidden",
            minHeight: "700px", //480px
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            animation: "genFadeSlideIn 0.4s ease",
            alignItems: "center",     // ✅ ADD
            textAlign: "center",      // ✅ ADD
          }}>
            <style>{`
              @keyframes genFadeSlideIn {
                from { opacity: 0; transform: translateY(16px); }
                to   { opacity: 1; transform: translateY(0); }
              }

              .generations-timeline-label {
                color: #ffffff !important;
              }
            `}</style>

            {/* decorative ring */}
            <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "320px", height: "320px", borderRadius: "50%", border: `1px solid ${gen.accentSoft.replace("0.10", "0.2")}`, pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-30px", right: "-30px", width: "180px", height: "180px", borderRadius: "50%", border: `1px solid ${gen.accentSoft.replace("0.10", "0.15")}`, pointerEvents: "none" }} />
            {/* glow */}
            <div style={{ position: "absolute", top: "-60px", left: "30%", width: "240px", height: "240px", borderRadius: "50%", background: `radial-gradient(circle, ${gen.accentSoft} 0%, transparent 70%)`, pointerEvents: "none" }} />

            {/* Top row */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
              <div>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: gen.tagBg,
                  border: `1px solid ${gen.accent}30`,
                  padding: "5px 14px",
                  borderRadius: "999px",
                  fontSize: "11px", fontWeight: 700,
                  color: gen.accent,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  marginBottom: "16px",
                }}>
                  {gen.icon} {gen.chapter}
                </span>
                <h3
                  className="generations-timeline-label"
                  style={{
                  fontSize: "clamp(26px, 3vw, 40px)",
                  fontWeight: 400,
                  fontFamily: "Georgia, serif",
                  color: "#ffffff",
                  margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em",
                  maxWidth: "16ch",
                }}
                >
                  {gen.label}
                </h3>
              </div>

              {/* Stat badge */}
              {gen.stat &&(
                <div style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "18px 24px",
                textAlign: "center",
                minWidth: "120px",
                flexShrink: 0,
              }}>
                <div style={{ fontSize: "28px", fontWeight: 700, color: gen.accent, lineHeight: 1, fontFamily: "Georgia, serif" }}>
                  {gen.stat}
                </div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em", textTransform: "uppercase", marginTop: "6px" }}>
                  {gen.statLabel}
                </div>
              </div>
              )}
            </div>

            {/* Year accent */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "40px", height: "1px", background: `${gen.accent}60` }} />
              <span style={{ fontSize: "20px", fontWeight: 700, color: `${gen.accent}99`, letterSpacing: "0.1em" }}>
                {gen.year}
              </span>
            </div>

            {/* Body */}
            <p style={{
              fontSize: "22px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.9)",
              margin: 0,
              maxWidth: "62ch",
            }}>
              {gen.body}
            </p>

            {/* Footer nav */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "auto", paddingTop: "8px" }}>
              {generations.map((g, i) => (
                <button
                  key={g.year}
                  onClick={() => setActive(i)}
                  style={{
                    width: active === i ? "32px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    background: active === i ? gen.accent : "rgba(255,255,255,0.2)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
              <span style={{ marginLeft: "auto", fontSize: "12px", color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>
                {active + 1} / {generations.length}
              </span>

              {active < generations.length - 1 && (
                <button
                  onClick={() => setActive(a => a + 1)}
                  style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "10px",
                    padding: "8px 16px",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                >
                  Next Chapter →
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
