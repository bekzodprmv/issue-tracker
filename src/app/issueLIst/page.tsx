import React, { useState, useEffect, use } from "react";

type issueListProps = {
  issue: { title: string; comment: string; date: Date };
};

export default function IssueList({ issue }: issueListProps) {
  const [timeDiff, setTimeDiff] = useState(0);
  useEffect(() => {
    function calculateSpentTime(date: Date) {
      const now = new Date();
      const then = date;
      const diff = now.getTime() - then.getTime();
      const hours = Math.floor(diff / 3600000);
      // const minutes = Math.floor((diff % 3600000) / 60000);
      // const seconds = Math.floor((diff % 60000) / 1000);

      setTimeDiff(hours);
    }
    setInterval(() => {
      calculateSpentTime(issue.date);
    }, 3600000);
  }, []);

  return (
    <li>
      <h3>{issue.title}</h3>
      <p>{issue.comment}</p>
      <p>{timeDiff}</p>
    </li>
  );
}
