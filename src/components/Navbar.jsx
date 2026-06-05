// Navbar.jsx

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ORG_NAME, ORG_TAGLINE, NAV_LINKS } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href) => location.pathname === href;

  return (
    <>
      {/* ── NAV BAR ──────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(16px, 4vw, 40px)",
          background: scrolled
            ? "rgba(47,138,201,0.98)"
            : "rgba(47,138,201,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.12)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
          boxShadow: scrolled ? "0 4px 24px rgba(15,30,53,0.25)" : "none",
          boxSizing: "border-box",
          // Critical — prevent nav from being wider than viewport
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        {/* ── LOGO ─────────────────────────── */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            flexShrink: 0,
            minWidth: 0,
          }}
        >
          <img
            src="/flux_logo.jpeg"
            alt="Flux Aid Logo"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "8px",
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.2)",
              flexShrink: 0,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              minWidth: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#FFFFFF",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              {ORG_NAME}
            </span>
            <span
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "8px",
                fontWeight: 400,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              {ORG_TAGLINE}
            </span>
          </div>
        </Link>

        {/* ── DESKTOP LINKS ────────────────── */}
        {isDesktop && (
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: isActive(link.href)
                    ? "#FFFFFF"
                    : "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  borderBottom: isActive(link.href)
                    ? "1px solid rgba(255,255,255,0.7)"
                    : "1px solid transparent",
                  paddingBottom: "2px",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* ── DESKTOP CTAs ─────────────────── */}
        {isDesktop && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexShrink: 0,
            }}
          >
            <Link
              to="/volunteer"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.35)",
                paddingBottom: "1px",
                whiteSpace: "nowrap",
              }}
            >
              Volunteer
            </Link>
            <Link
              to="/donate"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#2F8AC9",
                background: "#FFFFFF",
                padding: "10px 22px",
                borderRadius: "4px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              }}
            >
              Donate Now
            </Link>
          </div>
        )}

        {/* ── MOBILE RIGHT ─────────────────── */}
        {!isDesktop && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            <Link
              to="/donate"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#2F8AC9",
                background: "#FFFFFF",
                padding: "8px 16px",
                borderRadius: "4px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Donate
            </Link>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "5px",
                padding: "8px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                flexShrink: 0,
                width: "36px",
                height: "36px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "#FFFFFF",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transformOrigin: "center",
                  transform: menuOpen
                    ? "rotate(45deg) translateY(6.5px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "#FFFFFF",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: menuOpen ? "20px" : "13px",
                  height: "1.5px",
                  background: "#FFFFFF",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transformOrigin: "center",
                  transform: menuOpen
                    ? "rotate(-45deg) translateY(-6.5px)"
                    : "none",
                }}
              />
            </button>
          </div>
        )}
      </nav>

      {/* ── MOBILE MENU OVERLAY ──────────────── */}
      {!isDesktop && (
        <div
          style={{
            position: "fixed",
            // Explicitly set all four sides
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // Never wider than the screen
            width: "100%",
            maxWidth: "100vw",
            zIndex: 40,
            background: "#0F1E35",
            display: "flex",
            flexDirection: "column",
            overflowX: "hidden",
            overflowY: "auto",
            boxSizing: "border-box",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            pointerEvents: menuOpen ? "auto" : "none",
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(47,138,201,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "80px",
              right: "-60px",
              width: "280px",
              height: "280px",
              background:
                "radial-gradient(circle, rgba(108,96,158,0.18) 0%, transparent 65%)",
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "100px",
              left: "-60px",
              width: "240px",
              height: "240px",
              background:
                "radial-gradient(circle, rgba(47,138,201,0.12) 0%, transparent 65%)",
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Spacer for nav height */}
          <div style={{ height: "68px", flexShrink: 0 }} />

          {/* Menu content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: "32px 28px 0",
              position: "relative",
              zIndex: 1,
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            {/* Nav links */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(26px, 7vw, 40px)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.5px",
                    color: isActive(link.href) ? "#2F8AC9" : "#F0F6FF",
                    textDecoration: "none",
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                    transition: `color 0.2s, opacity 0.35s ${i * 50}ms ease, transform 0.35s ${i * 50}ms ease`,
                    boxSizing: "border-box",
                  }}
                >
                  <span>{link.label}</span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: isActive(link.href)
                        ? "#2F8AC9"
                        : "rgba(200,214,232,0.3)",
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 300,
                      flexShrink: 0,
                    }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "28px",
                paddingBottom: "32px",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.35s ${NAV_LINKS.length * 50 + 60}ms ease, transform 0.35s ${NAV_LINKS.length * 50 + 60}ms ease`,
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              <Link
                to="/donate"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#2F8AC9",
                  background: "#FFFFFF",
                  padding: "16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              >
                Donate Now
              </Link>
              <Link
                to="/volunteer"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.8)",
                  background: "transparent",
                  padding: "15px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              >
                Volunteer
              </Link>
            </div>
          </div>

          {/* Footer strip */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              padding: "14px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 1,
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "13px",
                fontStyle: "italic",
                color: "rgba(200,214,232,0.35)",
              }}
            >
              Change Unstoppable
            </span>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(200,214,232,0.2)",
              }}
            >
              fluxaid.org
            </span>
          </div>
        </div>
      )}

      {/* ── PAGE SPACER ──────────────────────── */}
      <div style={{ height: "68px" }} />
    </>
  );
};

export default Navbar;
