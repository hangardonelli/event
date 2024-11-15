const express = require('express');
const { logServerStart } = require('./logger.js');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  logServerStart(port);
});
