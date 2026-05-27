// Footer.jsx

import {
  ORG_NAME,
  ORG_TAGLINE,
  FOUNDING_YEAR,
  CONTACT,
  FOOTER_LINKS,
} from "../constants";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#2F8AC9",
        borderTop: "none",
      }}
    >
      {/* ── TOP WAVE DIVIDER ─────────────────── */}
      <div
        style={{
          background: "#F8F9FB",
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z"
            fill="#2F8AC9"
          />
        </svg>
      </div>

      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "56px 40px 0",
        }}
      >
        {/* ── MAIN GRID ──────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr 1fr 1fr",
            gap: "56px",
            paddingBottom: "52px",
            borderBottom: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {/* ── BRAND COL ──────────────────── */}
          <div>
            {/* Logo placeholder */}
            <img
              src="/flux_logo.jpeg"
              alt="Flux Aid Initiative"
              style={{
                width: "120px",
                height: "64px",
                background: "rgba(255,255,255,0.15)",
                border: "1.5px dashed rgba(255,255,255,0.4)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            />

            {/* Org name */}
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#FFFFFF",
                display: "block",
                marginBottom: "4px",
              }}
            >
              {ORG_NAME}
            </span>

            {/* Tagline */}
            <span
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                display: "block",
                marginBottom: "18px",
              }}
            >
              {ORG_TAGLINE}
            </span>

            {/* Tagline quote */}
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "15px",
                fontStyle: "italic",
                fontWeight: 400,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
                marginBottom: "22px",
              }}
            >
              "Change Unstoppable"
            </p>

            {/* Contact details */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <a
                href={`mailto:${CONTACT.email1}`}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {CONTACT.email1}
              </a>
              <a
                href={`tel:${CONTACT.phone1}`}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                }}
              >
                {CONTACT.phone1}
              </a>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {CONTACT.abuja}
              </p>
            </div>
          </div>

          {/* ── LINK COLUMNS ─────────────────── */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h5
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "3.5px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "22px",
                }}
              >
                {heading}
              </h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.75)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAR ─────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "24px 0 32px",
          }}
        >
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.5px",
              margin: 0,
            }}
          >
            © {FOUNDING_YEAR}–2026 {ORG_NAME} · All rights reserved · Privacy
            Policy
          </p>

          {/* Socials */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {[
              { label: "𝕏", href: "#" },
              { label: "in", href: "#" },
              { label: "IG", href: "#" },
              { label: "YT", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "6px",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  background: "rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
