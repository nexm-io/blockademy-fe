import Image from "next/image";
import React from "react";
import banner from "@/public/images/course/course-1.png";

const CourseBanner = () => {
  return (
    <>
      <Image
        alt="banner-course"
        src={banner}
        className="absolute left-0 w-full lg:h-[450px] md:h-[30%] h-[150px] max-h-[450px] select-none"
      />
      <h2 className="pl-6 text-white-100 md:text-[46px] text-base font-bold md:leading-[56px] w-[235px] md:w-[485px] relative translate-y-2/3 md:translate-y-[85%] banner-top">
        Free education
        <br /> Learn. Earn.
        <br /> Be a smart investor.
      </h2>
    </>
  );
};

export default CourseBanner;
