"use client";
import Button from "@/components/Common/Button";
import { User } from "@styled-icons/fa-solid";
import Image from "next/image";
import avatarIcon from "@/public/icons/human.svg";
import menu from "@/public/icons/menu2.svg";
import Input from "@/components/Common/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Envelope } from "@styled-icons/boxicons-solid";
import { TelephoneFill } from "@styled-icons/bootstrap";
import { Key } from "@styled-icons/bootstrap";
import { Wallet } from "@styled-icons/fa-solid";
import avatar from "@/public/icons/avatar.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { getAccountDetail, updateAccountDetail } from "@/redux/features/account/action";
import { changePassword } from "@/redux/features/auth/action";
import { ChangePasswordDetail, ResetDetail } from "@/redux/features/auth/type";
import { toast } from "react-toastify";
type Inputs = {
  name: string;
  exampleRequired: string;
};

const FormSettingAccount = () => {
  const dispatch = useAppDispatch();
  const user_id = useAppSelector((state) => state.auth.user);
  const accountDetail = useAppSelector((state) => state.account.data);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues ,
    reset,
    formState: { errors },
  } = useForm<any>();

  useEffect(() => {
    if (user_id) {
      dispatch(getAccountDetail({ userId: user_id.id }));
    }
  }, [dispatch]);

  const onSubmit: SubmitHandler<any> = async (data) => {
    const detail = {
      first_name: getValues("first_name"),
      last_name: getValues("last_name"),
      phone: getValues("phone")
    }
    const res = await dispatch(updateAccountDetail(detail)).unwrap()
    res.success && toast.success('Change Infomation success')
  };

  const onChangePassword: SubmitHandler<ChangePasswordDetail>  = async (data) => {
    const detailChange = {
      old_password: data.old_password,
      password: data.password,
      password_confirmation: data.password_confirmation,
    }
    const res = await dispatch(changePassword(detailChange)).unwrap()
    res.success && toast.success('Change password success')
    reset()
  }

  return (
    <div className="mt-[74px] flex flex-col gap-[60px]">
      <h1 className="font-semibold text-4xl">Account Settings</h1>
      <div>
        <h2 className="font-semibold text-2xl mb-[45px]">Avatar</h2>

        <div className="flex justify-between items-center">
          <div className="flex gap-6">
            <Image alt="" src={menu} className="w-6 h-6 "></Image>
            <div className="flex flex-col ">
              <h3 className="font-semibold text-base">Avatar</h3>

              <p className="text-base font-normal text-gray-300">
                Select an avatar to personalize your account.
              </p>
            </div>
          </div>

          <div>
            <Image alt="" src={avatar} className="w-8 h-8 rounded-full"></Image>
          </div>

          <Button
            size="small"
            className="h-10 w-[97px] bg-white-300 !text-black-100 hover:text-white-100 "
          >
            Change
          </Button>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-2xl mb-[45px]">General Account</h2>

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
                  <label htmlFor="pl-1 first-name text-[#727A88] opacity-30 mb-[5px]">
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
                  <label htmlFor="pl-1 last-name text-[##727A88 opacity-30 mb-[5px]">
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
                <Envelope className="w-6 h-6" />
                <h3 className="font-semibold text-base mb-[30px]">Email</h3>
              </div>
              <div className="flex gap-5 w-full">
                <div className="w-full">
                  <label htmlFor="pl-1 first-name text-[#727A88] opacity-30 mb-[5px]">
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
                  <label htmlFor="pl-1 first-name text-[#727A88] opacity-30 mb-[5px]">
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
              <Button className="w-[214px]" size="normal" outlined>
                Cancle
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-2xl mb-[45px]">Change Password</h2>

        {/* Line 1 */}

        <div className="flex justify-between items-center ">
          <form
            onSubmit={handleSubmit(onChangePassword)}
            className="flex flex-col gap-6 w-full"
          >
            <div className="flex flex-col w-full">
              <div className="flex gap-2">
                {" "}
                <Key className="w-6 h-6" />
                <h3 className="font-semibold text-base mb-[35px]">
                  Change password
                </h3>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex gap-5 w-full mb-6">
                  <div className="w-[50%]">
                    <label htmlFor="pl-1 first-name text-[#727A88] opacity-30 mb-[5px]">
                      {" "}
                      Current Password
                    </label>
                    <Input
                      id="old_password"
                      register={register}
                      name="old_password"
                      placeholder="user@emai.com..."
                      className="bg-white-600"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-5 w-full">
                <div className="w-full">
                  <label htmlFor="pl-1 first-name text-[#727A88] opacity-30 mb-[5px]">
                    {" "}
                    New Password
                  </label>
                  <Input
                    id="password"
                    register={register}
                    name="password"
                    placeholder="user@emai.com..."
                    className="bg-white-600"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="pl-1 last-name text-[##727A88 opacity-30 mb-[5px]">
                    {" "}
                    Confirm Password
                  </label>
                  <Input
                    id="password_confirmation"
                    register={register}
                    name="password_confirmation"
                    placeholder="user@emai.com..."
                    className="bg-white-600"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-5 mt-12">
              <Button type="submit" className="w-[214px]" size="normal">
                Save
              </Button>
              <Button className="w-[214px]" size="normal" outlined>
                Cancle
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <div className="flex gap-2 ">
          <h2 className="font-semibold text-2xl mb-[45px]">Change Password</h2>
        </div>

        {/* Line 1 */}

        <div className="flex justify-between items-center ">
          <div className="flex gap-4">
            <Wallet className="w-6 h-6" />

            <div className="flex flex-col ">
              <h3 className="font-semibold text-base">Wallet</h3>

              <p className="text-base font-normal text-gray-300">
                Connect your account to Wallet
              </p>
            </div>
          </div>

          <div>
            <span>Off</span>
          </div>

          <Button
            size="small"
            className="h-10 w-[97px] bg-white-300 !text-black-100 hover:text-white-100 "
          >
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormSettingAccount;
