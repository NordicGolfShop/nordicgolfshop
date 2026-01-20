const productsEl = document.getElementById("products");

function renderProducts() {
  productsEl.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.qr}" alt="QR för ${p.name[currentLang]}">
      <h3>${p.name[currentLang]}</h3>
      <p class="description">${p.description[currentLang]}</p>
      <p>${p.price} SEK</p>
      <p>${translations.stock[currentLang]}: ${p.stock}</p>
      <button onclick="goToCheckout('${p.id}')">${translations.buy[currentLang]}</button>
    `;
    productsEl.appendChild(div);
  });
}

function goToCheckout(id) {
  const p = products.find(x => x.id === id);
  localStorage.setItem("selectedProduct", JSON.stringify(p));
  window.location.href = "checkout.html";
}

renderProducts();
