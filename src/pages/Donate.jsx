// pages/Donate.jsx

import { useState } from "react";
import { DONATION_TIERS, ORG_NAME } from "../constants";

const WHY_ITEMS = [
  {
    num: "01",
    color: "#2F8AC9",
    title: "Direct Impact",
    desc: "Every naira and dollar goes directly to our programmes — not office budgets.",
  },
  {
    num: "02",
    color: "#6C609E",
    title: "Secure Payment",
    desc: "Protected by Paystack encryption and PCI DSS compliance.",
  },
  {
    num: "03",
    color: "#2F8AC9",
    title: "Official Receipt",
    desc: "Get an official receipt for your records and tax purposes.",
  },
];

const FAQ = [
  {
    q: "Is my donation tax deductible?",
    a: "Flux Aid Initiative is a registered non-governmental organisation. Please consult your local tax authority for guidance on deductibility in your country.",
  },
  {
    q: "Can I donate internationally?",
    a: "Yes. We accept both Nigerian Naira (₦) and US Dollars ($) from supporters anywhere in the world.",
  },
  {
    q: "Can I support a specific programme?",
    a: "Absolutely. On the donation form you can specify which programme you would like your gift to support.",
  },
  {
    q: "Can I set up recurring donations?",
    a: "Yes. When completing your donation you will have the option to make it a monthly recurring gift. You can cancel at any time.",
  },
];

