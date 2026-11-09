const productGrid = document.getElementById('productGrid');
const modal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const modalCloseButton = document.getElementById('modalCloseButton');
const modalCategory = document.getElementById('modalCategory');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
const modalWhatsApp = document.getElementById('modalWhatsApp');
const contactForm = document.getElementById('contactForm');

const productData = [
  {
    id: 1,
    name: 'Pressed Flower Bookmark',
    category: 'Book Accessories',
    price: 'Rp 45.000',
    description: 'Bookmark transparan dengan bunga kering dan dedaunan yang disusun rapi, menciptakan tampilan hangat, elegan, dan sempurna untuk menemani buku favorit Anda setiap hari.',
    features: ['Bunga kering natural', 'Desain elegan dan unik', 'Fungsional untuk buku', 'Cocok untuk hadiah'],
    accent: 'terracotta'
  },
  {
    id: 2,
    name: 'Floral Book Cover',
    category: 'Book Cover',
    price: 'Rp 65.000',
    description: 'Sampul buku lembut dengan bordir bunga dan tali natural, melindungi isi buku sekaligus menambahkan sentuhan handmade yang estetik dan personal.',
    features: ['Melindungi buku', 'Bordir bunga handmade', 'Bahan lembut dan nyaman', 'Tampilan ramah lingkungan'],
    accent: 'lavender'
  },
  {
    id: 3,
    name: 'Custom Name Keychain',
    category: 'Souvenir & Gift',
    price: 'Rp 35.000',
    description: 'Gantungan kunci custom dengan nama dan aksen tassel, cocok untuk souvenir pernikahan, ulang tahun, maupun hadiah spesial yang lebih personal dan berkesan.',
    features: ['Custom nama', 'Cocok untuk souvenir', 'Tassel estetik', 'Bahan ramah lingkungan'],
    accent: 'sage'
  },
  {
    id: 4,
    name: 'Denim Fringe Keychain',
    category: 'Accessories',
    price: 'Rp 50.000',
    description: 'Gantungan kunci berbentuk fringe denim yang unik dan modern, dengan tekstur yang kasual tapi tetap elegan untuk tas, kunci, atau aksesoris sehari-hari.',
    features: ['Bahan denim daur ulang', 'Model unik dan modern', 'Cocok untuk daily use', 'Tampilan handmade yang khas'],
    accent: 'sand'
  }
];

function renderProducts() {
  productGrid.innerHTML = productData
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-visual ${product.accent}">
            <div class="p-shape s1"></div>
            <div class="p-shape s2"></div>
            <div class="p-shape s3"></div>
            <div class="p-shape s4"></div>
          </div>

          <div class="product-body">
            <span class="product-tag">${product.category}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>

          <div class="product-footer">
            <span class="price">${product.price}</span>
            <button type="button" data-id="${product.id}">View details</button>
          </div>
        </article>
      `
    )
    .join('');

  productGrid.querySelectorAll('button[data-id]').forEach((button) => {
    button.addEventListener('click', () => openProduct(Number(button.dataset.id)));
  });
}

function openProduct(productId) {
  const product = productData.find((item) => item.id === productId);
  if (!product) return;

  modalCategory.textContent = product.category;
  modalName.textContent = product.name;
  modalPrice.textContent = product.price;
  modalDescription.textContent = product.description;
  modalFeatures.innerHTML = product.features.map((feature) => `<li>${feature}</li>`).join('');
  modalWhatsApp.href = `https://wa.me/6281234567890?text=Halo%20REGROW5%2C%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(product.name)}.`;

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProductModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

closeModal.addEventListener('click', closeProductModal);
modalCloseButton.addEventListener('click', closeProductModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeProductModal();
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  alert(`Pesan berhasil dikirim, ${payload.name}! Tim REGROW5 akan segera menghubungi Anda.`);
  contactForm.reset();
});

renderProducts();
