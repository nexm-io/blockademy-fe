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
import InfoGraphic from "@/views/Register/InfoGraphic";
import { logoutAuth } from "@/redux/features/auth/action";
import { toast } from "react-toastify";

export default function FormAccount() {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?.id || 0);
  const userAccount = useAppSelector((state) => state.account.data);
  const isLogin = useAppSelector((state) => state.auth.isAuthenticated);

  const handleLogout = async () => {
    try {
      await dispatch(logoutAuth()).unwrap();
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error("Logout Failed");
      localStorage.clear();
    }
  };

  useEffect(() => {
    dispatch(getAccountDetail({ userId: userId }));
  }, [dispatch, userId]);

  return (
    <div className="container">
      {isLogin ? (
        <>
          <h1 className="font-bold md:text-4xl text-3xl mb-10">
            Account Settings
          </h1>
          <div className="flex flex-col gap-6">
            <Avatar show={show} setShow={setShow} />
            <GeneralAccount />
            <ChangePassword />
            <div className="flex flex-col gap-4">
              <div className="text-base text-blue-100 hover:brightness-50 cursor-pointer w-fit">
                Give us your feedback
              </div>
              <div
                className="text-base text-red-200 hover:brightness-50 cursor-pointer w-fit"
                onClick={handleLogout}
              >
                Log out
              </div>
            </div>
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
    </div>
  );
}
