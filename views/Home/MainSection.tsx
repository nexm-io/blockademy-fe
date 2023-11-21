import Image from "next/image";
import Button from "@/components/Common/Button";
import ChipV2 from "@/components/ChipV2";
import { useEffect, useState } from "react";
import api from "@/services/axios";
import { secondsToMinutes } from "@/utils/convertToMinutes";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import TopBanner from "./TopBanner";

const MainSection = () => {
  const [course, setCourse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadHotCourse = async () => {
    try {
      const { data } = await api.get(`/api/v10/hot-course`);
      setCourse(data.data);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      setCourse(null);
    }
  };

  useEffect(() => {
    loadHotCourse();
  }, []);

  return (
    <section>
      <Link
        href={
          course
            ? `/courses/${course?.course_id}?lesson_id=${course?.lesson_first?.lesson_id}`
            : "/"
        }
      >
        <TopBanner />
      </Link>

      <div className="container grid lg:gap-10 pb-[60px] hot-course-container">
        <div className="grid gap-6 pt-[45px] md:pt-[73px] pb-[58px] lg:pt-[146px] lg:pb-[117px]">
          <h3 className="text-black-400 text-[56px] leading-[64px] font-bold">
            Unlock the Power <br /> of Blockchain
          </h3>
          <p className="text-xl text-[#616161] font-normal max-w-[477px]">
            Make blockchain learning become easy, engaging, and gamified.
          </p>
          <div>
            <Link href="/courses">
              <Button>Learn for Free</Button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="bg-[#F5F5F5] h-full absolute left-0 top-0 hot-course-bg"></div>
          {isLoading || !course ? (
            <div className="lg:p-10 py-10 pr-0 lg:pr-0 relative">
              <p className="text-xs font-normal text-dark-400">Hot Course</p>
              <div className="skeleton bg-gray-400/20 h-[336px] w-full rounded"></div>
              <div className="skeleton mt-4 bg-gray-400/20 h-[28px] w-2/3 rounded"></div>
              <div className="text-base text-[#616161] flex items-center gap-[25px] mt-4">
                <div className="skeleton bg-gray-400/20 h-[24px] w-[70px] rounded"></div>
                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    className="-mt-1"
                  >
                    <path
                      d="M7.99749 3.33268C9.05229 3.33268 10.0834 3.66503 10.9605 4.28769C11.8376 4.91035 12.5212 5.79536 12.9248 6.83081C13.3285 7.86623 13.4341 9.00565 13.2284 10.1048C13.0226 11.2041 12.5146 12.2138 11.7687 13.0063C11.0228 13.7988 10.0726 14.3385 9.03796 14.5571C8.00343 14.7758 6.93102 14.6635 5.9565 14.2346C4.98196 13.8057 4.14901 13.0795 3.56297 12.1476C2.97694 11.2157 2.66414 10.1201 2.66414 8.99935C2.66576 7.49698 3.22818 6.05664 4.22803 4.99431C5.22787 3.93197 6.58348 3.3344 7.99749 3.33268ZM7.99749 1.91602C6.67896 1.91602 5.39 2.33145 4.29368 3.10977C3.19735 3.8881 2.34286 4.99436 1.83828 6.28868C1.3337 7.58297 1.20168 9.00721 1.45891 10.3812C1.71614 11.7553 2.35108 13.0174 3.28343 14.008C4.21578 14.9986 5.40367 15.6733 6.69689 15.9466C7.99009 16.2199 9.33056 16.0796 10.5487 15.5435C11.7669 15.0074 12.8081 14.0995 13.5406 12.9346C14.2732 11.7698 14.6642 10.4003 14.6642 8.99935C14.6642 8.06917 14.4918 7.14806 14.1567 6.28866C13.8217 5.42926 13.3306 4.6484 12.7116 3.99065C12.0925 3.3329 11.3576 2.81114 10.5487 2.45518C9.73989 2.09921 8.87296 1.916 7.99749 1.91602Z"
                      fill="#616161"
                    />
                    <path
                      d="M10.3741 12.521L7.33545 9.29237V4.75195H8.66878V8.70587L11.3168 11.5194L10.3741 12.521Z"
                      fill="#616161"
                    />
                  </svg>
                  <div className="skeleton bg-gray-400/20 h-[24px] w-[50px] rounded"></div>
                </div>
              </div>
              <div className="mt-6">
                <div className="skeleton bg-gray-400/20 h-[36px] w-[130px] rounded-[30px]"></div>
              </div>
            </div>
          ) : (
            <Link
              href={`/courses/${course.course_id}?lesson_id=${course.lesson_first?.lesson_id}`}
              className="h-full"
            >
              <div className="lg:p-10 py-10 pr-0 lg:pr-0 relative">
                <p className="text-xs font-normal text-dark-400">Hot Course</p>
                <Image
                  src={course.image.original}
                  width={603}
                  height={336}
                  alt="hutech"
                  className="mt-1 w-full object-cover"
                />
                <h3 className="text-black-400 text-xl font-normal mt-4">
                  {course.title}
                </h3>
                <div className="text-base text-[#616161] flex items-center gap-[25px] mt-4">
                  <p className="text-base text-[#616161] font-normal">
                    {format(parseISO(course.start_date), "LLL d, yyyy")}
                  </p>
                  <div className="flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      className="-mt-1"
                    >
                      <path
                        d="M7.99749 3.33268C9.05229 3.33268 10.0834 3.66503 10.9605 4.28769C11.8376 4.91035 12.5212 5.79536 12.9248 6.83081C13.3285 7.86623 13.4341 9.00565 13.2284 10.1048C13.0226 11.2041 12.5146 12.2138 11.7687 13.0063C11.0228 13.7988 10.0726 14.3385 9.03796 14.5571C8.00343 14.7758 6.93102 14.6635 5.9565 14.2346C4.98196 13.8057 4.14901 13.0795 3.56297 12.1476C2.97694 11.2157 2.66414 10.1201 2.66414 8.99935C2.66576 7.49698 3.22818 6.05664 4.22803 4.99431C5.22787 3.93197 6.58348 3.3344 7.99749 3.33268ZM7.99749 1.91602C6.67896 1.91602 5.39 2.33145 4.29368 3.10977C3.19735 3.8881 2.34286 4.99436 1.83828 6.28868C1.3337 7.58297 1.20168 9.00721 1.45891 10.3812C1.71614 11.7553 2.35108 13.0174 3.28343 14.008C4.21578 14.9986 5.40367 15.6733 6.69689 15.9466C7.99009 16.2199 9.33056 16.0796 10.5487 15.5435C11.7669 15.0074 12.8081 14.0995 13.5406 12.9346C14.2732 11.7698 14.6642 10.4003 14.6642 8.99935C14.6642 8.06917 14.4918 7.14806 14.1567 6.28866C13.8217 5.42926 13.3306 4.6484 12.7116 3.99065C12.0925 3.3329 11.3576 2.81114 10.5487 2.45518C9.73989 2.09921 8.87296 1.916 7.99749 1.91602Z"
                        fill="#616161"
                      />
                      <path
                        d="M10.3741 12.521L7.33545 9.29237V4.75195H8.66878V8.70587L11.3168 11.5194L10.3741 12.521Z"
                        fill="#616161"
                      />
                    </svg>
                    <span>{secondsToMinutes(course.duration)}m</span>
                  </div>
                </div>
                <div className="mt-6">
                  <ChipV2 label={course.level.name} />
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
