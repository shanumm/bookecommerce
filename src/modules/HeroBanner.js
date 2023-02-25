import React from "react";
import "./Styles/heroBanner.css";

export default function HeroBanner() {
  return (
    <div className="heroBanner">
      <img
        className="heroBannerBGImage"
        src="https://cdn.pixabay.com/photo/2021/10/14/13/50/book-6709160_960_720.jpg"
        alt=""
      />
      <div>
        <div>
          Lorem, ipsum dolor sit ame <span>consectetur</span>{" "}
          adipisicing elit.
        </div>
        <div>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="heroBannerImageContainer">
        <img
          src="https://cdn.pixabay.com/photo/2018/01/17/18/43/book-3088775__340.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
