// DailyActivity.jsx

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

// ── FALLBACK POST ─────────────────────
const FALLBACK_POST = {
  date: "Check back soon",
  tag: "Update",
  tagColor: "#2F8AC9",
  title: "Today's activity will appear here",
  coverEmoji: "🌍",
  coverImage: null,
  body: [
    "Our team is on the ground today. Check back later for a full update.",
  ],
  highlight: "",
  author: "Flux Aid Initiative",
  authorRole: "Field Team",
  location: "Nigeria & Africa",
  time: "",
};

const DailyActivity = () => {
  const [post, setPost] = useState(FALLBACK_POST);
  const [expanded, setExpanded] = useState(false);

  // Fetch latest published daily post from Supabase
  useEffect(() => {
    supabase
      .from("daily_posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .limit(1)
      .single()
      .then(({ data }) => {
        if (data) {
          setPost({
            ...data,
            // map database column names to what your component expects
            tagColor: data.tag_color,
            coverEmoji: data.cover_emoji,
            coverImage: data.media_url,
            authorRole: data.author_role,
          });
        }
      });
  }, []);

  const previewBody = post.body.slice(0, 2);
  const fullBody = post.body;

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
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* ── SECTION HEADER ─────────────────── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "48px",
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
                Today's Feature
              </span>
              <span
                style={{
                  width: "1px",
                  height: "12px",
                  background: "#D1D5DB",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 400,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#9CA3AF",
                }}
              >
                {post.date}
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
              On the{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#2F8AC9",
                }}
              >
                Ground
              </em>{" "}
              Today
            </h2>
          </div>
        </div>

        {/* ── THE CARD ───────────────────────── */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow:
              "0 4px 32px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
            border: "1px solid #E5E7EB",
          }}
        >
          {/* Top colour accent */}
          <div
            style={{
              height: "5px",
              background: `linear-gradient(90deg, ${post.tagColor}, #6C609E)`,
            }}
          />

          {/* ── COVER IMAGE AREA ─────────────── */}
          <div
            style={{
              width: "100%",
              height: "340px",
              background:
                "linear-gradient(135deg, #0F1E35 0%, #111827 60%, #1a1030 100%)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Grid texture */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(47,138,201,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.06) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                pointerEvents: "none",
              }}
            />

            {/* Glow blobs */}
            <div
              style={{
                position: "absolute",
                top: "-80px",
                right: "-80px",
                width: "320px",
                height: "320px",
                background: `radial-gradient(circle, ${post.tagColor}25 0%, transparent 70%)`,
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-60px",
                left: "-60px",
                width: "260px",
                height: "260px",
                background:
                  "radial-gradient(circle, rgba(108,96,158,0.18) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            {/* Cover — image or emoji placeholder */}
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.title}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.6,
                }}
              />
            ) : (
              <span
                style={{
                  fontSize: "100px",
                  opacity: 0.1,
                  position: "relative",
                  zIndex: 1,
                  userSelect: "none",
                  filter: "grayscale(0.3)",
                }}
              >
                {post.coverEmoji}
              </span>
            )}

            {/* Bottom gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "160px",
                background:
                  "linear-gradient(to top, #FFFFFF 0%, transparent 100%)",
              }}
            />

            {/* Tag badge — top left */}
            <span
              style={{
                position: "absolute",
                top: "24px",
                left: "24px",
                zIndex: 2,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: post.tagColor,
                background: `${post.tagColor}22`,
                border: `1px solid ${post.tagColor}55`,
                padding: "7px 16px",
                borderRadius: "4px",
                backdropFilter: "blur(8px)",
              }}
            >
              📍 {post.tag}
            </span>

            {/* Time — top right */}
          </div>

          {/* ── CARD BODY ────────────────────── */}
          <div style={{ padding: "40px 48px 48px" }}>
            {/* Title */}
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 700,
                color: "#0D1117",
                lineHeight: 1.2,
                letterSpacing: "-0.3px",
                marginBottom: "24px",
              }}
            >
              {post.title}
            </h3>

            {/* Highlight pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: `${post.tagColor}12`,
                border: `1px solid ${post.tagColor}30`,
                borderRadius: "8px",
                padding: "10px 18px",
                marginBottom: "28px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: post.tagColor,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: post.tagColor,
                }}
              >
                {post.highlight}
              </span>
            </div>

            {/* Divider */}
            <div
              style={{
                width: "40px",
                height: "3px",
                background: `linear-gradient(90deg, ${post.tagColor}, #6C609E)`,
                borderRadius: "2px",
                marginBottom: "28px",
              }}
            />

            {/* Body text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                marginBottom: "28px",
              }}
            >
              {(expanded ? fullBody : previewBody).map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "16px",
                    fontWeight: 300,
                    color: "#374151",
                    lineHeight: 1.9,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Read more / less toggle */}
            {post.body.length > 2 && (
              <button
                onClick={() => setExpanded(!expanded)}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#6C609E",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  marginBottom: "36px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {expanded ? "Show Less ↑" : "Read Full Post ↓"}
              </button>
            )}

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "#F3F4F6",
                marginBottom: "28px",
              }}
            />

            {/* Footer row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              {/* Author */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${post.tagColor}, #6C609E)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  FA
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#0D1117",
                    }}
                  >
                    {post.author}
                  </div>
                  {/* <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "12px",
                      fontWeight: 300,
                      color: "#9CA3AF",
                      marginTop: "2px",
                    }}
                  >
                    {post.authorRole} · {post.location}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyActivity;
