import React, { useContext, useEffect, useState } from "react";
import "./Styles/cartProduct.css";
import EnglishImage from "../Images/EnglishImage.png";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import CartContext from "../CartContext";
export default function CartProduct() {
  const { addToCart, addToWishList } = useContext(CartContext);
  const navigation = useNavigate();
  const [mainImage, setMainImage] = useState("");
  const [count, setCount] = useState(1);

  const [myprice, setmyprice] = useState(new Array(5).fill(null));
  const [bookData, setBookData] = useState({});
  const [allbookData, setAllBookData] = useState([]);

  const [selectedValue, setSelectedValue] = useState("Hard");
  const location = useLocation();

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleRedirect = (redirect) => {
    navigation(redirect);
    window.scrollTo(0, 0);
    window.location.reload();
  };

  useEffect(() => {
    getBookData();
  }, []);

  const getBookData = async () => {
    const books = [];
    const querySnapshot = await getDocs(collection(db, "books"));
    querySnapshot.forEach((doc) => {
      books.push({ [doc.id]: doc.data() });
      if (books.length === querySnapshot.size) {
        setAllBookData(books);
      }
    });
  };

  const handleAddToCart = () => {
    addToCart({ ...bookData, quantity: count, selectedValue: selectedValue });
  };

  const handleAddToWishList = () => {
    addToWishList({
      ...bookData,
      selectedValue: selectedValue,
    });
  };

  useEffect(() => {
    getBook();
  }, []);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const getBook = async () => {
    const pathname = location.pathname;

    const bookId = pathname.substring(pathname.lastIndexOf("/") + 1);

    const docRef = doc(db, "books", bookId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setBookData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (bookData?.url) {
      setMainImage(bookData.url);
    }
  }, [bookData]);

  const changeMainImage = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <div className="CartProduct">
      <div className="fixed-section">
        {allbookData.length &&
          allbookData
            .filter(
              (item) => Object.values(item)[0].category != bookData?.category
            )
            .map(
              (item, index) =>
                index < 2 && (
                  <div
                    onClick={() =>
                      handleRedirect(`/book/${Object.keys(item)[0]}`)
                    }
                    className="book-card"
                  >
                    <img loading="lazy" src={Object.values(item)[0].url} />
                    <div>{Object.values(item)[0].name}</div>
                    <div>{Object.values(item)[0].price} RS.</div>
                  </div>
                )
            )}
      </div>
      <div className="cartProductSection1">
        <div>
          <div className="main-image-container">
            <img loading="lazy" className="main-image" src={mainImage} />
            <div className="small-image-container">
              <img
                loading="lazy"
                className="small-image"
                onClick={() => changeMainImage(bookData?.url1)}
                src={bookData?.url1}
              />
              <img
                loading="lazy"
                className="small-image"
                onClick={() => changeMainImage(bookData?.url2)}
                src={bookData?.url2}
              />
              <img
                loading="lazy"
                className="small-image"
                onClick={() => changeMainImage(bookData?.url3)}
                src={bookData?.url3}
              />
            </div>
          </div>

          <div>
            <h4>SHARE: </h4>
            <img
              loading="lazy"
              src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png"
            />
            <img
              loading="lazy"
              src="https://cdn-icons-png.flaticon.com/128/3128/3128212.png"
            />
            <img
              loading="lazy"
              src="https://cdn-icons-png.flaticon.com/128/733/733622.png"
            />
            <img
              loading="lazy"
              src="https://cdn-icons-png.flaticon.com/128/2111/2111491.png"
            />
          </div>
        </div>
        <div>
          <h4>Home/ Book/ {bookData?.name}</h4>
          <div>{bookData?.category?.toUpperCase()}</div>
          <h1>{bookData?.name}</h1>
          <h5>Features</h5>
          <div>
            <ol>
              <li>
                {bookData?.description
                  ? bookData?.description
                  : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi unde minima. Laudantium numquam ipsam, optio quam modi aliquid nostrum iste odio maiores velit impedit nesciunt fuga placeat. Officiis, at!"}{" "}
              </li>
            </ol>
          </div>
          <div>
            <h3>QUANTITY</h3>
            <h3>PRICE TOTAL</h3>
          </div>
          <div>
            <div>
              <h3 style={{ cursor: "pointer" }} onClick={handleDecrement}>
                -
              </h3>
              <h2>{count}</h2>
              <h3 style={{ cursor: "pointer" }} onClick={handleIncrement}>
                +
              </h3>
            </div>
            <div>
              <h6>{bookData?.price} RS.</h6>
            </div>
          </div>
          <div>
            <button onClick={handleAddToCart}>ADD TO BAG</button>
            <button onClick={handleAddToWishList}>♡ SAVE</button>
          </div>
          <div>
            <h5>
              {" "}
              <span>✓</span> FREE SHIPPING
            </h5>
            <h5>
              <span>PRODUCT CODE: </span>RFKK1024
            </h5>
            <h5>
              <span>TAGS: </span>NEW ARRIVALS,EPICS
            </h5>
          </div>
        </div>
      </div>
      <div className="cartProductSection2">
        <div>
          <div>
            <h1>Details</h1>
            <img
              loading="lazy"
              src="https://img.icons8.com/ios/1x/minus-math.png"
            />
          </div>
          <div></div>
          <div className="cart-pro-detail">
            <div>
              <h1>ABOUT BOOK</h1>
              <p>
                {bookData?.description
                  ? bookData?.description
                  : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi unde minima. Laudantium numquam ipsam, optio quam modi aliquid nostrum iste odio maiores velit impedit nesciunt fuga placeat. Officiis, at!"}
              </p>
            </div>
            <div>
              <h1>SHIPPING</h1>
              <p>
                Please allow up to 2 business days (excluding weekends,
                holidays, and sale days) to process your order.
              </p>
              <h2>Processing Time + Shipping Time = Delivery Time</h2>
            </div>
          </div>
        </div>
        <div>
          <h1>Other information</h1>
          <img
            loading="lazy"
            src="https://img.icons8.com/ios/1x/plus-math.png"
          />
        </div>
        {/* <div>
          <h1>Another tab</h1>
          <img loading="lazy" src="https://img.icons8.com/ios/1x/plus-math.png" />
        </div> */}
      </div>
      <div className="cartProductSection3">
        <div>
          <h3>You May Also Like</h3>
        </div>
      </div>
      <div className="cartProductSection4">
        {" "}
        {allbookData.length &&
          allbookData.map((item, index) => {
            return (
              index < 6 && (
                <div
                  onClick={() =>
                    handleRedirect(`/book/${Object.keys(item)[0]}`)
                  }
                  className="cartProductSection4-image"
                >
                  <div>
                    <img loading="lazy" src={Object.values(item)[0].url} />
                  </div>
                  <div>{Object.values(item)[0].category}</div>
                  <div>{Object.values(item)[0].name}</div>
                  <div>{Object.values(item)[0].price} RS.</div>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
}
