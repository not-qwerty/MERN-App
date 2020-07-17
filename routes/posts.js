const router = require("express").Router();
const Post = require("../models/Post");
const auth = require("../middleware/auth");
const isAdmin = require('../middleware/admin');

router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ date: -1 });
  res.send(posts);
});

router.get("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  res.send(post);
});

router.post("/", auth, (req, res) => {
  const { name, title, postBody } = req.body;
  const post = new Post({
    name: name,
    title: title,
    postBody: postBody,
  });

  post.save();
  res.send(post);
});

router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const { postBody, title } = req.body;
  const post = await Post.findByIdAndUpdate(id, {
    title: title,
    postBody: postBody,
  });

  res.send("Updated successfully");
});

router.delete("/:id", [auth, isAdmin], async (req, res) => {
  const { id } = req.params;
  const deleted = await Post.findByIdAndDelete(id);

  deleted
    ? res.status(200).send("Deleted successfully")
    : res.send("Post not found");
});

module.exports = router;
