import React from "react";
import "./Styles/heroBanner.css";
import Two from "../Images/two.jpeg";
import AlloneImage from "../Images/AlloneImage.png";
import EnglishImage from "../Images/EnglishImage.png";

export default function HeroBanner() {
  return (
    <div className="heroBanner">
      <img className="heroBannerBGImage" src={Two} />
      {/* <div className="heroText">
        <div>
          SUMMER SALE GET <span>30% OFF</span> ON ALL EPICS.
        </div>
        <div className="heroTextButton">
          <button>Shop Now</button>
        </div>
      </div>
      <div className="heroBannerImageContainer">
        <img src={EnglishImage} />
        <img src={AlloneImage} />
      </div> */}
    </div>
  );
}
