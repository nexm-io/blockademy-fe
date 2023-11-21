"use client";

import React from "react";
import CourseItemV2 from "@/components/Courses/CourseItemV2";
import CoursesLoadingV2 from "@/components/Courses/CoursesLoadingV2";
import { CourseTypes } from "@/redux/features/new-courses/type";
import cn from "@/services/cn";
import Image from "next/image";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";

type Props = {
  courses: Array<CourseTypes>;
  loading: boolean
}

const Courses: React.FC<Props> = ({ courses, loading }) => {
  const router = useRouter();

  return (
    <div className={cn(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7`)}>
      {loading ? (
        <CoursesLoadingV2 />
      ) : courses.length !== 0 ? (
        courses.map((course) => (
          <CourseItemV2 course={course} key={course.course_id} />
        ))
      ) : (
        <div className="flex flex-col pt-[40px] items-center justify-center w-full col-span-1 sm:col-span-2 md:col-span-3">
          <Image
            alt="folder"
            src="/images/graphic-folder.svg"
            width={100}
            height={100}
            className="w-[100] h-[100] select-none object-cover"
          />
          <div className="flex flex-col items-center my-[40px]">
            <h3 className="text-2xl text-center font-normal">
              You don’t have any courses
            </h3>
            <p className="text-xl text-center font-light mt-[14px] text-grey-700">
              Join in the exciting courses of Blockademy now
            </p>
          </div>
          <Button className="!py-[13px] rounded" onClick={() => router.push('/courses')}>Discover Now!</Button>
        </div>
      )}
    </div>
  );
};

export default Courses;
