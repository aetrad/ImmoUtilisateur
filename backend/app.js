const express = require('express');
const app = express();

// Middleware pour gérer le JSON
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

module.exports = app;
