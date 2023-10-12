import React, { useState, useEffect } from "react";
import "../styles/searchbar.css";
import Loader from "./Loader";
import SearchNotFound from "./SearchNotFound";

const SearchBar = ({ setMovieData }) => {
  const [apiKey, setApiKey] = useState("7b6214f5");
  const [searchKey, setSearchKey] = useState("harry");
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [debouncedSearchKey, setDebouncedSearchKey] = useState(""); // Added debounced search key

  useEffect(() => {
    // Use the debouncedSearchKey for API requests
    if (debouncedSearchKey.length > 2) {
      fetchAndRenderData();
    }
  }, [debouncedSearchKey]);

  useEffect(() => {
    // Update debouncedSearchKey after a delay
    const debounceTimer = setTimeout(() => {
      setDebouncedSearchKey(searchKey);
    }, 300); // Adjust the delay as needed

    return () => {
      // Clear the timeout if searchKey changes before the delay is reached
      clearTimeout(debounceTimer);
    };
  }, [searchKey]);

  async function fetchAndRenderData() {
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${debouncedSearchKey}`;
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && data.Search) {
        setMovieData(data.Search);
        setNoResults(false);
      } else {
        console.log("Something went wrong");
        setMovieData([]);
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

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
    </div>
  );
};

export default SearchBar;
