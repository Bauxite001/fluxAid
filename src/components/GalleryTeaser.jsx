// GalleryTeaser.jsx

import { useEffect, useState } from "react";

const GALLERY_ITEMS = [
  { id: 1, src: null, alt: "Field Activity", emoji: "🤝" },
  { id: 2, src: null, alt: "Africa Outreach", emoji: "🌍" },
  { id: 3, src: null, alt: "Youth Tech Programme", emoji: "👩🏾‍💻" },
  { id: 4, src: null, alt: "Health Clinic", emoji: "🏥" },
  { id: 5, src: null, alt: "Education Programme", emoji: "📖" },
];

const TOTAL_PHOTOS = 64;

const GalleryTeaser = () => {
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "20px" : "0",
            marginBottom: isMobile ? "28px" : "40px",
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
                Moments in the Field
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
                Gallery
              </em>
            </h2>
          </div>

          <a
            href="/gallery"
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
              alignSelf: isMobile ? "flex-start" : "auto",
            }}
          >
            View All {TOTAL_PHOTOS} Photos →
          </a>
        </div>

        {/* ── MOSAIC GRID ────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
                ? "1.5fr 1fr"
                : "2fr 1fr 1fr",
            gridTemplateRows: isMobile
              ? "420px repeat(4, 180px)"
              : isTablet
                ? "240px 240px 240px"
                : "260px 260px",
            gap: isMobile ? "14px" : "12px",
          }}
        >
          {/* ── LARGE ITEM ───────────────────── */}
          <div
            style={{
              gridRow: isMobile ? "span 1" : "span 2",
              gridColumn: isTablet && !isMobile ? "span 2" : "span 1",
              position: "relative",
              background: "#0F1E35",
              borderRadius: isMobile ? "14px" : "16px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              minHeight: isMobile ? "420px" : "auto",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.querySelector(".overlay").style.opacity = "1";
                e.currentTarget.querySelector(".label").style.opacity = "1";
                e.currentTarget.querySelector(".img-inner").style.transform =
                  "scale(1.04)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector(".overlay").style.opacity = "0";
              e.currentTarget.querySelector(".label").style.opacity = "0";
              e.currentTarget.querySelector(".img-inner").style.transform =
                "scale(1)";
            }}
          >
            {/* Grid texture */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(47,138,201,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.05) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
                pointerEvents: "none",
                zIndex: 1,
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
                  "radial-gradient(circle, rgba(47,138,201,0.2) 0%, transparent 70%)",
                borderRadius: "50%",
                zIndex: 1,
              }}
            />

            {/* Image / placeholder */}
            <div
              className="img-inner"
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.5s ease",
              }}
            >
              {GALLERY_ITEMS[0].src ? (
                <img
                  src={GALLERY_ITEMS[0].src}
                  alt={GALLERY_ITEMS[0].alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <span
                  style={{
                    fontSize: isMobile ? "56px" : "72px",
                    opacity: 0.12,
                    userSelect: "none",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {GALLERY_ITEMS[0].emoji}
                </span>
              )}
            </div>

            {/* Bottom gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "180px",
                background:
                  "linear-gradient(to top, rgba(15,30,53,0.9), transparent)",
                zIndex: 3,
              }}
            />

            {/* Hover overlay */}
            <div
              className="overlay"
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(47,138,201,0.12)",
                transition: "opacity 0.3s ease",
                opacity: 0,
                zIndex: 4,
              }}
            />

            {/* Label */}
            <span
              className="label"
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                zIndex: 5,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(200,214,232,0.9)",
                transition: "opacity 0.3s ease",
                opacity: isMobile ? 1 : 0,
              }}
            >
              {GALLERY_ITEMS[0].alt}
            </span>

            {/* Badge */}
            <span
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                zIndex: 5,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#2F8AC9",
                background: "rgba(47,138,201,0.15)",
                border: "1px solid rgba(47,138,201,0.3)",
                padding: "5px 10px",
                borderRadius: "4px",
              }}
            >
              Featured
            </span>
          </div>

          {/* ── SMALL ITEMS ──────────────────── */}
          {GALLERY_ITEMS.slice(1, 4).map((item, i) => (
            <div
              key={item.id}
              style={{
                position: "relative",
                background: i % 2 === 0 ? "#FFFFFF" : "#EEF2F7",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid #E5E7EB",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: isMobile ? "180px" : "auto",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.querySelector(".sm-overlay").style.opacity =
                    "1";

                  e.currentTarget.querySelector(".sm-label").style.opacity =
                    "1";

                  e.currentTarget.querySelector(".sm-inner").style.transform =
                    "scale(1.05)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector(".sm-overlay").style.opacity =
                  "0";
                e.currentTarget.querySelector(".sm-label").style.opacity = "0";
                e.currentTarget.querySelector(".sm-inner").style.transform =
                  "scale(1)";
              }}
            >
              {/* Grid texture */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  pointerEvents: "none",
                }}
              />

              {/* Image / Emoji */}
              <div
                className="sm-inner"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.5s ease",
                  position: "absolute",
                  inset: 0,
                }}
              >
                {item.src ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span
                    style={{
                      fontSize: isMobile ? "32px" : "36px",
                      opacity: 0.25,
                      userSelect: "none",
                    }}
                  >
                    {item.emoji}
                  </span>
                )}
              </div>

              {/* Overlay */}
              <div
                className="sm-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(47,138,201,0.1)",
                  transition: "opacity 0.3s ease",
                  opacity: 0,
                  zIndex: 2,
                }}
              />

              {/* Label */}
              <span
                className="sm-label"
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "12px",
                  zIndex: 3,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#0D1117",
                  transition: "opacity 0.3s ease",
                  opacity: isMobile ? 1 : 0,
                }}
              >
                {item.alt}
              </span>
            </div>
          ))}

          {/* ── MORE TILE ────────────────────── */}
          <a
            href="/gallery"
            style={{
              position: "relative",
              background: "#0F1E35",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
              transition: "all 0.25s ease",
              minHeight: isMobile ? "180px" : "auto",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 36px rgba(0,0,0,0.2), 0 0 0 1.5px rgba(47,138,201,0.4)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
            }}
          >
            {/* Grid texture */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(47,138,201,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.05) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                pointerEvents: "none",
              }}
            />

            {/* Glow */}
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                right: "-30px",
                width: "140px",
                height: "140px",
                background:
                  "radial-gradient(circle, rgba(108,96,158,0.25) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />

            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 700,
                color: "#F0F6FF",
                lineHeight: 1,
                marginBottom: "6px",
                position: "relative",
                zIndex: 1,
              }}
            >
              +{TOTAL_PHOTOS - GALLERY_ITEMS.length}
            </span>

            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "rgba(200,214,232,0.5)",
                position: "relative",
                zIndex: 1,
              }}
            >
              More Photos
            </span>
          </a>
        </div>

        {/* ── VIEW ALL BUTTON ───────────────── */}
        <div
          style={{
            marginTop: isMobile ? "18px" : "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href="/gallery"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#2F8AC9",
              textDecoration: "none",
              border: "1.5px solid rgba(47,138,201,0.35)",
              borderRadius: "6px",
              padding: isMobile ? "12px 24px" : "13px 32px",
              background: "transparent",
              transition: "all 0.2s",
              display: "inline-block",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.background = "#2F8AC9";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.borderColor = "#2F8AC9";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#2F8AC9";
              e.currentTarget.style.borderColor = "rgba(47,138,201,0.35)";
            }}
          >
            View Full Gallery →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryTeaser;
