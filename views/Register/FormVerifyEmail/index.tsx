"use client";
import React from "react";
import Button from "@/components/Common/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@/components/Common/Input";
import Link from "next/link";
import InfoGraphic from "../InfoGraphic";
interface FormRegisterProps {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
  onMailChange: (key: string, value: string) => void;
}

const schema = Yup.object({
  email: Yup.string()
    .required("Please enter your email address")
    .email("Incorrect email format")
    .trim()
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
  first_name: Yup.string().required("Please enter your first name"),
  last_name: Yup.string().required("Please enter your last name"),
});
type FormData = Yup.InferType<typeof schema>;

const FormVerifyEmail: React.FC<FormRegisterProps> = ({
  setFormState,
  onMailChange,
}) => {
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
    onMailChange("email", e.email);
    onMailChange("first_name", e.first_name);
    onMailChange("last_name", e.last_name);
    setFormState("formRegister");
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
          <div className="flex flex-col items-center w-full mx-auto mt-4 mb-2 rounded-md ">
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
              className="w-full"
            >
              Next
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
