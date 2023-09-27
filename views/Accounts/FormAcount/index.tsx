"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Popup from "@/components/Popup";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getAccountDetail } from "@/redux/features/account/action";
import { useForm } from "react-hook-form";
import GeneralAccount from "../GeneralAccount";
import Avatar from "../Avatar";
import ChangePassword from "../ChangePassword";
import WalletComponent from "../Wallet";
import InfoGraphic from "@/views/Register/InfoGraphic";
export default function FormAccount() {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?.id || 0);
  const userAccount = useAppSelector((state) => state.account.data);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    dispatch(getAccountDetail({ userId: userId }));
  }, [dispatch, userId]);

  return (
    <>
      {/*  */}
      {isAuthenticated ? (
        <>
          <h1 className="font-semibold md:text-4xl text-3xl md:pt-[60px] pt-4">
            Account Settings
          </h1>
          <Avatar show={show} setShow={setShow} />
          <GeneralAccount />
          <ChangePassword />
          <WalletComponent />
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
        </>
      ) : (
        <div className="bg-white-100 flex justify-center items-center ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold md:text-4xl text-3xl mb-8 md:pt-[60px] pt-4">
              You have to Login
            </h1>
            <InfoGraphic
              description="Sorry! The page you’re looking for have to be login. Please login here."
              color_text="text-black-100"
            />
            <Link
              href="/login"
              className="text-center rounded-lg text-white-100 bg-blue-100 px-6 py-3 hover:bg-transparent border border-transparent hover:border-blue-100 hover:text-blue-100 mb-20"
            >
              Go to Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
