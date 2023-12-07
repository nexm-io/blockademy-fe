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
import { RootState } from "@/redux/store";
import { useParams, useRouter } from "next/navigation";
import { Skeleton } from "@mui/material";
import { getDetailCourse, getSubCourseDetail } from "@/redux/features/courses/action";
import { LessonItem } from "@/redux/features/courses/type";
import { selectCourses } from "@/redux/features/courses/reducer";
import { selectAuth } from "@/redux/features/auth/reducer";

const LessonDetail = () => {
  const [formState, setFormState] = useState<"video" | "quiz">("video");
  const [lesson, setLesson] = useState<LessonItem>();
  const params = useParams();
  const { subCourseSlug, lessonSlug, courseId } = params;
  const [isShowMenu, setShowMenu] = useState<boolean>(false);
  const [isWatching, setIsWatching] = useState<boolean>(false);
  const {
    subCourseLoading,
    subCourse,
  } = useAppSelector(selectCourses);
  const { isAuthenticated: isLogin } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleOnchange = (status: boolean) => {
    setIsWatching(status);
  };

  const loadDetailCourse = async () => {
    const { payload } = await dispatch(
      getSubCourseDetail(subCourseSlug as string)
    );
    if (payload?.response?.data?.error) router.push("/not-found");
  };

  // useEffect(() => {
  //   if (subCourseSlug !== previousSubCourseSlug) {
  //     const loadSubCourse = async () => {
  //       const { payload } = await dispatch(
  //         getDetailCourse(subCourseSlug as string)
  //       );
  //       if (payload?.response?.data?.error) router.push("/not-found");
  //     };

  //     loadSubCourse();
  //   }
  //   dispatch(setPrevSubCourseSlug(subCourseSlug));
  // }, [subCourseSlug, lessonSlug, dispatch, router]);

  useEffect(() => {
    if (subCourse) {
      const lessonData = subCourse.module_data.flatMap(
        (item: any) => item.lesson_data
      );
      const lesson = lessonData.find(
        (item: LessonItem) => item.slug === lessonSlug
      );
      if (lesson) {
        setLesson(lesson);
      }
    }
  }, [subCourse, lessonSlug]);

  useEffect(() => {
    if (isShowMenu) document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isShowMenu]);

  useEffect(() => {
    loadDetailCourse();
  }, [])

  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
      return;
    }
  }, [isLogin]);

  return (
    <div className="container min-h-screen">
      {subCourseLoading ? (
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
                  <li className="leading-[23px] hover:underline">
                    <Link
                      href={`/courses/${subCourse?.main_course_data?.id}`}
                    >
                      <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                        {subCourse?.main_course_data?.title}
                      </span>
                    </Link>
                  </li>
                  <li className="leading-[23px]">
                    <span className="mx-3 md:text-[12px] text-[10px]">
                      &gt;
                    </span>
                  </li>
                  <li className="leading-[23px] hover:underline">
                    <Link
                      href={`/courses/${courseId}/${subCourse?.id}`}
                    >
                      <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                        {subCourse?.title}
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
                      {subCourse?.module_data.length !== 0 && !subCourseLoading && (
                        <div className="flex flex-col gap-10">
                          {subCourse?.module_data.map((z: any, i: React.Key | null | undefined) => (
                            <div
                              key={i}
                              onClick={() => {
                                router.push(`/courses/${courseId}`);
                              }}
                            >
                              <LessonModule
                                key={i}
                                data={z}
                                courseId={courseId as string}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-4 items-center flex-wrap lg:flex-nowrap">
                <h1 className="text-black-100 font-bold md:text-4xl text-3xl">
                  {lesson?.title}
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

            <div className="relative mt-4 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-10 w-full p-0">
              <div className="w-full px-0 md:px-0 col-start-1 col-end-3 order-last lg:order-first">
                <div className="w-full">
                  {lesson ? (
                    <>
                      {lesson.type_format === 2 && formState === "video" && (
                        <>
                          <VideoPlayer
                            typeUpload={lesson.type_upload}
                            url={lesson.link}
                            onChangeForm={() => { }}
                            onChangeStatus={handleOnchange}
                          />
                        </>
                      )}
                      <div className="text-black-100 md:text-lg text-base font-normal mb-9">
                        <div
                          id="content"
                          className="flex flex-col gap-3 course-content text-base"
                          dangerouslySetInnerHTML={{
                            __html: lesson.description,
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <div>No Lesson</div>
                  )}
                </div>
              </div>

              <div className="w-full h-fit lg:sticky top-[100px] order-first lg:order-last mb-6">
                <div className="flex flex-col gap-5 md:px-0">
                  {subCourse?.module_data.length !== 0 && !subCourseLoading && (
                    <div className="hidden lg:flex flex-col gap-10">
                      {subCourse?.module_data.map((z: any, i: React.Key | null | undefined) => (
                        <LessonModule
                          key={i}
                          data={z}
                          courseId={courseId as string}
                        />
                      ))}
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
