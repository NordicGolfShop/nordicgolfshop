const productsEl = document.getElementById("products");

function renderProducts() {
  productsEl.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    const isOut = p.stock === 0;

    div.innerHTML = `
      <div class="product-image-wrapper">
        <img src="${p.image}" alt="${p.name}">
        ${isOut ? '<div class="sold-out">✕</div>' : ''}
      </div>

      <h3>${p.name}</h3>
      <p class="description">${p.description}</p>
      <p>${p.price} SEK</p>
      <p>I lager: ${p.stock}</p>

      <button
        ${isOut ? 'disabled class="disabled"' : ''}
        ${!isOut ? `onclick="goToCheckout('${p.id}')"` : ''}
      >
        ${isOut ? 'Slutsåld' : 'Köp'}
      </button>
    `;

    productsEl.appendChild(div);
  });
}

function goToCheckout(id) {
  const product = products.find(p => p.id === id);
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "checkout.html";
}

renderProducts();
