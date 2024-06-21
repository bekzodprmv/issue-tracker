"use client";
import Link from "next/link";
import React, { useState } from "react";

type addIssueProps = {
  setAddIssue: any;
  issues: { title: string; comment: string; date: Date }[];
  setIssues: React.Dispatch<
    React.SetStateAction<{ title: string; comment: string; date: Date }[]>
  >;
};

export default function AddIssue({
  setAddIssue,
  issues,
  setIssues,
}: addIssueProps) {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTitle("");
    setComment("");
    setIssues([...issues, { title, comment, date: new Date() }]);
    console.log({ issues });
  }

  return (
    <div className="bg-black border-t-yellow-400 w-3/4 mx-auto  mt-16">
      <button
        onClick={() => setAddIssue(false)}
        className="text-yellow-300 underline text-xl"
      >
        Back to issue list
      </button>
      <h1 className="text-center m-14 text-4xl font-semibold">Issue tracker</h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <h2 className="text-4xl font-semibold mb-5">Add issue</h2>
        <div>
          <label className="text-2xl font-medium" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="border text-2xl font-medium rounded-md border-gray-500 bg-transparent w-full p-4 mt-4"
          />
        </div>
        <div>
          <label className="text-2xl font-medium" htmlFor="comment">
            Comment
          </label>
          <textarea
            rows={5}
            id="comment"
            value={comment}
            placeholder="Comment"
            onChange={(e) => setComment(e.target.value)}
            className="border text-2xl font-medium rounded-md border-gray-500 bg-transparent w-full p-4 mt-4"
          />
        </div>
        <button
          onClick={() => setAddIssue(false)}
          className="pointer self-end  bg-yellow-300 text-gray-900 rounded-md py-3 px-5 text-2xl font-medium mt-2"
          type="submit"
        >
          Add Issue
        </button>
      </form>
    </div>
  );
}
