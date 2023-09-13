"use client";
import clock from "@/public/icons/clock.svg";
import play from "@/public/icons/play.svg";
import { ListCourse } from "@/redux/features/courses/type";
import { secondsToMinutes } from "@/utils/convertToMinutes";
import slugifyText from "@/utils/slugifyText";
import { CircleCheck } from "@styled-icons/fa-solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import slugify from "slugify";
const CourseLesson = ({ details, campaign_id, title }: { details: Array<ListCourse>, campaign_id: string, title: string}) => {
  const router = useRouter()
  console.log(details);
  
  return (
    <div className="flex flex-col gap-4 px-4 md:px-0">

      {details.map((course) => (
        <div key={course.id}>
          <div  className={`flex gap-4 items-center `}>
            <div className="w-[25px] h-[25px]">
              <CircleCheck
                className={`${
                  course.is_completed === 1 ? "text-blue-100" : "text-white-300"
                }`}
              />
            </div>
            <div
              onClick={() => router.push(`/courses/${campaign_id}/${course.id}/${slugifyText(title)}`)}
              className={`bg-gray-200 cursor-pointer flex md:items-center items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5`}
            >
              <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
                <span className={`basis-[70%] line-clamp-1`}>
                  {course.title}
                </span>
                <div className=" flex items-center gap-[10px] basis-[20%] line-clamp-1">
                  <Image alt="clock-icon" src={clock}></Image>
                  <span className="line-clamp-1 text-base">
                    {secondsToMinutes(course.duration)} Mins
                  </span>
                </div>
              </div>
              <div className=" flex items-center gap-[10px] pr-4 text-blue-100 basis-[30%] justify-end">
                <Image alt="play-icon" src={play}></Image>
                <span className="line-clamp-1 hidden md:block">Learn Now</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseLesson;
