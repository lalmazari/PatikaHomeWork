const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static("public"));

//Route
app.get("/", (req, res) => {
  res.render('index');
});
app.get("/about", (req, res) => {
    res.render('about');
  });
  app.get("/add_post", (req, res) => {
    res.render('add_post');
  });

const port = 3333;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
