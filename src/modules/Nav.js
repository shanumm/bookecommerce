import React, { useEffect, useState } from "react";
import "./Styles/nav.css";
import { Link, useNavigate, useHistory } from "react-router-dom";
import NDLogo from "../Images/NDLogo.png";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export default function Nav() {
  const [isUser, setIsUser] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigation = useNavigate();

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUserEmail(user.email);
        setIsUser(true);
        // ...
      } else {
        // User is signed out
        // ...
        setIsUser(false);
      }
    });
  }, []);

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
          {userEmail === "test2@gmail.com" && (
            <Link to="/addbook">
              <li>Add Book</li>
            </Link>
          )}
          {isUser && (
            <Link to="dashboard">
              <li>Dashboard</li>
            </Link>
          )}
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="navRightSide">
        {isUser ? (
          <div style={{ cursor: "pointer" }} onClick={handleSignOut}>
            Sign Out
          </div>
        ) : (
          <div style={{ cursor: "pointer" }} onClick={handleSignIn}>
            Sign In
          </div>
        )}
        <div style={{ cursor: "pointer" }}>
          {isUser ? null : <Link to="signup">Create An Account</Link>}
        </div>
        <div>
          <div
            onClick={() =>
              navigation("/dashboard", {
                state: {
                  setNav: 5,
                },
              })
            }
          >
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
