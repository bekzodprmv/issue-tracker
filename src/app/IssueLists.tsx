import React from "react";
import IssueList from "./issueLIst/page";
import { useAppContext } from "@/context";

export default function IssueLists() {
  const { records, text, issues } = useAppContext();
  return (
    <>
      <h2 className="font-semibold">Issues List</h2>
      <ul className="col-end-3 col-span-2">
        {text &&
          issues
            .filter((issue) => {
              return issue.title.toLowerCase().includes(text.toLowerCase());
            })
            .map((issue, index) => (
              <IssueList key={index} issue={issue} index={index} />
            ))}
        {text.trim().length === 0 &&
          records.map((issue, index) => (
            <IssueList key={index} issue={issue} index={index} />
          ))}
      </ul>
    </>
  );
}
