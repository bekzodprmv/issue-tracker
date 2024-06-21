import React, { useState, useEffect } from "react";
import { useAppContext } from "@/context";

type issueListProps = {
  issue: {
    title: string;
    date: Date;
    label: string;
    status: string;
    owner: string;
  };
  index: number;
};

export default function IssueList({ issue, index }: issueListProps) {
  const { colors } = useAppContext();
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

  const randomNum = Math.floor(Math.random() * colors.length);

  return (
    <li className="border border-gray-400 mb-5 py-3 px-5 rounded-sm">
      <div>
        <h2 className="text-yellow-300 text-2xl font-semibold mr-2">
          {issue.title}{" "}
          <span
            className="inline border rounded-2xl p-1 py-0.5 text-xl mx-0.5 font-semibold"
            style={{
              borderColor: colors[index],
              color: colors[index],
            }}
          >
            {issue.label}
          </span>
        </h2>
        <p
          className="
        text-xl text-gray-300"
        >
          #{index + 1} opened {timeDiff} hour ago by {issue.owner}
        </p>
      </div>
      <div></div>
    </li>
  );
}
