import Link from "next/link";
import React from "react";

const CourseStatus = () => {
  return (
    <div className="flex gap-[50px] md:pt-[480px] pt-[200px] items-start text-white-400 text-base font-normal leading-4 capitalize px-4 md:px-0">
      <Link href="#" className="course-status  active">
        all courses
      </Link>
      <Link href="#" className="course-status ">
        in progress
      </Link>
      <Link href="#" className="course-status ">
        completed
      </Link>
    </div>
  );
};

export default CourseStatus;
