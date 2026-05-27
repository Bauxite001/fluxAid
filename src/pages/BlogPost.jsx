// pages/BlogPost.jsx

import { useParams } from "react-router-dom";

const POSTS = [
  {
    slug: "why-flux-aid-was-founded",
    category: "About Us",
    title: "Why Flux Aid Initiative was founded — and what drives us every day",
    excerpt:
      "The story behind Flux Aid Initiative — where we came from, what we stand for, and why we believe Africa's transformation must come from within.",
    author: "Flux Aid Team",
    initials: "FA",
    date: "May 7, 2026",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "Flux Aid Initiative was not born in a boardroom. It was born from an observation — a quiet, persistent frustration with a continent full of extraordinary people whose work goes unrecognised, whose communities are underserved, and whose potential is consistently underestimated.",
      },
      { type: "heading", text: "The Problem We Saw" },
      {
        type: "paragraph",
        text: "Across Nigeria and Africa, we kept seeing the same pattern: men and women doing remarkable work in their communities — advocating for rights, building businesses, raising children with integrity, serving without applause — and receiving nothing in return.",
      },
      {
        type: "quote",
        text: "Hard work, integrity and transparency are the hallmark of a successful human achievement. Men and women who are selfless and dedicated to their responsibilities are never forgotten in the annals of history.",
      },
      { type: "heading", text: "What We Decided to Do" },
      {
        type: "paragraph",
        text: "We decided to build something different. An organisation rooted in community — not in foreign funding cycles or donor agendas. An organisation that celebrates the people already doing the work, while building the infrastructure to support those left behind.",
      },
      { type: "heading", text: "What Drives Us Today" },
      {
        type: "paragraph",
        text: "Every day, our teams go into communities across Nigeria, Ghana, Kenya, Uganda, Senegal, and beyond. They run clinics, deliver books, facilitate workshops, plant trees, and tell stories that would otherwise go untold.",
      },
      {
        type: "paragraph",
        text: "We are not here to save Africa. Africa does not need saving. It needs its own people — empowered, recognised, and supported — to do what they have always been capable of doing.",
      },
    ],
    related: [
      {
        slug: "danga-award-explained",
        title: "The DANGA Award — recognising Nigeria's unsung heroes",
        category: "Awards",
      },
      {
        slug: "what-african-youth-need",
        title: "What African youth really need from NGOs in 2026",
        category: "Opinion",
      },
    ],
  },
  {
    slug: "danga-award-explained",
    category: "Awards",
    title: "The DANGA Award — recognising Nigeria's unsung heroes",
    excerpt:
      "What is the Distinguished Ambassador of Change National Gold Award, who qualifies, and why it matters for national development.",
    author: "Flux Aid Team",
    initials: "FA",
    date: "May 5, 2026",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Nigeria is full of people doing extraordinary things with very little recognition. The Distinguished Ambassador of Change National Gold Award — DANGA — exists to change that.",
      },
      { type: "heading", text: "What is the DANGA Award?" },
      {
        type: "paragraph",
        text: "DANGA is a private sector national award project dedicated to men and women of outstanding qualities whose contribution to national development is viable and verifiable.",
      },
      {
        type: "quote",
        text: "They move from one higher position to another and their achievements have no boundary.",
      },
      { type: "heading", text: "Why It Matters" },
      {
        type: "paragraph",
        text: "When we celebrate excellence, we set a standard. We tell younger generations that integrity is rewarded — that hard work is seen — that service to humanity is one of the highest callings a person can answer.",
      },
    ],
    related: [
      {
        slug: "why-flux-aid-was-founded",
        title: "Why Flux Aid Initiative was founded",
        category: "About Us",
      },
      {
        slug: "integrity-in-leadership",
        title: "Integrity in leadership — why it still matters",
        category: "Opinion",
      },
    ],
  },
];

