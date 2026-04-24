const express = require('express');
const client = require('prom-client');

const app = express();
const PORT = 3000;

// Prometheus metrics
client.collectDefaultMetrics();
const requestCounter = new client.Counter({
  name: 'ecommerce_requests_total',
  help: 'Total requests'
});

// Fake products
const products = [
  { id: 1, name: "iPhone", price: 999 },
  { id: 2, name: "Laptop", price: 1200 },
  { id: 3, name: "Headphones", price: 199 }
];

// Routes
app.get('/', (req, res) => {
  requestCounter.inc();
  res.send("🛒 Ecommerce App Running 🚀");
});

app.get('/products', (req, res) => {
  requestCounter.inc();
  res.json(products);
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
