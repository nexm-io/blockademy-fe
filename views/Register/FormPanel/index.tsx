"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = Yup.object({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  email: Yup.string()
    .required("Please enter your email address")
    .email("Incorrect email format")
    .trim()
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must have a lowercase letter, a number and one special character"
    ),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password")],
    "The password confirmation does not match"
  ),
});

const FormPanel = () => {
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

  const onSubmit = async (e: any) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("onSubmit called:", e);
        reset();
        push("/");
      }, 3000);
    });
  };

  return (
    <form className="w-full mt-4" onSubmit={handleSubmit(onSubmit)}>
      {/* first name */}
      <div className="flex items-center bg-gray-100 w-[80%] mx-auto mt-4 rounded-md ">
        <Input
          id="firstName"
          type="text"
          placeholder="Your first name"
          register={register}
        />
      </div>
      {errors?.firstName && (
        <div className="text-red-500 text-sm mt-1 w-[80%] mx-auto pl-5 font-medium">
          {errors.firstName.message}
        </div>
      )}
      {/* last name */}
      <div className="flex items-center bg-gray-100 w-[80%] mx-auto mt-4 rounded-md ">
        <Input
          id="lastName"
          type="text"
          placeholder="Your last name"
          register={register}
        />
      </div>
      {errors?.lastName && (
        <div className="text-red-500 text-sm mt-1 w-[80%] mx-auto pl-5 font-medium">
          {errors.lastName.message}
        </div>
      )}

      {/* Email */}
      <div className="flex items-center bg-gray-100 w-[80%] mx-auto mt-4 rounded-md ">
        <Input
          id="email"
          type="text"
          placeholder="Your email address"
          register={register}
        />
      </div>
      {errors?.email && (
        <div className="text-red-500 text-sm mt-1 w-[80%] mx-auto pl-5 font-medium">
          {errors.email.message}
        </div>
      )}
      {/* Phone */}
      <div className="flex items-center bg-gray-100 w-[80%] mx-auto mt-4 rounded-md ">
        <Input
          id="phone"
          type="text"
          placeholder="Your phone number"
          register={register}
        />
      </div>
      {errors?.phone && (
        <div className="text-red-500 text-sm mt-1 w-[80%] mx-auto pl-5 font-medium">
          {errors.phone.message}
        </div>
      )}

      {/* Password */}
      <div className="flex items-center bg-gray-100 w-[80%] mx-auto mt-4 rounded-md ">
        <Input
          id="password"
          type="password"
          placeholder="Your password"
          register={register}
        />
      </div>
      {errors?.password && (
        <div className="text-red-500 text-sm mt-1 w-[80%] mx-auto pl-5 font-medium">
          {errors.password.message}
        </div>
      )}

      {/* Confirm password */}
      <div className="flex items-center bg-gray-100 w-[80%] mx-auto mt-4 rounded-md ">
        <Input
          id="confirm_password"
          type="password"
          placeholder="Your confirm password"
          register={register}
        />
      </div>
      {errors?.confirm_password && (
        <div className="text-red-500 text-sm mt-1 w-[80%] mx-auto pl-5 font-medium">
          {errors.confirm_password.message}
        </div>
      )}

      {/* Button */}
      {isSubmitting ? (
        <Button type="button" className=" bg-gray-300 mb-4 mt-8">
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
          label="Confirm"
          type="submit"
          className="bg-[#CF1818] hover:opacity-70 my-8"
        />
      )}
    </form>
  );
};

export default FormPanel;
