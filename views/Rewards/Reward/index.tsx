"use client";
import Button from "@/components/Common/Button";
import RewardItem from "@/components/Reward/RewardItem";
import { getRewardDetail } from "@/redux/features/reward/action";
import { selectReward } from "@/redux/features/reward/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useParams, useRouter } from "next/navigation";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const RewardView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const params = useParams();
  const courseId = params.id;
  const rewardRx = useAppSelector(selectReward);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    dispatch(getRewardDetail(courseId as string));
  }, []);

  if (!isAuthenticated || !token) {
    router.back();
    return;
  }

  return (
    <div className="container mt-24 sm:mt-32 min-h-[55vh]">
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
      <div className="flex justify-center items-center lg:mt-10">
        <div className="w-full lg:w-1/3">
          <RewardItem
            rewardDetailLoading={rewardRx.rewardDetailLoading}
            data={rewardRx.rewardDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default RewardView;
