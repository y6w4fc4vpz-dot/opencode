document.addEventListener("DOMContentLoaded", () => {
  initBrandMarks()
  initMobileNav()
  initModals()
  initFeaturedGrid()
  initShopPage()
  initProductPage()
  initCartPage()
  initNewsletter()
})

/* ---------- Shared: brand cross mark ---------- */
function initBrandMarks() {
  document.querySelectorAll("[data-brand-mark]").forEach((el) => {
    el.innerHTML = getBrandMark()
  })
}

/* ---------- Shared: mobile nav ---------- */
function initMobileNav() {
  const toggle = document.getElementById("menuToggle")
  const close = document.getElementById("mobileNavClose")
  const nav = document.getElementById("mobileNav")
  if (!toggle || !nav) return
  const open = () => {
    nav.classList.add("is-open")
    document.body.style.overflow = "hidden"
  }
  const shut = () => {
    nav.classList.remove("is-open")
    document.body.style.overflow = ""
  }
  toggle.addEventListener("click", open)
  close?.addEventListener("click", shut)
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", shut))
}

/* ---------- Shared: toast ---------- */
let toastTimer
function showToast(message) {
  const toast = document.getElementById("toast")
  if (!toast) return
  toast.textContent = message
  toast.classList.add("is-visible")
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600)
}

/* ---------- Shared: modals ---------- */
function initModals() {
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("is-open")
    })
    overlay.querySelectorAll("[data-modal-close]").forEach((btn) => {
      btn.addEventListener("click", () => overlay.classList.remove("is-open"))
    })
  })
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.is-open").forEach((o) => o.classList.remove("is-open"))
    }
  })
}
function openModal(id) {
  document.getElementById(id)?.classList.add("is-open")
}

/* ---------- Shared: product card markup ---------- */
function renderProductCard(p) {
  const was = p.compareAt ? `<span class="was">${formatPrice(p.compareAt)}</span>` : ""
  return `
    <a class="product-card" href="product.html?id=${p.id}">
      <div class="product-card__media">
        ${p.tag ? `<span class="product-card__tag">${p.tag}</span>` : ""}
        ${getProductArt(p.category)}
      </div>
      <div class="product-card__body">
        <span class="product-card__cat">${p.categoryLabel}</span>
        <span class="product-card__name">${p.name}</span>
        <span class="product-card__price">${formatPrice(p.price)}${was}</span>
      </div>
    </a>`
}

/* ---------- Homepage: featured grid ---------- */
function initFeaturedGrid() {
  const grid = document.getElementById("featuredGrid")
  if (!grid) return
  const featuredIds = ["legacy-moto-jacket", "rebel-flare-denim", "void-hoodie", "ripped-baggy-jorts"]
  const featured = featuredIds.map(getProductById).filter(Boolean)
  grid.innerHTML = featured.map(renderProductCard).join("")
}

/* ---------- Shop page ---------- */
function initShopPage() {
  const grid = document.getElementById("shopGrid")
  const filterBar = document.getElementById("filterBar")
  if (!grid || !filterBar) return

  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.categoryLabel))]
  const hashMap = { hoodie: "Hoodies", tee: "Tees", jacket: "Outerwear", accessory: "Accessories" }
  const initial = hashMap[location.hash.replace("#", "")] || "All"

  filterBar.innerHTML = categories
    .map(
      (c) =>
        `<button class="filter-pill${c === initial ? " is-active" : ""}" data-filter="${c}">${c}</button>`,
    )
    .join("")

  function render(filter) {
    const list = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.categoryLabel === filter)
    grid.innerHTML = list.map(renderProductCard).join("")
  }

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]")
    if (!btn) return
    filterBar.querySelectorAll(".filter-pill").forEach((b) => b.classList.remove("is-active"))
    btn.classList.add("is-active")
    render(btn.dataset.filter)
  })

  render(initial)
}

