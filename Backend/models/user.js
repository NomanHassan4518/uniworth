const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 50,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    maxlength: 100,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 10,
    maxlength: 500,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    maxlength: 25,
    trim: true,
    required: true,
  },
  dateOfBirth: {
    date: {
      type: Number,
    },
    month: {
      type: String,
    },
    year: {
      type: Number,
    },
  },
  verified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

userSchema.methods.generateVerificationToken = function () {
  const payload = {
    email: this.email,
  };
  const secretKey = config.get("Ecommerce_jwtPrivateKey");
  const options = {
    expiresIn: "48h",
  };

  return jwt.sign(payload, secretKey, options);
};
userSchema.methods.sendVerificationEmail = async function () {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const token = this.generateVerificationToken();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: this.email,
    subject: "Email Verification",
    html: `<h1>Email Verification</h1>
             <p>${token}</p>
             <p>Please verify your email by clicking the link below:</p>
             <a href="http://localhost:3000/api/customers/verify/${token}">Verify Email</a>`,
  };

  await transporter.sendMail(mailOptions);
};
const User = mongoose.model("User", userSchema);

const validateUser = function (user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).trim().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(10).max(50).trim().required(),
    phoneNumber: Joi.string().max(25).trim().required(),
    dateOfBirth: {
      date: Joi.number().integer().required(),
      month: Joi.string().required(),
      year: Joi.number().integer().required(),
    },
  });
  return schema.validate(user);
};

module.exports = {
  validateUser,
  User,
  userSchema,
};
