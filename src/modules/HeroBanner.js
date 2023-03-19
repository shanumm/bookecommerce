import React from "react";
import "./Styles/heroBanner.css";
import AlloneImage from "../Images/AlloneImage.png";
import EnglishImage from "../Images/EnglishImage.png";

export default function HeroBanner() {
  return (
    <div className="heroBanner">
      <img
        className="heroBannerBGImage"
        src="https://cdn.pixabay.com/photo/2021/10/14/13/50/book-6709160_960_720.jpg"
        alt=""
      />
      <div className="heroText">
        <div>
          Lorem, ipsum dolor sit ame <span>consectetur</span> adipisicing elit.
        </div>
        <div className="heroTextButton">
          <button>Shop Now</button>
        </div>
      </div>
      <div className="heroBannerImageContainer">
        <img src={EnglishImage} />
        <img src={AlloneImage} />
      </div>
    </div>
  );
}
