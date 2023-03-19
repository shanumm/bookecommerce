import React, { useState } from "react";
import Book from "../components/Book";
import "./Styles/sectionThree.css";

export default function SectionThree() {
  const [myArray, setMyArray] = useState(new Array(8).fill(null));
  return (
    <div className="sectionThree">
      <div>
        <div>Featured Books</div>
        <div>
          {" "}
          {myArray.map((item, index) => (
            <Book index={index} />
          ))}
        </div>
      </div>
      <div>
        <div>Featured Books</div>
        <div>
          {" "}
          {myArray.map((item, index) => (
            <Book index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
