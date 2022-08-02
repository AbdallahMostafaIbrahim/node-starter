const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PostModel } = require("./models/Posts");

async function main() {
  await mongoose.connect(
    "mongodb://username:password@localhost:27017/testPosts?authSource=admin"
  );

  const app = express();

  app.use(express.json());
  app.use(cors());
  // JSON.parse()

  app.get("/posts", async (req, res) => {
    try {
      const posts = await PostModel.find();
      res.json({
        data: posts,
        message: "Posts fetched successfully",
        code: 200,
      });
    } catch {
      res.json({ message: "Error fetching posts", code: 500 });
    }
  });

  app.get("/posts/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const post = await PostModel.findById(id);
      res.json({
        data: post,
        message: "Post fetched successfully",
        code: 200,
      });
    } catch {
      res.json({ message: "Error fetching posts", code: 500 });
    }
  });

  app.post("/posts", async (req, res) => {
    const post = await PostModel.create(req.body);
    res.json({ message: "Posts created Sucesfully", code: 200, data: post });
  });

  app.listen(8000, () => {
    console.log("Listening on port 8000");
  });
}

main();
