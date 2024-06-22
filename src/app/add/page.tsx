"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";

export default function AddIssue() {
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const { issues, labels, owners, statuses, randomNum, setIssues } =
    useAppContext();
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTitle("");
    setComment("");

    setIssues([
      {
        title,
        comment,
        date: new Date(),
        label: labels[randomNum(labels)],
        status: statuses[randomNum(statuses)],
        owner: owners[randomNum(owners)],
      },
      ...issues,
    ]);
    router.push(`./`);
    console.log({ issues });
  }

  return (
    <div className="bg-black border-t-yellow-400 w-3/4 mx-auto  mt-16">
      <Link href="./" className="text-yellow-300 underline text-xl">
        Back to issue list
      </Link>
      <h1 className="text-center m-14 text-4xl font-semibold">Issue tracker</h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <h2 className="text-4xl font-semibold mb-5">Add issue</h2>
        <div>
          <label className="text-2xl font-medium" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            required
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
            required
            id="comment"
            value={comment}
            placeholder="Comment"
            onChange={(e) => setComment(e.target.value)}
            className="border text-2xl font-medium rounded-md border-gray-500 bg-transparent w-full p-4 mt-4"
          />
        </div>
        <button className="btn--big self-end" type="submit">
          Add Issue
        </button>
      </form>
    </div>
  );
}

// setIssues([
//   ...issues,
//   {
//     title: title,
//     comment: comment,
//     date: new Date(),
//     label: labels[randomNum],
//     status: statuses[randomNum],
//     owner: owners[randomNum],
//   },
// ]);
