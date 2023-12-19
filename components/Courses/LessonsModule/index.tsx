"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LessonItem } from "@/redux/features/courses/type";
import { CircleCheck } from "@styled-icons/fa-solid";
import clock from "@/public/icons/clockfilled.svg";
import lock from "@/public/icons/lock.svg";
import quiz from "@/public/icons/quiz.svg";
import circleFilled from "@/public/icons/fill-circle.svg";
import { secondsToMinutes } from "@/utils/convertToMinutes";
import cn from "@/services/cn";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Pencil } from "@styled-icons/bootstrap";

interface LessonModuleProps {
  isExpand: number | boolean | undefined;
  data: any;
  courseId: string;
  isRegistered: number;
  moduleLength: number;
}

const LessonModule: React.FC<LessonModuleProps> = ({
  isExpand,
  data,
  isRegistered,
  moduleLength,
}) => {
  const params = useParams();
  const router = useRouter();
  const { subCourseSlug, courseId, lessonSlug } = params;
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isLockedLesson, setIsLockedLesson] = useState(false);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (!isAuthenticated || !token || !isRegistered) setIsLockedLesson(true);
  }, [isAuthenticated, token, isRegistered]);

  useEffect(() => {
    setIsLockedLesson(false);
  }, [isRegistered]);

  useEffect(() => {
    if (!lessonSlug) {
      setShowDropdown(!!isExpand);
    }

    if (lessonSlug && data && data.lesson_data) {
      const foundLesson = data.lesson_data.find(
        (lesson: { slug: string | string[] }) => lesson.slug === lessonSlug
      );

      setShowDropdown(!!foundLesson);
    }
  }, [data, isExpand]);

  return (
    <div className="flex flex-col gap-4">
      {moduleLength > 1 && (
        <div
          className={cn(
            `w-full md:mx-0 py-3 bg-gray-200 px-4 rounded-lg select-none`,
            {
              "cursor-pointer": data.lesson_data.length > 0,
            }
          )}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="flex gap-[6px] flex-col">
            <p>{data.title}</p>
            <div className="flex gap-6 items-center">
              <div className="flex items-center gap-[6px]">
                <Image
                  alt="clock-icon"
                  className="w-[16px] h-[16px]"
                  src={clock}
                />

                <span className="text-sm font-light leading-6 mt-[2px] min-w-[72px]">
                  {secondsToMinutes(data.duration)}&nbsp;minutes
                </span>
              </div>

              {data.total_lesson !== 0 ? (
                <div className="flex items-center gap-[6px]">
                  <Image
                    alt="quiz-icon"
                    className="w-[16px] h-[16px]"
                    src={quiz}
                  />
                  <p className="text-sm leading-6 font-light mt-[2px] min-w-[57px]">
                    {data.total_lesson >= 2
                      ? `${data.total_lesson} lessons`
                      : `${data.total_lesson} lesson`}
                  </p>
                </div>
              ) : null}

              {data.total_quiz !== 0 ? (
                <div className="flex items-center gap-[6px]">
                  <Pencil className="w-3 text-[#9E9E9E]" />
                  <p className="text-sm leading-6 font-light mt-[2px]">
                    {data.total_quiz >= 2
                      ? `${data.total_quiz} quizs`
                      : `${data.total_quiz} quiz`}
                  </p>
                </div>
              ) : null}

              {/* <div className="flex items-center gap-[6px]">
                    <Image
                      alt="quiz-icon"
                      className="w-[16px] h-[16px]"
                      src={quiz}
                    />
                    <span className="text-sm leading-6 font-light">
                      {data.lesson_type_format === 1
                        ? "Text"
                        : data.lesson_type_format === 2
                        ? "Video"
                        : "Quiz"}
                    </span>
                  </div> */}
            </div>
          </div>
          {/* <div
              className={cn("transition-all duration-150 ease-in-out", {
                "rotate-0": showDropdown,
                "rotate-180": !showDropdown,
                hidden: data.lesson_data.length === 0,
              })}
            >
              <Image alt="arrow-up" className="w-4 h-4" src={arrowUp} />
            </div> */}
        </div>
      )}
      <div
        className={cn(`flex-col transition-all duration-150 ease-in-out`, {
          flex: showDropdown,
          hidden: data.lesson_data.length === 0 || !showDropdown,
          "px-3": moduleLength > 1,
        })}
      >
        {data.lesson_data.map((lessonItem: LessonItem) => (
          <div
            className={cn(`flex justify-between p-[10px] cursor-pointer`, {
              "!cursor-default": isLockedLesson || lessonItem.is_locked,
              "bg-grey-100":
                moduleLength <= 1 && lessonSlug === lessonItem.slug,
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
              className={cn("font-light truncate lg:max-w-[270px]", {
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
        {/* {data.assignment_data &&
        data?.assignment_data.assignment_status?.slug ===
          ASSIGNMENT_STATUS.PASSED ? (
          <div className="rounded-lg bg-green-400/10 px-4 py-3 flex justify-between flex-col sm:flex-row gap-2 flex-1">
            <div className="text-center">
              <p className="text-sm">Your Highest Score</p>
              <p className="text-[28px] leading-10 text-green-400">
                {data?.assignment_data?.score}%
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Button
                className="!px-6 min-w-[184px]"
                onClick={() => {
                  router.push(`/result/${data?.assignment_data?.id}`);
                }}
              >
                View Feedback
              </Button>
            </div>
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

export default LessonModule;
