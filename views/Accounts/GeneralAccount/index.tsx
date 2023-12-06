"use client";
import Image from "next/image";
import React, { useState } from "react";
import emailIcon from "@/public/icons/mail-filled.svg";
import phoneIcon from "@/public/icons/phone-bold.svg";
import profileIcon from "@/public/icons/profile-fill.svg";
import { useAppSelector } from "@/redux/hook";
import FormChangeGeneral from "../FormChangeGeneral";
import Button from "@/components/Common/Button";

const GeneralAccount = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const userAccount = useAppSelector((state) => state.account.data);

  const handleToggle = (status: boolean) => {
    setToggle(!status);
  };

  return (
    <div className="rounded-lg border border-grey-200 p-4 bg-gray-900">
      <div className="hidden sm:flex items-center justify-between gap-2 mb-6">
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
          <div className="flex justify-between sm:items-center md:flex-row flex-col">
            <div className="flex gap-6 items-start sm:items-center">
              <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
                <Image
                  alt="avatar icon"
                  src={profileIcon}
                  width={24}
                  height={24}
                  className="select-none"
                />
              </div>
              <div className="flex flex-col gap-2 sm:gap-[2px]">
                <h3>Your name</h3>
                <p className="font-light text-gray-300">
                  Set a customized name for your profile
                </p>
                <div className="flex md:hidden sm:block justify-start w-full sm:w-auto">
                  <span className="text-blue-100">
                    {userAccount?.first_name} {userAccount?.last_name}
                  </span>
                </div>
              </div>
            </div>
            <div className="my-4 md:my-0 hidden md:flex sm:block justify-start w-full sm:w-auto">
              <span className="text-blue-100">
                {userAccount?.first_name} {userAccount?.last_name}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-start sm:items-center md:flex-row flex-col">
            <div className="flex gap-6 items-start sm:items-center">
              <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
                <Image
                  alt="avatar icon"
                  src={emailIcon}
                  width={24}
                  height={24}
                  className="select-none"
                />
              </div>
              <div className="flex flex-col gap-2 sm:gap-[2px]">
                <h3>Email</h3>
                <p className="font-light text-gray-300">
                  Edit your email
                </p>
                <div className="block md:hidden text-blue-100">
                  {userAccount?.email}
                </div>
              </div>
            </div>
            <div className="hidden md:block my-4 md:my-0">
              <span className="text-blue-100">
                {userAccount?.email}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-start sm:items-center md:flex-row flex-col">
            <div className="flex gap-6 items-start sm:items-center">
              <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
                <Image
                  alt="avatar icon"
                  src={phoneIcon}
                  width={24}
                  height={24}
                  className="select-none"
                />
              </div>
              <div className="flex flex-col gap-2 sm:gap-[2px]">
                <h3>Phone</h3>
                <p className="font-light text-gray-300">
                  Edit your phone number
                </p>
                <div className="block md:hidden text-blue-100">
                  {userAccount?.phone}
                </div>
              </div>
            </div>
            <div className="hidden md:block my-4 md:my-0">
              <span className="text-blue-100">
                {userAccount?.phone}
              </span>
            </div>
          </div>
          <div className="flex sm:hidden justify-end">
            <Button
              className="w-[106px] !py-[6px] bg-blue-600 group hover:bg-blue-600/50 group"
              onClick={() => setToggle(!toggle)}
            >
              <span className="text-blue-700 group-hover:text-blue-700/80 transition-all">
                Change
              </span>
            </Button>
          </div>
        </div>
      ) : (
        <FormChangeGeneral onToggle={handleToggle} />
      )}
    </div>
  );
};

export default GeneralAccount;
