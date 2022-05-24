import express from 'express';
import data from './data.js';
const app = express();

app.use('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5001; // no funciona con port 5000, dice que est'a en uso
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
