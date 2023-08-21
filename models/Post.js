const mongoose = require("mongoose");

const postSchema = {
  _id: { type: Number, required: true },
  postName: { type: String, required: true },
  postContent: { type: String },
  featuredImageUrl: { type: String },
};

const postModel = mongoose.model("posts", postSchema);

module.exports = postModel;
