"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useEffect } from "react";
import { getListRewards } from "@/redux/features/reward/action";
import { selectReward } from "@/redux/features/reward/reducer";
import RewardItem from "@/components/Reward/RewardItem";
import { RewardLoading } from "@/components/Reward/RewardLoading";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RewardEmpty from "@/components/Reward/RewardEmpty";

export default function ListRewards() {
  const rewardRx = useAppSelector(selectReward);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (!isAuthenticated || !token) {
      router.push("/");
    }
  }, [isAuthenticated, token]);

  useEffect(() => {
    dispatch(getListRewards());
  }, [dispatch]);

  return (
    <div className="container mt-24 sm:mt-32 min-h-[64vh]">
      <nav className="w-full rounded-md">
        <ol className="list-reset flex text-gray-300 items-center md:pl-0 flex-wrap">
          <li className="leading-[23px] hover:underline cursor-pointer">
            <Link href="/">
              <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                Home
              </span>
            </Link>
          </li>
          <li className="leading-[23px]">
            <span className="mx-3 md:text-[12px] text-[10px]">&gt;</span>
          </li>
          <li className="leading-[23px]">
            <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
              Accomplishments
            </span>
          </li>
        </ol>
      </nav>
      <div className="flex justify-between items-start flex-wrap gap-4 mb-6 mt-[32px]">
        <h3 className="text-black-100 font-bold md:text-4xl text-3xl">
          Accomplishments
        </h3>
      </div>
      <div className="flex flex-col gap-6">
        {rewardRx.listRewardLoading ? (
          <RewardLoading row={3} />
        ) : rewardRx.rewards.filter((z) => z.is_completed_assignment).length === 0 ? (
          <RewardEmpty />
        ) : (
          rewardRx.rewards
            .filter((z) => z.is_completed_assignment)
            .map((reward) => (
              <RewardItem key={reward.course_id} data={reward} />
            ))
        )}
      </div>
    </div>
  );
}
