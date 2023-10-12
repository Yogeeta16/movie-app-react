import React, { useState } from "react";
import "../styles/cards.css";
import MovieDetailsDialog from "./MovieDetailsDialog";
import { useNavigate } from "react-router-dom";
const Cards = ({ movieData }) => {
  const [flags, setFlags] = useState({}); // Create a state object to store flags for each movie
  const navigate = useNavigate();
  // Function to toggle the flag for a specific movie
  function toggleFlag(movieId) {
    setFlags((prevFlags) => ({
      ...prevFlags,
      [movieId]: !prevFlags[movieId],
    }));
    navigate(`/movie/:${movieId}`);
    console.log(movieId);
  }

  return (
    <>
      <div>
        <div className="cards-container">
          {movieData.map((movie) => (
            <div key={movie.imdbID} className="card">
              <div
                className="movie-poster"
                onClick={() => toggleFlag(movie.imdbID)}
              >
                <img src={movie.Poster} alt={movie.Title} />
              </div>

              <div className="title-year">
                <p className="movie-title">{movie.Title}</p>
                <p className="movie-year">({movie.Year})</p>
              </div>
              {/* {flags[movie.imdbID] && <MovieDetailsDialog />} */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
