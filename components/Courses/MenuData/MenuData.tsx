import React from "react";
import LessonModule from "../LessonsModule";
import { useAppSelector } from "@/redux/hook";
import { selectCourses } from "@/redux/features/courses/reducer";
import { useParams } from "next/navigation";
import { Skeleton } from "@mui/material";

const MenuData = () => {
  const {
    lesson,
    menuData: { module_data },
    menuDataLoading,
    details,
  } = useAppSelector(selectCourses);
  const params = useParams();
  const { courseId } = params;

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
              isExpand={
                details?.is_registered
                  ? details?.is_claimed
                    ? i === 0
                    : z.is_current_module
                  : i === 0
              }
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
