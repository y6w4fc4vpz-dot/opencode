/* Minimalist line-art silhouettes used as product imagery placeholders.
   Pure inline SVG so the whole site works with zero external image assets.
   Each mark is run through the shared #roughen filter (defined once per
   page) to read as a hand-drawn tech-pack sketch rather than a clean icon. */
const PRODUCT_ART = {
  hoodie: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#roughen)">
    <path d="M70 40c0-16 13-28 30-28s30 12 30 28"/>
    <path d="M50 58 20 78l14 26 16-10v106h100V94l16 10 14-26-30-20"/>
    <path d="M70 40c-11 6-18 16-18 30v20M130 40c11 6 18 16 18 30v20"/>
    <path d="M82 60c4 8 12 13 18 13s14-5 18-13"/>
    <path d="M75 130h50"/>
  </svg>`,
  tee: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#roughen)">
    <path d="M70 36 30 56l10 34 24-10v112h72V80l24 10 10-34-40-20"/>
    <path d="M70 36c6 14 17 22 30 22s24-8 30-22"/>
  </svg>`,
  jacket: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#roughen)">
    <path d="M78 34H62L28 58l14 30 20-12v116h76V76l20 12 14-30-34-24h-16"/>
    <path d="M78 34c2 12 10 20 22 20s20-8 22-20"/>
    <path d="M100 54v138M62 96h14M124 96h14"/>
  </svg>`,
  moto: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#roughen)">
    <path d="M76 32H60L26 56l14 30 20-12v118h80V74l20 12 14-30-34-24H86"/>
    <path d="M76 32c2 12 10 20 24 20s22-8 24-20"/>
    <path d="M100 58v134"/>
    <path d="M86 68l-10 40 10 60M114 68l10 40-10 60" stroke-width="1.6"/>
    <circle cx="70" cy="86" r="3" fill="currentColor" stroke="none"/>
    <circle cx="70" cy="118" r="3" fill="currentColor" stroke="none"/>
    <circle cx="130" cy="86" r="3" fill="currentColor" stroke="none"/>
    <circle cx="130" cy="118" r="3" fill="currentColor" stroke="none"/>
    <path d="M60 150h20M120 150h20" stroke-width="1.6"/>
  </svg>`,
  crewneck: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#roughen)">
    <path d="M66 38 26 60l12 30 22-12v114h80V78l22 12 12-30-40-22"/>
    <ellipse cx="100" cy="42" rx="26" ry="12"/>
  </svg>`,
  track: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#roughen)">
    <path d="M78 34H62L28 58l14 30 20-12v116h76V76l20 12 14-30-34-24h-16"/>
    <path d="M78 34c2 12 10 20 22 20s20-8 22-20"/>
    <path d="M40 82l10 110M160 82l-10 110" stroke-dasharray="1 10"/>
  </svg>`,
  pants: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#roughen)">
    <path d="M62 30h76l6 40-8 116h-30l-6-96-6 96H64l-8-116z"/>
    <path d="M62 30 56 62M138 30l6 32"/>
    <rect x="66" y="96" width="18" height="18"/>
    <rect x="116" y="96" width="18" height="18"/>
  </svg>`,
  flare: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#roughen)">
    <path d="M64 28h72l4 36-4 40 18 78h-32l-14-90-14 90H62l18-78-4-40z"/>
    <path d="M64 28 58 64M136 28l6 36"/>
    <path d="M70 100l60 0" stroke-width="1.4" stroke-dasharray="2 6"/>
    <path d="M86 60h28" stroke-width="1.6"/>
  </svg>`,
  jorts: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#roughen)">
    <path d="M60 30h80l6 42-10 64h-28l-8-52-8 52H64l-10-64z"/>
    <path d="M60 30 54 62M140 30l6 32"/>
    <rect x="64" y="92" width="20" height="20"/>
    <rect x="116" y="92" width="20" height="20"/>
    <path d="M70 136l4 12M130 136l-4 12" stroke-width="1.6"/>
  </svg>`,
  cap: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#roughen)">
    <path d="M40 120a60 46 0 0 1 120 0"/>
    <path d="M40 120c-16 4-30 10-30 18 0 4 26 8 40 8"/>
    <path d="M160 120c16 4 30 10 30 18 0 4-26 8-40 8"/>
    <path d="M100 60v14M70 66l6 12M130 66l-6 12"/>
  </svg>`,
  bag: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#roughen)">
    <rect x="42" y="70" width="116" height="120" rx="4"/>
    <path d="M74 70V50a26 26 0 0 1 52 0v20"/>
    <path d="M42 100h116"/>
  </svg>`,
  belt: `<svg viewBox="0 0 200 220" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#roughen)">
    <path d="M20 110c0-24 36-40 80-40s80 16 80 40-36 40-80 40-80-16-80-40z"/>
    <rect x="76" y="92" width="48" height="36" rx="3"/>
    <circle cx="100" cy="110" r="7"/>
    <path d="M30 104h34M136 104h34" stroke-width="1.6"/>
  </svg>`,
}

function getProductArt(category) {
  return PRODUCT_ART[category] || PRODUCT_ART.tee
}

/* The Kavrix cross mark — used in the nav, footer and as a hero watermark. */
function getBrandMark() {
  return `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
    <path d="M50 50 50 16M50 50 50 84M50 50 16 50M50 50 84 50"/>
    <path d="M50 6 58 16 50 26 42 16Z"/>
    <path d="M50 94 58 84 50 74 42 84Z"/>
    <path d="M6 50 16 42 26 50 16 58Z"/>
    <path d="M94 50 84 42 74 50 84 58Z"/>
  </svg>`
}
