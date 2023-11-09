"use client";
import React, { useEffect, useState } from "react";
import Courses from "@/components/Courses";
import { loadCourses } from "@/redux/features/new-courses/action";
import { selectNewCourses } from "@/redux/features/new-courses/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Button from "@/components/Common/Button";
import { LIMIT_COURSES, TOPIC_LIST } from "@/utils/constants";
import Pagination from "@/components/Pagination";

const CoursesView = () => {
  const [cateSelected, setCateSelected] = useState("all");
  const coursesRx = useAppSelector(selectNewCourses);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      loadCourses({
        page,
        sortBy: "created_at",
      })
    );
  }, [page]);

  return (
    <div className="mt-8 sm:mt-20">
      <div>
        <h2 className="text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
          All Blockademy Courses
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-3 mt-10">
          <Button
            className="lg:px-6 !py-2 sm:w-auto w-[45%]"
            kind={cateSelected === "all" ? "primary" : "secondary"}
            onClick={() => setCateSelected("all")}
          >
            All
          </Button>
          {TOPIC_LIST.map((topic) => (
            <Button
              key={topic.id}
              className="lg:px-6 !py-2 sm:w-auto w-[45%]"
              kind={cateSelected === topic.id ? "primary" : "secondary"}
              onClick={() => setCateSelected(topic.id)}
            >
              {topic.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-6 md:mt-[60px]">
        <Courses currPage={page} courses={coursesRx} />
      </div>
      {coursesRx.data.length !== 0 && <div className="flex justify-center mt-6">
        <Pagination
          currentPage={page}
          onPageChange={(page) => {
            setPage(page);
          }}
          pageSize={LIMIT_COURSES}
          siblingCount={1}
          totalCount={coursesRx.meta.total}
        />
      </div>}
    </div>
  );
};

export default CoursesView;
