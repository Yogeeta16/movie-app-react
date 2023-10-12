import React, { useState, useEffect } from "react";
import "../styles/searchbar.css";
import Loader from "./Loader";

import SearchNotFound from "./SearchNotFound";

const SearchBar = ({ setMovieData }) => {
  const [apiKey, setApiKey] = useState("7b6214f5");
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false); // Added state for no results

  useEffect(() => {
    if (searchKey.length > 2) {
      fetchAndRenderData();
    }
  }, [searchKey]);

  // ...

  async function fetchAndRenderData() {
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchKey}`;
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      //   console.log(data);

      if (data && data.Search) {
        setMovieData(data.Search);
        setNoResults(false); // Reset noResults state if there are results
      } else {
        // If data.Response is false, display an error message
        console.log("Something went wrong");
        setMovieData([]); // Clear the movieData in App.js
        setNoResults(true); // Set noResults state to true
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  // ...
  function handleOnChange(e) {
    setSearchKey(e.target.value);
  }

  return (
    <div>
      <header>
        <nav>
          <h1>Find movies</h1>
          <input
            type="text"
            id="search_input"
            className="searchbox"
            placeholder="E.g. Harry Potter"
            onChange={handleOnChange}
          />
        </nav>
      </header>
      {isLoading && <Loader />}
      {noResults && <SearchNotFound />}
      {/* Conditionally render SearchNotFound */}
    </div>
  );
};

export default SearchBar;
