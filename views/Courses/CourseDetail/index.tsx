"use client";
import Link from "next/link";
import gift from "@/public/icons/giftcourse.svg";
import Image from "next/image";
import CourseModule from "@/components/Courses/CourseModule";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getDetailCourse } from "@/redux/features/courses/action";
import { useParams, useRouter } from "next/navigation";
import { Skeleton } from "@mui/material";
import React from "react";
import BackToTop from "@/components/BackToTop";
import cn from "@/services/cn";
import RewardDetail from "@/components/Reward/RewardDetail";
import { selectCourses } from "@/redux/features/courses/reducer";
import { selectAuth } from "@/redux/features/auth/reducer";

const CourseDetail = () => {
  const params = useParams();
  const { courseId } = params;
  const [isShowMenu, setShowMenu] = useState<boolean>(false);
  const { isLoading, details: courseDetail } = useAppSelector(selectCourses);
  const { isAuthenticated: isLogin } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { payload } = await dispatch(getDetailCourse(courseId as string));
      if (payload?.response?.data?.error) router.push("/not-found");
    })();
  }, []);

  useEffect(() => {
    if (isShowMenu) document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isShowMenu]);

  return (
    <div className="container min-h-screen">
      {isLoading ? (
        <div className="md:mt-[56px] mt-8">
          <>
            <Skeleton
              variant="rounded"
              sx={{ maxWidth: "300px" }}
              height={24}
            />
            <div className="flex flex-col md:flex-row justify-between mt-[52px]">
              <Skeleton variant="rounded" sx={{ width: "400px" }} height={50} />
            </div>
          </>
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
            <div className="flex flex-col gap-4 lg:gap-10">
              <nav className="w-full rounded-md">
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
                  <li className="leading-[23px]">
                    <span className="text-black-400 md:text-sm font-normal capitalize text-[12px]">
                      {courseDetail?.title}
                    </span>
                  </li>
                </ol>
              </nav>

              <div
                className={cn(`block lg:hidden`, {
                  active: isShowMenu,
                })}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="hambuger"
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
                      {courseDetail?.sub_course_data.length !== 0 &&
                        !isLoading && (
                          <div className="flex flex-col gap-10">
                            {courseDetail?.sub_course_data.map(
                              (subCourse, index) => (
                                <div
                                  key={index}
                                  onClick={() => {
                                    router.push(`/courses/${courseId}`);
                                  }}
                                >
                                  <CourseModule
                                    key={index}
                                    data={subCourse}
                                    activeDropdown={index === 0}
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

              <div className="flex justify-between gap-4 items-center flex-wrap lg:flex-nowrap">
                <h1 className="text-black-100 font-bold md:text-4xl text-3xl">
                  {courseDetail?.title}
                </h1>
              </div>

              {isLogin ? null : (
                <div className="bg-blue-200 py-3 px-4 flex items-center gap-2">
                  <Image alt="gift-icon" src={gift}></Image>
                  <span className="md:text-base text-[13px] font-normal text-black-100 ">
                    Log into your Blockademy account to register courses, track
                    progress and claim your rewards.
                  </span>
                </div>
              )}
            </div>

            {/* PASSED CASE */}
            {isLogin &&
              courseDetail?.is_registered === 1 &&
              courseDetail?.is_completed_assignment === 1 && (
                <RewardDetail courseDetail={courseDetail} />
              )}

            <div className="relative mt-4 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-10 w-full p-0">
              <div className="w-full px-0 md:px-0 col-start-1 col-end-3 order-last lg:order-first">
                <div className="w-full">
                  {courseDetail && (
                    <div className="text-black-100 md:text-lg text-base font-normal mb-9">
                      <div
                        id="content"
                        className="flex flex-col gap-3 course-content text-base"
                        dangerouslySetInnerHTML={{
                          __html: courseDetail.description,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full h-fit lg:sticky top-[100px] order-first lg:order-last mb-6">
                <div className="flex flex-col gap-5 md:px-0">
                  {/* {!isLogin && (
                    <div className="flex justify-end">
                      <Button
                        onClick={handleApplyCourse}
                        className="!px-6 min-w-[184px]"
                      >
                        Apply Course
                        {loading && (
                          <Loader3
                            className="animate-spin ml-2"
                            width={25}
                            height={25}
                          />
                        )}
                      </Button>
                    </div>
                  )} */}

                  {/* APPLY COURSE */}
                  {/* {isLogin &&
                    !registered &&
                    courseDetail?.is_registered === 0 &&
                    courseDetail.is_opened === 1 && (
                      <div className="flex justify-end">
                        <Button
                          onClick={handleApplyCourse}
                          className="!px-6 min-w-[184px]"
                        >
                          Apply Course
                          {loading && (
                            <Loader3
                              className="animate-spin ml-2"
                              width={25}
                              height={25}
                            />
                          )}
                        </Button>
                      </div>
                    )} */}

                  {/* TRY AGAIN */}
                  {/* {isLogin &&
                    courseDetail?.assignment_status.slug ===
                      ASSIGNMENT_STATUS.FAILED &&
                    courseDetail?.is_registered === 1 &&
                    courseDetail?.is_completed_assignment === 0 && (
                      <div className="rounded-lg bg-red-200/10 px-4 py-3 flex justify-between flex-col sm:flex-row gap-2 flex-1">
                        <div className="text-center">
                          <p className="text-sm">Your Highest Score</p>
                          <p className="text-[28px] leading-10 text-red-100">
                            {courseDetail?.aissignment_grade}%
                          </p>
                        </div>
                        <div className="flex items-center justify-center">
                          <Button
                            className="!px-6 min-w-[184px]"
                            disabled={isNotCompletedLesson}
                            onClick={() => {
                              if (isNotCompletedLesson) return;
                              router.push(
                                `/quiz/${courseDetail?.assigment_id}`
                              );
                            }}
                          >
                            Try Again
                          </Button>
                        </div>
                      </div>
                    )} */}

                  {courseDetail?.sub_course_data.length !== 0 && !isLoading && (
                    <div className="hidden lg:flex flex-col gap-10">
                      {courseDetail?.sub_course_data.map((subCourse, index) => (
                        <CourseModule
                          key={index}
                          data={subCourse}
                          activeDropdown={index === 0}
                        />
                      ))}
                    </div>
                  )}

                  {/* COMPLETE QUIZ */}
                  {/* {isLogin &&
                    courseDetail?.assignment_status.slug !==
                      ASSIGNMENT_STATUS.FAILED &&
                    courseDetail?.is_completed_assignment === 0 &&
                    registered && (
                      <div className="flex justify-end">
                        <Button
                          className="inline-block !px-6 bg-blue-600 group hover:bg-blue-600/50 w-full"
                          disabled={isNotCompletedLesson}
                          onClick={() => {
                            if (isNotCompletedLesson) return;
                            router.push(`/quiz/${courseDetail?.assigment_id}`);
                          }}
                        >
                          <span className="text-blue-700 group-hover:text-blue-700/80 transition-all">
                            Complete Quiz
                          </span>
                        </Button>
                      </div>
                    )} */}

                  {/* {isLogin &&
                    courseDetail?.assignment_status.slug !==
                      ASSIGNMENT_STATUS.FAILED &&
                    courseDetail?.is_completed_assignment === 0 &&
                    registered && (
                      <p className="text-grey-700">
                        <span className="text-red-200">Note:</span>
                        <span>
                          {" "}
                          Please review all course materials before attempting
                          the quiz.
                        </span>
                      </p>
                    )} */}
                  {/* LEARN AGAIN */}
                  {/* {isLogin && courseDetail?.is_completed_assignment === 1 && (
                    <>
                      <Button
                        className="md:w-auto inline-block !px-6 w-full"
                        disabled={isNotCompletedLesson}
                        onClick={() => {
                          if (isNotCompletedLesson) return;
                          router.push(`/result/${courseDetail?.assigment_id}`);
                        }}
                      >
                        Review Feedback
                      </Button>
                      <Button
                        className="md:w-auto inline-block !px-6 bg-blue-600 group hover:bg-blue-600/50 w-full"
                        disabled={isNotCompletedLesson}
                        onClick={() => {
                          if (isNotCompletedLesson) return;
                          router.push(`/quiz/${courseDetail?.assigment_id}`);
                        }}
                      >
                        <span className="text-blue-700 group-hover:text-blue-700/80 transition-all">
                          Learn Again
                        </span>
                      </Button>
                    </>
                  )} */}
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

export default CourseDetail;
