import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Book from "../components/Book";
import { db } from "../firebase";
import "./Styles/homePageBookSection.css";
export default function HomePageBookSection({ bookData }) {
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
        {bookData.length > 0 &&
          bookData.map((item, index) => {
            return (
              <Book
                book={Object.values(item)[0]}
                index={index}
                keys={Object.keys(item)[0]}
              />
            );
          })}
      </div>
    </div>
  );
}
