const express = require("express");
const customers = require("../routes/customers");
const error = require("../middleware/error");
const session = require("express-session");

module.exports = function (app) {
  app.use(express.json());
  app.use(
    session({
      secret: "sessionSecret",
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false, maxAge: 120000 },
    })
  );
  app.use("/api/customers/", customers);
  app.use(error);
};
