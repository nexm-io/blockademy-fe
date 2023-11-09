"use client";
import React from "react";
import { SkeletionCard } from "../Skeleton/SkeletionCard";

const CourseDetailsLoading = () => {
  return (
    <div className="my-[60px] flex flex-col gap-4">
      <div className="mt-6 flex flex-col gap-4">
        <SkeletionCard height="44px" width="352px" radius="16px" />
        <SkeletionCard
          height="36px"
          width="1152px"
          radius="16px"
          mobileCardFull
        />
      </div>
      <div className="mt-7 flex gap-[48px]">
        <SkeletionCard height="500px" width="753px" radius="16px" />
        <div className="flex flex-col gap-4">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 px-[23px] rounded-lg py-4 bg-gray-200"
            >
              <SkeletionCard key={index} height="20px" width="306px" />
              <SkeletionCard key={index} height="20px" width="306px" />
            </div>
          ))}
        </div>
      </div>
      <SkeletionCard height="36px" width="340px" radius="16px" />
      <SkeletionCard height="18px" width="753px" radius="16px" />
      <SkeletionCard height="18px" width="753px" radius="16px" />
      <SkeletionCard height="18px" width="753px" radius="16px" />
      <SkeletionCard height="18px" width="753px" radius="16px" />
    </div>
  );
};

export default CourseDetailsLoading;
