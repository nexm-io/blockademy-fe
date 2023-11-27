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
import InfoPopup from "@/components/Popup/InfoPopup";
import Button from "@/components/Common/Button";
import Image from "next/image";
import emailIcon from "@/public/icons/email-color.svg";
import { useRouter } from "next/navigation";
import { selectAuth } from "@/redux/features/auth/reducer";

const maxCharacters = 200;
export default function FormAccount() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showPopupSubmit, setShowPopupSubmit] = useState(false);
  const [showAwesomePopup, setShowAwesomePopup] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?.id || 0);
  const userAccount = useAppSelector((state) => state.account.data);
  const isLoading = useAppSelector((state) => state.account.isLoading);
  const { isAuthenticated, token } = useAppSelector(selectAuth);
  const [feedback, setFeedback] = useState("");

  const handleLogout = async () => {
    try {
      await dispatch(logoutAuth()).unwrap();
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error("Logout Failed");
      localStorage.clear();
    }
  };
  const handleTextareaChange = (event: { target: { value: any } }) => {
    const inputText = event.target.value;
    if (inputText.length <= maxCharacters) {
      setFeedback(inputText);
    }
  };

  useEffect(() => {
    if (!isAuthenticated && !token) {
      router.push("/");
    }
  }, [isAuthenticated, token]);

  useEffect(() => {
    dispatch(getAccountDetail({ userId }));
  }, [userId]);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <>
            <div className="skeleton h-10 mb-10"></div>
            <div className="flex flex-col gap-6">
              <div className="skeleton h-[145px]"></div>
              <div className="skeleton h-[293px]"></div>
              <div className="skeleton h-[145px]"></div>
              <div className="flex flex-col gap-4">
                {/* <div className="skeleton h-6"></div> */}
                <div className="skeleton h-6"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-bold md:text-4xl text-3xl mb-10">
              Account Settings
            </h1>
            <div className="flex flex-col gap-6">
              <Avatar show={show} setShow={setShow} />
              <GeneralAccount />
              <ChangePassword />
              <div className="flex flex-col gap-4">
                {/* <div className="text-base text-blue-100 hover:brightness-50 cursor-pointer w-fit" onClick={() => setShowPopupSubmit(true)}>
                  Give us your feedback
                </div> */}
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
        )}
      </div>
      {showPopupSubmit && (
        <InfoPopup
          title="What did you think?"
          desc={
            <div className="text-gray-700 text-center mb-6">
              <p>Do you have a suggestion or found some bug?</p>
              <p>Let us know in this field below.</p>
            </div>
          }
          onClose={() => setShowPopupSubmit(false)}
        >
          <>
            <div className="flex flex-col gap-2">
              <textarea
                className="text-[#9E9E9E] bg-grey-200 min-w-[390px] min-h-[116px] px-2 py-4 font-light rounded outline-none"
                placeholder="Type your feedback"
                defaultValue={""}
                onChange={handleTextareaChange}
                maxLength={maxCharacters}
              />
              <p className="text-end text-[#9E9E9E] text-[12px] font-light leading-5">
                {feedback.length}/{maxCharacters}
              </p>
            </div>
            <Button
              type="button"
              className="mt-2 w-full"
              onClick={() => {
                setShowPopupSubmit(false);
                setShowAwesomePopup(true);
              }}
            >
              Submit
            </Button>
          </>
        </InfoPopup>
      )}

      {showAwesomePopup && (
        <InfoPopup
          title="Awesome!"
          desc={
            <div className="flex flex-col items-center gap-4">
              <Image src={emailIcon} width={80} height={80} alt="email icon" />
              <p className="text-grey-700 text-center">
                Thanks for your feedback!
              </p>
            </div>
          }
          onClose={() => setShowAwesomePopup(false)}
          className="md:min-w-[400px]"
        >
          <Button
            type="button"
            className="mt-2 w-full sm:w-[344px]"
            onClick={() => setShowAwesomePopup(false)}
          >
            Discover More
          </Button>
        </InfoPopup>
      )}
    </>
  );
}
