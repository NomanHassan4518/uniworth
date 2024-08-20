const { User, validateUser: validate } = require("../models/user");
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

  let user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(400).send({ message: "Email already registered" });

  user = new User(
    _.pick(req.body, [
      "name",
      "email",
      "phoneNumber",
      "password",
      "dateOfBirth",
    ])
  );

  user.password = await bcrypt.hash(user.password, 15);
  if (user.email === "malikhassanhu55@gmail.com") user.isAdmin = true;
  user = await user.save();

  await user.sendVerificationEmail();

  return res
    .status(201)
    .send({ message: "Registration successful. Please verify your email." });
});

router.get("/verify/:token", async (req, res) => {
  const token = req.params.token;
  const secretKey = config.get("Ecommerce_jwtPrivateKey"); // Same key used for signing the JWT

  const decoded = jwt.verify(token, secretKey);
  const user = await User.findOne({ email: decoded.email });
  if (!user)
    return res.status(400).send({ message: "Invalid or expired token." });

  user.verified = true;
  await user.save();

  return res.status(200).send({ message: "Email verified successfully!" });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(404).send({ message: "Invalid Email or password" });

  const isValid = await bcrypt.compare(req.body.password, user.password);

  if (!isValid) return res.status(404).send({ message: "Invalid password" });

  const token = user.generateVerificationToken();

  req.session.user = {
    id: user._id,
    name: user.name,
    email: user.email,
  };

  res
    .status(200)
<<<<<<< HEAD:Backend/routes/customers.js
    .send({ message: "Login successful" , token:token});
=======
    // .header("auth-token", token)
    .send({ message: "Login successful", token: token });
>>>>>>> 8c8c599c05c2d785c7e0a636dc824ae2fc191a5c:Backend/routes/users.js
});

router.get("/profile", auth, (req, res) => {
  res.send({ user: req.session.user });
});

router.get("/logout", async (req, res) => {
  req.session.destroy();
  return res.status(200).send({ message: "Logged out successfully" });
});
module.exports = router;
