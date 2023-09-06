import React, { useEffect, useState } from "react";
import Button from "../Common/Button";
import { Lesson } from "@/redux/features/courses/type";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getAnswerQuiz } from "@/redux/features/courses/action";
import { redirect } from "next/navigation";
import { RootState } from "@/redux/store";

const Quiz = ({ lesson, index }: { lesson: Lesson; index: number }) => {
  const dispatch = useAppDispatch();
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [selected, setSelected] = useState<number[]>([]);
  const questionType = lesson.question_detail.question_type;
  const courseDetail = useAppSelector(
    (state: RootState) => state.courses.details
  );
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
  const handleSubmit = async () => {
    console.log("hihi");

    try {
      const lesson = {
        campaign_id: 1,
        course_id: 3,
        lesson_id: 1,
        quiz_id: 1,
        answer_id: selected,
      };
      const res = await dispatch(getAnswerQuiz({ lesson })).unwrap();
      console.log("handleSubmit ~ res:", res.data.is_correct);
      setIsCorrect(res.data.is_correct);
      if (res.data.is_correct === true) {
        setIsCorrect(res.data.is_correct);
        // redirect(
        //   `/courses/${slugify(courseDetail?.campaign_title || "", {
        //     lower: true,
        //   })}/${slugifyText(
        //     courseDetail?.lesson_data[0 + 1].lesson_title || ""
        //   )}`
        // );
      }
    } catch (error) {
      console.warn("Logout Failed");
    }
  };
  useEffect(() => {
    console.log(isCorrect);
  });

  return (
    <div className="bg-gray-200 py-10 px-7 rounded-[8px]">
      <div>
        <h2 className="text-black-100 font-bold text-[22px] leading-6">
          How does a block connect to another?
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
              {/* {isCorrect !== null && !isCorrect && (
                <div className="text-red-500">Text error</div>
              )}
              {isCorrect !== null && isCorrect && (
                <div className="text-green-500">Text success</div>
              )} */}
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
            {isCorrect && (
              <Button className="w-[180px] px-2" onClick={() => index + 1}>
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
