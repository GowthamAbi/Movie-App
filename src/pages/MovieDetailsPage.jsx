import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setError(null);
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getMovieDetails();
  }, [id]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <ul>
        <li>Year: {movie.Year}</li>
        <li>Genre: {movie.Genre}</li>
        <li>Director: {movie.Director}</li>
      </ul>
    </div>
  );
}

export default MovieDetailsPage;
