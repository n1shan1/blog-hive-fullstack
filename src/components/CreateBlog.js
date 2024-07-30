import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, snippet, body }; // Correctly create the blog object
    fetch("/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog), // Ensure the blog data is sent as JSON
    })
      .then((res) => res.json()) // Optional: Handle the response
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-content container">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="snippet">Snippet:</label>
        <input
          type="text"
          id="snippet"
          required
          value={snippet}
          onChange={(e) => setSnippet(e.target.value)}
        />
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
