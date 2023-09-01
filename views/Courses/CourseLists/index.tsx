"use client";
import Image from "next/image";
import React, { useEffect } from "react";

import Button from "@/components/Common/Button";
import CoursePanel from "../CoursePanel";
import { useRouter } from "next/navigation";
import { CourseTypes } from "@/redux/features/courses/type";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import CourseLesson from "../CourseLesson";
import certificate from "@/public/icons/certificate.svg";
import SkeletonCourse from "@/components/Skeleton/SkeletonCourse";

const CourseLists = function () {
  const details = useAppSelector((state) => state.courses.data);
  const { push } = useRouter();
  const handleClick = () => {
    push("/courses/blockchain-details");
  };
  return (
    <>
      {!details ? (
        <SkeletonCourse />
      ) : (
        details.map((section: CourseTypes) => (
          <div className="mt-12 " key={section.title}>
            <div>
              <h2 className="text-black-100 md:text-[40px] ml-4 md:ml-0 text-[25px] font-bold w-max border-b-[6px] border-b-blue-100">
                {section.title}
              </h2>
              <div className="mt-9 flex gap-[53px] md:flex-row flex-col">
                <div className="basis-1/2 md:mx-0 mx-4">
                  <img
                    alt="img-course1"
                    src={section.image?.original_image}
                    className="rounded-lg w-full h-full object-cover max-h-[330px] max-w-[580px] "
                  />
                </div>
                <div className="flex flex-col justify-between basis-1/2 mx-4 md:mx-0">
                  <div className="flex flex-col gap-4 text-xl font-normal  pt-2">
                    <div
                      className="flex flex-col gap-3"
                      dangerouslySetInnerHTML={{ __html: section.description }}
                    />
                  </div>
                  <div>
                    <Button
                      className="capitalize text-base font-medium md:mt-0 mt-4"
                      onClick={handleClick}
                    >
                      start course
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:mt-[80px] md:mb-[160px] mb-16 mt-10">
                <h3 className="text-black-100 text-[22px] font-bold mb-4 mx-4 md:mx-0">
                  {section.list_courses.data.length} Courses
                </h3>
                <CourseLesson details={section.list_courses.data} />
                <div className={`flex gap-4 items-center mt-4 px-4 md:px-0`}>
                  <div className="w-[40px] h-[40px] flex flex-col md:flex-row items-center justify-center ">
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
                    <div className="prose flex items-center gap-[10px] pr-4 text-blue-100 basis-[30%] justify-end">
                      <Button
                        type="button"
                        disabled={section.is_finished === 0}
                        className={`line-clamp-1 md:block   ${
                          section.is_finished === 0
                            ? "opacity-30"
                            : "btn__contain-shadow "
                        }`}
                      >
                        Claim reward
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default CourseLists;
