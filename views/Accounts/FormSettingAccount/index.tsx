"use client";
import Button from "@/components/Common/Button";
import Image from "next/image";
import Input from "@/components/Common/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import keyIcon from "@/public/icons/keypassword.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import {
  getAccountDetail,
  updateAccountDetail,
} from "@/redux/features/account/action";
import { changePassword } from "@/redux/features/auth/action";
import { ChangePasswordDetail } from "@/redux/features/auth/type";
import { toast } from "react-toastify";

const FormSettingAccount = ({
  onToggle,
}: {
  onToggle: (status: boolean) => void;
}) => {
  
  const dispatch = useAppDispatch();
  const user_id = useAppSelector((state) => state.auth.user);
  const accountDetail = useAppSelector((state) => state.account.data);
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
    if (user_id) {
      dispatch(getAccountDetail({ userId: user_id.id }));
    }
  }, [dispatch]);

  const onChangePassword: SubmitHandler<ChangePasswordDetail> = async (
    data
  ) => {
    const detailChange = {
      old_password: data.old_password,
      password: data.password,
      password_confirmation: data.password_confirmation,
    };
    const res = await dispatch(changePassword(detailChange)).unwrap();
    res.success && toast.success("Change password success");
    res.success && onToggle(false);
    reset();
  };

  return (
    <div className="flex justify-between items-center ">
      <form
        onSubmit={handleSubmit(onChangePassword)}
        className="flex flex-col gap-6 w-full"
      >
        <div className="flex flex-col w-full">
          <div className="flex gap-2">
            {" "}
            <Image
              alt=""
              src={keyIcon}
              className="md:w-6 md:h-6 w-8 h-8"
            ></Image>
            <h3 className="font-semibold text-base mb-[35px]">
              Change password
            </h3>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex gap-5 w-full mb-6">
              <div className="w-[50%]">
                <label htmlFor="" className="pl-1 text-gray-300 mb-[5px]">
                  {" "}
                  Current Password
                </label>
                <Input
                  id="old_password"
                  register={register}
                  type="password"
                  name="old_password"
                  placeholder="user@emai.com..."
                  className="bg-white-600"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 w-full">
            <div className="w-full">
              <label htmlFor="" className="pl-1 text-gray-300 mb-[5px]">
                {" "}
                New Password
              </label>
              <Input
                id="password"
                register={register}
                name="password"
                type="password"
                placeholder="user@emai.com..."
                className="bg-white-600"
              />
            </div>
            <div className="w-full">
              <label htmlFor="" className="pl-1 text-gray-300 mb-[5px]">
                {" "}
                Confirm Password
              </label>
              <Input
                id="password_confirmation"
                register={register}
                type="password"
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
  );
};

export default FormSettingAccount;
