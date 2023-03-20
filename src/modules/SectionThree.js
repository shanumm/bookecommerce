import React, { useState } from "react";
import Book from "../components/Book";
import "./Styles/sectionThree.css";

export default function SectionThree({ bookData }) {
  const [myArray, setMyArray] = useState(new Array(8).fill(null));
  return (
    <div className="sectionThree">
      <div>
        <div>Featured Books</div>
        <div>
          {bookData.length > 0 &&
            bookData.map((item, index) => (
              <Book
                book={Object.values(item)[0]}
                index={index}
                keys={Object.keys(item)[0]}
              />
            ))}
        </div>
      </div>
      <div>
        <div>Featured Books</div>
        <div>
          {bookData.length > 0 &&
            bookData.map((item, index) => (
              <Book
                book={Object.values(item)[0]}
                index={index}
                keys={Object.keys(item)[0]}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
