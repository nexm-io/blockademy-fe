"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import editIcon from "@/public/icons/edit.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getAccountDetail } from "@/redux/features/account/action";
import userDefault from "@/public/images/home/home-iconuser.png";
import avatarIcon from "@/public/icons/avataricon.svg";

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
    <div>
      <div className="flex items-center gap-2 md:mb-[40px] mb-6 md:mt-[60px] mt-8">
        <h2 className="font-semibold text-2xl ">Avatar</h2>
        <div className="flex gap-1 items-center">
          <Image
            alt="edit-icon"
            src={editIcon}
            className="w-4 h-4 cursor-pointer select-none"
            onClick={handleShowAvatar}
          ></Image>
          <span
            onClick={handleShowAvatar}
            className="text-blue-100 text-base font-normal cursor-pointer hover:underline select-none"
          >
            Edit
          </span>
        </div>
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
