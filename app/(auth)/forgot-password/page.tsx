"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import letterIcon from "@/public/icons/letter.svg";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
const schema = Yup.object({
  email: Yup.string()
    .required("Please enter your email address")
    .email("Incorrect email format")
    .trim()
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
});

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);
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
  const onSubmit = (e: any) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(e);
        resolve();
        reset();
        push("/");
      }, 3000);
    });
  };
  return (
    <div className="max-w-[1200px] px-6 md:w-[405px] w-[350px] my-[100px] md:my-[140px] mx-auto border border-black-100 rounded-3xl">
      <div className="flex flex-col items-center relative">
        <h2 className="mt-[40px] text-[#0D1C68] text-[18px] font-medium leading-6">
          Log in to your Academy account
        </h2>
        <form className="w-full mt-4 px-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-[29px] mb-1">
            <label
              htmlFor="email"
              className="text-black-100 text-sm font-normal leading-5 cursor-pointer"
            >
              Email
            </label>
          </div>
          <div className="flex items-center border border-white-300 w-full rounded-md bg-white-100">
            <Input name="email" id="email" type="text" register={register} />
          </div>
          {errors?.email && (
            <div className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </div>
          )}

          <div className="w-full text-right my-6">
            <p className="leading-[18px] font-light text-center mx-auto my-3 text-sm text-gray-800">
              Enter your email to create an account, we will send you a link to
              change your password
            </p>
          </div>
          <Button type="submit" fullWidth loading={isSubmitting} disabled={isSubmitting}>
            Submit
          </Button>

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

export default Login;
