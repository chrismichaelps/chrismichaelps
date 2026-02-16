export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/chrismichaelps",
  LINKEDIN: "https://www.linkedin.com/in/chrisperezsantiago/",
  EMAIL: "mailto:chrisperezsantiago1@gmail.com",
} as const;

export const DOCUMENTS = {
  RESUME: "/Chris_Resume___2026_Jan.pdf",
} as const;

export const PROJECT_LINKS = {
  EFFUSE: "https://github.com/chrismichaelps/effuse",
  EFFUSE_DOCS: "https://effuse-doc.vercel.app",
  FASTA_TO_FST: "https://github.com/chrismichaelps/fasta-to-fst",
  TAGIX: "https://github.com/chrismichaelps/tagix",
  TAGIX_DOCS: "https://tagix-docs.vercel.app",
} as const;

export const ICON_SIZES = {
  SMALL: "18px",
  MEDIUM: "36px",
  LARGE: "40px",
} as const;

export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
} as const;

export const ANIMATION_DURATIONS = {
  FAST: "0.2s",
  NORMAL: "0.3s",
  SLOW: "0.5s",
} as const;

export const TIMING_FUNCTIONS = {
  EASE: "ease",
  EASE_OUT: "ease-out",
  CUBIC: "cubic-bezier(0.19, 1, 0.22, 1)",
} as const;

export const STORAGE_KEYS = {
  THEME: "theme",
} as const;

export const ANIMATION_SELECTORS = {
  HERO: '[data-animate="hero"]',
  SECTION: '[data-animate="section"]',
  LIST: '[data-animate="list"]',
  ITEM: '[data-animate="item"]',
} as const;

export const ANIMATION_DEFAULTS = {
  DELAY: 0,
  STAGGER: 0.1,
  DURATION: 1,
  HERO_DELAY: 0.2,
  SECTION_DELAY_BASE: 0.4,
  SECTION_DELAY_STEP: 0.15,
  LIST_DELAY_BASE: 0.5,
  LIST_DELAY_STEP: 0.2,
} as const;
