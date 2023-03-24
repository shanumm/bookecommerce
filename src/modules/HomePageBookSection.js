import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Book from "../components/Book";
import { db } from "../firebase";
import "./Styles/homePageBookSection.css";
export default function HomePageBookSection({ bookData }) {
  const [selectedCheckbox, setSelectedCheckbox] = useState("All");

  const handleCheckboxChange = (event) => {
    console.log(event);
    if (event.target.checked) {
      setSelectedCheckbox(event.target.value);
    }
  };

  const handleClearFilter = () => {
    setSelectedCheckbox("All");
  };

  // useEffect(()=>{
  //   console.log(selectedCheckbox)
  // },[selectedCheckbox])

  // console.log(outputData);
  console.log(bookData);
  return (
    <div className="homePageBookSection">
      <div className="homePageBookSectionLeft">
        <div>Sort Out:</div>
        <div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="vehicle2"
              name="vehicle1"
              value="Popular"
              checked={selectedCheckbox === "Popular"}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="vehicle2">All In One</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle1"
              checked={selectedCheckbox === "Chaman Urdu Khushkhati"}
              value="Chaman Urdu Khushkhati"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="vehicle3">Chaman Urdu Khushkhati</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="vehicle4"
              name="vehicle1"
              checked={selectedCheckbox === "PlayWay Writing"}
              value="PlayWay Writing"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="vehicle4">PlayWay Writing</label>
          </div>
          <div>
            <button
              className="clear-filter-button"
              onClick={() => handleClearFilter()}
            >
              &#x2715; Clear Filter
            </button>
          </div>
        </div>
      </div>

      <div className="homePageBookSectionRight">
        {bookData.length > 0 && selectedCheckbox === "All"
          ? bookData.map((item, index) => {
              console.log(Object.values(item)[0].category);

              return (
                <Book
                  book={Object.values(item)[0]}
                  index={index}
                  keys={Object.keys(item)[0]}
                />
              );
            })
          : bookData.map((item, index) => {
              if (Object.values(item)[0].category === selectedCheckbox)
                //all in one
                return (
                  <Book
                    book={Object.values(item)[0]}
                    index={index}
                    keys={Object.keys(item)[0]}
                  />
                );
              else {
              }
            })}
      </div>
    </div>
  );
}
