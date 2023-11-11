"use client";
import Button from "@/components/Common/Button";
import RewardItem from "@/components/Reward/RewardItem";
import { useRouter } from "next/navigation";
import React from "react";

const RewardView = () => {
  const router = useRouter();
  return (
    <div className="container mt-24 sm:mt-32">
      <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
        <h1 className="text-black-100 font-bold md:text-4xl text-3xl">
          Reward
        </h1>
        <Button
          onClick={() => router.back()}
          className="!px-6 !py-2 w-full sm:w-auto"
        >
          Back To Courses
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="w-full lg:w-1/3">
          <RewardItem status="passed" />
        </div>
      </div>
    </div>
  )
}

export default RewardView;