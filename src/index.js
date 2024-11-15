const express = require('express');
const { logServerStart } = require('./logger.js');
const routes = require('./routes.js'); // Aquí importamos el archivo routes.js

const app = express();
const port = 3000;

// Usamos las rutas definidas en routes.js
app.use(routes);

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  logServerStart(port);
});
