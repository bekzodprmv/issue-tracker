"use client";
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useRouter } from "next/navigation";

type CustomIssues = {
  title: string;
  comment: string;
  date: Date;
  label: string;
  status: string;
  owner: string;
  imgLink?: string | any;
};

type Context = {
  text: string;
  issues: any[];
  addIssue: boolean;
  colors: string[];
  numbers: number[];
  currentPage: number;
  recordsPerPage: number;
  records: any[];
  labels: string[];
  owners: string[];
  statuses: string[];
  customIssues: CustomIssues[];
  setText: Dispatch<SetStateAction<string>>;
  setIssues: Dispatch<SetStateAction<any[]>>;
  setAddIssue: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  selectedIssue: CustomIssues;
  setSelectedIssue: Dispatch<SetStateAction<CustomIssues>>;
  prevPage: () => void;
  nextPage: () => void;
  openIssueForm: () => void;
  changePage: (id: number) => void;
  labelSort: (label: string) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleAddSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  randomNum: (option: string[]) => number;
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

const images = [
  "https://res.cloudinary.com/uidotdev/image/twitter_name/ralex1993",
  "https://res.cloudinary.com/uidotdev/image/twitter_name/tannerlinsley",
  "https://res.cloudinary.com/uidotdev/image/twitter_name/tylermcginnis",
  "https://res.cloudinary.com/uidotdev/image/twitter_name/u2",
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
    owner: "Mylow",
    imgLink: "https://res.cloudinary.com/uidotdev/image/twitter_name/ralex1993",
  },
  {
    title: "macOS looks weird all the time",
    comment: "This is a really big deal for me.",
    date: new Date(),
    label: "feature",
    status: "In progress",
    owner: "Jimmy",
    imgLink:
      "https://res.cloudinary.com/uidotdev/image/twitter_name/tannerlinsley",
  },
  {
    title: "Windows is not working as expected when I'm on a plane",
    comment: "I'm not sure how to fix it.",
    date: new Date(),
    label: "duplicate",
    status: "Backlog",
    owner: "Scott",
    imgLink:
      "https://res.cloudinary.com/uidotdev/image/twitter_name/tylermcginnis",
  },
  {
    title:
      "Styling is actually working fine. I just wanted to let you know you're great when I'm on a plane",
    comment: "It would seem this is caused by user error.",
    date: new Date(),
    label: "bug",
    status: "Backlog",
    owner: "Edward",
    imgLink: "https://res.cloudinary.com/uidotdev/image/twitter_name/u2",
  },
  {
    title: "The App looks weird when I'm with Taylor Swift",
    comment: "This is a really big deal for me.",
    date: new Date(),
    label: "feature",
    status: "In progress",
    owner: "Maximilian",
    imgLink: "https://res.cloudinary.com/uidotdev/image/twitter_name/ralex1993",
  },
  {
    title: "React looks weird when I'm on a plane",
    comment: "I'm not sure how to fix it.",
    date: new Date(),
    label: "duplicate",
    status: "Backlog",
    owner: "Jhonas",
    imgLink:
      "https://res.cloudinary.com/uidotdev/image/twitter_name/tannerlinsley",
  },
  {
    title: "Styling seems to struggle when I rage click it",
    comment: "I'm on it. I'll get back to you when I'm done.",
    date: new Date(),
    label: "enhancement",
    status: "In progress",
    owner: "Mark",
    imgLink:
      "https://res.cloudinary.com/uidotdev/image/twitter_name/tylermcginnis",
  },
  {
    title: "Windows won't run right on Tuesdays",
    comment: "I'm working on it.",
    date: new Date(),
    label: "question",
    status: "Todo",
    owner: "Tanner",
    imgLink: "https://res.cloudinary.com/uidotdev/image/twitter_name/u2",
  },
  {
    title: "Dependencies makes my computer run slow when I'm with Taylor Swift",
    comment: "It would seem this is caused by user error.",
    date: new Date(),
    label: "help",
    status: "Done",
    owner: "Bono",
    imgLink: "https://res.cloudinary.com/uidotdev/image/twitter_name/ralex1993",
  },
  {
    title:
      "JavaScript cannot read property 'length' of undefined when I'm on a train",
    comment: "Never mind, I figured out how to fix this",
    date: new Date(),
    label: "help",
    status: "Cancelled",
    owner: "Tyler",
    imgLink:
      "https://res.cloudinary.com/uidotdev/image/twitter_name/tannerlinsley",
  },
  {
    title: "The App makes my computer run slow when I'm on a bike",
    comment: "What is the status of this issue?",
    date: new Date(),
    label: "wontfix",
    status: "In progress",
    owner: "Alex",
    imgLink:
      "https://res.cloudinary.com/uidotdev/image/twitter_name/tylermcginnis",
  },
  {
    title: "Button is not working as expected when I'm on a plane",
    comment: "This is a really big deal for me.",
    date: new Date(),
    label: "duplicate",
    status: "Todo",
    owner: "Bob",
    imgLink: "https://res.cloudinary.com/uidotdev/image/twitter_name/u2",
  },
  {
    title: "JQuery throws an error whenever I try to demo it",
    comment: "Never mind, I figured out how to fix this",
    date: new Date(),
    label: "wontflix",
    status: "Cancelled",
    owner: "John",
    imgLink: "https://res.cloudinary.com/uidotdev/image/twitter_name/u2",
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
  const router = useRouter();
  const [text, setText] = useState("");
  const [status, setStatus] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [addIssue, setAddIssue] = useState(false);
  const [issues, setIssues] = useState(customIssues);
  const [selectedIssue, setSelectedIssue] = useState<CustomIssues>(
    {} as CustomIssues
  );
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = issues.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(issues.length / recordsPerPage);
  const numbers = Array.from({ length: nPage }, (_, i) => i + 1);

  function randomNum(option: string[]) {
    return Math.floor(Math.random() * option.length);
  }

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
    setStatus(e.target.value);
    setIssues(sortedIssues);
  }

  function handleAddSubmit(event: React.FormEvent<HTMLFormElement>) {
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
        imgLink: images[randomNum(images)],
      },
      ...issues,
    ]);
    router.push(`./`);
    console.log({ issues });
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
        handleSelectChange,
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
        labelSort,
        issues,
        setIssues,
        randomNum,
        text,
        setText,
        title,
        setTitle,
        comment,
        setComment,
        handleAddSubmit,
        selectedIssue,
        setSelectedIssue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
