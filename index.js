const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
app.use(express.static("public"));
const blogRoute = require("./routes/blogRoute");
const singlePostRoute = require("./routes/singlePost");
const newPostRoute = require("./routes/newPost");
app.use(express.json());

app.use(blogRoute);
app.use(singlePostRoute);
app.use(newPostRoute);

(async function databaseConnect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connected to database.");
  } catch (error) {
    console.log(error);
  }
})();

app.listen(
  process.env.PORT,
  console.log(`Running on port ${process.env.PORT}`)
);
