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
          <h2 className="text-black-100 text-[40px] font-bold w-max border-b-[6px] border-b-blue-100">
            Intermediate Track
          </h2>
          <div className="mt-9 flex gap-[53px]">
            <div className="basis-1/2">
              <Image
                alt="img-course1"
                src={img}
                className="rounded-lg w-full h-full object-cover"
              ></Image>
            </div>
            <div className="flex flex-col justify-between basis-1/2">
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
                <Button className="capitalize text-base font-medium">
                  start course
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-[80px] mb-[160px]">
            <h3 className="text-black-100 text-[22px] font-bold mb-4">
              6 Courses
            </h3>
            <div className="flex flex-col gap-4">
              {/* Item Course */}
              <div className="flex gap-4 items-center">
                <div className="w-[40px] h-[40px]">
                  <Image
                    alt="check-icon"
                    src={check}
                    className="w-full h-full object-cover flex-shrink-0"
                  ></Image>
                </div>
                <div className="bg-gray-200 cursor-pointer flex items-center justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4">
                  <span className="basis-[50%]">1. Blockchain Deep Dive</span>
                  <span className=" flex items-center gap-[10px] basis-[20%]">
                    <Image alt="clock-icon" src={clock}></Image>
                    77 Min
                  </span>
                  <span className=" flex items-center gap-[10px] pr-4 text-blue-100 basis-[30%] justify-end">
                    <Image alt="play-icon" src={play}></Image>
                    Learn Now
                  </span>
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
                <div className="bg-gray-200 cursor-pointer flex items-center justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4">
                  <span className="basis-[50%]">
                    2. Cryptocurrency Deep Dive
                  </span>
                  <span className=" flex items-center gap-[10px] basis-[20%]">
                    <Image alt="clock-icon" src={clock}></Image>0 Min
                  </span>
                  <span className=" flex items-center gap-[10px] pr-4 text-gray-400 basis-[30%] justify-end">
                    Coming Soon
                  </span>
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
                <div className="bg-gray-200 cursor-pointer flex items-center justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4">
                  <span className="basis-[50%]">3. DApps Deep Dive</span>
                  <span className=" flex items-center gap-[10px] basis-[20%]">
                    <Image alt="clock-icon" src={clock}></Image>0 Min
                  </span>
                  <span className=" flex items-center gap-[10px] pr-4 text-gray-400 basis-[30%] justify-end">
                    Coming Soon
                  </span>
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
                <div className="bg-gray-200 cursor-pointer flex items-center justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4">
                  <span className="basis-[50%]">3. DApps Deep Dive</span>
                  <span className=" flex items-center gap-[10px] basis-[20%]">
                    <Image alt="clock-icon" src={clock}></Image>0 Min
                  </span>
                  <span className=" flex items-center gap-[10px] pr-4 text-gray-400 basis-[30%] justify-end">
                    Coming Soon
                  </span>
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
                <div className="bg-gray-200 cursor-pointer flex items-center justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4">
                  <span className="basis-[50%]">3. DApps Deep Dive</span>
                  <span className=" flex items-center gap-[10px] basis-[20%]">
                    <Image alt="clock-icon" src={clock}></Image>0 Min
                  </span>
                  <span className=" flex items-center gap-[10px] pr-4 text-gray-400 basis-[30%] justify-end">
                    Coming Soon
                  </span>
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
                <div className="bg-gray-200 cursor-pointer flex items-center justify-between rounded-lg flex-1 min-h-[64px] py-5 px-4">
                  <span className="basis-[50%]">3. DApps Deep Dive</span>
                  <span className=" flex items-center gap-[10px] basis-[20%]">
                    <Image alt="clock-icon" src={clock}></Image>0 Min
                  </span>
                  <span className=" flex items-center gap-[10px] pr-4 text-gray-400 basis-[30%] justify-end">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseLists;
