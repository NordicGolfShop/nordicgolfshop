const qrImg = document.getElementById("qr");
const swishText = document.getElementById("swishText");
const orderProduct = document.getElementById("orderProduct");
const orderPrice = document.getElementById("orderPrice");

const selected = JSON.parse(localStorage.getItem("selectedProduct"));
if (selected) {
  qrImg.src = selected.qr;
  swishText.innerText = translations.swish[currentLang];
  orderProduct.value = selected.name[currentLang];
  orderPrice.value = selected.price;
}
