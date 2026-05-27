// ─────────────────────────────────────────────
// SectionHeader.jsx
// Reusable section eyebrow + title block
// Used at the top of every homepage section
// ─────────────────────────────────────────────

const SectionHeader = ({
  eyebrow, // small uppercase label e.g. "What We Do"
  title, // main heading — supports <em> for italic accent
  titleHtml, // pass raw HTML string if you need <em> inside title
  date, // optional — shown on Daily Activity section
  seeAllLabel, // optional — "See All" link text
  seeAllHref, // optional — "See All" link href
  className = "",
}) => {
  return (
    <div className={`mb-12 ${className}`}>
      {/* ── EYEBROW ROW ─────────────────────── */}
      <div className="flex items-center gap-3 mb-3">
        {/* Dot */}
        <span className="w-[5px] h-[5px] rounded-full bg-flux-silver flex-shrink-0" />

        {/* Label */}
        <span
          className="
          font-condensed font-semibold uppercase
          text-[10px] tracking-[3.5px] text-flux-silver
        "
        >
          {eyebrow}
        </span>

        {/* Rule line — fills space */}
        <span className="flex-1 h-px bg-white/[0.07]" />

        {/* Optional date */}
        {date && (
          <span
            className="
            font-condensed font-normal uppercase
            text-[10px] tracking-[2px] text-flux-silver opacity-60
          "
          >
            {date}
          </span>
        )}
      </div>

      {/* ── TITLE ROW ───────────────────────── */}
      <div className="flex items-end justify-between">
        {/* Title — italic <em> renders in accent colour */}
        {titleHtml ? (
          <h2
            className="
              font-display font-bold text-flux-white
              text-[34px] md:text-[54px] leading-[1.05] tracking-[-0.5px]
              [&_em]:not-italic [&_em]:font-normal [&_em]:text-flux-accent [&_em]:italic
            "
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />
        ) : (
          <h2
            className="
            font-display font-bold text-flux-white
            text-[34px] md:text-[54px] leading-[1.05] tracking-[-0.5px]
          "
          >
            {title}
          </h2>
        )}

        {/* Optional See All link */}
        {seeAllLabel && seeAllHref && (
          <a
            href={seeAllHref}
            className="
              font-condensed font-semibold uppercase
              text-[10px] tracking-[2.5px] text-flux-silver
              border-b border-flux-steel pb-[2px]
              hover:text-flux-fog hover:border-flux-silver
              transition-colors duration-200
              whitespace-nowrap ml-6 mb-[6px]
            "
          >
            {seeAllLabel}
          </a>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
