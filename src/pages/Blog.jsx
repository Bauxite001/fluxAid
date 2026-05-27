// pages/Blog.jsx

import { useState } from "react";

const POSTS = [
  {
    id: 1,
    slug: "why-flux-aid-was-founded",
    category: "About Us",
    title: "Why Flux Aid Initiative was founded — and what drives us every day",
    excerpt:
      "The story behind Flux Aid Initiative — where we came from, what we stand for, and why we believe Africa's transformation must come from within.",
    author: "Flux Aid Team",
    initials: "FA",
    date: "May 7, 2026",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "danga-award-explained",
    category: "Awards",
    title: "The DANGA Award — recognising Nigeria's unsung heroes",
    excerpt:
      "What is the Distinguished Ambassador of Change National Gold Award, who qualifies, and why it matters for national development.",
    author: "Flux Aid Team",
    initials: "FA",
    date: "May 5, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "what-african-youth-need",
    category: "Opinion",
    title: "What African youth really need from NGOs in 2026",
    excerpt:
      "A frank look at what young Africans are asking for — and whether the development sector is truly listening.",
    author: "Flux Aid Team",
    initials: "FA",
    date: "May 3, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "2025-impact-review",
    category: "Impact Report",
    title: "2025 in review — our biggest year, by the numbers",
    excerpt:
      "A full breakdown of what Flux Aid achieved in 2025 — the communities we reached, the projects we ran, and what we learned.",
    author: "Flux Aid Team",
    initials: "FA",
    date: "May 1, 2026",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "village-no-electricity",
    category: "Field Story",
    title: "A village with no electricity — and what happened next",
    excerpt:
      "One of our field correspondents tells the story of a community that had given up on change — and what happened when Flux Aid arrived.",
    author: "Amaka Osei",
    initials: "AO",
    date: "Apr 28, 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "integrity-in-leadership",
    category: "Opinion",
    title: "Integrity in leadership — why it still matters more than anything",
    excerpt:
      "Hard work and talent are not enough. Without integrity, no leader can truly serve.",
    author: "Flux Aid Team",
    initials: "FA",
    date: "Apr 24, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 7,
    slug: "child-rights-workshop-abuja",
    category: "Field Story",
    title:
      "300 parents in Abuja learned their child's rights — here's what changed",
    excerpt:
      "A recap of our child rights awareness workshop in Abuja and the conversations that came out of it.",
    author: "Erhinna Abara",
    initials: "EA",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 8,
    slug: "women-rise-lagos",
    category: "Field Story",
    title:
      "Women Rise Lagos — what happened when 120 women sat in the same room",
    excerpt:
      "A full account of our Women Rise leadership forum in Lagos and the stories that emerged.",
    author: "Amaka Osei",
    initials: "AO",
    date: "Apr 17, 2026",
    readTime: "7 min read",
    featured: false,
  },
];

const CATEGORIES = [
  "All",
  "About Us",
  "Awards",
  "Opinion",
  "Impact Report",
  "Field Story",
];

