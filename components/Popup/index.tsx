"use client";
import React, { useState } from "react";
import Button from "../Common/Button";
import closeIcon from "@/public/icons/close.svg";
import Image from "next/image";
import avatarDefault from "@/public/icons/avatar.svg";
import uploadIcon from "@/public/icons/upload.svg";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  useForm,
} from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { toast } from "react-toastify";
import {
  getAccountDetailWithoutLoading,
  updateImageAccount,
} from "@/redux/features/account/action";
interface PopupProps {
  title?: string;
  description?: string;
  onClose: () => void;
  handleClaim?: () => void;
  avatar?: boolean;
  userImage?: string;
  register?: UseFormRegister<FieldValues>;
  handleSubmit?: UseFormHandleSubmit<FieldValues, undefined>;
  setValue?: UseFormSetValue<FieldValues>;
}

const Popup: React.FC<PopupProps> = ({
  title,
  description,
  onClose,
  handleClaim,
  avatar = false,
  userImage,
}) => {
  const [imageState, setImageState] = useState<File | null>(null);
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [getImage, setGetImage] = useState("");
  const { handleSubmit, register } = useForm();
  const isLoading = useAppSelector((state) => state.account.isLoading);
  const userAccount = useAppSelector((state) => state.account.data);
  const userId = useAppSelector((state) => state.auth.user?.id || 0);

  const dispatch = useAppDispatch();
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setImageState(file);
    setGetImage(URL.createObjectURL(file));
  };

  const imageSlug = new FormData();
  if (userAccount && imageState) {
    imageSlug.append("image", imageState);
  }

  const onSubmit = async () => {
    setSaveLoading(true);
    const res = await dispatch(updateImageAccount(imageSlug)).unwrap();
    if (res.success) {
      dispatch(getAccountDetailWithoutLoading({ userId: userId }));
      onClose();
      toast.success("Update image successfully");
    }
    res.error && toast.error(res.message);
    setSaveLoading(false);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black-300/50 z-[998]"
        onClick={onClose}
      ></div>
      <div
        className={`border border-gray-400 rounded-2xl py-10 px-20 fixed z-[999] bg-white-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <div
          className="absolute right-5 top-10 cursor-pointer"
          onClick={onClose}
        >
          <Image src={closeIcon} width={24} height={24} alt="close icon" />
        </div>
        <div className="flex flex-col items-center justify-center sm:min-w-[446px]">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-blue-100 text-xl">{title || "Title"}</h2>
            <p className="text-gray-100 font-normal text-center md:text-base text-sm">
              {description ||
                " Your one-stop guide to all things crypto. Whether you're a rookie trying to understand mining or a veteran looking to develop a trading strategy, we've got you covered."}
            </p>
          </div>
          {avatar && (
            <div className="flex flex-col gap-6 mt-6 w-full">
              <div className="flex justify-center">
                <Image
                  alt=""
                  src={getImage || userImage || avatarDefault}
                  width={242}
                  height={242}
                  className="sm:w-[242px] w-[200px] select-none rounded"
                />
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 items-center"
              >
                <div className="h-[1px] bg-grey-100 w-full"></div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <Image
                      alt="camera-icon"
                      src={uploadIcon}
                      className="w-4 h-4"
                    ></Image>
                    <label htmlFor="fileInput" className="custom-file-upload">
                      Upload photo
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      accept=".png, .jpg, .jpeg"
                      className="hidden"
                      {...register("image")}
                      onChange={handleFileChange}
                    />
                  </div>
                  {/* <div className="flex gap-2 items-center">
                    <Image
                      alt="camera-icon"
                      src={cameraIcon}
                      className="w-4 h-4"
                    ></Image>
                    <span className="text-black-100 text-base font-normal cursor-pointer">
                      Take a photo
                    </span>
                  </div> */}
                </div>
                <Button
                  type="submit"
                  className="w-[182px] h-[42px] mb-6"
                  loading={saveLoading || isLoading}
                  disabled={saveLoading || isLoading}
                >
                  Save
                </Button>
              </form>
            </div>
          )}
          {!avatar && (
            <div className="flex gap-6 mb-8">
              <Button outlined size="small" onClick={onClose}>
                Later
              </Button>
              <Button size="small" type="button" onClick={handleClaim}>
                View Reward
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Popup;
