// index.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// Habilita CORS para todas las solicitudes
app.use(cors());

app.get('/api/propiedades', (req, res) => {
    res.sendFile(path.join(__dirname, 'propiedades.json'));
});

app.get('/api/propiedades-ofertas', (req, res) => {
    res.sendFile(path.join(__dirname, 'propiedadesOfertas.json'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
