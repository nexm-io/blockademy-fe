"use client";
import React, { useState } from "react";
import Button from "../Common/Button";
import { Lesson } from "@/redux/features/courses/type";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { claimReward, getAnswerQuiz, saveAnswerQuiz } from "@/redux/features/courses/action";
import { usePathname, useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import slugify from "slugify";
import slugifyText from "@/utils/slugifyText";
import { toast } from "react-toastify";

const Quiz = ({ lesson, index }: { lesson: Lesson; index: number }) => {
  const dispatch = useAppDispatch();
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selected, setSelected] = useState<number[]>([]);
  const questionType = lesson.question_detail.question_type;
  const router = useRouter();
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  const courseId = pathname.split("/")[3];
  const courseDetail = useAppSelector(
    (state: RootState) => state.courses.details
  );


  console.log(lesson);
  
  const handleOptionClick = (id: number) => {
    if (isCorrect === true) {
      return;
    }
    if (questionType === "single") {
      setSelected([id]);
      setIsCorrect(null);
    } else if (questionType === "multiple") {
      if (selected.includes(id)) {
        setSelected(selected.filter((option) => option !== id));
        setIsCorrect(null);
      } else {
        setSelected([...selected, id]);
        setIsCorrect(null);
      }
    }
  };
  const isLastLesson =
    courseDetail && index === courseDetail.lesson_data.length - 1;
  const handleSubmit = async () => {
    try {
      const lessonDetail = {
        campaign_id: path,
        course_id: courseId,
        lesson_id: lesson.lesson_id,
        quiz_id: lesson.question_detail.question_id,
        answer_id: selected,
      };
      const res = await dispatch(getAnswerQuiz({ lessonDetail })).unwrap();
      setIsCorrect(res.data.is_correct);
      if (res.data.is_correct === true) {
        setIsCorrect(res.data.is_correct);
        dispatch(saveAnswerQuiz({ lessonDetail }))
      }
    } catch (error) {
      console.log("Logout Failed");
    }
  };

  // const handleClaim = async () => {
  //     const res = await dispatch(claimReward(path)).unwrap();
  //     res.success && toast.success("Claim reward successfully");
  // };
  return (
    <div className="bg-gray-200 py-10 px-7 rounded-[8px]">
      <div>
        <h2 className="text-black-100 font-bold text-[22px] leading-6">
          {lesson.question_detail.question}
        </h2>
        <div className="mt-4 flex flex-col gap-4">
          {lesson.question_detail.answers.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOptionClick(item.id)}
              className={`border  px-4 py-3 rounded-[8px]  cursor-pointer select-none ${
                selected.includes(item.id)
                  ? `bg-blue-200 border-blue-100 text-blue-100 ${
                      isCorrect !== null &&
                      !isCorrect &&
                      "border-red-500 text-red-500 bg-red-50"
                    } ${
                      isCorrect !== null &&
                      isCorrect &&
                      "border-green-500 text-green-500 bg-green-50"
                    }`
                  : "border-gray-400 bg-transparent"
              }`}
            >
              <p>
                <span>{item.answer_text}</span>
              </p>
            </div>
          ))}
          <div className="flex gap-3">
            <Button
              disabled={(isCorrect && selected.length > 0) || !selected.length}
              className={`${
                selected.length ? "bg-blue-100" : "bg-gray-500"
              } w-[180px] px-2`}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            {isCorrect && !isLastLesson && (
              <Button
                className="w-[180px] px-2"
                onClick={() =>
                  // saveAnswer()
                  router.push(
                    `/courses/${path}/${courseId}/${slugify(
                      courseDetail?.campaign_title || "",
                      {
                        lower: true,
                      }
                    )}/${slugifyText(
                      courseDetail?.lesson_data[index + 1].lesson_title || ""
                    )}`
                  )
                }
              >
                Next Module
              </Button>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
