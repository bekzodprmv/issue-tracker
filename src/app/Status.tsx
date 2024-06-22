import React, { useState } from "react";
import { useAppContext } from "@/context";

export default function Status() {
  const { statuses, handleSelectChange } = useAppContext();

  return (
    <div className="">
      <h2>Status</h2>
      <select
        onChange={handleSelectChange}
        name="status"
        id="status"
        className="text-black"
      >
        <option value="">Select a status to filter</option>
        {statuses.map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}
