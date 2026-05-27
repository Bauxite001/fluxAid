// BlogTeasers.jsx

const POSTS = [
  {
    index: "01",
    category: "Opinion",
    title: "What African youth really need from NGOs in 2026",
    date: "May 5, 2026",
    readTime: "6 min read",
    href: "/blog/what-african-youth-need",
    accent: "#2F8AC9",
    dark: false,
  },
  {
    index: "02",
    category: "Impact Report",
    title: "2025 in review — our biggest year, by the numbers",
    date: "May 1, 2026",
    readTime: "10 min read",
    href: "/blog/2025-impact-review",
    accent: "#6C609E",
    dark: true,
  },
  {
    index: "03",
    category: "Field Story",
    title: "A village with no electricity — and what happened next",
    date: "Apr 28, 2026",
    readTime: "8 min read",
    href: "/blog/village-no-electricity",
    accent: "#2F8AC9",
    dark: false,
  },
  {
    index: "04",
    category: "Awards",
    title: "The DANGA Award — recognising Nigeria's unsung heroes",
    date: "Apr 24, 2026",
    readTime: "5 min read",
    href: "/blog/danga-award-explained",
    accent: "#6C609E",
    dark: true,
  },
];

const BlogTeasers = () => {
  return (
    <section
      style={{
        background: "#F8F9FB",
        padding: "72px 0 80px",
        borderBottom: "1px solid #E5E7EB",
        margin: "18px 0",
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

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "18px",
          }}
        >
          {POSTS.map((post) => (
            <a
              key={post.index}
              href={post.href}
              style={{
                background: post.dark ? "#0F1E35" : "#FFFFFF",
                borderRadius: "16px",
                padding: "clamp(22px, 4vw, 32px)",
                display: "flex",
                gap: "18px",
                alignItems: "flex-start",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
                boxShadow: post.dark
                  ? "0 8px 32px rgba(0,0,0,0.15)"
                  : "0 2px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.04)",
                transition: "0.22s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* ACCENT BAR */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: "3px",
                  background: `linear-gradient(180deg, ${post.accent}, ${
                    post.dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)"
                  })`,
                }}
              />

              {/* GLOW */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-50px",
                  right: "-50px",
                  width: "180px",
                  height: "180px",
                  background: `radial-gradient(circle, ${post.accent}20 0%, transparent 70%)`,
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />

              {/* NUMBER */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(42px, 8vw, 52px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: post.dark
                    ? "rgba(255,255,255,0.07)"
                    : "rgba(0,0,0,0.06)",
                  flexShrink: 0,
                  userSelect: "none",
                  position: "relative",
                  zIndex: 1,
                  marginTop: "2px",
                }}
              >
                {post.index}
              </div>

              {/* CONTENT */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  zIndex: 1,
                  minWidth: 0,
                }}
              >
                {/* CATEGORY */}
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: post.accent,
                    background: `${post.accent}18`,
                    border: `1px solid ${post.accent}35`,
                    padding: "4px 10px",
                    borderRadius: "4px",
                    marginBottom: "12px",
                  }}
                >
                  {post.category}
                </span>

                {/* TITLE */}
                <h4
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(18px, 3vw, 22px)",
                    fontWeight: 700,
                    color: post.dark ? "#F0F6FF" : "#0D1117",
                    lineHeight: 1.35,
                    letterSpacing: "-0.2px",
                    marginBottom: "14px",
                  }}
                >
                  {post.title}
                </h4>

                {/* META */}
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
                      color: post.dark ? "rgba(200,214,232,0.45)" : "#9CA3AF",
                    }}
                  >
                    {post.date}
                  </span>

                  <span
                    style={{
                      width: "3px",
                      height: "3px",
                      borderRadius: "50%",
                      background: post.dark
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
                      color: post.dark ? "rgba(200,214,232,0.45)" : "#9CA3AF",
                    }}
                  >
                    {post.readTime}
                  </span>
                </div>

                {/* LINK */}
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
                    color: post.accent,
                  }}
                >
                  Read Post
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      border: `1px solid ${post.accent}50`,
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

        {/* BOTTOM CTA */}
        <div
          style={{
            marginTop: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#E5E7EB",
            }}
          />

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

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#E5E7EB",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogTeasers;
