import React, { useEffect, useState } from "react";
import "./Styles/nav.css";
import { Link, useNavigate } from "react-router-dom";
import NDLogo from "../Images/NDLogo.png";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export default function Nav() {
  const [isUser, setIsUser] = useState(false);
  const navigation = useNavigate();

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setIsUser(true);
      // ...
    } else {
      // User is signed out
      // ...
      setIsUser(false);
    }
  });

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsUser(false);
      })
      .catch((error) => {
        setIsUser(true);
      });
  };

  const handleSignIn = () => {
    navigation("/signin");
  };

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
          {isUser && (
            <Link to="dashboard">
              <li>Dashboard</li>
            </Link>
          )}
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
        {isUser ? (
          <div onClick={handleSignOut}>Sign Out</div>
        ) : (
          <div onClick={handleSignIn}>Sign In</div>
        )}
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
