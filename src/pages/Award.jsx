// pages/Award.jsx

import { DANGA, ORG_NAME } from "../constants";

const CRITERIA = [
  {
    num: "01",
    title: "Enduring Achievement",
    desc: "Demonstrated achievement in your field of endeavour that has stood the test of time and continues to inspire others.",
  },
  {
    num: "02",
    title: "Selfless Service",
    desc: "A proven track record of serving humanity above personal gain — giving time, resources, and expertise without seeking reward.",
  },
  {
    num: "03",
    title: "Integrity",
    desc: "A life and career defined by honesty, transparency, and moral uprightness in both public and private conduct.",
  },
  {
    num: "04",
    title: "Patriotism",
    desc: "Demonstrated love of country and active contribution to national development across any sector.",
  },
  {
    num: "05",
    title: "Good Conduct",
    desc: "Exemplary personal behaviour that sets a standard younger generations can look up to and aspire toward.",
  },
];

const OBJECTIVES = [
  "Identify and recognise role models worthy of emulation across all sectors",
  "Celebrate greatness achieved by leaders in Nigeria and across Africa",
  "Honour Nigerians who took honesty and integrity to greater heights in life",
  "Celebrate men and women whose positive antecedents are still alive",
  "Inspire younger generations to aspire to greater heights in service",
  "Enforce the continuation of good work exemplified by an individual",
];

// Cleaned up the array to only include valid entries
const PAST_AWARDEES = [
  {
    name: "Dr. M. K. Kayode",
    role: "Director, Finance & Accounts — Federal Ministry of Information & Culture",
    year: "2022",
  },
  {
    name: "Karmal Mansour",
    role: "CEO, Fox Business Development Limited",
    year: "2024",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Nomination",
    desc: "Candidates are identified and nominated by the Flux Aid Board of Trustees or submitted by the public for review.",
  },
  {
    step: "02",
    title: "Evaluation",
    desc: "The committee reviews nominees against the five broad criteria — achievement, service, integrity, patriotism, and conduct.",
  },
  {
    step: "03",
    title: "Endorsement",
    desc: "Endorsed nominees receive a formal letter of invitation from the Board of Trustees to confirm readiness for the award.",
  },
  {
    step: "04",
    title: "Ceremony",
    desc: "Awardees are celebrated at the annual DANGA ceremony — a formal event recognising their contribution to national development.",
  },
];

