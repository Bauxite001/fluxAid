import { useState } from "react";
import Chip from "../components/Chip";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    title: "DANGA Award 2024",
    category: "Awards",
    status: "Completed",
    location: "Abuja, Nigeria",
    year: "2024",
    desc: "The Distinguished Ambassador of Change National Gold Award ceremony recognising outstanding Nigerians across all sectors for selfless service, integrity, and national development.",
    outcomes: [
      "20+ awardees recognised across sectors",
      "300+ attendees at the ceremony",
      "National media coverage secured",
    ],
    icon: "🏆",
  },
  {
    id: 2,
    title: "Mobile Health Outreach — Nairobi",
    category: "Health",
    status: "Completed",
    location: "Nairobi, Kenya",
    year: "2025",
    desc: "A two-week mobile health clinic deployment providing free consultations, medication, and health screenings to underserved communities across three Nairobi neighbourhoods.",
    outcomes: [
      "800+ patients seen and treated",
      "Free medication distributed to 400 patients",
      "3 communities reached",
    ],
    icon: "🏥",
  },
  {
    id: 3,
    title: "Women Rise Workshop Series",
    category: "Empowerment",
    status: "Ongoing",
    location: "Lagos & Abuja, Nigeria",
    year: "2025–2026",
    desc: "A series of monthly workshops focused on financial literacy, leadership development, and economic empowerment for women in urban and peri-urban communities.",
    outcomes: [
      "12 workshops delivered",
      "400+ women enrolled",
      "Ongoing mentorship programme active",
    ],
    icon: "🤝",
  },
  {
    id: 4,
    title: "Green Futures Reforestation Drive",
    category: "Environment",
    status: "Ongoing",
    location: "Dakar, Senegal",
    year: "2025–2026",
    desc: "A community-led reforestation initiative planting indigenous tree seedlings across degraded land in the Dakar region.",
    outcomes: [
      "2,000+ trees planted to date",
      "15 community volunteers trained",
      "3 hectares of land restored",
    ],
    icon: "🌱",
  },
  {
    id: 5,
    title: "Child Rights Awareness Campaign",
    category: "Advocacy",
    status: "Ongoing",
    location: "Abuja, Nigeria",
    year: "2026",
    desc: "A sustained advocacy campaign educating parents, teachers, and community leaders on child rights and protection.",
    outcomes: [
      "6 workshops delivered",
      "1,200+ participants reached",
      "Partnership with 3 schools established",
    ],
    icon: "⚖️",
  },
  {
    id: 6,
    title: "Youth Digital Skills Bootcamp",
    category: "Education",
    status: "Completed",
    location: "Accra, Ghana",
    year: "2026",
    desc: "A 3-week intensive coding and digital skills programme equipping unemployed youth with practical tech skills.",
    outcomes: [
      "60 graduates from the cohort",
      "80% received job referrals",
      "5 partner companies involved",
    ],
    icon: "💻",
  },
];

const CATEGORIES = [
  "All",
  "Awards",
  "Health",
  "Empowerment",
  "Environment",
  "Advocacy",
  "Education",
];

