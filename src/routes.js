import express from 'express';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const router = express.Router();

const routesDir = path.join(__dirname, 'routes');

fs.readdirSync(routesDir).forEach((file) => {
  if (file.endsWith('.js')) {
    import(path.join(routesDir, file))
      .then((module) => {
        if (module.default) {
          router.use(module.default);
        } else {
          console.error(`No default export in route file: ${file}`);
        }
      })
      .catch((err) => {
        console.error(`Error loading route ${file}:`, err);
      });
  }
});

export default router;
