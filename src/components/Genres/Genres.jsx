import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

export default function Genres({ genreIds }) {
  const [genreItems, setGenreItems] = [];
  const genreBaseURL = "https://api.themoviedb.org/3/genre/movie/list";
  useEffect(() => {
   axios(`${genreBaseURL}?api_key=${import.meta.env.VITE_APP_API_KEY}`).then(res)=>{
    console.log(res.data.genres);
    setGenreItems(genreIds.map((item)=>res.data.genres.find((genre)=>genre.id===item)))
   }).catch
  }, []);
  return (
    <>
      <p>Genres:</p>
      {genreItems.map((item) => {
        <p key={item.id}>{item.name}</p>;
      })}
    </>
  );
}
