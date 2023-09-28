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
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function FormChangeGeneral({
  onToggle,
}: {
  onToggle: (status: boolean) => void;
}) {
  const dispatch = useAppDispatch();
  const accountDetail = useAppSelector((state) => state.account.data);
  const userId = useAppSelector((state) => state.auth.user?.id || 0);

  const schema = Yup.object({
    first_name: Yup.string().required("This field is require!"),
    last_name: Yup.string().required("This field is require!"),
    phone: Yup.string()
      .test("is-numeric", "Phone must contain only numbers", (value) => {
        return /^\d+$/.test(value || " ");
      })
      .min(10, "Length should be at least 10 characters"),
  });

  type FormData = Yup.InferType<typeof schema>;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    if (accountDetail) {
      setValue("first_name", accountDetail?.first_name);
      setValue("last_name", accountDetail?.last_name);
      setValue("phone", accountDetail?.phone);
    }
  }, []);
  const onSubmit: SubmitHandler<any> = async (data) => {
    const firstName = getValues("first_name");
    const lastName = getValues("last_name");
    const phone = getValues("phone");
    const detail: { first_name: string; last_name: string; phone?: string } = {
      first_name: firstName,
      last_name: lastName,
    };

    if (phone === "") {
      detail.phone = phone;
    }

    const res = await dispatch(updateAccountDetail(detail)).unwrap();
    if(res.success) {
    toast.success("Change Infomation success");
    dispatch(getAccountDetail({ userId: userId }));
    res.success && onToggle(false);
    } else {
      toast.error("Change information error");
    }
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
                {errors?.first_name && (
                  <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                    {errors.first_name.message}
                  </div>
                )}
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
                {errors?.last_name && (
                  <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                    {errors.last_name.message}
                  </div>
                )}
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
                {errors?.phone && (
                  <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                    {errors.phone.message}
                  </div>
                )}
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
