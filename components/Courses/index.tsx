"use client";

import React from "react";
import CourseItem from "@/components/Courses/CourseItem";
import CourseLoading from "@/components/Courses/CoursesLoading";
import { CoursesType } from "@/redux/features/new-courses/type";

const Courses = ({ courses }: { courses: CoursesType }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
      {courses.coursesLoading ? (
        <CourseLoading />
      ) : courses.data.length !== 0 ? (
        courses.data.map((course) => (
          <CourseItem course={course} key={course.id} />
        ))
      ) : (
        <div className="text-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
          There are currently no available courses
        </div>
      )}
    </div>
  );
};

export default Courses;
