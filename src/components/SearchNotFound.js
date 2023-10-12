import React from "react";
import "../styles/searchnotfound.css";
import magnifyingGlassImage from "../assets/magnifying-glass.svg";

const SearchNotFound = () => {
  return (
    <div className="notfound-container">
      <img src={magnifyingGlassImage} alt="" />
      <h1>Oops…</h1>
      <p>Something went wrong on our end. </p>
      <p>Try to refresh the page.</p>
    </div>
  );
};

export default SearchNotFound;
