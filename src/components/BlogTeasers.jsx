// BlogTeasers.jsx — fetches live blog posts from Supabase

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const BlogTeasers = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false })
      .limit(4)
      .then(({ data, error }) => {
        if (error) console.error(error);
        else setPosts(data || []);
        setLoading(false);
      });
  }, []);

  // Assign alternating accent colours
  const accent = (i) => (i % 2 === 0 ? "#2F8AC9" : "#6C609E");
  const dark = (i) => i % 2 !== 0;

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
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "20px",
            flexWrap: "wrap",
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
                Stories & Insights
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
              From the{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#6C609E",
                }}
              >
                Blog
              </em>
            </h2>
          </div>
          <a
            href="/blog"
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
            All Posts →
          </a>
        </div>

        {/* LOADING */}
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "60px 0",
            }}
          >
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "#9CA3AF",
              }}
            >
              Loading posts...
            </p>
          </div>
        )}

        {/* EMPTY */}
        {!loading && posts.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <span
              style={{
                fontSize: "40px",
                opacity: 0.2,
                display: "block",
                marginBottom: "14px",
              }}
            >
              📝
            </span>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#9CA3AF",
              }}
            >
              No posts yet. Check back soon.
            </p>
          </div>
        )}

        {/* GRID */}
        {!loading && posts.length > 0 && (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "18px",
              }}
            >
              {posts.map((post, i) => (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  style={{
                    background: dark(i) ? "#0F1E35" : "#FFFFFF",
                    borderRadius: "16px",
                    padding: "clamp(22px, 4vw, 32px)",
                    display: "flex",
                    gap: "18px",
                    alignItems: "flex-start",
                    textDecoration: "none",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: dark(i)
                      ? "0 8px 32px rgba(0,0,0,0.15)"
                      : "0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)",
                    transition: "0.22s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-3px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  {/* Left accent bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: "3px",
                      background: `linear-gradient(180deg, ${accent(i)}, ${dark(i) ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)"})`,
                    }}
                  />

                  {/* Glow */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-50px",
                      right: "-50px",
                      width: "180px",
                      height: "180px",
                      background: `radial-gradient(circle, ${accent(i)}20 0%, transparent 70%)`,
                      borderRadius: "50%",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Index number */}
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(42px, 8vw, 52px)",
                      fontWeight: 700,
                      lineHeight: 1,
                      color: dark(i)
                        ? "rgba(255,255,255,0.07)"
                        : "rgba(0,0,0,0.06)",
                      flexShrink: 0,
                      userSelect: "none",
                      position: "relative",
                      zIndex: 1,
                      marginTop: "2px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      flex: 1,
                      position: "relative",
                      zIndex: 1,
                      minWidth: 0,
                    }}
                  >
                    {/* Category */}
                    <span
                      style={{
                        display: "inline-block",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: accent(i),
                        background: `${accent(i)}18`,
                        border: `1px solid ${accent(i)}35`,
                        padding: "4px 10px",
                        borderRadius: "4px",
                        marginBottom: "12px",
                      }}
                    >
                      {post.category}
                    </span>

                    {/* Title */}
                    <h4
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(18px, 3vw, 22px)",
                        fontWeight: 700,
                        color: dark(i) ? "#F0F6FF" : "#0D1117",
                        lineHeight: 1.35,
                        letterSpacing: "-0.2px",
                        marginBottom: "14px",
                      }}
                    >
                      {post.title}
                    </h4>

                    {/* Meta */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "20px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: "11px",
                          fontWeight: 300,
                          color: dark(i) ? "rgba(200,214,232,0.45)" : "#9CA3AF",
                        }}
                      >
                        {new Date(post.created_at).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span
                        style={{
                          width: "3px",
                          height: "3px",
                          borderRadius: "50%",
                          background: dark(i)
                            ? "rgba(200,214,232,0.2)"
                            : "#D1D5DB",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: "11px",
                          fontWeight: 300,
                          color: dark(i) ? "rgba(200,214,232,0.45)" : "#9CA3AF",
                        }}
                      >
                        {post.read_time}
                      </span>
                    </div>

                    {/* Read link */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: accent(i),
                      }}
                    >
                      Read Post
                      <span
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          border: `1px solid ${accent(i)}50`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          flexShrink: 0,
                        }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              style={{
                marginTop: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
              }}
            >
              <div style={{ flex: 1, height: "1px", background: "#E5E7EB" }} />
              <a
                href="/blog"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "white",
                  textDecoration: "none",
                  background: "#6C609E",
                  padding: "13px 24px",
                  borderRadius: "6px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                View All Blog Posts →
              </a>
              <div style={{ flex: 1, height: "1px", background: "#E5E7EB" }} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BlogTeasers;
