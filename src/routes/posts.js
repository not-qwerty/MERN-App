const router = require("express").Router();
const Post = require("../models/Post");
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/admin");
const asyncMiddleware = require("../middleware/async");

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    const posts = await Post.find().sort({ date: -1 });
    res.send(posts);
  })
);

router.get(
  "/me",
  asyncMiddleware(async (req, res) => {
    const posts = await Post.find({ name: req.body.name }).sort({ date: -1 });

    if (!posts) {
      return res.status(404).send("Posts not found");
    }

    res.send(posts);
  })
);

router.get(
  "/:id",
  auth,
  asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).send(`Cant found post with id ${id}`);
    }

    res.send(post);
  })
);

router.post(
  "/",
  auth,
  asyncMiddleware((req, res) => {
    const { name, title, postBody } = req.body;
    const post = new Post({
      name: name,
      title: title,
      postBody: postBody,
    });

    post.save();
    res.status(201).send(post);
  })
);

router.put(
  "/:id",
  auth,
  asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    const { postBody, title } = req.body;
    const post = await Post.findByIdAndUpdate(id, {
      title: title,
      postBody: postBody,
    });

    res.send("Updated successfully");
  })
);

router.delete(
  "/:id",
  [auth, isAdmin],
  asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    const deleted = await Post.findByIdAndDelete(id);

    deleted
      ? res.status(200).send("Deleted successfully")
      : res.status(404).send("Post not found");
  })
);

module.exports = router;
