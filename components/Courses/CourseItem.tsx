import Image from "next/image";
import React, { useEffect, useState } from "react";
import IconUser from "@/public/icons/user.svg";
import IconVisor from "@/public/icons/visor.svg";
import IconDotList from "@/public/icons/dot-list.svg";
import { Star } from "../Icon";
import Link from "next/link";
import { CourseTypes } from "@/redux/features/new-courses/type";
import cn from "@/services/cn";

const LEVEL_COLORS = {
  1: { bgColor: "bg-green-100/30", dotColor: "bg-green-100" },
  2: { bgColor: "bg-yellow-500/30", dotColor: "bg-yellow-500" },
  3: { bgColor: "bg-red-500/30", dotColor: "bg-red-500" },
};

const CourseItem = ({ course }: { course: CourseTypes }) => {
  const [levelStyle, setLevelStyle] = useState({
    bgColor: "bg-gray-300/30",
    dotColor: "bg-gray-300",
  });

  const renderRating = () => {
    const courseRating = course.rating_view;
    const maxRating = 5;
    const stars = [];

    for (let index = 0; index < maxRating; index++) {
      const starColor =
        index < courseRating ? "text-[#FEA800]" : "text-[#D9D9D9]";
      stars.push(<Star key={index} className={cn(starColor)} />);
    }

    return stars;
  };

  useEffect(() => {
    const levelId = course.level?.id as 1 || 2 || 3;
    setLevelStyle(LEVEL_COLORS[levelId]);
  }, [course.level?.id]);

  return (
    <Link href="#" className="group mb-10">
      <div className="rounded overflow-hidden">
        <Image
          className="w-full h-[202px] object-cover transition-all duration-500 group-hover:scale-110"
          height={189}
          width={280}
          src={course.image.original}
          alt={course.title}
        />
      </div>
      <div className="px-2">
        <div className="flex items-center gap-2 mt-6">
          <div className="flex items-center gap-[2px]">{renderRating()}</div>
          <div className="text-xs leading-3 -mb-[2px] font-normal">
            {course.rating_view}
          </div>
        </div>
        <p className="text-xs mt-[10px]">
          {course.category?.category_name || "--"}
        </p>
        <p className="text-lg font-bold line-clamp-2 min-h-[56px]">
          {course.title}
        </p>
        <div className="mt-6 flex items-center justify-between bg-[#F0F0F0] py-3 px-[14px]">
          <div className="flex items-center gap-2">
            <Image src={IconUser} width={15} height={10} alt="user" />
            <p className="text-xs leading-3 -mb-[2px] font-normal">
              {course.total_candidate}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={IconVisor} width={15} height={11} alt="visor" />
            <p className="text-xs leading-3 -mb-[2px] font-normal">
              {course.total_hit}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[18px] px-2">
          <div
            className={`flex items-center gap-2 rounded-[30px] p-2 ${levelStyle.bgColor}`}
          >
            <span
              className={`w-[6px] h-[6px] rounded-full inline-block ${levelStyle.dotColor}`}
            ></span>
            <p className="text-xs leading-3 -mb-[2px] font-normal">
              {course.level?.name || "--"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={IconDotList} width={15} height={11} alt="dot" />
            <p className="text-xs leading-3 -mb-[2px] font-normal">
              {course.total_Lecture} Lecture
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;
