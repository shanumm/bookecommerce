import React, { useEffect, useState } from "react";
import Book from "../components/Book";
import "./Styles/shop.css";

import SectionTwo from "./SectionTwo";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Card = ({ right }) => {
  return (
    <div
      style={{ flex: "auto", width: "-webkit-fill-available" }}
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

export default function Shop() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    getBookData();
  }, []);

  const getBookData = async () => {
    const books = [];
    const querySnapshot = await getDocs(collection(db, "books"));
    querySnapshot.forEach((doc) => {
      books.push({ [doc.id]: doc.data() });
      if (books.length === querySnapshot.size) {
        setBookData(books);
      }
    });
  };

  return (
    <div>
      <SectionTwo />
      <div className="shopContent">
        <div className="homePageBookSectionLeft">
          <div>Sort Out:</div>
          <div>
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              Best Sellers
            </div>
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              New Arrivals
            </div>
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              Top This Week
            </div>
          </div>
        </div>
        <div className="homePageBookSectionRight">
          {bookData.length > 0 &&
            bookData.map((item, index) => (
              <Book
                book={Object.values(item)[0]}
                index={index}
                keys={Object.keys(item)[0]}
              />
            ))}
          <Card right={true} />
          {bookData.length > 0 &&
            bookData.map((item, index) => (
              <Book
                book={Object.values(item)[0]}
                index={index}
                keys={Object.keys(item)[0]}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
