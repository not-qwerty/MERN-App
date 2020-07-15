const mongoose = require("mongoose");
const Joi = require("joi");

const Post = mongoose.model(
  "Post",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    postBody: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  })
);

function validatePost(post) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    title: Joi.string().min(5).max(255).required(),
    postBody: Joi.string().min(3).required(),
  };

  retrun Joi.validate(post, schema);
}

module.exports = Post;
