import express from "express";
import { logServerStart } from "./commonLogger.js";
import routes from "./routes.js";
import logger from "./config/logger.mjs";
import dotenv from "dotenv";
import { ENVIROMENTS } from "./config/enviroments.js";
import {getKeyByValue} from "./utils/utils.js";

dotenv.config();

const app = express();
const port = 3000;
const isProduction = process.env.ENVIROMENT === getKeyByValue(ENVIROMENTS, ENVIROMENTS.PROD);

app.use(routes);

app.listen(port, () => {
  logServerStart(port);
  logger.info(`Server running at ${`http://localhost:${port}`} 🚀`, isProduction);
});