const Donate = () => {
  const [currency, setCurrency] = useState("NGN");
  const [selectedAmt, setSelectedAmt] = useState(null);
  const [customAmt, setCustomAmt] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const amounts =
    currency === "NGN"
      ? ["₦5,000", "₦10,000", "₦25,000", "₦50,000", "₦100,000", "₦500,000"]
      : ["$10", "$25", "$50", "$100", "$250", "$1,000"];

  const inp = {
    width: "100%",
    padding: "14px 16px",
    background: "#F8F9FB",
    border: "1.5px solid #E5E7EB",
    borderRadius: "8px",
    outline: "none",
    fontFamily: "'Barlow', sans-serif",
    fontSize: "14px",
    color: "#0D1117",
    boxSizing: "border-box",
  };

  return (
    <div style={{ background: "#F8F9FB", minHeight: "100vh" }}>
      {/* ── HERO ─────────────────────────────── */}
      <section
        style={{
          background: "#0F1E35",
          padding:
            "clamp(64px,10vw,110px) clamp(20px,5vw,80px) clamp(60px,8vw,90px)",
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
            right: "-80px",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(108,96,158,0.22) 0%, transparent 65%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "200px",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(47,138,201,0.15) 0%, transparent 65%)",
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
              Support Our Work
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(48px, 8vw, 92px)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-2px",
              color: "#F0F6FF",
              marginBottom: "24px",
            }}
          >
            Make a<br />
            <em
              style={{ fontStyle: "italic", fontWeight: 400, color: "#9B8EC4" }}
            >
              Donation
            </em>
          </h1>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "rgba(200,214,232,0.6)",
              maxWidth: "560px",
              margin: 0,
            }}
          >
            Your generosity helps restore dignity, build capacity, and empower
            lives across communities. Every contribution goes directly to the
            ground.
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

      {/* ── MAIN ─────────────────────────────── */}
      <section style={{ padding: "clamp(40px,6vw,80px) clamp(20px,5vw,80px)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(32px,5vw,60px)",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
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
                Why Give
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px,5vw,60px)",
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: "-1px",
                color: "#0D1117",
                marginBottom: "20px",
              }}
            >
              Your support
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#6C609E",
                }}
              >
                changes lives.
              </em>
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "#6B7280",
                marginBottom: "36px",
                maxWidth: "480px",
              }}
            >
              Every donation directly supports our programmes that restore
              dignity, build capacity, and transform communities across Africa.
            </p>

            {/* Why cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "40px",
              }}
            >
              {WHY_ITEMS.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: "12px",
                    padding: "20px 22px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    borderLeft: `3px solid ${item.color}`,
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "13px",
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: item.color,
                        marginBottom: "5px",
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "13px",
                        lineHeight: 1.7,
                        color: "#6B7280",
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div
              style={{
                background: "#0F1E35",
                borderRadius: "12px",
                padding: "28px 32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-30px",
                  width: "140px",
                  height: "140px",
                  background:
                    "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 70%)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "18px",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: 1.65,
                  color: "rgba(200,214,232,0.75)",
                  marginBottom: "14px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                "No act of kindness, no matter how small, is ever wasted."
              </p>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#2F8AC9",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                — {ORG_NAME}
              </span>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "20px",
              padding: "clamp(24px,4vw,40px)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
              position: "relative",
              overflow: "hidden",
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
                background: "linear-gradient(90deg, #2F8AC9, #6C609E)",
                borderRadius: "20px 20px 0 0",
              }}
            />

            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px,3vw,40px)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#0D1117",
                marginBottom: "8px",
              }}
            >
              Make Your Donation
            </h3>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "#9CA3AF",
                marginBottom: "28px",
              }}
            >
              Complete the form below to make your secure donation.
            </p>

            {/* Currency toggle */}
            <div style={{ marginBottom: "24px" }}>
              <div
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
                Currency
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                {["NGN", "USD"].map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCurrency(c);
                      setSelectedAmt(null);
                    }}
                    style={{
                      flex: 1,
                      padding: "12px",
                      border: "1.5px solid",
                      borderColor: currency === c ? "#2F8AC9" : "#E5E7EB",
                      background: currency === c ? "#2F8AC9" : "#F8F9FB",
                      color: currency === c ? "#FFFFFF" : "#6B7280",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      borderRadius: "8px",
                      transition: "all 0.2s",
                    }}
                  >
                    {c === "NGN" ? "₦ Naira" : "$ Dollar"}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount grid */}
            <div style={{ marginBottom: "16px" }}>
              <div
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
                Select Amount
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
                }}
              >
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      setSelectedAmt(amt);
                      setCustomAmt("");
                    }}
                    style={{
                      padding: "14px 8px",
                      border: "1.5px solid",
                      borderColor: selectedAmt === amt ? "#2F8AC9" : "#E5E7EB",
                      background:
                        selectedAmt === amt
                          ? "rgba(47,138,201,0.08)"
                          : "#F8F9FB",
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: selectedAmt === amt ? "#2F8AC9" : "#374151",
                      cursor: "pointer",
                      borderRadius: "8px",
                      transition: "all 0.2s",
                    }}
                  >
                    {amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom amount */}
            <div style={{ marginBottom: "20px" }}>
              <input
                type="number"
                placeholder="Or enter custom amount"
                value={customAmt}
                onChange={(e) => {
                  setCustomAmt(e.target.value);
                  setSelectedAmt(null);
                }}
                style={{
                  ...inp,
                  borderColor: customAmt ? "#2F8AC9" : "#E5E7EB",
                }}
              />
            </div>

            {/* Personal details */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <input
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                style={inp}
              />
              <input
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                style={inp}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                placeholder="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inp}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                placeholder="Phone Number"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={inp}
              />
            </div>

            {/* Submit */}
            <button
              style={{
                width: "100%",
                padding: "16px",
                background: "#2F8AC9",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                marginBottom: "12px",
              }}
            >
              Proceed to Payment →
            </button>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "11px",
                color: "#9CA3AF",
                textAlign: "center",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Your payment is secured by Paystack. We do not store your card
              details.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────── */}
      <section
        style={{
          padding: "clamp(40px,6vw,80px) clamp(20px,5vw,80px)",
          background: "#FFFFFF",
          borderTop: "1px solid #E5E7EB",
        }}
      >
        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
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
              FAQ
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px,5vw,52px)",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#0D1117",
              marginBottom: "40px",
            }}
          >
            Common{" "}
            <em
              style={{ fontStyle: "italic", fontWeight: 400, color: "#6C609E" }}
            >
              Questions
            </em>
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {FAQ.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#F8F9FB",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  overflow: "hidden",
                  borderLeft:
                    expandedFaq === i
                      ? "3px solid #6C609E"
                      : "3px solid transparent",
                  transition: "border-color 0.2s",
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "20px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#0D1117",
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: expandedFaq === i ? "#6C609E" : "#9CA3AF",
                      flexShrink: 0,
                      marginLeft: "16px",
                    }}
                  >
                    {expandedFaq === i ? "−" : "+"}
                  </span>
                </button>
                {expandedFaq === i && (
                  <div style={{ padding: "0 24px 20px" }}>
                    <p
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "14px",
                        fontWeight: 300,
                        lineHeight: 1.85,
                        color: "#6B7280",
                        margin: 0,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────── */}
      <section
        style={{
          background: "#0F1E35",
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
              "linear-gradient(rgba(47,138,201,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
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
              "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
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
                fontSize: "clamp(28px,4vw,44px)",
                fontWeight: 700,
                color: "#F0F6FF",
                lineHeight: 1.1,
                marginBottom: "8px",
              }}
            >
              Support the{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#9B8EC4",
                }}
              >
                Mission.
              </em>
            </h3>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(200,214,232,0.55)",
                margin: 0,
              }}
            >
              Your donation restores hope to someone in need today.
            </p>
          </div>
          <a
            href="/donate"
            style={{
              background: "#2F8AC9",
              color: "white",
              textDecoration: "none",
              padding: "14px 32px",
              borderRadius: "4px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            Donate Now →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Donate;
