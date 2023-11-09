"use client";
import React from "react";
import QuizItem from "./QuizItem";

const Quizs = () => {
  return (
    <div className="flex flex-col gap-4">
      <QuizItem />
      <QuizItem />
      <QuizItem />
      <QuizItem />
      <QuizItem />
      <QuizItem />
    </div>
  );
};

export default Quizs;
