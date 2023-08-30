"use client";
import React from "react";
import Button from "@/components/Common/Button";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@/components/Common/Input";
import letterIcon from "@/public/icons/letter.svg";
import Link from "next/link";
import InfoGraphic from "../InfoGraphic";
import { sendOtp } from "@/redux/features/auth/action";
import { useAppDispatch } from "@/redux/hook";
interface FormRegisterProps {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
  onMailChange: (newMail: string) => void;
}

const schema = Yup.object({
  email: Yup.string()
    .required("Please enter your email address")
    .email("Incorrect email format")
    .trim()
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
});
type FormData = Yup.InferType<typeof schema>;

const FormVerifyEmail: React.FC<FormRegisterProps> = ({
  setFormState,
  onMailChange,
}) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (e: FormData) => {
    onMailChange(e.email);
    try {
      const res = await dispatch(sendOtp(e)).unwrap();
      res.success && setFormState("otp");
    } catch (e) {
      console.error("Some thing wrong!", e);
    } finally {
      reset();
    }
  };

  return (
    <form
      className="space-y-[25px] w-full md:min-w-[384px] mt-4 relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" flex flex-col lg:flex-row gap-[80px] justify-center items-center">
        <div className="flex flex-col gap-6 w-full lg:w-[384px] md:p-0 px-5 md:w-[450px]">
          <h1 className="text-[30px] leading-10 font-bold mb-2">
            Sign Up with Email
          </h1>
          <div className="flex flex-col items-center w-full mx-auto mt-4 mb-2 rounded-md ">
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

          <div className="w-full">
            <Button
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              className="!bg-red-500 hover:!bg-red-100 w-full"
            >
              Send OTP
            </Button>
          </div>

          <div className="w-full mb-[40px] text-blue-100">
            <p className="text-sm text-gray-600">
              Have an account?{" "}
              <Link
                href="/login"
                className="inline-block hover:underline text-blue-100 "
              >
                Log in here
              </Link>
            </p>
          </div>
        </div>
        <InfoGraphic />
      </div>
    </form>
  );
};

export default FormVerifyEmail;
