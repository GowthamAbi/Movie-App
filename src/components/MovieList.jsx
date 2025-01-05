import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
