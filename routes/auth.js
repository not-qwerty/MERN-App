const { User } = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const asyncMiddleware = require("../middleware/async");
const Joi = require("joi");
const jwt = require('jsonwebtoken');

const router = require("express").Router();

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Invalid email or password");

    const { email, password } = req.body;
    const validPass = await bcrypt.compare(password, user.password, null);
    if (!validPass) return res.status(400).send("Invalid email or password");


    const token = user.generateAuthToken();

    res.send(token);
  })
);

function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(1024).required(),
  };

  return Joi.validate(req, schema);
}

module.exports = router;
