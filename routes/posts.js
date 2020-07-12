const router = require("express").Router();

const Post = require("../models/Post");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (err) {
    console.error(err.message || err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.send(post);
    next();
  } catch (err) {
    console.error(err.message || err);
  }
});

router.post("/", (req, res, next) => {
  try {
    const { name, title, postBody } = req.body;
    const post = new Post({
      name: name,
      title: title,
      postBody: postBody,
    });

    post.save();
    res.send(post);
  } catch (err) {
    console.error(err.message || err);
  }
});

// TEST THIS
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { postBody, title } = req.body;
    const post = await Post.findByIdAndUpdate(id, {
      title: title,
      postBody: postBody,
    });

    res.send("Updated successfully");
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.findByIdAndDelete(id);

    deleted
      ? res.status(200).send("Deleted successfully")
      : res.send("Post not found");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
