"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const CourseStatus = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-[50px] md:mb-14 mb-5 md:pt-[370px] px-8 lg:pt-[350px] pt-[135px] items-start text-white-400 text-base font-normal leading-4 capitalize lg:px-0">
      <Link
        href="/courses/all"
        className={`course-status md:text-base text-sm ${
          pathname === "/courses/all" ? "active" : ""
        }`}
      >
        all courses
      </Link>
      <Link
        href="/courses/progress"
        className={`course-status md:text-base text-sm ${
          pathname === "/courses/progress" ? "active" : ""
        }`}
      >
        in progress
      </Link>
      <Link
        href="/courses/completed"
        className={`course-status md:text-base text-sm ${
          pathname === "/courses/completed" ? "active" : ""
        }`}
      >
        completed
      </Link>
    </div>
  );
};

export default CourseStatus;
