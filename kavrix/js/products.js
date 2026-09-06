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
