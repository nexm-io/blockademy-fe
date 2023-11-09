"use client";
import gift from "@/public/icons/giftcourse.svg";
import Image from "next/image";
import { useEffect } from "react";
import Button from "@/components/Common/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useParams } from "next/navigation";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import { loadDetailsCourse } from "@/redux/features/new-courses/action";
import { selectNewCourses } from "@/redux/features/new-courses/reducer";

const CourseDetails = () => {
  const params = useParams();
  const courseId = params.id;
  const { courseDetails, courseDetailsLoading } =
    useAppSelector(selectNewCourses);

  const dispatch = useAppDispatch();

  console.log(courseDetails);

  useEffect(() => {
    dispatch(loadDetailsCourse(courseId as string));
  }, [courseId]);


  return (
    <div className="mt-32">
      {!courseDetails && courseDetailsLoading ? (
        <div className="my-[60px] flex flex-col gap-4">
          <SkeletionCard height="23px" width="600px" radius="16px" />
          <div className="mt-6 flex flex-col gap-4">
            <SkeletionCard height="44px" width="352px" radius="16px" />
            <SkeletionCard
              height="36px"
              width="1152px"
              radius="16px"
              mobileCardFull
            />
          </div>
          <div className="mt-7 flex gap-[48px]">
            <SkeletionCard height="500px" width="753px" radius="16px" />
            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }, (_, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 px-[23px] rounded-lg py-4 bg-gray-200"
                >
                  <SkeletionCard key={index} height="20px" width="306px" />
                  <SkeletionCard key={index} height="20px" width="306px" />
                </div>
              ))}
            </div>
          </div>
          <SkeletionCard height="36px" width="340px" radius="16px" />
          <SkeletionCard height="18px" width="753px" radius="16px" />
          <SkeletionCard height="18px" width="753px" radius="16px" />
          <SkeletionCard height="18px" width="753px" radius="16px" />
          <SkeletionCard height="18px" width="753px" radius="16px" />
        </div>
      ) : (
        <>
          <div className="md:mt-[42px] mt-5 flex gap-3">
            <BreadCrumb />
          </div>
          <section className="md:mt-[56px] mt-8 lg:px-0 px-3">
            <div>
              <div className="flex justify-between items-center flex-wrap mb-4">
                <h1 className="text-black-100 font-bold md:text-4xl text-3xl">
                  {courseDetails?.title}
                </h1>
                <div className="flex items-center gap-3">
                  <Button className="!px-6">Complete Quizz</Button>
                  <Button className="!px-6">Reward</Button>
                  <Button className="!px-6">Leaderboard</Button>
                </div>
              </div>

              <div className="bg-blue-200 py-3 px-4 flex gap-4">
                <Image alt="gift-icon" src={gift}></Image>
                <span className="md:text-base text-[13px] font-normal text-black-100 ">
                  Log into your Blockademy account to register courses, track
                  progress and claim your rewards.
                </span>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
