"use client";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import Image from "next/image";
import {
  getAccountDetail,
  updateAccountDetail,
} from "@/redux/features/account/action";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import phoneIcon from "@/public/icons/phone-bold.svg";
import profileIcon from "@/public/icons/profile-fill.svg";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import emailIcon from "@/public/icons/mail-filled.svg";
import * as Yup from "yup";

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
      .required("This field is required!")
      .test("is-numeric", "Phone must contain only numbers", (value) => {
        return /^\d+$/.test(value || " ");
      })
      .min(10, "Length should be at least 10 characters"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,

    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<any> = async () => {
    const firstName = getValues("first_name");
    const lastName = getValues("last_name");
    const phone = getValues("phone");
    const detail: { first_name: string; last_name: string; phone?: string } = {
      first_name: firstName,
      last_name: lastName,
    };

    if (phone !== "") {
      detail.phone = phone;
    }

    const res = await dispatch(updateAccountDetail(detail)).unwrap();
    if (res.success) {
      toast.success("Change Infomation success");
      dispatch(getAccountDetail({ userId: userId }));
      res.success && onToggle(false);
    }
    res.error && toast.error(res.message);
  };

  useEffect(() => {
    if (accountDetail) {
      setValue("first_name", accountDetail?.first_name);
      setValue("last_name", accountDetail?.last_name);
      setValue("phone", accountDetail?.phone);
    }
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full"
        >
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
                <Image
                  alt="avatar icon"
                  src={profileIcon}
                  width={24}
                  height={24}
                  className="select-none"
                />
              </div>
              <h3>Your name</h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="first_name" className="text-grey-700 font-light">
                  First Name
                </label>

                <div
                  className={`${
                    errors?.first_name ? "border border-red-500" : " "
                  } rounded-md`}
                >
                  <Input
                    id="first_name"
                    register={register}
                    name="first_name"
                    defaultValue={accountDetail?.first_name}
                    placeholder="Text"
                    className="bg-grey-200 rounded font-light"
                  />
                </div>
                {errors?.first_name && (
                  <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                    {errors.first_name.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="last_name" className="text-grey-700 font-light">
                  Last Name
                </label>
                <div
                  className={`${
                    errors?.last_name ? "border border-red-500" : " "
                  } rounded-md`}
                >
                  <Input
                    id="last_name"
                    register={register}
                    name="last_name"
                    defaultValue={accountDetail?.last_name}
                    placeholder="Text"
                    className="bg-grey-200 rounded font-light"
                  />
                </div>
                {errors?.last_name && (
                  <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                    {errors.last_name.message}
                  </div>
                )}
              </div>
            </div>
          </div>

          <hr className="w-full h-[1px] bg-grey-100"></hr>

          <div className="flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
                <Image
                  alt="avatar icon"
                  src={emailIcon}
                  width={24}
                  height={24}
                  className="select-none"
                />
              </div>
              <h3>Email</h3>
            </div>

            <div className="flex flex-col gap-4">
              <div className="text-grey-700 font-light">Email address</div>
              <span className="bg-grey-200 rounded font-light p-2">
                {accountDetail?.email}
              </span>
            </div>
          </div>

          <hr className="w-full h-[1px] bg-grey-100"></hr>

          <div className="flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
                <Image
                  alt="avatar icon"
                  src={phoneIcon}
                  width={24}
                  height={24}
                  className="select-none"
                />
              </div>
              <h3>Phone</h3>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-grey-700 font-light">
                Phone number
              </label>
              <div
                className={`${
                  errors?.phone ? "border border-red-500" : " "
                } rounded-md`}
              >
                <Input
                  id="phone"
                  register={register}
                  defaultValue={accountDetail?.phone}
                  name="phone"
                  placeholder="0909 786 765"
                  className="bg-grey-200 rounded font-light"
                />
              </div>
              {errors?.phone && (
                <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                  {errors.phone.message}
                </div>
              )}
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-4">
            <Button
              type="submit"
              className="min-w-[184px] !px-0"
              size="normal"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Save
            </Button>

            <Button
              onClick={() => onToggle(false)}
              className="min-w-[184px] !px-0"
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
