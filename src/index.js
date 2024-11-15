const express = require('express');
const { logServerStart } = require('./logger.js');
const routes = require('./routes.js');

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, () => {
  logServerStart(port);
});
