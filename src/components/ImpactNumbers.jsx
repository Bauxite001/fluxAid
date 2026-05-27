// ImpactNumbers.jsx

const STATS = [
  {
    value: "Many",
    desc: "People directly reached across Africa",
    sub: "and growing every single day",
    color: "#2F8AC9",
    bg: "#0F1E35",
    dark: true,
  },
  {
    value: "94%",
    desc: "Of funds go directly to programmes",
    sub: "not office budgets or overhead",
    color: "#6C609E",
    bg: "#FFFFFF",
    dark: false,
  },
  {
    value: "Active",
    desc: "Projects running on the ground now",
    sub: "across Nigeria and Africa",
    color: "#2F8AC9",
    bg: "#6C609E",
    dark: true,
  },
];

const ImpactNumbers = () => {
  return (
    <section
      style={{
        background: "#F8F9FB",
        padding: "72px 0 80px",
        borderBottom: "1px solid #E5E7EB",
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
            alignItems: "center",
            gap: "10px",
            marginBottom: "48px",
            flexWrap: "wrap",
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
            By the Numbers
          </span>

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#E5E7EB",
              maxWidth: "80px",
              minWidth: "40px",
            }}
          />

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 700,
              color: "#0D1117",
              lineHeight: 1,
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
              Impact
            </em>
          </h2>
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.value}
              style={{
                background: stat.bg,
                borderRadius: "16px",
                padding: "clamp(28px, 5vw, 44px)",
                position: "relative",
                overflow: "hidden",
                boxShadow: stat.dark
                  ? "0 8px 40px rgba(0,0,0,0.15)"
                  : "0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
                transition: "0.25s ease",
                cursor: "default",
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
                      ? "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.15))"
                      : `linear-gradient(90deg, ${stat.color}, ${
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
                  width: "220px",
                  height: "220px",
                  background: `radial-gradient(circle, ${stat.color}25 0%, transparent 70%)`,
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />

              {/* GRID */}
              {stat.dark && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `linear-gradient(${stat.color}06 1px, transparent 1px), linear-gradient(90deg, ${stat.color}06 1px, transparent 1px)`,
                    backgroundSize: "36px 36px",
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* INDEX */}
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "20px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: stat.dark
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(0,0,0,0.1)",
                }}
              >
                0{i + 1}
              </span>

              {/* VALUE */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(52px, 10vw, 80px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-2px",
                  color: stat.dark ? "#F0F6FF" : stat.color,
                  marginBottom: "6px",
                  position: "relative",
                  zIndex: 1,
                  wordBreak: "break-word",
                }}
              >
                {stat.value}
              </div>

              {/* UNDERLINE */}
              <div
                style={{
                  width: "32px",
                  height: "3px",
                  background: stat.dark ? "rgba(255,255,255,0.25)" : stat.color,
                  borderRadius: "2px",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: 1,
                }}
              />

              {/* DESCRIPTION */}
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: stat.dark ? "rgba(200,214,232,0.75)" : "#374151",
                  lineHeight: 1.7,
                  marginBottom: "8px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {stat.desc}
              </p>

              {/* SUBTEXT */}
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "14px",
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: stat.dark ? "rgba(200,214,232,0.35)" : "#9CA3AF",
                  lineHeight: 1.5,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* QUOTE STRIP */}
        <div
          style={{
            marginTop: "32px",
            background: "#0F1E35",
            borderRadius: "12px",
            padding: "clamp(22px, 4vw, 36px)",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            flexWrap: "wrap",
          }}
        >
          {/* GLOWS */}
          <div
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "180px",
              height: "180px",
              background:
                "radial-gradient(circle, rgba(108,96,158,0.25) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "200px",
              width: "160px",
              height: "160px",
              background:
                "radial-gradient(circle, rgba(47,138,201,0.2) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          {/* LINE */}
          <span
            style={{
              width: "36px",
              height: "1px",
              background: "#2F8AC9",
              flexShrink: 0,
            }}
          />

          {/* QUOTE */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(16px, 3vw, 18px)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(200,214,232,0.7)",
              lineHeight: 1.65,
              flex: 1,
              minWidth: "240px",
              position: "relative",
              zIndex: 1,
            }}
          >
            "We are not here to look good on paper. We are here to change lives
            — and these numbers are just the beginning."
          </p>

          {/* BADGE */}
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#2F8AC9",
              border: "1px solid rgba(47,138,201,0.3)",
              padding: "8px 16px",
              borderRadius: "4px",
              flexShrink: 0,
              position: "relative",
              zIndex: 1,
              whiteSpace: "nowrap",
            }}
          >
            Flux Aid Initiative
          </span>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
