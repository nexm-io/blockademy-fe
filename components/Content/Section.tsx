"use client";
import { ReactNode } from "react";

const Section = ({ title, items }: { title: string; items: ReactNode }) => (
  <li className="flex flex-col gap-6">
    <h3 className="text-blue-100 font-bold text-4xl">{title}</h3>
    <ol className="flex flex-col gap-4">{items}</ol>
  </li>
);

export default Section;
