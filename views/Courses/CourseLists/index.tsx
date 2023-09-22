"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
import { CourseTypes } from "@/redux/features/courses/type";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import CourseLesson from "../CourseLesson";
import certificate from "@/public/icons/certificate.svg";
import SkeletonCourse from "@/components/Skeleton/SkeletonCourse";
import { getListCourse } from "@/redux/features/courses/action";
import slugify from "slugify";
import { toast } from "react-toastify";
import { format, isBefore } from "date-fns";
import { claimInWallet } from "@/redux/features/user/action";
import defaultImg from "@/public/images/home/home-default.png";
import { PLACEHOLDER_BASE64 } from "@/utils/getLocalBase64";
import ReactPaginate from "react-paginate";

const CourseLists = function () {
  const details = useAppSelector((state) => state.courses.data);
  const [currentDay, setCurrentDay] = useState<Date | string>("");
  const [isClaimed, setIsClaimed] = useState<boolean>(false);

  const isLoading = useAppSelector((state) => state.courses.isLoading);
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const pagination = useAppSelector((state) => state.courses.pagination);
  const itemsPerPage = Number(pagination?.per_page) || 1;
  const [itemOffset, setItemOffset] = useState(0);
  const [limit] = useState<number>(5);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const dateObject = new Date();

    setCurrentDay(dateObject);
    dispatch(getListCourse({ limit, page }));
  }, [dispatch, isClaimed, limit, page]);

  const handleClaim = async (section: CourseTypes) => {
    if (section.reward_is_claimed === 1) {
      toast.error("Reward has been received");
    } else {
      const res = await dispatch(claimInWallet(section.reward_id)).unwrap();
      res.success && toast.success("Claim reward successfully");
      setIsClaimed(true);
    }
  };
  const handlePageClick = (event: any) => {
    const selectedPage = event.selected + 1;
    if (selectedPage < 1) {
      return;
    }
    const newOffset = (selectedPage - 1) * itemsPerPage;
    setItemOffset(newOffset);
    setPage(selectedPage);
  };
  return (
    <>
      {isLoading && details && details.length !== 0 ? (
        <>
          {Array.from({ length: 3 }, (_, index) => (
            <>
              <SkeletonCourse />
            </>
          ))}
        </>
      ) : (
        details.map((section: CourseTypes) => (
          <div className="md:mt-12 mt-8 lg:mx-0 mx-6" key={section.title}>
            <div>
              <h2 className="text-black-100 md:text-[40px] line-clamp-[9] ml-4 md:ml-0 text-[25px] font-bold w-max md:border-b-[6px] border-b-4 border-b-blue-100">
                {section.title}
              </h2>
              <div className="mt-9 flex gap-[53px] md:flex-row flex-col">
                <div className="basis-1/2 md:mx-0 mx-4">
                  <Image
                    alt="img-course1"
                    width={588}
                    height={330}
                    src={
                      section.image
                        ? section.image?.original_image ||
                          section.image?.thumbnail
                        : section.image === ""
                        ? defaultImg
                        : defaultImg
                    }
                    className="rounded-lg md:w-[560px] h-full object-cover md:max-h-[330px] md:max-w-[580px]"
                    placeholder="blur"
                    blurDataURL={PLACEHOLDER_BASE64}
                  />
                </div>
                <div className="flex flex-col justify-between basis-1/2 mx-4 md:mx-0">
                  <div className="flex flex-col gap-4 font-normal pt-2">
                    <div
                      className="section_description flex flex-col gap-3 text-base line-clamp-[9]"
                      dangerouslySetInnerHTML={{ __html: section.description }}
                    />
                  </div>
                  <div>
                    <Button
                      className="capitalize text-base font-medium md:mt-0 mt-4"
                      disabled={section.list_courses.data.length === 0}
                      onClick={() =>
                        push(
                          `/courses/${section.slug}/${section.list_courses.data[0].slug}/${section.list_courses.data[0].lesson_first?.lesson_slug}`
                        )
                      }
                    >
                      start course
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:mt-[80px] md:mb-[100px] mb-16 mt-10">
                <h3 className="text-black-100 text-[22px] font-bold mb-4 mx-4 md:mx-0">
                  {section.list_courses ? section.list_courses.data.length : 0}{" "}
                  Courses
                </h3>

                <CourseLesson
                  campaign_id={section.slug}
                  title={section.title}
                  details={section.list_courses && section.list_courses.data}
                />

                <div className={`flex gap-4 items-center mt-4 px-4 md:px-0`}>
                  <div className="w-[30px] h-[30px] flex flex-col md:flex-row items-center justify-center ">
                    <Image
                      alt="check-icon"
                      src={certificate}
                      className={`w-full h-full object-cover flex-shrink-0 rounded-full p-1 bg-blue-100`}
                    ></Image>
                  </div>
                  <div
                    className={`bg-gray-200 flex md:items-center md:flex-row flex-col items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5`}
                  >
                    <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
                      <span
                        className={`basis-[70%] line-clamp-1 text-[20px] leading-7 text-[#094298]`}
                      >
                        Certificate
                      </span>
                    </div>
                    <div className="prose flex-col flex items-start md:items-center  gap-1 pr-4 text-blue-100 basis-[30%] justify-start md:justify-end">
                      {section.reward_is_claimed === 0 ? (
                        <Button
                          type="button"
                          onClick={() => handleClaim(section)}
                          disabled={
                            isBefore(
                              new Date(),
                              new Date(section.reward_released_date * 1000)
                            ) ||
                            section.is_finished === 0 ||
                            isClaimed
                          }
                          className={`line-clamp-1 md:block   ${
                            section.is_finished === 0
                              ? "opacity-30"
                              : "btn__contain-shadow "
                          }`}
                        >
                          Claim reward
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          disabled={true}
                          className={`line-clamp-1 md:block   ${
                            section.is_finished === 0
                              ? "opacity-30"
                              : "btn__contain-shadow "
                          }`}
                        >
                          Claimed
                        </Button>
                      )}
                      {section.is_finished === 1 &&
                      isBefore(
                        new Date(),
                        new Date(section.reward_released_date * 1000)
                      ) ? (
                        <span className="text-blue-100 text-xs truncate">
                          Reward will be released on{" "}
                          {format(
                            section.reward_released_date * 1000,
                            "EEE MMM dd yyyy HH:mm:ss"
                          )}
                        </span>
                      ) : (
                        " "
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {/* Pagination */}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pagination?.total_pages || 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="pagination flex items-center justify-center md:gap-6 gap-4"
      />
    </>
  );
};

export default CourseLists;
