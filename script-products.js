// Supabase-klient
const SUPABASE_URL = 'https://lzjwxivlpfnwyrmongeq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6and4aXZscGZud3lybW9uZ2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1MDAwOTcsImV4cCI6MjA4NTA3NjA5N30.TNy02Ws56ij4q8h1FOD1xWIH3Hcir_niVZAoXCQzcYI';
const supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const productsEl = document.getElementById("products");

async function loadProducts() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) {
    console.error('Fel vid hämtning:', error);
    productsEl.innerHTML = "<p>Produkter kunde inte laddas.</p>";
    return;
  }

  renderProducts(products);
}

function renderProducts(products) {
  productsEl.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    const isOut = p.stock === 0;

    div.innerHTML = `
      ${isOut ? '<div class="sold-out">✕</div>' : ''}
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="description">${p.description}</p>
      <p>${p.price} SEK</p>
      <p>I lager: ${p.stock}</p>
      <button
        ${isOut ? 'disabled' : `onclick="goToCheckout('${p.id}')"`}>
        ${isOut ? 'Slutsåld' : 'Köp'}
      </button>
    `;

    productsEl.appendChild(div);
  });
}

function goToCheckout(id) {
  localStorage.setItem("selectedProduct", JSON.stringify({ id }));
  window.location.href = "checkout.html";
}

// Kör när sidan laddas
loadProducts();
