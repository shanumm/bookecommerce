import React from "react";
import InputField from "../components/InputField";
import { shippingAddress } from "../inputConstant";
import SummaryBox from "./summaryBox";
import "../modules/Styles/shipping.css";
export default function Shipping() {
  return (
    <div className="ShippingContainer">
      <div className="ShippingContentWrapper">
        <div className="ShippingContentContainer">
          <div className="ShippingContentContainerHeading">
            Shipping Address
          </div>
          {shippingAddress.map((field) => (
            <InputField data={field} />
          ))}
          <div
            className="ShippingContentContainerHeading"
            style={{
              fontSize: "22px",
              fontWeight: "500",
              marginTop: "32px",
            }}
          ></div>
          <div style={{ paddingLeft: "0px" }} className="ShippingButtons">
            <button>Login</button>
          </div>
          <div className="ShippingContentContainerHeading">Shipping Method</div>
          <div className="shippingMethod">
            <div></div>
            <div>
              <div>Rs. 5.00</div>
              <div>Fixed</div>
              <div>Flat Rate</div>
            </div>
            <div></div>
            <div>
              <div>Rs. 10.00</div>
              <div>Table Rate</div>
              <div>Best Way</div>
            </div>
          </div>

          <div style={{ paddingLeft: "0px" }} className="ShippingButtons">
            <button>Next</button>
          </div>
        </div>
        <div className="Shippingsummary">
          <SummaryBox />
        </div>
      </div>
    </div>
  );
}
