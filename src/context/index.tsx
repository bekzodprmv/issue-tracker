"use client";
import React, { createContext, useContext, useState } from "react";

type Context = {
  addIssue: boolean;
  setAddIssue: any;
  openIssueForm: () => void;
  colors: string[];
  labels: string[];
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

const AppContext = createContext<Context>();

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [addIssue, setAddIssue] = useState(false);

  function openIssueForm() {
    setAddIssue(true);
  }

  return (
    <AppContext.Provider
      value={{ addIssue, setAddIssue, openIssueForm, colors, labels }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
