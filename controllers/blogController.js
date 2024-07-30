const Blog = require("../models/blogs");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.json(result); // changed from res.render to res.json
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      if (result) {
        res.json(result); // changed from res.render to res.json
      } else {
        res.status(404).send("Blog not found");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};

const blog_create_get = (req, res) => {
  res.status(200).send("Create Blog GET endpoint"); // dummy response
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.status(201).json(result); // changed from res.redirect to res.json
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Failed to create blog");
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.json({ redirect: "/blogs" });
      } else {
        res.status(404).send("Blog not found");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Failed to delete blog");
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
