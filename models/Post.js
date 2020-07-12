const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  postBody: {
    type: String,
    required: true
  },
  userId: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
