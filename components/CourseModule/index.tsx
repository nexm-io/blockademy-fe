"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import clock from "@/public/icons/clockfilled.svg";
import quiz from "@/public/icons/quiz.svg";
import cirlceFill from "@/public/icons/fill-circle.svg";
import arrowUp from "@/public/icons/arrow-up.svg";
import lock from "@/public/icons/lock.svg";
import { Lesson } from "@/redux/features/courses/type";
import { secondsToMinutes } from "@/utils/convertToMinutes";
import { CircleCheck } from "@styled-icons/fa-solid";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import cn from "@/services/cn";

interface CourseModuleProps {
  lesson: Lesson;
  completedLesson: number[];
  activeDropdown?: boolean
}

const CourseModule: React.FC<CourseModuleProps> = ({
  lesson,
  completedLesson,
  activeDropdown = false
}) => {
  const [showDropdown, setShowDropdown] = useState(activeDropdown);
  const searchParams = useSearchParams();
  const lessonId = searchParams.get("lesson_id") || (0 as number);
  const [isCompletedLesson, setIsCompletedLesson] = useState(
    !!lesson.is_complete
  );
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (!isAuthenticated || !token) setIsCompletedLesson(false);
  }, [isAuthenticated, token]);

  useEffect(() => {
    if (completedLesson.length) {
      setIsCompletedLesson(!!completedLesson?.includes(lesson.lesson_id));
    }
  }, [completedLesson, lesson.lesson_id]);

  return (
    <div className="flex flex-col gap-4">
      <div
        className="w-full md:mx-0 py-3 bg-gray-200 px-4 rounded-lg cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="flex gap-[6px] flex-col">
          <p>{lesson.lesson_title}</p>

          <div className="flex items-center justify-between">
            <div className="flex gap-6 items-center">
              <div className="flex items-center gap-[6px]">
                <Image
                  alt="clock-icon"
                  className="w-[16px] h-[16px]"
                  src={clock}
                />

                <span className="text-sm font-light leading-6">
                  {secondsToMinutes(lesson.lesson_duration)}&nbsp;minutes
                </span>
              </div>

              <div className="flex items-center gap-[6px]">
                <Image
                  alt="quiz-icon"
                  className="w-[16px] h-[16px]"
                  src={quiz}
                />
                <span className="text-sm leading-6 font-light">
                  {lesson.lesson_type_format === 1 ? "Text" : "Video"}
                </span>
              </div>
            </div>
            <div className={cn('rotate-180 transition-all duration-150 ease-in-out',{
              "rotate-0": !showDropdown
            })}>
            <Image alt="arrow-up" className="w-4 h-4" src={arrowUp} />
            </div>
          </div>
        </div>

        {/* {isCompletedLesson ? (
        <div className="w-[18px] h-full flex items-center">
          {Number(lessonId) === lesson.lesson_id ? (
            <BarChartAlt2 className="text-blue-100" />
          ) : (
            <CircleCheck className={`${"text-blue-100 w-[18px] h-[18px]"}`} />
          )}
        </div>
      ) : (
        <div className="w-[18px] h-full flex items-center">
          {Number(lessonId) === lesson.lesson_id ? (
            <BarChartAlt2 className="text-blue-100" />
          ) : (
            <CircleCheck className={`${"text-white-300 w-[18px] h-[18px]"}`} />
          )}
        </div>
      )} */}
      </div>
      <div className={cn(`px-3 flex-col transition-all duration-150 ease-in-out`, {
        "flex": showDropdown,
        "hidden": !showDropdown,
      })}>
        <div className="flex justify-between p-[6px]">
          <Link href="#" className="font-light">
            What’s in a Block?
          </Link>
          <CircleCheck className={`${"text-blue-100 w-[18px] h-[18px]"}`} />
        </div>
        <div className="flex justify-between p-[6px]">
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
        </div>
      </div>
    </div>
  );
};

export default CourseModule;
