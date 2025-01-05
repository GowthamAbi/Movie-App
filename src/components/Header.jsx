
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Movies Search App</h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
      </nav>
    </header>
  );
}

export default Header;