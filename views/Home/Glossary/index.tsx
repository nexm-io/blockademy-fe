import Image from "next/image";
import React from "react";
import search from "@/public/icons/search.svg";
import Button from "@/components/Common/Button";
import arrowright from "@/public/icons/righticon.svg";

const Glossary = () => {
  return (
    <section className="md:mt-[106px] mt-[60px]">
      <div className="flex md:flex-row flex-col gap-[60px] pl-4">
        <div className="flex flex-col ">
          <span className="text-blue-100 font-bold text-[60px] md:text-[80px] leading-[72px]">
            25
          </span>
          <p className="text-gray-100 text-[20px] font-normal mt-[20px] md:mb-[67px] mb-5">
            Đây là số lượng thuật ngữ trong bảng thuật ngữ của chúng tôi. Bạn
            biết bao nhiêu trong số này?
          </p>
          <div className="flex items-center gap-[15px] border-b border-gray-300 w-[283px] p-2">
            <Image alt="search-icon" src={search}></Image>
            <input
              id="glossary"
              placeholder="Tìm kiếm bảng thuật ngữ"
              className="outline-none border-none"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 md:mr-5 mr-0 lg:mr-0">
          <div className="w-[358px] bg-white-100 card-shadow rounded-2xl p-6 text-black-100 flex flex-col justify-between">
            <div>
              <div className="rounded-full bg-black-100 text-white-100 text-[11px] flex items-center justify-center w-fit h-[22px] py-1 px-[15px]">
                Bảng thuật ngữ
              </div>
              <h2 className="text-[30px] font-bold my-4">Các zk-SNARK</h2>
              <span className="line w-[32px] h-[4px] bg-blue-100 rounded-[4px] block mb-4"></span>
              <p className="font-normal text-base">
                “Zero-Knowledge Succinct Non- Interactive Argument of knowledge.
                Đối số Zero-knowledge không tương tác cô đọ...
              </p>
            </div>
            <div>
              <Button
                label="Định nghĩa đầy đủ"
                className="text-sm font-normal leading-[20px] bg-gray-200 rounded-lg h-[40px] w-[195px] mt-[32px] flex gap-4 btn__contain-shadow"
              >
                <Image alt="arrowright" src={arrowright}></Image>
              </Button>
            </div>
          </div>
          <div className="w-[358px] bg-white-100 card-shadow rounded-2xl p-6 text-black-100 flex flex-col justify-between">
            <div>
              <div className="rounded-full bg-black-100 text-white-100 text-[11px] flex items-center justify-center w-fit h-[22px] py-1 px-[15px]">
                Bảng thuật ngữ
              </div>
              <h2 className="text-[30px] font-bold my-4">Cây Merkle</h2>
              <span className="line w-[32px] h-[4px] bg-blue-100 rounded-[4px] block mb-4"></span>
              <p className="font-normal text-base">
                Một cách tổ chức và cấu trúc một lượng lớn dữ liệu để xử lý dễ
                dàng hơn. Một cấu trúc dữ liệu dựa trên hàm ...
              </p>
            </div>
            <div>
              <Button
                label="Định nghĩa đầy đủ"
                className="text-sm font-normal leading-[20px] bg-gray-200 rounded-lg h-[40px] w-[195px] mt-[32px] flex gap-4 btn__contain-shadow"
              >
                <Image alt="arrowright" src={arrowright}></Image>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glossary;
