"use client";
import React, { useState } from "react";
import letterIcon from "../../../public/letter.svg";
import keyIcon from "../../../public/key.svg";
import eyeIcon from "../../../public/eye.svg";
import eyeCloseIcon from "../../../public/eyeclose.svg";
import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";

const schema = Yup.object({
  email: Yup.string()
    .required("Please enter your email address")
    .email("Incorrect email format")
    .trim()
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must have a lowercase letter, a number and one special character"
    )
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
});

const LoginPage = () => {
  const [togglePassword, setTogglePassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (e: any) => {
    console.log(e);
    reset();
  };

  return (
    <div className="max-w-[1200px] px-6 w-[405px] my-[200px] mx-auto border border-black rounded-3xl">
      <div className="flex flex-col items-center relative">
        <h2 className="mt-[40px] text-[#0D1C68] text-[18px] font-medium leading-6">
          Log in to your Academy account
        </h2>
        <form className="w-full mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center bg-gray-100 w-full mt-4 rounded-md ">
            <div className="w-[40px] h-[40px] mx-2 flex items-center  justify-center">
              <Image
                alt="message icon"
                className="w-7 h-7 opacity-40 "
                src={letterIcon}
              ></Image>
            </div>
            <Input
              id="email"
              type="text"
              placeholder="Your email address"
              register={register}
            />
          </div>
          {errors?.email && (
            <div className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </div>
          )}
          <div className="flex items-center bg-gray-100 w-full mt-4 rounded-md ">
            <div className="w-[40px] h-[40px] mx-2 flex items-center  justify-center">
              <Image
                alt="message icon"
                className="w-7 h-7 opacity-40 "
                src={keyIcon}
              ></Image>
            </div>
            <Input
              id="password"
              type={togglePassword ? "text" : "password"}
              placeholder="Your password"
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
            <div className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </div>
          )}
          <div className="w-full text-right">
            <Link
              href="#"
              className=" text-gray-400 text-[14px] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Button
            label="Submit"
            type="submit"
            className="bg-[#0D0F35]  hover:bg-[#1F37B3] my-4"
          />
          <div className="w-full text-center mb-[40px]">
            <p className="text-sm font-light text-gray-600">
              Dont&apos;t have an account?{" "}
              <Link
                href="/register"
                className="underline inline-block text-blue-700 "
              >
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
