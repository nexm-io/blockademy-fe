"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { loginAuth, loginWithGoogle } from "@/redux/features/auth/action";
import eyeCloseIcon from "@/public/icons/eyeclose.svg";
import eyeIcon from "@/public/icons/eye.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { selectAuth } from "@/redux/features/auth/reducer";
import { Google } from "@/components/Icon";
import { googleProvider } from "@/services/google";

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
  const { token, isAuthenticated, urlRef } = useAppSelector(selectAuth);
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
      push(urlRef);
      toast.success("Login Successfully");
    }
    response.error && toast.error(response.message);

    reset({
      password: "",
    });
  };

  const login = googleProvider.useGoogleLogin({
    flow: "implicit",
    onSuccess: (res: any) => dispatch(loginWithGoogle(res.access_token)),
    onError: () => console.error("Failed to login with google"),
  });

  useEffect(() => {
    if (isAuthenticated && token) {
      push("/");
    }
  }, [isAuthenticated, token]);

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

            <div>
              <Button
                type="submit"
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                Log in
              </Button>
              <div className="my-6 h-[1px] bg-grey-300 relative">
                <span className="text-black-100 bg-white-100 px-6 font-normal leading-5 absolute -top-2 left-1/2 -translate-x-1/2 text-xs">
                  OR
                </span>
              </div>
              <button
                onClick={login}
                type="button"
                className="flex items-center justify-center bg-white-100 border border-grey-300 rounded px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-200 transition-all w-full"
              >
                <Google className="h-6 w-6 mr-2" />
                <span>Login with Google</span>
              </button>
            </div>
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
