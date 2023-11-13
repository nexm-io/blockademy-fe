"use client";
import Image from "next/image";
import React, { useState } from "react";
import RewardEnable from "@/public/icons/reward-enable.svg";
import RewardDisable from "@/public/icons/reward-disable.svg";
import Button from "../Common/Button";
import cn from "@/services/cn";
import { RewardDetails } from "@/redux/features/reward/type";
import { ASSIGNMENT_STATUS } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { Loader3 } from "@styled-icons/remix-line";

const RewardItem = ({
  rewardDetailLoading,
  data: { assignment_status, title, is_claimed, assigment_id },
}: {
  rewardDetailLoading: boolean;
  data: RewardDetails;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    if (assignment_status.slug === ASSIGNMENT_STATUS.PASSED) {
      if (!is_claimed) {
        console.log("call api claim");
      } else {
        console.log("get detail certificate");
      }
    } else {
      router.push(`/quiz/${assigment_id}`);
    }
  };

  return (
    <div className="p-3 flex items-start gap-[20px] w-full shadow-lg rounded">
      <Image
        src={
          assignment_status.slug === ASSIGNMENT_STATUS.PASSED
            ? RewardEnable
            : RewardDisable
        }
        height={89}
        width={106}
        alt="reward enable"
      />
      <div className="flex flex-col gap-3 flex-1">
        {rewardDetailLoading ? (
          <div className="flex flex-col gap-3">
            <div className="h-[60px] skeleton w-full"></div>
            <div className="h-[21px] skeleton w-full"></div>
          </div>
        ) : (
          <>
            <h5 className="text-[20px] font-bold line-clamp-2">{title}</h5>
            <p
              className={cn(`text-[14px] capitalize`, {
                "text-green-100":
                  assignment_status.slug === ASSIGNMENT_STATUS.PASSED,
                "text-[#F0C43A]":
                  assignment_status.slug === ASSIGNMENT_STATUS.NOT_COMPLETED,
                "text-[#D62121]":
                  assignment_status.slug === ASSIGNMENT_STATUS.FAILED,
              })}
            >
              {assignment_status.name}
            </p>
          </>
        )}
        <div className="flex justify-end mt-4">
          <Button
            disabled={rewardDetailLoading}
            className="!px-4 !py-[6px]"
            onClick={handleClick}
          >
            {assignment_status.slug === ASSIGNMENT_STATUS.PASSED
              ? !is_claimed
                ? "Get Certificate"
                : "View Detail"
              : "Quiz Result"}
            {loading && (
              <Loader3 className="animate-spin ml-2" width={25} height={25} />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RewardItem;
