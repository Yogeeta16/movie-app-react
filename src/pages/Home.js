import React, { useState } from "react";

import Cards from "./../components/Cards";
import SearchNotFound from "./../components/SearchNotFound"; // Import the SearchNotFound component
import SearchBar from "./../components/SearchBar";

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [noResults, setNoResults] = useState(false); // State to track if there are no results
  return (
    <div>
      <SearchBar setMovieData={setMovieData} setNoResults={setNoResults} />
      {/* Pass setNoResults as a prop */}
      {/* Conditionally render Cards or SearchNotFound based on noResults state */}
      {noResults ? <SearchNotFound /> : <Cards movieData={movieData} />}
    </div>
  );
};

export default Home;
