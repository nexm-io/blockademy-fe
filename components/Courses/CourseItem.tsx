import Image from "next/image";
import React, { useEffect, useState } from "react";
import IconUser from "@/public/icons/user.svg";
import IconVisor from "@/public/icons/visor.svg";
import IconDotList from "@/public/icons/dot-list.svg";
import { Star } from "../Icon";
import Link from "next/link";
import { CourseTypes } from "@/redux/features/new-courses/type";
import cn from "@/services/cn";
import slugifyText from "@/utils/slugifyText";
import ChipV2 from "../ChipV2";

const LEVEL_COLORS = {
  1: { bgColor: "bg-green-100/30", dotColor: "bg-green-100" },
  2: { bgColor: "bg-yellow-500/30", dotColor: "bg-yellow-500" },
  3: { bgColor: "bg-red-500/30", dotColor: "bg-red-500" },
};

const CourseItem = ({ course }: { course: CourseTypes }) => {
  const [srcCourse, setSrcCourse] = useState(course.image.original);
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
    const levelId = (course.level?.id as 1) || 2 || 3;
    setLevelStyle(LEVEL_COLORS[levelId]);
  }, [course.level?.id]);

  return (
    <Link
      href={course.is_specialization === 1 ? `/courses/${course.course_id}` : `/courses/${course.course_id}`}
      className="h-full"
    >
      <div className="group border border-[#F5F5F5] rounded-lg overflow-hidden h-full flex flex-col">
        <div className="overflow-hidden">
          <Image
            className="w-full h-[202px] object-cover transition-all duration-500 group-hover:scale-110"
            height={189}
            width={280}
            onError={() => setSrcCourse("/images/course/default-img.png")}
            src={srcCourse}
            alt={course.title}
          />
        </div>
        <div className="px-2 pt-[20px] pb-4 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center gap-[9px]">
              <div className="flex items-center gap-[2px]">
                {renderRating()}
              </div>
              <div className="text-[12px] leading-[20px] font-light">
                {course.rating_view}
              </div>
            </div>
            <p className="text-[12px] leading-[20px] mt-2 text-black-400 font-light">
              {course.category?.category_name || "--"}
            </p>
            <p className="text-xl font-normal mt-1 line-clamp-2">
              {course.title}
            </p>
          </div>
          <div>
            <div className="mt-3 flex items-center justify-between bg-[#F5F5F5] py-[10px] px-[20px]">
              <div className="flex items-center gap-2">
                <Image src={IconUser} width={15} height={10} alt="user" />
                <p className="text-[14px] leading-[24px] font-light">
                  {course.total_candidate}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={IconVisor} width={15} height={11} alt="visor" />
                <p className="text-[14px] leading-[24px] font-light">
                  {course.total_hit}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-[20px]">
              <ChipV2 label={course.level.name} type={course.level.slug} />
              <div className="flex items-center gap-2">
                <Image src={IconDotList} width={15} height={11} alt="dot" />
                <p className="text-[14px] leading-[24px] font-light">
                  {course.total_Lecture} Lectures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;
