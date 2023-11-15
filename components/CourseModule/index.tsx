"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import clock from "@/public/icons/clockfilled.svg";
import quiz from "@/public/icons/quiz.svg";
import { Lesson } from "@/redux/features/courses/type";
import { secondsToMinutes } from "@/utils/convertToMinutes";
import { CircleCheck } from "@styled-icons/fa-solid";
import { useParams, useSearchParams } from "next/navigation";
import { BarChartAlt2 } from "@styled-icons/boxicons-solid";
import api from "@/services/axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface CourseModuleProps {
  lesson: Lesson;
}

const CourseModule: React.FC<CourseModuleProps> = ({ lesson }) => {
  const searchParams = useSearchParams();
  const params = useParams();
  const courseId = params.id;
  const lessonId = searchParams.get("lesson_id") || 0 as number;
  const [isCompleted, setIsCompleted] = useState(!!lesson.is_complete);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const token = useSelector((state: RootState) => state.auth.token);

  const handleCompleteLesson = async () => {
    if (!isAuthenticated || !token || isCompleted) return;
    try {
      const response = await api.post(
        `/api/v10/course/${courseId}/lesson/${lesson.lesson_id}`
      );
      if (response.status === 200) {
        setIsCompleted(true);
      }
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    if (!isAuthenticated || !token) setIsCompleted(false);
  }, [token, isAuthenticated]);

  return (
    <div
      className="w-full md:mx-0 py-3 bg-gray-200 flex justify-between items-center px-[23px] rounded-lg"
      onClick={handleCompleteLesson}
    >
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
            <span className="text-xs leading-5">
              {lesson.lesson_type_format === 1 ? "Text" : "Video"}
            </span>
          </div>
        </div>
      </div>

      {isCompleted ? (
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
      )}
    </div>
  );
};

export default CourseModule;
