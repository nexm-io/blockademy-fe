"use client";
import Link from "next/link";
import gift from "@/public/icons/giftcourse.svg";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import CourseModule from "@/components/CourseModule";
import { useCallback, useEffect, useMemo, useState } from "react";
import Quiz from "@/components/Quiz";
import Button from "@/components/Common/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { getDetailCourse } from "@/redux/features/courses/action";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import api from "@/services/axios";
import InfoPopup from "@/components/Popup/InfoPopup";
import { Loader3 } from "@styled-icons/remix-line";
import BackToTop from "@/components/BackToTop";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import { toast } from "react-toastify";
import { ASSIGNMENT_STATUS } from "@/utils/constants";
import RewardDetail from "@/components/Reward/RewardDetail";

const CourseDetail = () => {
  const [formState, setFormState] = useState<"video" | "quiz">("video");
  const params = useParams();
  const searchParams = useSearchParams();
  const courseId = params.id;
  const lessonId = searchParams.get("lesson_id") || (0 as number);
  const [isWatching, setIsWatching] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState(false);
  const [registered, setRegistered] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [stepCompleted, setStepCompleted] = useState<string[]>([]);
  const [completedLesson, setCompletedLesson] = useState<number[]>([]);
  const [urlNextLesson, setUrlNextLesson] = useState<string>("");
  const [isNextLesson, setIsNextLesson] = useState<boolean>(false);

  const courseDetail = useAppSelector(
    (state: RootState) => state.courses.details
  );
  const isLoading = useAppSelector(
    (state: RootState) => state.courses.isLoading
  );
  const isLogin = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const token = useSelector((state: RootState) => state.auth.token);
  const isCompletedQuiz = useMemo(() => {
    if (!courseDetail?.lesson_data || !courseDetail?.lesson_data.length)
      return false;
    return courseDetail?.lesson_data.every((item) => item.is_complete === 1);
  }, [courseDetail?.lesson_data]);

  const lesson = useMemo(
    () =>
      courseDetail?.lesson_data?.find((item) => item.lesson_id === +lessonId),
    [courseDetail?.lesson_data, lessonId]
  );

  const lessonOrder = useMemo(() => {
    const lessonData = courseDetail?.lesson_data || [];
    const currIndex =
      lessonData.findIndex((lesson) => lesson.lesson_id === Number(lessonId)) ||
      0;
    const lessonLength = lessonData.length - 1;
    return {
      first: lessonData?.[0]?.lesson_id === +lessonId,
      last: currIndex >= lessonLength,
    };
  }, [courseDetail?.lesson_data, lessonId]);

  const isNotCompletedLesson = useMemo(() => {
    return isCompletedQuiz ||
      (lessonOrder.last && completedLesson.includes(+lessonId))
      ? false
      : true;
  }, [completedLesson, isCompletedQuiz, lessonOrder.last, lessonId]);

  const getNextLessonUrl = useCallback(() => {
    const lessonData = courseDetail?.lesson_data || [];
    const currIndex =
      lessonData.findIndex((lesson) => lesson.lesson_id === Number(lessonId)) ||
      0;
    const lessonLength = lessonData.length - 1;

    const nextLessonId =
      currIndex < lessonLength
        ? lessonData[currIndex + 1].lesson_id
        : lessonData[0].lesson_id;
    const url = `/courses/${courseId}?lesson_id=${nextLessonId}`;
    return url;
  }, [courseDetail?.lesson_data, courseId, lessonId]);

  const getPrevLessonUrl = useCallback(() => {
    const lessonData = courseDetail?.lesson_data || [];
    const currIndex =
      lessonData.findIndex((lesson) => lesson.lesson_id === Number(lessonId)) ||
      0;
    const lessonLength = lessonData.length - 1;

    const prevLessonId =
      currIndex < lessonLength
        ? lessonData[currIndex - 1].lesson_id
        : lessonData[0].lesson_id;
    const url = `/courses/${courseId}?lesson_id=${prevLessonId}`;
    return url;
  }, [courseDetail?.lesson_data, courseId, lessonId]);

  const handleChangeForm = useCallback(
    (status: boolean) => {
      if (status) {
        const url = getNextLessonUrl();
        setStepCompleted([...stepCompleted, "video"]);
        setUrlNextLesson(url);
        if (stepCompleted.length >= 1) {
          setIsNextLesson(true);
        }
        // setFormState(`quiz`);
      }
    },
    [getNextLessonUrl, stepCompleted]
  );

  const handleOnchange = (status: boolean) => {
    setIsWatching(status);
  };

  const handleApplyCourse = async () => {
    if (!isLogin) {
      router.push("/login");
      toast.info("Please login to continue");
      return;
    }
    setLoading(true);
    try {
      const response = await api.get(
        `/api/v10/register-course?course_id=${courseId}`
      );
      if (response.status === 200) {
        setRegistered(true);
        setShowPopup(true);
      }
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const { payload } = await dispatch(getDetailCourse(courseId as string));
      if (payload?.response?.data?.error) router.push("/not-found");
    })();
  }, []);

  useEffect(() => {
    if (courseDetail?.id) setRegistered(!!courseDetail.is_registered);
  }, [courseDetail]);

  const handleScroll = useCallback(() => {
    const bodyBottom = document.body.getBoundingClientRect().bottom;
    const bottom = Math.round(bodyBottom) <= window.innerHeight;
    if (
      bottom &&
      !completedLesson.includes(+lessonId) &&
      !stepCompleted.includes("read")
    ) {
      setStepCompleted([...stepCompleted, "read"]);
    }
  }, [completedLesson, lessonId, stepCompleted]);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const isCompletedStep = useMemo(() => {
    if (!lesson?.lesson_description) {
      return stepCompleted.includes("video");
    }
    if (!lesson?.lesson_link) {
      return stepCompleted.includes("read");
    }
    return stepCompleted.length >= 2;
  }, [lesson?.lesson_description, lesson?.lesson_link, stepCompleted]);

  const handleCheckCompletedCourse = useCallback(async () => {
    if (!isCompletedStep) return;
    if (completedLesson.includes(+lessonId)) return;
    if (!isAuthenticated || !token) {
      if (isNextLesson && !lessonOrder.last) {
        router.push(urlNextLesson);
        setIsNextLesson(false);
      }
      return;
    }
    try {
      const response = await api.post(
        `/api/v10/course/${courseId}/lesson/${lessonId}`
      );
      if (response.status === 200) {
        setCompletedLesson([...completedLesson, +lessonId]);
        setStepCompleted([]);
        if (isNextLesson && !lessonOrder.last) {
          router.push(urlNextLesson);
        }
      }
    } catch (error) {
      return null;
    } finally {
      setIsNextLesson(false);
    }
  }, [
    isCompletedStep,
    isAuthenticated,
    token,
    courseId,
    lessonId,
    completedLesson,
    isNextLesson,
    lessonOrder.last,
    router,
    urlNextLesson,
  ]);

  useEffect(() => {
    handleCheckCompletedCourse();
  }, [handleCheckCompletedCourse]);

  // useEffect(() => {
  //   if (!courseDetail) return;
  //   if (courseDetail?.lesson_data && courseDetail.lesson_data.length > 0) {
  //     const isLessonIdExists = courseDetail.lesson_data.some(
  //       (lesson) => lesson.lesson_id === Number(lessonId)
  //     );

  //     if (!isLessonIdExists) {
  //       router.push("/not-found");
  //     }
  //   }
  // }, [courseDetail, lessonId]);

  return (
    <div className="container mt-36">
      {isLoading ? (
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
          <section className="md:mt-[56px] mt-8">
            <div className="grid gap-4">
              <nav className="w-full rounded-md">
                <ol className="list-reset flex text-gray-300 items-center md:pl-0 flex-wrap">
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
                    <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                      {courseDetail?.title}
                    </span>
                  </li>
                </ol>
              </nav>
              <div className="flex justify-between gap-4 items-center flex-wrap lg:flex-nowrap mt-[36px]">
                <h1 className="text-black-100 font-bold md:text-4xl text-3xl">
                  {courseDetail?.title}
                </h1>
              </div>
              {courseDetail?.title &&
                courseDetail?.title.includes(
                  "HUTECH Workshop on Blockchain and Smart Contracts (Intro)"
                ) && (
                  <div>
                    <p className="text-blue-100 italic capitalize">
                      Explore fundamental concepts and gain an overview of
                      blockchain.
                    </p>
                    <p className="text-blue-100 italic capitalize">
                      Earn NFT Certificate on Solana chain as you complete the
                      course.
                    </p>
                  </div>
                )}
              {isLogin ? null : (
                <div className="bg-blue-200 py-3 px-4 flex gap-2">
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
              courseDetail?.is_completed === 1 &&
              courseDetail?.is_completed_assignment === 1 && (
                <RewardDetail courseDetail={courseDetail} />
              )}

            <div className="relative mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-10 w-full p-0">
              <div className="w-full px-0 md:px-0 col-start-1 col-end-3 order-last lg:order-first">
                <div className="w-full">
                  {courseDetail ? (
                    courseDetail.lesson_data.map(
                      (lesson, index) =>
                        Number(lessonId) === lesson.lesson_id && (
                          <>
                            {lesson.lesson_type_format === 2 &&
                              formState === "video" && (
                                <>
                                  <VideoPlayer
                                    typeUpload={lesson.lesson_type_upload}
                                    url={lesson.lesson_link}
                                    onChangeForm={handleChangeForm}
                                    onChangeStatus={handleOnchange}
                                  />
                                </>
                              )}
                            {lesson.lesson_type_format === 1 &&
                              formState === "quiz" && (
                                <Quiz
                                  lesson={lesson}
                                  index={index}
                                  campaign_id={courseDetail.campaign_id}
                                  course_id={courseDetail.id}
                                />
                              )}
                            <h2 className="font-bold md:text-[26px] text-xl text-black-100 md:mt-11 mt-7 md:mb-7 mb-5">
                              {lesson.lesson_title}
                            </h2>
                            <div className="text-black-100 md:text-lg text-base font-normal mb-9">
                              <div
                                id="content"
                                className="flex flex-col gap-3 course-content text-base"
                                dangerouslySetInnerHTML={{
                                  __html: lesson.lesson_description,
                                }}
                              />
                            </div>
                          </>
                        )
                    )
                  ) : (
                    <div>No Lesson</div>
                  )}
                </div>
              </div>

              <div className="w-full h-fit lg:sticky top-[100px] order-first lg:order-last mb-6">
                <div className="flex flex-col gap-5 md:px-0">
                  {!isLogin && (
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
                  )}

                  {/* APPLY COURSE */}
                  {isLogin &&
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
                    )}

                  {/* TRY AGAIN */}
                  {isLogin &&
                    courseDetail?.assignment_status.slug ===
                      ASSIGNMENT_STATUS.FAILED &&
                    courseDetail?.is_registered === 1 &&
                    courseDetail?.is_completed === 1 &&
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
                    )}

                  {/* COMPLETE QUIZ */}
                  {isLogin &&
                    courseDetail?.assignment_status.slug !==
                      ASSIGNMENT_STATUS.FAILED &&
                    courseDetail?.is_completed_assignment === 0 &&
                    registered && (
                      <div className="flex justify-end">
                        <Button
                          className="md:w-auto inline-block !px-6 bg-blue-600 group hover:bg-blue-600/50 min-w-[184px]"
                          disabled={isNotCompletedLesson}
                          onClick={() => {
                            if (isNotCompletedLesson) return;
                            router.push(`/quiz/${courseDetail?.assigment_id}`);
                          }}
                        >
                          <span className="text-blue-700 group-hover:text-blue-700/80 font-bold transition-all">
                            Complete Quiz
                          </span>
                        </Button>
                      </div>
                    )}

                  {courseDetail?.lesson_data.length !== 0 &&
                    !isLoading &&
                    courseDetail?.lesson_data.map((lesson, index) => (
                      <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => {
                          router.push(
                            `/courses/${courseId}?lesson_id=${lesson.lesson_id}`
                          );
                        }}
                      >
                        <CourseModule
                          key={index}
                          lesson={lesson}
                          completedLesson={completedLesson}
                        />
                      </div>
                    ))}

                  {isLogin &&
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
                    )}
                  {/* LEARN AGAIN */}
                  {courseDetail?.is_completed_assignment === 1 && (
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
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {showPopup && (
        <InfoPopup
          title="Congratulations!"
          desc={
            <div className="text-gray-700 text-center mb-4">
              <p>Thanks for joining the course.</p>
              <p>
                Please enjoy your journey, complete quiz and get certificate.
              </p>
            </div>
          }
          onClose={() => setShowPopup(false)}
          className="md:max-w-[359px]"
        >
          <Button
            type="button"
            onClick={() => setShowPopup(false)}
            className="mt-2 w-[184px]"
          >
            Yap, sure
          </Button>
        </InfoPopup>
      )}
      <BackToTop />
    </div>
  );
};

export default CourseDetail;
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};
