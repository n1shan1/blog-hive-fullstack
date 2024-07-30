import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="navbar container">
        <div className="site-title">
          <h1>Blog Hive</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Blogs</Link>
          </li>
          <li>
            <Link to="/create">New Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
