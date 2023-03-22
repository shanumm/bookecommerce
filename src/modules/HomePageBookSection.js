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
          <div>
            <input
              type="radio"
              id="vehicle1"
              name="vehicle1"
              value="All"
              onChange={handleCheckboxChange}
            />
            All
          </div>
          <div>
            <input
              type="radio"
              id="vehicle1"
              name="vehicle1"
              value="Popular"
              onChange={handleCheckboxChange}
            />
            All In One
          </div>
          <div>
            <input
              type="radio"
              id="vehicle1"
              name="vehicle1"
              value="Chaman Urdu Khushkhati"
              onChange={handleCheckboxChange}
            />
            Chaman Urdu Khushkhati
          </div>
          <div>
            <input
              type="radio"
              id="vehicle1"
              name="vehicle1"
              value="PlayWay Writing"
              onChange={handleCheckboxChange}
            />
            PlayWay Writing
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
