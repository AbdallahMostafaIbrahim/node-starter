const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  description: String,
});

const PostModel = mongoose.model("Post", PostSchema);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = {
  PostModel,
  UserModel,
};
