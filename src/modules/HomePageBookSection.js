import React, { useState } from "react";
import Book from "../components/Book";
import "./Styles/homePageBookSection.css";
export default function HomePageBookSection() {
  const [myArray, setMyArray] = useState(new Array(8).fill(null));

  return (
    <div className="homePageBookSection">
      <div className="homePageBookSectionLeft">
        <div>Sort Out:</div>
        <div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            Best Sellers
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            New Arrivals
          </div>
          <div>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            Top This Week
          </div>
        </div>
      </div>
      <div className="homePageBookSectionRight">
        {myArray.map((item, index) => (
          <Book />
        ))}
      </div>
    </div>
  );
}
