import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import "../styles/MovieDetailsDialog.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "./../components/SearchBar";
const MovieDetailsDialog = () => {
  const { id } = useParams();
  const cleanedId = id.replace(":", "");

  // console.log(id);
  const [apiKey, setApiKey] = useState("7b6214f5");
  const [movie, setdata] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&i=${cleanedId}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const resData = await response.json();

        setdata(resData);
      } catch (error) {
        // Handle the error
        console.error("An error occurred:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Specify the dependency array
  function onClose() {
    navigate(`/`);
  }
  console.log(movie);

  return (
    <>
      <SearchBar />

      <div className="movie-details-dialog">
        <div className="movie-card">
          <div className="s-card">
            <button className="mobile-close-btn " onClick={onClose}>
              X
            </button>

            <div
              className="image-container"
              style={{ backgroundImage: `url(${movie.Poster})` }}
            >
              {/* <img src={movie.Poster}></img> */}

              <p>{movie.Title}</p>
              <div className="sub-content">
                <p>{movie.Released}</p>
                <p>
                  <span className="img">&#11088; </span>
                  {movie.imdbRating} / 10
                </p>
              </div>
            </div>
            <div className="content">
              <div className="desktop-view">
                <p>
                  <h1>{movie.Title}</h1>
                </p>
                <div className="sub-content">
                  <p>{movie.Released}</p>
                  <p>
                    <span className="img">&#11088; </span>
                    {movie.imdbRating} / 10
                  </p>
                </div>
              </div>
              <div>
                <ul>
                  {movie.Genre &&
                    movie.Genre.split(", ").map((genre, index) => (
                      <li key={index}>{genre}</li>
                    ))}
                </ul>
              </div>

              {/* genre add nhi hua h abhi */}
              {/* <ul>
            {movie.Genre.split(", ")
              .map((genre) => `<li>{genre}</li>`)
              .join("")}
          </ul> */}

              <p>{movie.Plot}</p>
            </div>
            <button className="desktop-close-btn" onClick={onClose}>
              X
            </button>
          </div>
        </div>
      </div>
      {/* // <div>gdfgdf</div> */}
    </>
  );
};

export default MovieDetailsDialog;