const CAT_COLOR = {
  "About Us": "#2F8AC9",
  Awards: "#6C609E",
  Opinion: "#2F8AC9",
  "Impact Report": "#6C609E",
  "Field Story": "#2F8AC9",
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? POSTS
      : POSTS.filter((p) => p.category === activeCategory);
  const featured = POSTS.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "All");
  const showFeatured = activeCategory === "All" && featured;

  return (
    <div style={{ background: "#F8F9FB", minHeight: "100vh" }}>
      {/* ── HERO ─────────────────────────────── */}
      <section
        style={{
          background: "#0F1E35",
          padding: "clamp(64px,10vw,96px) clamp(20px,5vw,80px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-80px",
            width: "360px",
            height: "360px",
            background:
              "radial-gradient(circle, rgba(47,138,201,0.15) 0%, transparent 65%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: "280px",
            height: "280px",
            background:
              "radial-gradient(circle, rgba(108,96,158,0.15) 0%, transparent 65%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "720px", position: "relative", zIndex: 1 }}>
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
              Stories & Insights
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(48px,8vw,80px)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-2px",
              color: "#F0F6FF",
              marginBottom: "20px",
            }}
          >
            From the{" "}
            <em
              style={{ fontStyle: "italic", fontWeight: 400, color: "#9B8EC4" }}
            >
              field
            </em>
            <br />
            and the desk
          </h1>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(200,214,232,0.6)",
              maxWidth: "520px",
              margin: 0,
            }}
          >
            Real stories from the communities we work with, honest reflections
            on development work, and the data behind what we do.
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
          padding: "14px clamp(20px,5vw,80px)",
          position: "sticky",
          top: "68px",
          zIndex: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat;
            const color =
              cat === "All" ? "#2F8AC9" : CAT_COLOR[cat] || "#2F8AC9";
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
                  borderRadius: "20px",
                  border: "1.5px solid",
                  borderColor: active ? color : "#E5E7EB",
                  background: active ? color : "#FFFFFF",
                  color: active ? "#FFFFFF" : "#6B7280",
                  cursor: "pointer",
                  outline: "none",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  boxShadow: active ? `0 4px 14px ${color}30` : "none",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div
        style={{
          padding: "clamp(32px,5vw,64px) clamp(20px,5vw,80px)",
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >
        {/* ── FEATURED ─────────────────────────── */}
        {showFeatured && (
          <a
            href={`/blog/${featured.slug}`}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "20px",
              overflow: "hidden",
              textDecoration: "none",
              marginBottom: "32px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              transition: "box-shadow 0.25s, transform 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 48px rgba(0,0,0,0.1)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Image */}
            <div
              style={{
                minHeight: "260px",
                background: "#0F1E35",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(47,138,201,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.06) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "180px",
                  height: "180px",
                  background:
                    "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 70%)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "160px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.04)",
                  lineHeight: 1,
                  userSelect: "none",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                01
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#2F8AC9",
                  background: "rgba(47,138,201,0.15)",
                  border: "1px solid rgba(47,138,201,0.3)",
                  padding: "5px 12px",
                  borderRadius: "3px",
                }}
              >
                Featured Post
              </span>
            </div>

            {/* Content */}
            <div
              style={{
                padding: "clamp(24px,4vw,48px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: CAT_COLOR[featured.category],
                    background: `${CAT_COLOR[featured.category]}12`,
                    border: `1px solid ${CAT_COLOR[featured.category]}30`,
                    padding: "4px 10px",
                    borderRadius: "4px",
                    marginBottom: "14px",
                  }}
                >
                  {featured.category}
                </span>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(22px,2.5vw,30px)",
                    fontWeight: 700,
                    color: "#0D1117",
                    lineHeight: 1.25,
                    marginBottom: "14px",
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "#6B7280",
                    marginBottom: "24px",
                  }}
                >
                  {featured.excerpt}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "20px",
                  borderTop: "1px solid #F3F4F6",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "#2F8AC9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {featured.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#0D1117",
                      }}
                    >
                      {featured.author}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "11px",
                        fontWeight: 300,
                        color: "#9CA3AF",
                      }}
                    >
                      {featured.date} · {featured.readTime}
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#2F8AC9",
                  }}
                >
                  Read →
                </span>
              </div>
            </div>
          </a>
        )}

        {/* ── GRID ─────────────────────────────── */}
        {rest.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "16px",
            }}
          >
            {rest.map((post, i) => {
              const color = CAT_COLOR[post.category] || "#2F8AC9";
              const dark = i % 3 === 1;
              return (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  style={{
                    background: dark ? "#0F1E35" : "#FFFFFF",
                    border: "1px solid",
                    borderColor: dark ? "transparent" : "#E5E7EB",
                    borderRadius: "16px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    textDecoration: "none",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: dark
                      ? "0 8px 32px rgba(0,0,0,0.15)"
                      : "0 2px 12px rgba(0,0,0,0.04)",
                    transition: "transform 0.22s, box-shadow 0.22s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = dark
                      ? `0 16px 48px rgba(0,0,0,0.22)`
                      : `0 10px 36px rgba(0,0,0,0.09)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = dark
                      ? "0 8px 32px rgba(0,0,0,0.15)"
                      : "0 2px 12px rgba(0,0,0,0.04)";
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
                      background: `linear-gradient(90deg, ${color}, ${color === "#2F8AC9" ? "#6C609E" : "#2F8AC9"})`,
                      borderRadius: "16px 16px 0 0",
                    }}
                  />

                  {/* Glow on dark */}
                  {dark && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-40px",
                        right: "-40px",
                        width: "160px",
                        height: "160px",
                        background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
                        borderRadius: "50%",
                        pointerEvents: "none",
                      }}
                    />
                  )}

                  {/* Image placeholder */}
                  <div
                    style={{
                      width: "100%",
                      height: "130px",
                      background: dark ? "rgba(255,255,255,0.04)" : "#F8F9FB",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "72px",
                        fontWeight: 700,
                        color: dark
                          ? "rgba(255,255,255,0.04)"
                          : "rgba(0,0,0,0.04)",
                        lineHeight: 1,
                        userSelect: "none",
                      }}
                    >
                      {String(post.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Category */}
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: color,
                      background: `${color}18`,
                      border: `1px solid ${color}30`,
                      padding: "4px 10px",
                      borderRadius: "4px",
                      alignSelf: "flex-start",
                    }}
                  >
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(17px,1.8vw,20px)",
                      fontWeight: 700,
                      color: dark ? "#F0F6FF" : "#0D1117",
                      lineHeight: 1.35,
                      flex: 1,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      lineHeight: 1.75,
                      color: dark ? "rgba(200,214,232,0.5)" : "#6B7280",
                      position: "relative",
                      zIndex: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "14px",
                      borderTop: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "#F3F4F6"}`,
                      marginTop: "auto",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "9px",
                          fontWeight: 700,
                          color: "white",
                        }}
                      >
                        {post.initials}
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: "'Barlow', sans-serif",
                            fontSize: "11px",
                            fontWeight: 500,
                            color: dark ? "rgba(200,214,232,0.8)" : "#0D1117",
                          }}
                        >
                          {post.author}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Barlow', sans-serif",
                            fontSize: "10px",
                            fontWeight: 300,
                            color: dark ? "rgba(200,214,232,0.4)" : "#9CA3AF",
                          }}
                        >
                          {post.date}
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "10px",
                        fontWeight: 300,
                        color: dark ? "rgba(200,214,232,0.4)" : "#9CA3AF",
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {filtered.length === 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "100px 0",
              textAlign: "center",
            }}
          >
            <span
              style={{ fontSize: "48px", opacity: 0.3, marginBottom: "16px" }}
            >
              📝
            </span>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#0D1117",
                marginBottom: "10px",
              }}
            >
              No posts yet
            </h3>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#9CA3AF",
              }}
            >
              Nothing in this category yet. Check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
