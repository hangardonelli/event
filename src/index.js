const express = require('express');
const { logServerStart } = require('./logger.js');

const app = express();
const port = 3000;

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Escuchar en el puerto 3000
app.listen(port, () => {
  logServerStart(port);
});
