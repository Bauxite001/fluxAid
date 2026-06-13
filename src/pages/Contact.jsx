// pages/Contact.jsx
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { ORG_NAME, CONTACT } from "../constants";

const ENQUIRY_TYPES = [
  "General Enquiry",
  "Partnership & Collaboration",
  "Media & Press",
  "DANGA Award Nomination",
  "Volunteer Enquiry",
  "Donation Enquiry",
  "Programme Information",
  "Other",
];

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organisation: "",
    enquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE,
        {
          from_name: `${form.firstName} ${form.lastName}`,
          from_email: form.email,
          phone: form.phone || "Not provided",
          organisation: form.organisation || "Not provided",
          enquiry_type: form.enquiryType,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again or email us directly.");
    }

    setLoading(false);
  };

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
    transition: "border-color 0.2s",
  };

  const lbl = {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "9px",
    fontWeight: 700,
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "#9CA3AF",
    display: "block",
    marginBottom: "6px",
  };

  return (
    <div style={{ background: "#F8F9FB", minHeight: "100vh" }}>
      {/* ── HERO ─────────────────────────────── */}
      <section
        style={{
          background: "#0F1E35",
          padding: isMobile
            ? "60px 24px 52px"
            : "clamp(64px,10vw,100px) clamp(20px,5vw,80px) clamp(56px,7vw,80px)",
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
            width: isMobile ? "220px" : "360px",
            height: isMobile ? "220px" : "360px",
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
            left: isMobile ? "-40px" : "200px",
            width: "280px",
            height: "280px",
            background:
              "radial-gradient(circle, rgba(47,138,201,0.15) 0%, transparent 65%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "680px", position: "relative", zIndex: 1 }}>
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
              Get In Touch
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile
                ? "clamp(44px,14vw,64px)"
                : "clamp(48px,8vw,84px)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-2px",
              color: "#F0F6FF",
              marginBottom: "20px",
            }}
          >
            Let's{" "}
            <em
              style={{ fontStyle: "italic", fontWeight: 400, color: "#9B8EC4" }}
            >
              talk
            </em>
          </h1>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: isMobile ? "14px" : "15px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(200,214,232,0.6)",
              maxWidth: "500px",
              margin: 0,
            }}
          >
            Whether you want to partner, nominate someone for the DANGA Award,
            ask about our programmes, or just say hello — we want to hear from
            you.
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
      <section
        style={{
          padding: isMobile
            ? "36px 20px 60px"
            : "clamp(40px,6vw,72px) clamp(20px,5vw,80px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            // Single column on mobile, two columns on desktop
            gridTemplateColumns: isMobile
              ? "1fr"
              : "1fr clamp(280px,28vw,360px)",
            gap: isMobile ? "28px" : "clamp(32px,5vw,64px)",
            alignItems: "start",
          }}
        >
          {/* ── FORM ─────────────────────────── */}
          {submitted ? (
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "20px",
                padding: isMobile ? "48px 28px" : "64px 48px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "360px",
                gap: "20px",
                borderTop: "3px solid #2F8AC9",
              }}
            >
              <span style={{ fontSize: "52px", opacity: 0.7 }}>✉️</span>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(24px,3vw,32px)",
                  fontWeight: 700,
                  color: "#0D1117",
                }}
              >
                Message received
              </h3>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "#6B7280",
                  maxWidth: "360px",
                }}
              >
                Thank you for reaching out to {ORG_NAME}. We will get back to
                you within 3–5 working days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#6C609E",
                  border: "1.5px solid rgba(108,96,158,0.3)",
                  background: "transparent",
                  padding: "11px 22px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "20px",
                padding: isMobile ? "28px 20px" : "clamp(24px,4vw,44px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
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
                  height: "3px",
                  background: "linear-gradient(90deg, #2F8AC9, #6C609E)",
                  borderRadius: "20px 20px 0 0",
                }}
              />

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(24px,3vw,32px)",
                  fontWeight: 700,
                  color: "#0D1117",
                  marginBottom: "6px",
                }}
              >
                Send a Message
              </h2>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#9CA3AF",
                  marginBottom: "24px",
                }}
              >
                Fill in the form below and we'll get back to you.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {/* Name row — stacks on mobile */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  <div>
                    <label style={lbl}>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      style={inp}
                      onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                    />
                  </div>
                  <div>
                    <label style={lbl}>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      style={inp}
                      onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                    />
                  </div>
                </div>

                {/* Email + Phone — stacks on mobile */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  <div>
                    <label style={lbl}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inp}
                      onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                    />
                  </div>
                  <div>
                    <label style={lbl}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      style={inp}
                      onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                    />
                  </div>
                </div>

                <div>
                  <label style={lbl}>Organisation</label>
                  <input
                    type="text"
                    name="organisation"
                    value={form.organisation}
                    onChange={handleChange}
                    placeholder="Optional"
                    style={inp}
                    onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>

                <div>
                  <label style={lbl}>Enquiry Type *</label>
                  <select
                    name="enquiryType"
                    required
                    value={form.enquiryType}
                    onChange={handleChange}
                    style={{ ...inp, appearance: "none", cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  >
                    <option value="" disabled>
                      Select enquiry type
                    </option>
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={lbl}>Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    style={{ ...inp, resize: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>

                {error && (
                  <div
                    style={{
                      background: "rgba(220,38,38,0.08)",
                      border: "1px solid rgba(220,38,38,0.2)",
                      borderRadius: "8px",
                      padding: "12px 16px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "13px",
                        fontWeight: 300,
                        color: "#DC2626",
                        margin: 0,
                      }}
                    >
                      {error}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "15px",
                    background: loading ? "rgba(47,138,201,0.6)" : "#2F8AC9",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    cursor: loading ? "not-allowed" : "pointer",
                    marginTop: "4px",
                    transition: "background 0.2s",
                  }}
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "11px",
                    color: "#9CA3AF",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  We respond within 3–5 working days · No spam ever
                </p>
              </div>
            </form>
          )}

          {/* ── SIDEBAR ──────────────────────── */}
          {/* On mobile: sidebar appears BELOW the form, no sticky */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              position: isMobile ? "relative" : "sticky",
              top: isMobile ? "unset" : "100px",
            }}
          >
            {/* Abuja */}
            <div
              style={{
                background: "#0F1E35",
                borderRadius: "14px",
                padding: "22px 24px",
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
                  height: "2px",
                  background: "linear-gradient(90deg, #2F8AC9, transparent)",
                  borderRadius: "14px 14px 0 0",
                }}
              />
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
                  color: "#2F8AC9",
                  marginBottom: "14px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Abuja Office
              </h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: "rgba(200,214,232,0.65)",
                    margin: 0,
                  }}
                >
                  {CONTACT.abuja}
                </p>
                {[CONTACT.phone1, CONTACT.phone2].map((p) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "rgba(200,214,232,0.5)",
                      textDecoration: "none",
                    }}
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>

            {/* Lagos */}
            <div
              style={{
                background: "#0F1E35",
                borderRadius: "14px",
                padding: "22px 24px",
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
                  height: "2px",
                  background: "linear-gradient(90deg, #6C609E, transparent)",
                  borderRadius: "14px 14px 0 0",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "100px",
                  height: "100px",
                  background:
                    "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 70%)",
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
                  color: "#6C609E",
                  marginBottom: "14px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Lagos Office
              </h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: "rgba(200,214,232,0.65)",
                    margin: 0,
                  }}
                >
                  {CONTACT.lagos}
                </p>
                <a
                  href={`tel:${CONTACT.phone3}`}
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "rgba(200,214,232,0.5)",
                    textDecoration: "none",
                  }}
                >
                  {CONTACT.phone3}
                </a>
              </div>
            </div>

            {/* Email + Social — side by side on mobile */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr",
                gap: "12px",
              }}
            >
              {/* Email */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "14px",
                  padding: "20px 18px",
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
                    marginBottom: "12px",
                  }}
                >
                  Email Us
                </h5>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  {[CONTACT.email1, CONTACT.email2].map((e) => (
                    <a
                      key={e}
                      href={`mailto:${e}`}
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: isMobile ? "11px" : "12px",
                        fontWeight: 300,
                        color: "#2F8AC9",
                        textDecoration: "none",
                        wordBreak: "break-all",
                      }}
                    >
                      {e}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "14px",
                  padding: "20px 18px",
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
                    marginBottom: "12px",
                  }}
                >
                  Follow Us
                </h5>
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap",
                    marginBottom: "8px",
                  }}
                >
                  {[
                    { l: "𝕏", h: "#" },
                    { l: "in", h: "#" },
                    { l: "IG", h: "#" },
                    { l: "YT", h: "#" },
                  ].map((s) => (
                    <a
                      key={s.l}
                      href={s.h}
                      style={{
                        width: "34px",
                        height: "34px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1.5px solid #E5E7EB",
                        borderRadius: "6px",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#6B7280",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#2F8AC9";
                        e.currentTarget.style.color = "#2F8AC9";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#E5E7EB";
                        e.currentTarget.style.color = "#6B7280";
                      }}
                    >
                      {s.l}
                    </a>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "11px",
                    fontWeight: 300,
                    color: "#9CA3AF",
                    margin: 0,
                  }}
                >
                  {CONTACT.social}
                </p>
              </div>
            </div>

            {/* Response time */}
            <div
              style={{
                background: "#F8F9FB",
                border: "1px solid #E5E7EB",
                borderRadius: "14px",
                padding: "18px 20px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "18px", opacity: 0.5, flexShrink: 0 }}>
                ⏱
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#9CA3AF",
                    marginBottom: "5px",
                  }}
                >
                  Response Time
                </div>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "12px",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: "#9CA3AF",
                    margin: 0,
                  }}
                >
                  We aim to respond within 3–5 working days. For urgent matters,
                  please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
