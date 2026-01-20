const productsEl = document.getElementById("products");

function renderProducts() {
  productsEl.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image}" alt="Bild på ${p.name}">
      <h3>${p.name}</h3>
      <p class="description">${p.description}</p>
      <p>${p.price} SEK</p>
      <p>I lager: ${p.stock}</p>
      <button onclick="goToCheckout('${p.id}')">Köp</button>
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

