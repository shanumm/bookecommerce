import React, { useEffect, useState } from "react";
import "../modules/Styles/blog.css";
export default function Blog({ blog, keyValue }) {
  const [addedDate, setAddedDate] = useState(null);

  useEffect(() => {
    const timestamp = blog.date; // milliseconds elapsed since Jan 1, 1970
    const date = new Date(timestamp);
    const dateString = date.toLocaleDateString(); // format the date as a string
    const timeString = date.toLocaleTimeString(); // format the time as a string

    setAddedDate(`${dateString} ${timeString}`, ">>>>"); // output: "04/26/2023 6:46:02 PM"
  }, []);

  return (
    <a href={`/posts/${keyValue}`}>
      <div className="blog">
        <div className="heading clipped-heading">{blog?.title}</div>
        <div className="subHeading clipped-subheading">{blog.subtitle}</div>
        <div className="content clipped-text">{blog?.content}</div>
        <div className="divider"></div>
        <div className="blogFooter">{addedDate && addedDate}</div>
      </div>
    </a>
  );
}
