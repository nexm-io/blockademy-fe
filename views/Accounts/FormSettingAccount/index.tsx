"use client";
import Button from "@/components/Common/Button";
import Image from "next/image";
import Input from "@/components/Common/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import eyeCloseIcon from "@/public/icons/eyeclose.svg";
import eyeIcon from "@/public/icons/eye.svg";
import { changePassword, logoutAuth } from "@/redux/features/auth/action";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import keyIcon from "@/public/icons/key-fill.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormSettingAccount = ({
  onToggle,
}: {
  onToggle: (status: boolean) => void;
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [toggleCurrPassword, setToggleCurrPassword] = useState<boolean>(false);
  const [toggleNewPassword, setToggleNewPassword] = useState<boolean>(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] =
    useState<boolean>(false);
  const schema = Yup.object({
    old_password: Yup.string().required("Please enter your password").trim(),
    password: Yup.string()
      .required("Please enter your password")
      .trim()
      .min(8, "Length from 8 - 160 characters")
      .max(160, "Length from 8 - 160 characters"),
    password_confirmation: Yup.string()
      .required("Please enter your password")
      .trim()
      .oneOf([Yup.ref("password")], "The password confirmation does not match"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  type FormData = Yup.InferType<typeof schema>;

  const onChangePassword: SubmitHandler<FormData> = async (data) => {
    const detailChange = {
      old_password: data.old_password,
      password: data.password,
      password_confirmation: data.password_confirmation,
    };
    const res = await dispatch(changePassword(detailChange)).unwrap();
    if (res.success) {
      toast.success(res.message);
      onToggle(false);
      reset();
      dispatch(logoutAuth());
    }
    res.error && toast.error(res.message);
  };

  return (
    <div className="flex justify-between items-center">
      <form
        onSubmit={handleSubmit(onChangePassword)}
        className="flex flex-col gap-6 w-full"
      >
        <div className="flex flex-col w-full gap-6">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-[#DDE8FF] flex justify-center items-center">
              <Image
                alt="avatar icon"
                src={keyIcon}
                width={24}
                height={24}
                className="select-none"
              />
            </div>
            <h3>Password</h3>
          </div>
          <div className="flex flex-col gap-2 sm:w-[50%] md:pr-2">
            <label htmlFor="old_password" className="text-grey-700 font-light">
              Current Password
            </label>
            <div
              className={`${
                errors?.old_password ? "border border-red-500" : " "
              } rounded-md relative`}
            >
              <Input
                id="old_password"
                register={register}
                type={toggleCurrPassword ? "text" : "password"}
                name="old_password"
                placeholder="Current Password"
                className="bg-grey-200 rounded font-light"
              />
              {!toggleCurrPassword ? (
                <Image
                  src={eyeCloseIcon}
                  onClick={() => setToggleCurrPassword(true)}
                  alt="eye-show"
                  className="w-4 h-4 py-3 px-4 box-content cursor-pointer absolute top-1/2 -translate-y-1/2 right-0"
                />
              ) : (
                <Image
                  src={eyeIcon}
                  onClick={() => setToggleCurrPassword(false)}
                  alt="eye-show"
                  className="w-4 h-4 py-3 px-4 box-content cursor-pointer absolute top-1/2 -translate-y-1/2 right-0"
                />
              )}
            </div>
            {errors?.old_password && (
              <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                {errors.old_password.message}
              </div>
            )}
          </div>
          <div className="flex sm:flex-row flex-col gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="password" className="text-grey-700 font-light">
                New Password
              </label>
              <div
                className={`${
                  errors?.password ? "border border-red-500" : " "
                } rounded-md relative`}
              >
                <Input
                  id="password"
                  register={register}
                  name="password"
                  type={toggleNewPassword ? "text" : "password"}
                  placeholder="New Password"
                  className="bg-grey-200 rounded font-light"
                />
                {!toggleNewPassword ? (
                  <Image
                    src={eyeCloseIcon}
                    onClick={() => setToggleNewPassword(true)}
                    alt="eye-show"
                    className="w-4 h-4 py-3 px-4 box-content cursor-pointer absolute top-1/2 -translate-y-1/2 right-0"
                  />
                ) : (
                  <Image
                    src={eyeIcon}
                    onClick={() => setToggleNewPassword(false)}
                    alt="eye-show"
                    className="w-4 h-4 py-3 px-4 box-content cursor-pointer absolute top-1/2 -translate-y-1/2 right-0"
                  />
                )}
              </div>
              {errors?.password && (
                <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="password_confirmation"
                className="text-grey-700 font-light"
              >
                Confirm Password
              </label>
              <div
                className={`${
                  errors?.password_confirmation ? "border border-red-500" : " "
                } rounded-md relative`}
              >
                <Input
                  id="password_confirmation"
                  register={register}
                  type={toggleConfirmPassword ? "text" : "password"}
                  name="password_confirmation"
                  placeholder="Confirm Password"
                  className="bg-grey-200 rounded font-light"
                />
                {!toggleConfirmPassword ? (
                  <Image
                    src={eyeCloseIcon}
                    onClick={() => setToggleConfirmPassword(true)}
                    alt="eye-show"
                    className="w-4 h-4 py-3 px-4 box-content cursor-pointer absolute top-1/2 -translate-y-1/2 right-0"
                  />
                ) : (
                  <Image
                    src={eyeIcon}
                    onClick={() => setToggleConfirmPassword(false)}
                    alt="eye-show"
                    className="w-4 h-4 py-3 px-4 box-content cursor-pointer absolute top-1/2 -translate-y-1/2 right-0"
                  />
                )}
              </div>
              {errors?.password_confirmation && (
                <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                  {errors.password_confirmation.message}
                </div>
              )}
            </div>
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
  );
};

export default FormSettingAccount;
