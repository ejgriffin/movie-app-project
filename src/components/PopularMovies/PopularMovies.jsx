import { React, useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

export default function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    axios(
      `${import.meta.env.VITE_API_BASE_URL}popular?api_key=${
        import.meta.env.VITE_APP_API_KEY
      }`
    )
      .then((res) => {
        console.log(res.data);
        setPopularMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="popular-cards-wrapper">
      {popularMovies.map((movie) => (
        <MovieCard
          key={movie?.id}
          movie={movie}
          width="200px"
          height="300px"
          borderRadius="16px"
          cardStyle="popular-card"
        />
      ))}
    </div>
  );
}
