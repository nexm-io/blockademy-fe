import React from "react";
import nottoknow from "@/public/icons/nottoknow.svg";
import Image from "next/image";
import Button from "@/components/Common/Button";

const NotToKnow = () => {
  return (
    <section className="mt-[76px]">
      <div className="flex md:flex-row flex-col gap-8 md:gap-[64px]">
        <Image
          alt="not-to-know"
          src={nottoknow}
          className="w-[200px] mx-auto"
        ></Image>
        <div className="flex flex-col text-black-100">
          <h2 className="font-bold md:text-[37px] text-2xl leading-40px]">
            Bạn không hiểu nội dung vừa xem?
          </h2>
          <p className="font-normal leading-8 md:text-2xl text-base mt-2">
            Đừng lo. Hướng dẫn đơn giản dành cho người mới bắt đầu của chúng tôi
            sẽ giúp bạn nắm rõ.
          </p>
          <Button
            label="Get start"
            className="lg:w-[165px] w-[130px] text-[14px] bg-blue-100 text-white-100 h-[40px] lg:h-[48px] py-[2px] px-[24px] font-semibold leading-[24px] text-center btn__contain-shadow mt-[29px]"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default NotToKnow;
