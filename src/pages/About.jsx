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

const isMobile = window.innerWidth <= 768;

const About = () => {
  return (
    <div style={{ background: "#F8F9FB", overflowX: "hidden" }}>
      {/* ── HERO ─────────────────────────────── */}
      <section
        style={{
          background: "#0F1E35",
          position: "relative",
          overflow: "hidden",
          padding: isMobile ? "90px 20px 60px" : "100px 80px 80px",
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
            width: isMobile ? "260px" : "500px",
            height: isMobile ? "260px" : "500px",
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
            width: isMobile ? "200px" : "360px",
            height: isMobile ? "200px" : "360px",
            background:
              "radial-gradient(circle, rgba(47,138,201,0.15) 0%, transparent 65%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* Africa watermark */}
        {!isMobile && (
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
        )}

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
              fontSize: isMobile
                ? "clamp(42px, 14vw, 64px)"
                : "clamp(52px, 7vw, 88px)",
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
              fontSize: isMobile ? "15px" : "16px",
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
          <div
            style={{
              display: "flex",
              gap: "14px",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
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
                textAlign: "center",
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
                textAlign: "center",
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
          padding: isMobile ? "60px 20px" : "80px 80px",
          borderBottom: "1px solid #E5E7EB",
          background: "#F8F9FB",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "80px",
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
                fontSize: isMobile ? "15px" : "16px",
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
          padding: isMobile ? "60px 20px" : "80px 80px",
          borderBottom: "1px solid #E5E7EB",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "80px",
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
                fontSize: isMobile ? "18px" : "clamp(18px, 2vw, 22px)",
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

      {/* ── CORE VALUES ──────────────────────── */}
      <section
        style={{
          padding: isMobile ? "60px 20px" : "80px 80px",
          borderBottom: "1px solid #E5E7EB",
          background: "#F8F9FB",
        }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(5, 1fr)",
              gap: "16px",
            }}
          >
            {VALUES.map((val, i) => (
              <div
                key={val.num}
                style={{
                  background: i % 2 === 0 ? "#0F1E35" : "#FFFFFF",
                  borderRadius: "16px",
                  padding: isMobile ? "28px 22px" : "36px 28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
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
                  }}
                >
                  {val.title}
                </h4>

                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: i % 2 === 0 ? "rgba(200,214,232,0.5)" : "#6B7280",
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
          padding: isMobile ? "60px 20px" : "80px 80px",
          borderBottom: "1px solid #E5E7EB",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "80px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              position: isMobile ? "relative" : "sticky",
              top: isMobile ? "unset" : "100px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 700,
                color: "#0D1117",
                lineHeight: 1.05,
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
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
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
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                  padding: isMobile ? "20px" : "24px",
                  background: "#F8F9FB",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  borderLeft: `3px solid ${item.color}`,
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: `${item.color}12`,
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
          padding: isMobile ? "60px 20px" : "80px 80px",
          borderBottom: "1px solid #E5E7EB",
          background: "#F8F9FB",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "340px 1fr",
              gap: isMobile ? "40px" : "60px",
              alignItems: "start",
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  maxWidth: isMobile ? "100%" : "340px",
                  margin: isMobile ? "0 auto" : "0",
                  aspectRatio: "3/4",
                  background: "#0F1E35",
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  <img
                    src="/CEO_flux.jpeg"
                    alt="ceo_flux
                  "
                  />
                </div>
              </div>
            </div>

            <div
              style={{
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

              <div
                style={{
                  background: "#0F1E35",
                  borderRadius: "12px",
                  padding: isMobile ? "22px" : "28px 32px",
                  borderLeft: "3px solid #6C609E",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: isMobile ? "16px" : "18px",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "rgba(200,214,232,0.75)",
                    lineHeight: 1.65,
                    margin: 0,
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
          padding: isMobile ? "50px 20px" : "64px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: "30px",
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

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "14px",
              width: isMobile ? "100%" : "auto",
            }}
          >
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
                textAlign: "center",
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
                textAlign: "center",
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
