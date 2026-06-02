// Quote.jsx — small style fix, no database needed

import { KEY_QUOTE } from "../constants";

function Quote() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "18px clamp(20px, 5vw, 80px)",
        background: "#0F1E35",
        borderTop: "1px solid rgba(47,138,201,0.15)",
        borderBottom: "1px solid rgba(47,138,201,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "180px",
          height: "180px",
          background:
            "radial-gradient(circle, rgba(108,96,158,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Blue line */}
      <span
        style={{
          width: "40px",
          height: "1px",
          background: "#2F8AC9",
          flexShrink: 0,
        }}
      />

      {/* Quote text */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "clamp(14px, 1.8vw, 16px)",
          lineHeight: 1.6,
          color: "rgba(200,214,232,0.75)",
          flex: 1,
          margin: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        {KEY_QUOTE}
      </p>

      {/* Badge */}
      <span
        style={{
          display: "none",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "9px",
          letterSpacing: "2.5px",
          textTransform: "uppercase",
          color: "#2F8AC9",
          border: "1px solid rgba(47,138,201,0.3)",
          padding: "6px 14px",
          borderRadius: "3px",
          flexShrink: 0,
          whiteSpace: "nowrap",
          position: "relative",
          zIndex: 1,
        }}
        className="lg:!inline-block"
      >
        Flux Aid Initiative
      </span>

      <style>{`
        @media (min-width: 1024px) {
          .lg\\:!inline-block { display: inline-block !important; }
        }
      `}</style>
    </div>
  );
}

export default Quote;