/* ---------- Product detail page ---------- */
function initProductPage() {
  const container = document.getElementById("productDetail")
  if (!container) return

  const params = new URLSearchParams(location.search)
  const product = getProductById(params.get("id")) || PRODUCTS[0]

  document.title = `${product.name} — Kavrix`
  const titleTag = document.getElementById("pageTitle")
  if (titleTag) titleTag.textContent = `${product.name} — Kavrix`

  const breadcrumb = document.getElementById("breadcrumb")
  if (breadcrumb) {
    breadcrumb.innerHTML = `<a href="index.html">Home</a> / <a href="shop.html">Shop</a> / <span>${product.name}</span>`
  }

  let selectedColor = product.colors[0]
  let selectedSize = null
  let qty = 1

  const was = product.compareAt ? `<span class="was">${formatPrice(product.compareAt)}</span>` : ""

  const calloutsHtml = (product.callouts || [])
    .map(
      (c) => `
        <div class="callout is-${c.side}" style="top:${c.top}%;">
          ${c.side === "left" ? `<span class="callout__line"></span><span class="callout__dot"></span>` : `<span class="callout__dot"></span><span class="callout__line"></span>`}
          <span>${c.text}</span>
        </div>`,
    )
    .join("")

  container.innerHTML = `
    <div class="pd-gallery">
      <div class="pd-gallery__specbar"><span class="gothic">Kavrix</span><span>Spec 0${(PRODUCTS.indexOf(product) % 9) + 1} — ${product.categoryLabel}</span></div>
      <div class="pd-gallery__main">${getProductArt(product.category)}${calloutsHtml}</div>
      <div class="pd-gallery__thumbs">
        ${[0, 1, 2, 3].map((i) => `<div class="pd-gallery__thumb${i === 0 ? " is-active" : ""}">${getProductArt(product.category)}</div>`).join("")}
      </div>
    </div>
    <div class="pd-info">
      <p class="eyebrow pd-info__cat">${product.categoryLabel}</p>
      <h1 class="display pd-info__name">${product.name}</h1>
      <p class="pd-info__price">${formatPrice(product.price)}${was}</p>
      <p class="pd-info__desc">${product.description}</p>

      ${
        product.colors.length > 1
          ? `<div class="option-block">
              <div class="option-block__label"><span>Color: <span id="colorLabel">${selectedColor}</span></span></div>
              <div class="swatches" id="colorSwatches">
                ${product.colors.map((c) => `<button class="swatch${c === selectedColor ? " is-active" : ""}" data-color="${c}">${c}</button>`).join("")}
              </div>
            </div>`
          : ""
      }

      <div class="option-block">
        <div class="option-block__label">
          <span>Size</span>
          ${product.sizes[0] !== "One Size" ? `<span class="link" id="sizeGuideLink">Size Guide</span>` : ""}
        </div>
        <div class="size-grid" id="sizeGrid">
          ${product.sizes.map((s) => `<button class="size-opt" data-size="${s}">${s}</button>`).join("")}
        </div>
      </div>

      <div class="option-block">
        <div class="option-block__label"><span>Quantity</span></div>
        <div class="qty-stepper">
          <button type="button" id="qtyMinus" aria-label="Decrease quantity">&minus;</button>
          <span id="qtyValue">1</span>
          <button type="button" id="qtyPlus" aria-label="Increase quantity">+</button>
        </div>
      </div>

      <div class="pd-actions">
        <button class="btn btn-primary" id="addToCartBtn">Add to Cart</button>
        <button class="wishlist" aria-label="Add to wishlist">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 20s-7-4.35-9.5-8.5C1 8 2.5 4.5 6 4.5c2 0 3.5 1.2 6 3.8 2.5-2.6 4-3.8 6-3.8 3.5 0 5 3.5 3.5 7C19 15.65 12 20 12 20z"/></svg>
        </button>
      </div>
      <p class="pd-note" id="selectionNote">Select a size to continue.</p>

      <div class="accordion">
        <div class="accordion-item">
          <button class="accordion-item__head" data-accordion>Details &amp; Care<span class="plus">+</span></button>
          <div class="accordion-item__panel"><div class="accordion-item__panel-inner"><ul>${product.details.map((d) => `<li>${d}</li>`).join("")}</ul></div></div>
        </div>
        <div class="accordion-item">
          <button class="accordion-item__head" data-accordion>Shipping &amp; Returns<span class="plus">+</span></button>
          <div class="accordion-item__panel"><div class="accordion-item__panel-inner">Free standard shipping on orders over $150. Unworn items with tags may be returned within 30 days for a full refund.</div></div>
        </div>
      </div>
    </div>`

  if (product.sizes[0] === "One Size") {
    selectedSize = "One Size"
    const noteEl = container.querySelector("#selectionNote")
    if (noteEl) noteEl.textContent = ""
    container.querySelector('[data-size="One Size"]')?.classList.add("is-active")
  }

  container.querySelectorAll("[data-color]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedColor = btn.dataset.color
      container.querySelectorAll("[data-color]").forEach((b) => b.classList.remove("is-active"))
      btn.classList.add("is-active")
      const label = container.querySelector("#colorLabel")
      if (label) label.textContent = selectedColor
    })
  })

  container.querySelectorAll("[data-size]").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedSize = btn.dataset.size
      container.querySelectorAll("[data-size]").forEach((b) => b.classList.remove("is-active"))
      btn.classList.add("is-active")
      const note = container.querySelector("#selectionNote")
      if (note) note.textContent = ""
    })
  })

  const qtyValue = container.querySelector("#qtyValue")
  container.querySelector("#qtyMinus")?.addEventListener("click", () => {
    qty = Math.max(1, qty - 1)
    qtyValue.textContent = qty
  })
  container.querySelector("#qtyPlus")?.addEventListener("click", () => {
    qty = Math.min(10, qty + 1)
    qtyValue.textContent = qty
  })

  container.querySelectorAll(".pd-gallery__thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      container.querySelectorAll(".pd-gallery__thumb").forEach((t) => t.classList.remove("is-active"))
      thumb.classList.add("is-active")
    })
  })

  container.querySelector("#sizeGuideLink")?.addEventListener("click", () => openModal("sizeGuideModal"))

  container.querySelector("#addToCartBtn")?.addEventListener("click", () => {
    if (!selectedSize) {
      const note = container.querySelector("#selectionNote")
      if (note) {
        note.textContent = "Please select a size before adding to cart."
        note.style.color = "#c0392b"
      }
      container.querySelector("#sizeGrid")?.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }
    Cart.add(product.id, selectedSize, selectedColor, qty)
    showToast(`Added ${product.name} (${selectedSize}) to cart`)
  })

  container.querySelectorAll("[data-accordion]").forEach((head) => {
    head.addEventListener("click", () => {
      const item = head.closest(".accordion-item")
      const panel = item.querySelector(".accordion-item__panel")
      const isOpen = item.classList.contains("is-open")
      item.classList.toggle("is-open", !isOpen)
      panel.style.maxHeight = isOpen ? "0px" : panel.scrollHeight + "px"
    })
  })

  const relatedGrid = document.getElementById("relatedGrid")
  if (relatedGrid) {
    relatedGrid.innerHTML = getRelatedProducts(product).map(renderProductCard).join("")
  }
}

