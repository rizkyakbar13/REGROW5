const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: 'Pembatas Buku',
    category: 'Book Accessories',
    price: 'Rp 45.000',
    description: 'Pembatas buku yang dibuat dari sisa kain pakaian yang dipadukan dengan bunga kering, menjadikan aksesori yang estetik sekaligus fungsional.',
    features: ['Daur ulang kain sisa', 'Bunga kering natural', 'Praktis untuk dipakai tiap hari', 'Cocok untuk hadiah']
  },
  {
    id: 2,
    name: 'Gantungan Kunci',
    category: 'Accessories',
    price: 'Rp 35.000',
    description: 'Gantungan kunci dari kain sisa yang tersedia dalam berbagai bentuk dan warna, cocok untuk kebutuhan pribadi maupun souvenir acara.',
    features: ['Ramah lingkungan', 'Banyak pilihan bentuk', 'Cocok untuk souvenir', 'Tahan lama']
  },
  {
    id: 3,
    name: 'Aksesori Tas',
    category: 'Bag Decor',
    price: 'Rp 50.000',
    description: 'Hiasan tas dari bahan daur ulang kain yang mempercantik tampilan tas dengan gaya yang unik dan elegan.',
    features: ['Estetik untuk tas', 'Bahan daur ulang', 'Mudah dipadukan', 'Unik handmade']
  },
  {
    id: 4,
    name: 'Sampul Buku',
    category: 'Book Cover',
    price: 'Rp 65.000',
    description: 'Sampul buku yang mampu melindungi buku sekaligus menambah tampilan luar yang menarik dan ramah lingkungan.',
    features: ['Melindungi buku', 'Desain elegan', 'Bahan kain daur ulang', 'Cocok untuk hadiah']
  }
];

app.get('/api/products', (req, res) => {
  res.json({ products });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((item) => item.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json({ product });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Semua field harus diisi.' });
  }

  res.status(201).json({
    message: 'Pesan berhasil dikirim. Tim REGROW5 akan segera membalas Anda.',
    data: { name, email, message }
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'REGROW5 API is running' });
});

app.listen(PORT, () => {
  console.log(`REGROW5 backend running on http://localhost:${PORT}`);
});
