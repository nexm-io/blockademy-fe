"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import arrowUp from "@/public/icons/arrow-up.svg";
import { LessonItem } from "@/redux/features/courses/type";
import { CircleCheck } from "@styled-icons/fa-solid";
import clock from "@/public/icons/clockfilled.svg";
import quiz from "@/public/icons/quiz.svg";
import lock from "@/public/icons/lock.svg";
import circleFilled from "@/public/icons/fill-circle.svg";
import { secondsToMinutes } from "@/utils/convertToMinutes";
import cn from "@/services/cn";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface LessonModuleProps {
  data: any;
  courseId: string;
  isRegistered: number;
}

const LessonModule: React.FC<LessonModuleProps> = ({ data, isRegistered }) => {
  const params = useParams();
  const router = useRouter();
  const { subCourseSlug, courseId, lessonSlug } = params;
  const [showDropdown, setShowDropdown] = useState(true);
  const [isLockedLesson, setIsLockedLesson] = useState(false);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (!isAuthenticated || !token || !isRegistered) setIsLockedLesson(true);
  }, [isAuthenticated, token, isRegistered]);
  
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
        className={cn(
          `px-3 flex-col gap-2 transition-all duration-150 ease-in-out`,
          {
            flex: showDropdown,
            hidden: !showDropdown,
          }
        )}
      >
        {data.lesson_data.map((lessonItem: LessonItem) => (
          <div
            className={cn(`flex justify-between p-[6px] cursor-pointer`, {
              "!cursor-default": isLockedLesson || lessonItem.is_locked,
            })}
            onClick={() => {
              if (isLockedLesson) return;
              if (!lessonItem.is_locked)
                router.push(
                  `/courses/${courseId}/${subCourseSlug}/lessons/${lessonItem.slug}`
                );
            }}
            key={lessonItem.id}
          >
            <div
              className={cn("font-light", {
                "text-grey-400": lessonItem.is_locked || isLockedLesson,
              })}
            >
              {lessonItem.title}
            </div>
            <div className="flex-1 flex justify-end">
              {isLockedLesson || lessonItem.is_locked ? (
                <Image
                  alt="circle-fill-icon"
                  className="w-4 h-[18px]"
                  src={lock}
                />
              ) : lessonItem.slug === lessonSlug ? (
                <Image
                  alt="circle-fill-icon"
                  className="w-[18px] h-[18px]"
                  src={circleFilled}
                />
              ) : lessonItem.is_complete_lesson ? (
                <CircleCheck
                  className={`${"text-green-400 w-[18px] h-[18px]"}`}
                />
              ) : (
                <CircleCheck
                  className={`${"text-white-300 w-[18px] h-[18px]"}`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonModule;
