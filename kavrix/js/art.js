/* Minimalist line-art silhouettes used as product imagery placeholders.
   Pure inline SVG so the whole site works with zero external image assets. */
const PRODUCT_ART = {
  hoodie: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
    <path d="M70 40c0-16 13-28 30-28s30 12 30 28"/>
    <path d="M50 58 20 78l14 26 16-10v106h100V94l16 10 14-26-30-20"/>
    <path d="M70 40c-11 6-18 16-18 30v20M130 40c11 6 18 16 18 30v20"/>
    <path d="M82 60c4 8 12 13 18 13s14-5 18-13"/>
    <path d="M75 130h50"/>
  </svg>`,
  tee: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
    <path d="M70 36 30 56l10 34 24-10v112h72V80l24 10 10-34-40-20"/>
    <path d="M70 36c6 14 17 22 30 22s24-8 30-22"/>
  </svg>`,
  jacket: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
    <path d="M78 34H62L28 58l14 30 20-12v116h76V76l20 12 14-30-34-24h-16"/>
    <path d="M78 34c2 12 10 20 22 20s20-8 22-20"/>
    <path d="M100 54v138M62 96h14M124 96h14"/>
  </svg>`,
  crewneck: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
    <path d="M66 38 26 60l12 30 22-12v114h80V78l22 12 12-30-40-22"/>
    <ellipse cx="100" cy="42" rx="26" ry="12"/>
  </svg>`,
  track: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
    <path d="M78 34H62L28 58l14 30 20-12v116h76V76l20 12 14-30-34-24h-16"/>
    <path d="M78 34c2 12 10 20 22 20s20-8 22-20"/>
    <path d="M40 82l10 110M160 82l-10 110" stroke-dasharray="1 10"/>
  </svg>`,
  pants: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
    <path d="M62 30h76l6 40-8 116h-30l-6-96-6 96H64l-8-116z"/>
    <path d="M62 30 56 62M138 30l6 32"/>
    <rect x="66" y="96" width="18" height="18"/>
    <rect x="116" y="96" width="18" height="18"/>
  </svg>`,
  cap: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
    <path d="M40 120a60 46 0 0 1 120 0"/>
    <path d="M40 120c-16 4-30 10-30 18 0 4 26 8 40 8"/>
    <path d="M160 120c16 4 30 10 30 18 0 4-26 8-40 8"/>
    <path d="M100 60v14M70 66l6 12M130 66l-6 12"/>
  </svg>`,
  bag: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">
    <rect x="42" y="70" width="116" height="120" rx="4"/>
    <path d="M74 70V50a26 26 0 0 1 52 0v20"/>
    <path d="M42 100h116"/>
  </svg>`,
}

function getProductArt(category) {
  return PRODUCT_ART[category] || PRODUCT_ART.tee
}
