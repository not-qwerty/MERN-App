const { User, validate } = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const asyncMiddleware = require("../middleware/async");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const router = require("express").Router();

// Get one user
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id);

  res.send({
    name: user.name,
    email: user.email,
  });
});

// REGISTER
router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    const userName = await User.findOne({ name: req.body.name });

    if (userName) return res.status(400).send("Username is already registered");
    if (user) return res.status(400).send("Email already registered");
    const { name, email, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(password, salt);

    user = new User({
      name: name,
      email: email,
      password: hashed,
    });

    user.save();

    const token = user.generateAuthToken();

    res.header("x-auth-token", token).send({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  })
);

module.exports = router;
