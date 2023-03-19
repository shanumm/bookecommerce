import React from "react";
import "../modules/Styles/inputField.css";
export default function InputField({ data }) {
  return (
    <div className="inputField">
      <div>
        <div>{data?.heading}</div>
        <input placeholder={data?.placeholder} type="text" />
      </div>
    </div>
  );
}
