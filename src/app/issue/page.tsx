"use client";
import React from "react";
import { BsGearFill } from "react-icons/bs";
import { useAppContext } from "@/context";
import Status from "../Status";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { selectedIssue, colors, issues } = useAppContext();

  let color: string = "";
  if (selectedIssue.label === "bug") {
    color = colors[0];
  } else if (selectedIssue.label === "feature") {
    color = colors[1];
  } else if (selectedIssue.label === "enhancement") {
    color = colors[2];
  } else if (selectedIssue.label === "question") {
    color = colors[3];
  } else if (selectedIssue.label === "help") {
    color = colors[4];
  } else if (selectedIssue.label === "wontfix") {
    color = colors[5];
  } else if (selectedIssue.label === "duplicate") {
    color = colors[6];
  }

  return (
    <div className="border-t-[6px] border-t-yellow-400 ">
      <div className="bg-black w-3/4 mx-auto mt-16">
        <Link href="./" className="text-yellow-300 underline text-lg">
          Back to issue list
        </Link>
        <h1 className="text-center mb-3 text-4xl font-semibold my-24">
          Issue Tracker
        </h1>
        <div className="mb-4 border-b-[1px] pb-4">
          <h2 className="text-2xl font-semibold mb-3">{selectedIssue.title}</h2>
          <div className="flex items-center gap-3 text-[#aaaaaa]">
            <p
              className="text-sm py-2 px-3 text-white rounded-3xl"
              style={{ backgroundColor: color }}
            >
              {selectedIssue.status}
            </p>
            <p>
              <strong>{selectedIssue.owner}</strong>
              <span> opened this issue 6 month ago</span>
            </p>
            <p>62 comments</p>
          </div>
        </div>

        <div className="grid grid-cols-3 auto-rows-auto gap-5 items-center gap-x-20">
          <div className="col-span-2">
            {issues
              .filter((issue) => issue.status === selectedIssue.status)
              .map((issue, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Image
                    src={issue.imgLink}
                    alt="avatar"
                    width={50}
                    height={50}
                    className="rounded-full self-start"
                  />

                  <div
                    key={index}
                    className="border w-full border-gray-400 mb-3"
                  >
                    <h2 className="p-2 bg-[#111] border-b-[1px] border-b-gray-400">
                      <strong> {issue.owner}</strong> commented 1 hour ago
                    </h2>
                    <p className="px-2 py-3"> {issue.comment}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="self-start flex flex-col gap-4">
            <Status issueStatus={selectedIssue.status} />
            <div className="border-y-[1px] flex items-center justify-between border-y-gray-100 py-4">
              <p>Assigment</p>
              <span className="hover:rotate-90">
                <BsGearFill className="icon" />
              </span>
            </div>
            <div>
              <h2>Labels</h2>
              <ul className="mt-3  items-center justify-between flex flex-wrap gap-0.5 gap-y-2">
                <p
                  className="cursor-pointer inline border rounded-2xl p-1 py-0.5 text-sm mx-0.5 font-semibold"
                  style={{ borderColor: color, color: color }}
                >
                  {selectedIssue.label}
                </p>
                <span className="hover:rotate-90">
                  <BsGearFill className="icon" />
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
