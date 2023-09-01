import CourseItem from "@/components/CourseItem";
import NoSignal from "@/components/NoSignal";
import CourseBanner from "@/views/Courses/CourseBanner";
import CourseStatus from "@/views/Courses/CourseStatus";
import React from "react";

const ProgressCourse = () => {
  return (
    <div className="mt-[74px]">
      <CourseBanner />
      <CourseStatus />
      <CourseItem />
      <NoSignal />
    </div>
  );
};

export default ProgressCourse;
