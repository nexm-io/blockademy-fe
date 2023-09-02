"use client";
import GiftHeader from "@/components/GiftHeader";
import Link from "next/link";
import gift from "@/public/icons/giftcourse.svg";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import CourseModule from "@/components/CourseModule";
import CoursePanel from "@/views/Courses/CoursePanel";
import NoSignal from "@/components/NoSignal";
import BreadCrumb from "@/components/BreadCrumb";
import { useState } from "react";
import Quiz from "@/components/Quiz";
import Button from "@/components/Common/Button";
import { useAppSelector } from "@/redux/hook";

export default function CoursesSlug({ params }: { params: { slug: string } }) {
  const [formState, setFormState] = useState<"video" | "quiz">("video");
  const data = useAppSelector((state) => state.courses.data);
  return (
    <div className="mt-[74px]">
      <GiftHeader />
      <div className="md:mt-[42px] mt-5 flex gap-3">
        <BreadCrumb />
      </div>
      <section className="md:mt-[56px] mt-8">
        <div>
          <h1 className="text-black-100 font-bold md:text-[37px] text-3xl mb-4 px-4 md:px-0">
            Course 1: Blockchain Deep Dive
          </h1>
          <div className="bg-blue-200 py-3 px-4 flex gap-4">
            <Image alt="gift-icon" src={gift}></Image>
            <span className="md:text-base text-[13px] font-normal text-black-100 ">
              Log into your Binance a ccount to track progress and claim your
              certificate. You may lose your learning progress without logging
              in.
            </span>
          </div>
        </div>
        <div className="mt-10 flex gap-12 md:flex-row flex-col">
          {/* Left */}
          <div className="md:w-[753px] w-full px-4 md:px-0">
            {/* Form State */}
            <div>
              {formState === "video" && (
                <>
                  <VideoPlayer />
                  <Button className="mt-4" onClick={() => setFormState("quiz")}>
                    Watch done
                  </Button>
                </>
              )}
              {formState === "quiz" && <Quiz />}

              <h2 className="font-bold md:text-[26px] text-xl text-black-100 md:mt-11 mt-7 md:mb-7 mb-5">
                Module: What&apos;s in a Block?
              </h2>
              <p className="text-black-100 md:text-lg text-base font-normal italic mb-9">
                In module 1.1, we&apos;ll focus on blocks, the building blocks
                that are chained together in an immutable way to form a
                blockchain. You&apos;ll learn the properties of blocks and how
                they facilitate transactions while maintaining the integrity of
                the blockchain.
              </p>
              <h3 className="text-black-100 font-bold md:text-[19px] text-base">
                Further Reading
              </h3>
              <div className="flex flex-col gap-6 mt-6 mb-2">
                <Link
                  href="#"
                  className="text-blue-100 underline font-normal md:text-xl text-base"
                >
                  What Is Blockchain Technology? The Ultimate Guide
                </Link>
                <Link
                  className="text-blue-100 underline font-normal md:text-xl text-base"
                  href="#"
                >
                  What Is Hashing?
                </Link>
              </div>
              <h3 className="text-black-100 md:text-[19px] text-base font-bold italic">
                How to claim my certificate for this course? Click{" "}
                <Link className="text-blue-100 underline" href="#">
                  here
                </Link>{" "}
                to learn more.
              </h3>
            </div>
            {/*  */}
          </div>
          {/* Right */}
          <div className="flex flex-col gap-4 px-4 md:px-0">
            {/* Course Video Item */}
            <CourseModule status="watching" />
            <CourseModule />
            <CourseModule />
            <CourseModule />
            <CourseModule />
            <CourseModule />
            <CourseModule />
            <CourseModule />
            <CourseModule />
            <CourseModule />
            <CourseModule />

            {/*  */}
          </div>
        </div>
        {/* Other */}
        <div className="flex flex-col gap-4 md:mt-[100px] mt-10 max-w-[753px] w-full px-4 md:px-0">
          <h2 className="text-black-100 md:text-[22px] text-xl font-bold">
            Other Courses
          </h2>
          <CoursePanel />
          <CoursePanel />
          <CoursePanel />
          <CoursePanel />
          <CoursePanel />
        </div>
        <NoSignal />
      </section>
    </div>
  );
}
