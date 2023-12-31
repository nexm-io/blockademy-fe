"use client";
import Link from "next/link";
import gift from "@/public/icons/giftcourse.svg";
import Image from "next/image";
import CourseModule from "@/components/Courses/CourseModule";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  getDetailCourse,
  getDetailCourseWithoutLoading,
  getMenuData,
} from "@/redux/features/courses/action";
import { useParams, useRouter } from "next/navigation";
import { Skeleton } from "@mui/material";
import React from "react";
import BackToTop from "@/components/BackToTop";
import cn from "@/services/cn";
import RewardDetail from "@/components/Reward/RewardDetail";
import { selectCourses } from "@/redux/features/courses/reducer";
import { selectAuth } from "@/redux/features/auth/reducer";
import ApplyCourseButton from "@/components/Courses/Buttons/ApplyCourseButton";
import { RegisterSuccessPopup } from "@/components/Courses/Popups/RegisterSuccessPopup";
import { Close, Plus } from "@/components/Icon";
import { selectReward } from "@/redux/features/reward/reducer";
import { getRewardDetail } from "@/redux/features/reward/action";

const CourseDetail = () => {
  const params = useParams();
  const { courseId } = params;
  const [isShowMenu, setShowMenu] = useState<boolean>(false);
  const [registered, setRegistered] = useState<number>(0);
  const [showPopupRegisterSuccess, setShowPopupRegisterSuccess] =
    useState(false);
  const {
    isLoading,
    details: courseDetail,
    menuData: { sub_course_data },
  } = useAppSelector(selectCourses);
  const { isAuthenticated: isLogin } = useAppSelector(selectAuth);
  const { rewardDetails } = useAppSelector(selectReward);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const lessonFirstUrl = useMemo(() => {
    if (!courseDetail) return "";
    const {
      main_is_specialization,
      lesson_first: { module_slug, slug: lessonSlug },
      slug: courseSlug,
    } = courseDetail;

    let href = `/courses/${courseId}`;

    if (main_is_specialization) {
      href += module_slug ? `/${module_slug}/lessons/` : "";
    } else {
      href += courseSlug ? `/${courseSlug}/lessons/` : "";
    }

    href += lessonSlug || "";
    return href;
  }, [courseDetail]);

  const handleLessonRedirect = () => {
    router.push(lessonFirstUrl);
  };

  const loadMenuData = async () => {
    try {
      const { payload: payloadMenu } = await dispatch(
        getMenuData(courseId as string)
      );
      if (payloadMenu?.response?.data?.error) {
        router.push("/not-found");
      }
      return payloadMenu;
    } catch (error) {
      console.log(error);
    }
  };

  const loadCourseDetail = async () => {
    try {
      let payloadDetail: any;
      const params = courseId as string;
      if (courseDetail?.id === courseId) {
        payloadDetail = await dispatch(getDetailCourseWithoutLoading(params));
      } else {
        payloadDetail = await dispatch(getDetailCourse(params));
      }

      if (payloadDetail?.response?.data?.error) {
        router.push("/not-found");
      }
      return payloadDetail;
    } catch (error) {
      console.log(error);
    }
  };

  const loadData = async () => {
    try {
      await Promise.all([loadMenuData(), loadCourseDetail()]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setRegistered(courseDetail?.is_registered as number);
  }, [courseDetail]);

  useEffect(() => {
    if (isShowMenu) document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isShowMenu]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    (async () => {
      if (!isLogin || !courseDetail?.is_complete_module_sub_course) return;
      const { payload } = await dispatch(getRewardDetail(courseId as string));
      if (payload?.response?.data?.error) router.push("/not-found");
    })();
  }, []);

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
              <Skeleton variant="rounded" sx={{ width: "100%" }} height={50} />
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
            <nav className="w-full rounded-md mb-[41px]">
              <ol className="list-reset flex text-gray-300 items-center md:pl-0 flex-wrap">
                <li className="leading-[23px] hover:underline">
                  <Link href="/">
                    <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="leading-[23px]">
                  <span className="mx-3 md:text-[12px] text-[10px]">&gt;</span>
                </li>
                <li className="leading-[23px] hover:underline">
                  <Link href="/courses">
                    <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                      Courses
                    </span>
                  </Link>
                </li>
                <li className="leading-[23px]">
                  <span className="mx-3 md:text-[12px] text-[10px]">&gt;</span>
                </li>
                <li className="leading-[23px]">
                  <span className="text-black-400 md:text-sm font-normal capitalize text-[12px]">
                    {courseDetail?.title}
                  </span>
                </li>
              </ol>
            </nav>

            <div
              className={cn(`block lg:hidden mb-10`, {
                active: isShowMenu,
              })}
            >
              <div
                className="px-[10px] py-2 bg-blue-200 flex items-center justify-between"
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <p className="text-blue-100">Course Outline</p>
                <Plus />
              </div>
              <div
                className={cn(
                  "fixed top-0 left-0 right-0 bottom-0 transition-all duration-[0.1s] ease-in-out invisible z-[999]",
                  { "!visible": isShowMenu }
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-black-100/30 invisible opacity-0 transition-all duration-[0.1s] ease-in-out",
                    { "!visible opacity-100": isShowMenu }
                  )}
                  onClick={() => setShowMenu(false)}
                ></div>
                <div
                  className={cn(
                    "h-full w-full gap-6 grid justify-between grid-cols-1 text-base font-normal text-black-100 bg-white-100 relative pt-12 pb-6 transition-all duration-[0.1s] ease-in-out top-0 left-0 right-0 bottom-0 opacity-0 invisible px-4",
                    { "!visible opacity-100": isShowMenu }
                  )}
                >
                  <div
                    className="absolute flex items-center top-[26px] right-5 gap-2 lg:hidden"
                    onClick={() => setShowMenu((prev) => !prev)}
                  >
                    <p className="text-blue-100">Close</p>
                    <Close className="text-blue-100" />
                  </div>
                  <div className="mt-10 overflow-y-auto">
                    {sub_course_data.length !== 0 && !isLoading && (
                      <div className="flex flex-col gap-10">
                        {sub_course_data.map(
                          (
                            subCourse: any,
                            index: React.Key | null | undefined
                          ) => (
                            <div
                              key={index}
                              onClick={() => {
                                router.push(`/courses/${courseId}`);
                              }}
                            >
                              <CourseModule
                                key={index}
                                isRegistered={registered}
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

            <h1 className="text-black-100 font-bold md:text-4xl text-3xl mb-[48px]">
              {courseDetail?.title}
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

            <div
              className={cn(`flex lg:hidden my-4 justify-end`, {
                active: isShowMenu,
              })}
            >
              <ApplyCourseButton
                courseId={courseDetail?.id as string}
                isRegistered={!!courseDetail?.is_registered}
                showPopup={setShowPopupRegisterSuccess}
              />
            </div>

            {/* PASSED CASE */}
            {isLogin &&
            courseDetail?.is_claimed &&
            courseDetail?.is_complete_module_sub_course === 1 ? (
              <RewardDetail reward={rewardDetails} />
            ) : null}

            <div className="relative mt-4 lg:mt-10 flex flex-col lg:flex-row gap-[60px]">
              <div className="flex-1">
                {courseDetail && (
                  <div className="text-black-100 md:text-lg text-base font-normal mb-9">
                    <div
                      id="content"
                      className="flex flex-col course-content text-base"
                      dangerouslySetInnerHTML={{
                        __html: courseDetail.description,
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="w-full lg:w-[352px]">
                <div className="hidden lg:block">
                  <ApplyCourseButton
                    courseId={courseDetail?.id as string}
                    isRegistered={!!courseDetail?.is_registered}
                    showPopup={setShowPopupRegisterSuccess}
                  />
                </div>

                <div className="flex flex-col gap-5 md:px-0">
                  {sub_course_data &&
                    sub_course_data.length !== 0 &&
                    !isLoading && (
                      <div className="hidden lg:flex flex-col gap-10">
                        {sub_course_data.map(
                          (
                            subCourse: any,
                            index: React.Key | null | undefined
                          ) => (
                            <CourseModule
                              key={index}
                              data={subCourse}
                              isRegistered={registered}
                              activeDropdown={index === 0}
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
      {showPopupRegisterSuccess && (
        <RegisterSuccessPopup
          setShowPopup={setShowPopupRegisterSuccess}
          handleLessonRedirect={handleLessonRedirect}
        />
      )}
    </div>
  );
};

export default CourseDetail;
