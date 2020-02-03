import React from "react";
import "../components/Movie.css";

function Detail({ history, location }) {
  if (location.state === undefined) {
    history.push("/");
  }
  return (
    <div className="movie">
      <img
        src={location.state.oster}
        alt={location.state.title}
        title={location.state.title}
      />
      <div className="movie__data">
        <h3 className="movie__title">{location.state.title}</h3>
        <h5 className="movie__year">{location.state.year}</h5>
        <ul className="movie__genres">
          {location.state.genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">
          {location.state.summary.slice(0, 180)}...
        </p>
      </div>
    </div>
  );
}

export default Detail;
