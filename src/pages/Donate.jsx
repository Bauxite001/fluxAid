// pages/Donate.jsx

import { useState } from "react";
import { DONATION_TIERS, ORG_NAME } from "../constants";

const WHY_ITEMS = [
  {
    num: "01",
    title: "100% Impact",
    desc: "Every naira goes directly to our programmes helping communities.",
  },
  {
    num: "02",
    title: "Secure Payment",
    desc: "Protected by Paystack encryption and PCI DSS compliance.",
  },
  {
    num: "03",
    title: "Tax Receipt",
    desc: "Get an official receipt for your records and tax purposes.",
  },
];

const FAQ = [
  {
    q: "Is my donation tax deductible?",
    a: "Flux Aid Initiative is a registered non-governmental organisation. Please consult your local tax authority for guidance.",
  },
  {
    q: "Can I donate internationally?",
    a: "Yes. We accept both Nigerian Naira and US Dollars from supporters globally.",
  },
  {
    q: "Can I support a specific programme?",
    a: "Absolutely. You can direct your donation to any of our active programmes.",
  },
];

const Donate = () => {
  const [currency, setCurrency] = useState("USD");
  const [selectedAmount, setSelectedAmount] = useState("$50");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const amounts =
    currency === "USD"
      ? ["$10", "$50", "$100", "$500", "$1000", "$10000"]
      : ["₦5000", "₦10000", "₦25000", "₦50000", "₦100000", "₦500000"];

  return (
    <div
      style={{
        background: "#F5F3EF",
        minHeight: "100vh",
      }}
    >
      {/* ───────────────── HERO ───────────────── */}
      <section
        style={{
          background: "#0F1E35",
          padding: "110px 24px 90px",
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
            backgroundSize: "64px 64px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-120px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(47,138,201,0.18) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "20px",
                height: "1px",
                background: "#F28C28",
              }}
            />
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#F28C28",
              }}
            >
              Support Our Cause
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(54px, 9vw, 92px)",
              lineHeight: 0.95,
              letterSpacing: "-3px",
              color: "#FFFFFF",
              marginBottom: "28px",
              maxWidth: "760px",
            }}
          >
            Make a Donation
          </h1>

          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "17px",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.6)",
              maxWidth: "640px",
              margin: 0,
            }}
          >
            Your generosity helps us restore dignity, build capacity, and
            empower lives across communities. Every contribution matters.
          </p>
        </div>
      </section>

      {/* ───────────────── MAIN SECTION ───────────────── */}
      <section
        style={{
          padding: "80px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "26px",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "1px",
                  background: "#F28C28",
                }}
              />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#F28C28",
                }}
              >
                Why Donate
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(42px, 6vw, 72px)",
                lineHeight: 0.95,
                letterSpacing: "-2px",
                color: "#0F1E35",
                marginBottom: "28px",
              }}
            >
              Your Support
              <br />
              <span style={{ color: "#F28C28" }}>Changes Lives.</span>
            </h2>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "17px",
                lineHeight: 1.9,
                color: "#667085",
                marginBottom: "42px",
                maxWidth: "560px",
              }}
            >
              Every donation directly supports our programmes that restore
              dignity, build capacity, and transform communities across Africa.
            </p>

            {/* WHY CARDS */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                marginBottom: "50px",
              }}
            >
              {WHY_ITEMS.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E7E7E7",
                    padding: "24px",
                    display: "flex",
                    gap: "18px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "#FFF1E5",
                      color: "#F28C28",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
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
                        color: "#A0A8B5",
                        marginBottom: "6px",
                      }}
                    >
                      {item.title}
                    </div>

                    <p
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "14px",
                        lineHeight: 1.7,
                        color: "#344054",
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* STATS */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "36px",
                marginBottom: "50px",
              }}
            >
              {[
                { num: "500+", label: "Lives Impacted" },
                { num: "8", label: "Active Programs" },
                { num: "100%", label: "Impact Focused" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "48px",
                      fontWeight: 700,
                      color: "#F28C28",
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#98A2B3",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* QUOTE */}
            <div
              style={{
                borderLeft: "3px solid #F28C28",
                paddingLeft: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "30px",
                  lineHeight: 1.4,
                  color: "#667085",
                  fontStyle: "italic",
                  marginBottom: "14px",
                }}
              >
                "No act of kindness, no matter how small, is ever wasted."
              </p>

              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#F28C28",
                }}
              >
                — {ORG_NAME}
              </span>
            </div>
          </div>

          {/* RIGHT — DONATION FORM */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E7E7E7",
              padding: "40px",
              borderRadius: "4px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "48px",
                lineHeight: 1,
                color: "#0F1E35",
                marginBottom: "12px",
              }}
            >
              Make Your Donation
            </h3>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                color: "#98A2B3",
                marginBottom: "32px",
              }}
            >
              Complete the form below to make your secure donation.
            </p>

            {/* Currency */}
            <div style={{ marginBottom: "28px" }}>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#98A2B3",
                  marginBottom: "12px",
                }}
              >
                Donation Currency
              </div>

              <div style={{ display: "flex" }}>
                {["USD", "NGN"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    style={{
                      flex: 1,
                      padding: "16px",
                      border: "1px solid #E7E7E7",
                      background: currency === c ? "#F28C28" : "#F8F9FB",
                      color: currency === c ? "#FFFFFF" : "#344054",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      cursor: "pointer",
                    }}
                  >
                    {c === "USD" ? "$ USD" : "₦ NGN"}
                  </button>
                ))}
              </div>
            </div>

            {/* Amounts */}
            <div style={{ marginBottom: "28px" }}>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#98A2B3",
                  marginBottom: "12px",
                }}
              >
                Select Amount
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "10px",
                }}
              >
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setSelectedAmount(amt)}
                    style={{
                      padding: "18px 10px",
                      border:
                        selectedAmount === amt
                          ? "1px solid #F28C28"
                          : "1px solid #E7E7E7",
                      background:
                        selectedAmount === amt ? "#FFF1E5" : "#FFFFFF",
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#0F1E35",
                      cursor: "pointer",
                    }}
                  >
                    {amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <input placeholder="Custom amount" style={inputStyle} />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: "16px",
                }}
              >
                <input placeholder="First Name" style={inputStyle} />
                <input placeholder="Last Name" style={inputStyle} />
              </div>

              <input placeholder="Email Address" style={inputStyle} />

              <input placeholder="Phone Number" style={inputStyle} />

              <button
                style={{
                  marginTop: "8px",
                  background: "#F28C28",
                  color: "#FFFFFF",
                  border: "none",
                  padding: "18px",
                  cursor: "pointer",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Proceed To Payment →
              </button>

              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "12px",
                  color: "#98A2B3",
                  textAlign: "center",
                  lineHeight: 1.7,
                }}
              >
                Your payment is secured by Paystack. We do not store your card
                details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── FAQ ───────────────── */}
      <section
        style={{
          padding: "80px 24px",
          background: "#FFFFFF",
          borderTop: "1px solid #ECECEC",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "22px",
            }}
          >
            <span
              style={{
                width: "20px",
                height: "1px",
                background: "#F28C28",
              }}
            />
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#F28C28",
              }}
            >
              Donation FAQ
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 6vw, 64px)",
              color: "#0F1E35",
              lineHeight: 1,
              marginBottom: "40px",
            }}
          >
            Common Questions
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {FAQ.map((item, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #E7E7E7",
                  background: "#F8F9FB",
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "24px",
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
                      color: "#0F1E35",
                    }}
                  >
                    {item.q}
                  </span>

                  <span
                    style={{
                      fontSize: "22px",
                      color: "#F28C28",
                    }}
                  >
                    {expandedFaq === i ? "−" : "+"}
                  </span>
                </button>

                {expandedFaq === i && (
                  <div
                    style={{
                      padding: "0 24px 24px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "14px",
                        lineHeight: 1.9,
                        color: "#667085",
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

      {/* ───────────────── CTA STRIP ───────────────── */}
      <section
        style={{
          background: "#0F1E35",
          padding: "50px 24px",
          borderTop: "4px solid #F28C28",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "42px",
                color: "#FFFFFF",
                lineHeight: 1,
                marginBottom: "10px",
              }}
            >
              Support the Mission.
            </h3>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.6)",
                margin: 0,
              }}
            >
              Your donation restores hope to someone in need today.
            </p>
          </div>

          <a
            href="/donate"
            style={{
              background: "#F28C28",
              color: "#FFFFFF",
              textDecoration: "none",
              padding: "16px 34px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "16px",
  border: "1px solid #E7E7E7",
  background: "#F8F9FB",
  fontFamily: "'Barlow', sans-serif",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
};

export default Donate;
