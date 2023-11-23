"use client";
import Image from "next/image";
import React, { useState } from "react";
import keyIcon from "@/public/icons/key-fill.svg";
import FormSettingAccount from "../FormSettingAccount";
import Button from "@/components/Common/Button";

const ChangePassword = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = (status: boolean) => {
    setToggle(status);
  };

  return (
    <div className="rounded-lg border border-grey-200 p-4 bg-gray-900">
      <div className="hidden sm:flex items-center justify-between gap-2 mb-6">
        <h2 className="text-2xl">Change Password</h2>
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
        <FormSettingAccount onToggle={handleToggle} />
      ) : (
        <div className="flex justify-between items-start sm:items-center md:flex-row flex-col">
          <div className="flex gap-4 items-start sm:items-center">
            <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
              <Image
                alt="avatar icon"
                src={keyIcon}
                width={24}
                height={24}
                className="select-none"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-[2px]">
              <h3>Password</h3>
              <p className="font-light text-gray-300">
                Change the password for your account
              </p>
              <div className="block md:hidden text-blue-100">
                ******
              </div>
            </div>
          </div>
          <div className="hidden md:block my-4 md:my-0">
            <span className="text-blue-100">
              ******
            </span>
          </div>
          <div className="flex sm:hidden justify-end w-full">
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
      )}
    </div>
  );
};

export default ChangePassword;
