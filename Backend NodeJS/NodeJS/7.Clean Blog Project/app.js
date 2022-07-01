const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");
const path = require("path");
const Post = require("./models/Post");

const postController = require("./controllers/postControllers");
const pageController = require("./controllers/pageControllers");

const app = express();

//Connect to Database
mongoose.connect("mongodb://localhost:27017/cleanblog-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Template Engine
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//Route
app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.post("/posts", postController.createPost);
app.put("/posts/:id", postController.updatePost);
app.delete("/posts/:id", postController.deletePost);

app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddNewPostPage);
app.get("/posts/edit/:id", pageController.getEditPage);

const port = 3333;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
