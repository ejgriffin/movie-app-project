import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

export default function Genres(props) {
  const { genreIds = [] } = props;
  const [genreItems, setGenreItems] = useState([]);
  const genreBaseURL = "https://api.themoviedb.org/3/genre/movie/list";

  useEffect(() => {
    axios(`${genreBaseURL}?api_key=${import.meta.env.VITE_APP_API_KEY}`)
      .then((res) => {
        // console.log(res.data.genres);
        setGenreItems(
          genreIds.map((item) =>
            res.data.genres.find((genre) => genre.id === item)
          )
        );
      })
      .catch((err) => console.log(err));
  }, [genreIds]);

  return (
    <>
      <p>Genres :&nbsp;</p>
      {genreItems.map((item, index) => (
        <p key={item.id}>
          {item.name}
          {index === genreItems.length - 1 ? "" : ",\u00A0"}
        </p>
      ))}
    </>
  );
}
