import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="border p-2">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold mt-2">{movie.Title}</h2>
      <p>{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
