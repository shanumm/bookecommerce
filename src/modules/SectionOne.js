import React from "react";
import "./Styles/sectionOne.css";
import One from "../Images/allone.jpeg";
import Two from "../Images/two.jpeg";
import Three from "../Images/three.jpeg";
const Card = ({ right, img }) => {
  return (
    <div
      className={`sectionOneCard ${
        right ? "sectionOneCardRight" : "sectionOneCardLeft"
      }`}
    >
      <div>
        <img src={img} alt="" />
      </div>
      {/* <div>
        <div>
          CHOOSE <br /> YOUR BOOK
        </div>
        <div>See our book collections</div>
        <button>SEE OFFERS</button>
      </div> */}
    </div>
  );
};

export default function SectionOne() {
  return (
    <div className="sectionOne">
      <div>
        <Card right={true} img={One} />
        <Card right={true} img={Two} />
      </div>
      <div>
        <Card right={false} img={Three} />
      </div>
    </div>
  );
}