/* ---------- Cart page ---------- */
function initCartPage() {
  const content = document.getElementById("cartContent")
  if (!content) return

  function render() {
    const lines = Cart.read()

    if (lines.length === 0) {
      content.innerHTML = `
        <div class="cart-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>
          <h2 class="display" style="font-size:24px;">Your cart is empty</h2>
          <p>Looks like you haven't added anything yet.</p>
          <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
        </div>`
      return
    }

    const subtotal = Cart.subtotal()
    const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 12
    const total = subtotal + shipping

    const linesHtml = lines
      .map((line) => {
        const p = getProductById(line.productId)
        if (!p) return ""
        return `
          <div class="cart-line" data-line-id="${line.lineId}">
            <div class="cart-line__media">${getProductArt(p.category)}</div>
            <div>
              <a class="cart-line__name" href="product.html?id=${p.id}">${p.name}</a>
              <div class="cart-line__meta">${line.color} &middot; Size ${line.size}</div>
              <div class="cart-line__price">${formatPrice(p.price * line.qty)}</div>
            </div>
            <div class="cart-line__right">
              <div class="qty-stepper">
                <button type="button" data-qty-minus>&minus;</button>
                <span>${line.qty}</span>
                <button type="button" data-qty-plus>+</button>
              </div>
              <button class="cart-line__remove" data-remove>Remove</button>
            </div>
          </div>`
      })
      .join("")

    content.innerHTML = `
      <div class="cart-layout">
        <div class="cart-lines">${linesHtml}</div>
        <div class="summary">
          <h3>Order Summary</h3>
          <div class="summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
          <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
          <div class="promo">
            <input type="text" placeholder="Promo code">
            <button type="button" id="promoBtn">Apply</button>
          </div>
          <div class="summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
          <button class="btn btn-primary btn-block" id="checkoutBtn" style="margin-top:20px;">Checkout</button>
          <p class="summary-note">Free shipping on orders over $150</p>
        </div>
      </div>`

    content.querySelectorAll("[data-line-id]").forEach((row) => {
      const lineId = row.dataset.lineId
      const line = lines.find((l) => l.lineId === lineId)
      row.querySelector("[data-qty-minus]").addEventListener("click", () => {
        Cart.updateQty(lineId, line.qty - 1)
        render()
      })
      row.querySelector("[data-qty-plus]").addEventListener("click", () => {
        Cart.updateQty(lineId, Math.min(10, line.qty + 1))
        render()
      })
      row.querySelector("[data-remove]").addEventListener("click", () => {
        Cart.remove(lineId)
        render()
      })
    })

    content.querySelector("#promoBtn")?.addEventListener("click", () => {
      showToast("Promo code is not valid on this demo store")
    })

    content.querySelector("#checkoutBtn")?.addEventListener("click", () => {
      openModal("checkoutModal")
    })
  }

  render()
}

/* ---------- Newsletter ---------- */
function initNewsletter() {
  const form = document.getElementById("newsletterForm")
  if (!form) return
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const note = document.getElementById("newsletterNote")
    if (note) note.textContent = "You're on the list. Welcome to Kavrix."
    form.reset()
  })
}
