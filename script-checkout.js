const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

const form = document.getElementById("infoForm");
const qrSection = document.getElementById("qrSection");
const qrImg = document.getElementById("qr");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!selectedProduct) {
    alert("Ingen produkt vald.");
    return;
  }

  const formData = new FormData();
  formData.append("Fulla Namn", document.getElementById("fullname").value);
  formData.append("Mail", document.getElementById("email").value);
  formData.append("Betalande Telefonnummer", document.getElementById("phone").value);
  formData.append("Adress", document.getElementById("address").value);
  formData.append("Ort", document.getElementById("city").value);
  formData.append("Postkod", document.getElementById("postcode").value);
  formData.append("Produkt", selectedProduct.name);
  formData.append("Pris", selectedProduct.price + " SEK");

  fetch("https://formspree.io/f/mojjlbkr", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  })
  .then(res => {
    if (res.ok) {
      form.style.display = "none";
      qrImg.src = selectedProduct.qr;
      qrSection.style.display = "block";
    } else {
      alert("Något gick fel. Försök igen.");
    }
  })
  .catch(() => {
    alert("Något gick fel. Försök igen.");
  });
});
