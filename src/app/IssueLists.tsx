import React, { useEffect, useState } from "react";
import IssueList from "./issueLIst/page";
import { useAppContext } from "@/context";

export default function IssueLists() {
  const { customIssues, } = useAppContext();
  return (
    <ul className="col-end-3 col-span-2">
      {customIssues.map((issue, index) => (
        <IssueList key={index} issue={issue} index={index} />
      ))}
    </ul>
  );
}
