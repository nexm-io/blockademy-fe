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

export default function ListRewards() {
  const rewardRx = useAppSelector(selectReward);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    dispatch(getListRewards());
  }, [dispatch]);

  if (!isAuthenticated || !token) {
    router.push("/");
    return;
  }

  return (
    <div className="container mt-24 sm:mt-32 min-h-[64vh]">
      <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
        <h3 className="text-black-100 font-bold md:text-4xl text-3xl">
          Accomplishments
        </h3>
      </div>
      <div className="flex flex-col gap-6">
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
              />
            ))
        )}
      </div>
    </div>
  );
}
