const selected = JSON.parse(localStorage.getItem("selectedProduct"));

const infoForm = document.getElementById("infoForm");
const qrSection = document.getElementById("qrSection");

const qrImg = document.getElementById("qr");
const swishText = document.getElementById("swishText");

infoForm.addEventListener("submit", function(e){
  e.preventDefault();

  if(!selected){
    alert("Ingen produkt vald.");
    return;
  }

  // Hämta kundinfo
  const phone = document.getElementById("phone").value;
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const postcode = document.getElementById("postcode").value;

  // Skicka formulär via AJAX till Formspree
  const formData = new FormData();
  formData.append("Betalande Telefonnummer", phone);
  formData.append("Fulla Namn", fullname);
  formData.append("Mail", email);
  formData.append("Adress", address);
  formData.append("Ort", city);
  formData.append("Postkod", postcode);
  formData.append("Produkt", selected.name[currentLang]);
  formData.append("Pris", selected.price);

  fetch("https://formspree.io/f/mojjlbkr", {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if(response.ok){
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
