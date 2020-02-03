import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import loading from "../loading.gif";
import "./Home.css";

function Home() {
  //const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState("");

  async function getMovies() {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
      setMovies(movies);
      console.log(movies);
    } catch (err) {
      console.log("영화목록을 불러오는 도중 에러 발생: ", err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  if (movies === "") {
    return (
      <div className="loader">
        <img className="loader_img" src={loading} alt="loading" />
      </div>
    );
  } else {
    return (
      <section className="movie_container">
        <div className="movies">
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Home;
