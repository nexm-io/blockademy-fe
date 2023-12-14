"use client";
import Link from "next/link";
import gift from "@/public/icons/giftcourse.svg";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import React from "react";
import BackToTop from "@/components/BackToTop";
import LessonModule from "@/components/Courses/LessonsModule";
import cn from "@/services/cn";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useParams, useRouter } from "next/navigation";
import { Skeleton } from "@mui/material";
import {
  completeLesson,
  getDetailLesson,
  getMenuData,
  getNextPrevLesson,
} from "@/redux/features/courses/action";
import { selectCourses } from "@/redux/features/courses/reducer";
import { selectAuth } from "@/redux/features/auth/reducer";
import { CloseCirlce, Next, Previous } from "@/components/Icon";
import Button from "@/components/Common/Button";
import { Loader3 } from "@styled-icons/remix-line";
import { CircleCheck } from "@styled-icons/fa-solid";
import { ASSIGNMENT_STATUS } from "@/utils/constants";
import api from "@/services/axios";

const LessonDetail = () => {
  const [formState, setFormState] = useState<"video" | "quiz">("video");
  const params = useParams();
  const { subCourseSlug, lessonSlug, courseId } = params;
  const [isShowMenu, setShowMenu] = useState<boolean>(false);
  const [isWatching, setIsWatching] = useState<boolean>(false);
  const [assignmentStatus, setAssignmentStatus] = useState<string>(
    ASSIGNMENT_STATUS.NEW
  );
  const [isClaimSuccess, setIsClaimSuccess] = useState<boolean>(false);
  const [isClaimLoading, setIsClaimLoading] = useState<boolean>(false);
  const [completeQuizLoading, setCompleteQuizLoading] =
    useState<boolean>(false);
  const {
    lessonLoading,
    lesson,
    nextPrevLesson,
    menuData: { module_data },
  } = useAppSelector(selectCourses);
  const { isAuthenticated: isLogin } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleOnchange = (status: boolean) => {
    setIsWatching(status);
  };

  const handlePrevLesson = () => {
    if (!nextPrevLesson.previous_data.lesson_slug) return;
    router.push(
      `/courses/${courseId}/${subCourseSlug}/lessons/${nextPrevLesson.previous_data.lesson_slug}`
    );
  };

  const handleNextLesson = async () => {
    if (!nextPrevLesson.next_data.lesson_slug) return;
    router.push(
      `/courses/${courseId}/${nextPrevLesson.next_data.sub_course_slug}/lessons/${nextPrevLesson.next_data.lesson_slug}`
    );
  };

  const completeCurrentLesson = async () => {
    const { current_data: currentData } = nextPrevLesson;

    if (
      !isLogin ||
      !currentData.module_id ||
      !currentData.lesson_id ||
      currentData.is_complete_lesson
    )
      return;
    if (!currentData?.is_complete_lesson) {
      await dispatch(
        completeLesson({
          courseId: courseId as string,
          moduleId: currentData.module_id as number,
          lessonId: currentData.lesson_id as number,
        })
      );
    }
  };

  const claimReward = async () => {
    const { current_data: currentData } = nextPrevLesson;
    if (!isLogin || !lesson.is_registered || isClaimLoading || isClaimSuccess)
      return;
    setIsClaimLoading(true);
    try {
      await api.get(`/api/v10/claim-reward/${currentData.sub_course_id}`);
      router.push(`/courses/${courseId}/${currentData.sub_course_slug}`);
      setIsClaimSuccess(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsClaimLoading(false);
    }
  };

  const loadData = async () => {
    try {
      const { payload: payloadMenu } = await dispatch(
        getMenuData(courseId as string)
      );
      if (payloadMenu?.response?.data?.error) router.push("/not-found");

      const { payload: payloadDetail } = await dispatch(
        getDetailLesson({
          courseId: courseId as string,
          lessonSlug: lessonSlug as string,
        })
      );
      if (payloadDetail?.response?.data?.error) router.push("/not-found");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isShowMenu) document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isShowMenu]);

  useEffect(() => {
    lesson &&
      setAssignmentStatus(lesson.assignment_detail?.assignment_status?.slug);
  }, [lesson]);

  useEffect(() => {
    if (!isLogin) {
      const isSpecialization = lesson?.main_is_specialization;
      const courseIdOrMainId = isSpecialization
        ? courseId
        : `${courseId}/${lesson?.course_slug}`;

      const url = isSpecialization
        ? `/courses/${courseIdOrMainId}`
        : `/courses/${courseIdOrMainId}`;

      router.push(url);
    }
  }, [isLogin]);

  useEffect(() => {
    if (lessonLoading) {
      return;
    }

    const isRegistered = lesson?.is_registered;
    const isSpecialization = lesson?.main_is_specialization;
    const courseId = lesson?.course_id;
    const courseSlug = lesson?.course_slug;

    if (!isRegistered && !isSpecialization) {
      router.push(`/courses/${courseId}/${courseSlug}`);
    }

    if (!isRegistered && isSpecialization) {
      router.push(`/courses/${courseId}`);
    }
  }, [lessonLoading, lesson]);

  useEffect(() => {
    completeCurrentLesson();
  }, [subCourseSlug, lessonSlug, isLogin, nextPrevLesson]);

  useEffect(() => {
    dispatch(
      getNextPrevLesson({
        subCourseIdOrSlug: subCourseSlug as string,
        lessonSlug: lessonSlug as string,
      })
    );
  }, [subCourseSlug, lessonSlug]);

  useEffect(() => {
    setIsClaimSuccess(!!lesson?.is_claimed);
  }, [lesson]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container min-h-screen">
      {lessonLoading ? (
        <div className="md:mt-[56px] mt-8">
          <div className="">
            <Skeleton
              variant="rounded"
              sx={{ maxWidth: "300px" }}
              height={24}
            />
            <div className="flex flex-col md:flex-row justify-between mt-[52px]">
              <Skeleton variant="rounded" sx={{ width: "400px" }} height={50} />
            </div>
          </div>
          <div className="mt-10">
            <div className="relative mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-10 w-full p-0">
              <div className="w-full px-0 md:px-0 col-start-1 col-end-3">
                <Skeleton
                  variant="rounded"
                  sx={{ width: "100%" }}
                  height={400}
                />
                <div className="mt-4 grid gap-2">
                  {Array(10)
                    .fill(0)
                    .map((z, i) => (
                      <Skeleton
                        key={i}
                        variant="rounded"
                        sx={{ width: "100%" }}
                        height={24}
                      />
                    ))}
                </div>
              </div>
              <div className="h-full w-full sticky top-[100px]">
                <div className="flex flex-col gap-4 md:px-0 ">
                  <Skeleton
                    variant="rounded"
                    sx={{ width: "100%" }}
                    height={68}
                  />
                  <Skeleton
                    variant="rounded"
                    sx={{ width: "100%" }}
                    height={68}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <section>
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-[49px] lg:mb-[41px]">
              <nav className="rounded-md">
                <ol className="list-reset flex text-gray-300 items-center md:pl-0 flex-wrap">
                  <li className="leading-[23px] hover:underline">
                    <Link href="/">
                      <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li className="leading-[23px]">
                    <span className="mx-3 md:text-[12px] text-[10px]">
                      &gt;
                    </span>
                  </li>
                  <li className="leading-[23px] hover:underline">
                    <Link href="/courses">
                      <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                        Courses
                      </span>
                    </Link>
                  </li>
                  <li className="leading-[23px]">
                    <span className="mx-3 md:text-[12px] text-[10px]">
                      &gt;
                    </span>
                  </li>
                  {lesson?.main_is_specialization ? (
                    <>
                      <li className="leading-[23px] hover:underline">
                        <Link href={`/courses/${lesson?.main_course_data?.id}`}>
                          <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                            {lesson?.main_course_data?.title}
                          </span>
                        </Link>
                      </li>
                      <li className="leading-[23px]">
                        <span className="mx-3 md:text-[12px] text-[10px]">
                          &gt;
                        </span>
                      </li>
                    </>
                  ) : null}
                  <li className="leading-[23px] hover:underline inline-block">
                    <Link href={`/courses/${courseId}/${lesson?.course_slug}`}>
                      <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                        {lesson?.course_title}
                      </span>
                    </Link>
                  </li>
                  <li className="leading-[23px]">
                    <span className="mx-3 md:text-[12px] text-[10px]">
                      &gt;
                    </span>
                  </li>
                  <li className="leading-[23px]">
                    <span className="text-black-400 md:text-sm font-normal capitalize text-[12px]">
                      {lesson?.title}
                    </span>
                  </li>
                </ol>
              </nav>
            </div>

            <div
              className={cn(`block lg:hidden mb-10`, {
                active: isShowMenu,
              })}
            >
              <div className="flex items-center gap-3">
                <div
                  className="module hambuger"
                  onClick={() => setShowMenu((prev) => !prev)}
                >
                  <span></span>
                </div>
                <p className="text-blue-100">Menu</p>
              </div>
              <div
                className={cn(
                  "fixed top-0 left-0 right-0 bottom-0 transition-all duration-[0.6s] ease-in-out invisible bg-white-100 z-[999]",
                  { "!visible": isShowMenu }
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-black-100/30 invisible opacity-0 transition-all duration-[0.6s] ease-in-out",
                    { "!visible opacity-100": isShowMenu }
                  )}
                  onClick={() => setShowMenu(false)}
                ></div>
                <div
                  className={cn(
                    "h-full w-full gap-6 grid justify-between grid-cols-1 text-base font-normal text-black-100 bg-white-100 relative pt-12 pb-6 transition-all duration-[0.6s] ease-in-out top-0 left-0 right-0 bottom-0 -translate-x-full px-4",
                    { "!translate-x-0": isShowMenu }
                  )}
                >
                  <div className="absolute flex items-center top-[26px] right-5 gap-2 lg:hidden">
                    <p className="text-blue-100">Close</p>
                    <div
                      className="hambuger"
                      onClick={() => setShowMenu((prev) => !prev)}
                    >
                      <span></span>
                    </div>
                  </div>
                  <div className="mt-10 overflow-y-auto">
                    {module_data.length !== 0 && !lessonLoading && (
                      <div className="flex flex-col gap-10">
                        {module_data.map(
                          (z: any, i: React.Key | null | undefined) => (
                            <div
                              key={i}
                              onClick={() => {
                                router.push(`/courses/${courseId}`);
                              }}
                            >
                              <LessonModule
                                key={i}
                                data={z}
                                moduleLength={module_data.length}
                                isRegistered={lesson?.is_registered as number}
                                courseId={courseId as string}
                              />
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-black-100 font-bold md:text-4xl text-3xl mb-[48px]">
              {lesson?.title}
            </h1>

            {isLogin ? null : (
              <div className="bg-blue-200 py-3 px-4 flex items-center gap-2">
                <Image alt="gift-icon" src={gift}></Image>
                <span className="md:text-base text-[13px] font-normal text-black-100 ">
                  Log into your Blockademy account to register courses, track
                  progress and claim your rewards.
                </span>
              </div>
            )}

            <div className="relative mt-4 lg:mt-10 flex flex-col lg:flex-row gap-[60px]">
              <div className="flex-1">
                {lesson ? (
                  <>
                    {lesson.type_format === 2 && formState === "video" && (
                      <>
                        <VideoPlayer
                          typeUpload={lesson.type_upload}
                          url={lesson.link}
                          onChangeForm={() => {}}
                          onChangeStatus={handleOnchange}
                        />
                      </>
                    )}

                    {lesson.description && (
                      <div className="text-black-100 md:text-lg text-base font-normal mb-9">
                        <div
                          id="content"
                          className="flex flex-col gap-3 course-content text-base"
                          dangerouslySetInnerHTML={{
                            __html: lesson.description,
                          }}
                        />
                      </div>
                    )}

                    {lesson.type_format === 3 && (
                      <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-10 mb-[11px]">
                          {assignmentStatus === ASSIGNMENT_STATUS.NEW && (
                            <div>
                              <Button
                                className="w-full md:w-auto md:min-w-[184px]"
                                onClick={() => {
                                  setCompleteQuizLoading(true);
                                  router.push(
                                    `/quiz/${lesson.assignment_detail?.id}`
                                  );
                                }}
                                disabled={completeQuizLoading}
                              >
                                Complete Quiz
                                {completeQuizLoading && (
                                  <Loader3
                                    className="animate-spin ml-2"
                                    width={20}
                                    height={20}
                                  />
                                )}
                              </Button>
                            </div>
                          )}

                          {assignmentStatus !== ASSIGNMENT_STATUS.NEW && (
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col items-center gap-1 mb-10 lg:mb-0">
                                <div className="text-xl leading-8 font-bold flex gap-2 items-center w-full justify-center lg:justify-start">
                                  {assignmentStatus !==
                                  ASSIGNMENT_STATUS.NEW ? (
                                    assignmentStatus ===
                                    ASSIGNMENT_STATUS.FAILED ? (
                                      <>
                                        <CloseCirlce />
                                        You failed!
                                      </>
                                    ) : (
                                      <>
                                        <CircleCheck
                                          className={`${"text-green-400 w-[18px] h-[18px]"}`}
                                        />
                                        You passed!
                                      </>
                                    )
                                  ) : null}
                                </div>
                                <div className="text-grey-700 font-light">
                                  {assignmentStatus !== ASSIGNMENT_STATUS.NEW
                                    ? assignmentStatus ===
                                      ASSIGNMENT_STATUS.FAILED
                                      ? "Review the material and try again"
                                      : "Keep striving for excellence!"
                                    : null}
                                </div>
                              </div>
                              <Link
                                className="text-blue-100 hover:bg-blue-600/30 hover:underline md:w-auto inline-block px-6 w-full text-center rounded py-[13px] transition-all duration-150"
                                href={`/quiz/${lesson.assignment_detail?.id}`}
                                onClick={() => setCompleteQuizLoading(true)}
                              >
                                {assignmentStatus === ASSIGNMENT_STATUS.PASSED
                                  ? "Learn Again"
                                  : "Try Again"}
                                {completeQuizLoading && (
                                  <Loader3
                                    className="animate-spin ml-2"
                                    width={20}
                                    height={20}
                                  />
                                )}
                              </Link>
                            </div>
                          )}
                        </div>
                        <div className="h-[1px] bg-grey-100 mb-[2px]"></div>

                        {assignmentStatus === ASSIGNMENT_STATUS.NEW && (
                          <div className="grid grid-cols-3">
                            <div className="flex flex-col col-span-2 gap-1">
                              <p className="text-xl leading-8 font-bold">
                                Receive grade
                              </p>
                              <p className="text-grey-700 font-light">
                                <span className="font-bold">To Pass</span> 80%
                                or higher
                              </p>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-xl leading-8 font-bold">
                                Your grade
                              </p>
                              <p className="text-grey-700 font-light">-</p>
                            </div>
                          </div>
                        )}

                        {assignmentStatus !== ASSIGNMENT_STATUS.NEW && (
                          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
                            <div className="flex flex-col items-center gap-1 mb-10 lg:mb-0">
                              <div className="text-xl leading-8 font-bold flex gap-2 items-center w-full justify-center lg:justify-start">
                                {assignmentStatus !== ASSIGNMENT_STATUS.NEW ? (
                                  assignmentStatus ===
                                  ASSIGNMENT_STATUS.FAILED ? (
                                    <CloseCirlce />
                                  ) : (
                                    <CircleCheck
                                      className={`${"text-green-400 w-[18px] h-[18px]"}`}
                                    />
                                  )
                                ) : null}
                                Receive grade
                              </div>
                              <div className="text-grey-700 font-light">
                                <span className="font-bold">To Pass</span> 80%
                                or higher
                              </div>
                            </div>
                            <div
                              className={cn(
                                `flex flex-col lg:flex-row items-center gap-2 lg:gap-5 px-6 py-2 lg:py-0 lg:h-[50px] rounded bg-green-400/10`,
                                {
                                  "bg-green-400/10":
                                    assignmentStatus ===
                                    ASSIGNMENT_STATUS.PASSED,
                                  "bg-red-200/10":
                                    assignmentStatus ===
                                    ASSIGNMENT_STATUS.FAILED,
                                }
                              )}
                            >
                              <p className="text-sm">
                                Your Lesson Highest Score
                              </p>
                              <p
                                className={cn(
                                  `text-green-400 text-[28px] leading-10`,
                                  {
                                    "text-green-400":
                                      assignmentStatus ===
                                      ASSIGNMENT_STATUS.PASSED,
                                    "text-red-200":
                                      assignmentStatus ===
                                      ASSIGNMENT_STATUS.FAILED,
                                  }
                                )}
                              >
                                {lesson.assignment_detail?.score}%
                              </p>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Link
                                href={`/result/${lesson.assignment_detail?.id}`}
                              >
                                <Button className="w-full md:w-auto md:min-w-[184px] mb-[11px]">
                                  Review Feedback
                                </Button>
                              </Link>
                              {/* <p className="text-[10px] leading-[14px] text-grey-700 text-center">
                                We keep your highest score
                              </p> */}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-end gap-10 mt-10">
                      <div
                        className={cn(
                          `px-[14px] py-1 flex items-center gap-2 hover:bg-blue-200 transition-all rounded cursor-pointer`,
                          {
                            hidden:
                              !nextPrevLesson?.previous_data || lessonLoading,
                          }
                        )}
                        onClick={handlePrevLesson}
                      >
                        <Previous />
                        <span className="text-blue-100">Previous</span>
                      </div>
                      <div
                        className={cn(
                          `px-[14px] py-1 flex items-center gap-2 hover:bg-blue-200 transition-all rounded cursor-pointer`,
                          {
                            hidden:
                              !nextPrevLesson?.next_data ||
                              (lesson?.assignment_detail?.id &&
                                assignmentStatus !==
                                  ASSIGNMENT_STATUS.PASSED) ||
                              lessonLoading,
                          }
                        )}
                        onClick={handleNextLesson}
                      >
                        <span className="text-blue-100">Next</span>
                        <Next />
                      </div>
                      <div
                        className={cn(
                          `px-[14px] py-1 hidden items-center gap-2 bg-blue-200 group duration-300 transition-all rounded`,
                          {
                            "!flex":
                              lesson &&
                              !lesson.assignment_detail?.id &&
                              !lesson?.is_claimed &&
                              !nextPrevLesson?.next_data,
                            "hover:bg-blue-100 cursor-pointer": !isClaimSuccess,
                            "opacity-90 cursor-default": isClaimLoading,
                          }
                        )}
                        onClick={claimReward}
                      >
                        <span
                          className={cn(`text-blue-100`, {
                            "group-hover:text-white-100": !isClaimSuccess,
                          })}
                        >
                          {isClaimSuccess ? "Completed" : "Complete"}
                        </span>
                        {isClaimLoading && (
                          <Loader3
                            className="animate-spin ml-2 text-blue-100 group-hover:text-white-100"
                            width={14}
                            height={14}
                          />
                        )}
                        {isClaimSuccess ? (
                          <CircleCheck
                            className={`${"text-green-400 w-[14px] h-[14px]"}`}
                          />
                        ) : null}
                      </div>
                    </div>
                  </>
                ) : (
                  <div>No Lesson</div>
                )}
              </div>
              <div className="w-full lg:w-[352px]">
                <div className="flex flex-col gap-5 md:px-0">
                  {module_data.length !== 0 && !lessonLoading && (
                    <div className="hidden lg:flex flex-col gap-10">
                      {module_data.map(
                        (z: any, i: React.Key | null | undefined) => (
                          <LessonModule
                            key={i}
                            data={z}
                            moduleLength={module_data.length}
                            isRegistered={lesson?.is_registered as number}
                            courseId={courseId as string}
                          />
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <BackToTop />
    </div>
  );
};

export default LessonDetail;
