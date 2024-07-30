const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const cors = require("cors");
const serverless = require("serverless-http");
const app = express();
require("dotenv").config();
// Enable CORS for all origins
app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000", // frontend URI (ReactJS)
};
app.use(cors(corsOptions));

// Middleware to parse JSON data
app.use(express.json()); // Add this line to parse JSON data

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after a successful connection
    app.listen(5001, () => {
      console.log("Server listening on port 5001..");
    });
  })
  .catch((err) => {
    console.log("Connection error:", err);
  });

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware for logging requests
app.use((req, res, next) => {
  console.log("Request: ");
  console.log("Host:", req.hostname);
  console.log("Path:", req.path);
  console.log("Method:", req.method);
  console.log("\n");
  next();
});

// Redirect root URL to /blogs
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// Render the About page
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// Blog routes
app.use("/blogs", blogRoutes);

// 404 Error handling
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
