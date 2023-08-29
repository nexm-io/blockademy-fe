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
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must have a lowercase letter, a number and one special character"
    )
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
    console.log("onSubmit ~ data:", data);
    try {
      const response = await dispatch(
        loginAuth({
          ...data,
        })
      ).unwrap();
      response && push("/");
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      reset();
    }
  };
  return (
    <div className="max-w-[1200px] md:w-[405px] w-[350px] my-[100px] md:my-[140px] mx-auto rounded-3xl">
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
              Email / Phone Number
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
            <div className="prose">
              <Button
                label="Next"
                type="submit"
                className="bg-blue-100 w-full rounded-[4px] text-white-100 leading-7 py-[12px] btn__contain-shadow mt-2"
              />
            </div>
          )}

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
