import React from "react";
import { useAppContext } from "@/context";

type LabelsProps = {
  label: string;
  index: number;
  colors: string[];
};

export default function Labels({ label, index, colors }: LabelsProps) {
  const { labelSort, issues } = useAppContext();
  // console.log(label);
  return (
    <li
      onClick={() => labelSort(label)}
      className="cursor-pointer inline border rounded-2xl p-1 py-0.5 text-sm mx-0.5 font-semibold"
      style={{ borderColor: colors[index], color: colors[index] }}
    >
      {label}
    </li>
  );
}
