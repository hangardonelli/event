import winston from "winston";
import { Loggly } from "winston-loggly-bulk";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const LOG_TYPES = {
  INFORMATION: Symbol.for("INFO"),
  WARNING: Symbol.for("WARNING"),
  ERROR: Symbol.for("ERROR"),
};

const logLevels = {
  [LOG_TYPES.INFORMATION]: chalk.green,
  [LOG_TYPES.WARNING]: chalk.yellow,
  [LOG_TYPES.ERROR]: chalk.red,
};

winston.add(
  new Loggly({
    token: process.env.LOGGLY_TOKEN,
    subdomain: process.env.LOGGLY_SUBDOMAIN,
    tags: ["Winston-NodeJS"],
    json: true,
  })
);

winston.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

const createLogger = (type) => {
  return (message, logInCloud = true) => {
    console.log(
      logLevels[type](
        `${chalk.bold(`[${type.toString().slice(7)}]`)} ${message}`
      )
    );
    if (logInCloud) {
      winston.log(logLevels[type] === chalk.green ? 'info' : logLevels[type] === chalk.yellow ? 'warn' : 'error', message);
    }
  };
};

const info = createLogger(LOG_TYPES.INFORMATION);
const warn = createLogger(LOG_TYPES.WARNING);
const error = createLogger(LOG_TYPES.ERROR);

const logger = { info, warn, error };

export default logger;
