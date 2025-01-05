const API_KEY = "7caf170";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query, type, page) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${query}&type=${type}&page=${page}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch movies");
  return response.json();
};

export const fetchMovieDetails = async (id) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${id}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch movie details");
  return response.json();
};