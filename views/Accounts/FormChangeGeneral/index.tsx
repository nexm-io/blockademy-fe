"use client";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import {
  getAccountDetail,
  updateAccountDetail,
} from "@/redux/features/account/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Envelope, TelephoneFill } from "@styled-icons/bootstrap";
import { User } from "@styled-icons/fa-solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import emailIcon from "@/public/icons/email.svg";

export default function FormChangeGeneral({ onToggle }: any) {
  const dispatch = useAppDispatch();
  const user_id = useAppSelector((state) => state.auth.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const accountDetail = useAppSelector((state) => state.account.data);
  const userId = useAppSelector((state) => state.auth.user?.id || 0);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<any>();

  useEffect(() => {
    setValue("first_name", accountDetail?.first_name);
    setValue("last_name", accountDetail?.last_name);
    setValue("phone", accountDetail?.phone);
  }, []);
  const onSubmit: SubmitHandler<any> = async (data) => {
    const detail = {
      first_name: getValues("first_name"),

      last_name: getValues("last_name"),

      phone: getValues("phone"),
    };
    const res = await dispatch(updateAccountDetail(detail)).unwrap();
    res.success && toast.success("Change Infomation success");
    dispatch(getAccountDetail({ userId: userId }));
  };
  return (
    <div>
      {/* Line 1 */}
      <div className="flex justify-between items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full"
        >
          <div className="flex flex-col w-full">
            <div className="flex gap-2">
              {" "}
              <User className="w-6 h-6" />
              <h3 className="font-semibold text-base mb-[30px]">Your name</h3>
            </div>

            <div className="flex gap-5 w-full">
              <div className="w-full">
                <label
                  htmlFor=""
                  className="pl-1 first-name text-gray-300 mb-[5px]"
                >
                  {" "}
                  First Name
                </label>

                <Input
                  id="first_name"
                  register={register}
                  name="first_name"
                  defaultValue={accountDetail?.first_name}
                  placeholder="First name..."
                  className="bg-white-600"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor=""
                  className="pl-1 first-name text-gray-300 mb-[5px]"
                >
                  {" "}
                  Last Name
                </label>

                <Input
                  id="last_name"
                  register={register}
                  name="last_name"
                  defaultValue={accountDetail?.last_name}
                  placeholder="Last name..."
                  className="bg-white-600"
                />
              </div>
            </div>
          </div>

          <hr className="w-full  border border-b-none border-black-300/20"></hr>

          <div className="flex flex-col w-full">
            <div className="flex gap-2">
              {" "}
              <Image
                alt="email-icon"
                src={emailIcon}
                className="md:w-6 md:h-6 w-8 h-8"
              ></Image>
              <h3 className="font-semibold text-base mb-[30px]">Email</h3>
            </div>

            <div className="flex gap-5 w-full">
              <div className="w-full">
                <label
                  htmlFor=""
                  className="pl-1 first-name text-gray-300 mb-[5px]"
                >
                  {" "}
                  Email address
                </label>

                <Input
                  id="email"
                  register={register}
                  name="email"
                  value={accountDetail?.email}
                  placeholder="Email..."
                  className="bg-white-600"
                />
              </div>
            </div>
          </div>

          <hr className="w-full  border border-b-none border-black-300/20"></hr>

          <div className="flex flex-col w-full">
            <div className="flex gap-2">
              {" "}
              <TelephoneFill className="w-6 h-6" />
              <h3 className="font-semibold text-base mb-[30px]">Phone</h3>
            </div>

            <div className="flex gap-5 w-full">
              <div className="w-full">
                <label
                  htmlFor=""
                  className="pl-1 first-name text-gray-300 mb-[5px]"
                >
                  {" "}
                  Phone number
                </label>

                <Input
                  id="phone"
                  register={register}
                  defaultValue={accountDetail?.phone}
                  name="phone"
                  placeholder="Phone number..."
                  className="bg-white-600"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-12">
            <Button type="submit" className="w-[214px]" size="normal">
              Save
            </Button>

            <Button
              onClick={() => onToggle(false)}
              className="w-[214px]"
              size="normal"
              outlined
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
