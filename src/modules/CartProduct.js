import React, { useState } from "react";
import "./Styles/cartProduct.css";
import EnglishImage from "../Images/EnglishImage.png";
export default function CartProduct() {
  const [myprice, setmyprice] = useState(new Array(5).fill(null));
  return (
    <div className="CartProduct">
      <div className="cartProductSection1">
        <div>
          <div>
            <img src={EnglishImage} />
          </div>
          <div>
            <h4>SHARE: </h4>
            <img src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png" />
            <img src="https://cdn-icons-png.flaticon.com/128/3128/3128212.png" />
            <img src="https://cdn-icons-png.flaticon.com/128/733/733622.png" />
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111491.png" />
          </div>
        </div>
        <div>
          <h4>Home/ Womens Dress/ Angels malu</h4>
          <div>FENDI</div>
          <h1>RAMAYANA</h1>
          <h5>SELECT COVER</h5>
          <div>
            <div>
              <input
                type="checkbox"
                id="cartproduct1"
                name="cartproduct1"
                value="cartproduct1"
              />
              HARD
            </div>
            <div>
              <input
                type="checkbox"
                id="cartproduct2"
                name="cartproduct2"
                value="cartproduct2"
              />
              SOFT
            </div>
          </div>
          <div>
            <h3>QUANTITY</h3>
            <h3>PRICE TOTAL</h3>
          </div>
          <div>
            <div>
              <h3>-</h3>
              <h2>1</h2>
              <h3>+</h3>
            </div>
            <div>
              <h6>200.00 RS.</h6>
            </div>
          </div>
          <div>
            <button>ADD TO BAG</button>
            <button>♡ SAVE</button>
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
            <img src="https://img.icons8.com/ios/1x/minus-math.png" />
          </div>
          <div></div>
          <div>
            <div>
              <h1>ABOUT PRODUCT</h1>
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
          <img src="https://img.icons8.com/ios/1x/plus-math.png" />
        </div>
        <div>
          <h1>Another tab</h1>
          <img src="https://img.icons8.com/ios/1x/plus-math.png" />
        </div>
      </div>
      <div className="cartProductSection3">
        <div>
          <h3>You May Also Like</h3>
        </div>
        <div>
          <div>
            <img src="https://img.icons8.com/ios-glyphs/1x/chevron-left.png" />
          </div>
          <div>
            <img src="https://img.icons8.com/ios-glyphs/1x/chevron-right.png" />
          </div>
        </div>
      </div>
      <div className="cartProductSection4">
        {" "}
        {myprice.map((item, index) => (
          <div className="cartProductSection4-image">
            <div>
              <img src={EnglishImage} />
            </div>
            <div>TOP women</div>
            <div>Angels malu zip jeans slim black used</div>
            <div>139,00 EUR</div>
          </div>
        ))}
      </div>
    </div>
  );
}
