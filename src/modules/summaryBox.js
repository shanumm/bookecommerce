import React from "react";
import "./Styles/summaryBox.css";
export default function summaryBox() {
  return (
    <div className="summaryBox">
      <div className="summaryBox_container">
        <div className="summaryBox_container_title">Order Summary</div>
        <div className="summaryBox_container_sub">
          <div>1 Item in Cart</div>
          <div>
            <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/1x/external-down-arrows-those-icons-lineal-those-icons-1.png" />
          </div>
        </div>
        <div className="summaryBox_line"></div>
        <div className="summaryBox_container_items">
          <div>
            <div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div>
                <h2>Book 1</h2>
                <h3>QTY:1</h3>
                <h4>VIEW DETAILS</h4>
              </div>
            </div>
            <div>129,00 EUR</div>
          </div>
          <div>
            <div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div>
                <h2>Book 2</h2>
                <h3>QTY:1</h3>
                <h4>VIEW DETAILS</h4>
              </div>
            </div>
            <div>129,00 EUR</div>
          </div>
        </div>
      </div>
    </div>
  );
}
