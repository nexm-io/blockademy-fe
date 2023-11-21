"use client";
import * as Yup from "yup";
import React, { useState } from "react";
import FormReceiveUpdate from "./FormReceiveUpdate";
import { useAppDispatch } from "@/redux/hook";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/Common/Input";
import eyeCloseIcon from "@/public/icons/eyeclose.svg";
import eyeIcon from "@/public/icons/eye.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Common/Button";
import InfoGraphic from "./InfoGraphic";
import { toast } from "react-toastify";
import { userRegister } from "@/redux/features/auth/action";

const schema = Yup.object({
  email: Yup.string()
    .required("Please enter your email address")
    .email("Incorrect email format")
    .trim()
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
  first_name: Yup.string().required("Please enter your first name"),
  last_name: Yup.string().required("Please enter your last name"),
  password: Yup.string()
    .required("Please enter your password")
    .trim()
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
  password_confirmation: Yup.string()
    .trim()
    .oneOf([Yup.ref("password")], "The password confirmation does not match"),
});

const Register = () => {
  const [formState, setFormState] = useState("formRegister");
  const [togglePassword, setTogglePassword] = useState(false);
  const dispatch = useAppDispatch();
  const [mail, setMail] = useState({
    email: "",
    password: "",
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

  const onSubmit = async (e: FormData) => {
    setMail({
      email: e.email,
      password: e.password,
    });
    try {
      const res = await dispatch(userRegister({ ...e })).unwrap();
      res.success && setFormState("fromReceive");
      if (!res.success) {
        toast.error(res.response.data?.message);
      }
    } catch (e) {
      console.log(e);
    } finally {
      reset();
    }
  };

  return (
    <div
      className={`max-w-[1200px] px-6 my-[140px] relative mx-auto  bg-transparent rounded-3xl`}
    >
      <div className="flex flex-col items-center relative justify-center">
        {formState === "formRegister" && (
          <form
            className="space-y-[25px] w-full md:min-w-[384px] mt-4 relative"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className=" flex flex-col lg:flex-row gap-[80px] justify-center items-center">
              <div className="flex flex-col gap-6 w-full lg:w-[384px] md:p-0 px-5 md:w-[450px]">
                <h1 className="text-[30px] leading-10 font-bold mb-2">
                  Sign up with Email
                </h1>
                <div className="flex flex-col md:flex-row gap-6 md:gap-2">
                  <div className="flex flex-col items-center w-full mx-auto rounded-md ">
                    <span className="text-sm text-black-400 self-start leading-5 pl-1">
                      First name
                    </span>
                    <div className="flex items-center bg-white-100 border rounded w-full justify-center">
                      <Input
                        id="first_name"
                        name="first_name"
                        type="text"
                        className="bg-white-200 rounded-lg"
                        register={register}
                      />
                    </div>
                    {errors?.first_name && (
                      <div className="text-red-500 text-sm mt-1 w-full">
                        {errors.first_name.message}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-center w-full mx-auto rounded-md ">
                    <span className="text-sm text-black-400 self-start leading-5 pl-1">
                      Last name
                    </span>
                    <div className="flex items-center bg-white-100 border rounded w-full justify-center">
                      <Input
                        id="last_name"
                        name="last_name"
                        type="text"
                        className="bg-white-200 rounded-lg"
                        register={register}
                      />
                    </div>
                    {errors?.last_name && (
                      <div className="text-red-500 text-sm mt-1 w-full">
                        {errors.last_name.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-center w-full mx-auto rounded-md ">
                  <span className="text-sm text-black-400 self-start leading-5 pl-1">
                    Email
                  </span>
                  <div className="flex items-center bg-white-100 border rounded w-full justify-center">
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      className="bg-white-200 rounded-lg"
                      register={register}
                    />
                  </div>
                  {errors?.email && (
                    <div className="text-red-500 text-sm mt-1 w-full">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-center w-full mx-auto rounded-md ">
                  <span className="text-sm text-black-400 self-start leading-5">
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
                <div className="flex flex-col items-center w-full mx-auto rounded-md ">
                  <span className="text-sm text-black-400 self-start leading-5">
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

                <div className="w-full">
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    Create
                  </Button>
                </div>

                <div className="w-full text-blue-100 -mt-3">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="inline-block hover:underline text-blue-100 "
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              </div>
              <div className="hidden lg:block">
                <InfoGraphic />
              </div>
            </div>
          </form>
        )}
        {formState === "fromReceive" && <FormReceiveUpdate detail={mail} />}
      </div>
    </div>
  );
};

export default Register;
