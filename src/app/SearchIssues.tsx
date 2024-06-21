import React from "react";

export default function SearchIssues() {
  return (
    <div className="col-start-1  col-span-2 row-start-1">
      <h2 className="font-semibold ">Search issues</h2>
      <form>
        <input
          className="border rounded-md border-gray-500 bg-transparent w-full p-2 mt-2"
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  );
}
