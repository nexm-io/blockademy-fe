"use client";
import Image from "next/image";
import React from "react";
import img from "@/public/images/home/home-1.png";
import Button from "@/components/Common/Button";
import CoursePanel from "../CoursePanel";
import { useRouter } from "next/navigation";

const CourseLists = () => {
  const { push } = useRouter();
  const handleClick = () => {
    push("/courses/blockchain-details");
  };
  return (
    <section>
      <div className="mt-12 ">
        <div>
          <h2 className="text-black-100 md:text-[40px] ml-4 md:ml-0 text-[25px] font-bold w-max border-b-[6px] border-b-blue-100">
            Intermediate Track
          </h2>
          <div className="mt-9 flex gap-[53px] md:flex-row flex-col">
            <div className="basis-1/2 md:mx-0 mx-4">
              <Image
                alt="img-course1"
                src={img}
                className="rounded-lg w-full h-full object-cover "
              ></Image>
            </div>
            <div className="flex flex-col justify-between basis-1/2 mx-4 md:mx-0">
              <div className="flex flex-col gap-4 text-xl font-normal  pt-2">
                <p>Blockchain Beyond Basics</p>
                <p>📄 Level up your knowledge of blockchain & crypto</p>
                <p>️ Watch videos & pass quizzes</p>
                <p>⌛ 6 courses and 70+ modules</p>
                <p>
                  🎁 Receive a PDF or NFT certificate upon completing each
                  intermediate-level course
                </p>
              </div>
              <div>
                <Button
                  className="capitalize text-base font-medium md:mt-0 mt-4"
                  onClick={handleClick}
                >
                  start course
                </Button>
              </div>
            </div>
          </div>
          <div className="md:mt-[80px] md:mb-[160px] mb-16 mt-10">
            <h3 className="text-black-100 text-[22px] font-bold mb-4 mx-4 md:mx-0">
              6 Courses
            </h3>
            <div className="flex flex-col gap-4 px-4 md:px-0">
              {/* Item Course */}
              <CoursePanel status="watching" />
              <CoursePanel />
              <CoursePanel />
              <CoursePanel />
              <CoursePanel />
              <CoursePanel />

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseLists;
