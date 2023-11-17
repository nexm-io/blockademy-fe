import { useEffect } from "react";
import Courses from "@/components/Courses";
import { selectNewCourses } from "@/redux/features/new-courses/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { loadCourses } from "@/redux/features/new-courses/action";

const TopCourses = () => {
  const coursesRx = useAppSelector(selectNewCourses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      loadCourses({
        page: 1,
      })
    );
  }, [dispatch]);

  return (
    <section className="container py-[60px]">
      <h3 className="text-black-400 text-[40px] leading-[48px] font-bold mb-10">
        Top Courses
      </h3>
      <Courses courses={coursesRx} />
    </section>
  );
};

export default TopCourses;
