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
          <div className="flex items-center  w-full rounded-md bg-white-200 mt-4">
            <div className="w-[40px] h-[40px] mx-2 flex items-center justify-center">
              <Image
                alt="message icon"
                className="w-7 h-7 opacity-40 "
                src={letterIcon}
              ></Image>
            </div>
            <Input
              name="email"
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

          <div className="w-full text-right my-6">
            <p className="leading-[18px] font-light text-center mx-auto my-3 text-sm text-gray-800">
              Enter your email to create an account, we will send you a link to
              change your password
            </p>
          </div>
          {isSubmitting ? (
            <Button
              type="button"
              className=" bg-gray-500 mb-4 min-w-[64px] leading-7 py-[10px] px-[25px] w-[160px] mx-auto my-4 h-[48px] cursor-not-allowed"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            </Button>
          ) : (
            <Button
              label="Submit"
              type="submit"
              className="bg-[#0D0F35] text-white-100 min-w-[64px] leading-7 py-[10px] px-[25px] w-[160px] mx-auto hover:bg-[#1F37B3] my-4"
            />
          )}
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
