import React from "react";
import "../modules/Styles/book.css";
import AlloneImage from "../Images/AlloneImage.png";
import Img1 from "../BookImgs/kindergarden/1.png";
import Img2 from "../BookImgs/kindergarden/2.png";
import Img3 from "../BookImgs/kindergarden/3.png";
import Img4 from "../BookImgs/kindergarden/4.png";
import Img5 from "../BookImgs/kindergarden/5.png";
import Img6 from "../BookImgs/kindergarden/6.png";
import Img7 from "../BookImgs/kindergarden/7.png";
import Img8 from "../BookImgs/kindergarden/8.png";
export default function Book({ index }) {
  const img = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
  return (
    <div className="book">
      <div>
        <img src={img[index]} />
      </div>
      <div>Book Name</div>
      <div>Price : </div>
    </div>
  );
}
