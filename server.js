const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Fake products
let products = [
  { id: 1, name: 'Áo thun', price: 150000, image_url: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Quần jean', price: 350000, image_url: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Giày sneaker', price: 800000, image_url: 'https://via.placeholder.com/150' }
];

// Fake orders
let orders = [];

// API lấy danh sách sản phẩm
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API tạo đơn hàng
app.post('/api/orders', (req, res) => {
  const order = req.body;
  order.id = orders.length + 1;
  order.createdAt = new Date();
  orders.push(order);
  res.status(201).json(order);
});

// API lấy danh sách đơn hàng
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
