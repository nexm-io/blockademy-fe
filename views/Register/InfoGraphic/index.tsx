import React from 'react'
import Link from "next/link";
import Image from "next/image";
import registerbg from "@/public/icons/registerbg.svg";

export default function InfoGraphic() {
  return (
    <div className="w-[424px]">
          <div className="px-9">
            <Image
              alt="background"
              src={registerbg}
              width={400}
              height={222}
              className=""
            />
          </div>
          <p className="text-sm leading-[22px] mt-9 mb-5 text-center max-w-[440px]">
            Follow the registration steps to redeem your rewards and start your
            crypto journey with us!
          </p>
        </div>
  )
}
