import React from "react";
import empty from "@/public/icons/emptybox.svg";
import Image from "next/image";
import Button from "../Common/Button";

const CourseItem = () => {
  return (
    <div className="w-full flex items-center justify-center mt-[82px]">
      <div className="flex items-center justify-center flex-col gap-9">
        <Image alt="empty-box" src={empty} />
        <p className="text-gray-100 text-base font-normal ">
          You will find your finished courses here.
        </p>
        <Button>Start Learning</Button>
      </div>
    </div>
  );
};

export default CourseItem;
