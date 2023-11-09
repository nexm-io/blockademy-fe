"use client";

import CourseItem from "@/components/Courses/CourseItem";
import CourseLoading from "@/components/Courses/CoursesLoading";
import { CoursesType } from "@/redux/features/new-courses/type";
import React from "react";

const Courses = ({ courses }: { courses: CoursesType }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
      {courses.coursesLoading ? (
        <CourseLoading />
      ) : (
        courses.data.map((course) => (
          <CourseItem course={course} key={course.id} />
        ))
      )}
    </div>
  );
};

export default Courses;
