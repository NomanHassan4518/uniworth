const express = require("express");
const users = require("../routes/users");
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
  app.use("/api/users/", users);
  app.use(error);
};
