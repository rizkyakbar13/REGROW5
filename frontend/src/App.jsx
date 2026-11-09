import { useState } from 'react';
import { products } from './data/products';
import { CONTACT_EMAIL, WHATSAPP_URL } from './config/site';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-mark">R</span>
          <span className="brand-name">REGROW5</span>
        </div>

        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav-cta"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
        >
          Order via WhatsApp
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Sustainable handmade</span>
            <h1>
              <span className="brand-word">ReGrow5</span>
              <span className="headline-slogan">crafted for a greener world.</span>
            </h1>
            <p>
              ReGrow5 menghadirkan produk handmade dari kain sisa dan bunga kering yang
              mengubah barang tak terpakai menjadi karya indah, fungsional, dan ramah
              lingkungan. Setiap item dibuat dengan sentuhan unik untuk memberi nilai baru
              pada bahan yang masih layak dipakai dan memberi inspirasi hidup yang lebih
              peduli terhadap bumi.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href="#products">Shop Collection</a>
              <a
                className="secondary-btn"
                href={`${WHATSAPP_URL}?text=${encodeURIComponent('Halo REGROW5, saya ingin memesan produk.')}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Featured product gallery">
            <div className="hero-gallery">
              <div className="hero-card large">
                <img src="/Sampul Buku.jpg" alt="Floral book cover" />
              </div>
              <div className="hero-card small top">
                <img src="/Pembatas Bunga Kering.jpg" alt="Pressed flower bookmark" />
              </div>
              <div className="hero-card small bottom">
                <img src="/Souvenir.jpg" alt="Custom name keychain" />
              </div>
            </div>
          </div>
        </section>

        <section className="mission-bar" aria-label="Brand mission">
          <p>Handcrafted from reuse, designed for everyday beauty.</p>
        </section>

        <section className="about-section" id="about">
          <div className="about-card">
            <div className="about-layout">
              <div className="about-visual">
                <img src="/Gantungan Kunci.jpg" alt="Denim fringe keychain" />
              </div>

              <div className="about-copy">
                <span className="section-tag">About REGROW5</span>
                <h2>We turn leftover fabric into meaningful pieces.</h2>
                <p>
                  ReGrow5 adalah usaha kreatif berbasis kepedulian lingkungan yang mengubah
                  pakaian tidak terpakai menjadi produk unik dan bernilai guna. Dengan
                  memanfaatkan kain bekas dan sentuhan bunga kering, kami menghadirkan
                  berbagai produk handmade seperti bookmark, gantungan kunci, sampul buku,
                  hingga suvenir untuk berbagai acara.
                </p>
                <p>
                  Kami percaya bahwa sesuatu yang sudah tidak terpakai masih memiliki
                  kesempatan untuk menjadi sesuatu yang indah dan bermanfaat dan melalui
                  ReGrow5, kami ingin mengajak masyarakat untuk lebih peduli terhadap
                  lingkungan dengan menerapkan kreativitas dan penggunaan kembali bahan yang
                  masih layak.
                </p>

                <div className="about-points">
                  <div>
                    <strong>01</strong>
                    <span>Reuse materials</span>
                  </div>
                  <div>
                    <strong>02</strong>
                    <span>Handcrafted charm</span>
                  </div>
                  <div>
                    <strong>03</strong>
                    <span>Purposeful design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="section-title">
            <span>Our Collection</span>
            <h2>Handcrafted products from reused fabric</h2>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className={`product-visual ${product.accent}`}>
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-body">
                  <span className="product-tag">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>

                <div className="product-footer">
                  <span className="price">{product.price}</span>
                  <button type="button" onClick={() => openModal(product)}>
                    View details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <span className="section-tag">Custom order</span>
            <h2>Need a custom gift or special order?</h2>
            <p>
              Kami menerima pesanan khusus untuk souvenir, pernikahan, ulang tahun, dan
              kebutuhan personal dengan desain sesuai keinginan Anda.
            </p>

            <div className="cta-row">
              <a className="primary-btn" href={`mailto:${CONTACT_EMAIL}`}>Email Us</a>
              <a
                className="secondary-btn"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Order
              </a>
            </div>
          </div>

          <form className="contact-form">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="Your email" required />
            </label>
            <label>
              <span>Message</span>
              <textarea rows="4" name="message" placeholder="Tell us what you need" required />
            </label>
            <button type="submit">Send Inquiry</button>
          </form>
        </section>
      </main>

      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-modal" onClick={() => setIsOpen(false)}>
              ×
            </button>

            <div className={`modal-visual ${selectedProduct.accent}`}>
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>

            <div className="modal-info">
              <span className="label-modal">{selectedProduct.category}</span>
              <h3>{selectedProduct.name}</h3>
              <p className="modal-price">{selectedProduct.price}</p>
              <p>{selectedProduct.description}</p>

              <ul>
                {selectedProduct.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="modal-actions">
                <a
                  className="primary-btn"
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Halo REGROW5, saya tertarik dengan produk ${selectedProduct.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order via WhatsApp
                </a>
                <button type="button" className="secondary-btn" onClick={() => setIsOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
