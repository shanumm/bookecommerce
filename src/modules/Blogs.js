import React from "react";
import Blog from "../components/Blog";
import "./Styles/blogs.css";
export default function Blogs() {
  return (
    <div className="blogs">
      <div>Blog</div>
      <div>
        {[1, 1, 1, 1].map(() => (
          <Blog />
        ))}
      </div>
    </div>
  );
}
