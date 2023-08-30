"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { loginAuth } from "@/redux/features/auth/action";
import keyIcon from "@/public/icons/key.svg";
import eyeCloseIcon from "@/public/icons/eyeclose.svg";
import eyeIcon from "@/public/icons/eye.svg";
import Image from "next/image";
const schema = Yup.object({
  email: Yup.string()
    .required("Please enter your email address")
    .email("Incorrect email format")
    .trim()
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
});

type FormLogin = Yup.InferType<typeof schema>;

const Login = () => {
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
  const onSubmit = async (data: FormLogin) => {
    try {
      const response = await dispatch(
        loginAuth({
          ...data,
        })
      ).unwrap();
      response.success && push("/");
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      reset();
    }
  };
  return (
    <div className="max-w-[1200px] md:w-[405px] w-[350px] my-[140px] mx-auto rounded-3xl">
      <div className="flex flex-col relative">
        <h2 className="text-black-100 text-[30px] font-bold leading-6">
          Log in
        </h2>
        <form className="w-full mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-[29px] mb-1">
            <label
              htmlFor="email"
              className="text-black-100 text-sm font-normal leading-5 cursor-pointer"
            >
              Email
            </label>
          </div>
          <div className="flex items-center border border-white-300 w-full rounded-md bg-white-100">
            <Input id="email" type="text" register={register} name="email" />
          </div>
          {errors?.email && (
            <div className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </div>
          )}

          <div className="mt-3 mb-1">
            <label
              htmlFor="password"
              className="text-black-100 text-sm font-normal leading-5 cursor-pointer"
            >
              Password
            </label>
          </div>
          <div className="flex items-center border border-white-300 w-full rounded-md bg-white-100">
            <Input
              name="password"
              id="password"
              type={togglePassword ? "text" : "password"}
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
          <div className="text-right w-full text-gray-300 font-normal text-sm">
            <Link href="/forgot-password">Forgot password?</Link>
          </div>
          <Button
            type="submit"
            fullWidth
            loading={isSubmitting}
            disabled={isSubmitting}
            className="mt-8"
          >
            Submit
          </Button>

          <div className="w-full mt-3">
            <Link
              href="/register"
              className="inline-block hover:underline text-blue-100 "
            >
              Create a Blockademy Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
