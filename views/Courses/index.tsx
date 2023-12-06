"use client";
import React, { useEffect, useRef, useState } from "react";
import Courses from "@/components/Courses";
import { loadCourses } from "@/redux/features/new-courses/action";
import { selectNewCourses } from "@/redux/features/new-courses/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { LIMIT_COURSES } from "@/utils/constants";
import Pagination from "@/components/Pagination";
import BackToTop from "@/components/BackToTop";
import { selectCategory } from "@/redux/features/category/reducer";
import {
  loadCategory,
} from "@/redux/features/category/action";

const CoursesView = () => {
  const divRef = useRef<any>();
  const coursesRx = useAppSelector(selectNewCourses);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const cateRx = useAppSelector(selectCategory);
  const prevCategory = useRef<number>();

  useEffect(() => {
    dispatch(loadCategory());
  }, []);

  useEffect(() => {
    const y =
      divRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: "smooth" });

    const newCategory = cateRx.currCategory;
    const shouldResetPage = newCategory !== prevCategory.current;
    prevCategory.current = newCategory;

    dispatch(
      loadCourses({
        page: shouldResetPage ? 1 : page,
        sortBy: "created_at",
        order: newCategory,
      })
    );
  }, [page, cateRx.currCategory]);

  return (
    <div className="mt-8 sm:mt-20" ref={divRef}>
      {coursesRx.data.length !== 0 && (
        <h2 className="text-center text-3xl sm:text-[40px] font-bold sm:leading-[52px]">
          All Blockademy Courses
        </h2>
      )}
      {/* {cateRx.categoryLoading ? (
        <div className="w-full h-[42px] skeleton mt-10"></div>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-3 mt-10">
          <Button
            className="lg:px-6 !py-2 sm:w-auto w-[45%]"
            kind={cateRx.currCategory === 0 ? "primary" : "secondary"}
            onClick={() => dispatch(setCurrCategory(0))}
          >
            All
          </Button>
          {cateRx.data.map((cate: any) => (
            <Button
              key={cate.id}
              className="lg:px-6 !py-2 sm:w-auto w-[45%]"
              kind={
                cateRx.currCategory === cate.order ? "primary" : "secondary"
              }
              onClick={() => dispatch(setCurrCategory(cate.order))}
            >
              {cate.category_name}
            </Button>
          ))}
        </div>
      )} */}
      <div className="mt-6 md:mt-[60px]">
        <Courses courses={coursesRx} />
      </div>
      {coursesRx.data.length !== 0 && (
        <div className="flex justify-center mt-6">
          <Pagination
            currentPage={page}
            onPageChange={(page) => {
              setPage(page);
            }}
            pageSize={LIMIT_COURSES}
            siblingCount={1}
            totalCount={coursesRx.meta.total}
          />
        </div>
      )}
      <BackToTop onlyShowOnMobile />
    </div>
  );
};

export default CoursesView;
