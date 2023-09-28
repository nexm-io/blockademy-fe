"use client";
import Image from "next/image";
import React, { useState } from "react";
import keyIcon from "@/public/icons/keypassword.svg";
import editIcon from "@/public/icons/edit.svg";
import FormSettingAccount from "../FormSettingAccount";
import { boolean } from "yup";
const ChangePassword = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = (status: boolean) => {
    setToggle(status);
  };
  return (
    /* Change Password */
    <div>
      <div className="flex items-center gap-2 md:mb-[40px] mb-6 md:mt-[60px] mt-8">
        <h2 className="font-semibold text-2xl ">Change Password</h2>
        <div onClick={() => setToggle(!toggle)} className="flex gap-1 items-center">
          <Image
            alt="edit-icon"
            src={editIcon}
            className="w-4 h-4 cursor-pointer select-none"
          ></Image>
          <span
            
            className="text-blue-100 text-base font-normal cursor-pointer hover:underline select-none"
          >
            Edit
          </span>
        </div>
      </div>
      {toggle ? (
        <FormSettingAccount onToggle={handleToggle} />
      ) : (
        <div className="flex justify-between items-center md:mb-[40px] mb-6 md:flex-row flex-col">
          <div className="flex gap-4 md:basis-[450px] basis-auto items-center md:items-start self-start">
            <Image
              alt=""
              src={keyIcon}
              className="md:w-6 md:h-6 w-8 h-8"
            ></Image>
            <div className="flex flex-col ">
              <h3 className="font-semibold text-base">Password</h3>
              <p className="text-base font-normal text-gray-300">
                Change the password for your account
              </p>
            </div>
          </div>
          <div className=" my-4 md:my-0">
            <span className="text-blue-100 text-base font-semibold">
              ******{" "}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
