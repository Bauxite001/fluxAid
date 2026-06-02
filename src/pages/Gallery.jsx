// pages/Gallery.jsx

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const CATEGORIES = [
  "All",
  "Field Activity",
  "Awards",
  "Team",
  "Community",
  "Branded",
];

const CAT_COLOR = {
  "Field Activity": "#2F8AC9",
  Awards: "#6C609E",
  Team: "#2F8AC9",
  Community: "#6C609E",
  Branded: "#2F8AC9",
};

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Fetch gallery items from Supabase
  useEffect(() => {
    supabase
      .from("gallery_items")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) console.error(error);
        else setItems(data || []);
        setLoading(false);
      });
  }, []);

  // Track window resizing for element tracking anomalies on mobile vs desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  const lbIndex = lightbox
    ? filtered.findIndex((i) => i.id === lightbox.id)
    : -1;
  const canPrev = lbIndex > 0;
  const canNext = lbIndex < filtered.length - 1;

  return (
    <div style={{ background: "#F8F9FB", minHeight: "100vh" }}>
      {/* ── HERO ─────────────────────────────── */}
      <section
        style={{
          background: "#0F1E35",
          padding: isMobile ? "80px 24px 60px" : "100px 80px 80px",
          position: "relative",
          overflow: "hidden",
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

        {/* Glows */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: isMobile ? "250px" : "400px",
            height: isMobile ? "250px" : "400px",
            background:
              "radial-gradient(circle, rgba(108,96,158,0.22) 0%, transparent 65%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: isMobile ? "20px" : "200px",
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(circle, rgba(47,138,201,0.15) 0%, transparent 65%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
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
              Moments in the Field
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(42px, 7vw, 88px)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-2px",
              color: "#F0F6FF",
              marginBottom: "24px",
            }}
          >
            Our{" "}
            <em
              style={{ fontStyle: "italic", fontWeight: 400, color: "#9B8EC4" }}
            >
              Gallery
            </em>
          </h1>

          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(200,214,232,0.55)",
              maxWidth: "520px",
              margin: 0,
            }}
          >
            Photos from the ground — field activities, award ceremonies,
            community work, and the people behind Flux Aid Initiative.
          </p>
        </div>
      </section>

      {/* Wave */}
      <div style={{ background: "#0F1E35", lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 50"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,50 960,50 1440,0 L1440,50 L0,50 Z"
            fill="#F8F9FB"
          />
        </svg>
      </div>

      {/* ── FILTER BAR ───────────────────────── */}
      <div
        style={{
          background: "rgba(248,249,251,0.96)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #E5E7EB",
          padding: isMobile ? "12px 24px" : "16px 80px",
          position: "sticky",
          top: "0",
          zIndex: 40,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: isMobile ? "12px" : "0px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            overflowX: "auto",
            width: "100%",
            WebkitOverflowScrolling: "touch",
            paddingBottom: isMobile ? "6px" : "0px",
          }}
        >
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "9px 18px",
                  borderRadius: "4px",
                  border: active ? "none" : "1.5px solid #E5E7EB",
                  background: active
                    ? cat === "All" || CATEGORIES.indexOf(cat) % 2 === 0
                      ? "#2F8AC9"
                      : "#6C609E"
                    : "#FFFFFF",
                  color: active ? "#FFFFFF" : "#6B7280",
                  cursor: "pointer",
                  outline: "none",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  boxShadow: active
                    ? "0 4px 14px rgba(47,138,201,0.25)"
                    : "none",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#9CA3AF",
            flexShrink: 0,
            marginLeft: isMobile ? "0px" : "20px",
          }}
        >
          {filtered.length} {filtered.length === 1 ? "photo" : "photos"}
        </span>
      </div>

      {/* ── GRID ─────────────────────────────── */}
      <div
        style={{
          padding: isMobile ? "24px 24px 60px" : "48px 80px 80px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "80px",
            }}
          >
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                color: "#9CA3AF",
              }}
            >
              Loading gallery...
            </p>
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px" }}>
            <span style={{ fontSize: "48px", opacity: 0.2 }}>🖼️</span>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                color: "#9CA3AF",
                marginTop: "16px",
              }}
            >
              No photos yet. Check back soon.
            </p>
          </div>
        )}

        {!loading && filtered.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(auto-fill, minmax(140px, 1fr))"
                : "repeat(4, 1fr)",
              gridAutoRows: isMobile ? "160px" : "220px",
              gap: isMobile ? "8px" : "12px",
            }}
          >
            {filtered.map((item, i) => {
              // Only apply masonry asymmetric sizes on desktop screens to prevent mobile breakage
              const isLarge = !isMobile && i % 7 === 0;
              const color = CAT_COLOR[item.category] || "#2F8AC9";
              const hovered = hoveredId === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setLightbox(item)}
                  onMouseEnter={() => !isMobile && setHoveredId(item.id)}
                  onMouseLeave={() => !isMobile && setHoveredId(null)}
                  style={{
                    gridColumn: isLarge ? "span 2" : "span 1",
                    gridRow: isLarge ? "span 2" : "span 1",
                    position: "relative",
                    background:
                      i % 3 === 0
                        ? "#0F1E35"
                        : i % 3 === 1
                          ? "#FFFFFF"
                          : "#EEF2F7",
                    borderRadius: isMobile ? "12px" : "16px",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "none",
                    outline: "none",
                    boxShadow: hovered
                      ? `0 16px 48px rgba(0,0,0,0.18), 0 0 0 2px ${color}60`
                      : i % 3 === 0
                        ? "0 4px 20px rgba(0,0,0,0.12)"
                        : "0 2px 8px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)",
                    transition: "all 0.3s ease",
                    transform: hovered ? "scale(1.01)" : "scale(1)",
                  }}
                >
                  {/* Grid texture ─ dark cards */}
                  {i % 3 === 0 && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `linear-gradient(${color}06 1px, transparent 1px), linear-gradient(90deg, ${color}06 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />
                  )}

                  {/* Glow ─ dark cards */}
                  {i % 3 === 0 && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-40px",
                        right: "-40px",
                        width: "160px",
                        height: "160px",
                        background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
                        borderRadius: "50%",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />
                  )}

                  {/* Top accent bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: `linear-gradient(90deg, ${color}, ${color === "#2F8AC9" ? "#6C609E" : "#2F8AC9"})`,
                      zIndex: 3,
                      borderRadius: "16px 16px 0 0",
                    }}
                  />

                  {/* Image or placeholder */}
                  {item.media_url ? (
                    item.media_url.includes(".mp4") ||
                    item.media_url.includes(".mov") ||
                    item.media_url.includes(".webm") ? (
                      <video
                        src={item.media_url}
                        muted
                        loop
                        playsInline
                        autoPlay={hoveredId === item.id}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                          transform:
                            hoveredId === item.id ? "scale(1.04)" : "scale(1)",
                        }}
                      />
                    ) : (
                      <img
                        src={item.media_url}
                        alt={item.alt}
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                          transform: hovered ? "scale(1.06)" : "scale(1)",
                        }}
                      />
                    )
                  ) : (
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: isLarge ? "64px" : "32px",
                        opacity: i % 3 === 0 ? 0.1 : 0.2,
                        userSelect: "none",
                        zIndex: 2,
                        pointerEvents: "none",
                      }}
                    >
                      {item.emoji}
                    </span>
                  )}

                  {/* Mobile Caption Visibility & Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: isMobile
                        ? "linear-gradient(to top, rgba(15,30,53,0.9) 0%, rgba(15,30,53,0.3) 50%, transparent 100%)"
                        : hovered
                          ? "rgba(0,0,0,0.45)"
                          : "rgba(0,0,0,0)",
                      transition: "background 0.3s ease",
                      zIndex: 4,
                    }}
                  />

                  {/* Hover & Mobile info panel */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: isMobile ? "10px" : "16px",
                      background: isMobile
                        ? "transparent"
                        : "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                      zIndex: 5,
                      opacity: isMobile ? 1 : hovered ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      textAlign: "left",
                    }}
                  >
                    {!isMobile && (
                      <span
                        style={{
                          display: "inline-block",
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "8px",
                          fontWeight: 700,
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                          color: color,
                          background: `${color}22`,
                          border: `1px solid ${color}40`,
                          padding: "3px 8px",
                          borderRadius: "3px",
                          marginBottom: "6px",
                        }}
                      >
                        {item.category}
                      </span>
                    )}
                    <p
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: isMobile ? "11px" : "12px",
                        fontWeight: isMobile ? 400 : 400,
                        color: "rgba(255,255,255,0.9)",
                        lineHeight: 1.3,
                        margin: 0,
                        whiteSpace: isMobile ? "nowrap" : "normal",
                        overflow: isMobile ? "hidden" : "visible",
                        textOverflow: isMobile ? "ellipsis" : "clip",
                      }}
                    >
                      {item.alt}
                    </p>
                  </div>

                  {/* Expand icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: isMobile ? "10px" : "16px",
                      right: isMobile ? "10px" : "16px",
                      width: "26px",
                      height: "26px",
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 5,
                      opacity: isMobile ? 0.8 : hovered ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      fontSize: "11px",
                      color: "white",
                    }}
                  >
                    ⤢
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ── BRANDED SHIRT ────────────────────── */}
      <section
        style={{
          background: "#0F1E35",
          padding: isMobile ? "60px 24px" : "72px 80px",
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
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 480px",
            gap: isMobile ? "40px" : "60px",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
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
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#2F8AC9",
                }}
              >
                Our Identity in the Field
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 3vw, 44px)",
                fontWeight: 700,
                color: "#F0F6FF",
                lineHeight: 1.1,
                letterSpacing: "-0.5px",
                marginBottom: "18px",
              }}
            >
              Recognisable.{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#9B8EC4",
                }}
              >
                Accountable.
              </em>
            </h3>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "rgba(200,214,232,0.55)",
                marginBottom: "32px",
              }}
            >
              Our field teams wear the Flux Aid Initiative shirt wherever they
              go. It is a mark of identity, accountability, and pride — ensuring
              communities always know who we are and who to hold us to.
            </p>
            <a
              href="/volunteer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "white",
                background: "#2F8AC9",
                padding: "13px 28px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Join as a Volunteer →
            </a>
          </div>

          {/* Shirt image container */}
          <div
            style={{
              width: "100%",
              height: isMobile ? "240px" : "320px",
              background: "#161E2E",
              borderRadius: "16px",
              border: "1px solid rgba(47,138,201,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
            }}
          >
            {/* Grid texture */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(47,138,201,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.04) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <img src="/flux_shirt2.jpeg" alt="shirt" />
            </div>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0,0,0,0.95)",
            backdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "12px" : "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: "960px", width: "100%" }}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: "-36px",
                right: 0,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#9CA3AF",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Close ✕
            </button>

            {/* Image area */}
            <div
              style={{
                width: "100%",
                background: "#0F1E35",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: isMobile ? "280px" : "440px",
                maxHeight: "65vh",
                position: "relative",
              }}
            >
              {/* Grid texture */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(47,138,201,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.05) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                  pointerEvents: "none",
                }}
              />

              {lightbox.media_url ? (
                lightbox.media_url.includes(".mp4") ||
                lightbox.media_url.includes(".mov") ||
                lightbox.media_url.includes(".webm") ? (
                  <video
                    src={lightbox.media_url}
                    controls
                    autoPlay
                    style={{
                      width: "100%",
                      maxHeight: "65vh",
                      objectFit: "contain",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                ) : (
                  <img
                    src={lightbox.media_url}
                    alt={lightbox.alt}
                    style={{
                      width: "100%",
                      maxHeight: "65vh",
                      objectFit: "contain",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                )
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                    padding: isMobile ? "40px 20px" : "80px",
                    opacity: 0.2,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <span style={{ fontSize: isMobile ? "54px" : "80px" }}>
                    {lightbox.emoji}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "2.5px",
                      textTransform: "uppercase",
                      color: "#9CA3AF",
                    }}
                  >
                    Photo coming soon
                  </span>
                </div>
              )}
            </div>

            {/* Caption + nav */}
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
                justifyContent: "space-between",
                marginTop: "16px",
                gap: "16px",
                padding: isMobile ? "0 8px" : "0",
              }}
            >
              <div style={{ width: "100%" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: CAT_COLOR[lightbox.category] || "#2F8AC9",
                    background: `${CAT_COLOR[lightbox.category] || "#2F8AC9"}18`,
                    border: `1px solid ${CAT_COLOR[lightbox.category] || "#2F8AC9"}35`,
                    padding: "4px 10px",
                    borderRadius: "3px",
                    marginBottom: "6px",
                  }}
                >
                  {lightbox.category}
                </span>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "#C8C8C8",
                    margin: 0,
                  }}
                >
                  {lightbox.alt}
                </p>
              </div>

              {/* Prev / Next Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexShrink: 0,
                  width: isMobile ? "100%" : "auto",
                  justifyContent: isMobile ? "flex-end" : "flex-start",
                }}
              >
                <button
                  onClick={() => canPrev && setLightbox(filtered[lbIndex - 1])}
                  disabled={!canPrev}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "6px",
                    border: "1px solid #2A2A2A",
                    background: "transparent",
                    color: canPrev ? "#9CA3AF" : "#2A2A2A",
                    cursor: canPrev ? "pointer" : "not-allowed",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                >
                  ←
                </button>
                <button
                  onClick={() => canNext && setLightbox(filtered[lbIndex + 1])}
                  disabled={!canNext}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "6px",
                    border: "1px solid #2A2A2A",
                    background: "transparent",
                    color: canNext ? "#9CA3AF" : "#2A2A2A",
                    cursor: canNext ? "pointer" : "not-allowed",
                    fontSize: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
