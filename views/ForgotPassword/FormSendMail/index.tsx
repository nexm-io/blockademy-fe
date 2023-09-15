import Image from "next/image";
import React from "react";
import mailbox from "@/public/icons/mailbox.svg";

import Link from "next/link";
interface FormRegisterProps {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
}
const FormSendMail: React.FC<FormRegisterProps> = ({ setFormState }) => {
  return (
    <div className="flex flex-col items-center relative">
      <h2 className="mt-[40px] text-[#0D1C68] text-[18px] font-medium leading-6">
        Reset your Academy account
      </h2>
      <div className="mt-8 mb-1 w-[200px] h-auto">
        <Image alt="mailbox" src={mailbox} width={200}></Image>
      </div>

      <div className="text-right mt-6 w-[80%]">
        <p className="leading-6 font-light text-center mx-auto my-3 text-sm text-gray-800">
          Reset password link has been sent to your email. Please check your
          email and click on the link.
        </p>
      </div>

      <div className="w-full text-center mb-[40px]">
        <p className="text-sm font-light text-gray-600">
          Can&apos;t see email?{" "}
          <Link href="/forgot-password" passHref>
            <span
              onClick={() => {
                setFormState("forgot-password");
              }}
              className="underline text-blue-100 hover:no-underline"
            >
              Resend
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FormSendMail;
