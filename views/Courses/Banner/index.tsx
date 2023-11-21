import Image from "next/image";
import React from "react";
import banner from "@/public/images/course/course-1.png";

const Banner = () => {
  return (
    <div className="relative">
      <Image alt="banner-course" src={banner} className="w-full min-h-[200px] sm:min-h-[300px] object-cover" />
      <div className="before:[''] absolute top-1/2 -translate-y-1/2 left-0 right-0 ">
        <h2 className="relative before:absolute before:-top-4 sm:before:-top-7 before:inline-block before:h-[6px] before:w-24 before:bg-[#4c94ff]   text-xl sm:text-3xl md:text-5xl font-bold text-white-100 md:leading-[56px] container">
          Free education
          <br /> Learn. Grow. Succeed
          <br /> Be a strong builder.
        </h2>
      </div>
    </div>
  );
};

export default Banner;
