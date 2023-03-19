import React from "react";
import "./Styles/sectionOne.css";

const Card = ({ right }) => {
  return (
    <div
      className={`sectionOneCard ${
        right ? "sectionOneCardRight" : "sectionOneCardLeft"
      }`}
    >
      <div>
        <img
          src={
            right
              ? "https://cdn.pixabay.com/photo/2014/08/23/23/19/library-425730_960_720.jpg"
              : "https://cdn.pixabay.com/photo/2014/08/17/16/33/notebook-420011_960_720.jpg"
          }
          alt=""
        />
      </div>
      <div>
        <div>
          Lorem <br /> ipsum dolor.
        </div>
        <div>Lorem ipsum dolor sit amet.</div>
        <button>SEE OFFERS</button>
      </div>
    </div>
  );
};

export default function SectionOne() {
  return (
    <div className="sectionOne">
      <div>
        <Card right={true} />
        <Card right={true} />
      </div>
      <div>
        <Card right={false} />
      </div>
    </div>
  );
}
