"use client";
import Link from "next/link";
import gift from "@/public/icons/giftcourse.svg";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import CourseModule from "@/components/CourseModule";
import CoursePanel from "@/views/Courses/CoursePanel";
import NoSignal from "@/components/NoSignal";
import { useEffect, useState } from "react";
import Quiz from "@/components/Quiz";
import Button from "@/components/Common/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import {
  getDetailCourse,
} from "@/redux/features/courses/action";
import { useParams, usePathname, useRouter } from "next/navigation";
import { getLastPathName } from "@/utils/getPathName";
import slugifyText from "@/utils/slugifyText";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import React from "react";
import BreadCrumb from "@/components/BreadCrumb";

const CourseDetail = () => {
  const [formState, setFormState] = useState<"video" | "quiz">("video");
  const params = useParams();
  const courseId = params.id;
  const [isWatching, setIsWatching] = useState<boolean>(false);
  const courseDetail = useAppSelector(
    (state: RootState) => state.courses.details
  );
  // const [currLesson, setCurrLesson] = useState(courseDetail?.lesson_first)
  const isLoading = useAppSelector(
    (state: RootState) => state.courses.isLoading
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getDetailCourse(courseId as string))
  }, [courseId]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
    <div className="container mt-36">
      {isLoading ? (
        <div className="my-[60px] flex flex-col gap-4">
          <div className="mt-6 flex flex-col gap-4">
            <SkeletionCard height="44px" radius="16px" />
            <SkeletionCard
              height="36px"
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
          <section className="md:mt-[56px] mt-8 lg:px-0 px-3">
            <div>
              <div className="flex justify-between items-center flex-wrap lg:flex-nowrap mb-4">
                <h1 className="text-black-100 font-bold md:text-4xl text-3xl lg:w-1/2">
                  {courseDetail?.title}
                </h1>
                <div className="flex items-center flex-wrap gap-3">
                  <Link href="/quiz/1" className="w-full md:w-auto inline-block">
                    <Button className="!px-6 bg-blue-600 group hover:bg-blue-600/50 w-full">
                      <span className="text-blue-700 group-hover:text-blue-700/80 font-bold transition-all">
                        Complete Quiz
                      </span>
                    </Button>
                  </Link>
                  <Link href="#" className="w-full md:w-auto inline-block">
                    <Button className="!px-6 bg-orange-100 group hover:bg-orange-100/50 w-full">
                      <span className="text-orange-200 group-hover:text-orange-200/80 font-bold transition-all">
                        Reward
                      </span>
                    </Button>
                  </Link>
                  <Link
                    href="/courses/leaderboard?id=1"
                    className="w-full md:w-auto inline-block"
                  >
                    <Button className="!px-6 bg-green-300 group hover:bg-green-300/50 w-full">
                      <span className="text-green-200 group-hover:text-green-200/80 font-bold transition-all">
                        Leaderboard
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-blue-200 py-3 px-4 flex gap-4">
                <Image alt="gift-icon" src={gift}></Image>
                <span className="md:text-base text-[13px] font-normal text-black-100 ">
                  Log into your Blockademy account to register courses, track
                  progress and claim your rewards.
                </span>
              </div>
            </div>
            <div className="relative mt-10 flex gap-12 lg:flex-row flex-col w-full p-[18px] md:p-2 lg:p-4 xl:p-0">
              <div className="lg:w-[753px] w-full px-4 md:px-0">
                <div className="w-full">
                  {courseDetail ? (
                    courseDetail.lesson_data.map((lesson, index) => (
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
                          router.push(
                            `/courses/${courseId}`
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
          </section>
        </>
      )}
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
