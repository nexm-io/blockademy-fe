"use client";
import React, { useEffect } from "react";
import empty from "@/public/icons/emptybox.svg";
import Image from "next/image";
import Button from "../Common/Button";
import img from "@/public/images/course/course-1.png";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getListCourse } from "@/redux/features/courses/action";
import clock from "@/public/icons/clock.svg";
import quiz from "@/public/icons/quiz.svg";
import { CourseTypes, ListCourse } from "@/redux/features/courses/type";
import { secondsToMinutes } from "@/utils/convertToMinutes";
import { usePathname, useRouter } from "next/navigation";
import { getLastPathName } from "@/utils/getPathName";
import { STATUS } from "@/utils/status";
import { format } from "date-fns";
import { claimInWallet } from "@/redux/features/user/action";
import { toast } from "react-toastify";
import { SkeletionCard } from "../Skeleton/SkeletionCard";

const CourseItem = () => {
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.courses.data);
  const isLoading = useAppSelector((state) => state.courses.isLoading);
  const pathname = usePathname();
  const route = useRouter();
  useEffect(() => {
    if (getLastPathName(pathname) === STATUS.COMPLETED) {
      dispatch(getListCourse("3"));
    } else {
      dispatch(getListCourse("2"));
    }
  }, [dispatch, pathname]);

  const handleClaimReward = async (id: number) => {
    const res = await dispatch(claimInWallet(id)).unwrap();
    res && toast.success("Claim reward successfully!");
  };

  const LessonCourse = ({ detail }: { detail: Array<ListCourse> }) => {
    return (
      (detail && !isLoading)  && (
        <>
          {detail.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between md:min-w-[480px]"
            >
              <div className="flex flex-col">
                <h2 className="text-[28px] font-semibold">{item.title}</h2>
                <div className="flex text-sm mt-2 gap-2">
                  <div className="flex gap-2 text-sm">
                    <Image src={clock} alt="" width={20} height={20} />
                    <span>{secondsToMinutes(item.duration)} Mins</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <Image src={quiz} alt="" width={20} height={20} />
                    <span>{item.type}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  {Array.from(
                    { length: item.total_lesson || 5 },
                    (_, index) => (
                      <div
                        key={index}
                        className="h-1 w-6 rounded-lg bg-neutral-200"
                      >
                        {index + 1 <= item.total_lesson_completed && (
                          <div className={`h-1 bg-blue-100 rounded-lg`}></div>
                        )}
                      </div>
                    )
                  )}
                  <span className="text-xs text-gray-300">{`${item.total_lesson_completed}/${item.total_lesson}`}</span>
                </div>
                <Button
                  onClick={() => route.push("/courses/all")}
                  className="md:w-[180px] px-[6px]"
                >
                  Continue Learning
                </Button>
              </div>
            </div>
          ))}
        </>
      )
    );
  };

  return (
    <div className="w-full flex items-center justify-center">
      {details.length == 0 ? (
        <div className="flex items-center justify-center flex-col gap-9">
          <Image alt="empty-box" src={empty} />
          <p className="text-gray-100 text-base font-normal ">
            You will find your finished courses here.
          </p>
          <Button onClick={() => route.push("/courses/all")}>
            Start Learning
          </Button>
        </div>
      ) : (
        <div className="w-full flex flex-col">
          {!isLoading ? (
            details.map((detail, index) => (
              <div key={index} className="">
                <h1 className="md:text-[40px] font-semibold">{detail.title}</h1>
                <div className="flex md:flex-row flex-col w-full mt-[38px] gap-10">
                  <Image
                    alt="img-course"
                    src={detail.image?.original_image || "/"}
                    width={332}
                    height={186}
                    className="md:min-w-[332px] md:w-[332px] md:h-[186px]"
                  />
                  {getLastPathName(pathname) === STATUS.COMPLETED ? (
                    <>
                      <div
                        className="flex flex-col gap-3 text-base min-w-[300px]"
                        dangerouslySetInnerHTML={{ __html: detail.description }}
                      />
                      <div className="text-xs flex flex-col justify-between">
                        <span className="truncate leading-6">
                          {`Completed: ${format(
                            new Date(detail.completed_at || 1 * 1000),
                            "EEE MMM dd yyyy HH:mm:ss"
                          )}`}
                        </span>
                        {detail.reward_is_claimed === 1 ? (
                          <Button disabled>Claimed</Button>
                        ) : (
                          <Button onClick={() => handleClaimReward(detail.reward_id)}>Claim reward</Button>
                        )}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <LessonCourse detail={detail.list_courses?.data} />
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="flex gap-4">
                <SkeletionCard width="332px" height="186px" radius="16px" />
                <div className="flex justify-between w-[650px] mt-2">
                  <div className="flex flex-col gap-2">
                    <SkeletionCard width="222px" height="30px" radius="16px" />
                    <SkeletionCard width="142px" height="30px" radius="16px" />
                    <SkeletionCard width="212px" height="30px" radius="16px" />
                    <SkeletionCard width="272px" height="30px" radius="16px" />
                    <SkeletionCard width="142px" height="30px" radius="16px" />
                  </div>
                  <div className="flex flex-col justify-between">
                    <SkeletionCard width="282px" height="30px" radius="16px" />
                    <SkeletionCard width="282px" height="30px" radius="8px" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseItem;
