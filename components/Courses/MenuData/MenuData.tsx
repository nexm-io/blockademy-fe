import React, { useEffect } from "react";
import LessonModule from "../LessonsModule";
import {
  getMenuData,
  getMenuDataWithoutLoading,
} from "@/redux/features/courses/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectCourses } from "@/redux/features/courses/reducer";
import { useParams, useRouter } from "next/navigation";
import { Skeleton } from "@mui/material";

const MenuData = () => {
  const {
    lesson,
    menuData: { module_data },
    menuDataLoading,
  } = useAppSelector(selectCourses);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useParams();
  const { lessonSlug, courseId } = params;

  const loadMenuData = async () => {
    try {
      let payloadDetail: any;
      if (module_data.length > 0) {
        payloadDetail = await dispatch(
          getMenuDataWithoutLoading(courseId as string)
        );
      } else {
        payloadDetail = await dispatch(getMenuData(courseId as string));
      }

      if (payloadDetail?.response?.data?.error) {
        router.push("/not-found");
      }
      return payloadDetail;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadMenuData();
  }, [lessonSlug]);

  return menuDataLoading ? (
    <div className="h-full w-full sticky top-[100px]">
      <div className="flex flex-col gap-4 md:px-0 ">
        <Skeleton variant="rounded" sx={{ width: "100%" }} height={68} />
        <Skeleton variant="rounded" sx={{ width: "100%" }} height={68} />
      </div>
    </div>
  ) : (
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
