// pages/Programs.jsx

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { PROGRAMS as FALLBACK_PROGRAMS } from "../constants";

// Fallback program details (used when Supabase is empty)
const FALLBACK_PROGRAM_DETAILS = [
  {
    ...FALLBACK_PROGRAMS[0],
    fullDesc: [
      "Flux Aid Initiative's Advocacy & Human Rights programme is built on the belief that every person — regardless of gender, age, or economic status — deserves to live with dignity, freedom, and protection under the law.",
      "We work with communities, local authorities, and civil society organisations to champion the rights of the most vulnerable — including women, children, and those affected by poverty and displacement.",
      "Through workshops, community dialogues, legal awareness campaigns, and direct intervention, we equip people with the knowledge and tools to understand, claim, and defend their rights.",
    ],
    focus: [
      "Human rights education and awareness",
      "Women's rights and gender equality",
      "Child rights and protection",
      "Political freedoms and civic participation",
      "Zero tolerance for violence and abuse",
    ],
    impact: "Impacted many lives across multiple states",
    color: "#C8C8C8",
  },
  {
    ...FALLBACK_PROGRAMS[1],
    fullDesc: [
      "Economic vulnerability is one of the biggest barriers to human dignity. Our Empowerment & Economic Development programme addresses this directly — giving people the skills, knowledge, and confidence to build sustainable livelihoods.",
      "We run financial literacy programmes, skills training workshops, and mentorship initiatives targeted at unemployed youth, women in rural communities, and those living below the poverty line.",
      "We believe economic empowerment is not charity — it is investment. Every person we train becomes a multiplier of change in their community.",
    ],
    focus: [
      "Financial literacy and money management",
      "Vocational and digital skills training",
      "Women's economic empowerment",
      "Youth entrepreneurship support",
      "Community-based savings programmes",
    ],
    impact: "Impacted many lives and households",
    color: "#9A9A9A",
  },
  {
    ...FALLBACK_PROGRAMS[2],
    fullDesc: [
      "Change does not happen in silence. Our Public Awareness & Change programme is dedicated to building an informed, engaged, and empowered citizenry across Nigeria and Africa.",
      "We mobilise communities through town halls, media campaigns, and grassroots outreach — encouraging people to understand the systems that affect their lives and to participate actively in shaping them.",
      "We also work to promote transparency in governance, reward excellence in public life, and set a standard for what accountable leadership looks like.",
    ],
    focus: [
      "Community mobilisation and engagement",
      "Good governance promotion",
      "Media and public communications",
      "Youth civic education",
      "Recognition of excellence in leadership",
    ],
    impact: "Reached many communities across Africa",
    color: "#E8E0D0",
  },
];

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch programs from Supabase
    supabase
      .from("programs")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: true })
      .limit(3)
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
          // Fall back to hardcoded details if fetch fails
          setPrograms(FALLBACK_PROGRAM_DETAILS);
        } else if (data && data.length > 0) {
          // Build full program details from Supabase data
          const detailed = data.map((p, i) => ({
            num: p.num || String(i + 1).padStart(2, "0"),
            icon: p.icon || "⚖️",
            title: p.title,
            description: p.description,
            stat: p.stat || "",
            fullDesc: [p.description], // Single description as fallback
            focus: [], // Would need additional table or field in DB
            impact: p.stat || "Growing impact every day",
            color: ["#C8C8C8", "#9A9A9A", "#E8E0D0"][i] || "#C8C8C8",
          }));
          setPrograms(detailed);
        } else {
          // No programs published yet, use fallback
          setPrograms(FALLBACK_PROGRAM_DETAILS);
        }
        setLoading(false);
      });
  }, []);

  const displayPrograms = loading ? FALLBACK_PROGRAM_DETAILS : programs;

  return (
    <div
      style={{
        background: "#F8F9FB",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ── HERO ───────────────────────────── */}
      <section
        style={{
          background: "#0F1E35",
          padding: "clamp(72px, 10vw, 96px) clamp(20px, 6vw, 80px)",
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
              flexWrap: "wrap",
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
              What We Do
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 8vw, 72px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-1px",
              marginBottom: "24px",
            }}
          >
            Programs built
            <br />
            for{" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#2F8AC9",
              }}
            >
              real impact
            </em>
          </h1>

          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "clamp(14px, 2vw, 15px)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8,
              maxWidth: "520px",
              margin: 0,
            }}
          >
            Every programme we run is community-led and field-tested. We don't
            drop in and leave — we build relationships, stay accountable, and
            measure what actually changes.
          </p>
        </div>
      </section>

      {/* ── WAVE ───────────────────────────── */}
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "clamp(40px, 8vw, 60px)",
          display: "block",
          background: "#0F1E35",
        }}
      >
        <defs>
          <linearGradient
            id="waveGradient-programs"
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
          fill="url(#waveGradient-programs)"
        />
      </svg>

      {/* ── OVERVIEW STRIP ─────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          borderBottom: "1px solid #E0E7F1",
        }}
      >
        {displayPrograms.map((prog, i) => (
          <a
            key={prog.num}
            href={`#program-${prog.num}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "24px 20px",
              textDecoration: "none",
              background: "#FFFFFF",
              borderRight:
                i < displayPrograms.length - 1 ? "1px solid #E0E7F1" : "none",
              borderBottom: "1px solid #E0E7F1",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
              minWidth: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F5F7FB")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
          >
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#A8B8CC",
                flexShrink: 0,
              }}
            >
              {prog.num}
            </span>

            <div
              style={{
                width: "1px",
                height: "32px",
                background: prog.color,
                opacity: 0.4,
                flexShrink: 0,
              }}
            />

            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "16px",
                fontWeight: 700,
                color: "#0F1E35",
                lineHeight: 1.3,
              }}
            >
              {prog.title}
            </span>
          </a>
        ))}
      </div>

      {/* ── PROGRAM SECTIONS ───────────────── */}
      {displayPrograms.map((prog, i) => (
        <section
          key={prog.num}
          id={`program-${prog.num}`}
          style={{
            padding: "clamp(56px, 8vw, 64px) clamp(20px, 6vw, 80px)",
            borderBottom:
              i < displayPrograms.length - 1 ? "1px solid #E0E7F1" : "none",
            background: "#F8F9FB",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(280px,360px)",
              gap: "clamp(40px, 6vw, 64px)",
              alignItems: "start",
            }}
            className="program-grid"
          >
            {/* LEFT */}
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "32px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "3.5px",
                    textTransform: "uppercase",
                    color: "#A8B8CC",
                    whiteSpace: "nowrap",
                  }}
                >
                  Programme {prog.num}
                </span>

                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: prog.color,
                    opacity: 0.15,
                  }}
                />
              </div>

              <span
                style={{
                  fontSize: "40px",
                  display: "block",
                  marginBottom: "24px",
                  filter: "grayscale(100%) opacity(0.8)",
                }}
              >
                {prog.icon}
              </span>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(32px, 6vw, 44px)",
                  fontWeight: 700,
                  color: "#0F1E35",
                  lineHeight: 1.1,
                  letterSpacing: "-0.5px",
                  marginBottom: "32px",
                }}
              >
                {prog.title}
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {prog.fullDesc.map((para, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "15px",
                      fontWeight: 300,
                      color: "#5A6B7F",
                      lineHeight: 1.9,
                      margin: 0,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div style={{ marginTop: "40px" }}>
                <a
                  href="/contact"
                  style={{
                    display: "inline-block",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "#2F8AC9",
                    textDecoration: "none",
                    paddingBottom: "6px",
                    borderBottom: "1px solid #2F8AC9",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Get Involved →
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                minWidth: 0,
              }}
            >
              {/* Focus Areas */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E0E7F1",
                  padding: "clamp(24px, 4vw, 32px)",
                  borderRadius: "10px",
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#A8B8CC",
                    margin: "0 0 24px 0",
                  }}
                >
                  Focus Areas
                </h4>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {prog.focus.map((item, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "16px 0",
                        borderBottom:
                          j < prog.focus.length - 1
                            ? "1px solid #E0E7F1"
                            : "none",
                      }}
                    >
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: prog.color,
                          opacity: 0.6,
                          marginTop: "6px",
                          flexShrink: 0,
                        }}
                      />

                      <span
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: "13px",
                          fontWeight: 300,
                          color: "#0F1E35",
                          lineHeight: 1.6,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div
                style={{
                  padding: "clamp(24px, 4vw, 32px)",
                  border: "1px solid #E0E7F1",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #FFFFFF, #F5F7FB)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#A8B8CC",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  Impact
                </span>

                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(22px, 4vw, 24px)",
                    fontWeight: 700,
                    color: "#0F1E35",
                    lineHeight: 1.2,
                    marginBottom: "8px",
                  }}
                >
                  {prog.impact}
                </div>

                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    color: "#A8B8CC",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  and growing every day through daily field activity
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ───────────────────────────── */}
      <section
        style={{
          background: "#6C609E",
          padding: "clamp(56px, 8vw, 64px) clamp(20px, 6vw, 80px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid */}
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
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "280px",
            height: "280px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ flex: "1 1 400px", minWidth: 0 }}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 6vw, 44px)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.5px",
                marginBottom: "10px",
              }}
            >
              Want to support a{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                programme?
              </em>
            </h3>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.65)",
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              Your donation goes directly to the people who need it most.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              width: "100%",
              maxWidth: "420px",
            }}
          >
            <a
              href="/donate"
              style={{
                flex: "1 1 180px",
                textAlign: "center",
                background: "#FFFFFF",
                color: "#6C609E",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "14px 24px",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Donate Now
            </a>

            <a
              href="/volunteer"
              style={{
                flex: "1 1 180px",
                textAlign: "center",
                background: "transparent",
                color: "rgba(255,255,255,0.8)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "13px 24px",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* ── RESPONSIVE GRID FIX ───────────── */}
      <style>
        {`
          @media (max-width: 920px) {
            .program-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Programs;
