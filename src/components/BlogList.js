import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs") // relative path due to proxy setup
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-content container">
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog._id}>
            <Link to={`/blogs/${blog._id}`}>
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-snippet">{blog.snippet}</p>
              <p className="blog-time">
                Created At: {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
