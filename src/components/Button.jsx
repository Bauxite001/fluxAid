// ─────────────────────────────────────────────
// Button.jsx
// Reusable button component
// Variants: primary | ghost | text
// ─────────────────────────────────────────────

const Button = ({
  children,
  variant = "primary",
  onClick,
  href,
  style,
  className = "",
  type = "button",
}) => {
  const base = `
    font-condensed font-bold uppercase tracking-widest text-[11px]
    transition-all duration-200 cursor-pointer inline-flex items-center gap-2
    border-0 outline-none
  `;

  const variants = {
    // White fill — main CTA
    primary: `
      bg-flux-white text-flux-black
      px-12 py-8 rounded
      hover:bg-flux-fog
      active:scale-[0.98]
    `,
    // Transparent with border
    ghost: `
      bg-transparent text-flux-silver
      px-7 py-[13px] rounded-sm
      border border-flux-steel
      hover:border-flux-silver hover:text-flux-fog
      active:scale-[0.98]
    `,
    // Text only — no background or border
    text: `
      bg-transparent text-flux-silver
      px-0 py-0
      border-b border-flux-steel pb-[2px]
      hover:text-flux-fog hover:border-flux-silver
    `,
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  // Render as anchor if href provided
  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
};

export default Button;
