const router = require("express").Router();
const postModel = require("../models/Post");

router.get("/api/posts/:postId", async (req, res) => {
  res.sendFile("./public/blogPost.html", { root: "./" });
});

router.get("/api/:postId", async (req, res) => {
  const post = await postModel.find({ _id: req.params.postId });
  res.json(post);
});

module.exports = router;
