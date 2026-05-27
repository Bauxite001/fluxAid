// pages/About.jsx

import {
  MISSION,
  VISION,
  VALUES,
  CEO_NAME,
  CEO_BIO_SHORT,
  KEY_QUOTE,
  ORG_NAME,
  FOUNDING_YEAR,
} from "../constants";

const About = () => {
  return (
    <div style={{ background: "#F8F9FB" }}>
      {/* ── HERO ─────────────────────────────── */}
      <section
        style={{
          background: "#0F1E35",
          position: "relative",
          overflow: "hidden",
          padding: "100px 80px 80px",
          borderBottom: "none",
        }}
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(47,138,201,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-80px",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 65%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "360px",
            height: "360px",
            background:
              "radial-gradient(circle, rgba(47,138,201,0.15) 0%, transparent 65%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* Africa watermark */}
        <svg
          style={{
            position: "absolute",
            top: "50%",
            right: "80px",
            transform: "translateY(-50%)",
            width: "360px",
            opacity: 0.04,
            pointerEvents: "none",
          }}
          viewBox="0 0 400 500"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M200 15 C240 15 290 35 330 80 C370 125 380 185 365 240 C350 295 320 335 300 375 C280 415 265 455 240 480 C220 498 200 498 180 490 C160 482 140 460 120 430 C100 400 85 365 65 325 C45 285 20 240 18 190 C16 140 35 90 75 55 C115 20 160 15 200 15Z" />
        </svg>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "720px" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#2F8AC9",
                display: "inline-block",
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
              Who We Are
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(52px, 7vw, 88px)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-2px",
              color: "#F0F6FF",
              marginBottom: "28px",
            }}
          >
            Built for the
            <br />
            <em
              style={{ fontStyle: "italic", fontWeight: 400, color: "#5BA3E0" }}
            >
              vulnerable.
            </em>
            <br />
            Driven by
            <br />
            <em
              style={{ fontStyle: "italic", fontWeight: 400, color: "#9B8EC4" }}
            >
              purpose.
            </em>
          </h1>

          {/* Sub */}
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "rgba(200,214,232,0.6)",
              maxWidth: "560px",
              marginBottom: "40px",
            }}
          >
            Flux Aid Initiative is a non-governmental organisation committed to
            advocacy, empowerment, and the upliftment of vulnerable communities
            across Nigeria and Africa.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "14px" }}>
            <a
              href="/donate"
              style={{
                background: "#2F8AC9",
                color: "white",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "14px 32px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Support Our Work
            </a>
            <a
              href="/volunteer"
              style={{
                background: "transparent",
                color: "rgba(200,214,232,0.7)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "13px 28px",
                border: "1px solid rgba(200,214,232,0.2)",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* ── WAVE TRANSITION ──────────────────── */}
      <div style={{ background: "#0F1E35", lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"
            fill="#F8F9FB"
          />
        </svg>
      </div>

      {/* ── MISSION ──────────────────────────── */}
      <section
        style={{
          padding: "80px 80px",
          borderBottom: "1px solid #E5E7EB",
          background: "#F8F9FB",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
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
                Mission
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 700,
                color: "#0D1117",
                lineHeight: 1.05,
                letterSpacing: "-0.5px",
              }}
            >
              What we{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#6C609E",
                }}
              >
                stand for
              </em>
            </h2>
          </div>

          <div>
            <div
              style={{
                width: "3px",
                height: "48px",
                background: "linear-gradient(180deg, #2F8AC9, #6C609E)",
                borderRadius: "2px",
                marginBottom: "24px",
              }}
            />
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "#4B5563",
              }}
            >
              {MISSION}
            </p>
          </div>
        </div>
      </section>

      {/* ── VISION ───────────────────────────── */}
      <section
        style={{
          padding: "80px 80px",
          borderBottom: "1px solid #E5E7EB",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
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
                  background: "#6C609E",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "3.5px",
                  textTransform: "uppercase",
                  color: "#6C609E",
                }}
              >
                Vision
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 700,
                color: "#0D1117",
                lineHeight: 1.05,
                letterSpacing: "-0.5px",
              }}
            >
              Where we are{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#2F8AC9",
                }}
              >
                going
              </em>
            </h2>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(18px, 2vw, 22px)",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 1.75,
                color: "#374151",
              }}
            >
              {VISION}
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY QUOTE ────────────────────────── */}
      <section
        style={{
          background: "#0F1E35",
          padding: "80px 80px",
          borderBottom: "none",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(47,138,201,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            pointerEvents: "none",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "280px",
            height: "280px",
            background:
              "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Opening quote mark */}
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "80px",
              fontWeight: 700,
              color: "rgba(47,138,201,0.2)",
              lineHeight: 1,
              display: "block",
              marginBottom: "-20px",
              userSelect: "none",
            }}
          >
            "
          </span>
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(18px, 2.2vw, 26px)",
              lineHeight: 1.65,
              color: "rgba(200,214,232,0.85)",
              marginBottom: "28px",
            }}
          >
            {KEY_QUOTE.replace(/"/g, "")}
          </blockquote>

          {/* Attribution line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <span
              style={{ width: "32px", height: "1px", background: "#2F8AC9" }}
            />
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#2F8AC9",
              }}
            >
              {ORG_NAME}
            </span>
            <span
              style={{ width: "32px", height: "1px", background: "#2F8AC9" }}
            />
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────── */}
      <section
        style={{
          padding: "80px 80px",
          borderBottom: "1px solid #E5E7EB",
          background: "#F8F9FB",
        }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          {/* Header */}
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
              What Guides Us
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 700,
              color: "#0D1117",
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
              marginBottom: "48px",
            }}
          >
            Core{" "}
            <em
              style={{ fontStyle: "italic", fontWeight: 400, color: "#6C609E" }}
            >
              Values
            </em>
          </h2>

          {/* Values grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "16px",
            }}
          >
            {VALUES.map((val, i) => (
              <div
                key={val.num}
                style={{
                  background: i % 2 === 0 ? "#0F1E35" : "#FFFFFF",
                  borderRadius: "16px",
                  padding: "36px 28px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow:
                    i % 2 === 0
                      ? "0 8px 32px rgba(0,0,0,0.12)"
                      : "0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)",
                  transition: "transform 0.22s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-4px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                {/* Top accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background:
                      i % 2 === 0
                        ? "linear-gradient(90deg, #2F8AC9, #6C609E)"
                        : "linear-gradient(90deg, #6C609E, #2F8AC9)",
                    borderRadius: "16px 16px 0 0",
                  }}
                />

                {/* Glow on dark cards */}
                {i % 2 === 0 && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-40px",
                      right: "-40px",
                      width: "140px",
                      height: "140px",
                      background:
                        "radial-gradient(circle, rgba(47,138,201,0.15) 0%, transparent 70%)",
                      borderRadius: "50%",
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Faded number */}
                <span
                  style={{
                    position: "absolute",
                    bottom: "-16px",
                    right: "-4px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "100px",
                    fontWeight: 700,
                    lineHeight: 1,
                    color:
                      i % 2 === 0
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(0,0,0,0.03)",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {val.num}
                </span>

                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: i % 2 === 0 ? "rgba(200,214,232,0.25)" : "#9CA3AF",
                    display: "block",
                    marginBottom: "20px",
                  }}
                >
                  {val.num}
                </span>

                <h4
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: i % 2 === 0 ? "#F0F6FF" : "#0D1117",
                    lineHeight: 1.2,
                    marginBottom: "10px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {val.title}
                </h4>

                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: i % 2 === 0 ? "rgba(200,214,232,0.5)" : "#6B7280",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────── */}
      <section
        style={{
          padding: "80px 80px",
          borderBottom: "1px solid #E5E7EB",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <div style={{ position: "sticky", top: "100px" }}>
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
                Our Work
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 700,
                color: "#0D1117",
                lineHeight: 1.05,
                letterSpacing: "-0.5px",
                marginBottom: "16px",
              }}
            >
              What we{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#2F8AC9",
                }}
              >
                do
              </em>
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "#6B7280",
              }}
            >
              Four pillars drive everything we do across Nigeria and Africa
              every single day.
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {[
              {
                icon: "⚖️",
                label: "Advocacy",
                color: "#2F8AC9",
                desc: "Championing human rights, women's rights, child rights and political freedoms across Nigeria and Africa.",
              },
              {
                icon: "🤝",
                label: "Empowerment",
                color: "#6C609E",
                desc: "Financial literacy, skills training, and economic empowerment for vulnerable communities.",
              },
              {
                icon: "📢",
                label: "Public Awareness",
                color: "#2F8AC9",
                desc: "Mobilising communities and promoting transparency in governance and public life.",
              },
              {
                icon: "🎗️",
                label: "Operational Charity",
                color: "#6C609E",
                desc: "Direct support to individuals and communities through targeted charitable interventions.",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                  padding: "24px",
                  background: "#F8F9FB",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  borderLeft: `3px solid ${item.color}`,
                  transition: "box-shadow 0.2s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.08), 0 0 0 1px ${item.color}30`;
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: `${item.color}12`,
                    border: `1px solid ${item.color}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: item.color,
                      marginBottom: "6px",
                    }}
                  >
                    {item.label}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      lineHeight: 1.75,
                      color: "#6B7280",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CEO / FOUNDER ────────────────────── */}
      <section
        style={{
          padding: "80px 80px",
          borderBottom: "1px solid #E5E7EB",
          background: "#F8F9FB",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header */}
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
              Leadership
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 700,
              color: "#0D1117",
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
              marginBottom: "48px",
            }}
          >
            Meet our{" "}
            <em
              style={{ fontStyle: "italic", fontWeight: 400, color: "#6C609E" }}
            >
              Founder
            </em>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "340px 1fr",
              gap: "60px",
              alignItems: "start",
            }}
          >
            {/* ── CEO PHOTO ────────────────────── */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  background: "#0F1E35",
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
                }}
              >
                {/*
                  ── DROP CEO PHOTO HERE ──────────────────────────────────
                  Replace the placeholder below with:
                  <img
                    src="/images/team/ceo.jpg"
                    alt={CEO_NAME}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                  ──────────────────────────────────────────────────────── */}

                {/* Grid texture placeholder */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "linear-gradient(rgba(47,138,201,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.05) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                    pointerEvents: "none",
                  }}
                />

                {/* Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "200px",
                    height: "200px",
                    background:
                      "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />

                {/* Placeholder icon */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    opacity: 0.2,
                  }}
                >
                  <span style={{ fontSize: "56px" }}>👤</span>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#9CA3AF",
                    }}
                  >
                    Photo Coming Soon
                  </span>
                </div>

                {/* Name overlay at bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "32px 24px 24px",
                    background:
                      "linear-gradient(to top, rgba(15,30,53,0.96) 0%, transparent 100%)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#F0F6FF",
                      lineHeight: 1,
                      marginBottom: "6px",
                    }}
                  >
                    {CEO_NAME}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      color: "#2F8AC9",
                    }}
                  >
                    Founder & Chief Executive · {ORG_NAME}
                  </div>
                </div>
              </div>

              {/* Founded badge below photo */}
              <div
                style={{
                  marginTop: "16px",
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "10px",
                  padding: "14px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#6C609E",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "#6B7280",
                  }}
                >
                  Founded {FOUNDING_YEAR}
                </span>
              </div>
            </div>

            {/* Bio */}
            <div
              style={{
                paddingTop: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "#374151",
                  margin: 0,
                }}
              >
                {CEO_BIO_SHORT}
              </p>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "#374151",
                  margin: 0,
                }}
              >
                Under {CEO_NAME}'s leadership, Flux Aid Initiative has become
                known for its work across human rights, women's rights, child
                protection, economic empowerment, and good governance —
                operating with a deep belief that hard work, integrity, and
                transparency are the hallmarks of a successful society.
              </p>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "#374151",
                  margin: 0,
                }}
              >
                A key initiative under {CEO_NAME}'s direction is the
                Distinguished Ambassador of Change National Gold Award (DANGA) —
                a private sector recognition programme that identifies and
                celebrates Nigerians of outstanding character across all sectors
                of society.
              </p>

              {/* Quote from CEO */}
              <div
                style={{
                  background: "#0F1E35",
                  borderRadius: "12px",
                  padding: "28px 32px",
                  position: "relative",
                  overflow: "hidden",
                  borderLeft: "3px solid #6C609E",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-30px",
                    right: "-30px",
                    width: "140px",
                    height: "140px",
                    background:
                      "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "18px",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "rgba(200,214,232,0.75)",
                    lineHeight: 1.65,
                    margin: 0,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  "Africa's transformation will come from within — from the men
                  and women who rise daily to serve, build, and lead with
                  purpose."
                </p>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "#6C609E",
                    display: "block",
                    marginTop: "16px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  — {CEO_NAME}, Founder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────── */}
      <section
        style={{
          background: "#6C609E",
          padding: "64px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "280px",
            height: "280px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.5px",
                marginBottom: "10px",
              }}
            >
              Ready to make a{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                difference?
              </em>
            </h3>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.65)",
                margin: 0,
              }}
            >
              Join us on the ground or support our work from wherever you are.
            </p>
          </div>
          <div style={{ display: "flex", gap: "14px", flexShrink: 0 }}>
            <a
              href="/donate"
              style={{
                background: "#FFFFFF",
                color: "#6C609E",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "14px 32px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Donate Now
            </a>
            <a
              href="/volunteer"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.8)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "13px 28px",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
