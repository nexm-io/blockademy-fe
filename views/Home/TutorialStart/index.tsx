"use client";
import Button from "@/components/Common/Button";
import Image from "next/image";
import React from "react";
import img1 from "@/public/images/home/home-2.png";
import img2 from "@/public/images/home/home-3.png";
import { useRouter } from "next/navigation";

const TutorialStart = () => {
  const { push } = useRouter();

  return (
    <section className="md:mt-[106px] mt-11">
      <div className="flex lg:flex-row flex-col gap-4 mx-4 lg:mx-0">
        {/* Slide 1 */}
        <div className="w-full bg-blue-500 flex md:flex-row flex-col items-center justify-center gap-9 rounded-2xl h-full py-4 md:py-0 md:h-[429px] pl-[33px] pr-[40px]">
          <Image alt="banner-3" src={img1} width={200}></Image>
          <div className="text-black-100">
            <h2 className="font-bold leading-[40px] text-[30px] mb-[21px]">
              Lost in all the crypto slang?
            </h2>
            <p className="font-normal text-base mb-[47px]">
              Take a closer look at our blockchain & crypto glossary.
            </p>
            <Button
              rounded
              onClick={() => push("/courses")}
              className="!text-black-100 !bg-white-100 hover:!bg-black-100 hover:!text-white-100"
            >
              Join here
            </Button>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="w-full bg-black-200 flex md:flex-row flex-col items-center justify-center gap-9 rounded-2xl h-full py-4 md:py-0 md:h-[429px] pl-[33px] pr-[40px]">
          <Image alt="banner-3" src={img2} className="self-end"></Image>
          <div className="text-white-100">
            <h2 className="font-bold leading-[40px] text-[30px] mb-[21px]">
              Up for more learning materials?
            </h2>
            <p className="font-normal text-base mb-[47px]">
              Watch Academy AMA, interviews, and online courses in Binance Live
            </p>
            <Button
              rounded
              className="!text-black-100 !bg-white-100 hover:!bg-black-100 hover:!text-white-100"
              onClick={() => push("/courses")}
            >
              Join here
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialStart;
