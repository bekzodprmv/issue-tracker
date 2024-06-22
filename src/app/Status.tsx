import React from "react";
import { useAppContext } from "@/context";

export default function Status() {
  const { statuses, handleSelectChange } = useAppContext();

  return (
    <div>
      <h2>Status</h2>
      <select
        onChange={handleSelectChange}
        name="status"
        id="status"
        className="text-yellow-300 bg-transparent border  border-yellow-300 rounded-md w-full px-4 py-3 text-xl font-semibold mt-4 mb-2 "
      >
        <option value="">Select a status to filter</option>
        {statuses.map((status, index) => (
          <option className="bg-yellow-300" key={index} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}
