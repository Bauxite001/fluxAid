// DonateSection.jsx

import { useEffect, useState } from "react";

const DonateSection = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024);
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardPadding = isMobile ? "32px 24px" : "48px 40px";

  return (
    <section
      style={{
        background: "#F8F9FB",
        padding: isMobile ? "56px 0 64px" : "72px 0 80px",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : "0 40px",
        }}
      >
        {/* ── HEADER ─────────────────────────── */}
        <div
          style={{
            marginBottom: isMobile ? "36px" : "48px",
          }}
        >
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
              Get Involved
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(34px, 5vw, 52px)",
              fontWeight: 700,
              color: "#0D1117",
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
              maxWidth: "700px",
            }}
          >
            Take{" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#6C609E",
              }}
            >
              Action
            </em>{" "}
            Today
          </h2>
        </div>

        {/* ── GRID ─────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
                ? "repeat(2, 1fr)"
                : "repeat(3, 1fr)",
            gap: isMobile ? "18px" : "20px",
          }}
        >
          {/* ── DONATE ───────────────────────── */}
          <a
            href="/donate"
            style={{
              background: "#0F1E35",
              borderRadius: "20px",
              padding: cardPadding,
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
              transition: "all 0.25s ease",
              cursor: "pointer",
              minHeight: isMobile ? "300px" : "340px",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0,0,0,0.22), 0 0 0 1.5px rgba(47,138,201,0.4)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.15)";
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #2F8AC9, #6C609E)",
              }}
            />

            {/* Glow */}
            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: isMobile ? "180px" : "240px",
                height: isMobile ? "180px" : "240px",
                background:
                  "radial-gradient(circle, rgba(47,138,201,0.18) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />

            {/* Icon */}
            <div
              style={{
                width: isMobile ? "50px" : "56px",
                height: isMobile ? "50px" : "56px",
                borderRadius: "14px",
                background: "rgba(47,138,201,0.15)",
                border: "1px solid rgba(47,138,201,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "22px" : "26px",
                marginBottom: "24px",
                position: "relative",
                zIndex: 1,
              }}
            >
              💛
            </div>

            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#2F8AC9",
                marginBottom: "12px",
                display: "block",
                position: "relative",
                zIndex: 1,
              }}
            >
              Support Us
            </span>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 700,
                color: "#F0F6FF",
                lineHeight: 1.1,
                marginBottom: "16px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Donate
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#5BA3E0",
                }}
              >
                to the Cause
              </em>
            </h3>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: isMobile ? "13px" : "14px",
                fontWeight: 300,
                color: "rgba(200,214,232,0.6)",
                lineHeight: 1.8,
                marginBottom: "auto",
                paddingBottom: "28px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Every gift goes directly to the communities we serve. Fund a meal,
              a clinic visit, or a full programme.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#2F8AC9",
                }}
              >
                Donate Now
              </span>

              <span
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(47,138,201,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  color: "#2F8AC9",
                }}
              >
                →
              </span>
            </div>
          </a>

          {/* ── VOLUNTEER ────────────────────── */}
          <a
            href="/volunteer"
            style={{
              background: "#6C609E",
              borderRadius: "20px",
              padding: cardPadding,
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(108,96,158,0.3)",
              transition: "all 0.25s ease",
              cursor: "pointer",
              minHeight: isMobile ? "300px" : "340px",
            }}
          >
            <span
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-10px",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? "110px" : "160px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.05)",
                lineHeight: 1,
              }}
            >
              V
            </span>

            <div
              style={{
                width: isMobile ? "50px" : "56px",
                height: isMobile ? "50px" : "56px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "22px" : "26px",
                marginBottom: "24px",
                position: "relative",
                zIndex: 1,
              }}
            >
              🤝
            </div>

            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "12px",
                display: "block",
                position: "relative",
                zIndex: 1,
              }}
            >
              Join the Team
            </span>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "16px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Volunteer
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Your Time
              </em>
            </h3>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: isMobile ? "13px" : "14px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.8,
                marginBottom: "auto",
                paddingBottom: "28px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Give your skills, energy, and time. Our volunteers are the
              backbone of everything we do on the ground.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255,255,255,0.15)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Apply Now
              </span>

              <span
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  color: "#FFFFFF",
                }}
              >
                →
              </span>
            </div>
          </a>

          {/* ── ABOUT ────────────────────────── */}
          <a
            href="/about"
            style={{
              background: "#FFFFFF",
              borderRadius: "20px",
              padding: cardPadding,
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              position: "relative",
              overflow: "hidden",
              boxShadow:
                "0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
              transition: "all 0.25s ease",
              cursor: "pointer",
              minHeight: isMobile ? "300px" : "340px",
            }}
          >
            <span
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-10px",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? "110px" : "160px",
                fontWeight: 700,
                color: "rgba(0,0,0,0.03)",
                lineHeight: 1,
              }}
            >
              A
            </span>

            <div
              style={{
                width: isMobile ? "50px" : "56px",
                height: isMobile ? "50px" : "56px",
                borderRadius: "14px",
                background: "rgba(108,96,158,0.08)",
                border: "1px solid rgba(108,96,158,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "22px" : "26px",
                marginBottom: "24px",
                position: "relative",
                zIndex: 1,
              }}
            >
              🌍
            </div>

            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#6C609E",
                marginBottom: "12px",
                display: "block",
                position: "relative",
                zIndex: 1,
              }}
            >
              Our Story
            </span>

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 700,
                color: "#0D1117",
                lineHeight: 1.1,
                marginBottom: "16px",
                position: "relative",
                zIndex: 1,
              }}
            >
              About
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#6C609E",
                }}
              >
                Flux Aid
              </em>
            </h3>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: isMobile ? "13px" : "14px",
                fontWeight: 300,
                color: "#6B7280",
                lineHeight: 1.8,
                marginBottom: "auto",
                paddingBottom: "28px",
                position: "relative",
                zIndex: 1,
              }}
            >
              Learn who we are, why we started, and what drives our work across
              Nigeria and Africa every single day.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "20px",
                borderTop: "1px solid rgba(0,0,0,0.06)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#6C609E",
                }}
              >
                Learn More
              </span>

              <span
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(108,96,158,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "15px",
                  color: "#6C609E",
                }}
              >
                →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
