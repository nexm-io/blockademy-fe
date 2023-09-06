import Image from "next/image";
import React from "react";
import clock from "@/public/icons/clockfilled.svg";
import quiz from "@/public/icons/quiz.svg";
import { Lesson } from "@/redux/features/courses/type";
import { secondsToMinutes } from "@/utils/convertToMinutes";
import { CircleCheck } from "@styled-icons/fa-solid";
import { PlayCircle } from "@styled-icons/fluentui-system-regular/PlayCircle";
interface CourseModuleProps {
  status?: string;
  lesson: Lesson;
}

const CourseModule: React.FC<CourseModuleProps> = ({
  lesson,
  status = "pending",
}) => {
  return (
    <div className="md:w-[352px] w-full md:mx-0 py-3 bg-gray-200 flex justify-between items-center px-[23px] rounded-lg">
      <div className="flex flex-col">
        <p className="font-medium text-base">{lesson.lesson_title}</p>
        <div className="flex gap-6">
          <div className="flex gap-[6px]">
            <Image
              alt="clock-icon"
              className="text-xs leading-5"
              src={clock}
            ></Image>
            <span className="text-xs leading-5">
              {secondsToMinutes(lesson.lesson_duration)}&nbsp;minutes
            </span>
          </div>
          <div className="flex gap-[6px]">
            <Image alt="quiz-icon" src={quiz}></Image>
            <span className="text-xs leading-5">Quiz</span>
          </div>
        </div>
      </div>
      {status === "pending" && (
        <div className="w-[18px] h-full flex items-center">
          <CircleCheck className={`${"text-white-300 w-[18px] h-[18px]"}`} />
        </div>
      )}
      {status === "already" && (
        <div className="w-[18px] h-full flex items-center">
          <PlayCircle className={`${"text-blue-100 w-[18px] h-[18px]"}`} />
        </div>
      )}
      {/* {status === "watching" && <Image alt="bar-chart" src={bar}></Image>} */}
      {status === "completed" && (
        <div className="w-[18px] h-full flex items-center">
          <CircleCheck className={`${"text-white-300 w-[18px] h-[18px]"}`} />
        </div>
      )}
    </div>
  );
};

export default CourseModule;
