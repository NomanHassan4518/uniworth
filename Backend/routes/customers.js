const { Customer, validateCustomer: validate } = require("../models/customer");
const auth = require("../middleware/auth");

const bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let customer = await Customer.findOne({ email: req.body.email });
  if (customer)
    return res.status(400).send({ message: "Email already registered" });

  customer = new Customer(
    _.pick(req.body, [
      "name",
      "email",
      "phoneNumber",
      "password",
      "dateOfBirth",
    ])
  );

  customer.password = await bcrypt.hash(customer.password, 15);

  customer = await customer.save();

  await customer.sendVerificationEmail();

  return res
    .status(201)
    .send({ message: "Registration successful. Please verify your email." });
});

router.get("/verify/:token", async (req, res) => {
  const token = req.params.token;
  const secretKey = config.get("Ecommerce_jwtPrivateKey"); // Same key used for signing the JWT

  const decoded = jwt.verify(token, secretKey);
  const customer = await Customer.findOne({ email: decoded.email });
  if (!customer)
    return res.status(400).send({ message: "Invalid or expired token." });

  customer.verified = true;
  await customer.save();

  return res.status(200).send({ message: "Email verified successfully!" });
});

router.post("/login", async (req, res) => {
  const customer = await Customer.findOne({ email: req.body.email });
  if (!customer)
    return res.status(404).send({ message: "Invalid Email or password" });

  const isValid = await bcrypt.compare(req.body.password, customer.password);

  if (!isValid)
    return res.status(404).send({ message: "Invalid password" });

  const token = customer.generateVerificationToken();

  req.session.customer = {
    id: customer._id,
    name: customer.name,
    email: customer.email,
  };
  
  res
    .status(200)
    // .header("auth-token", token)
    .send({ message: "Login successful" , token:token});
});

router.get("/profile", auth, (req, res) => {
  res.send({ customer: req.session.customer });
});

router.get("/logout", async (req, res) => {
  req.session.destroy();
  return res.status(200).send({ message: "Logged out successfully" });
});
module.exports = router;
