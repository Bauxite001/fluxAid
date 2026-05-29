// pages/admin/AdminLogin.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ── CREDENTIALS — change these or move to env vars ──
const ADMIN_EMAIL = "admin@fluxaid.org";
const ADMIN_PASSWORD = "fluxaid2026";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (form.email === ADMIN_EMAIL && form.password === ADMIN_PASSWORD) {
        sessionStorage.setItem("fluxaid_admin", "true");
        navigate("/admin/dashboard");
      } else {
        setError("Incorrect email or password. Please try again.");
        setLoading(false);
      }
    }, 700);
  };

  const inp = {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(255,255,255,0.06)",
    border: "1.5px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    outline: "none",
    fontFamily: "'Barlow', sans-serif",
    fontSize: "14px",
    color: "#F0F6FF",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A1628",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
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
          top: "-120px",
          left: "-120px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(108,96,158,0.2) 0%, transparent 65%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "440px",
          height: "440px",
          background:
            "radial-gradient(circle, rgba(47,138,201,0.15) 0%, transparent 65%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "#0F1E35",
          borderRadius: "24px",
          padding: "clamp(32px,5vw,52px)",
          position: "relative",
          overflow: "hidden",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
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
            borderRadius: "24px 24px 0 0",
          }}
        />

        {/* Inner glow */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "220px",
            height: "220px",
            background:
              "radial-gradient(circle, rgba(47,138,201,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        {/* Logo area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "36px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #2F8AC9, #6C609E)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              marginBottom: "16px",
              boxShadow: "0 8px 24px rgba(47,138,201,0.3)",
            }}
          >
            🌍
          </div>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#F0F6FF",
              marginBottom: "4px",
            }}
          >
            Flux Aid Initiative
          </span>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(200,214,232,0.4)",
            }}
          >
            Admin Portal
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(24px,4vw,32px)",
            fontWeight: 700,
            color: "#F0F6FF",
            lineHeight: 1.1,
            marginBottom: "6px",
            position: "relative",
            zIndex: 1,
          }}
        >
          Welcome back
        </h1>
        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            color: "rgba(200,214,232,0.45)",
            marginBottom: "32px",
            position: "relative",
            zIndex: 1,
          }}
        >
          Sign in to manage your daily activity posts.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Email */}
          <div>
            <label
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "rgba(200,214,232,0.4)",
                display: "block",
                marginBottom: "7px",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="admin@fluxaid.org"
              style={{ ...inp, color: "#F0F6FF" }}
              onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
          </div>

          {/* Password */}
          <div>
            <label
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "rgba(200,214,232,0.4)",
                display: "block",
                marginBottom: "7px",
              }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPw ? "text" : "password"}
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Enter your password"
                style={{ ...inp, color: "#F0F6FF", paddingRight: "50px" }}
                onFocus={(e) => (e.target.style.borderColor = "#2F8AC9")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                }
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "rgba(200,214,232,0.4)",
                }}
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div
              style={{
                background: "rgba(231,76,60,0.12)",
                border: "1px solid rgba(231,76,60,0.3)",
                borderRadius: "8px",
                padding: "12px 16px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#FF6B6B",
                  margin: 0,
                }}
              >
                {error}
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "15px",
              background: loading ? "rgba(47,138,201,0.5)" : "#2F8AC9",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              cursor: loading ? "not-allowed" : "pointer",
              marginTop: "6px",
              transition: "background 0.2s",
            }}
          >
            {loading ? "Signing in..." : "Sign In →"}
          </button>
        </form>

        <p
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "11px",
            fontWeight: 300,
            color: "rgba(200,214,232,0.25)",
            textAlign: "center",
            marginTop: "24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          This portal is restricted to authorised Flux Aid staff only.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
