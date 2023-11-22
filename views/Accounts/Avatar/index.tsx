"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import editIcon from "@/public/icons/edit.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getAccountDetail } from "@/redux/features/account/action";
import userDefault from "@/public/images/home/home-iconuser.png";
import avatarIcon from "@/public/icons/avataricon.svg";
import Button from "@/components/Common/Button";

interface AvatarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Avatar: React.FC<AvatarProps> = ({ show, setShow }) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?.id || 0);
  const userAccount = useAppSelector((state) => state.account.data);
  useEffect(() => {
    dispatch(getAccountDetail({ userId: userId }));
  }, [dispatch, userId]);
  const handleShowAvatar = () => {
    setShow(true);
  };
  return (
    /* Avatar */
    <div className="md:mt-[60px] mt-8 flex flex-col gap-6">
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-semibold text-2xl ">Avatar</h2>
        <Button
          className="w-[106px] !py-[6px] bg-blue-600 group hover:bg-blue-600/50 group"
          onClick={handleShowAvatar}
        >
          <span className="text-blue-700 group-hover:text-blue-700/80 transition-all">
            Change
          </span>
        </Button>
      </div>
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="flex gap-4 md:basis-[450px] basis-auto items-center md:items-start">
          <Image
            alt=""
            src={avatarIcon}
            className="md:w-6 md:h-6 w-8 h-8 select-none"
          ></Image>
          <div className="flex flex-col ">
            <h3 className="font-semibold text-base">Avatar</h3>
            <p className="text-base font-normal text-gray-300">
              Select an avatar to personalize your account
            </p>
          </div>
        </div>
        <div className="md: my-6 md:my-0">
          <Image
            alt="avatar-user"
            src={userAccount?.image || userDefault}
            width={150}
            height={150}
            className="md:w-[50px] md:h-[50px] w-[150px] h-[150px] rounded-full select-none"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
