import React from "react";
import nottoknow from "@/public/icons/nottoknow.svg";
import Image from "next/image";
import Button from "@/components/Common/Button";

const NotToKnow = () => {
  return (
    <section className="mt-[76px]">
      <div className="flex md:flex-row flex-col gap-8 ">
        <div className="basis-[40%]">
          <Image
            alt="not-to-know"
            src={nottoknow}
            className="w-[200px] mx-auto"
          ></Image>
        </div>
        <div className="flex flex-col text-black-100 basis-[50%]">
          <h2 className="font-bold md:text-[37px] text-2xl leading-[40px] text-center md:text-left">
            You don&apos;t understand the content you just watched?
          </h2>
          <p className="font-normal leading-8 md:text-2xl text-sm mt-2 text-center md:text-left">
            Don&apos;t worry. Our simple beginner&apos;s guide will help you get
            the hang of it.
          </p>
          <div>
            <Button rounded className="mt-[29px]">
              Join here
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotToKnow;
