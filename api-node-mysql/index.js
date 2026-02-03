const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// Rota simples
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ erro: err });
    }
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log('API rodando em http://localhost:3000');
});
