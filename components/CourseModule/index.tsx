"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import clock from "@/public/icons/clockfilled.svg";
import quiz from "@/public/icons/quiz.svg";
import { Lesson } from "@/redux/features/courses/type";
import { secondsToMinutes } from "@/utils/convertToMinutes";
import { CircleCheck } from "@styled-icons/fa-solid";
import { PlayCircle } from "@styled-icons/fluentui-system-regular/PlayCircle";
import { usePathname } from "next/navigation";
import { getLastPathName } from "@/utils/getPathName";
import slugify from "slugify";
import bar from "@/public/icons/bar.svg";
import slugifyText from "@/utils/slugifyText";
import { STATUS } from "@/utils/status";
import { BarChartAlt2 } from "@styled-icons/boxicons-solid";

interface CourseModuleProps {
  status?: string;
  lesson: Lesson;
  is_complete?: number;
  is_watching?: number[] | null;
  index: number;
}

const CourseModule: React.FC<CourseModuleProps> = ({
  lesson,
  index,
  is_complete,
  status = "pending",
  is_watching,
}) => {
  const [isChoose, setIsChoose] = useState(false);
  const [active, setActive] = useState(status);
  const pathname = usePathname();
  useEffect(() => {
    if (is_complete === 1) {
      setActive("completed");
    }
  }, [is_complete]);

  console.log("index:", index);
  console.log("iswatching nè", is_watching);

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

      {active !== STATUS.COMPLETED &&
      (getLastPathName(pathname) === slugifyText(lesson.lesson_title) ||
        active === "already") ? (
        <div className="w-[18px] h-full flex items-center">
          {is_watching !== null &&
          is_watching !== undefined &&
          is_watching.includes(index) ? (
            <BarChartAlt2 className="text-green-100" />
          ) : (
            <PlayCircle className={`${"text-blue-100 w-[18px] h-[18px]"}`} />
          )}
        </div>
      ) : (
        active === "pending" && (
          <div className="w-[18px] h-full flex items-center">
            <CircleCheck className={`${"text-white-300 w-[18px] h-[18px]"}`} />
          </div>
        )
      )}
      {active === STATUS.COMPLETED && (
        <div className="w-[18px] h-full flex items-center">
          {is_watching !== null &&
          is_watching !== undefined &&
          is_watching.includes(index) ? (
            <Image alt="bar-chart" src={bar}></Image>
          ) : (
            <CircleCheck className={`${"text-blue-100 w-[18px] h-[18px]"}`} />
          )}
        </div>
      )}
    </div>
  );
};

export default CourseModule;
