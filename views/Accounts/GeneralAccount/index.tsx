"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import emailIcon from "@/public/icons/mail-filled.svg";
import phoneIcon from "@/public/icons/phone-bold.svg";
import profileIcon from "@/public/icons/profile-fill.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getAccountDetail } from "@/redux/features/account/action";
import FormChangeGeneral from "../FormChangeGeneral";
import Button from "@/components/Common/Button";

const GeneralAccount = () => {
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = useState<boolean>(true);
  const userId = useAppSelector((state) => state.auth.user?.id || 0);
  const userAccount = useAppSelector((state) => state.account.data);
  useEffect(() => {
    dispatch(getAccountDetail({ userId: userId }));
  }, [dispatch, userId]);

  const handleToggle = (status: boolean) => {
    setToggle(!status);
  };

  return (
    <div className="rounded-lg border border-grey-200 p-4 bg-gray-900">
      <div className="flex items-center justify-between gap-2 mb-6">
        <h2 className="text-2xl">General Account</h2>
        <Button
          className="w-[106px] !py-[6px] bg-blue-600 group hover:bg-blue-600/50 group"
          onClick={() => setToggle(!toggle)}
        >
          <span className="text-blue-700 group-hover:text-blue-700/80 transition-all">
            Change
          </span>
        </Button>
      </div>
      {toggle ? (
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center md:flex-row flex-col">
            <div className="flex gap-6 items-center">
              <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
                <Image
                  alt="avatar icon"
                  src={profileIcon}
                  width={24}
                  height={24}
                  className="select-none"
                />
              </div>
              <div className="flex flex-col ">
                <h3>Your name</h3>
                <p className="font-light text-gray-300">
                  Set a customized name for your profile
                </p>
              </div>
            </div>
            <div className=" my-4 md:my-0">
              <span className="text-blue-100">
                {userAccount?.first_name} {userAccount?.last_name}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center md:flex-row flex-col">
            <div className="flex gap-6 items-center">
              <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
                <Image
                  alt="avatar icon"
                  src={emailIcon}
                  width={24}
                  height={24}
                  className="select-none"
                />
              </div>
              <div className="flex flex-col">
                <h3>Email</h3>
                <p className="font-light text-gray-300">
                  Edit your email
                </p>
              </div>
            </div>
            <div className=" my-4 md:my-0">
              <span className="text-blue-100">
                {userAccount?.email}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center md:flex-row flex-col">
            <div className="flex gap-6 items-center">
              <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
                <Image
                  alt="avatar icon"
                  src={phoneIcon}
                  width={24}
                  height={24}
                  className="select-none"
                />
              </div>
              <div className="flex flex-col">
                <h3>Phone</h3>
                <p className="font-light text-gray-300">
                  Edit your phone number
                </p>
              </div>
            </div>
            <div className=" my-4 md:my-0">
              <span className="text-blue-100">
                {userAccount?.phone}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <FormChangeGeneral onToggle={handleToggle} />
      )}
    </div>
  );
};

export default GeneralAccount;
