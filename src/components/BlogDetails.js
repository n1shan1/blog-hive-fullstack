import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/blogs/${id}`) // relative path due to proxy setup
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    fetch(`/blogs/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-content container">
      {blog ? (
        <div className="blog-details">
          <h2 className="blog-title">{blog.title}</h2>
          <div className="blog-time">
            Created At: {new Date(blog.createdAt).toLocaleDateString()}
          </div>
          <p>{blog.body}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogDetails;
