import Image from "next/image";
import Link from "next/link";
import logo from "@/public/icons/logo.svg";
import { soleil } from "@/utils/constants";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-white-100 text-black top-0 left-0 right-0 fixed z-[997] min-h-[74px]">
        <div className="container py-4">
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <Image alt="logo" src={logo} width={187} height={35}></Image>
            </Link>
          </div>
        </div>
      </header>
      <div className={`w-full relative ${soleil.variable} !font-sans`}>
        {children}
      </div>
    </>
  );
}
