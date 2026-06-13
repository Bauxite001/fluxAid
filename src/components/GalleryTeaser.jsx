// GalleryTeaser.jsx — fetches live gallery items from Supabase

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const isVideo = (url) => {
  if (!url) return false;
  return (
    url.includes(".mp4") ||
    url.includes(".mov") ||
    url.includes(".webm") ||
    url.includes("video")
  );
};

const GalleryTeaser = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Fetch preview items (5 for teaser)
    supabase
      .from("gallery_items")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .limit(5)
      .then(({ data, error }) => {
        if (error) console.error(error);
        else setItems(data || []);
      });

    // Get total count
    supabase
      .from("gallery_items")
      .select("id", { count: "exact" })
      .eq("published", true)
      .then(({ count }) => setTotal(count || 0));
  }, []);

  // Placeholder items shown when no data yet
  const PLACEHOLDERS = [
    {
      id: "p1",
      src: null,
      alt: "Field Activity",
      emoji: "🤝",
      category: "Field Activity",
    },
    {
      id: "p2",
      src: null,
      alt: "Africa Outreach",
      emoji: "🌍",
      category: "Community",
    },
    {
      id: "p3",
      src: null,
      alt: "Youth Tech Programme",
      emoji: "👩🏾‍💻",
      category: "Team",
    },
    {
      id: "p4",
      src: null,
      alt: "Health Clinic",
      emoji: "🏥",
      category: "Field Activity",
    },
    {
      id: "p5",
      src: null,
      alt: "Education Programme",
      emoji: "📖",
      category: "Community",
    },
  ];

  const displayItems = items.length > 0 ? items : PLACEHOLDERS;
  const displayTotal = total > 0 ? total : 64;

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
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-end",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "16px" : "0",
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
            View All {displayTotal > 0 ? displayTotal : ""} Photos →
          </a>
        </div>

        {/* MOSAIC GRID */}
        {items.length > 0 ? (
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
            {/* LARGE ITEM */}
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
                  width: "240px",
                  height: "240px",
                  background:
                    "radial-gradient(circle, rgba(47,138,201,0.2) 0%, transparent 70%)",
                  borderRadius: "50%",
                  zIndex: 1,
                }}
              />

              {/* Media */}
              {displayItems[0]?.media_url ? (
                isVideo(displayItems[0].media_url) ? (
                  <video
                    src={displayItems[0].media_url}
                    muted
                    loop
                    playsInline
                    autoPlay
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img
                    src={displayItems[0].media_url}
                    alt={displayItems[0].alt}
                    onError={(e) => {
                      e.target.style.display = "none";
                      const fb =
                        e.target.parentElement.querySelector(
                          ".teaser-fallback",
                        );
                      if (fb) fb.style.display = "flex";
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )
              ) : (
                <div
                  className="teaser-fallback"
                  style={{
                    display: "none",
                    position: "absolute",
                    inset: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: "72px",
                      opacity: 0.1,
                      userSelect: "none",
                    }}
                  >
                    {displayItems[0]?.emoji || "🌍"}
                  </span>
                </div>
              )}

              {/* Video badge */}
              {displayItems[0]?.media_url &&
                isVideo(displayItems[0].media_url) && (
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "60px",
                      zIndex: 5,
                      background: "rgba(108,96,158,0.85)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "4px",
                      padding: "4px 10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <span style={{ fontSize: "10px" }}>▶</span>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "8px",
                        fontWeight: 700,
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "white",
                      }}
                    >
                      Video
                    </span>
                  </div>
                )}

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

              {/* Alt text */}
              <span
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
                }}
              >
                {displayItems[0]?.alt}
              </span>

              {/* Featured badge */}
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

            {/* SMALL ITEMS */}
            {displayItems.slice(1, 4).map((item, i) => (
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

                {/* Media */}
                {item.media_url ? (
                  isVideo(item.media_url) ? (
                    <video
                      src={item.media_url}
                      muted
                      loop
                      playsInline
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <img
                      src={item.media_url}
                      alt={item.alt}
                      onError={(e) => {
                        e.target.style.display = "none";
                        const fb = e.target.parentElement.querySelector(
                          ".teaser-fallback-sm",
                        );
                        if (fb) fb.style.display = "flex";
                      }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )
                ) : (
                  <div
                    className="teaser-fallback-sm"
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "32px",
                        opacity: 0.2,
                        userSelect: "none",
                      }}
                    >
                      {item.emoji || "📷"}
                    </span>
                  </div>
                )}

                {/* Video badge */}
                {item.media_url && isVideo(item.media_url) && (
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      background: "rgba(108,96,158,0.8)",
                      borderRadius: "4px",
                      padding: "2px 7px",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "8px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "white",
                      zIndex: 3,
                    }}
                  >
                    VIDEO
                  </div>
                )}

                {/* Alt text — always visible */}
                {!item.src && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "12px",
                      right: "12px",
                      zIndex: 3,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#0D1117",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.alt}
                  </span>
                )}
              </div>
            ))}

            {/* MORE TILE */}
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
                {displayTotal > 5 ? `+${displayTotal - 5}` : "View"}
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
        ) : (
          /* EMPTY STATE */
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "16px",
              padding: "clamp(40px, 8vw, 60px)",
              textAlign: "center",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            }}
          >
            <span
              style={{
                fontSize: "48px",
                display: "block",
                marginBottom: "16px",
                opacity: 0.3,
              }}
            >
              🖼️
            </span>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#0D1117",
                marginBottom: "8px",
              }}
            >
              Gallery Coming Soon
            </h3>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#6B7280",
                lineHeight: 1.6,
                maxWidth: "480px",
                margin: "0 auto 24px",
              }}
            >
              We're capturing moments from our field activities. Check back soon
              to see photos and videos from our latest programs and impact
              stories.
            </p>
            <a
              href="/contact"
              style={{
                display: "inline-block",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#FFFFFF",
                textDecoration: "none",
                background: "#2F8AC9",
                padding: "13px 28px",
                borderRadius: "6px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Get Involved
            </a>
          </div>
        )}

        {/* VIEW ALL BUTTON */}
        {items.length > 0 && (
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
        )}
      </div>
    </section>
  );
};

export default GalleryTeaser;
