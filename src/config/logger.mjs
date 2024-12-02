import winston from "winston";
import { Loggly } from "winston-loggly-bulk";
import chalk from "chalk";
import dotenv from "dotenv";
import { getKeyByValue } from "../utils/utils.js";

dotenv.config();

const LOG_TYPES = Object.freeze({
  INFORMATION: Symbol.for("INFO"),
  WARNING: Symbol.for("WARNING"),
  ERROR: Symbol.for("ERROR"),
});

const LOG_LEVELS_COLORS = Object.freeze({
  [LOG_TYPES.INFORMATION]: chalk.green,
  [LOG_TYPES.WARNING]: chalk.yellow,
  [LOG_TYPES.ERROR]: chalk.red,
});

const WINSTON_ORIGIN = "Winston-NodeJS";
const UNKNOW_LOG_TYPE = "UNKNOW";

const getLogTypeName = (logType) =>
  getKeyByValue(LOG_TYPES, logType) || UNKNOW_LOG_TYPE;

winston.add(
  new Loggly({
    token: process.env.LOGGLY_TOKEN,
    subdomain: process.env.LOGGLY_SUBDOMAIN,
    tags: [WINSTON_ORIGIN],
    json: true,
  })
);

winston.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

const createLogger = (type) => {
  if (!LOG_LEVELS_COLORS[type]) {
    throw new Error(`Invalid log type: ${String(type)}`);
  }

  return (message, logInCloud = true) => {
    const typeName = getLogTypeName(type);
    const coloredMessage = LOG_LEVELS_COLORS[type](
      `${chalk.bold(`[${typeName}]`)} ${message}`
    );

    console.log(coloredMessage);

    if (logInCloud && process.env.ENABLE_CLOUD_LOGGING) {
      const winstonLogLevel =
        {
          [LOG_TYPES.INFORMATION]: "info",
          [LOG_TYPES.WARNING]: "warn",
          [LOG_TYPES.ERROR]: "error",
        }[type] || "info";

      winston.log(winstonLogLevel, message);
    }
  };
};

const info = createLogger(LOG_TYPES.INFORMATION);
const warn = createLogger(LOG_TYPES.WARNING);
const error = createLogger(LOG_TYPES.ERROR);

const logger = { info, warn, error };

export default logger;