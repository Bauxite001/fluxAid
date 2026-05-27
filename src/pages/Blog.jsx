// pages/Blog.jsx

import { useState } from "react";
import Chip from "../components/Chip";
import Button from "../components/Button";

// Placeholder posts — replace with CMS/API later
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
      "A full breakdown of what Flux Aid Initiative achieved in 2025 — the communities we reached, the projects we ran, and what we learned.",
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
      "Hard work and talent are not enough. Without integrity, no leader can truly serve. A reflection on what we look for in the people we celebrate.",
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
      "A full account of our Women Rise leadership forum in Lagos and the stories that emerged from the floor.",
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
    <div
      style={{
        background: "#F8F9FB",
        minHeight: "100vh",
      }}
    >
      {/* ── PAGE HEADER (HERO) ──────────────────────── */}
      <section
        style={{
          background: "#0F1E35",
          padding: "96px 80px",
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
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "350px",
            height: "350px",
            background:
              "radial-gradient(circle, rgba(47, 138, 201, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(108, 96, 158, 0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "720px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#2F8AC9",
              }}
            />
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "3.5px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Stories & Insights
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              marginBottom: "24px",
            }}
          >
            From the{" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#2F8AC9",
              }}
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
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8,
              maxWidth: "520px",
              margin: 0,
            }}
          >
            Real stories from the communities we work with, honest reflections
            on development work, and the data behind what we do.
          </p>
        </div>
      </section>

      {/* ── WAVE TRANSITION ─────────────────── */}
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "60px",
          display: "block",
          background: "#0F1E35",
        }}
      >
        <defs>
          <linearGradient
            id="waveGradient-blog"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#0F1E35" />
            <stop offset="100%" stopColor="#F8F9FB" />
          </linearGradient>
        </defs>
        <path
          d="M0,30 Q300,10 600,30 T1200,30 L1200,100 L0,100 Z"
          fill="url(#waveGradient-blog)"
        />
      </svg>

      {/* ── CATEGORY FILTER ──────────────────── */}
      <div className="px-6 lg:px-20 py-4 border-b border-gray-200 bg-white/80 sticky top-0 z-30 backdrop-blur-md">
        <div className="flex items-center gap-2 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                font-sans font-semibold uppercase text-[10px] tracking-[1.5px]
                px-4 py-2 rounded-full border whitespace-nowrap flex-shrink-0
                transition-all duration-300 cursor-pointer outline-none
                ${
                  activeCategory === cat
                    ? "bg-[#0F1E35] text-white border-[#0F1E35] shadow-sm"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 lg:px-20 py-12 lg:py-16 max-w-7xl mx-auto">
        {/* ── FEATURED POST ──────────────────── */}
        {showFeatured && (
          <a
            href={`/blog/${featured.slug}`}
            className="
              grid grid-cols-1 lg:grid-cols-2
              bg-white border border-gray-100 rounded-xl shadow-sm
              no-underline group mb-12 overflow-hidden
              hover:shadow-md hover:border-gray-200 transition-all duration-300
            "
          >
            {/* Image placeholder */}
            <div
              className="relative h-[260px] lg:h-auto bg-slate-50 flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(15,30,53,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(15,30,53,0.02) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            >
              <span className="font-serif font-bold text-[140px] lg:text-[200px] text-slate-200/40 select-none leading-none">
                01
              </span>
              <span className="absolute top-5 left-5 font-sans font-semibold uppercase text-[9px] tracking-[2px] text-[#0F1E35] border border-gray-200 bg-white/90 px-3 py-1.5 rounded-md shadow-xs">
                Featured Post
              </span>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <Chip label={featured.category} className="mb-4" />
                <h2 className="font-serif font-bold text-[#0F1E35] text-[24px] lg:text-[32px] leading-[1.25] mb-4 group-hover:text-[#2F8AC9] transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="font-sans font-light text-[14px] leading-[1.75] text-gray-600 mb-8">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-sans font-semibold text-[11px] text-slate-700">
                    {featured.initials}
                  </div>
                  <div>
                    <div className="font-sans font-medium text-[13px] text-gray-800">
                      {featured.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-[11px] text-gray-500">
                        {featured.date}
                      </span>
                      <span className="w-[3px] h-[3px] rounded-full bg-gray-300" />
                      <span className="font-sans text-[11px] text-gray-500">
                        {featured.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="font-sans font-semibold uppercase text-[10px] tracking-[1.5px] text-[#0F1E35] group-hover:translate-x-1 transition-transform duration-200">
                  Read Article →
                </span>
              </div>
            </div>
          </a>
        )}

        {/* ── POST GRID ────────────────────── */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="
                  bg-white border border-gray-100 rounded-xl p-6 flex flex-col gap-5
                  no-underline group shadow-xs
                  hover:shadow-md hover:border-gray-200 transition-all duration-200
                "
              >
                {/* Image placeholder */}
                <div
                  className="w-full h-[160px] bg-slate-50 flex items-center justify-center overflow-hidden rounded-lg relative"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(15,30,53,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(15,30,53,0.02) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                >
                  <span className="font-serif font-bold text-[72px] text-slate-200/40 select-none leading-none">
                    {String(post.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Category */}
                <div>
                  <Chip label={post.category} />
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-[#0F1E35] text-[19px] lg:text-[21px] leading-[1.35] group-hover:text-[#2F8AC9] transition-colors duration-200 flex-1">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans font-light text-[13px] leading-[1.7] text-gray-600 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-sans font-semibold text-[10px] text-slate-700 border border-slate-200">
                      {post.initials}
                    </div>
                    <div>
                      <div className="font-sans font-medium text-[12px] text-gray-800">
                        {post.author}
                      </div>
                      <div className="font-sans text-[10px] text-gray-500">
                        {post.date}
                      </div>
                    </div>
                  </div>
                  <span className="font-sans text-[11px] text-gray-400 bg-slate-50 px-2 py-1 rounded-sm">
                    {post.readTime}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="text-[48px] opacity-40 mb-4">📝</span>
            <h3 className="font-serif font-bold text-[#0F1E35] text-[24px] mb-2">
              No entries found
            </h3>
            <p className="font-sans font-light text-[14px] text-gray-500 max-w-sm">
              We haven't published anything under this filter yet. Try browsing
              another category or check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
