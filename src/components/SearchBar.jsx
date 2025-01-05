import React from "react";

function SearchBar({ query, setQuery, type, setType, onSearch }) {
  return (
    <div className="flex space-x-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="border p-2 flex-grow"
      />
      <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2">
        <option value="all">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>
      <button onClick={onSearch} className="bg-blue-500 text-white p-2">Search</button>
    </div>
  );
}

export default SearchBar;
