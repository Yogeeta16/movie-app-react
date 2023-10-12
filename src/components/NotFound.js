import React from "react";
import "../styles/searchnotfound.css";
import surprisedImage from "../assets/surprised.svg";
const NotFound = () => {
  return (
    <div className="notfound-container">
      <img src={surprisedImage} alt="" />
      <h1>Oops…</h1>
      <p>Something went wrong on our end. </p>
      <p>Try to refresh the page.</p>
    </div>
  );
};

export default NotFound;
