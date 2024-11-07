const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');


// Middleware pour gérer le JSON
app.use(express.json());

app.use('/api/users', userRoutes);


// Route de test
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

module.exports = app;
