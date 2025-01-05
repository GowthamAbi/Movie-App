import React from "react";

function Pagination({ currentPage, setPage, onPageChange }) {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => {
          if (currentPage > 1) {
            setPage(currentPage - 1);
            onPageChange();
          }
        }}
        className="border p-2 mx-1"
      >
        Previous
      </button>
      <span className="p-2">Page {currentPage}</span>
      <button
        onClick={() => {
          setPage(currentPage + 1);
          onPageChange();
        }}
        className="border p-2 mx-1"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
