"use client";
import Button from "@/components/Common/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import userDefault from "@/public/images/home/home-iconuser.png";
import avatarIcon from "@/public/icons/avataricon.svg";
import emailIcon from "@/public/icons/email.svg";
import phoneIcon from "@/public/icons/telephone.svg";
import keyIcon from "@/public/icons/keypassword.svg";
import cancelIcon from "@/public/icons/cancel.svg";
import editIcon from "@/public/icons/edit.svg";
import { User, Wallet } from "@styled-icons/fa-solid";
import Link from "next/link";
import Popup from "@/components/Popup";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getAccountDetail } from "@/redux/features/account/action";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
const MyAccount = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, setValue, getValues } = useForm();

  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?.id || 0);
  const userAccount = useAppSelector((state) => state.account.data);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    dispatch(getAccountDetail({ userId: userId }));
  }, [dispatch, userId]);
  const handleShowAvatar = () => {
    setShow(true);
  };

  return (
    <div className="mt-[74px] px-4 md:px-0">
      <h1 className="font-semibold md:text-4xl text-3xl md:pt-[60px] pt-4">
        Account Settings
      </h1>
      {/* Avatar */}
      <div>
        <div className="flex items-center gap-2 md:mb-[40px] mb-6 md:mt-[60px] mt-8">
          <h2 className="font-semibold text-2xl ">Avatar</h2>
          <div className="flex gap-1 items-center">
            <Image
              alt="edit-icon"
              src={editIcon}
              className="w-4 h-4 cursor-pointer"
              onClick={handleShowAvatar}
            ></Image>
            <span
              onClick={handleShowAvatar}
              className="text-blue-100 text-base font-normal cursor-pointer hover:underline"
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
              className="md:w-6 md:h-6 w-8 h-8"
            ></Image>
            <div className="flex flex-col ">
              <h3 className="font-semibold text-base">Avatar</h3>
              <p className="text-base font-normal text-gray-300">
                Select an avatar to personalize your account.
              </p>
            </div>
          </div>
          <div className="md: my-6 md:my-0">
            <Image
              alt="avatar-user"
              src={userAccount?.image || userDefault}
              width={50}
              height={50}
              className="md:w-[50px] md:h-[50px] w-[100px] h-[100px] rounded-full"
            ></Image>
          </div>
        </div>
      </div>

      {/* General Account */}
      <div>
        <div className="flex items-center gap-2 md:mb-[40px] mb-6 md:mt-[60px] mt-8">
          <h2 className="font-semibold text-2xl ">General Account</h2>
          <div className="flex gap-1 items-center">
            <Image
              alt="edit-icon"
              src={editIcon}
              className="w-4 h-4 cursor-pointer"
              onClick={handleShowAvatar}
            ></Image>
            <span
              onClick={handleShowAvatar}
              className="text-blue-100 text-base font-normal cursor-pointer hover:underline"
            >
              Edit
            </span>
          </div>
        </div>
        {/* Line 1 */}
        <div className="flex justify-between items-center md:mb-[40px] mb-6 md:flex-row flex-col">
          <div className="flex gap-4 md:basis-[450px] basis-auto items-center md:items-start self-start">
            <User className="md:w-6 md:h-6 w-8 h-8" />
            <div className="flex flex-col ">
              <h3 className="font-semibold text-base">Your name</h3>
              <p className="text-base font-normal text-gray-300">
                Set a customized name for your profile.
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
              className="md:w-6 md:h-6 w-8 h-8"
            ></Image>

            <div className="flex flex-col">
              <h3 className="font-semibold text-base">Email</h3>
              <p className="text-base font-normal text-gray-300">
                Edit your email here.
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
              className="md:w-6 md:h-6 w-8 h-8"
            ></Image>

            <div className="flex flex-col">
              <h3 className="font-semibold text-base">Phone</h3>
              <p className="text-base font-normal text-gray-300">
                Edit your phone number here.
              </p>
            </div>
          </div>
          <div className=" my-4 md:my-0">
            <span className="text-blue-100 text-base font-semibold">
              {userAccount?.phone}
            </span>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div>
        <div className="flex items-center gap-2 md:mb-[40px] mb-6 md:mt-[60px] mt-8">
          <h2 className="font-semibold text-2xl ">Change Password</h2>
          <div className="flex gap-1 items-center">
            <Image
              alt="edit-icon"
              src={editIcon}
              className="w-4 h-4 cursor-pointer"
              onClick={handleShowAvatar}
            ></Image>
            <span
              onClick={handleShowAvatar}
              className="text-blue-100 text-base font-normal cursor-pointer hover:underline"
            >
              Edit
            </span>
          </div>
        </div>
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
                Change the password for your account.
              </p>
            </div>
          </div>
          <div className=" my-4 md:my-0">
            <span className="text-blue-100 text-base font-semibold">
              ******{" "}
            </span>
          </div>
        </div>
      </div>

      {/* Connect Wallet */}
      <div>
        <h2 className="font-semibold text-2xl md:mb-[40px] mb-6 md:mt-[60px] mt-8">
          Wallet
        </h2>
        <div className="flex justify-between items-center md:mb-[40px] mb-6 md:flex-row flex-col">
          <div className="flex gap-4 md:basis-[450px] basis-auto items-center md:items-start self-start">
            <Wallet className="md:w-6 md:h-6 w-8 h-8" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-base">Wallet</h3>
              <p className="text-base font-normal text-gray-300">
                Connect your account to Wallet
              </p>
            </div>
          </div>
          <div className=" my-4 md:my-0">
            <div className="flex gap-2 items-center ">
              <Image alt="" src={cancelIcon} className="w-4 h-4"></Image>
              <span className="text-base font-semibold">Off</span>
            </div>
          </div>
          <div className="md:basis-[100px] basis-auto">
            <Button
              size="small"
              className="w-[100px] h-[40px] bg-white-300 !text-black-100 hover:!text-white-100"
            >
              Connect{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:mt-[60px] mt-8 md:mb-[120px] mb-8">
        <Link
          href="#"
          className="text-base text-blue-100 font-semibold hover:brightness-50"
        >
          Give us your feedbacks
        </Link>
        <Link
          href="#"
          className="text-base text-blue-100 font-semibold hover:brightness-50"
        >
          Log out
        </Link>
      </div>
      {show && (
        <Popup
          title="Edit Avatar"
          description="Select an avatar to personalize your account."
          onClose={() => setShow(false)}
          avatar
          userImage={userAccount?.image || ""}
          register={register}
          handleSubmit={handleSubmit}
          setValue={setValue}
        />
      )}
    </div>
  );
};

export default MyAccount;
