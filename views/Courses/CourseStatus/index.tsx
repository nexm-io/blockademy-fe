"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const CourseStatus = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-[50px] md:pt-[480px] pt-[200px] items-start text-white-400 text-base font-normal leading-4 capitalize px-4 md:px-0">
      <Link
        href="/courses/all"
        className={`course-status ${
          pathname === "/courses/all" ? "active" : ""
        }`}
      >
        all courses
      </Link>
      <Link
        href="/courses/progress"
        className={`course-status ${
          pathname === "/courses/progress" ? "active" : ""
        }`}
      >
        in progress
      </Link>
      <Link
        href="/courses/completed"
        className={`course-status ${
          pathname === "/courses/completed" ? "active" : ""
        }`}
      >
        completed
      </Link>
    </div>
  );
};

export default CourseStatus;