const CAT_COLOR = {
  "About Us": "#2F8AC9",
  Awards: "#6C609E",
  Opinion: "#2F8AC9",
  "Impact Report": "#6C609E",
  "Field Story": "#2F8AC9",
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div
        style={{
          background: "#F8F9FB",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <span style={{ fontSize: "64px", opacity: 0.2, marginBottom: "24px" }}>
          📄
        </span>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "40px",
            fontWeight: 700,
            color: "#0D1117",
            marginBottom: "14px",
          }}
        >
          Post not found
        </h1>
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "15px",
            fontWeight: 300,
            color: "#9CA3AF",
            marginBottom: "28px",
          }}
        >
          This post doesn't exist or may have been moved.
        </p>
        <a
          href="/blog"
          style={{
            background: "#2F8AC9",
            color: "white",
            textDecoration: "none",
            padding: "13px 28px",
            borderRadius: "4px",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Back to Blog
        </a>
      </div>
    );
  }

  const color = CAT_COLOR[post.category] || "#2F8AC9";

  return (
    <div style={{ background: "#F8F9FB", minHeight: "100vh" }}>
      {/* ── HERO ─────────────────────────────── */}
      <section
        style={{
          background: "#0F1E35",
          padding:
            "clamp(64px,10vw,100px) clamp(20px,5vw,80px) clamp(48px,6vw,80px)",
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
            top: "-80px",
            right: "-80px",
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 65%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <a
          href="/blog"
          style={{
            position: "relative",
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "rgba(200,214,232,0.55)",
            textDecoration: "none",
            marginBottom: "32px",
          }}
        >
          ← Back to Blog
        </a>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
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
              border: `1px solid ${color}40`,
              padding: "5px 12px",
              borderRadius: "4px",
              marginBottom: "20px",
            }}
          >
            {post.category}
          </span>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px,6vw,64px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-1px",
              color: "#F0F6FF",
              marginBottom: "28px",
            }}
          >
            {post.title}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              paddingBottom: "24px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "12px",
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
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(200,214,232,0.85)",
                }}
              >
                {post.author}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "rgba(200,214,232,0.45)",
                  marginTop: "2px",
                }}
              >
                {post.date} · {post.readTime}
              </div>
            </div>
          </div>
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

      {/* ── CONTENT ──────────────────────────── */}
      <section style={{ padding: "clamp(32px,5vw,72px) clamp(20px,5vw,80px)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr clamp(240px,22vw,300px)",
            gap: "clamp(32px,5vw,64px)",
            alignItems: "start",
          }}
        >
          {/* Article */}
          <article style={{ maxWidth: "720px" }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(17px,2vw,21px)",
                lineHeight: 1.75,
                color: "#374151",
                marginBottom: "36px",
                paddingBottom: "36px",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              {post.excerpt}
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {post.content.map((block, i) => {
                if (block.type === "paragraph")
                  return (
                    <p
                      key={i}
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "clamp(14px,1.5vw,16px)",
                        fontWeight: 300,
                        lineHeight: 1.9,
                        color: "#374151",
                        margin: 0,
                      }}
                    >
                      {block.text}
                    </p>
                  );
                if (block.type === "heading")
                  return (
                    <h2
                      key={i}
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(22px,2.5vw,32px)",
                        fontWeight: 700,
                        color: "#0D1117",
                        lineHeight: 1.2,
                        letterSpacing: "-0.3px",
                        marginTop: "8px",
                      }}
                    >
                      {block.text}
                    </h2>
                  );
                if (block.type === "quote")
                  return (
                    <blockquote
                      key={i}
                      style={{
                        borderLeft: `3px solid ${color}`,
                        paddingLeft: "24px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        margin: "8px 0",
                        background: `${color}06`,
                        borderRadius: "0 8px 8px 0",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: "italic",
                          fontSize: "clamp(17px,2vw,20px)",
                          lineHeight: 1.65,
                          color: color,
                          margin: 0,
                        }}
                      >
                        "{block.text}"
                      </p>
                    </blockquote>
                  );
                return null;
              })}
            </div>
          </article>

          {/* Sidebar */}
          <aside
            style={{
              position: "sticky",
              top: "100px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {/* Share */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "14px",
                padding: "22px",
                borderTop: `3px solid ${color}`,
              }}
            >
              <h5
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#9CA3AF",
                  marginBottom: "14px",
                }}
              >
                Share This Post
              </h5>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {["Share on 𝕏", "Share on LinkedIn", "Copy Link"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#6B7280",
                      border: "1px solid #E5E7EB",
                      padding: "10px 14px",
                      borderRadius: "6px",
                      textAlign: "center",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = color;
                      e.currentTarget.style.color = color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E5E7EB";
                      e.currentTarget.style.color = "#6B7280";
                    }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* About */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "14px",
                padding: "22px",
              }}
            >
              <h5
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#9CA3AF",
                  marginBottom: "10px",
                }}
              >
                About Flux Aid
              </h5>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "#6B7280",
                  marginBottom: "14px",
                }}
              >
                Non-governmental organisation dedicated to advocacy,
                empowerment, and upliftment of vulnerable communities across
                Nigeria and Africa.
              </p>
              <a
                href="/about"
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#6C609E",
                  border: "1px solid rgba(108,96,158,0.3)",
                  borderRadius: "6px",
                  padding: "10px",
                  textDecoration: "none",
                }}
              >
                Learn More
              </a>
            </div>

            {/* Donate */}
            <div
              style={{
                background: "#0F1E35",
                borderRadius: "14px",
                padding: "22px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "100px",
                  height: "100px",
                  background:
                    "radial-gradient(circle, rgba(47,138,201,0.2) 0%, transparent 70%)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />
              <h5
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "rgba(200,214,232,0.5)",
                  marginBottom: "8px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Support Our Work
              </h5>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: "rgba(200,214,232,0.5)",
                  marginBottom: "14px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Every gift goes directly to communities we serve.
              </p>
              <a
                href="/donate"
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "white",
                  background: "#2F8AC9",
                  borderRadius: "6px",
                  padding: "12px",
                  textDecoration: "none",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Donate Now
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ── RELATED ──────────────────────────── */}
      {post.related?.length > 0 && (
        <section
          style={{
            padding: "clamp(32px,5vw,64px) clamp(20px,5vw,80px)",
            borderTop: "1px solid #E5E7EB",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
                Related Posts
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "14px",
              }}
            >
              {post.related.map((rel, i) => {
                const relColor = CAT_COLOR[rel.category] || "#2F8AC9";
                const relDark = i % 2 === 1;
                return (
                  <a
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    style={{
                      background: relDark ? "#0F1E35" : "#FFFFFF",
                      border: "1px solid",
                      borderColor: relDark ? "transparent" : "#E5E7EB",
                      borderRadius: "14px",
                      padding: "24px 26px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      textDecoration: "none",
                      position: "relative",
                      overflow: "hidden",
                      boxShadow: relDark
                        ? "0 8px 32px rgba(0,0,0,0.15)"
                        : "0 2px 10px rgba(0,0,0,0.04)",
                      transition: "transform 0.22s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-3px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0)")
                    }
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: `linear-gradient(90deg, ${relColor}, ${relColor === "#2F8AC9" ? "#6C609E" : "#2F8AC9"})`,
                        borderRadius: "14px 14px 0 0",
                      }}
                    />
                    <span
                      style={{
                        display: "inline-block",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: relColor,
                        background: `${relColor}15`,
                        border: `1px solid ${relColor}30`,
                        padding: "4px 10px",
                        borderRadius: "4px",
                        alignSelf: "flex-start",
                      }}
                    >
                      {rel.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(18px,2vw,22px)",
                        fontWeight: 700,
                        color: relDark ? "#F0F6FF" : "#0D1117",
                        lineHeight: 1.3,
                        margin: 0,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {rel.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: relColor,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      Read →
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ───────────────────────── */}
      <section
        style={{
          background: "#6C609E",
          padding: "clamp(40px,5vw,64px) clamp(20px,5vw,80px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(26px,4vw,40px)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "8px",
              }}
            >
              Enjoyed this{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                read?
              </em>
            </h3>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.65)",
                margin: 0,
              }}
            >
              Support our work or explore more stories from the field.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="/donate"
              style={{
                background: "#FFFFFF",
                color: "#6C609E",
                textDecoration: "none",
                padding: "13px 26px",
                borderRadius: "4px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Donate Now
            </a>
            <a
              href="/blog"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                padding: "12px 22px",
                borderRadius: "4px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              More Posts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
