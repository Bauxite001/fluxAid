// ─────────────────────────────────────────────
// Chip.jsx
// Small tag / pill / category label
// Used on blog posts, programme cards, daily updates
// ─────────────────────────────────────────────

const Chip = ({ label, className = "" }) => {
  return (
    <span
      className={`
        inline-block
        font-condensed font-semibold uppercase
        text-[9px] tracking-[2px] text-flux-silver
        border border-flux-steel
        px-3 py-[3px] rounded-sm
        ${className}
      `}
    >
      {label}
    </span>
  );
};

export default Chip;
