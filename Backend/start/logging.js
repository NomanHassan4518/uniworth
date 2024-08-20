const winston = require("winston");
const { combine, colorize, timestamp, json, printf } = winston.format;

const fileLogger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({ filename: "combined.log", format: json() }),
  ],
});

const consoleLogger = winston.createLogger({
  level: "info",
  format: combine(
    colorize(),
    printf(({ level, message }) => {
      return `${level}: ${message}`;
    })
  ),
  transports: [new winston.transports.Console()],
});

module.exports = {
  fileLogger,
  consoleLogger,
};
