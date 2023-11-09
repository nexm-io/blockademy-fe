"use client";
import Button from '@/components/Common/Button';
import { Medal } from '@/components/Icon';
import cn from '@/services/cn';
import { Collapse } from "@/components/Antd";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { DesktopEmpty, DesktopLoading, MobileEmpty, MobileLoading } from '@/components/Leaderboard/LeaderboardLoading';

const LeaderboardView = () => {
  const router = useRouter();
  return (
    <div className="mt-24 sm:mt-32">
      <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
        <div>
          <h1 className="text-black-100 font-bold md:text-4xl text-3xl">
            Leaderboard
          </h1>
          <p className="mt-2">Top 10 users in lorem ipsum dolor sit amet consectetur</p>
        </div>
        <Button onClick={() => router.back()} className="!px-6 !py-2 w-full sm:w-auto">
          Back To Courses
        </Button>
      </div>

      <div className="block lg:hidden">
        {/* <MobileLoading /> */}
        {/* <MobileEmpty /> */}
        <>
          <Collapse
            accordion
            className="leaderboard mb-1 rounded-none bg-white-700"
            defaultActiveKey={""}
            items={[
              {
                children: (
                  <div className="text-light-100 text-base mt-1">
                    <ul className="flex flex-col gap-1">
                      <li className="flex items-center justify-between">
                        <p className="w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                          Point
                        </p>
                        <p className="w-full flex justify-end items-center px-3 min-h-[46px]">
                          54
                        </p>
                      </li>
                      <li className="flex items-center justify-between">
                        <p className="w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                          Result
                        </p>
                        <div className="w-full flex justify-end items-center px-3 min-h-[46px]">
                          64%
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className=" w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                          <div className="relative inline-block">
                            Entered on
                          </div>
                        </div>
                        <p
                          className={`w-full flex justify-end items-center px-3 min-h-[46px]`}
                        >
                          Apr 26, 2023   6:05
                        </p>
                      </li>
                      <li className="flex items-center justify-between">
                        <p className="w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                          Completed Time
                        </p>
                        <div className="w-full flex justify-end items-center px-3 min-h-[46px]">
                          12m55s
                        </div>
                      </li>
                    </ul>
                  </div>
                ),
                label: (
                  <div
                    className={cn(
                      `flex items-center font-normal !text-primary-100 gap-2`
                    )}
                  >
                    <p className="flex items-center gap-2">
                      <Medal className="text-[#FBD101]" />
                      1
                    </p>
                    <div className="w-16 flex justify-start items-center flex-1 line-clamp-1">
                      Sarah University
                    </div>
                  </div>
                ),
              },
            ]}
          />
          <Collapse
            accordion
            className="leaderboard mb-1 rounded-none bg-[#E1FAFF]"
            defaultActiveKey={""}
            items={[
              {
                children: (
                  <div className="text-light-100 text-base mt-1">
                    <ul className="flex flex-col gap-1">
                      <li className="flex items-center justify-between">
                        <p className="w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                          Point
                        </p>
                        <p className="w-full flex justify-end items-center px-3 min-h-[46px] font-bold text-[#1F5AB3]">
                          54
                        </p>
                      </li>
                      <li className="flex items-center justify-between">
                        <p className="w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                          Result
                        </p>
                        <div className="w-full flex justify-end items-center px-3 min-h-[46px] font-bold text-[#1F5AB3]">
                          64%
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className=" w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                          <div className="relative inline-block">
                            Entered on
                          </div>
                        </div>
                        <p
                          className={`w-full flex justify-end items-center px-3 min-h-[46px] font-bold text-[#1F5AB3]`}
                        >
                          Apr 26, 2023   6:05
                        </p>
                      </li>
                      <li className="flex items-center justify-between">
                        <p className="w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                          Completed Time
                        </p>
                        <div className="w-full flex justify-end items-center px-3 min-h-[46px] font-bold text-[#1F5AB3]">
                          12m55s
                        </div>
                      </li>
                    </ul>
                  </div>
                ),
                label: (
                  <div
                    className={cn(
                      `flex items-center !text-primary-100 gap-2 font-bold text-[#1F5AB3]`
                    )}
                  >
                    <p className="flex items-center gap-2">
                      <Medal className="text-[#BFC3C6]" />
                      2
                    </p>
                    <div className="flex items-center justify-between pr-4">
                      Sarah University (You)
                    </div>
                  </div>
                ),
              },
            ]}
          />
          <Collapse
            accordion
            className="leaderboard mb-1 rounded-none"
            defaultActiveKey={""}
            items={[
              {
                children: (
                  <div className="text-light-100 text-base mt-1">
                    <ul className="flex flex-col gap-1">
                      <li className="flex items-center justify-between">
                        <p className="w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                          Point
                        </p>
                        <p className="w-full flex justify-end items-center px-3 min-h-[46px]">
                          54
                        </p>
                      </li>
                      <li className="flex items-center justify-between">
                        <p className="w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                          Result
                        </p>
                        <div className="w-full flex justify-end items-center px-3 min-h-[46px]">
                          64%
                        </div>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className=" w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                          <div className="relative inline-block">
                            Entered on
                          </div>
                        </div>
                        <p
                          className={`w-full flex justify-end items-center px-3 min-h-[46px]`}
                        >
                          Apr 26, 2023   6:05
                        </p>
                      </li>
                      <li className="flex items-center justify-between">
                        <p className="w-full flex justify-start items-center px-3 min-h-[46px] text-light-400">
                          Completed Time
                        </p>
                        <div className="w-full flex justify-end items-center px-3 min-h-[46px]">
                          12m55s
                        </div>
                      </li>
                    </ul>
                  </div>
                ),
                label: (
                  <div
                    className={cn(
                      `flex items-center font-normal !text-primary-100 gap-2`
                    )}
                  >
                    <p className="flex items-center gap-2">
                      <Medal className="text-[#FFA731]" />
                      3
                    </p>
                    <div className="flex items-center justify-between pr-4">
                      Sarah University
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </>
      </div>

      <div className="hidden lg:block overflow-auto">
        <table className="border-collapse table-fixed min-w-[800px] w-full">
          <thead>
            <tr className="font-medium text-light-400 h-[50px]">
              <th className="w-[70px]"></th>
              <th className="text-center w-[100px]">
                Rank
              </th>
              <th className="text-left min-w-[350px] xl:w-[400px]">
                User
              </th>
              <th className="text-center w-[80px]">
                Point
              </th>
              <th className="text-center w-[150px]">
                Result
              </th>
              <th className="text-center w-[200px]">
                Entered on
              </th>
              <th className="text-center w-[200px]">
                Completed Time
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <DesktopLoading /> */}
            {/* <DesktopEmpty /> */}
            <>
              <tr
                className="group h-12 text-light-100 text-base"
              >
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-end bg-white-700 group-hover:bg-opacity-50 gap-2 transition-all`,
                    )}
                  >
                    <Medal className="text-[#FBD101]" />
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      "py-1 h-12 justify-center bg-white-700 group-hover:bg-opacity-50 transition-all flex items-center"
                    )}
                  >
                    1
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center gap-5 bg-white-700 group-hover:bg-opacity-50 transition-all line-clamp-1`
                    )}
                  >
                    <Image src="/images/course/default-avatar.png" width={34} height={34} alt="default-image" />
                    Sarah University
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    54
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    64%
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    Apr 26, 2023   6:05
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    12m55s
                  </div>
                </td>
              </tr>
              <tr
                className="group h-12 text-light-100 text-base"
              >
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-end bg-white-700 group-hover:bg-opacity-50 gap-2 transition-all`,
                    )}
                  >
                    <Medal className="text-[#BFC3C6]" />
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      "py-1 h-12 justify-center bg-white-700 group-hover:bg-opacity-50 transition-all flex items-center"
                    )}
                  >
                    2
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center gap-5 bg-white-700 group-hover:bg-opacity-50 transition-all line-clamp-1`
                    )}
                  >
                    <Image src="/images/course/default-avatar.png" width={34} height={34} alt="default-image" />
                    Sarah University
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    54
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    64%
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    Apr 26, 2023   6:05
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    12m55s
                  </div>
                </td>
              </tr>
              <tr
                className="group h-12 text-base"
              >
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-end bg-white-700 group-hover:bg-opacity-50 gap-2 transition-all`,
                    )}
                  >
                    <Medal className="text-[#FFA731]" />
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      "py-1 h-12 justify-center bg-white-700 group-hover:bg-opacity-50 transition-all flex items-center"
                    )}
                  >
                    3
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center gap-5 bg-white-700 group-hover:bg-opacity-50 transition-all line-clamp-1`
                    )}
                  >
                    <Image src="/images/course/default-avatar.png" width={34} height={34} alt="default-image" />
                    Sarah University
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    54
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    64%
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    Apr 26, 2023   6:05
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    12m55s
                  </div>
                </td>
              </tr>
              <tr
                className="group h-12 text-base"
              >
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-end bg-white-700 group-hover:bg-opacity-50 gap-2 transition-all`,
                    )}
                  >
                    {/* <Medal className="text-[#FFA731]" /> */}
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      "py-1 h-12 justify-center bg-white-700 group-hover:bg-opacity-50 transition-all flex items-center"
                    )}
                  >
                    4
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center gap-5 bg-white-700 group-hover:bg-opacity-50 transition-all line-clamp-1`
                    )}
                  >
                    <Image src="/images/course/default-avatar.png" width={34} height={34} alt="default-image" />
                    Sarah University
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    54
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    64%
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    Apr 26, 2023   6:05
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    12m55s
                  </div>
                </td>
              </tr>
              <tr
                className="group h-12 text-base"
              >
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-end bg-white-700 group-hover:bg-opacity-50 gap-2 transition-all`,
                    )}
                  >
                    {/* <Medal className="text-[#FFA731]" /> */}
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      "py-1 h-12 justify-center bg-white-700 group-hover:bg-opacity-50 transition-all flex items-center"
                    )}
                  >
                    5
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center gap-5 bg-white-700 group-hover:bg-opacity-50 transition-all line-clamp-1`
                    )}
                  >
                    <Image src="/images/course/default-avatar.png" width={34} height={34} alt="default-image" />
                    Sarah University
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    54
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    64%
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    Apr 26, 2023   6:05
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    12m55s
                  </div>
                </td>
              </tr>
              <tr
                className="group h-12 text-base"
              >
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-end bg-white-700 group-hover:bg-opacity-50 gap-2 transition-all`,
                    )}
                  >
                    {/* <Medal className="text-[#FFA731]" /> */}
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      "py-1 h-12 justify-center bg-white-700 group-hover:bg-opacity-50 transition-all flex items-center"
                    )}
                  >
                    6
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center gap-5 bg-white-700 group-hover:bg-opacity-50 transition-all line-clamp-1`
                    )}
                  >
                    <Image src="/images/course/default-avatar.png" width={34} height={34} alt="default-image" />
                    Sarah University
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    54
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    64%
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    Apr 26, 2023   6:05
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    12m55s
                  </div>
                </td>
              </tr>
              <tr
                className="group h-12 text-base"
              >
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-end bg-white-700 group-hover:bg-opacity-50 gap-2 transition-all`,
                    )}
                  >
                    {/* <Medal className="text-[#FFA731]" /> */}
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      "py-1 h-12 justify-center bg-white-700 group-hover:bg-opacity-50 transition-all flex items-center"
                    )}
                  >
                    7
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center gap-5 bg-white-700 group-hover:bg-opacity-50 transition-all line-clamp-1`
                    )}
                  >
                    <Image src="/images/course/default-avatar.png" width={34} height={34} alt="default-image" />
                    Sarah University
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    54
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    64%
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    Apr 26, 2023   6:05
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    12m55s
                  </div>
                </td>
              </tr>
              <tr
                className="group h-12 text-base"
              >
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-end bg-white-700 group-hover:bg-opacity-50 gap-2 transition-all`,
                    )}
                  >
                    {/* <Medal className="text-[#FFA731]" /> */}
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      "py-1 h-12 justify-center bg-white-700 group-hover:bg-opacity-50 transition-all flex items-center"
                    )}
                  >
                    8
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center gap-5 bg-white-700 group-hover:bg-opacity-50 transition-all line-clamp-1`
                    )}
                  >
                    <Image src="/images/course/default-avatar.png" width={34} height={34} alt="default-image" />
                    Sarah University
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    54
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    64%
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    Apr 26, 2023   6:05
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    12m55s
                  </div>
                </td>
              </tr>
              <tr
                className="group h-12 text-base"
              >
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-end bg-white-700 group-hover:bg-opacity-50 gap-2 transition-all`,
                    )}
                  >
                    {/* <Medal className="text-[#FFA731]" /> */}
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      "py-1 h-12 justify-center bg-white-700 group-hover:bg-opacity-50 transition-all flex items-center"
                    )}
                  >
                    9
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center gap-5 bg-white-700 group-hover:bg-opacity-50 transition-all line-clamp-1`
                    )}
                  >
                    <Image src="/images/course/default-avatar.png" width={34} height={34} alt="default-image" />
                    Sarah University
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    54
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    64%
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    Apr 26, 2023   6:05
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    12m55s
                  </div>
                </td>
              </tr>
              <tr
                className="group h-12 text-base"
              >
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-end bg-white-700 group-hover:bg-opacity-50 gap-2 transition-all`,
                    )}
                  >
                    {/* <Medal className="text-[#FFA731]" /> */}
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      "py-1 h-12 justify-center bg-white-700 group-hover:bg-opacity-50 transition-all flex items-center"
                    )}
                  >
                    10
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center gap-5 bg-white-700 group-hover:bg-opacity-50 transition-all line-clamp-1`
                    )}
                  >
                    <Image src="/images/course/default-avatar.png" width={34} height={34} alt="default-image" />
                    Sarah University
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    54
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    64%
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    Apr 26, 2023   6:05
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-white-700 group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    12m55s
                  </div>
                </td>
              </tr>
              <tr
                className="group h-12 text-base"
              >
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-end bg-[#E1FAFF] text-[#1F5AB3] font-bold group-hover:bg-opacity-50 gap-2 transition-all`,
                    )}
                  >
                    {/* <Medal className="text-[#FFA731]" /> */}
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      "py-1 h-12 justify-center bg-[#E1FAFF] text-[#1F5AB3] font-bold group-hover:bg-opacity-50 transition-all flex items-center"
                    )}
                  >
                    11
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center gap-5 bg-[#E1FAFF] text-[#1F5AB3] font-bold group-hover:bg-opacity-50 transition-all line-clamp-1`
                    )}
                  >
                    <Image src="/images/course/default-avatar.png" width={34} height={34} alt="default-image" />
                    Sarah University (You)
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-[#E1FAFF] text-[#1F5AB3] font-bold group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    54
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-[#E1FAFF] text-[#1F5AB3] font-bold group-hover:bg-opacity-50 transition-all`
                    )}
                  >
                    64%
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-[#E1FAFF] text-[#1F5AB3] font-bold group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    Apr 26, 2023   6:05
                  </div>
                </td>
                <td className="px-0">
                  <div
                    className={cn(
                      `h-12 py-1 flex items-center justify-center bg-[#E1FAFF] text-[#1F5AB3] font-bold group-hover:bg-opacity-50 transition-all hover:opacity-80`
                    )}
                  >
                    12m55s
                  </div>
                </td>
              </tr>
            </>
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default LeaderboardView