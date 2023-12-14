import React, { useEffect } from "react";
import LessonModule from "../LessonsModule";
import { getMenuData } from "@/redux/features/courses/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectCourses } from "@/redux/features/courses/reducer";
import { useParams, useRouter } from "next/navigation";

const MenuData = () => {
  const {
    lesson,
    menuData: { module_data },
  } = useAppSelector(selectCourses);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useParams();
  const { lessonSlug, courseId } = params;

  const loadMenuData = async () => {
    try {
      const { payload: payloadMenu } = await dispatch(
        getMenuData(courseId as string)
      );
      if (payloadMenu?.response?.data?.error) {
        router.push("/not-found");
      }
      return payloadMenu;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadMenuData();
  }, [lessonSlug]);

  return (
    <div className="flex flex-col gap-5 md:px-0">
      {module_data.length !== 0 && (
        <div className="flex flex-col gap-10">
          {module_data.map((z: any, i: React.Key | null | undefined) => (
            <LessonModule
              key={i}
              data={z}
              moduleLength={module_data.length}
              isRegistered={lesson?.is_registered as number}
              courseId={courseId as string}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuData;
