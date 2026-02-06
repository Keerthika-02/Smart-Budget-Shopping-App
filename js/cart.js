// Get budget & cart from localStorage
let budget = Number(localStorage.getItem("budget")) || 0;
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DOM elements
const cartList = document.getElementById("cartList");
const totalAmountEl = document.getElementById("totalAmount");
const statusEl = document.getElementById("status");

// Load cart on page load
renderCart();

/* -----------------------------
   ADD ITEM TO CART
--------------------------------*/
function addToCart(barcode, price) {
  const item = {
    barcode: barcode,
    price: Number(price)
  };

  cart.push(item);
  saveCart();
  renderCart();
}

/* -----------------------------
   REMOVE ITEM FROM CART
--------------------------------*/
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

/* -----------------------------
   CALCULATE TOTAL
--------------------------------*/
function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

/* -----------------------------
   SAVE CART
--------------------------------*/
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* -----------------------------
   RENDER CART UI
--------------------------------*/
function renderCart() {
  cartList.innerHTML = "";

  let total = calculateTotal();
  totalAmountEl.innerText = total;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>📦 ${item.barcode}</span>
      <span>₹${item.price}</span>
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartList.appendChild(li);
  });

  // Budget check
  if (total > budget) {
    statusEl.innerText = "⚠️ Budget Exceeded!";
    statusEl.style.color = "red";
  } else {
    statusEl.innerText = "✅ Within Budget";
    statusEl.style.color = "green";
  }
    }
