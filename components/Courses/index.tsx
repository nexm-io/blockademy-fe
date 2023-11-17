"use client";

import React from "react";
import CourseItem from "@/components/Courses/CourseItem";
import CourseLoading from "@/components/Courses/CoursesLoading";
import { CoursesType } from "@/redux/features/new-courses/type";
import cn from "@/services/cn";

const Courses = ({ courses }: { courses: CoursesType }) => {
  return (
    <div className={cn(`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[66px]`)}>
      {courses.coursesLoading ? (
        <CourseLoading />
      ) : courses.data.length !== 0 ? (
        courses.data.map((course) => (
          <CourseItem course={course} key={course.course_id} />
        ))
      ) : (
        <div className="text-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 text-4xl">
          There are currently no available courses
        </div>
      )}
    </div >
  );
};

export default Courses;
