"use client";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import { useAppDispatch } from "@/redux/hook";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import eyeCloseIcon from "@/public/icons/eyeclose.svg";
import eyeIcon from "@/public/icons/eye.svg";
import { resetPassword } from "@/redux/features/auth/action";

const schema = Yup.object({
  password: Yup.string()
    .required("Please enter your password")
    .trim()
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Password must have a lowercase letter, a number and one special character"
  // ),
  password_confirmation: Yup.string()
    .trim()
    .oneOf([Yup.ref("password")], "The password confirmation does not match"),
});

type FormResetPass = Yup.InferType<typeof schema>;
const FormReset = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormResetPass) => {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    const code = urlParams.get("activation_code");
    const res = await dispatch(resetPassword({ data, email, code })).unwrap();
    res.success === true && push("/login");
    reset();
  };
  return (
    <div className="flex flex-col relative">
      <h2 className="mt-[40px] text-black-100 text-center text-[30px] font-bold ">
        Reset your Blockademy password?
      </h2>
      <form className="w-full mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center w-full mx-auto mt-4 mb-6 rounded-md ">
          <span className="text-sm text-black-400 self-start leading-5 mb-2">
            Password
          </span>
          <div className="relative flex items-center bg-white-100 border rounded w-full justify-center">
            <Input
              id="password"
              name="password"
              type={togglePassword ? "text" : "password"}
              className="bg-white-200 h-12 rounded-lg"
              register={register}
            />
            {!togglePassword ? (
              <Image
                src={eyeCloseIcon}
                onClick={() => setTogglePassword(true)}
                alt="eye-show"
                className="w-4 h-4 mr-4 cursor-pointer"
              />
            ) : (
              <Image
                src={eyeIcon}
                onClick={() => setTogglePassword(false)}
                alt="eye-show"
                className="w-4 h-4 mr-4 cursor-pointer"
              />
            )}
          </div>
          {errors?.password && (
            <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
              {errors.password.message}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center w-full mx-auto mt-4 mb-6 rounded-md ">
          <span className="text-sm text-black-400 self-start leading-5 mb-2">
            Confirm Password
          </span>
          <div className="relative flex items-center bg-white-100 border rounded w-full justify-center">
            <Input
              name="password_confirmation"
              id="password_confirmation"
              type={togglePassword ? "text" : "password"}
              className="bg-white-200 h-12 rounded-lg"
              register={register}
            />
            {!togglePassword ? (
              <Image
                src={eyeCloseIcon}
                onClick={() => setTogglePassword(true)}
                alt="eye-show"
                className="w-4 h-4 mr-4 cursor-pointer"
              />
            ) : (
              <Image
                src={eyeIcon}
                onClick={() => setTogglePassword(false)}
                alt="eye-show"
                className="w-4 h-4 mr-4 cursor-pointer"
              />
            )}
          </div>
          {errors?.password_confirmation && (
            <div className="text-red-500 text-sm mt-1 w-full max-w-[384px]">
              {errors.password_confirmation.message}
            </div>
          )}
        </div>

        <Button
          type="submit"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
          className="mt-2"
        >
          Submit
        </Button>

        <div className="w-full text-center mt-4 mb-[40px]">
          <p className="text-sm font-light text-gray-600">
            Have an account?{" "}
            <Link
              href="/login"
              className="underline inline-block text-blue-700 "
            >
              Log in here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormReset;
