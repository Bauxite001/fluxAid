// Hero.jsx

import Button from "./Button";

const STATS = [
  { value: "Many", label: "Lives Impacted", color: "text-[#2F8AC9]" },
  { value: "Active", label: "Projects Running", color: "text-[#6C609E]" },
  { value: "Several", label: "Countries Reached", color: "text-[#F0F6FF]" },
  { value: "Growing", label: "Volunteer Network", color: "text-[#2F8AC9]" },
];

const MARQUEE_ITEMS = [
  "Reaching the Unreached",
  "Restoring Dignity",
  "Empowering Humanity",
  "Change Unstoppable",
  "Selfless Service",
  "Building Africa",
];

const Hero = () => {
  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section className="relative w-full min-h-[88vh] bg-[#0F1E35] overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_480px] items-center">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(47,138,201,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(47,138,201,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow blobs */}
        <div
          className="absolute top-[-120px] left-[-80px] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(108,96,158,0.25) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-100px] right-[10%] lg:right-[300px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(47,138,201,0.18) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute top-1/2 right-[100px] -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none hidden lg:block"
          style={{
            background:
              "radial-gradient(circle, rgba(108,96,158,0.12) 0%, transparent 65%)",
          }}
        />

        {/* Africa SVG watermark */}
        <svg
          className="absolute bottom-10 right-4 lg:top-1/2 lg:right-[60px] lg:-translate-y-1/2 w-[200px] sm:w-[280px] lg:w-[380px] opacity-[0.03] lg:opacity-[0.05] pointer-events-none"
          viewBox="0 0 400 500"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M200 15 C240 15 290 35 330 80 C370 125 380 185 365 240 C350 295 320 335 300 375 C280 415 265 455 240 480 C220 498 200 498 180 490 C160 482 140 460 120 430 C100 400 85 365 65 325 C45 285 20 240 18 190 C16 140 35 90 75 55 C115 20 160 15 200 15Z" />
        </svg>

        {/* ── LEFT — content ─────────────────── */}
        <div className="relative z-10 px-6 sm:px-10 lg:px-20 py-16 sm:py-24 lg:pb-32">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 sm:mb-9">
            <span className="w-2 h-2 rounded-full bg-[#2F8AC9]" />
            <span className="font-condensed font-semibold uppercase text-[10px] sm:text-[11px] tracking-[3px] sm:tracking-[4px] text-[#2F8AC9]">
              On the Ground · Every Day · Africa
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-display font-bold leading-[0.9] lg:leading-[0.88] tracking-[-1.5px] sm:tracking-[-3px] mb-6 sm:mb-8"
            style={{ fontSize: "clamp(46px, 10vw, 110px)" }}
          >
            <span className="block text-[#F0F6FF]">We</span>
            <span className="block italic font-bold text-[#2F8AC9]">
              ignite
            </span>
            <span className="block italic font-bold text-[#6C609E]">
              change
            </span>
            <span className="block text-[#F0F6FF]">across Africa</span>
          </h1>

          {/* Sub */}
          <p className="font-body font-light text-[15px] sm:text-[16px] leading-[1.75] sm:leading-[1.85] text-[rgba(200,214,232,0.55)] max-w-[480px] mb-8 sm:mb-11">
            Empowering communities, amplifying voices, and building futures that
            last — through daily action on the ground across the continent.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:flex-wrap">
            <button className="bg-[#2F8AC9] text-white font-condensed font-bold uppercase text-[11px] tracking-[2.5px] px-8 py-4 rounded-[4px] border-0 text-center">
              Our Programs
            </button>
            <button className="bg-[#6C609E] text-white font-condensed font-bold uppercase text-[11px] tracking-[2.5px] px-7 py-4 rounded-[4px] border-0 text-center">
              Our Story
            </button>
            <button className="bg-transparent text-[rgba(200,214,232,0.7)] font-condensed font-semibold uppercase text-[11px] tracking-[2.5px] px-6 py-[15px] rounded-[4px] border border-[rgba(200,214,232,0.2)] text-center">
              Donate Now
            </button>
          </div>
        </div>

        {/* ── RIGHT — stats ──────────────────── */}
        <div className="relative z-10 grid grid-cols-2 gap-px bg-white/[0.04] lg:bg-transparent lg:flex flex-col justify-center h-full px-6 sm:px-10 lg:px-20 py-12 lg:py-24 lg:pb-32 border-t lg:border-t-0 lg:border-l border-white/[0.06]">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="p-4 sm:p-6 lg:p-0 lg:py-9 bg-[#0F1E35] lg:bg-transparent lg:border-b lg:border-white/[0.06] lg:first:border-t lg:first:border-white/[0.06]"
            >
              <div
                className={`font-display font-bold leading-none mb-2 tracking-[-1px] sm:tracking-[-2px] ${stat.color}`}
                style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
              >
                {stat.value}
              </div>
              <div className="font-condensed font-semibold uppercase text-[10px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] text-[rgba(200,214,232,0.55)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── QUOTE STRIP — pinned to bottom ─── */}
      </section>

      {/* ── MARQUEE STRIP ────────────────────── */}
      <div className="bg-[#6C609E] py-[14px] overflow-hidden whitespace-nowrap">
        <div
          className="inline-flex gap-0"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-8 font-condensed font-bold uppercase text-[11px] tracking-[3px] text-white/80 px-8"
            >
              {item}
              <span className="w-[5px] h-[5px] rounded-full bg-white/30 flex-shrink-0" />
            </span>
          ))}
        </div>

        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </>
  );
};

export default Hero;
