import React from "react";
import "./Styles/nav.css"
export default function Nav() {
  return (
    <div className="nav">
      <div>Logo</div>
      <div className="navLinks">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Sale</li>
          <li>Contact Us</li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png"
              alt=""
            />
            Search
          </li>
        </ul>
      </div>
      <div className="navRightSide">
        <div>Sign In</div>
        <div>Create An Account</div>
        <div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2169/2169842.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
