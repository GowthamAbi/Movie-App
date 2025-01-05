import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { fetchMovies } from "../services/api";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setError(null);
      const data = await fetchMovies(query, type, page);
      if (data.Response === "False") throw new Error(data.Error);
      setMovies(data.Search || []);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar
        query={query}
        setQuery={setQuery}
        type={type}
        setType={setType}
        onSearch={handleSearch}
      />
      {error && <div className="text-red-500">{error}</div>}
      <MovieList movies={movies} />
      <Pagination currentPage={page} setPage={setPage} onPageChange={handleSearch} />
    </div>
  );
}

export default HomePage;
