import React from "react";
import "./Styles/sectionFour.css";
import UrduImage from "../Images/UrduImage.png";
export default function SectionFour() {
  return (
    <div className="sectionFour">
      <div>
        <img src={UrduImage} />
      </div>
      <div>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nam!
        </div>
        <div>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}
