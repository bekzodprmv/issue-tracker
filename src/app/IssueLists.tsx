import React, { useEffect, useState } from "react";
import IssueList from "./issueLIst/page";
import { useAppContext } from "@/context";

export default function IssueLists() {
  const { records } = useAppContext();
  return (
    <>
      <h2 className="font-semibold">Issues List</h2>
      <ul className="col-end-3 col-span-2">
        {records.map((issue, index) => (
          <IssueList key={index} issue={issue} index={index} />
        ))}
      </ul>
    </>
  );
}
