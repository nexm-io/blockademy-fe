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
      <header className={`bg-white-100 text-black w-full top-0 left-0 fixed z-[999] min-h-[74px] ${soleil.variable} font-sans`}>
        <div className="relative md:mx-[75px] mx-1 flex items-center justify-between py-4">
          <Link href="/" className="relative">
            <Image src={logo} alt="Wink" className="mx-auto" />
          </Link>
        </div>
      </header>
        <div className={`w-full relative ${soleil.variable} font-sans`}>{children}</div>
    </>
  );
}
