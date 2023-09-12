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
  getListCourse,
} from "@/redux/features/courses/action";
import { redirect, usePathname, useRouter } from "next/navigation";
import slugify from "slugify";
import { getLastPathName } from "@/utils/getPathName";
import slugifyText from "@/utils/slugifyText";
import SkeletonCourse from "@/components/Skeleton/SkeletonCourse";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";

const CourseDetail = () => {
  const [formState, setFormState] = useState<"video" | "quiz">("video");
  const [course, setCourse] = useState<number>();
  const pathname = usePathname();
  const path = Number(pathname.split("/")[2]);
  const courseId = Number(pathname.split("/")[3]);
  const courseDetail = useAppSelector(
    (state: RootState) => state.courses.details
  );
  const isLoading = useAppSelector(
    (state: RootState) => state.courses.isLoading
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const getValues = async () => {
      const detail = {
        campaign_id: path,
        course_id: courseId,
      };
      dispatch(getDetailCourse({ detail })).unwrap();
    };
    getValues();
  }, [dispatch, courseId, path]);

  useEffect(() => {
    if (
      pathname ===
      `/courses/${path}/${courseId}/${slugify(
        courseDetail?.campaign_title || "",
        { lower: true }
      )}`
    ) {
      redirect(
        `/courses/${path}/${courseId}/${slugify(
          courseDetail?.campaign_title || "",
          {
            lower: true,
          }
        )}/${slugifyText(courseDetail?.lesson_data[0].lesson_title || "")}`
      );
    }
  }, [
    courseDetail?.campaign_title,
    courseDetail?.lesson_data,
    pathname,
    courseId,
    path,
  ]);

  const handleChangeForm = (status: boolean) => {
    if (status) {
      setFormState(`quiz`);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="my-[60px] flex flex-col gap-4">
          <SkeletionCard height="48px" width="600px" radius="16px" />
          <SkeletionCard height="48px" width="1152px" radius="16px" />
          <div className="mt-10 flex gap-[48px]">
            <SkeletionCard height="500px" width="753px" radius="16px" />
            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }, (_, index) => (
                <SkeletionCard
                  height="76px"
                  width="352px"
                  radius="16px"
                  key={index}
                />
              ))}
            </div>
          </div>
          <SkeletionCard height="36px" width="340px" radius="16px" />
          <SkeletionCard height="87px" width="753px" radius="16px" />
        </div>
      ) : (
        <section className="md:mt-[56px] mt-8">
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
          <div className="mt-10 flex gap-12 md:flex-row flex-col">
            {/* Left */}
            <div className="md:w-[753px] w-full px-4 md:px-0">
              {/* Form State */}
              <div>
                {formState === "video" && (
                  <>
                    <VideoPlayer onChangeForm={handleChangeForm} />
                  </>
                )}
                {courseDetail &&
                  courseDetail.lesson_data.length != 0 &&
                  courseDetail.lesson_data.map((lesson, index) => (
                    <>
                      {getLastPathName(pathname) ===
                        slugifyText(lesson.lesson_title) && (
                        <>
                          {formState === "quiz" && (
                            <Quiz lesson={lesson} index={index} />
                          )}
                          <h2 className="font-bold md:text-[26px] text-xl text-black-100 md:mt-11 mt-7 md:mb-7 mb-5">
                            {lesson.lesson_title}
                          </h2>
                          <p className="text-black-100 md:text-lg text-base font-normal italic mb-9">
                            {lesson.lesson_description}
                          </p>
                        </>
                      )}
                    </>
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 px-4 md:px-0">
              {courseDetail &&
                courseDetail.lesson_data.map((lesson, index) => (
                  <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => {
                      setCourse(lesson.lesson_id);
                      router.push(
                        `/courses/${path}/${courseId}/${slugify(
                          courseDetail?.campaign_title || "",
                          {
                            lower: true,
                          }
                        )}/${slugifyText(
                          courseDetail?.lesson_data[index].lesson_title || ""
                        )}`
                      );
                    }}
                  >
                    <CourseModule
                      is_complete={lesson.is_complete}
                      key={index}
                      lesson={lesson}
                    />
                  </div>
                ))}
            </div>
          </div>
          {/* Other */}
          <div className="flex flex-col gap-4 md:mt-[100px] mt-10 max-w-[753px] w-full px-4 md:px-0">
            <h2 className="text-black-100 md:text-[22px] text-xl font-bold">
              Other Courses
            </h2>
            <CoursePanel />
            <CoursePanel />
            <CoursePanel />
            <CoursePanel />
            <CoursePanel />
          </div>
          <NoSignal />
        </section>
      )}
    </>
  );
};

export default CourseDetail;
