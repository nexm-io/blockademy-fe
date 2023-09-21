"use client";
import Link from "next/link";
import gift from "@/public/icons/giftcourse.svg";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import CourseModule from "@/components/CourseModule";
import CoursePanel from "@/views/Courses/CoursePanel";
import NoSignal from "@/components/NoSignal";
import { memo, useEffect, useState } from "react";
import Quiz from "@/components/Quiz";
import Button from "@/components/Common/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import {
  getDetailCourse,
  getListCourse,
} from "@/redux/features/courses/action";
import { redirect, usePathname, useRouter } from "next/navigation";
import slugify from "slugify";
import { getLastPathName } from "@/utils/getPathName";
import slugifyText from "@/utils/slugifyText";
import certificate from "@/public/icons/certificate.svg";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import { format, isBefore } from "date-fns";
import { claimInWallet } from "@/redux/features/user/action";
import { toast } from "react-toastify";
import CardItemSkeleton from "@/components/CardItemSkeleton";
import React from "react";
import GiftHeader from "@/components/GiftHeader";
import BreadCrumb from "@/components/BreadCrumb";

const CourseDetail = () => {
  const [formState, setFormState] = useState<"video" | "quiz">("video");
  const [course, setCourse] = useState<number>();
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  const courseId = pathname.split("/")[3];
  const [isClaimed, setIsClaimed] = useState<boolean>(false);
  const [isWatching, setIsWatching] = useState<boolean>(false);
  const [isRedirected, setIsRedirected] = useState<boolean>(false);
  const courseDetail = useAppSelector(
    (state: RootState) => state.courses.details
  );
  const isLoading = useAppSelector(
    (state: RootState) => state.courses.isLoading
  );
  const [showButton, setShowButton] = useState(false);

  const quiz = useAppSelector((state: RootState) => state.courses.quiz);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const getCourseDetails = async () => {
    const detail = {
      campaign_id: path,
      course_id: courseId,
    };
    try {
      const response = await dispatch(getDetailCourse({ detail }));
      if (
        pathname ===
        `/courses/${path}/${courseId}/${slugifyText(
          courseDetail?.campaign_title
        )}`
      ) {
        router.push(
          `/courses/${path}/${courseId}/${slugifyText(
            courseDetail?.campaign_title || ""
          )}/${slugifyText(courseDetail?.lesson_data[0].lesson_slug)}`
        );
        setIsRedirected(true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getCourseDetails();
  }, [courseId, dispatch, pathname]);

  useEffect(() => {
    // Add a scroll event listener to check whether to show the button
    function handleScroll() {}

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClaim = async (id: number) => {
    const res = await dispatch(claimInWallet(id)).unwrap();

    res.success && toast.success("Claim reward successfully");
    setIsClaimed(true);
  };

  const handleChangeForm = (status: boolean) => {
    if (status) {
      setFormState(`quiz`);
    }
  };

  const handleOnchange = (status: boolean) => {
    setIsWatching(status);
  };

  return (
    <>
      {!courseDetail && isLoading ? (
        <div className="my-[60px] flex flex-col gap-4">
          <SkeletionCard height="23px" width="600px" radius="16px" />
          <div className="mt-6 flex flex-col gap-4">
            <SkeletionCard height="44px" width="352px" radius="16px" />
            <SkeletionCard
              height="36px"
              width="1152px"
              radius="16px"
              mobileCardFull
            />
          </div>
          <div className="mt-7 flex gap-[48px]">
            <SkeletionCard height="500px" width="753px" radius="16px" />
            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }, (_, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 px-[23px] rounded-lg py-4 bg-gray-200"
                >
                  <SkeletionCard key={index} height="20px" width="306px" />
                  <SkeletionCard key={index} height="20px" width="306px" />
                </div>
              ))}
            </div>
          </div>
          <SkeletionCard height="36px" width="340px" radius="16px" />
          <SkeletionCard height="18px" width="753px" radius="16px" />
          <SkeletionCard height="18px" width="753px" radius="16px" />
          <SkeletionCard height="18px" width="753px" radius="16px" />
          <SkeletionCard height="18px" width="753px" radius="16px" />
        </div>
      ) : (
        <>
          <div className="md:mt-[42px] mt-5 flex gap-3">
            <BreadCrumb />
          </div>
          <section className="md:mt-[56px] mt-8 lg:px-0 px-3">
            <div>
              <h1 className="text-black-100 font-bold md:text-[37px] text-3xl mb-4 px-4 md:px-0">
                {courseDetail?.title}
              </h1>

              <div className="bg-blue-200 py-3 px-4 flex gap-4">
                <Image alt="gift-icon" src={gift}></Image>
                <span className="md:text-base text-[13px] font-normal text-black-100 ">
                  Log into your Blockademy account to track progress and claim
                  your certificate. You may lose your learning progress without
                  logging in.
                </span>
              </div>
            </div>
            <div className="relative mt-10 flex gap-12 lg:flex-row flex-col w-full p-[18px] md:p-2 lg:p-4 xl:p-0">
              {/* Left */}
              <div className="lg:w-[753px] w-full px-4 md:px-0">
                {/* Form State */}
                <div className="w-full">
                  {courseDetail ? (
                    courseDetail.lesson_data.map((lesson, index) => (
                      <>
                        {getLastPathName(pathname) ===
                          slugifyText(lesson.lesson_slug) && (
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
                            {formState === "quiz" && (
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
                                className="flex flex-col gap-3 text-xs course-content md:text-base"
                                dangerouslySetInnerHTML={{
                                  __html: lesson.lesson_description,
                                }}
                              />
                            </div>
                            {lesson.lesson_type_format !== 2 && (
                              <Button
                                onClick={() => {
                                  setFormState("quiz");
                                  scrollToTop();
                                }}
                              >
                                Complete Quizz
                              </Button>
                            )}
                          </>
                        )}
                      </>
                    ))
                  ) : (
                    <div>No Lesson</div>
                  )}
                </div>
              </div>

              <div className="h-full sticky top-[100px]">
                <div className="flex flex-col gap-4 px-4 md:px-0 ">
                  {courseDetail?.lesson_data.length !== 0 &&
                    !isLoading &&
                    courseDetail?.lesson_data.map((lesson, index) => (
                      <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => {
                          setCourse(lesson.lesson_id);
                          router.push(
                            `/courses/${path}/${courseId}/${slugifyText(
                              courseDetail?.lesson_data[index].lesson_slug || ""
                            )}`
                          );
                        }}
                      >
                        <CourseModule
                          is_watching={isWatching}
                          is_complete={lesson.is_complete}
                          key={index}
                          lesson={lesson}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {/* Other */}
            <div className="flex flex-col gap-4 md:mt-[100px] mt-10 lg:max-w-[753px] w-full px-4 px-3 lg:px-0">
              <h2 className="text-black-100 md:text-[22px] text-xl font-bold">
                Other Courses
              </h2>
              {courseDetail &&
                courseDetail.other_courses.data.map((other, index) => (
                  <CoursePanel
                    key={index}
                    title={courseDetail.campaign_title}
                    campaign_id={path}
                    course={other}
                  />
                ))}
              <div className={`flex gap-4 items-center mt-4 px-4 md:px-0`}>
                <div className="w-[30px] h-[30px] flex flex-col md:flex-row items-center justify-center ">
                  <Image
                    alt="check-icon"
                    src={certificate}
                    className={`w-full h-full object-cover flex-shrink-0 rounded-full p-1 bg-blue-100`}
                  ></Image>
                </div>
                <div
                  className={`bg-gray-200 flex md:items-center md:flex-row flex-col items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5`}
                >
                  <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
                    <span
                      className={`basis-[70%] line-clamp-1 text-[20px] leading-7 text-[#094298]`}
                    >
                      Certificate
                    </span>
                  </div>
                  <div className="prose flex-col flex items-start md:items-center  gap-1 pr-4 text-blue-100 basis-[30%] justify-start md:justify-end">
                    {courseDetail?.reward_is_claimed === 0 ? (
                      <Button
                        type="button"
                        onClick={() => handleClaim(courseDetail.reward_id)}
                        disabled={
                          isBefore(
                            new Date(),
                            new Date(courseDetail.reward_released_date * 1000)
                          ) ||
                          courseDetail.is_finished === 0 ||
                          isClaimed
                        }
                        className={`line-clamp-1 md:block   ${
                          courseDetail.is_finished === 0
                            ? "opacity-30"
                            : "btn__contain-shadow "
                        }`}
                      >
                        Claim reward
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        disabled={true}
                        className={`line-clamp-1 md:block   ${
                          courseDetail?.is_finished === 0
                            ? "opacity-30"
                            : "btn__contain-shadow "
                        }`}
                      >
                        Claimed
                      </Button>
                    )}
                    {courseDetail?.is_finished === 1 &&
                    isBefore(
                      new Date(),
                      new Date(courseDetail.reward_released_date * 1000)
                    ) ? (
                      <span className="text-blue-100 text-xs truncate">
                        Reward will be released on{" "}
                        {format(
                          courseDetail.reward_released_date * 1000,
                          "EEE MMM dd yyyy HH:mm:ss"
                        )}
                      </span>
                    ) : (
                      " "
                    )}
                  </div>
                </div>
              </div>
            </div>
            <NoSignal />
          </section>
        </>
      )}
    </>
  );
};

export default CourseDetail;
export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};
