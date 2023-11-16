"use client";

import React from "react";
import CourseItem from "@/components/Courses/CourseItem";
import CourseLoading from "@/components/Courses/CoursesLoading";
import { CourseTypes } from "@/redux/features/new-courses/type";
import cn from "@/services/cn";

type Props = {
  courses: Array<CourseTypes>;
  loading: boolean
}

const Courses:React.FC<Props> = ({ courses, loading }) => {
  return (
    <div className={cn(`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7`)}>
      {loading ? (
        <CourseLoading />
      ) : courses.length !== 0 ? (
        courses.map((course) => (
          <CourseItem course={course} key={course.course_id} />
        ))
      ) : (
        <div className="text-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
          There are currently no available courses
        </div>
      )}
    </div >
  );
};

export default Courses;
