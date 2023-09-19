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
import defaultImg from "@/public/images/home/home-default.png";
import { PLACEHOLDER_BASE64 } from "@/utils/getLocalBase64";

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

  const LessonCourse = ({
    detail,
    campaign,
  }: {
    detail: Array<ListCourse>;
    campaign: string;
  }) => {
    return (
      detail &&
      detail.length > 0 &&
      !isLoading && (
        <div className="flex flex-col gap-6 lg:max-w-[80%]">
          {detail.map((item, index) => (
            <div
              key={index}
              className="flex justify-between gap-6 md:min-w-[550px] w-full "
            >
              <Image
                alt="img-course"
                src={
                  item.image.thumbnail ||
                  item.image.original_image ||
                  defaultImg
                }
                width={332}
                height={186}
                className="md:min-w-[332px] md:w-[332px] md:h-[186px] object-fill shrink-0 md:shrink-0 md:basis-0 basis-2/4"
                placeholder="blur"
                blurDataURL={PLACEHOLDER_BASE64}
              />
              <div className="flex flex-col justify-between w-full shrink-0 basis-2/4">
                <div className="flex flex-col ">
                  <h2 className="text-[28px] font-semibold truncate line-clamp-2 md:max-w-[420px]">
                    {item.title}
                  </h2>
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
                <div
                  className={`${
                    getLastPathName(pathname) === "progress"
                      ? "md:flex-row flex-col gap-4 md:gap-0"
                      : ""
                  } flex justify-between`}
                >
                  <div className="flex items-center gap-2 mt-3 md:mt-0">
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
                    onClick={() =>
                      route.push(
                        `/courses/${campaign}/${item.slug}/${item.lesson_first?.lesson_slug}/`
                      )
                    }
                    className="md:w-[180px] px-[6px]"
                  >
                    Continue Learning
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    );
  };

  return (
    <div className="w-full flex items-center justify-center md:px-3">
      {(!isLoading && details && details.length > 0) ? (
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
      ) : (
        <div className="w-full flex flex-col">
          {(details.length > 0) ? (
            details.map((detail, index) => (
              <div key={index} className="mt-12 first:mt-0 mx-7 md:mx-0">
                <h1
                  className={`${
                    getLastPathName(pathname) === "progress"
                      ? "md:mb-8 mb-3"
                      : ""
                  } md:text-[40px] text-2xl font-semibold`}
                >
                  {detail.title}
                </h1>
                <div
                  className={`${
                    getLastPathName(pathname) === "progress"
                      ? "justify-start"
                      : "justify-between"
                  } flex md:flex-row flex-col w-full mt-4 md:gap-10 gap-4 `}
                >
                  {getLastPathName(pathname) === STATUS.COMPLETED ? (
                    <>
                      <Image
                        alt="img-course"
                        src={
                          detail.image?.thumbnail ||
                          detail.image?.original_image ||
                          defaultImg
                        }
                        width={332}
                        height={186}
                        className="md:min-w-[332px] md:w-[332px] md:h-[186px] object-fill shrink-0 md:shrink-0 md:basis-0 basis-2/4"
                        placeholder="blur"
                        blurDataURL={PLACEHOLDER_BASE64}
                      />
                      <div
                        className="process_description flex flex-col gap-3 text-base md:min-w-[500px] md:max-w-[500px] overflow-hidden"
                        dangerouslySetInnerHTML={{ __html: detail.description }}
                      />
                      <div className="text-xs flex flex-col-reverse md:flex-col justify-between md:max-w-[200px]">
                        <span className="line-clamp-2 leading-6">
                          {`Completed: ${format(
                            new Date((detail.completed_at || 1) * 1000),
                            "EEE MMM dd yyyy HH:mm:ss"
                          )}`}
                        </span>
                        {detail.reward_is_claimed === 1 ? (
                          <Button disabled>Claimed</Button>
                        ) : (
                          <Button
                            onClick={() => handleClaimReward(detail.reward_id)}
                          >
                            Claim reward
                          </Button>
                        )}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <LessonCourse
                    campaign={detail.slug}
                    detail={detail.list_courses?.data}
                  />
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="flex items-center justify-center flex-col gap-9">
                <Image alt="empty-box" src={empty} />
                <p className="text-gray-100 text-base font-normal ">
                  You will find your finished courses here.
                </p>
                <Button onClick={() => route.push("/courses/all")}>
                  Start Learning
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseItem;
