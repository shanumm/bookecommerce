import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import Book from "../components/Book";
import "./Styles/dashboard.css";
import { accountInfo, addressFields, contactInfo } from "../inputConstant";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState(1);
  const [isUser, setIsUser] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(true);
      } else {
        setIsUser(false);
        navigation("/");
      }
    });
  }, []);

  return isUser ? (
    <div className="dashboardContainer">
      <div className="dashboardContainerHeading">
        {activeNav === 1 && "My Dashboard"}
        {activeNav === 3 && "Add New Address"}
      </div>
      <div className="dashboardContentWrapper">
        <div className="dashboardNav">
          <div>
            <div
              onClick={() => setActiveNav(1)}
              className={activeNav == 1 ? "dashboardActive" : ""}
            >
              Account Dashboard
            </div>
            <div
              onClick={() => setActiveNav(2)}
              className={activeNav == 2 ? "dashboardActive" : ""}
            >
              Account Information
            </div>
            <div
              onClick={() => setActiveNav(3)}
              className={activeNav == 3 ? "dashboardActive" : ""}
            >
              Address Book
            </div>
            <div
              onClick={() => setActiveNav(4)}
              className={activeNav == 4 ? "dashboardActive" : ""}
            >
              My Orders
            </div>
            <div
              onClick={() => setActiveNav(5)}
              className={activeNav == 5 ? "dashboardActive" : ""}
            >
              My Wishlist
            </div>
          </div>
        </div>
        {activeNav === 1 && (
          <div className="dashboardContent">
            <div className="dashboardContentContainer">
              <div className="dashboardContentContainerHeading">
                Account Information
              </div>
              <div className="dashboardCard">
                <div>Contact Information</div>
                <div>Ram Sharma ExampeAdress@gmail.com</div>
                <button>Edit</button>
              </div>
              <div className="dashboardContentContainerHeading">
                Address Book
              </div>
              <div className="dashboardCardContainer">
                <div className="dashboardCard">
                  <div>Default Billing Address</div>
                  <div>You have not set a default billing address.</div>
                  <button>Edit</button>
                </div>
                <div className="dashboardCard">
                  <div>Default Shipping Address</div>
                  <div>You have not set a default shipping address.</div>
                  <button>Edit</button>
                </div>
              </div>
              <div
                style={{ paddingLeft: "0px", marginTop: "20px" }}
                className="dashboardButtons"
              >
                <button>Save Address</button>
              </div>
            </div>
          </div>
        )}
        {activeNav === 2 && (
          <div className="dashboardContent">
            <div className="dashboardContentContainer">
              <div className="dashboardContentContainerHeading">
                Account Information
              </div>
              {accountInfo.map((field) => (
                <InputField data={field} />
              ))}
              <div style={{ paddingLeft: "0px" }} className="dashboardButtons">
                <button>Save</button>
              </div>
            </div>
          </div>
        )}
        {activeNav === 3 && (
          <div className="dashboardContent">
            <div className="dashboardContentContainer">
              <div className="dashboardContentContainerHeading">
                Contact Information
              </div>
              {contactInfo.map((field) => (
                <InputField data={field} />
              ))}
              <div
                className="dashboardContentContainerHeading"
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  marginTop: "32px",
                }}
              >
                Address
              </div>
              {addressFields.map((field) => (
                <InputField data={field} />
              ))}
              <div style={{ paddingLeft: "0px" }} className="dashboardButtons">
                <button>Save</button>
              </div>
            </div>
          </div>
        )}
        {activeNav === 5 && (
          <div className="myWishList">
            <div>
              <Book index={0} />
              <div style={{ width: "100%" }} className="dashboardButtons">
                <button style={{ width: "60%" }}>Add To Cart</button>
                <button style={{ marginLeft: "4px" }}>Remove</button>
              </div>
            </div>
            <div>
              <Book index={1} />
              <div style={{ width: "100%" }} className="dashboardButtons">
                <button style={{ width: "60%" }}>Add To Cart</button>
                <button style={{ marginLeft: "4px" }}>Remove</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null;
}
