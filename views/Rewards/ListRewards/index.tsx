"use client";
import Button from "@/components/Common/Button";
import { fetchDetail, fetchReward } from "@/redux/features/user/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useEffect, useState } from "react";
import empty from "@/public/icons/emptybox.svg";
import Image from "next/image";
import banner from "@/public/images/course/course-1.png";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ListRewards() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const listRewards = useAppSelector((state) => state.user.data);
  const [claimed, setClaimed] = useState<Array<any>>()
  useEffect(() => {
    const getRewards = async () => {
      const res = await dispatch(fetchReward());
    };
    getRewards();
    const filteredData =
      pathname === "/my-rewards"
        ? listRewards.filter((item) => item.is_claimed === 0)
        : location.pathname === "/my-rewards/claimed-rewards"
        ? listRewards.filter((item) => item.is_claimed === 1)
        : [];
        setClaimed(filteredData)
  }, [dispatch]);

  const handleClaimReward = (id: number) => {
    dispatch(fetchDetail(id));
  };

  console.log(pathname);

  return (
    <>
      <Image
        alt="banner-course"
        src={banner}
        className="absolute left-0 w-full md:h-auto h-[150px] max-h-[450px]"
      ></Image>
      <div className="flex gap-[50px] md:mb-14 mb-5 md:pt-[480px] pt-[200px] items-start text-white-400 text-base font-normal leading-4 capitalize px-4 md:px-0">
        <Link
          href="/my-rewards"
          className={`course-status ${
            pathname === "/my-rewards" ? "active" : ""
          }`}
        >
          Available rewards
        </Link>
        <Link
          href="/my-rewards/claimed-rewards"
          className={`claimed-rewards ${
            pathname === "/my-rewards/claimed-rewards" ? "active" : ""
          }`}
        >
          Claimed rewards
        </Link>
      </div>
      {listRewards ? (
        <div className="h-full flex flex-col w-full">
          <div className="grid md:grid-cols-4 md:gap-10 grid-cols-1 pl-4 gap-4">
            {claimed?.length == 0 ? (
              <div className="flex items-center justify-center h-full w-full flex-col gap-9">
                <Image alt="empty-box" src={empty} />
                <p className="text-gray-100 text-base font-normal ">
                  Not have rewards available.
                </p>
                <Button>Start Learning</Button>
              </div>
            ) : (
              claimed?.map((reward, index) => (
                <>
                  <div
                      key={index}
                      onClick={() => handleClaimReward(reward.id)}
                      className="w-[250px] lg:h-[300px] h-[280px] flex flex-col flex-shrink-0 shadow-lg rounded-2xl cursor-pointer hover:shadow-3xl transition-all duration-300 ease-linear"
                    >
                      <div className="w-full h-[198px] relative">
                        <Image
                          alt="card-img"
                          src={reward.image.original}
                          width={352}
                          height={198}
                          className="w-full h-full object-fit rounded-2xl relative"
                        ></Image>
                      </div>
                      <div className=" p-4 flex justify-around flex-col h-full flex-1">
                        <h2 className="  text-black-100 text-lg font-bold line-clamp-2">
                          {reward.title}
                        </h2>
                        <span className="truncate text-sm">{reward.name}</span>
                      </div>
                    </div>
                </>
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-10 grid-cols-1 pl-4 gap-4">
          <SkeletionCard width="250px" height="300px" radius="16px" />
          <SkeletionCard width="250px" height="300px" radius="16px" />
          <SkeletionCard width="250px" height="300px" radius="16px" />
          <SkeletionCard width="250px" height="300px" radius="16px" />
        </div>
      )}
    </>
  );
}
