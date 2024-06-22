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
  const {
    colors,
    setSelectedIssue,
    calculateSpentTime,
    timeDiff,
    defineColor,
  } = useAppContext();

  useEffect(() => {
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
              borderColor: defineColor(issue.label),
              color: defineColor(issue.label),
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
