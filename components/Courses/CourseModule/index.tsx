"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import arrowUp from "@/public/icons/arrow-up.svg";
import lock from "@/public/icons/lock.svg";
import { ModuleItem } from "@/redux/features/courses/type";
import { CircleCheck } from "@styled-icons/fa-solid";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import cn from "@/services/cn";

interface CourseModuleProps {
  data: any;
  isRegistered: boolean;
  activeDropdown?: boolean;
}

const CourseModule: React.FC<CourseModuleProps> = ({
  data,
  isRegistered,
  activeDropdown = false,
}) => {
  const params = useParams();
  const { courseId } = params;
  const [showDropdown, setShowDropdown] = useState(activeDropdown);
  const [isLockedLesson, setIsLockedLesson] = useState(false);
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (!isAuthenticated || !token || !isRegistered) setIsLockedLesson(true);
  }, [isAuthenticated, token]);

  return (
    <div className="flex flex-col gap-4">
      <div
        className="w-full md:mx-0 py-3 bg-gray-200 px-4 rounded-lg cursor-pointer select-none"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="flex gap-[6px] flex-col">
          <div className="flex justify-between items-center">
            <p>{data.title}</p>
            <div
              className={cn("transition-all duration-150 ease-in-out", {
                "rotate-0": showDropdown,
                "rotate-180": !showDropdown,
              })}
            >
              <Image alt="arrow-up" className="w-4 h-4" src={arrowUp} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          `px-3 flex-col transition-all duration-150 ease-in-out gap-2`,
          {
            flex: showDropdown,
            hidden: !showDropdown,
          }
        )}
      >
        {data.module_data.map((moduleItem: ModuleItem) => (
          <div
            className={cn(`flex justify-between p-[6px] cursor-pointer`, {
              "!cursor-default": isLockedLesson || moduleItem.is_locked,
            })}
            onClick={() => {
              if (isLockedLesson) return;
              if (!moduleItem.is_locked) {
                router.push(`/courses/${courseId}/${data.slug}`);
              }
            }}
            key={moduleItem.id}
          >
            <div
              className={cn("font-light", {
                "text-grey-400": moduleItem.is_locked || isLockedLesson,
              })}
            >
              {moduleItem.title}
            </div>
            <div className="flex-1 flex justify-end">
              {isLockedLesson || moduleItem.is_locked ? (
                <Image
                  alt="circle-fill-icon"
                  className="w-4 h-[18px]"
                  src={lock}
                />
              ) : moduleItem.is_complete_module ? (
                <CircleCheck
                  className={`${"text-green-400 w-[18px] h-[18px]"}`}
                />
              ) : (
                <CircleCheck
                  className={`${"text-white-300 w-[18px] h-[18px]"}`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseModule;
