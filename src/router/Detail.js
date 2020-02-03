import React from "react";
import "./Detail.css";

function Detail({ history, location }) {
  const { poster, title, summary, year } = location.state;
  if (location.state === undefined) {
    history.push("/");
  }
  return (
    <div className="about__container">
      <img src={poster} alt={title} title={title} />
      <span>{summary}</span>
      <span>
        {title}, {year}
      </span>
    </div>
  );
}

export default Detail;
