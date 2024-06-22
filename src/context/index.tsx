"use client";
import React, { createContext, useContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

type Context = {
  addIssue: boolean;
  setAddIssue: React.Dispatch<React.SetStateAction<boolean>>;
  openIssueForm: () => void;
  colors: string[];
  prevPage: () => void;
  nextPage: () => void;
  changePage: (id: number) => void;
  labelSort: (label: string) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currentPage: number;
  numbers: number[];
  recordsPerPage: number;
  records: any[];
  labels: string[];
  owners: string[];
  statuses: string[];
  issues: any[];
  setIssues: Dispatch<SetStateAction<any[]>>;
  customIssues: {
    title: string;
    date: Date;
    label: string;
    status: string;
    owner: string;
  }[];
};

const labels: string[] = [
  "bug",
  "feature",
  "enhancement",
  "question",
  "help",
  "wontfix",
  "duplicate",
];

const owners = ["Alex", "Bob", "Tanner", "Bono", "Tyler"];
const statuses = ["Backlog", "In progress", "Todo", "Done", "Cancelled"];

const customIssues = [
  {
    title: "Button is not working properly when I'm on a boat",
    comment: "It would seem this is caused by user error.",
    date: new Date(),
    label: "bug",
    status: "Backlog",
    owner: "Tyler",
  },
  {
    title: "macOS looks weird all the time",
    comment: "This is a really big deal for me.",
    date: new Date(),
    label: "feature",
    status: "In progress",
    owner: "Bob",
  },
  {
    title: "Windows is not working as expected when I'm on a plane",
    comment: "I'm not sure how to fix it.",
    date: new Date(),
    label: "duplicate",
    status: "Backlog",
    owner: "Alex",
  },
  {
    title:
      "Styling is actually working fine. I just wanted to let you know you're great when I'm on a plane",
    comment: "It would seem this is caused by user error.",
    date: new Date(),
    label: "bug",
    status: "Backlog",
    owner: "Tyler",
  },
  {
    title: "The App looks weird when I'm with Taylor Swift",
    comment: "This is a really big deal for me.",
    date: new Date(),
    label: "feature",
    status: "In progress",
    owner: "Bob",
  },
  {
    title: "React looks weird when I'm on a plane",
    comment: "I'm not sure how to fix it.",
    date: new Date(),
    label: "duplicate",
    status: "Backlog",
    owner: "Alex",
  },
  {
    title: "Styling seems to struggle when I rage click it",
    comment: "I'm on it. I'll get back to you when I'm done.",
    date: new Date(),
    label: "enhancement",
    status: "In progress",
    owner: "Bob",
  },
  {
    title: "Windows won't run right on Tuesdays",
    comment: "I'm working on it.",
    date: new Date(),
    label: "question",
    status: "Todo",
    owner: "Tanner",
  },
  {
    title: "Dependencies makes my computer run slow when I'm with Taylor Swift",
    comment: "It would seem this is caused by user error.",
    date: new Date(),
    label: "help",
    status: "Done",
    owner: "Bono",
  },
  {
    title:
      "JavaScript cannot read property 'length' of undefined when I'm on a train",
    comment: "Never mind, I figured out how to fix this",
    date: new Date(),
    label: "help",
    status: "Cancelled",
    owner: "Tyler",
  },
  {
    title: "The App makes my computer run slow when I'm on a bike",
    comment: "What is the status of this issue?",
    date: new Date(),
    label: "wontfix",
    status: "In progress",
    owner: "Alex",
  },
  {
    title: "Button is not working as expected when I'm on a plane",
    comment: "This is a really big deal for me.",
    date: new Date(),
    label: "duplicate",
    status: "Todo",
    owner: "Bob",
  },
  {
    title: "JQuery throws an error whenever I try to demo it",
    comment: "Never mind, I figured out how to fix this",
    date: new Date(),
    label: "wontflix",
    status: "Cancelled",
    owner: "Tyler",
  },
];

let colors: string[] = [
  "#FF0000",
  "#0000FF",
  "#00ffff",
  "#ffa500",
  "#00ff00",
  "#ffffff",
  "#663399",
];

const AppContext = createContext<Context>({} as Context);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<string>("");
  const [addIssue, setAddIssue] = useState(false);
  const [issues, setIssues] = useState(customIssues);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = issues.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(customIssues.length / recordsPerPage);
  const numbers = Array.from({ length: nPage }, (_, i) => i + 1);

  function labelSort(label: string) {
    const sortedIssues = [...issues].sort((a, b) => {
      return a.label === label ? -1 : 1;
    });
    setCurrentPage(1);
    setIssues(sortedIssues);
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const sortedIssues = [...issues].sort((a, b) => {
      return a.status === e.target.value ? -1 : 1;
    });
    setCurrentPage(1);
    setIssues(sortedIssues);
    setStatus(e.target.value);
  }

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (id: number) => {
    setCurrentPage(id);
  };

  function openIssueForm() {
    setAddIssue(true);
  }

  return (
    <AppContext.Provider
      value={{
        prevPage,
        nextPage,
        changePage,
        currentPage,
        numbers,
        records,
        recordsPerPage,
        addIssue,
        setAddIssue,
        openIssueForm,
        colors,
        labels,
        owners,
        statuses,
        customIssues,
        issues,
        labelSort,
        handleSelectChange,
        setIssues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
