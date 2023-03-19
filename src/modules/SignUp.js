import React from "react";
import "./Styles/signup.css";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        addData();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const addData = async () => {
    try {
      await setDoc(doc(db, "users", email), {
        first: firstname,
        last: lastname,
        email: email,
      });
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="signupContainer">
      <div className="signupContainerHeading">Create New Customer Account</div>
      <div className="signUpContent">
        <div className="signUpContentContainer">
          <div>Personal Information</div>
          <div className="signupContentInput">
            <div>
              <div>First name</div>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="John"
                type="text"
              />
            </div>
            <div>
              <div>Last Name</div>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Watson"
                type="text"
              />
            </div>
            <div>
              <div>Email</div>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="daisy.watson@example.com"
                type="text"
              />
            </div>
            <div>
              <div>Password</div>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="password"
                type="text"
              />
            </div>
            <div>
              <div>Confirm Password</div>
              <input placeholder="password" type="text" />
            </div>
          </div>
        </div>
        <div className="signupButtons">
          <button onClick={handleSignUp}>Create Account</button>
          <button>Back</button>
        </div>
      </div>
    </div>
  );
}
