import Image from "next/image";
import React from "react";
import mailbox from "@/public/icons/mailbox.svg";
import Button from "../Common/Button";
import logoText from "@/public/icons/logotext.svg";

const Footer = () => {
  return (
    <footer className="w-full relative mt-[60px] md:mt-[98px]">
      <div className="bg-gray-200 flex md:flex-row flex-col gap-[80px] md:gap-[150px] py-5 md:py-[66px]">
        <Image
          alt="mailbox"
          src={mailbox}
          className="ml-[100px]"
          width={200}
        ></Image>
        <div className="md:mr-[155px] mx-2 md:mx-0">
          <h2 className="text-[60px] font-bold leading-[72px] w-full md:w-[55%] mb-[10px]">
            Không ồn ào. Chỉ có tín hiệu.
          </h2>
          <p className="font-normal text-[20px] text-gray-100 mb-[33px]">
            Nhận thông tin mới nhất về tiền mã hóa được gửi đến email hằng tuần.
          </p>
          <div className="flex gap-2 mb-[22px]">
            <input
              type="text"
              placeholder="Nhập địa chỉ email của bạn"
              className="w-full outline-none border-none px-[19px] rounded-lg"
            />
            <Button
              label="Đăng ký"
              className="bg-white-100 text-black-100 h-[48px] w-[110px] rounded-lg btn__contain-shadow"
            ></Button>
          </div>
          <div className="flex gap-[11px]">
            <input type="checkbox" id="checkbox" />
            <p>
              Tôi đã đọc vào đồng ý với{" "}
              <span>Điều khoản Dịch vụ của Blockademy</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row items-center justify-center flex-col gap-3 md:justify-between py-8 px-4 md:px-[73px]">
        <Image
          alt="logo-footer"
          src={logoText}
          className="w-[150px] md:w-full"
        ></Image>
        <span className="text-gray-700 font-normal text-base ">
          Copyright © 2023. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
