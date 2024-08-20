const mongoose = require("mongoose");
const config = require("config");
const { consoleLogger } = require("../start/logging");
module.exports = function () {
  const db = config.get("db");
  mongoose
    .connect(db)
    .then(() => {
      consoleLogger.info(`Connected to database:${db}`);
    })
    .catch(() => {
      consoleLogger.error(`Failed to connect with ${db}`);
    });
};
