"use client";

import Image from "next/image";
import React, { useState } from "react";
import arrowUp from "@/public/icons/arrow-up.svg";
import { LessonItem } from "@/redux/features/courses/type";
import { CircleCheck } from "@styled-icons/fa-solid";
import clock from "@/public/icons/clockfilled.svg";
import quiz from "@/public/icons/quiz.svg";
import { secondsToMinutes } from "@/utils/convertToMinutes";
import cn from "@/services/cn";
import Link from "next/link";
import { useParams } from "next/navigation";

interface LessonModuleProps {
  data: any;
  activeDropdown?: boolean;
  courseId: string;
}

const LessonModule: React.FC<LessonModuleProps> = ({
  data,
  activeDropdown = false,
}) => {
  const params = useParams();
  const { subCourseSlug, courseId } = params;
  const [showDropdown, setShowDropdown] = useState(activeDropdown);
  return (
    <div className="flex flex-col gap-4">
      <div
        className="w-full md:mx-0 py-3 bg-gray-200 px-4 rounded-lg cursor-pointer select-none"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="flex gap-[6px] flex-col">
          <p>{data.title}</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-6 items-center">
              <div className="flex items-center gap-[6px]">
                <Image
                  alt="clock-icon"
                  className="w-[16px] h-[16px]"
                  src={clock}
                />

                <span className="text-sm font-light leading-6">
                  {secondsToMinutes(data.duration)}&nbsp;minutes
                </span>
              </div>

              <div className="flex items-center gap-[6px]">
                <Image
                  alt="quiz-icon"
                  className="w-[16px] h-[16px]"
                  src={quiz}
                />
                <span className="text-sm leading-6 font-light">
                  {data.lesson_type_format === 1 ? "Text" : "Video"}
                </span>
              </div>
            </div>
            <div
              className={cn("transition-all duration-150 ease-in-out", {
                "rotate-0": showDropdown,
                "rotate-180": !showDropdown,
              })}
            >
              <Image alt="arrow-up" className="w-4 h-4" src={arrowUp} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(`px-3 flex-col transition-all duration-150 ease-in-out`, {
          flex: showDropdown,
          hidden: !showDropdown,
        })}
      >
        {data.lesson_data.map((lessonItem: LessonItem) => (
          <Link
            href={`/courses/${courseId}/${subCourseSlug}/lessons/${lessonItem.slug}`}
            className="flex justify-between p-[6px] cursor-pointer"
            key={lessonItem.id}
          >
            <div className="font-light">{lessonItem.title}</div>
            <div className="flex-1 flex justify-end">
              {lessonItem.is_complete_lesson ? (
                <CircleCheck
                  className={`${"text-blue-100 w-[18px] h-[18px]"}`}
                />
              ) : (
                <CircleCheck
                  className={`${"text-white-300 w-[18px] h-[18px]"}`}
                />
              )}
            </div>
          </Link>
        ))}
        {/* <div className="flex justify-between p-[6px]">
          <Link href="#" className="font-light">
            What’s in a Block?
          </Link>
          <CircleCheck className={`${"text-white-300 w-[18px] h-[18px]"}`} />
        </div>
        <div className="flex justify-between p-[6px]">
          <div className="font-light text-grey-400">What’s in a Block?</div>
          <Image alt="circle-fill-icon" className="w-4 h-[18px]" src={lock} />
        </div>
        <div className="flex justify-between p-[6px]">
          <div className="font-light text-grey-400">What’s in a Block?</div>
          <Image alt="circle-fill-icon" className="w-4 h-[18px]" src={lock} />
        </div> */}
      </div>
    </div>
  );
};

export default LessonModule;
