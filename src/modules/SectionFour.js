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
        <div>DIVE THE WORLDS OF BOOKS</div>
        <div>
          You can choose the best option for you, and it does not matter what
          your taste is.
        </div>
        <div>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}
