const productsEl = document.getElementById("products");
const qrImg = document.getElementById("qr");
const swishText = document.getElementById("swishText");

function renderProducts() {
  productsEl.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <h3>${p.name[currentLang]}</h3>
      <p>${p.price} SEK</p>
      <p>${t("stock")}: ${p.stock}</p>
      <button onclick="buy('${p.id}')">${t("buy")}</button>
    `;
    productsEl.appendChild(div);
  });
}

function buy(id) {
  const p = products.find(x => x.id === id);
  qrImg.src = p.qr;
  document.getElementById("orderProduct").value = p.name[currentLang];
  document.getElementById("orderPrice").value = p.price;
  swishText.innerText = t("swish");
}

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById("title").innerText = t("title");
  swishText.innerText = t("swish");
  renderProducts();
}

setLanguage("sv");
