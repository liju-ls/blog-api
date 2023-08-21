const router = require("express").Router();
const mongoose = require("mongoose");
const postModel = require("../models/Post");

router.get("/", async (req, res) => {
  res.sendFile("/index.html", { root: __dirname });
});

router.get("/api/posts", async (req, res) => {
  const posts = await postModel.find();
  res.json(posts);
});

router.get("/api/image/:id", async (req, res) => {
  res.sendFile(`public/images/${req.params.id}.jpg`, { root: "./" });
});

module.exports = router;
