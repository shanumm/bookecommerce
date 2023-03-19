import React from "react";
import "./Styles/nav.css";
import { Link } from "react-router-dom";
import NDLogo from "../Images/NDLogo.png";
export default function Nav() {
  return (
    <div className="nav">
      <div>
        <img src={NDLogo} />
      </div>
      <div className="navLinks">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="shop">
            <li>Shop</li>
          </Link>
          <li>Blog</li>
          <li>Sale</li>
          <Link to="dashboard">
            <li>Dashboard</li>
          </Link>
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
        <div>
          <Link to="signup">Create An Account</Link>
        </div>
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
