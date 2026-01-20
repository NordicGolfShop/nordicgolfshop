const productsEl = document.getElementById("products");

function renderProducts(list = products) {
  productsEl.innerHTML = "";

  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
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
  const product = products.find(p => p.id === id);
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "checkout.html";
}

/* SÖK */
function searchProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );

  renderProducts(filtered);
}

renderProducts();
