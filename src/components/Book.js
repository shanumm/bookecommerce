import React from "react";
import "../modules/Styles/book.css";
export default function Book() {
  return (
    <div className="book">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2018/06/30/09/31/background-image-3507320_960_720.jpg"
          alt=""
        />
      </div>
      <div>Book Name</div>
      <div>Price : </div>
    </div>
  );
}
