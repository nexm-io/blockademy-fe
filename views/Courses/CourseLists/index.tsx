import Image from "next/image";
import React from "react";
import img from "@/public/images/home/home-1.png";
import Button from "@/components/Common/Button";
import check from "@/public/icons/check.svg";
import clock from "@/public/icons/clock.svg";
import play from "@/public/icons/play.svg";

const CourseLists = () => {
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
                <Button className="capitalize text-base font-medium md:mt-0 mt-4">
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
              <div className="flex gap-4 items-center">
                <div className="w-[40px] h-[40px]">
                  <Image
                    alt="check-icon"
                    src={check}
                    className="w-full h-full object-cover flex-shrink-0"
                  ></Image>
                </div>
                <div className="bg-gray-200 cursor-pointer flex md:items-center items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5">
                  <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
                    <span className="basis-[70%] line-clamp-1">
                      1. Blockchain Deep Dive
                    </span>
                    <div className=" flex items-center gap-[10px] basis-[20%] line-clamp-1">
                      <Image alt="clock-icon" src={clock}></Image>
                      <span className="line-clamp-1">77 Min</span>
                    </div>
                  </div>
                  <div className=" flex items-center gap-[10px] pr-4 text-blue-100 basis-[30%] justify-end">
                    <Image alt="play-icon" src={play}></Image>
                    <span className="line-clamp-1 hidden md:block">
                      Learn Now
                    </span>
                  </div>
                </div>
              </div>

              {/* Item Course */}
              <div className="flex gap-4 items-center">
                <div className="w-[40px] h-[40px]">
                  <Image
                    alt="check-icon"
                    src={check}
                    className="w-full h-full object-cover flex-shrink-0"
                  ></Image>
                </div>
                <div className="bg-gray-200 cursor-pointer flex md:items-center items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5">
                  <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
                    <span className="basis-[70%]  line-clamp-1">
                      2. Blockchain Deep Dive
                    </span>
                    <div className="flex items-center gap-[10px] basis-[20%]">
                      <Image alt="clock-icon" src={clock}></Image>
                      <span className="line-clamp-1">0 Min</span>
                    </div>
                  </div>
                  <div className=" flex items-center gap-[10px] pr-4 text-gray-400 basis-[30%] justify-end">
                    <span className="line-clamp-1">Coming Soon</span>
                  </div>
                </div>
              </div>

              {/* Item Course */}
              <div className="flex gap-4 items-center">
                <div className="w-[40px] h-[40px]">
                  <Image
                    alt="check-icon"
                    src={check}
                    className="w-full h-full object-cover flex-shrink-0"
                  ></Image>
                </div>
                <div className="bg-gray-200 cursor-pointer flex md:items-center items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5">
                  <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
                    <span className="basis-[70%]  line-clamp-1">
                      2. Blockchain Deep Dive
                    </span>
                    <div className="flex items-center gap-[10px] basis-[20%]">
                      <Image alt="clock-icon" src={clock}></Image>
                      <span className="line-clamp-1">0 Min</span>
                    </div>
                  </div>
                  <div className=" flex items-center gap-[10px] pr-4 text-gray-400 basis-[30%] justify-end">
                    <span className="line-clamp-1">Coming Soon</span>
                  </div>
                </div>
              </div>
              {/* Item Course */}
              <div className="flex gap-4 items-center">
                <div className="w-[40px] h-[40px]">
                  <Image
                    alt="check-icon"
                    src={check}
                    className="w-full h-full object-cover flex-shrink-0"
                  ></Image>
                </div>
                <div className="bg-gray-200 cursor-pointer flex md:items-center items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5">
                  <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
                    <span className="basis-[70%]  line-clamp-1">
                      2. Blockchain Deep Dive
                    </span>
                    <div className="flex items-center gap-[10px] basis-[20%]">
                      <Image alt="clock-icon" src={clock}></Image>
                      <span className="line-clamp-1">0 Min</span>
                    </div>
                  </div>
                  <div className=" flex items-center gap-[10px] pr-4 text-gray-400 basis-[30%] justify-end">
                    <span className="line-clamp-1">Coming Soon</span>
                  </div>
                </div>
              </div>

              {/* Item Course */}
              <div className="flex gap-4 items-center">
                <div className="w-[40px] h-[40px]">
                  <Image
                    alt="check-icon"
                    src={check}
                    className="w-full h-full object-cover flex-shrink-0"
                  ></Image>
                </div>
                <div className="bg-gray-200 cursor-pointer flex md:items-center items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5">
                  <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
                    <span className="basis-[70%]  line-clamp-1">
                      2. Blockchain Deep Dive
                    </span>
                    <div className="flex items-center gap-[10px] basis-[20%]">
                      <Image alt="clock-icon" src={clock}></Image>
                      <span className="line-clamp-1">0 Min</span>
                    </div>
                  </div>
                  <div className=" flex items-center gap-[10px] pr-4 text-gray-400 basis-[30%] justify-end">
                    <span className="line-clamp-1">Coming Soon</span>
                  </div>
                </div>
              </div>

              {/* Item Course */}
              <div className="flex gap-4 items-center">
                <div className="w-[40px] h-[40px]">
                  <Image
                    alt="check-icon"
                    src={check}
                    className="w-full h-full object-cover flex-shrink-0"
                  ></Image>
                </div>
                <div className="bg-gray-200 cursor-pointer flex md:items-center items-start justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4 gap-5">
                  <div className="flex md:flex-row flex-col gap-3 md:gap-0 flex-1">
                    <span className="basis-[70%]  line-clamp-1">
                      2. Blockchain Deep Dive
                    </span>
                    <div className="flex items-center gap-[10px] basis-[20%]">
                      <Image alt="clock-icon" src={clock}></Image>
                      <span className="line-clamp-1">0 Min</span>
                    </div>
                  </div>
                  <div className=" flex items-center gap-[10px] pr-4 text-gray-400 basis-[30%] justify-end">
                    <span className="line-clamp-1">Coming Soon</span>
                  </div>
                </div>
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseLists;
