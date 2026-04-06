const WHATSAPP_NUMBER = "254114191177";
const CART_STORAGE_KEY = "thika-sacks-cart";
const FORM_STORAGE_KEY = "thika-sacks-checkout-form";

const products = [
  {
    id: "new-90kg-green-sack",
    name: "New 90kg Green Sack",
    category: "new-sacks",
    categoryLabel: "New sacks",
    price: 26,
    unit: "per sack",
    image: "assets/green sack.jpg",
    badge: "Popular with farmers and bulk buyers",
    tags: ["90kg size", "Strong weave", "Farm use"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "new-50kg-white-sack-premium",
    name: "New 50kg White Sack",
    category: "new-sacks",
    categoryLabel: "New sacks",
    price: 25,
    unit: "per sack",
    image: "assets/new 50kg.jpg",
    badge: "Fast-moving size for cereals and produce",
    tags: ["50kg size", "Clean stock", "Wholesale ready"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "Ready today",
  },
  {
    id: "new-130kg-white-sack",
    name: "New 130kg White Sack",
    category: "new-sacks",
    categoryLabel: "New sacks",
    price: 60,
    unit: "per sack",
    image: "assets/new-sacks.jpg",
    badge: "Heavy-load option for bigger packing jobs",
    tags: ["130kg size", "High capacity", "Trade ready"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "new-120kg-white-sack",
    name: "New 120kg White Sack",
    category: "new-sacks",
    categoryLabel: "New sacks",
    price: 50,
    unit: "per sack",
    image: "assets/new-sacks.jpg",
    badge: "Ideal for larger produce and bulk packing",
    tags: ["120kg size", "Strong hold", "Bulk use"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "used-50kg-waterproof-sack",
    name: "Used 50kg Waterproof Sack",
    category: "used-sacks",
    categoryLabel: "Used sacks",
    price: 24,
    unit: "per sack",
    image: "assets/waterproof 50kgs.jpg",
    badge: "Tough fabric choice for miners and rough-use packing",
    tags: ["50kg size", "Waterproof", "Mining use"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "red-panel-50kg-sack",
    name: "Red Panel 50kg Sack",
    category: "new-sacks",
    categoryLabel: "New sacks",
    price: 20,
    unit: "per sack",
    image: "assets/red panel.jpg",
    badge: "Value 50kg option for everyday packing",
    tags: ["50kg size", "Red panel", "Budget friendly"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "new-25kg-white-sack",
    name: "New 25kg White Sack",
    category: "new-sacks",
    categoryLabel: "New sacks",
    price: 18.5,
    unit: "per sack",
    image: "assets/new-sacks.jpg",
    badge: "Compact size for retail packing and lighter products",
    tags: ["25kg size", "Clean white", "Retail use"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "new-25kg-clear-sack",
    name: "New 25kg Clear Sack",
    category: "new-sacks",
    categoryLabel: "New sacks",
    price: 20,
    unit: "per sack",
    image: "assets/50kgs clear.jpg",
    badge: "Clear finish for easier visibility of packed product",
    tags: ["25kg size", "Clear material", "Display friendly"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "new-10kg-white-sack",
    name: "New 10kg White Sack",
    category: "new-sacks",
    categoryLabel: "New sacks",
    price: 15,
    unit: "per sack",
    image: "assets/new-sacks.jpg",
    badge: "Great for smaller retail portions",
    tags: ["10kg size", "Clean white", "Retail packing"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "new-10kg-clear-sack",
    name: "New 10kg Clear Sack",
    category: "new-sacks",
    categoryLabel: "New sacks",
    price: 15,
    unit: "per sack",
    image: "assets/new-sacks.jpg",
    badge: "Compact clear sack for smaller measured quantities",
    tags: ["10kg size", "Clear material", "Easy display"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "new-5kg-white-sack",
    name: "New 5kg White Sack",
    category: "new-sacks",
    categoryLabel: "New sacks",
    price: 12,
    unit: "per sack",
    image: "assets/new-sacks.jpg",
    badge: "Best for compact retail packaging",
    tags: ["5kg size", "Light pack", "Retail ready"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "used-fertilizer-sack",
    name: "Used Fertilizer Sack",
    category: "used-sacks",
    categoryLabel: "Used sacks",
    price: 20,
    unit: "per sack",
    image: "assets/fertilizer sack 50kgs.jpg",
    badge: "Practical low-cost option for fertilizer and rough-use packing",
    tags: ["Used sack", "Budget buy", "Rugged use"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "used-50kg-sack",
    name: "Used 50kg Sack",
    category: "used-sacks",
    categoryLabel: "Used sacks",
    price: 20,
    unit: "per sack",
    image: "assets/used 50kg.jpg",
    badge: "Value option for everyday packing",
    tags: ["50kg size", "Budget friendly", "Daily use"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "new-90kg-sisal-sack",
    name: "New 90kg Sisal Sack",
    category: "sisal-sacks",
    categoryLabel: "Sisal sacks",
    price: 250,
    unit: "per sack",
    image: "assets/sisal sacks.jpg",
    badge: "Premium heavy-duty sack for demanding use",
    tags: ["90kg size", "Sisal", "Heavy-duty"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "Available on order",
  },
  {
    id: "hermetic-storage-bag-plus",
    name: "Hermetic Storage Bag (AgroZ Bag Plus)",
    category: "new-sacks",
    categoryLabel: "New sacks",
    price: 220,
    unit: "per bag",
    image: "assets/Hermetic Storage bags 50kg.jpg",
    badge: "Premium storage bag for safer grain protection",
    tags: ["50kg capacity", "Hermetic", "Longer storage"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
  },
  {
    id: "heavy-duty-tarp",
    name: "Heavy-Duty Tarp",
    category: "tarps",
    categoryLabel: "Tarps",
    price: 3500,
    unit: "per tarp",
    image: "assets/tarps.jpg",
    badge: "Protect stock from rain, dust and rough outdoor handling",
    tags: ["Waterproof", "Heavy-duty", "Choose size"],
    minimum: 1,
    minimumLabel: "Min 1",
    stock: "In stock",
    options: [
      { id: "4x6", label: "4 x 6 meters", price: 3500 },
      { id: "4x5", label: "4 x 5 meters", price: 2500 },
    ],
  },
];

const state = {
  cart: loadCart(),
  filter: "all",
  form: loadForm(),
  search: "",
  selectedOptions: {},
};

const productGrid = document.querySelector("[data-product-grid]");
const cartCounts = document.querySelectorAll("[data-cart-count]");
const cartItems = document.querySelector("[data-cart-items]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartOverlay = document.querySelector("[data-cart-overlay]");
const openCartButtons = document.querySelectorAll("[data-open-cart]");
const closeCartButton = document.querySelector("[data-close-cart]");
const filterPills = document.querySelector("[data-filter-pills]");
const searchInput = document.querySelector("#search-input");
const checkoutForm = document.querySelector("[data-checkout-form]");
const subtotalEl = document.querySelector("[data-subtotal]");
const totalEl = document.querySelector("[data-total]");
const checkoutButtons = document.querySelectorAll("[data-checkout]");
const stickyCartSummary = document.querySelector("[data-sticky-cart-summary]");

function loadCart() {
  try {
    const rawCart = localStorage.getItem(CART_STORAGE_KEY);
    return rawCart ? JSON.parse(rawCart) : {};
  } catch {
    return {};
  }
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
}

function loadForm() {
  try {
    const rawForm = localStorage.getItem(FORM_STORAGE_KEY);
    return rawForm
      ? JSON.parse(rawForm)
      : {
          customerName: "",
          customerPhone: "",
          deliveryOption: "pickup",
          deliveryLocation: "",
          orderNote: "",
        };
  } catch {
    return {
      customerName: "",
      customerPhone: "",
      deliveryOption: "pickup",
      deliveryLocation: "",
      orderNote: "",
    };
  }
}

function saveForm() {
  const formData = new FormData(checkoutForm);
  state.form = Object.fromEntries(formData.entries());
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(state.form));
}

function formatCurrency(value) {
  return `Ksh ${Number(value).toLocaleString("en-KE")}`;
}

function getCartKey(productId, optionId = "") {
  return optionId ? `${productId}::${optionId}` : productId;
}

function parseCartKey(cartKey) {
  const [productId, optionId = ""] = String(cartKey).split("::");
  return { optionId, productId };
}

function getFilteredProducts() {
  return products.filter((product) => {
    const matchesCategory = state.filter === "all" || product.category === state.filter;
    const term = state.search.trim().toLowerCase();
    const searchable = `${product.name} ${product.categoryLabel} ${product.badge} ${product.tags.join(" ")}`.toLowerCase();
    const matchesSearch = !term || searchable.includes(term);
    return matchesCategory && matchesSearch;
  });
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function getSelectedOptionId(product) {
  if (!product.options?.length) {
    return "";
  }

  return state.selectedOptions[product.id] || product.options[0].id;
}

function getSelectedOption(product) {
  if (!product.options?.length) {
    return null;
  }

  const optionId = getSelectedOptionId(product);
  return product.options.find((option) => option.id === optionId) || product.options[0];
}

function getVariantDetails(product, optionId = "") {
  const option = product.options?.find((entry) => entry.id === optionId) || null;

  return {
    option,
    optionId: option?.id || "",
    price: option?.price ?? product.price,
    unit: option ? "per tarp" : product.unit,
  };
}

function getCartQuantity(cartKey) {
  return Number(state.cart[cartKey] || 0);
}

function getLineItems() {
  return Object.entries(state.cart)
    .filter(([, quantity]) => Number(quantity) > 0)
    .map(([cartKey, quantity]) => {
      const { optionId, productId } = parseCartKey(cartKey);
      const product = getProduct(productId);
      if (!product) {
        return null;
      }

      const variant = getVariantDetails(product, optionId);
      const numericQuantity = Number(quantity);

      return {
        ...product,
        cartKey,
        optionId: variant.optionId,
        optionLabel: variant.option?.label || "",
        price: variant.price,
        quantity: numericQuantity,
        total: numericQuantity * variant.price,
        unit: variant.unit,
      };
    })
    .filter(Boolean);
}

function getTotals() {
  const items = getLineItems();
  const subtotal = items.reduce((sum, item) => sum + item.total, 0);

  return {
    items,
    subtotal,
    total: subtotal,
  };
}

function renderProducts() {
  const visibleProducts = getFilteredProducts();

  if (!visibleProducts.length) {
    productGrid.innerHTML = `
      <div class="empty-state">
        No products match that search right now. Try another keyword or switch the category filter.
      </div>
    `;
    return;
  }

  productGrid.innerHTML = visibleProducts
    .map((product) => {
      const selectedOption = getSelectedOption(product);
      const cartKey = getCartKey(product.id, selectedOption?.id || "");
      const displayPrice = selectedOption?.price ?? product.price;
      const displayUnit = selectedOption ? "per tarp" : product.unit;
      const currentQty = getCartQuantity(cartKey) || product.minimum;

      return `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
            <div class="product-type-badge">${product.categoryLabel}</div>
          </div>

          <div class="product-content">
            <div class="product-top">
              <div>
                <h3>${product.name}</h3>
                <p class="catalog-card-subtitle">${product.badge}</p>
              </div>
              <span class="stock-pill">${product.stock}</span>
            </div>

            <div class="price-row">
              <strong>${formatCurrency(displayPrice)}</strong>
              <span>${displayUnit}</span>
            </div>

            <div class="tag-row">
              <span class="min-pill">${product.minimumLabel}</span>
              ${product.tags.map((tag) => `<span class="tag-pill">${tag}</span>`).join("")}
            </div>

            ${
              product.options?.length
                ? `
                  <label class="product-option-select">
                    <span>Select size</span>
                    <select data-product-option="${product.id}">
                      ${product.options
                        .map(
                          (option) => `
                            <option value="${option.id}" ${option.id === selectedOption?.id ? "selected" : ""}>
                              ${option.label} - ${formatCurrency(option.price)}
                            </option>
                          `,
                        )
                        .join("")}
                    </select>
                  </label>
                `
                : ""
            }

            <div class="catalog-actions">
              <label class="qty-stepper" aria-label="Quantity for ${product.name}">
                <button type="button" data-qty-minus="${cartKey}">-</button>
                <input
                  type="number"
                  min="${product.minimum}"
                  step="1"
                  value="${currentQty}"
                  data-minimum="${product.minimum}"
                  data-qty-input="${cartKey}"
                />
                <button type="button" data-qty-plus="${cartKey}">+</button>
              </label>

              <button class="add-button" type="button" data-add-product="${cartKey}">
                Add to cart
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCart() {
  const { items, subtotal, total } = getTotals();

  subtotalEl.textContent = formatCurrency(subtotal);
  totalEl.textContent = formatCurrency(total);

  if (!items.length) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        Your cart is empty. Add a few products from the catalog and your WhatsApp-ready order summary will appear here.
      </div>
    `;
    return;
  }

  cartItems.innerHTML = items
    .map(
      (item) => `
        <article class="cart-item">
          <div class="cart-item-header">
            <div>
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-subtitle">${item.optionLabel ? `${item.optionLabel} · ` : ""}${formatCurrency(item.price)} ${item.unit}</div>
            </div>
            <strong class="cart-item-price">${formatCurrency(item.total)}</strong>
          </div>

          <div class="cart-item-actions">
            <label class="qty-stepper" aria-label="Adjust quantity for ${item.name}">
              <button type="button" data-cart-minus="${item.cartKey}">-</button>
              <input
                type="number"
                min="${item.minimum}"
                step="1"
                value="${item.quantity}"
                data-cart-input="${item.cartKey}"
              />
              <button type="button" data-cart-plus="${item.cartKey}">+</button>
            </label>

            <button class="cart-remove" type="button" data-remove-product="${item.cartKey}">
              Remove
            </button>
          </div>
        </article>
      `,
    )
    .join("");
}

function updateCartIndicators() {
  const { total, items } = getTotals();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  cartCounts.forEach((node) => {
    node.textContent = String(count);
  });

  stickyCartSummary.textContent = `${count} item${count === 1 ? "" : "s"} · ${formatCurrency(total)} total`;
}

function syncFormFields() {
  checkoutForm.customerName.value = state.form.customerName || "";
  checkoutForm.customerPhone.value = state.form.customerPhone || "";
  checkoutForm.deliveryOption.value = state.form.deliveryOption || "pickup";
  checkoutForm.deliveryLocation.value = state.form.deliveryLocation || "";
  checkoutForm.orderNote.value = state.form.orderNote || "";
}

function setCartQuantity(cartKey, quantity) {
  const { optionId, productId } = parseCartKey(cartKey);
  const product = getProduct(productId);
  if (!product) {
    return;
  }

  const normalizedQuantity = Number(quantity);

  if (!Number.isFinite(normalizedQuantity) || normalizedQuantity <= 0) {
    delete state.cart[cartKey];
  } else {
    state.cart[getCartKey(productId, optionId)] = Math.max(product.minimum, Math.floor(normalizedQuantity));
  }

  saveCart();
  renderProducts();
  renderCart();
  updateCartIndicators();
}

function addToCart(cartKey, quantity) {
  const { optionId, productId } = parseCartKey(cartKey);
  const product = getProduct(productId);
  if (!product) {
    return;
  }

  const normalizedQuantity = Number(quantity);
  state.cart[getCartKey(productId, optionId)] = Math.max(
    product.minimum,
    Number.isFinite(normalizedQuantity) ? Math.floor(normalizedQuantity) : product.minimum,
  );

  saveCart();
  renderProducts();
  renderCart();
  updateCartIndicators();
  openCart();
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartOverlay.hidden = true;
  document.body.style.overflow = "";
}

function buildWhatsappMessage() {
  const { items, subtotal, total } = getTotals();

  if (!items.length) {
    return "";
  }

  saveForm();

  const lines = [
    "Hello Thika Sacks, I would like to place this order:",
    "",
    ...items.map(
      (item, index) =>
        `${index + 1}. ${item.name}${item.optionLabel ? ` (${item.optionLabel})` : ""} - Qty ${item.quantity} x ${formatCurrency(item.price)} = ${formatCurrency(item.total)}`,
    ),
    "",
    `Subtotal: ${formatCurrency(subtotal)}`,
    `Total: ${formatCurrency(total)}`,
    "",
    `Customer name: ${checkoutForm.customerName.value || "Not provided"}`,
    `Phone: ${checkoutForm.customerPhone.value || "Not provided"}`,
    `Delivery location: ${checkoutForm.deliveryLocation.value || "Not provided"}`,
    `Order note: ${checkoutForm.orderNote.value || "None"}`,
  ];

  return lines.join("\n");
}

function handleProductGridClick(event) {
  const minusButton = event.target.closest("[data-qty-minus]");
  const plusButton = event.target.closest("[data-qty-plus]");
  const addButton = event.target.closest("[data-add-product]");

  if (minusButton) {
    const input = productGrid.querySelector(`[data-qty-input="${minusButton.dataset.qtyMinus}"]`);
    const minimum = Number(input?.dataset.minimum || 1);
    input.value = String(Math.max(minimum, Number(input.value || minimum) - 1));
  }

  if (plusButton) {
    const input = productGrid.querySelector(`[data-qty-input="${plusButton.dataset.qtyPlus}"]`);
    const minimum = Number(input?.dataset.minimum || 1);
    input.value = String(Math.max(minimum, Number(input.value || minimum) + 1));
  }

  if (addButton) {
    const input = productGrid.querySelector(`[data-qty-input="${addButton.dataset.addProduct}"]`);
    addToCart(addButton.dataset.addProduct, input?.value || 1);
  }
}

function handleProductGridChange(event) {
  if (event.target.matches("[data-product-option]")) {
    state.selectedOptions[event.target.dataset.productOption] = event.target.value;
    renderProducts();
  }
}

function handleCartClick(event) {
  const minusButton = event.target.closest("[data-cart-minus]");
  const plusButton = event.target.closest("[data-cart-plus]");
  const removeButton = event.target.closest("[data-remove-product]");

  if (minusButton) {
    const cartKey = minusButton.dataset.cartMinus;
    const currentItem = getLineItems().find((item) => item.cartKey === cartKey);
    setCartQuantity(cartKey, (currentItem?.quantity || 0) - 1);
  }

  if (plusButton) {
    const cartKey = plusButton.dataset.cartPlus;
    const currentItem = getLineItems().find((item) => item.cartKey === cartKey);
    setCartQuantity(cartKey, (currentItem?.quantity || 0) + 1);
  }

  if (removeButton) {
    setCartQuantity(removeButton.dataset.removeProduct, 0);
  }
}

function handleCartInput(event) {
  if (event.target.matches("[data-cart-input]")) {
    setCartQuantity(event.target.dataset.cartInput, event.target.value);
  }
}

function handleFilterClick(event) {
  const button = event.target.closest("[data-filter]");
  if (!button) {
    return;
  }

  state.filter = button.dataset.filter;
  filterPills.querySelectorAll("[data-filter]").forEach((item) => {
    item.classList.toggle("is-active", item === button);
  });
  renderProducts();
}

function handleCheckout() {
  const message = buildWhatsappMessage();

  if (!message) {
    openCart();
    return;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function initialize() {
  syncFormFields();
  renderProducts();
  renderCart();
  updateCartIndicators();

  productGrid.addEventListener("click", handleProductGridClick);
  productGrid.addEventListener("change", handleProductGridChange);
  cartItems.addEventListener("click", handleCartClick);
  cartItems.addEventListener("change", handleCartInput);
  filterPills.addEventListener("click", handleFilterClick);

  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
  });

  checkoutForm.addEventListener("input", () => {
    saveForm();
    renderCart();
    updateCartIndicators();
  });

  checkoutForm.deliveryOption.addEventListener("change", () => {
    saveForm();
    renderCart();
    updateCartIndicators();
  });

  openCartButtons.forEach((button) => {
    button.addEventListener("click", openCart);
  });

  closeCartButton.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  checkoutButtons.forEach((button) => {
    button.addEventListener("click", handleCheckout);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCart();
    }
  });
}

initialize();
