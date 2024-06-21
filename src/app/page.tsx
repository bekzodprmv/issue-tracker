"use client";
import React, { useContext, useState } from "react";
import SearchIssues from "./SearchIssues";
import Link from "next/link";
import { useAppContext } from "@/context";
import IssueLists from "./IssueLists";
import Pagination from "./Pagination";
import Labels from "./Labels";

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
                <Labels
                  key={index}
                  label={label}
                  index={index}
                  colors={colors}
                />
              ))}
            </ul>
          </div>
          <SearchIssues />
          <IssueLists />
          <Link href="./add" className="btn--big" onClick={openIssueForm}>
            Add Issue
          </Link>
          <Pagination />
        </div>
      </div>
    </>
  );
}
