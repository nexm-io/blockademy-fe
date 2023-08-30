import NoSignal from "@/components/NoSignal";
import CourseBanner from "@/views/Courses/CourseBanner";
import CourseFAQ from "@/views/Courses/CourseFAQ";
import CourseLists from "@/views/Courses/CourseLists";
import CourseRewards from "@/views/Courses/CourseRewards";
import CourseStatus from "@/views/Courses/CourseStatus";
import React from "react";

const CoursePage = () => {
  return (
    <div className="mt-[74px]">
      <CourseBanner />
      <CourseStatus />
      <CourseLists />
      <CourseLists />
      <CourseRewards />
      <CourseFAQ />
      <NoSignal />
    </div>
  );
};

export default CoursePage;
