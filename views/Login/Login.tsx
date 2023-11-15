"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { loginAuth } from "@/redux/features/auth/action";

import eyeCloseIcon from "@/public/icons/eyeclose.svg";
import eyeIcon from "@/public/icons/eye.svg";
import Image from "next/image";

import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

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
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const token = useSelector((state: RootState) => state.auth.token);
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
    const response = await dispatch(
      loginAuth({
        ...data,
      })
    ).unwrap();
    if (response.success) {
      push("/");
      toast.success("Login Successfully");
    }
    response.error && toast.error(response.message);

    reset({
      password: "",
    });
  };
  useEffect(() => {
    if (isAuthenticated && token) {
      push("/");
    }
  }, [isAuthenticated, push]);
  return (
    <div className="max-w-[1200px] md:w-[448px] w-[350px] my-[140px] px-6 mx-auto">
      <div className="flex flex-col relative">
        <h2 className="text-black-100 text-[30px] leading-8 font-bold text-center">
          Log in
        </h2>
        <form
          className="flex flex-col gap-3 mt-8 -mx-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="email"
                className="text-black-100 text-sm font-normal leading-5 cursor-pointer"
              >
                Email
              </label>
              <div className="flex items-center border border-white-300 w-full rounded-md bg-white-100">
                <Input
                  id="email"
                  type="text"
                  register={register}
                  name="email"
                />
              </div>
              {errors?.email && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-black-100 text-sm font-normal leading-5 cursor-pointer"
              >
                Password
              </label>
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
            </div>

            <Button
              type="submit"
              fullWidth
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center md:justify-between gap-3">
            <Link
              href="/forgot-password"
              className="block text-center md:text-left text-gray-300 hover:underline cursor-pointer text-sm"
            >
              Forgot password?
            </Link>
            <Link
              href="/register"
              className="block text-center md:text-left text-blue-100 hover:underline cursor-pointer text-sm"
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
