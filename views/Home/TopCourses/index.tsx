"use client";
import Button from "@/components/Common/Button";
import Courses from "@/components/Courses";
import { loadCourses } from "@/redux/features/new-courses/action";
import { selectNewCourses } from "@/redux/features/new-courses/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { LIMIT_COURSES } from "@/utils/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FILTER_OPTIONS = {
  new: "created_at",
  trending: "total_hit",
  mostPopular: "rating_view",
};

const filterButtons = [
  { filter: FILTER_OPTIONS.new, label: "New" },
  { filter: FILTER_OPTIONS.trending, label: "Trending" },
  { filter: FILTER_OPTIONS.mostPopular, label: "Most Popular" },
];

const TopCourses = () => {
  const [sortBy, setSortBy] = useState(filterButtons[0].filter);
  const coursesRx = useAppSelector(selectNewCourses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      loadCourses({
        page: 1,
        sortBy,
      })
    );
  }, [sortBy]);

  return (
    <div className="mt-10 sm:mt-20 w-full">
      <div className="flex items-center flex-wrap gap-4 md:gap-0 justify-between mb-8">
        <h2 className="text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
          Top Courses
        </h2>
      </div>
      <Courses courses={coursesRx} />
      {coursesRx.data.length > 8 && (
        <Link href="/courses" className="flex justify-center mt-14">
          <Button>View More</Button>
        </Link>
      )}
    </div>
  );
};

export default TopCourses;
