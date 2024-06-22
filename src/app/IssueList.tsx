import React, { useState, useEffect } from "react";
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
import { PiWarningCircle } from "react-icons/pi";
import Image from "next/image";

type issueListProps = {
  issue: {
    title: string;
    date: Date;
    comment: string;
    label: string;
    status: string;
    owner: string;
    imgLink?: string | any;
  };
  index: number;
};

export default function IssueList({ issue, index }: issueListProps) {
  const router = useRouter();
  const { colors, setSelectedIssue } = useAppContext();
  const [timeDiff, setTimeDiff] = useState({ time: 0, unit: "seconds" });

  let color: string = "";
  if (issue.label === "bug") {
    color = colors[0];
  } else if (issue.label === "feature") {
    color = colors[1];
  } else if (issue.label === "enhancement") {
    color = colors[2];
  } else if (issue.label === "question") {
    color = colors[3];
  } else if (issue.label === "help") {
    color = colors[4];
  } else if (issue.label === "wontfix") {
    color = colors[5];
  } else if (issue.label === "duplicate") {
    color = colors[6];
  }

  useEffect(() => {
    function calculateSpentTime(date: Date) {
      const now = new Date();
      const then = date;
      const diff = now.getTime() - then.getTime();
      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);

      if (hours > 0) {
        setTimeDiff({ time: hours, unit: "hours" });
      } else if (minutes > 0) {
        setTimeDiff({ time: minutes, unit: "minutes" });
      } else {
        setTimeDiff({ time: seconds, unit: "seconds" });
      }
    }
    setInterval(() => {
      calculateSpentTime(issue.date);
    }, 10000);
  }, []);

  return (
    <li className="border flex hover:bg-[#ffffff1a] gap-3 items-center border-gray-400 mb-5 py-3 px-5 rounded-sm">
      <PiWarningCircle className="basis-6" size={24} color="green" />
      <div>
        <h2
          onClick={() => {
            setSelectedIssue({
              title: issue.title,
              comment: issue.comment,
              label: issue.label,
              status: issue.status,
              owner: issue.owner,
              date: issue.date,
            });
            router.push("/issue");
          }}
          className="text-yellow-300 cursor-pointer text-lg font-semibold mr-2"
        >
          {issue.title}
          <span
            className=" border rounded-2xl p-1 py-0.5 text-sm ml-3 font-semibold"
            style={{
              borderColor: color,
              color: color,
            }}
          >
            {issue.label}
          </span>
        </h2>
        <p
          className="
        text-lg text-gray-300"
        >
          #{index + 1} opened {timeDiff.time} {timeDiff.unit} ago by{" "}
          {issue.owner}
        </p>
      </div>
      <Image
        src={issue.imgLink}
        alt="avatar"
        width={50}
        height={50}
        className="rounded-full ml-auto"
      />
    </li>
  );
}
