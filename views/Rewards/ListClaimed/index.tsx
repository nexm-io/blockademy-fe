"use client";
import Button from "@/components/Common/Button";
import {
  claimInWallet,
  fetchRewardAvailable,
  fetchRewardClaimed,
} from "@/redux/features/user/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React, { useEffect, useState } from "react";
import empty from "@/public/icons/emptybox.svg";
import Image from "next/image";
import { SkeletionCard } from "@/components/Skeleton/SkeletionCard";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CourseBanner from "@/views/Courses/CourseBanner";
import { toast } from "react-toastify";
import defaultImg from "@/public/images/home/home-default.png";
import { PLACEHOLDER_BASE64 } from "@/utils/getLocalBase64";

export default function ListClaimed() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const listsClaimed = useAppSelector((state) => state.user.data);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const message = useAppSelector((state) => state.user.message);
  const router = useRouter();

  useEffect(() => {
    const getRewards = async () => {
      const res = await dispatch(fetchRewardClaimed());
    };
    getRewards();
  }, [dispatch, pathname, listsClaimed.length]);

  return (
    <>
      <CourseBanner />
      <div className="flex gap-[50px] md:mb-14 mb-5 md:pt-[370px] px-8 lg:pt-[350px] pt-[135px] items-start text-white-400 text-base font-normal leading-4 capitalize lg:px-0">
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
          className={`course-status ${
            pathname === "/my-rewards/claimed-rewards" ? "active" : ""
          }`}
        >
          Claimed rewards
        </Link>
      </div>
      {listsClaimed && !isLoading ? (
        <div className="h-full flex flex-col w-full">
          {listsClaimed?.length === 0 && listsClaimed && (
            <div className="flex items-center justify-center h-full w-full flex-col gap-9">
              <Image alt="empty-box" src={empty} />
              <p className="text-gray-100 text-base font-normal ">
                Not have rewards available.
              </p>
              <Button onClick={() => router.push("/courses/all")}>
                Start Learning
              </Button>
            </div>
          )}
          <div className="grid md:grid-cols-3 m-0 lg:grid-cols-4 md:gap-10 grid-cols-2 pl-4 gap-4">
            {!(listsClaimed?.length === 0) &&
              listsClaimed?.map((reward, index) => (
                <>
                  <div
                    key={index}
                    className="w-[220px] lg:h-[320px] h-[280px] flex flex-col flex-shrink-0 shadow-lg rounded-md cursor-pointer hover:shadow-3xl transition-all duration-300 ease-linear"
                  >
                    <div className="w-[220px] h-[220px] relative">
                      <Image
                        alt="card-img"
                        src={
                          reward.image.original ||
                          reward.image.thumbnail ||
                          defaultImg
                        }
                        width={352}
                        height={198}
                        className="w-full h-full object-fit rounded-md relative"
                        placeholder="blur"
                        blurDataURL={PLACEHOLDER_BASE64}
                      ></Image>
                    </div>
                    <div className=" px-4 py-2 flex justify-between flex-col h-full flex-1">
                      <div className="flex flex-col">
                        <h2 className="  text-blue-100 text-sm font-bold line-clamp-2">
                          {reward.title}
                        </h2>
                        <span className="truncate text-sm">{reward.name}</span>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 m-auto lg:grid-cols-4 md:gap-10 grid-cols-2 pl-4 gap-4">
          <SkeletionCard width="250px" height="300px" radius="16px" />
          <SkeletionCard width="250px" height="300px" radius="16px" />
          <SkeletionCard width="250px" height="300px" radius="16px" />
          <SkeletionCard width="250px" height="300px" radius="16px" />
        </div>
      )}
    </>
  );
}