const Award = () => {
  return (
    <div
      style={{
        background: "#F8F9FB",
        minHeight: "100vh",
      }}
    >
      {/* ── HERO ─────────────────────────────── */}
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
            maxWidth: "760px",
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
              {ORG_NAME} · Annual Recognition
            </span>
          </div>

          <div
            style={{
              display: "inline-block",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              background: "#2F8AC9",
              color: "#FFFFFF",
              padding: "8px 16px",
              borderRadius: "4px",
              marginBottom: "24px",
            }}
          >
            DANGA
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
            Distinguished
            <br />
            Ambassador of
            <br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#2F8AC9",
              }}
            >
              Change
            </em>
          </h1>

          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8,
              margin: "0 0 12px 0",
            }}
          >
            National Gold Award
          </p>

          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8,
              maxWidth: "560px",
              marginBottom: "40px",
            }}
          >
            {DANGA.desc}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/contact"
              style={{
                background: "#2F8AC9",
                color: "#FFFFFF",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "14px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Nominate Someone
            </a>
            <a
              href="#process"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.8)",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                padding: "13px 28px",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "4px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              How It Works
            </a>
          </div>
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
            id="waveGradient-award"
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
          fill="url(#waveGradient-award)"
        />
      </svg>

      {/* ── KEY QUOTE ────────────────────────── */}
      <section
        style={{
          padding: "64px 80px",
          borderBottom: "1px solid #E0E7F1",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "#2F8AC9",
              marginBottom: "32px",
            }}
          />
          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: 1.65,
              color: "#0F1E35",
              marginBottom: "24px",
              marginGrow: 0,
              marginLeft: 0,
              marginRight: 0,
            }}
          >
            "Hard work, integrity and transparency are the hallmark of a
            successful human achievement. Men and women who are selfless and
            dedicated to their responsibilities are never forgotten in the
            annals of history. They move from one higher position to another and
            their achievements have no boundary."
          </blockquote>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#A8B8CC",
            }}
          >
            — {ORG_NAME} Award Address
          </span>
        </div>
      </section>

      {/* ── OBJECTIVES ───────────────────────── */}
      <section
        style={{
          padding: "64px 80px",
          borderBottom: "1px solid #E0E7F1",
          background: "#F8F9FB",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "64px",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
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
                  color: "#A8B8CC",
                }}
              >
                Why It Exists
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "#0F1E35",
                lineHeight: 1.05,
                letterSpacing: "-0.5px",
              }}
            >
              Award{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#2F8AC9",
                }}
              >
                Objectives
              </em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {OBJECTIVES.map((obj, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  borderBottom:
                    i < OBJECTIVES.length - 1 ? "1px solid #E0E7F1" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    color: "#A8B8CC",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: "#5A6B7F",
                    margin: 0,
                  }}
                >
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRITERIA ─────────────────────────── */}
      <section
        style={{
          padding: "64px 80px",
          borderBottom: "1px solid #E0E7F1",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
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
                color: "#A8B8CC",
              }}
            >
              Who Qualifies
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "48px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "#0F1E35",
                lineHeight: 1.05,
                letterSpacing: "-0.5px",
                margin: 0,
              }}
            >
              Broad{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#2F8AC9",
                }}
              >
                Criteria
              </em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              border: "1px solid #E0E7F1",
              background: "#E0E7F1",
            }}
          >
            {CRITERIA.map((c) => (
              <div
                key={c.num}
                style={{
                  background: "#FFFFFF",
                  padding: "32px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "#2F8AC9",
                    opacity: 0.3,
                  }}
                />

                <span
                  style={{
                    position: "absolute",
                    bottom: "-12px",
                    right: "-4px",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "80px",
                    fontWeight: 700,
                    color: "rgba(15, 30, 53, 0.04)",
                    lineHeight: "1",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {c.num}
                </span>

                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#A8B8CC",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  {c.num}
                </span>
                <h4
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#0F1E35",
                    lineHeight: 1.2,
                    marginBottom: "12px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {c.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: "#5A6B7F",
                    margin: 0,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────── */}
      <section
        id="process"
        style={{
          padding: "64px 80px",
          borderBottom: "1px solid #E0E7F1",
          background: "#F8F9FB",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
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
                color: "#A8B8CC",
              }}
            >
              How It Works
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#0F1E35",
              lineHeight: 1.05,
              letterSpacing: "-0.5px",
              marginBottom: "48px",
            }}
          >
            The{" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#2F8AC9",
              }}
            >
              Process
            </em>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1px",
              background: "#E0E7F1",
              border: "1px solid #E0E7F1",
            }}
          >
            {PROCESS.map((step, i) => (
              <div
                key={step.step}
                style={{
                  background: "#FFFFFF",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "3px",
                      color: "#A8B8CC",
                    }}
                  >
                    {step.step}
                  </span>
                  {i < PROCESS.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        height: "1px",
                        background: "#E0E7F1",
                      }}
                    />
                  )}
                  {i < PROCESS.length - 1 && (
                    <span
                      style={{
                        color: "#A8B8CC",
                        fontSize: "12px",
                      }}
                    >
                      →
                    </span>
                  )}
                </div>
                <h4
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#0F1E35",
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "#5A6B7F",
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAST AWARDEES ────────────────────── */}
      <section
        style={{
          padding: "64px 80px",
          borderBottom: "1px solid #E0E7F1",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
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
                color: "#A8B8CC",
              }}
            >
              Recognised Leaders
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "48px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "#0F1E35",
                lineHeight: 1.05,
                letterSpacing: "-0.5px",
                margin: 0,
              }}
            >
              Past{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#2F8AC9",
                }}
              >
                Awardees
              </em>
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              background: "#E0E7F1",
              border: "1px solid #E0E7F1",
            }}
          >
            {PAST_AWARDEES.map((awardee, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  padding: "24px 32px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#0F1E35",
                      lineHeight: 1.2,
                      marginBottom: "4px",
                    }}
                  >
                    {awardee.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "#A8B8CC",
                    }}
                  >
                    {awardee.role}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      background: "#2F8AC9",
                      color: "#FFFFFF",
                      padding: "6px 12px",
                      borderRadius: "4px",
                    }}
                  >
                    {awardee.year}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#A8B8CC",
                    }}
                  >
                    DANGA
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* This completes your cut-off paragraph footer */}
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              color: "#A8B8CC",
              textAlign: "center",
              marginTop: "32px",
              letterSpacing: "0.5px",
            }}
          >
            The list above reflects officially certified recipients of the{" "}
            {DANGA.desc || "DANGA"} honors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Award;
