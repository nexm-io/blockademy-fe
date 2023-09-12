"use client";
import Button from "@/components/Common/Button";
import { fetchReward } from "@/redux/features/user/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useEffect } from "react";
import empty from "@/public/icons/emptybox.svg";
import Image from "next/image";
import CardItem from "@/components/CardItem";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
export default function ListRewards() {
  const dispatch = useAppDispatch();
  const listRewards = useAppSelector((state) => state.user.data);
  useEffect(() => {
    const getRewards = async () => {
      const res = await dispatch(fetchReward());
    };
    getRewards();
  }, [dispatch]);
  console.log(listRewards);

  return (
    <>
      <h1 className="text-[40px] font-semibold mb-6">List Rewards</h1>
      {listRewards ? <div className="h-screen flex flex-col w-full">
        {listRewards.length === 0 ? (
          <div className="flex items-center justify-center h-full w-full flex-col gap-9">
            <Image alt="empty-box" src={empty} />
            <p className="text-gray-100 text-base font-normal ">
              You don't have any rewards yet You will find your finished courses
              here.
            </p>
            <Button>Start Learning</Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 md:gap-10 grid-cols-1 pl-4 gap-4">
            {listRewards.map((reward, index) => (
              <>
                <div
                  key={index}
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
            ))}
          </div>
        )}
      </div> :  <div className="grid md:grid-cols-4 md:gap-10 grid-cols-1 pl-4 gap-4">
      <SkeletionCard width="250px" height="300px" radius="16px" />
      <SkeletionCard width="250px" height="300px" radius="16px" />
      <SkeletionCard width="250px" height="300px" radius="16px" />
      <SkeletionCard width="250px" height="300px" radius="16px" />
        </div>}
    </>
  );
}
