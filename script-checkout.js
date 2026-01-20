const selected = JSON.parse(localStorage.getItem("selectedProduct"));

const infoForm = document.getElementById("infoForm");
const qrSection = document.getElementById("qrSection");

const qrImg = document.getElementById("qr");
const swishText = document.getElementById("swishText");

infoForm.addEventListener("submit", function(e){
  e.preventDefault();

  // Hämta kundinfo
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;

  if(!selected){
    alert("Ingen produkt vald.");
    return;
  }

  // Skicka formulär via AJAX till Formspree
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("address", address);
  formData.append("product", selected.name[currentLang]);
  formData.append("price", selected.price);

  fetch("https://formspree.io/f/XXXXXX", {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      // Dölj kundinfo
      infoForm.style.display = "none";

      // Visa QR och orderinfo
      qrImg.src = selected.qr;
      swishText.innerText = translations.swish[currentLang];
      qrSection.style.display = "block";
    } else {
      alert("Något gick fel, försök igen.");
    }
  })
  .catch(() => {
    alert("Något gick fel, försök igen.");
  });
});
