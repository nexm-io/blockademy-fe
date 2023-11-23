"use client";
import Button from "@/components/Common/Button";
import Image from "next/image";
import Input from "@/components/Common/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { getAccountDetail } from "@/redux/features/account/action";
import { changePassword, logoutAuth } from "@/redux/features/auth/action";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import keyIcon from "@/public/icons/key-fill.svg";

const FormSettingAccount = ({
  onToggle,
}: {
  onToggle: (status: boolean) => void;
}) => {
  const dispatch = useAppDispatch();
  const user_id = useAppSelector((state) => state.auth.user);
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

  useEffect(() => {
    if (user_id) {
      dispatch(getAccountDetail({ userId: user_id.id }));
    }
  }, [dispatch]);

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
    <div className="flex justify-between items-center ">
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
          <div className="flex flex-col gap-2 w-[50%]">
            <label htmlFor="old_password" className="text-grey-700 font-light">
              Current Password
            </label>
            <div
              className={`${
                errors?.old_password ? "border border-red-500" : " "
              } rounded-md`}
            >
              <Input
                id="old_password"
                register={register}
                type="password"
                name="old_password"
                placeholder="Text"
                className="bg-grey-200 rounded font-light"
              />
            </div>
            {errors?.old_password && (
              <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                {errors.old_password.message}
              </div>
            )}
          </div>
          <div className="flex gap-5 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="password" className="text-grey-700 font-light">
                New Password
              </label>
              <div
                className={`${
                  errors?.password ? "border border-red-500" : " "
                } rounded-md`}
              >
                <Input
                  id="password"
                  register={register}
                  name="password"
                  type="password"
                  placeholder="Text"
                  className="bg-grey-200 rounded font-light"
                />
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
                } rounded-md`}
              >
                <Input
                  id="password_confirmation"
                  register={register}
                  type="password"
                  name="password_confirmation"
                  placeholder="Text"
                  className="bg-grey-200 rounded font-light"
                />
              </div>
              {errors?.password_confirmation && (
                <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
                  {errors.password_confirmation.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
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
