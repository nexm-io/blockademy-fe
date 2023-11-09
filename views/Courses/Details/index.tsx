"use client";
import gift from "@/public/icons/giftcourse.svg";
import Image from "next/image";
import { useEffect } from "react";
import Button from "@/components/Common/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useParams } from "next/navigation";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import React from "react";
import { loadDetailsCourse } from "@/redux/features/new-courses/action";
import { selectNewCourses } from "@/redux/features/new-courses/reducer";
import Quizs from "@/components/Quizs";
import CourseDetailsLoading from "@/components/Courses/CourseDetailsLoading";
import Link from "next/link";

const CourseDetails = () => {
  const params = useParams();
  const courseId = params.id;
  const { courseDetails, courseDetailsLoading } =
    useAppSelector(selectNewCourses);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadDetailsCourse(courseId as string));
  }, [courseId]);

  return (
    <div className="mt-32">
      {courseDetailsLoading ? (
        <CourseDetailsLoading />
      ) : (
        <>
          <section className="md:mt-[56px] mt-8 lg:px-0 px-3">
            <div className="flex justify-between items-center flex-wrap mb-4">
              <h1 className="text-black-100 font-bold md:text-4xl text-3xl">
                {courseDetails?.title}
              </h1>
              <div className="flex items-center flex-wrap gap-3">
                <Button className="!px-6 bg-blue-600 group hover:bg-blue-600/50 w-full sm:w-auto">
                  <span className="text-blue-700 group-hover:text-blue-700/80 font-bold transition-all">
                    Complete Quizz
                  </span>
                </Button>
                <Button className="!px-6 bg-orange-100 group hover:bg-orange-100/50 w-full sm:w-auto">
                  <span className="text-orange-200 group-hover:text-orange-200/80 font-bold transition-all">
                    Reward
                  </span>
                </Button>
                <Link href="/courses/leaderboard/1">
                  <Button className="!px-6 bg-green-300 group hover:bg-green-300/50 w-full sm:w-auto">
                    <span className="text-green-200 group-hover:text-green-200/80 font-bold transition-all">
                      Leaderboard
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-blue-200 py-3 px-4 flex gap-4">
              <Image alt="gift-icon" src={gift}></Image>
              <span className="md:text-base text-[13px] font-normal text-black-100 ">
                Log into your Blockademy account to register courses, track
                progress and claim your rewards.
              </span>
            </div>

            <div className="flex flex-wrap flex-col-reverse xl:flex-row gap-12 mt-10">
              <div className="text-black-100 md:text-lg text-base font-normal xl:w-2/3">
                <div
                  className="text-xs md:text-base"
                  dangerouslySetInnerHTML={{
                    __html: `<div class="w-full px-4 md:px-0"><div class="w-full"><h2 class="font-bold md:text-[26px] text-xl text-black-100 md:mt-11 mt-7 md:mb-7 mb-5">💻 Build an NFT minter front-end</h2><div class="text-black-100 md:text-lg text-base font-normal mb-9"><div class="flex flex-col gap-3 text-xs course-content md:text-base"><p class="chakra-text css-39bkwz">Welcome to your first week of SHIPPING. Every week you will have an entire section dedicated to taking your learnings and building it into your custom NFT staking app w/ loot boxes!</p>
                    <p class="chakra-text css-39bkwz">The whole point of these sections is to get you off localhost and building something real that others can use. All the builders that have come before you have found wild success from just putting their work out there and building in public. This is the moment you have been preparing for -- <strong>let's do this thing 🤘.</strong></p>
                    <p class="chakra-text css-39bkwz">The only functionality on the first screen is to connect to a user’s wallet. You can do this with the button at the top of the screen as well as the button in the middle.</p>
                    <p class="chakra-text css-39bkwz"><img src="https://hackmd.io/_uploads/B1hNm8W7j.png" alt=""></p>
                    <p class="chakra-text css-39bkwz">The second screen functionality will be implemented in the next core project, so no need to implement anything for the “mint buildoor” button.</p></div></div></div></div>`,
                  }}
                />
              </div>
              <Quizs />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default CourseDetails;
