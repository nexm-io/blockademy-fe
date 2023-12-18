"use client";

import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useParams, useRouter } from "next/navigation";
import { RESULT_QUIZ_FAIL, RESULT_QUIZ_PASS } from "@/utils/constants";
import {
  getListHighestResult,
  getListResult,
} from "@/redux/features/quiz/action";
import Image from "next/image";
import Button from "../Common/Button";
import { Box, Skeleton, FormControlLabel, Radio } from "@mui/material";
import Link from "next/link";
import cn from "@/services/cn";
import { selectAuth } from "@/redux/features/auth/reducer";

const PASSED_QUIZZ_SCORE = 80;

export default function ResultQuiz() {
  const router = useRouter();
  const { id } = useParams();
  const { listResultData, loadingListResult, isViewResultInCourse } =
    useAppSelector((state) => state.quiz);
  const { isAuthenticated, token } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClickKeepLearning = () => {
    let url = "";

    if (listResultData) {
      const courseId = listResultData.course_id as string;
      const isSpecialization = listResultData.main_is_specialization;
      const courseSlug = listResultData.course_slug;

      if (listResultData.is_course_quiz || listResultData.is_module_quiz) {
        url = isSpecialization
          ? `/courses/${courseId}`
          : `/courses/${courseId}/${courseSlug}`;
      }

      if (listResultData.is_lesson_quiz) {
        const lessonSlug = listResultData.lesson_data?.slug;
        const moduleSlug = listResultData.lesson_data?.module_slug;
        url = isSpecialization
          ? `/courses/${courseId}/${moduleSlug}/lessons/${lessonSlug}`
          : `/courses/${courseId}/${courseSlug}/lessons/${lessonSlug}`;
      }

      router.push(url);
    }
  };

  const lessonUrl = useMemo(() => {
    if (!listResultData) return "";
    const isSpecialization = listResultData.main_is_specialization;
    const courseId = listResultData.course_id;
    const moduleSlug = listResultData.lesson_data?.module_slug;
    const lessonSlug = listResultData.lesson_data?.slug;
    const courseSlug = listResultData.course_slug;

    let href = `/courses/${courseId}`;

    if (isSpecialization) {
      href += moduleSlug ? `/${moduleSlug}/lessons/` : "";
    } else {
      href += courseSlug ? `/${courseSlug}/lessons/` : "";
    }

    href += lessonSlug || "";
    return href;
  }, [listResultData]);

  const nextLessonUrl = useMemo(() => {
    if (!listResultData) return "";
    const nextData = listResultData.lesson_data?.next_data;

    if (!nextData) return "";
    const isSpecialization = nextData.main_is_specialization;
    const courseId = nextData.sub_course_id;
    const moduleSlug = nextData.module_slug;
    const lessonSlug = nextData?.lesson_slug;
    const courseSlug = nextData.sub_course_slug;

    let href = `/courses/${courseId}`;

    if (isSpecialization) {
      href += moduleSlug ? `/${moduleSlug}/lessons/` : "";
    } else {
      href += courseSlug ? `/${courseSlug}/lessons/` : "";
    }

    href += lessonSlug || "";
    return href;
  }, [listResultData]);

  const courseUrl = useMemo(() => {
    if (!listResultData) return "";

    const {
      main_is_specialization: isSpecialization,
      course_id: courseId,
      course_slug: courseSlug,
    } = listResultData;

    const href = isSpecialization
      ? `/courses/${courseId}`
      : `/courses/${courseId}/${courseSlug}`;

    return href;
  }, [listResultData]);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof id !== "string") return;
      if (isViewResultInCourse) {
        await dispatch(getListHighestResult(id));
      } else {
        await dispatch(getListResult(id));
      }
    };
    fetchData();
  }, [dispatch, id]);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (!listResultData) return;
    if (!isAuthenticated || !token) {
      const isSpecialization = listResultData?.main_is_specialization === 1;
      const courseIdOrMainId = isSpecialization
        ? listResultData.course_id
        : `${listResultData.course_id}/${listResultData?.course_slug}`;

      const url = isSpecialization
        ? `/courses/${courseIdOrMainId}`
        : `/courses/${courseIdOrMainId}`;

      router.push(url);
    }
  }, [listResultData, isAuthenticated, token]);

  return (
    <>
      {loadingListResult ? (
        <Box sx={{ py: 6, m: "auto" }}>
          <div className="container">
            <Skeleton
              variant="rounded"
              sx={{ maxWidth: "300px" }}
              height={24}
            />
            <div className="flex flex-col md:flex-row justify-between mt-[52px]">
              <div className="text-[#1E2329] text-[36px] leading-[40px] font-bold">
                Result
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Skeleton variant="rectangular" height={118} />
          </div>

          <div className="container mt-10">
            <Skeleton
              variant="rounded"
              sx={{ maxWidth: "300px" }}
              height={40}
            />
            <div className="border-t border-[#EDEDED] mt-[20px] pt-[20px] grid gap-[42px]">
              {Array(4)
                .fill(0)
                .map((z, i) => (
                  <div key={i}>
                    <Skeleton
                      variant="rounded"
                      sx={{ maxWidth: "100px" }}
                      height={28}
                    />
                    <Skeleton
                      variant="rounded"
                      sx={{ maxWidth: "500px", marginTop: "12px" }}
                      height={32}
                    />
                    <div className="mt-8 grid gap-2">
                      <Skeleton variant="rectangular" height={58} />
                      <Skeleton variant="rectangular" height={58} />
                      <Skeleton variant="rectangular" height={58} />
                      <Skeleton variant="rectangular" height={58} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Box>
      ) : (
        <Box sx={{ py: "44px", m: "auto" }}>
          <div className="container">
            <nav className="w-full rounded-md">
              <ol className="list-reset flex text-gray-300 items-center md:pl-0 flex-wrap">
                <li className="leading-[23px] hover:underline">
                  <Link href={`/`}>
                    <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="leading-[23px]">
                  <span className="mx-3 md:text-[12px] text-[10px]">&gt;</span>
                </li>
                <li className="leading-[23px] hover:underline">
                  <Link href={`/courses`}>
                    <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                      Courses
                    </span>
                  </Link>
                </li>
                <li className="leading-[23px]">
                  <span className="mx-3 md:text-[12px] text-[10px]">&gt;</span>
                </li>
                <li className="leading-[23px] hover:underline">
                  <Link href={courseUrl}>
                    <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                      {listResultData?.course_title}
                    </span>
                  </Link>
                </li>
                <li className="leading-[23px]">
                  <span className="mx-3 md:text-[12px] text-[10px]">&gt;</span>
                </li>
                {listResultData?.is_lesson_quiz && (
                  <>
                    <li className="leading-[23px] hover:underline">
                      <Link href={lessonUrl}>
                        <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                          {listResultData?.lesson_data?.title}
                        </span>
                      </Link>
                    </li>
                    <li className="leading-[23px]">
                      <span className="mx-3 md:text-[12px] text-[10px]">
                        &gt;
                      </span>
                    </li>
                  </>
                )}
                <li className="leading-[23px]">
                  <span className="text-black-400 md:text-sm font-normal capitalize text-[12px]">
                    Result
                  </span>
                </li>
              </ol>
            </nav>
            <div className="flex flex-col md:flex-row justify-between mt-[32px]">
              <div className="text-[#1E2329] text-[36px] leading-[40px] font-bold">
                Result
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                {Number(listResultData?.score) < PASSED_QUIZZ_SCORE ? (
                  <Button
                    className="!bg-[#C6EAFF] group !hover:bg-[#C6EAFF]/50 !rounded-[4px] w-full md:w-[184px] px-2"
                    onClick={handleClickKeepLearning}
                  >
                    <span className="text-[#0B76A4] group-hover:text-[#0B76A4]/80 text-base">
                      Keep Learning
                    </span>
                  </Button>
                ) : null}

                {listResultData?.result === RESULT_QUIZ_PASS ? (
                  listResultData?.is_claimed &&
                  listResultData?.is_final_quiz ? (
                    <Button
                      className="w-full md:w-[184px] !px-0"
                      onClick={() => router.push("/accomplishments")}
                    >
                      Accomplishments
                    </Button>
                  ) : (
                    Number(listResultData?.score) >= PASSED_QUIZZ_SCORE && (
                      <Button
                        className="w-full md:w-[184px] !px-0"
                        onClick={() => router.push(nextLessonUrl)}
                      >
                        Go to Next item
                      </Button>
                    )
                  )
                ) : null}
              </div>
            </div>
          </div>

          <div
            className="mt-6"
            style={{
              background:
                listResultData?.result === RESULT_QUIZ_PASS
                  ? `rgba(2, 231, 85, 0.05)`
                  : `rgba(255, 51, 51, 0.05)`,
            }}
          >
            <div className="container py-6 flex flex-col md:flex-row gap-3 items-center justify-between">
              <div className="flex gap-3 md:flex-row flex-col items-center md:items-start">
                {listResultData?.result === RESULT_QUIZ_PASS ? (
                  <Image
                    alt="trophy"
                    src="/icons/icn-trophy.svg"
                    width={40}
                    height={40}
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.331 20L5 6.67139L6.67139 5L20 18.331L33.3286 5L35 6.67139L21.669 20L35 33.3286L33.331 34.9976L20 21.669L6.67139 34.9976L5 33.3286L18.331 20Z"
                      fill="#FF3333"
                    />
                  </svg>
                )}

                <div className="grid gap-3">
                  <p className="text-[24px] leading-[32px] text-[#1E2329] text-center md:text-left">
                    {listResultData?.result === RESULT_QUIZ_PASS
                      ? "Congratulations! You passed!"
                      : "Sorry! You failed!"}
                  </p>
                  <p className="text-[18px] leading-[26px] text-[#616161] text-center md:text-left">
                    {listResultData?.result === RESULT_QUIZ_PASS
                      ? "We believe in your ability to overcome challenges. Keep striving for excellence!"
                      : "Review the material and try again."}
                  </p>
                </div>
              </div>

              <div className="flex gap-10 md:border-l md:border-[#EDEDED] md:pl-10">
                <div className="w-[80px]">
                  <p className="text-[#1E2329] text-[18px] leading-[26px] text-center">
                    Score
                  </p>
                  <p
                    className={cn(`text-[28px] leading-[40px] text-center`, {
                      "text-[#02E755]":
                        listResultData?.result === RESULT_QUIZ_PASS,
                      "text-[#F33]":
                        listResultData?.result === RESULT_QUIZ_FAIL,
                    })}
                  >
                    {listResultData?.score}%
                  </p>
                </div>
                <div className="w-[80px]">
                  <p className="text-[#1E2329] text-[18px] leading-[26px] text-center">
                    True
                  </p>
                  <p className="text-[28px] leading-[40px] text-[#02E755] text-center">
                    {listResultData?.total_correct_answer}
                  </p>
                </div>
                <div className="w-[80px]">
                  <p className="text-[#1E2329] text-[18px] leading-[26px] text-center">
                    False
                  </p>
                  <p className="text-[28px] leading-[40px] text-[#F33] text-center">
                    {listResultData?.total_incorrect_answer}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-10">
            <h3 className="text-[#1E2329] text-[28px] leading-[40px] font-normal mt-6">
              {listResultData?.quiz}
            </h3>
            <div className="border-t border-[#EDEDED] mt-[20px] pt-[20px] grid gap-[42px]">
              {listResultData?.list_question_answer?.map((z, i) => (
                <div key={i}>
                  <p className="text-[#1F37B3] text-[20px] leading-[28px] font-normal">
                    Question {z?.order}
                  </p>
                  <p className="mt-3 text-[#1E2329] text-[24px] leading-[32px]">
                    {z?.question_title}
                  </p>

                  <div className="mt-8">
                    {z?.list_answer?.length > 0 ? (
                      <div>
                        <div className={cn(`grid gap-2`, {})}>
                          {z?.list_answer?.map((item: any, index: number) => (
                            <div
                              key={`${i}-${index}`}
                              className={cn(
                                `p-2 flex justify-between items-center`,
                                {
                                  "bg-[#02E755]/5":
                                    z.result_answer &&
                                    item.id === z.correct_answer.id,
                                  "bg-[#FF3333]/5":
                                    !z.result_answer &&
                                    item.id === z.user_answer?.id,
                                }
                              )}
                            >
                              <FormControlLabel
                                value={item?.id}
                                checked={
                                  z.user_answer
                                    ? z.user_answer?.id === item?.id
                                    : false
                                }
                                control={
                                  <Radio
                                    icon={
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <circle
                                          cx="12"
                                          cy="12"
                                          r="11.5"
                                          fill="white"
                                          stroke="#89939E"
                                        />
                                      </svg>
                                    }
                                    checkedIcon={
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <circle
                                          cx="12"
                                          cy="12"
                                          r="11.5"
                                          stroke="#1F37B3"
                                        />
                                        <circle
                                          cx="12"
                                          cy="12"
                                          r="6"
                                          fill="#1F37B3"
                                        />
                                      </svg>
                                    }
                                    name="checkbox"
                                    sx={{
                                      "&:hover": { bgcolor: "transparent" },
                                    }}
                                    disableRipple
                                  />
                                }
                                label={item.answer_text}
                                sx={{
                                  ":hover": {
                                    backgroundColor: "unset",
                                  },
                                  fontSize: "20px",
                                  lineHeight: "29px",
                                  color: "#1E1E3A",
                                  minWidth: "170px",
                                  wordBreak: "break-word",
                                }}
                              />
                              {z.result_answer &&
                              item.id === z.correct_answer.id ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                >
                                  <path
                                    d="M15.0003 26.95L8.05026 20L5.68359 22.35L15.0003 31.6667L35.0003 11.6667L32.6503 9.31665L15.0003 26.95Z"
                                    fill="#02E755"
                                  />
                                </svg>
                              ) : null}
                              {!z.result_answer &&
                              item.id === z.user_answer?.id ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M18.331 20L5 6.67139L6.67139 5L20 18.331L33.3286 5L35 6.67139L21.669 20L35 33.3286L33.331 34.9976L20 21.669L6.67139 34.9976L5 33.3286L18.331 20Z"
                                    fill="#FF3333"
                                  />
                                </svg>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Box>
      )}
    </>
  );
}
