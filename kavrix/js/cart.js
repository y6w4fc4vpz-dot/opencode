/* Cart persistence via localStorage, shared across every page. */
const CART_KEY = "kavrix_cart_v1"

const Cart = {
  read() {
    try {
      const raw = localStorage.getItem(CART_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  },

  write(lines) {
    localStorage.setItem(CART_KEY, JSON.stringify(lines))
    updateCartBadge()
  },

  add(productId, size, color, qty = 1) {
    const lines = this.read()
    const existing = lines.find(
      (l) => l.productId === productId && l.size === size && l.color === color,
    )
    if (existing) {
      existing.qty += qty
    } else {
      lines.push({
        lineId: productId + "|" + size + "|" + color,
        productId,
        size,
        color,
        qty,
      })
    }
    this.write(lines)
  },

  updateQty(lineId, qty) {
    let lines = this.read()
    if (qty <= 0) {
      lines = lines.filter((l) => l.lineId !== lineId)
    } else {
      const line = lines.find((l) => l.lineId === lineId)
      if (line) line.qty = qty
    }
    this.write(lines)
  },

  remove(lineId) {
    const lines = this.read().filter((l) => l.lineId !== lineId)
    this.write(lines)
  },

  clear() {
    this.write([])
  },

  count() {
    return this.read().reduce((sum, l) => sum + l.qty, 0)
  },

  subtotal() {
    return this.read().reduce((sum, l) => {
      const product = getProductById(l.productId)
      return product ? sum + product.price * l.qty : sum
    }, 0)
  },
}

function updateCartBadge() {
  const count = Cart.count()
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = count
    el.classList.toggle("is-empty", count === 0)
  })
}

document.addEventListener("DOMContentLoaded", updateCartBadge)
