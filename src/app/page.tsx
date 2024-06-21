"use client";
import AddIssue from "./add/page";
import IssueList from "./IssueLists";
import React, { useContext, useState } from "react";
import SearchIssues from "./SearchIssues";
import { cx } from "../utils";
import Link from "next/link";
import { useAppContext } from "@/context";
import IssueLists from "./IssueLists";

export default function Home() {
  const { openIssueForm, colors, labels } = useAppContext();

  return (
    <>
      <div className="bg-black border-t-yellow-400 w-3/4 mx-auto ">
        <h1 className="text-center mb-3 text-4xl font-semibold my-32">
          Issue tracker
        </h1>
        <div className="grid grid-cols-3 auto-rows-auto gap-5 items-center gap-x-20">
          <div className="col-end-4 ">
            <h2>Labels</h2>
            <ul className=" mt-3 flex flex-wrap gap-0.5 gap-y-2">
              {labels.map((label, index) => (
                <li
                  key={index}
                  className="inline border rounded-2xl p-1 py-0.5 text-sm mx-0.5 font-semibold"
                  style={{ borderColor: colors[index], color: colors[index] }}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <SearchIssues />
          <IssueLists />
          <Link
            href="./add"
            className="col-end-4 pointer self-start  bg-yellow-300 text-gray-900 rounded-md p-2 text-center mt-2 font-semibold"
            onClick={openIssueForm}
          >
            Add Issue
          </Link>
        </div>
      </div>
    </>
  );
}

// \<AddIssue
// issues={issues}
// setAddIssue={setAddIssue}
// setIssues={setIssues}
// />
