"use client";
import React, { createContext, useContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

type Context = {
  addIssue: boolean;
  setAddIssue: any;
  openIssueForm: () => void;
  colors: string[];
  labels: string[];
  owners: string[];
  statuses: string[];
  issues: any[];
  customIssues: {
    title: string;
    date: Date;
    label: string;
    status: string;
    owner: string;
  }[];
  // setIssues: Dispatch<
  //   SetStateAction<
  //     {
  //       title: string;
  //       date: Date;
  //       label: string;
  //       status: string;
  //       owner: string;
  //     }[]
  //   >
  // >;
};

let labels: string[] = [
  "bug",
  "feature",
  "enhancement",
  "question",
  "help",
  "wanted",
  "wontfix",
  "duplicate",
];

let colors: string[] = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "pink",
  "gray",
  "black",
];

const owners = ["Alex", "Bob", "Tanner", "Bono", "Tyler"];
const statuses = ["Backlog", "In status", "Todo", "Done", "Cancelled"];

const randomNum = Math.floor(Math.random() * labels.length);



const customIssues = [
  {
    title: "It would seem this is caused by user error.",
    date: new Date(),
    label: "bug",
    status: "Backlog",
    owner: "Tyler",
  },
  {
    title: "This is a really big deal for me.",
    date: new Date(),
    label: "feature",
    status: "In status",
    owner: "Bob",
  },
  {
    title: "I'm not sure how to fix it.",
    date: new Date(),
    label: "duplicate",
    status: "Backlog",
    owner: "Alex",
  },
  {
    title: "It would seem this is caused by user error.",
    date: new Date(),
    label: "bug",
    status: "Backlog",
    owner: "Tyler",
  },
  {
    title: "This is a really big deal for me.",
    date: new Date(),
    label: "feature",
    status: "In status",
    owner: "Bob",
  },
  {
    title: "I'm not sure how to fix it.",
    date: new Date(),
    label: "duplicate",
    status: "Backlog",
    owner: "Alex",
  },
  {
    title: "I'm on it. I'll get back to you when I'm done.",
    date: new Date(),
    label: "enhancement",
    status: "In status",
    owner: "Bob",
  },
  {
    title: "I'm working on it.",
    date: new Date(),
    label: "question",
    status: "Todo",
    owner: "Tanner",
  },
  {
    title: "It would seem this is caused by user error.",
    date: new Date(),
    label: "help",
    status: "Done",
    owner: "Bono",
  },
  {
    title: "Never mind, I figured out how to fix this",
    date: new Date(),
    label: "wanted",
    status: "Cancelled",
    owner: "Tyler",
  },
  {
    title: "What is the status of this issue?",
    date: new Date(),
    label: "wontfix",
    status: "In status",
    owner: "Alex",
  },
  {
    title: "This is a really big deal for me.",
    date: new Date(),
    label: "duplicate",
    status: "Todo",
    owner: "Bob",
  },
  {
    title: "This is a really big deal for me.",
    date: new Date(),
    label: "duplicate",
    status: "Cancelled",
    owner: "Tanner",
  },
];

console.log(customIssues);
// function addCustomIssues(title: string, comment: string) {
//   setIssues([
//     ...issues,
//     {
//       title: title,
//       comment: comment,
//       date: new Date(),
//       label: labels[randomNum],
//       status: statuses[randomNum],
//       owner: owners[randomNum],
//     },
//   ]);
// }
const AppContext = createContext<Context>();

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [addIssue, setAddIssue] = useState(false);
  const [issues, setIssues] = useState(customIssues);

  function openIssueForm() {
    setAddIssue(true);
  }

  return (
    <AppContext.Provider
      value={{
        addIssue,
        setAddIssue,
        openIssueForm,
        colors,
        labels,
        owners,
        statuses,
        customIssues,
        issues,
        // setIssues,
        // addCustomIssues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
