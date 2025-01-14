const express = require('express');
const path = require('path');
require('dotenv').config({ path: './w3s-dynamic-storage/.env' });

const app = express();

// Serve static files from 'dist'
app.use(express.static('dist'));
app.use(express.json());

// API route
app.get('/api/hello', (req, res) => {
  res.send('Hello world');
});

// Fallback for SPA
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

