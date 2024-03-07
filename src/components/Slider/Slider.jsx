import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Genres from "../Genres/Genres";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./Slider.css";
import StarRatings from "react-star-ratings";

export default function Slider() {
  const [upcoming, setUpcoming] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    axios(
      `${import.meta.env.VITE_API_BASE_URL}upcoming?api_key=${
        import.meta.env.VITE_APP_API_KEY
      }`
    )
      .then((res) => {
        setUpcoming(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const sliderStyle = {
    backgroundImage: `url(${import.meta.env.VITE_API_BASE_IMAGE_URL}${
      upcoming[currentMovieIndex]?.backdrop_path
    })`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    width: "100%",
    position: "relative",
    zIndex: 0,
  };

  function handleNextBtnClick() {
    if (currentMovieIndex === upcoming.length - 1) {
      setCurrentMovieIndex(0);
      return;
    }
    setCurrentMovieIndex(currentMovieIndex + 1);
  }

  function handlePrevBtnClick() {
    if (currentMovieIndex === 0) {
      setCurrentMovieIndex(upcoming.length - 1);
      return;
    }
    setCurrentMovieIndex(currentMovieIndex - 1);
  }

  return (
    <div style={sliderStyle}>
      <div className="slider-overlay"></div>
      <MdKeyboardArrowLeft
        className="left-arrow"
        onClick={handlePrevBtnClick}
      />
      <MdKeyboardArrowRight
        className="right-arrow"
        onClick={handleNextBtnClick}
      />
      <div className="slider-info">
        <h1>{upcoming[currentMovieIndex]?.title}</h1>
        <p className="slider-description">
          {upcoming[currentMovieIndex]?.overview.slice(0, 130)}...
        </p>
        <div className="genre-container">
          <Genres genreIds={upcoming[currentMovieIndex]?.genre_ids} />
        </div>

        <p>Release Date : {upcoming[currentMovieIndex]?.release_date}</p>
        <div className="rating">
          {upcoming[currentMovieIndex] && (
            <StarRatings
              starRatedColor="red"
              numberOfStars={5}
              rating={upcoming[currentMovieIndex]?.vote_average / 2}
              starDimension="15px"
              starSpacing="1px"
              name="rating"
            />
          )}
        </div>
        <Link to={"/details"} className="see-details">
          See Details
        </Link>
      </div>
    </div>
  );
}
