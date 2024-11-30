const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const routesDir = path.join(__dirname, 'routes');

fs.readdirSync(routesDir).forEach((file) => {
  if (file.endsWith('.js')) {
    const route = require(path.join(routesDir, file));
    router.use(route); 
  }
});

module.exports = router;
