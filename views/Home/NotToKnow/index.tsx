import React from "react";
import nottoknow from "@/public/icons/nottoknow.svg";
import Image from "next/image";
import Button from "@/components/Common/Button";

const NotToKnow = () => {
  return (
    <section className="mt-[76px]">
      <div className="flex md:flex-row flex-col gap-8 ">
        <div className="basis-[40%]">
          <Image
            alt="not-to-know"
            src={nottoknow}
            className="w-[200px] mx-auto"
          ></Image>
        </div>
        <div className="flex flex-col text-black-100 basis-[50%]">
          <h2 className="font-bold md:text-[37px] text-2xl leading-40px] text-center md:text-left">
            Bạn không hiểu nội dung vừa xem?
          </h2>
          <p className="font-normal leading-8 md:text-2xl text-base mt-2 text-center md:text-left">
            Đừng lo. Hướng dẫn đơn giản dành cho người mới bắt đầu của chúng tôi
            sẽ giúp bạn nắm rõ.
          </p>
          <div>
            <Button rounded className="mt-[29px]">
              Join here
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotToKnow;
