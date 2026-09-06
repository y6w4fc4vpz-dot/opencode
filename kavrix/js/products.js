/* Product catalog — static demo data for the Kavrix storefront. */
const PRODUCTS = [
  {
    id: "void-hoodie",
    name: "Void Hoodie",
    category: "hoodie",
    categoryLabel: "Hoodies",
    price: 128,
    compareAt: 158,
    colors: ["Jet Black", "Bone White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tag: "Best Seller",
    description:
      "A heavyweight 480gsm fleece hoodie built with a dropped shoulder and oversized silhouette. Garment-dyed for a soft, worn-in hand feel from day one.",
    details: [
      "480gsm brushed-back cotton fleece",
      "Dropped shoulder, boxy fit",
      "Ribbed cuffs and hem",
      "Tonal Kavrix embroidery on chest",
    ],
    callouts: [
      { text: "Dropped Shoulder Seam", top: 18, side: "left" },
      { text: "Tonal Kavrix Embroidery", top: 32, side: "right" },
      { text: "Garment-Dyed Fleece", top: 55, side: "left" },
      { text: "Ribbed Cuff & Hem", top: 78, side: "right" },
    ],
  },
  {
    id: "static-tee",
    name: "Static Tee",
    category: "tee",
    categoryLabel: "Tees",
    price: 58,
    colors: ["Jet Black", "Bone White"],
    sizes: ["S", "M", "L", "XL"],
    tag: "New",
    description:
      "A boxy-fit tee cut from heavyweight 220gsm cotton with a hand-cracked graphic across the back panel.",
    details: [
      "220gsm combed cotton jersey",
      "Boxy, relaxed fit",
      "Back-panel graphic print",
      "Double-stitched hem",
    ],
  },
  {
    id: "eclipse-bomber",
    name: "Eclipse Bomber",
    category: "jacket",
    categoryLabel: "Outerwear",
    price: 248,
    colors: ["Jet Black"],
    sizes: ["S", "M", "L", "XL"],
    tag: "Limited",
    description:
      "A technical bomber with a matte water-resistant shell and quilted lining, cut for a structured, elevated silhouette.",
    details: [
      "Water-resistant matte shell",
      "Quilted interior lining",
      "Ribbed collar, cuffs, and hem",
      "Hidden zip pockets",
    ],
    callouts: [
      { text: "Matte Water-Resistant Shell", top: 16, side: "left" },
      { text: "Quilted Interior Lining", top: 40, side: "right" },
      { text: "Hidden Zip Pockets", top: 62, side: "left" },
      { text: "Ribbed Collar & Hem", top: 84, side: "right" },
    ],
  },
  {
    id: "legacy-moto-jacket",
    name: "Legacy Moto Jacket",
    category: "moto",
    categoryLabel: "Outerwear",
    price: 328,
    compareAt: 398,
    colors: ["Jet Black"],
    sizes: ["S", "M", "L", "XL"],
    tag: "Icon",
    description:
      "The house icon. Heavyweight distressed leather with hand-finished raw-cut panel appliqué and a back-panel Kavrix crack graphic, closed with custom metal clasp hardware.",
    details: [
      "Heavyweight distressed genuine leather",
      "Custom metal clasp closures",
      "Raw-cut layered panel appliqué",
      "Embossed Kavrix logo, back-panel crack graphic",
      "Ribbed structured hem and cuffs",
    ],
    callouts: [
      { text: "Heavyweight Distressed Leather", top: 12, side: "left" },
      { text: "Metal Clasp Closure", top: 30, side: "right" },
      { text: "Raw Cut Layered Appliqué", top: 50, side: "left" },
      { text: "Embossed Kavrix Logo", top: 68, side: "right" },
      { text: "Ribbed Structured Hem", top: 88, side: "left" },
    ],
  },
  {
    id: "grid-crewneck",
    name: "Grid Crewneck",
    category: "crewneck",
    categoryLabel: "Sweats",
    price: 118,
    colors: ["Jet Black", "Ash Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "A midweight crewneck with a wide ribbed collar and clean minimal branding, designed to layer under outerwear.",
    details: [
      "420gsm loopback cotton",
      "Wide ribbed collar",
      "Relaxed, unisex fit",
      "Woven Kavrix hem tab",
    ],
  },
  {
    id: "pulse-track-jacket",
    name: "Pulse Track Jacket",
    category: "track",
    categoryLabel: "Outerwear",
    price: 168,
    colors: ["Jet Black", "Bone White"],
    sizes: ["S", "M", "L", "XL"],
    tag: "New",
    description:
      "A full-zip track jacket with tonal piping and a tapered fit — built for movement without losing the oversized attitude.",
    details: [
      "Brushed tricot shell",
      "Tonal piping detail",
      "Full zip with stand collar",
      "Elastic cuffs and hem",
    ],
  },
  {
    id: "urban-cargo-pants",
    name: "Urban Cargo Pants",
    category: "pants",
    categoryLabel: "Bottoms",
    price: 148,
    colors: ["Jet Black", "Ash Grey"],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Utility cargo pants in a durable cotton twill with a tapered leg, articulated knees, and reinforced pocket bartacks.",
    details: [
      "Heavyweight cotton twill",
      "Tapered leg, articulated knee",
      "Multi-pocket utility layout",
      "Adjustable waist tabs",
    ],
    callouts: [
      { text: "Heavyweight Cotton Twill", top: 14, side: "left" },
      { text: "Reinforced Bartack Pockets", top: 52, side: "right" },
      { text: "Tapered, Articulated Leg", top: 82, side: "left" },
    ],
  },
  {
    id: "rebel-flare-denim",
    name: "Rebel Flare Denim",
    category: "flare",
    categoryLabel: "Bottoms",
    price: 178,
    colors: ["Distressed Black"],
    sizes: ["28", "30", "32", "34", "36"],
    tag: "New",
    description:
      "Heavyweight distressed denim with a signature flared, stacked fit — raw-cut panel detailing, a custom hardware button, and the Kavrix cross appliqué embroidered on the back pocket.",
    details: [
      "Heavyweight distressed denim",
      "Flared leg, stacked finish at hem",
      "Custom hardware button closure",
      "Embroidered Kavrix cross appliqué, back pocket",
      "Reinforced triple stitch construction",
    ],
    callouts: [
      { text: "Custom Hardware Button", top: 10, side: "left" },
      { text: "Layered Raw Cut Panels", top: 34, side: "right" },
      { text: "Embroidered Cross Appliqué", top: 58, side: "left" },
      { text: "Flared, Stacked Finish", top: 88, side: "right" },
    ],
  },
  {
    id: "ripped-baggy-jorts",
    name: "Ripped Baggy Jorts",
    category: "jorts",
    categoryLabel: "Bottoms",
    price: 118,
    colors: ["Distressed Black"],
    sizes: ["28", "30", "32", "34", "36"],
    tag: "New",
    description:
      "Baggy denim shorts cut from heavyweight distressed twill, finished with layered raw-cut panels, distressed rip details, and Kavrix embroidery on the back pocket.",
    details: [
      "Heavyweight distressed denim",
      "Baggy, relaxed fit",
      "Layered raw-cut panel construction",
      "Distressed rip detailing",
      "Kavrix embroidery, back pocket",
    ],
    callouts: [
      { text: "Embroidered Kavrix Logo", top: 12, side: "left" },
      { text: "Layered Raw Cut Panels", top: 36, side: "right" },
      { text: "Distressed Rip Details", top: 62, side: "left" },
      { text: "Raw Edge Finish", top: 84, side: "right" },
    ],
  },
  {
    id: "mono-cap",
    name: "Mono Cap",
    category: "cap",
    categoryLabel: "Accessories",
    price: 48,
    colors: ["Jet Black", "Bone White"],
    sizes: ["One Size"],
    description:
      "A structured six-panel cap with a curved brim and debossed leather strap closure.",
    details: [
      "Structured six-panel construction",
      "Curved brim",
      "Debossed leather strap closure",
      "Embroidered eyelets",
    ],
  },
  {
    id: "hardware-belt",
    name: "Hardware Belt",
    category: "belt",
    categoryLabel: "Accessories",
    price: 68,
    colors: ["Jet Black"],
    sizes: ["S/M", "L/XL"],
    tag: "New",
    description:
      "A heavyweight leather belt finished with an oversized custom metal buckle — the same hand-finished hardware used across the Legacy outerwear line.",
    details: [
      "Heavyweight genuine leather",
      "Oversized custom metal buckle",
      "Debossed Kavrix wordmark on keeper",
      "Five adjustable holes",
    ],
    callouts: [
      { text: "Custom Metal Buckle", top: 20, side: "left" },
      { text: "Heavyweight Leather", top: 55, side: "right" },
      { text: "Debossed Wordmark", top: 78, side: "left" },
    ],
  },
  {
    id: "kavrix-tote",
    name: "Kavrix Tote",
    category: "bag",
    categoryLabel: "Accessories",
    price: 38,
    colors: ["Jet Black"],
    sizes: ["One Size"],
    description:
      "A heavy canvas tote built to carry everything, finished with reinforced handles and an internal pocket.",
    details: [
      "16oz heavy canvas",
      "Reinforced stitched handles",
      "Internal zip pocket",
      "Screen-printed wordmark",
    ],
  },
]

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

function formatPrice(value) {
  return "$" + value.toFixed(2).replace(/\.00$/, "")
}

function getRelatedProducts(product, count = 4) {
  const sameCategory = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category,
  )
  const rest = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category !== product.category,
  )
  return [...sameCategory, ...rest].slice(0, count)
}
