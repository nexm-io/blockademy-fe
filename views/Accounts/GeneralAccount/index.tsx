"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import emailIcon from "@/public/icons/email.svg";
import phoneIcon from "@/public/icons/telephone.svg";
import { User } from "@styled-icons/fa-solid";
import editIcon from "@/public/icons/edit.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getAccountDetail } from "@/redux/features/account/action";
import FormChangeGeneral from "../FormChangeGeneral";

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
    /* General Account */
    <div>
      <div className="flex items-center gap-2 md:mb-[40px] mb-6 md:mt-[60px] mt-8">
        <h2 className="font-semibold text-2xl ">General Account</h2>
        <div
          onClick={() => setToggle(!toggle)}
          className="flex gap-1 items-center"
        >
          <Image
            alt="edit-icon"
            src={editIcon}
            className="w-4 h-4 cursor-pointer select-none"
          ></Image>
          <span className="text-blue-100 text-base font-normal cursor-pointer hover:underline select-none">
            Edit
          </span>
        </div>
      </div>
      {toggle ? (
        <>
          {/* Line 1 */}
          <div className="flex justify-between items-center md:mb-[40px] mb-6 md:flex-row flex-col">
            <div className="flex gap-4 md:basis-[450px] basis-auto items-center md:items-start self-start">
              <User className="md:w-6 md:h-6 w-8 h-8" />
              <div className="flex flex-col ">
                <h3 className="font-semibold text-base">Your name</h3>
                <p className="text-base font-normal text-gray-300">
                  Set a customized name for your profile
                </p>
              </div>
            </div>
            <div className=" my-4 md:my-0">
              <span className="text-blue-100 text-base font-semibold">
                {userAccount?.first_name} {userAccount?.last_name}
              </span>
            </div>
          </div>
          {/* Line 2 */}
          <div className="flex justify-between items-center md:mb-[40px] mb-6 md:flex-row flex-col">
            <div className="flex gap-4 md:basis-[450px] basis-auto items-center md:items-start self-start">
              <Image
                alt="email-icon"
                src={emailIcon}
                className="md:w-6 md:h-6 w-8 h-8 select-none"
              ></Image>

              <div className="flex flex-col">
                <h3 className="font-semibold text-base">Email</h3>
                <p className="text-base font-normal text-gray-300">
                  Edit your email here
                </p>
              </div>
            </div>
            <div className=" my-4 md:my-0">
              <span className="text-blue-100 text-base font-semibold">
                {userAccount?.email}
              </span>
            </div>
          </div>
          {/* Line 3 */}
          <div className="flex justify-between items-center md:mb-[40px] mb-6 md:flex-row flex-col">
            <div className="flex gap-4 md:basis-[450px] basis-auto items-center md:items-start self-start">
              <Image
                alt="phone-icon"
                src={phoneIcon}
                className="md:w-6 md:h-6 w-8 h-8 select-none"
              ></Image>

              <div className="flex flex-col">
                <h3 className="font-semibold text-base">Phone</h3>
                <p className="text-base font-normal text-gray-300">
                  Edit your phone number here
                </p>
              </div>
            </div>
            <div className=" my-4 md:my-0">
              <span className="text-blue-100 text-base font-semibold">
                {userAccount?.phone}
              </span>
            </div>
          </div>
        </>
      ) : (
        <FormChangeGeneral onToggle={handleToggle} />
      )}
    </div>
  );
};

export default GeneralAccount;
