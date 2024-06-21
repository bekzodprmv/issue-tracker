import React, { useEffect, useState } from "react";
import IssueList from "./issueLIst/page";

type issueListProps = {
  issues: { title: string; comment: string; date: Date }[];
};

export default function IssueLists({ issues }: issueListProps) {
  return (
    <ul>
      {issues.map((issue, index) => (
        <IssueList key={index} issue={issue} />
      ))}
    </ul>
  );
}
