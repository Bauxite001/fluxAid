// ─────────────────────────────────────────────
// FLUX AID INITIATIVE — CONSTANTS
// Single source of truth for all site content
// Update this file when client provides details
// ─────────────────────────────────────────────

// ── ORGANISATION ──────────────────────────────
export const ORG_NAME = "Flux Aid Initiative";
export const ORG_TAGLINE = "For the Vulnerable";
export const ORG_SLOGAN = "Igniting Change · For the Vulnerable";
export const FOUNDING_YEAR = "2020";
export const CEO_NAME = "Mr Andy Ndukwe Ibezim";

// ── CONTACT ───────────────────────────────────
export const CONTACT = {
  abuja: "No. 20 Lome Crescent, Wuse Zone 7, Abuja",
  lagos: "4/6 Mobolaji Anthony Street, Lagos Island",
  phone1: "+234-8003681499",
  phone2: "+234-8003683324",
  phone3: "+234-8179866007",
  email1: "fluxaidinitiative@gmail.com",
  email2: "mail@fluxaid.org",
  website: "www.fluxaid.org",
  social: "@fluxaidinitiative",
};

// ── MISSION ───────────────────────────────────
export const MISSION = `To discourage moral decadence, promote values and set standards in the minds of younger generations — to aspire for greater heights in life, to honour and celebrate leaders with profound and far-reaching achievements, while motivating positive values in promoting and encouraging men and women alike to greater heights in leadership.`;

// ── VISION ────────────────────────────────────
export const VISION = `To build a society across Nigeria and Africa where hard work, integrity, and selfless service are the hallmarks of leadership — where the vulnerable are empowered, the excellent are celebrated, and every generation is inspired to aspire to greater heights in service to humanity.`;

// ── KEY QUOTE ─────────────────────────────────
export const KEY_QUOTE = `"Hard work, integrity and transparency are the hallmark of a successful human achievement. Men and women who are selfless and dedicated to their responsibilities are never forgotten in the annals of history."`;

// ── CORE VALUES ───────────────────────────────
export const VALUES = [
  {
    num: "01",
    title: "Enduring Achievement",
    desc: "Achievement in one's field of endeavour that stands the test of time.",
  },
  {
    num: "02",
    title: "Selfless Service",
    desc: "Dedication to humanity above personal gain.",
  },
  {
    num: "03",
    title: "Integrity",
    desc: "Honesty, transparency and moral uprightness in all conduct.",
  },
  {
    num: "04",
    title: "Patriotism",
    desc: "Love of country and commitment to national development.",
  },
  {
    num: "05",
    title: "Good Conduct",
    desc: "Exemplary behaviour as a standard for others to follow.",
  },
];

// ── PROGRAMMES ────────────────────────────────
export const PROGRAMS = [
  {
    num: "01",
    icon: "⚖️",
    title: "Advocacy & Human Rights",
    desc: "Championing human rights, women's rights, child rights and political freedoms across Nigeria and Africa.",
    stat: "Impacted many lives",
  },
  {
    num: "02",
    icon: "🤝",
    title: "Empowerment & Economic Development",
    desc: "Financial literacy, skills training, and economic empowerment for vulnerable communities — especially women and youth.",
    stat: "Impacted many lives",
  },
  {
    num: "03",
    icon: "📢",
    title: "Public Awareness & Change",
    desc: "Mobilising communities, encouraging younger generations to aspire for greatness, and promoting transparency in governance.",
    stat: "Impacted many lives",
  },
];

// ── IMPACT BAR ────────────────────────────────
export const IMPACT_STATS = [
  { value: "Many", label: "Lives Impacted" },
  { value: "Active", label: "Projects Running" },
  { value: "Several", label: "Countries Reached" },
];

// ── DONATION TIERS ────────────────────────────
// Update amounts when client confirms
export const DONATION_TIERS = [
  {
    name: "Seedling",
    amount: null, // client to set
    currency: "₦",
    impact: "Funds one school meal for a child for a full week.",
  },
  {
    name: "Builder",
    amount: null,
    currency: "₦",
    impact: "Covers a clinic visit and medication for one patient.",
  },
  {
    name: "Champion",
    amount: null,
    currency: "₦",
    impact: "Sponsors one month of skills training for a youth.",
  },
  {
    name: "Pillar",
    amount: null,
    currency: "$",
    impact: "Fully equips a classroom with learning materials for a term.",
  },
];

// ── CEO BIO ───────────────────────────────────
export const CEO_BIO_SHORT = `${CEO_NAME} is the founder and Chief Executive of Flux Aid Initiative, a non-governmental organisation dedicated to advocacy, empowerment, and the upliftment of vulnerable communities across Nigeria and Africa. Driven by an unshakeable belief that integrity and selfless service are the hallmarks of true leadership, ${CEO_NAME} established Flux Aid to bridge the gap between excellence and recognition — and between aspiration and opportunity for those society has left behind.`;

// ── DANGA AWARD ───────────────────────────────
export const DANGA = {
  fullName: "Distinguished Ambassador of Change National Gold Award",
  shortName: "DANGA",
  desc: `The Distinguished Ambassador of Change National Gold Award (DANGA) is a private sector national award project dedicated to men and women of outstanding qualities whose contribution to national development is viable. It identifies and recognises role models worthy of emulation, celebrates greatness achieved by leaders, and honours Nigerians who took honesty and integrity to greater heights.`,
};

// ── NAV LINKS ─────────────────────────────────
export const NAV_LINKS = [
  { label: "Programs", href: "/programs" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Award", href: "/award" },
];

// ── FOOTER LINKS ──────────────────────────────
export const FOOTER_LINKS = {
  "Who We Are": [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Annual Reports", href: "/reports" },
    { label: "Press Kit", href: "/press" },
    { label: "DANGA Award", href: "/award" },
  ],
  "Get Involved": [
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Partner With Us", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "DANGA Award", href: "/award" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

// ── COLOURS (JS reference — mirrors index.css) ─
export const COLOURS = {
  black: "#080808",
  ink: "#0F0F0F",
  carbon: "#161616",
  charcoal: "#1E1E1E",
  steel: "#2A2A2A",
  silver: "#9A9A9A",
  fog: "#C8C8C8",
  white: "#F5F5F5",
  pure: "#FFFFFF",
  accent: "#E8E0D0",
  amber: "#C8A050",
};
