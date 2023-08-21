const router = require("express").Router();
const postModel = require("../models/Post");

const post = {
  _id: 1002,
  postName: "Why ayanokoji is evil?",
  postContent:
    "A shit flow diagram is a high level technical drawing used to display how excreta moves through a location, and functions as a tool to identify where improvements are needed. The diagram has a particular focus on treatment of the waste, and its final disposal or use. SFDs are most often used in developing countries.",
  featuredImageUrl: "1002",
};

router.get("/api/new-post", async (req, res) => {
  const newPost = new postModel(post);
  await newPost
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
