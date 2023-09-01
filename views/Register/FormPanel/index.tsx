"use client";
import eyeCloseIcon from "@/public/icons/eyeclose.svg";
import eyeIcon from "@/public/icons/eye.svg";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { userRegister } from "@/redux/features/auth/action";
import Button from "@/components/Common/Button";
import Image from "next/image";
import Input from "@/components/Common/Input";
import { useAppDispatch } from "@/redux/hook";
import InfoGraphic from "../InfoGraphic";
const schema = Yup.object({
<<<<<<< HEAD
  password: Yup.string().required("Please enter your password")
  .trim()
  .min(6, "Length from 6 - 160 characters")
  .max(160, "Length from 6 - 160 characters"),
=======
  password: Yup.string()
    .required("Please enter your password")
    .trim()
    .min(8, "Length from 8 - 160 characters")
    .max(160, "Length from 8 - 160 characters"),
>>>>>>> 5db4962c71e8e71111d8e740915b6cd9e7789efd
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Password must have a lowercase letter, a number and one special character"
  // ),
  password_confirmation: Yup.string()
    .trim()
    .oneOf([Yup.ref("password")], "The password confirmation does not match"),
});

interface FormRegisterProps {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  onMailChange: (key: string, value: string) => void;
}

const FormPanel: React.FC<FormRegisterProps> = ({
  setFormState,
  email,
  onMailChange,
}) => {
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

  type FormData = Yup.InferType<typeof schema>;

  const onSubmit = async (e: FormData) => {
    onMailChange("password", e.password);
    try {
      const res = await dispatch(userRegister({ email, ...e })).unwrap();
      res.success && setFormState("fromReceive");
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
      <div className="flex flex-col lg:flex-row gap-[80px] justify-center items-center">
        <div className="md:min-w-[384px] w-full lg:w-[384px] md:p-0 px-5 md:w-[450px]">
          <h1 className="text-[30px] leading-10 font-bold mb-10">
            Set Password
          </h1>
          <div className="flex flex-col items-center w-full mx-auto mt-4 mb-6 rounded-md ">
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
          <div className="flex flex-col items-center w-full mx-auto mt-4 mb-6 rounded-md ">
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
          <Button
            fullWidth
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </div>
        <InfoGraphic />
      </div>
    </form>
  );
};

export default FormPanel;
