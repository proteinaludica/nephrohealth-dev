const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rota de Teste
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'NephroHealth backend is running',
    timestamp: new Date().toISOString()
  });
});

// Inicia servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
  console.log(`✓ Test endpoint: http://localhost:${PORT}/api/health`);
});