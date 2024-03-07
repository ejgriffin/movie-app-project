import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export default function MovieCard({
  movie,
  height,
  width,
  borderRadius,
  cardStyle,
}) {
  const cardStyleObj = {
    backgroundImage: `url(${import.meta.env.VITE_API_BASE_IMAGE_URL}${
      movie?.poster_path
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    height,
    width,
    borderRadius,
    boxShadow: "0px 0px 10px 0px rgba(118,118,118,0.75)",
  };

  return (
    <Link to={`/details/${movie?.id}`} className={cardStyle}>
      <div style={cardStyleObj}>
        <div className="movie-info-top">
          {movie && (
            <StarRatings
              rating={movie?.vote_average / 2}
              starRatedColor="black"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="1px"
            />
          )}
        </div>
        <div className="movie-info-bottom">
          <p>{movie?.title}</p>
          <p>Rating : {Math.round(movie?.vote_average / 2)}/5</p>
        </div>
      </div>
    </Link>
  );
}
