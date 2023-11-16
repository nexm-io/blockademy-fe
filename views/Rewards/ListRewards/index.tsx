"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useEffect } from "react";
import { getListRewards } from "@/redux/features/reward/action";
import { selectReward } from "@/redux/features/reward/reducer";
import RewardItem from "@/components/Reward/RewardItem";
import { RewardLoading } from "@/components/Reward/RewardLoading";

export default function ListRewards() {
  const rewardRx = useAppSelector(selectReward);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListRewards());
  }, [dispatch]);

  return (
    <div className="container mt-24 sm:mt-32 min-h-[64vh]">
      <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
        <h1 className="text-black-100 font-bold md:text-4xl text-3xl">
          Accomplishments
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        {rewardRx.listRewardLoading ? (
          <RewardLoading row={3} />
        ) : (
          rewardRx.rewards
            .filter((z) => z.is_completed_assignment)
            .map((reward) => (
              <RewardItem
                key={reward.course_id}
                data={reward}
                rewardDetailLoading={rewardRx.listRewardLoading}
                handleViewCertificate={() => {}}
              />
            ))
        )}
      </div>
    </div>
  );
}
