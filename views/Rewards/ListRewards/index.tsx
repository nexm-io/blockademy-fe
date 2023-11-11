"use client";
import Button from "@/components/Common/Button";
import {
  claimInWallet,
  fetchRewardAvailable,
} from "@/redux/features/user/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import RewardItem from "@/components/Reward/RewardItem";

export default function ListRewards() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const listRewards = useAppSelector((state) => state.user.data);
  const router = useRouter();

  useEffect(() => {
    const getRewards = async () => {
      await dispatch(fetchRewardAvailable());
    };
    getRewards();
  }, [dispatch, pathname, listRewards.length]);

  return (
    <div className="container mt-24 sm:mt-32">
      <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
        <h1 className="text-black-100 font-bold md:text-4xl text-3xl">
          My Rewards
        </h1>
        <Button
          onClick={() => router.back()}
          className="!px-6 !py-2 w-full sm:w-auto"
        >
          Back To Courses
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        <RewardItem status="passed" />
        <RewardItem status="not-completed" />
        <RewardItem status="failed" />
      </div>
    </div>
  );
}
