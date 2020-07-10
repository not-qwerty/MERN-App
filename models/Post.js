const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: String,
  postHeader: String,
  postBody: String,
  userId: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
