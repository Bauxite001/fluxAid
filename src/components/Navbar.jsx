// ─────────────────────────────────────────────
// Navbar.jsx
// Sticky top navigation bar
// Desktop: full links + Volunteer + Donate
// Mobile: logo + Donate + hamburger menu
// ─────────────────────────────────────────────

import { useState, useEffect } from "react";
import { ORG_NAME, ORG_TAGLINE, NAV_LINKS } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  // ── Scroll detection — adds border on scroll ──
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Set active path ───────────────────────────
  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  // ── Lock body scroll when mobile menu is open ─
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── NAV BAR ──────────────────────────── */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          h-[68px]
          flex items-center justify-between
          transition-all duration-300
          ${isScrolled ? "bg-[#2F8AC9]/95 backdrop-blur-xl border-b border-white/[0.07]" : "bg-[#2F8AC9]/80 backdrop-blur-md"}
        `}
        style={{ paddingLeft: "8px", paddingRight: "8px" }}
      >
        {/* ── LOGO ─────────────────────────── */}
        <a
          href="/"
          className="flex flex-row items-center gap-[2px] no-underline"
        >
          <img src="/flux_logo.jpeg" alt="logo" className="w-10 h-10 rounded" />
          <div className="flex flex-col">
            <span
              className="
            font-condensed font-bold uppercase
            text-[15px] tracking-[4px] text-flux-white
            leading-none
          "
            >
              {ORG_NAME}
            </span>
            <span
              className="
            font-body font-normal
            text-[9px] tracking-[2.5px] uppercase text-flux-white
            leading-none
          "
            >
              {ORG_TAGLINE}
            </span>
          </div>
        </a>

        {/* ── DESKTOP NAV LINKS ────────────── */}
        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "white" }}
              className="
  font-condensed uppercase
  text-[12px] tracking-[1.5px]
  transition-colors duration-200 no-underline
  text-white hover:text-white/80"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── DESKTOP RIGHT CTAs ───────────── */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="/volunteer"
            className="
              font-condensed font-semibold uppercase
              text-[11px] tracking-[2px] text-white
              border-b border-flux-gray pb-[1px]
              hover:text-flux-silver hover:border-flux-silver
              transition-colors duration-200 no-underline
            "
            style={{ color: "white" }}
          >
            Volunteer
          </a>
          <Button
            href="/donate"
            variant="primary"
            style={{ padding: "8px 10px" }}
          >
            Donate Now
          </Button>
        </div>

        {/* ── MOBILE RIGHT ─────────────────── */}
        <div className="flex lg:hidden items-center gap-3">
          <Button
            href="/donate"
            variant="primary"
            className="text-[10px] px-8 py-4"
            style={{ padding: "8px 10px" }}
          >
            Donate
          </Button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] p-1 cursor-pointer bg-transparent border-0"
            aria-label="Toggle menu"
          >
            <span
              className={`
              block w-[22px] h-[1.5px] bg-white
              transition-all duration-300 origin-center
              ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}
            `}
            />
            <span
              className={`
              block h-[1.5px] bg-white
              transition-all duration-300
              ${menuOpen ? "opacity-0 w-[22px]" : "w-[22px]"}
            `}
            />
            <span
              className={`
              block h-[1.5px] bg-flux-white
              transition-all duration-300 origin-center
              ${menuOpen ? "-rotate-45 -translate-y-[6.5px] w-[22px]" : "w-[14px]"}
            `}
            />
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU OVERLAY ──────────────── */}
      <div
        className={`
          fixed inset-0 z-40 bg-flux-black
          flex flex-col
          transition-all duration-300 ease-in-out
          lg:hidden
          ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Top spacer for nav height */}
        <div className="h-[68px] flex-shrink-0" />

        {/* Menu content */}
        <div className="flex-1 flex flex-col justify-between px-6 py-10 overflow-y-auto">
          {/* Links */}
          <div className="flex flex-col gap-0">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  flex items-center justify-between
                  font-display font-bold
                  text-[32px] leading-[1.1] tracking-[-0.5px]
                  text-flux-white no-underline
                  py-5 border-b border-white/[0.07]
                  hover:text-flux-accent
                  transition-colors duration-200
                  ${
                    menuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }
                `}
                style={{
                  transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
                  transition: `color 200ms, opacity 300ms ${i * 50}ms, transform 300ms ${i * 50}ms`,
                }}
              >
                {link.label}
                <span className="text-flux-silver font-normal text-[20px]">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div className="flex flex-col gap-3 pt-8">
            <Button
              href="/donate"
              variant="primary"
              className="w-full justify-center py-4"
            >
              Donate Now
            </Button>
            <Button
              href="/volunteer"
              variant="ghost"
              className="w-full justify-center py-4"
            >
              Volunteer
            </Button>
          </div>
        </div>
      </div>

      {/* ── SPACER — pushes page content below fixed nav ── */}
      <div className="h-[68px]" />
    </>
  );
};

export default Navbar;
