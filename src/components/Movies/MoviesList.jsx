import React from "react";
import MoviesCard from "./MoviesCard";

export default function MoviesList() {
  let arrayFilms = ["Betman", "Spiderman", "Joker", "Samurai"];
  return (
    <div id="movies" className="movies anchor">
      {arrayFilms.map((value, index) => (
        <MoviesCard key={index} name={value} />
      ))}
    </div>
  );
}
