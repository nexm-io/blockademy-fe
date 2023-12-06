import cn from "@/services/cn";
import { debounce } from "@/utils/debounce";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import cup from "@/public/icons/cup.svg";
import Button from "../Common/Button";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectCourses } from "@/redux/features/courses/reducer";
import { setRefUrl } from "@/redux/features/auth/action";
import { toast } from "react-toastify";
import api from "@/services/axios";
import InfoPopup from "../Popup/InfoPopup";
import { Loader3 } from "@styled-icons/remix-line";
import { getNextLesson } from "@/redux/features/courses/action";

const patternCourseDetail = /^\/courses\/[^\/]+(?:\/[^\/]+)?$/;
const patternLessonDetail = /^\/courses\/[^\/]+(?:\/[^\/]+)?\/lessons\/[^\/]+(?:\/[^\/]+)?$/;

const CircularProgress = ({ percent }: { percent: any }) => {
  return (
    <div className="flex justify-normal">
      <div
        className="flex items-center justify-center"
        style={{ position: "relative" }}
      >
        <div className="w-12 h-12">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth={10}
              cx={50}
              cy={50}
              r={40}
              fill="transparent"
            />
            <circle
              className="text-indigo-500 stroke-current"
              style={{
                strokeDasharray: "400, 400",
                transition: "stroke-dashoffset 0.35s",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
              strokeWidth={10}
              strokeLinecap="round"
              cx={50}
              cy={50}
              r={40}
              fill="transparent"
              strokeDashoffset="calc(400 - (400 * 31) / 100)"
            />
          </svg>
        </div>

        <span className="absolute">
          <Image
            alt="logo"
            className="w-[15px] h-[15px]"
            src={cup}
            width={15}
            height={15}
          />
        </span>
      </div>
    </div>
  );
};

export default function CourseInfoFooter() {
  const [isSticky, setSticky] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [registered, setRegistered] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isCourseDetailPage, setIsCourseDetailPage] = useState<boolean>(false);
  const [isLessonDetailPage, setIsLessonDetailPage] = useState<boolean>(false);
  const pathName = usePathname();
  const { details, nextLesson } = useAppSelector(selectCourses);
  const isLogin = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useParams();
  const courseId = params.courseId;

  const handleApplyCourse = async () => {
    if (!isLogin) {
      dispatch(setRefUrl(pathName));
      router.push("/login");
      toast.info("Please login to continue");
      return;
    }
    setLoading(true);
    try {
      const response = await api.get(
        `/api/v10/register-course?course_id=${courseId}`
      );
      if (response.status === 200) {
        setRegistered(true);
        setShowPopup(true);
      }
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsCourseDetailPage(patternCourseDetail.test(pathName));
    setIsLessonDetailPage(patternLessonDetail.test(pathName));
    console.log(pathName);
  }, [pathName]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setSticky(scrollPosition / pageHeight <= 0.95);
    }, 150);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (details?.id) setRegistered(!!details.is_registered);
  }, [details]);

  useEffect(() => {
    dispatch(getNextLesson(courseId as string));
  }, []);

  return (
    <>
      <div
        className={cn(
          `bg-white-100 py-[22px] transition-all duration-150 ease-in-out`,
          {
            "fixed bottom-0 left-0 right-0": isSticky,
          }
        )}
        style={{ boxShadow: "0px -3px 20px 0px rgba(170, 170, 170, 0.25)" }}
      >
        <div className="container">
          <div
            className={cn(
              `flex flex-col lg:flex-row justify-between items-center gap-4`,
              {
                "!justify-end": !registered,
              }
            )}
          >
            {registered && (
              <div className="inline-block lg:pr-[70px] lg:border-r border-black-100">
                <div className="flex items-center gap-[18px]">
                  <CircularProgress percent={75} />
                  <div className="text-sm leading-[21px]">
                    <p className="font-medium">5% Completed. Keep going!</p>
                    <p className="text-grey-800">594 builders ahead of you.</p>
                  </div>
                </div>
              </div>
            )}

            {/* APPLY COURSE */}
            {!registered && isCourseDetailPage && (
              <div className="flex justify-end">
                <Button
                  className="w-full md:w-auto md:min-w-[184px]"
                  onClick={handleApplyCourse}
                  disabled={!details?.id}
                >
                  Apply course
                  {loading && (
                    <Loader3
                      className="animate-spin ml-2"
                      width={25}
                      height={25}
                    />
                  )}
                </Button>
              </div>
            )}

            {/* LET'S GO */}
            {registered && isCourseDetailPage && (
              <div className="flex justify-end">
                <Button
                  className="w-full md:w-auto md:min-w-[184px]"
                  disabled={!details?.id}
                  onClick={()=>{
                    router.push(`/courses/${courseId}/${nextLesson.sub_course_slug}/lessons/${nextLesson.lesson_slug}`)
                  }}
                >
                  Let’s go
                </Button>
              </div>
            )}

            {/* COMPLETE QUIZ */}
            {/* <div className="flex justify-end">
            <Button className="w-full md:w-auto md:min-w-[184px]">
              Complete Quiz
            </Button>
          </div> */}

            {/* PREVIOUS - NEXT */}
            {isLessonDetailPage && registered && (
              <div className="flex items-center justify-between w-full flex-1 px-4 lg:px-0 lg:pl-[66px]">
                <Button className="w-auto md:min-w-[184px] bg-blue-600 group hover:bg-blue-600/50 group !px-3">
                  <span className="text-blue-700 group-hover:text-blue-700/80 transition-all">
                    Previous
                  </span>
                </Button>
                <Button className="w-auto md:min-w-[184px]">Next</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showPopup && (
        <InfoPopup
          title="Congratulations!"
          desc={
            <div className="text-gray-700 text-center mb-4">
              <p>Thanks for joining the course.</p>
              <p>
                Please enjoy your journey, complete quiz and get certificate.
              </p>
            </div>
          }
          onClose={() => setShowPopup(false)}
          className="md:max-w-[359px]"
        >
          <Button
            type="button"
            onClick={() => setShowPopup(false)}
            className="mt-2 w-[184px]"
          >
            Yap, sure
          </Button>
        </InfoPopup>
      )}
    </>
  );
}
