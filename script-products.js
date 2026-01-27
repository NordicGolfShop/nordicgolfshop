// Supabase-klient
const SUPABASE_URL = 'DIN_SUPABASE_URL';
const SUPABASE_KEY = 'DIN_ANON_KEY';
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
