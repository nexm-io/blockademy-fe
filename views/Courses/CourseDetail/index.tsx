'use client'
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
import { getDetailCourse } from "@/redux/features/courses/action";
import { redirect, usePathname, useRouter } from "next/navigation";
import slugify from "slugify";
import { getLastPathName } from "@/utils/getPathName";
import slugifyText from "@/utils/slugifyText";
import SkeletonCourse from "@/components/Skeleton/SkeletonCourse";

const CourseDetail = () => {
    const [formState, setFormState] = useState<"video" | "quiz">("video");
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const router = useRouter();
  
    const courseDetail = useAppSelector(
      (state: RootState) => state.courses.details
    );
  
    useEffect(() => {
      const getValues = async () => {
        const detail = { campaign_id: 1, course_id: 3 };
        await dispatch(getDetailCourse({ detail })).unwrap();
      };
      getValues();
    }, [dispatch]);
    useEffect(() => {
      if (
        pathname ===
        `/courses/${slugify(courseDetail?.campaign_title || "", { lower: true })}`
      ) {
        redirect(
          `/courses/${slugify(courseDetail?.campaign_title || "", {
            lower: true,
          })}/${slugifyText(courseDetail?.lesson_data[0].lesson_title || "")}`
        );
      }
    }, [courseDetail?.campaign_title, courseDetail?.lesson_data, pathname]);
    return (
        <>
        {!courseDetail ? (
        <SkeletonCourse />
      ) : (
        <section className="md:mt-[56px] mt-8">
          <div>
            <h1 className="text-black-100 font-bold md:text-[37px] text-3xl mb-4 px-4 md:px-0">
              {courseDetail.title}
            </h1>

            <div className="bg-blue-200 py-3 px-4 flex gap-4">
              <Image alt="gift-icon" src={gift}></Image>
              <span className="md:text-base text-[13px] font-normal text-black-100 ">
                Log into your Binance a ccount to track progress and claim your
                certificate. You may lose your learning progress without logging
                in.
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
                    <VideoPlayer />
                    <Button
                      className="mt-4"
                      onClick={() => setFormState("quiz")}
                    >
                      Watch done
                    </Button>
                  </>
                )}
                {courseDetail.lesson_data.map((lesson, index) => (
                  <>
                  {getLastPathName(pathname) ===
                    slugify(lesson.lesson_title, {lower: true}) && (
                    <>
                    {formState === "quiz" && <Quiz lesson={lesson} index={index} />}
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
              {courseDetail.lesson_data.map((lesson, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() =>
                    router.push(
                      `/courses/${slugify(courseDetail?.campaign_title || "", {
                        lower: true,
                      })}/${slugify(
                        courseDetail?.lesson_data[index].lesson_title || ""
                      , {lower:true})}`
                    )
                  }
                >
                  <CourseModule
                    is_complete={lesson.is_complete}
                    status={
                      getLastPathName(pathname) === slugify(lesson.lesson_title, {lower: true})
                        ? "already"
                        : undefined
                    }
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
    )
}

export default CourseDetail