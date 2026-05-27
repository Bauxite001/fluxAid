// Programs.jsx

import { PROGRAMS } from "../constants";

const ACCENT_COLORS = ["#2F8AC9", "#6C609E", "#2F8AC9"];

const CARD_STYLES = [
  {
    bg: "#0F1E35",
    numColor: "rgba(47,138,201,0.06)",
    iconBg: "rgba(47,138,201,0.12)",
    iconBorder: "rgba(47,138,201,0.2)",
    titleColor: "#F0F6FF",
    descColor: "rgba(200,214,232,0.55)",
    chipBg: "rgba(47,138,201,0.12)",
    chipBorder: "rgba(47,138,201,0.25)",
    chipColor: "#5BA3E0",
    arrowColor: "rgba(200,214,232,0.3)",
    labelColor: "rgba(200,214,232,0.3)",
    dark: true,
  },
  {
    bg: "#FFFFFF",
    numColor: "rgba(108,96,158,0.05)",
    iconBg: "rgba(108,96,158,0.08)",
    iconBorder: "rgba(108,96,158,0.15)",
    titleColor: "#0D1117",
    descColor: "#4B5563",
    chipBg: "rgba(108,96,158,0.08)",
    chipBorder: "rgba(108,96,158,0.2)",
    chipColor: "#6C609E",
    arrowColor: "#D1D5DB",
    labelColor: "#9CA3AF",
    dark: false,
  },
  {
    bg: "#6C609E",
    numColor: "rgba(255,255,255,0.05)",
    iconBg: "rgba(255,255,255,0.12)",
    iconBorder: "rgba(255,255,255,0.2)",
    titleColor: "#FFFFFF",
    descColor: "rgba(255,255,255,0.65)",
    chipBg: "rgba(255,255,255,0.12)",
    chipBorder: "rgba(255,255,255,0.2)",
    chipColor: "rgba(255,255,255,0.9)",
    arrowColor: "rgba(255,255,255,0.3)",
    labelColor: "rgba(255,255,255,0.4)",
    dark: true,
  },
];

const Programs = () => {
  return (
    <section
      style={{
        background: "#F8F9FB",
        padding: "72px 0 80px",
        borderBottom: "1px solid #E5E7EB",
        margin: "18px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 clamp(18px, 4vw, 40px)",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "20px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#2F8AC9",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />

              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "3.5px",
                  textTransform: "uppercase",
                  color: "#2F8AC9",
                }}
              >
                What We Do
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(34px, 6vw, 52px)",
                fontWeight: 700,
                color: "#0D1117",
                lineHeight: 1.05,
                letterSpacing: "-0.5px",
              }}
            >
              Our{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#6C609E",
                }}
              >
                Programs
              </em>
            </h2>
          </div>

          <a
            href="/programs"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#2F8AC9",
              textDecoration: "none",
              borderBottom: "1px solid rgba(47,138,201,0.4)",
              paddingBottom: "2px",
              whiteSpace: "nowrap",
            }}
          >
            All Programs →
          </a>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {PROGRAMS.map((prog, i) => {
            const accent = ACCENT_COLORS[i];
            const card = CARD_STYLES[i];

            return (
              <div
                key={prog.num}
                style={{
                  background: card.bg,
                  borderRadius: "16px",
                  padding: "clamp(24px, 4vw, 40px)",
                  minHeight: "420px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: card.dark
                    ? "0 8px 40px rgba(0,0,0,0.15)"
                    : "0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
                  transition: "0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* TOP LINE */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background:
                      i === 2
                        ? "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))"
                        : `linear-gradient(90deg, ${accent}, ${
                            i === 0 ? "#6C609E" : "#2F8AC9"
                          })`,
                  }}
                />

                {/* GLOW */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-60px",
                    right: "-60px",
                    width: "200px",
                    height: "200px",
                    background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)`,
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />

                {/* NUMBER */}
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-6px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(100px, 16vw, 160px)",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: card.numColor,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {prog.num}
                </span>

                {/* LABEL */}
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "3.5px",
                    textTransform: "uppercase",
                    color: card.labelColor,
                    marginBottom: "28px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {prog.num} — Programme
                </span>

                {/* ICON */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    background: card.iconBg,
                    border: `1px solid ${card.iconBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    marginBottom: "22px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {prog.icon}
                </div>

                {/* TITLE */}
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(22px, 3vw, 28px)",
                    fontWeight: 700,
                    color: card.titleColor,
                    lineHeight: 1.2,
                    marginBottom: "14px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {prog.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: card.descColor,
                    lineHeight: 1.8,
                    marginBottom: "32px",
                    flex: 1,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {prog.desc}
                </p>

                {/* BOTTOM */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    position: "relative",
                    zIndex: 1,
                    paddingTop: "20px",
                    borderTop: `1px solid ${
                      card.dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"
                    }`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: card.chipColor,
                      background: card.chipBg,
                      border: `1px solid ${card.chipBorder}`,
                      padding: "5px 12px",
                      borderRadius: "4px",
                    }}
                  >
                    {prog.stat}
                  </span>

                  <span
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      border: `1px solid ${card.arrowColor}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      color: card.arrowColor,
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "32px",
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "12px",
            padding: "clamp(20px, 4vw, 32px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              flex: 1,
              minWidth: "260px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#6C609E",
                flexShrink: 0,
                marginTop: "8px",
              }}
            />

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#6B7280",
                lineHeight: 1.7,
              }}
            >
              Each programme is community-led and field-tested.{" "}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "16px",
                  fontStyle: "italic",
                  color: "#0D1117",
                }}
              >
                We don't drop in and leave.
              </span>
            </p>
          </div>

          <a
            href="/programs"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "white",
              textDecoration: "none",
              background: "#2F8AC9",
              padding: "14px 24px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
              minWidth: "220px",
            }}
          >
            View All Programs →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
