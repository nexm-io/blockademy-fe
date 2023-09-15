import React from "react";
import { SkeletionCard } from "./SkeletionCard";

export default function SkeletonCourse() {
  return (
    <div className="mt-[50px]">
      <SkeletionCard
        width="400px"
        height="52px"
        radius="16px"
        className="mb-9"
      />
      <div className="flex gap-[50px]">
        <SkeletionCard width="590px" height="330px" radius="16px" />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <SkeletionCard width="300px" height="30px" radius="16px" />
            <SkeletionCard width="400px" height="30px" radius="16px" />
            <SkeletionCard width="320px" height="30px" radius="16px" />
            <SkeletionCard width="420px" height="30px" radius="16px" />
            <SkeletionCard width="220px" height="30px" radius="16px" />
          </div>
          <SkeletionCard width="180px" height="52px" radius="16px" />
        </div>
      </div>
      <SkeletionCard
        width="120px"
        height="32px"
        radius="16px"
        className="mt-[80px]"
      />
      <div className="flex flex-col">
        {Array.from({ length: 4 }, (_, index) => (
          <>
            <div className="flex gap-3 items-center mt-4">
              <SkeletionCard width="38px" height="38px" radius="999px" />
              <div className="bg-gray-200 w-[1096px] h-[64px] flex justify-between items-center px-4">
                <SkeletionCard width="280px" height="34px" radius="8px" />
                <SkeletionCard width="140px" height="34px" radius="8px" />
                <SkeletionCard width="180px" height="34px" radius="8px" />
              </div>
            </div>
          </>
        ))}
        <div className="flex gap-3 items-center mt-4">
          <SkeletionCard width="48px" height="48px" radius="999px" />
          <div className="bg-gray-200 w-[1096px] h-[64px] flex justify-between items-center pr-12 pl-4">
            <SkeletionCard width="280px" height="34px" radius="8px" />
            <SkeletionCard width="180px" height="48px" radius="8px" />
          </div>
        </div>
      </div>
    </div>
  );
}
