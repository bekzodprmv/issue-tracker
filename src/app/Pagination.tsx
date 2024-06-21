import React from "react";
import { useAppContext } from "@/context";

function Pagination() {
  const { prevPage, currentPage, nextPage, numbers, changePage } =
    useAppContext();

  return (
    <div className="flex justify-between col-span-2">
      <button onClick={prevPage} className="btn--big">
        Previous
      </button>
      <ul className="flex gap-3 items-center">
        {numbers.map((n, i) => (
          <li key={i}>
            <button
              onClick={() => {
                changePage(n);
              }}
              className={`btn ${currentPage === n ? "active" : ""}`}
            >
              {n}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={nextPage} className="btn--big">
        Next
      </button>
    </div>
  );
}

export default Pagination;
