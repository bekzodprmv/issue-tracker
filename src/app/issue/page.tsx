"use client";
import React from "react";
import { useAppContext } from "@/context";
import IssueLists from "../IssueLists";
import Labels from "../Labels";
import Status from "../Status";

export default function Home() {
  const { openIssueForm, colors, labels } = useAppContext();

  return (
    <div className="border-t-8 border-t-yellow-400 ">
      <div className="bg-black w-3/4 mx-auto ">
        <h1 className="text-center mb-3 text-4xl font-semibold my-32">
          Issue tracker
        </h1>
        <div className="grid grid-cols-3 auto-rows-auto gap-5 items-center gap-x-20">
          <div className="col-end-4 "></div>
          <IssueLists />
          <div className="self-start flex flex-col gap-4">
            <Status />
            <div className="border-y-[1px] border-y-gray-100 py-4">
              Assignment
            </div>
            <div>
              <h2>Labels</h2>
              <ul className="mt-3 flex flex-wrap gap-0.5 gap-y-2">
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
          </div>
        </div>
      </div>
    </div>
  );
}
