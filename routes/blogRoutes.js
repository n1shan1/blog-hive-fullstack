const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// Route to get all blogs
router.get("/", blogController.blog_index);

// Route to create a new blog
router.post("/", blogController.blog_create_post);

// Route to show the create blog form
router.get("/create", blogController.blog_create_get);

// Route to get a single blog by ID
router.get("/:id", blogController.blog_details);

// Route to delete a blog by ID
router.delete("/:id", blogController.blog_delete);

module.exports = router;
