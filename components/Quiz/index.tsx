"use client";
import React, { useEffect, useState } from "react";
import Button from "../Common/Button";
import { Lesson } from "@/redux/features/courses/type";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  claimReward,
  getAnswerQuiz,
  resetFinish,
  saveAnswerQuiz,
} from "@/redux/features/courses/action";
import { usePathname, useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import slugify from "slugify";
import slugifyText from "@/utils/slugifyText";
import { toast } from "react-toastify";
import { isBefore } from "date-fns";
import { claimInWallet } from "@/redux/features/user/action";
import Popup from "../Popup";

const Quiz = ({
  lesson,
  index,
  campaign_id,
  course_id,
}: {
  lesson: Lesson;
  index: number;
  course_id: string;
  campaign_id: string;
}) => {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selected, setSelected] = useState<number[]>([]);
  const questionType = lesson.question_detail.question_type;
  const router = useRouter();
  const pathname = usePathname();
  const courseDetail = useAppSelector(
    (state: RootState) => state.courses.details
  );
  const quiz = useAppSelector((state: RootState) => state.courses.quiz);

  const isLastLesson =
    courseDetail && index === courseDetail.lesson_data.length - 1;

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

  const incompleteCourses = courseDetail?.other_courses.data.filter(
    (course) => course.is_completed === 0
  );

  const handleSubmit = async () => {
    try {
      const lessonDetail = {
        campaign_id: campaign_id,
        course_id: course_id,
        lesson_id: lesson.lesson_id,
        quiz_id: lesson.question_detail.question_id,
        answer_id: selected,
      };
      const res = await dispatch(getAnswerQuiz({ lessonDetail })).unwrap();

      setIsCorrect(res.data.is_correct);
      if (res.data.is_correct === true) {
        setIsCorrect(res.data.is_correct);
        dispatch(saveAnswerQuiz({ lessonDetail }));
      }
    } catch (error) {
      console.error("Logout Failed");
    }
  };

  const handleClaimReward = async () => {
    if (courseDetail) {
      const res = await dispatch(
        claimInWallet(courseDetail.reward_id)
      ).unwrap();
      setShow(false);
      res.success && toast.success("Claim reward successfully");
    }
  };

  useEffect(() => {
    if (quiz.is_finished === 1) {
      setShow(true);
    }
  }, [quiz.is_finished]);

  useEffect(() => {

    dispatch(resetFinish(0));
  }, [dispatch]);

  return (
    lesson.question_detail ? <div className="bg-gray-200 py-10 px-7 rounded-[8px] ">
    <div>
      <h2 className="text-black-100 font-bold text-[22px] leading-6">
        {lesson.question_detail.question}
      </h2>
      <div className="mt-4 flex flex-col gap-4">
        {lesson.question_detail.answers && lesson.question_detail.answers.map((item, index) => (
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
                  `/courses/${courseDetail?.campaign_slug}/${
                    courseDetail?.slug
                  }/${slugifyText(
                    courseDetail?.lesson_data[index + 1].lesson_slug || ""
                  )}`
                )
              }
            >
              Next Module
            </Button>
          )}

          {isCorrect &&
            isLastLesson &&
            courseDetail.is_finished === 0 &&
            quiz.is_finished === 0 && (
              <Button
                className="w-[180px] px-2"
                onClick={() => {
                  const nextCourse = incompleteCourses?.[0];
                  if (nextCourse) {
                    router.push(
                      `/courses/${courseDetail?.campaign_slug}/${nextCourse.slug}/${nextCourse.lesson_first?.lesson_slug}`
                    );
                  }
                }}
              >
                Next Course
              </Button>
            )}
        </div>
      </div>
    </div>

    {quiz.is_finished === 1 &&
      show &&
      courseDetail?.reward_is_claimed === 0 && (
        <Popup
          title="Congratulation 🎉"
          description="You completed the campaign and enjoy your rewards."
          onClose={() => setShow(false)}
          handleClaim={handleClaimReward}
        />
      )}
  </div> : <div>No Quizz </div>
  );
};

export default Quiz;
