"use client";

import Image from "next/image";
import React, { useState } from "react";
import mailbox from "@/public/icons/mailbox.svg";
import Button from "../Common/Button";
import Schema, { Rules } from "async-validator";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";

const validateDescriptor: Rules = {
  email: {
    type: "email",
    required: true,
  },
};

const NoSignal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailVal, setEmailVal] = useState<string | undefined>("");
  const [agreementCheck, setAgreementCheck] = useState<boolean>(false);

  const doSubscribe = () => {
    setIsLoading(true);
    const validator = new Schema(validateDescriptor);
    validator.validate({ email: emailVal }, (errors) => {
      if (errors) {
        setIsLoading(false);
        return toast("Email is not valid", { type: "error" });
      }

      if (!agreementCheck) {
        setIsLoading(false);
        return toast("Please agree to our Terms of Service", {
          type: "warning",
        });
      }

      axios
        .post(
          "https://script.google.com/macros/s/AKfycbxYF3PLORJplHL8Ue2ymmmZrq1kzImXiXZM7gP2YHffaoAKFFcLatcPiNUfYuHl82Sb/exec",
          { email: emailVal, app: "blockademy" },
          { headers: { "Content-Type": "multipart/form-data" } }
        )
        .then(() => {
          setEmailVal("");
          setAgreementCheck(false);
          return toast("Subscribe successfully", { type: "success" });
        })
        .catch(() => {
          return toast("Error occurs, please try again", { type: "error" });
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  return (
    <section className="bg-[#F5F5F5] py-[88px] mt-[60px]">
      <div className="container grid grid-cols-1 lg:grid-cols-3 items-center gap-[80px]">
        <Image
          alt="mailbox"
          src={mailbox}
          width={200}
          className="max-auto lg:ml-auto"
        ></Image>
        <div className="lg:col-start-2 lg:col-end-4">
          <p className="font-bold text-[56px] leading-[64px] text-black-400">
            No noise. Just signal.
          </p>
          <p className="text-[24px] leading-[32px] text-[#616161] font-normal mt-[14px]">
            Stay Updated with the Latest Courses, Article Updates, and More
          </p>
          <div className="mt-[24px] flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full outline-none border-none px-[15px] rounded-lg py-[14px]"
                value={emailVal}
                onChange={(e) => setEmailVal(e.target.value)}
              />
            </div>

            <Button
              className="w-full md:w-[184px]"
              onClick={doSubscribe}
              loading={isLoading}
              disabled={isLoading}
            >
              Subscribe
            </Button>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <input
              type="checkbox"
              checked={agreementCheck}
              onChange={() => setAgreementCheck(!agreementCheck)}
            />
            <p className="text-[#616161] text-base font-light">
              {`I have read and agree to Blockademy's`}{" "}
              <Link href="#" target="_blank" className="text-blue-100">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoSignal;