const STATUSES = ["All", "Ongoing", "Completed"];

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = PROJECTS.filter((p) => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const statusMatch = activeStatus === "All" || p.status === activeStatus;

    return catMatch && statusMatch;
  });

  return (
    <div
      style={{
        background: "#F8F9FB",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ───────────────── HERO ───────────────── */}

      <section
        style={{
          background: "#0F1E35",
          position: "relative",
          overflow: "hidden",
          padding:
            "clamp(72px, 10vw, 100px) clamp(20px, 6vw, 80px) clamp(56px, 8vw, 80px)",
        }}
      >
        {/* Grid */}
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

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-80px",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "360px",
            height: "360px",
            background:
              "radial-gradient(circle, rgba(47,138,201,0.15) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "720px",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "28px",
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
                color: "#2F8AC9",
              }}
            >
              Our Work
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(46px, 8vw, 88px)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-2px",
              color: "#F0F6FF",
              marginBottom: "28px",
            }}
          >
            Projects &
            <br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#5BA3E0",
              }}
            >
              Initiatives
            </em>
          </h1>

          {/* Sub */}
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "rgba(200,214,232,0.6)",
              maxWidth: "560px",
              marginBottom: "40px",
            }}
          >
            From award ceremonies to field clinics — every project we run is
            rooted in community need and driven by measurable outcomes.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/donate"
              style={{
                flex: "1 1 220px",
                textAlign: "center",
                background: "#2F8AC9",
                color: "#FFFFFF",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "14px 24px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Support Our Work
            </a>

            <a
              href="/volunteer"
              style={{
                flex: "1 1 220px",
                textAlign: "center",
                background: "transparent",
                color: "rgba(200,214,232,0.7)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "13px 24px",
                border: "1px solid rgba(200,214,232,0.2)",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────── WAVE ───────────────── */}

      <div style={{ background: "#0F1E35", lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "clamp(40px, 8vw, 60px)",
            display: "block",
          }}
        >
          <path
            d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z"
            fill="#F8F9FB"
          />
        </svg>
      </div>

      {/* ───────────────── FILTERS ───────────────── */}

      <section
        style={{
          padding: "20px clamp(16px, 5vw, 80px)",
          borderBottom: "1px solid #E5E7EB",
          background: "#F8F9FB",
          position: "sticky",
          top: "68px",
          zIndex: 20,
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Categories */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              overflowX: "auto",
              paddingBottom: "4px",
              scrollbarWidth: "none",
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  whiteSpace: "nowrap",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "10px 16px",
                  borderRadius: "4px",
                  border: "1px solid #E5E7EB",
                  background: activeCategory === cat ? "#2F8AC9" : "#FFFFFF",
                  color: activeCategory === cat ? "#FFFFFF" : "#495057",
                  cursor: "pointer",
                  transition: "0.2s ease",
                  flexShrink: 0,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Status */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              overflowX: "auto",
              paddingBottom: "4px",
              scrollbarWidth: "none",
            }}
          >
            {STATUSES.map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                style={{
                  whiteSpace: "nowrap",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "10px 16px",
                  borderRadius: "4px",
                  border: "1px solid #E5E7EB",
                  background: activeStatus === status ? "#2F8AC9" : "#FFFFFF",
                  color: activeStatus === status ? "#FFFFFF" : "#495057",
                  cursor: "pointer",
                  transition: "0.2s ease",
                  flexShrink: 0,
                }}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── PROJECTS ───────────────── */}

      <section
        style={{
          padding: "clamp(48px, 8vw, 80px) clamp(16px, 5vw, 80px)",
          background: "#F8F9FB",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {filtered.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {filtered.map((project) => (
                <div
                  key={project.id}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "18px",
                    border: "1px solid #E5E7EB",
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Top */}
                  <button
                    onClick={() =>
                      setExpanded(expanded === project.id ? null : project.id)
                    }
                    style={{
                      width: "100%",
                      border: "none",
                      background: "#FFFFFF",
                      padding: "22px",
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "#F8F9FB",
                        border: "1px solid #E5E7EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        flexShrink: 0,
                      }}
                    >
                      {project.icon}
                    </div>

                    {/* Content */}
                    <div
                      style={{
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#0D1117",
                          lineHeight: 1.2,
                          marginBottom: "6px",
                        }}
                      >
                        {project.title}
                      </h3>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          alignItems: "center",
                          color: "#6B7280",
                          fontSize: "12px",
                        }}
                      >
                        <span>{project.location}</span>

                        <span
                          style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: "#D1D5DB",
                          }}
                        />

                        <span>{project.year}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        border: "1px solid #E5E7EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transform:
                          expanded === project.id
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                        transition: "0.3s ease",
                        flexShrink: 0,
                      }}
                    >
                      →
                    </div>
                  </button>

                  {/* Expanded */}
                  <div
                    style={{
                      maxHeight: expanded === project.id ? "700px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.35s ease",
                    }}
                  >
                    <div
                      style={{
                        padding: "22px",
                        background: "#F8F9FB",
                        borderTop: "1px solid #E5E7EB",
                      }}
                    >
                      <div
                        className="project-expanded-grid"
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "minmax(0,1fr) minmax(240px,300px)",
                          gap: "32px",
                        }}
                      >
                        {/* Left */}
                        <div>
                          <Chip label={project.category} />

                          <p
                            style={{
                              fontFamily: "'Barlow', sans-serif",
                              fontSize: "15px",
                              fontWeight: 300,
                              lineHeight: 1.9,
                              color: "#4B5563",
                              marginTop: "18px",
                              marginBottom: "20px",
                            }}
                          >
                            {project.desc}
                          </p>

                          <a
                            href="/contact"
                            style={{
                              fontFamily: "'Barlow Condensed', sans-serif",
                              fontSize: "11px",
                              fontWeight: 700,
                              letterSpacing: "2.5px",
                              textTransform: "uppercase",
                              color: "#2F8AC9",
                              textDecoration: "none",
                            }}
                          >
                            Learn More →
                          </a>
                        </div>

                        {/* Right */}
                        <div>
                          <h5
                            style={{
                              fontFamily: "'Barlow Condensed', sans-serif",
                              fontSize: "9px",
                              fontWeight: 700,
                              letterSpacing: "3px",
                              textTransform: "uppercase",
                              color: "#9CA3AF",
                              marginBottom: "16px",
                            }}
                          >
                            Key Outcomes
                          </h5>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {project.outcomes.map((outcome, j) => (
                              <div
                                key={j}
                                style={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: "12px",
                                  paddingBottom: "14px",
                                  marginBottom: "14px",
                                  borderBottom:
                                    j < project.outcomes.length - 1
                                      ? "1px solid #E5E7EB"
                                      : "none",
                                }}
                              >
                                <span
                                  style={{
                                    width: "5px",
                                    height: "5px",
                                    borderRadius: "50%",
                                    background: "#2F8AC9",
                                    marginTop: "8px",
                                    flexShrink: 0,
                                  }}
                                />

                                <span
                                  style={{
                                    fontFamily: "'Barlow', sans-serif",
                                    fontSize: "13px",
                                    fontWeight: 300,
                                    lineHeight: 1.7,
                                    color: "#374151",
                                  }}
                                >
                                  {outcome}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "100px 20px",
              }}
            >
              <span
                style={{
                  fontSize: "54px",
                  opacity: 0.2,
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                📋
              </span>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#0D1117",
                  marginBottom: "10px",
                }}
              >
                No projects found
              </h3>

              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "14px",
                  color: "#6B7280",
                }}
              >
                Try a different category or status filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ───────────────── CTA ───────────────── */}

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
          }}
        />

        {/* Glow */}
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
            zIndex: 2,
          }}
        >
          {/* Left */}
          <div style={{ flex: "1 1 400px", minWidth: 0 }}>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 6vw, 44px)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              Ready to work
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                together?
              </em>
            </h3>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Partner with us to drive meaningful change across Africa.
            </p>
          </div>

          {/* Buttons */}
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
              href="/contact"
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
              }}
            >
              Get In Touch
            </a>

            <a
              href="/donate"
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
              }}
            >
              Donate
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────── RESPONSIVE GRID ───────────────── */}

      <style>
        {`
          @media (max-width: 920px) {
            .project-expanded-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
