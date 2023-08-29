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
interface FormRegisterProps {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
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

const FormVerifyEmail: React.FC<FormRegisterProps> = ({ setFormState }) => {
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
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
        console.log("onSubmit called:", e);
        setFormState("otp");
        reset();
      }, 3000);
    });
  };

  return (
    <form
      className="space-y-[25px] min-w-[384px] mt-4 relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" flex flex-col lg:flex-row gap-[80px] justify-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-[30px] leading-10 font-bold mb-2">
            Sign Up with Email
          </h1>
          <div className="flex flex-col items-center w-full mx-auto mt-4 mb-2 rounded-md ">
            <span className="text-sm text-black-400 self-start leading-5">
              Email / Phone Number
            </span>
            <div className="flex items-center bg-white-100 border rounded w-full justify-center">
              <div className="w-[40px] h-[40px]  mx-2 flex items-center  justify-center">
                <Image
                  alt="message icon"
                  className="w-7 h-7 opacity-40 "
                  src={letterIcon}
                ></Image>
              </div>
              <Input
                id="email"
                type="text"
                className="bg-white-200 rounded-lg"
                placeholder="Your email address"
                register={register}
              />
            </div>
          </div>
          {errors?.email && (
            <div className="text-red-500 text-sm mt-1 w-full font-medium absolute bottom-[35%]">
              {errors.email.message}
            </div>
          )}

          {isSubmitting ? (
            <div className="flex justify-center">
              <Button
                label="Send OTP"
                type="button"
                disabled={true}
                className=" bg-gray-300 text-white-100 font-semibold flex items-center justify-start py-3 px-6 w-[336px] rounded-[4px] leading-6 h-12 float-right"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 text-white animate-spin ml-3"
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
            </div>
          ) : (
            <div className="flex justify-center">
              <Button
                label="Send OTP"
                type="submit"
                className="flex items-center justify-start py-3 px-6 w-[336px] rounded-[4px] text-white-100 bg-blue-100 rounded min-h-[24px] min-w-[80px] border-[1px] border-blue-100 hover:bg-white-100 hover:text-blue-100"
              />
            </div>
          )}

          <div className="w-full mb-[40px] font-medium text-blue-100">
            <p className="text-sm font-light text-gray-600">
              Have an account?{" "}
              <Link
                href="/login"
                className="underline inline-block text-[#0d1c68] "
              >
                Log in here
              </Link>
            </p>
          </div>
        </div>
        <div className="lg:w-[424px] w-0"></div>
      </div>
    </form>
  );
};

export default FormVerifyEmail;
