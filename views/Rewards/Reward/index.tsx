"use client";
import RewardDetail from "@/components/Reward/RewardDetail";
import { getDetailCourse } from "@/redux/features/courses/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Link from "next/link";

const Reward = () => {
  const params = useParams();
  const courseId = params.id;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const coursesRx = useAppSelector((state: RootState) => state.courses);
  const isLogin = useAppSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state: RootState) => state.auth.token);


  useEffect(() => {
    if (!isLogin || !token) {
      router.push("/");
    }
  }, [isLogin, token]);
  useEffect(() => {
    dispatch(getDetailCourse(courseId as string));
  }, []);

  return (
    <div className="container mt-24 sm:mt-32 min-h-[64vh]">
      {coursesRx.isLoading ? (
        <div className="flex flex-col gap-10">
          <div className="skeleton h-10"></div>
          <div className="skeleton h-[397px]"></div>
        </div>
      ) : (
        coursesRx.details && (
          <>
            <nav className="w-full rounded-md  mb-[52px]">
              <ol className="list-reset flex text-gray-300 items-center pl-4 md:pl-0 flex-wrap">
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
                <li className="leading-[23px] hover:underline cursor-pointer">
                  <Link href="/accomplishments">
                    <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                      Accomplishments
                    </span>
                  </Link>
                </li>
                <li className="leading-[23px]">
                  <span className="mx-3 md:text-[12px] text-[10px]">&gt;</span>
                </li>
                <li className="leading-[23px]">
                  <span className="text-gray-300 md:text-sm font-normal capitalize text-[12px]">
                    {coursesRx.details?.title}
                  </span>
                </li>
              </ol>
            </nav>
            <h3 className="text-4xl font-bold">{coursesRx.details?.title}</h3>
            <RewardDetail courseDetail={coursesRx.details} />
          </>
        )
      )}
    </div>
  );
};

export default Reward;
