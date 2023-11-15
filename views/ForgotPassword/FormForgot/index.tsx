"use client";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import { forgotAuth } from "@/redux/features/auth/action";
import { useAppDispatch } from "@/redux/hook";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string()
    .required("Please enter your email address")
    .email("Incorrect email format")
    .trim()
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
});
interface FormRegisterProps {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
}
type FormForgot = Yup.InferType<typeof schema>;
const FormForgot: React.FC<FormRegisterProps> = ({ setFormState }) => {
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
  const onSubmit = async (data: FormForgot) => {
    try {
      const res = await dispatch(
        forgotAuth({
          ...data,
        })
      ).unwrap();
      res.success && setFormState("formsendmail");
      if (res.response.data?.error) {
        toast.error(res.response.data?.message);
        return;
      }
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };
  return (
    <div className="flex flex-col relative">
      <h2 className="mt-[40px] text-black-100 text-center text-[30px] font-bold ">
        Forgot your Blockademy account?
      </h2>
      <form className="w-full mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1">
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
        <Button
          type="submit"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Submit
        </Button>

        <div className="w-full text-center mt-3 mb-[40px]">
          <p className="text-sm font-light text-gray-600">
            Dont&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-blue-100 hover:underline cursor-pointer inline-block"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormForgot;
