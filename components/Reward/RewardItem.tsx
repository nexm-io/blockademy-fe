"use client";
import Image from "next/image";
import React, { useState } from "react";
import RewardEnable from "@/public/icons/reward-enable.svg";
import Button from "../Common/Button";
import cn from "@/services/cn";
import { RewardDetails } from "@/redux/features/reward/type";
import { Loader3 } from "@styled-icons/remix-line";

const RewardItem = ({
  rewardDetailLoading,
  data: { assignment_status, title, is_claimed },
}: {
  rewardDetailLoading: boolean;
  data: RewardDetails;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    // TODO: handle get certificate -> show popup
  };

  return (
    <div className="px-6 py-4 flex items-start gap-[30px] w-full hover:bg-gray-900 rounded-lg transition-all duration-300 ease-linear border border-grey-100">
      <Image src={RewardEnable} height={125} width={126} alt="reward enable" />
      <div className="flex-1 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <div>
            <h5 className="text-2xl line-clamp-2">{title}</h5>
            <p className="text-[14px] capitalize text-green-400">
              {assignment_status.name}
            </p>
          </div>
          <p className="text-grey-700 text-xl">Grade Achieved: 80%</p>
        </div>
        <div className="flex justify-end">
          <Button
            disabled={rewardDetailLoading}
            className={cn(`min-w-[184px] !py-[10px]`, {
              "!bg-blue-600 !text-blue-700 hover:!bg-blue-800 hover:!text-white-100 duration-300 transition-all ease-in-out":
                is_claimed,
            })}
            onClick={handleClick}
          >
            <span className="flex items-center gap-2">
              {loading ? (
                <Loader3 className="animate-spin ml-2" width={25} height={25} />
              ) : (
                <span>Certificate</span>
              )}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RewardItem;
