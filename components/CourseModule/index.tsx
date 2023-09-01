import Image from "next/image";
import React from "react";

import clock from "@/public/icons/clockfilled.svg";
import quiz from "@/public/icons/quiz.svg";
import bar from "@/public/icons/bar.svg";
import check from "@/public/icons/check.svg";

interface CourseModuleProps {
  status?: "watching" | "completed";
}

const CourseModule: React.FC<CourseModuleProps> = ({
  status = "completed",
}) => {
  return (
    <div className="md:w-[352px] w-full md:mx-0 h-[76px] bg-gray-200 flex justify-between items-center px-[23px] rounded-lg">
      <div className="flex flex-col gap-2">
        <p>Module: What’s in a Block?</p>
        <div className="flex gap-6">
          <div className="flex gap-[6px]">
            <Image alt="clock-icon" src={clock}></Image>
            <span>9 Min</span>
          </div>
          <div className="flex gap-[6px]">
            <Image alt="quiz-icon" src={quiz}></Image>
            <span>Quiz</span>
          </div>
        </div>
      </div>
      <div>
        {status === "watching" && <Image alt="bar-chart" src={bar}></Image>}
        {status === "completed" && (
          <Image alt="bar-chart" src={check} className="w-5 h-w-5"></Image>
        )}
      </div>
    </div>
  );
};

export default CourseModule;
