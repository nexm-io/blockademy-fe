"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getAccountDetail } from "@/redux/features/account/action";
import avatarDefault from "@/public/icons/avatar.svg";
import avatarIcon from "@/public/icons/avatar-icon.svg";
import Button from "@/components/Common/Button";

interface AvatarProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Avatar: React.FC<AvatarProps> = ({ show, setShow }) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?.id || 0);
  const userAccount = useAppSelector((state) => state.account.data);

  const handleShowAvatar = () => {
    setShow(true);
  };

  useEffect(() => {
    dispatch(getAccountDetail({ userId: userId }));
  }, [dispatch, userId]);

  return (
    <div className="rounded-lg border border-grey-200 p-4 bg-gray-900">
      <div className="hidden sm:flex items-center justify-between gap-2 mb-6">
        <h2 className="text-2xl">Avatar</h2>
        <Button
          className="w-[106px] !py-[6px] bg-blue-600 group hover:bg-blue-600/50 group"
          onClick={handleShowAvatar}
        >
          <span className="text-blue-700 group-hover:text-blue-700/80 transition-all">
            Change
          </span>
        </Button>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-6 items-start sm:items-center">
          <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
            <Image
              alt="avatar icon"
              src={avatarIcon}
              width={24}
              height={24}
              className="select-none"
            />
          </div>
          <div className="flex flex-col gap-2 sm:gap-[2px]">
            <h3>Avatar</h3>
            <p className="font-light text-gray-300">
              Select an avatar to personalize your account
            </p>
            <div className="flex sm:hidden items-center justify-between">
              <Image
                alt="avatar-user"
                src={userAccount?.image || avatarDefault}
                width={40}
                height={40}
              />
              <Button
                className="w-[106px] !py-[6px] bg-blue-600 group hover:bg-blue-600/50 group"
                onClick={handleShowAvatar}
              >
                <span className="text-blue-700 group-hover:text-blue-700/80 transition-all">
                  Change
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden sm:block my-6 sm:my-0">
          <Image
            alt="avatar-user"
            src={userAccount?.image || avatarDefault}
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
