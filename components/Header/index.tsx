"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";
import Button from "../Common/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logoutAuth, setRefUrl } from "@/redux/features/auth/action";
import { toast } from "react-toastify";
import { hideEmail } from "@/utils/hideEmail";
import { getAccountDetail } from "@/redux/features/account/action";
import userDefault from "@/public/images/course/default-avatar.png";
import cn from "@/services/cn";
import { MENU } from "@/utils/constants";
import { usePathname } from "next/navigation";
import { PlusLg } from "@styled-icons/bootstrap";
import { Minus } from "@styled-icons/boxicons-regular";
import Socials from "../Socials";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isShowMenu, setShowMenu] = useState<boolean>(false);
  const [isShowAccountMenu, setIsShowAccountMenu] = useState<boolean>(false);
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const data = useSelector((state: RootState) => state.auth.user);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const userIconRef = useRef<HTMLDivElement | null>(null);
  const userId = useAppSelector((state) => state.auth.user?.id || 0);
  const token = useAppSelector((state) => state.auth.token);
  const userAccount = useAppSelector((state) => state.account.data);
  const [email, setEmail] = useState<string>();
  const [image, setImage] = useState<string>();

  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !userIconRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (userId) dispatch(getAccountDetail({ userId: userId }));
  }, [dispatch, userId]);

  const handleUserIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutAuth()).unwrap();
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error("Logout Failed");
      localStorage.clear();
    }
  };

  useEffect(() => {
    if (data !== null) setEmail(hideEmail(data.email));
  }, [data]);
  useEffect(() => {
    setImage(userAccount?.image);
  }, [userAccount]);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 767 && setShowMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="h-[96px]"></div>
      <header className="bg-white-100 text-black top-0 left-0 right-0 fixed z-[997] min-h-[74px]">
        <div
          className={cn(
            `container relative flex items-center justify-between py-[18px] lg:py-[23px]`,
            {
              active: isShowMenu,
            }
          )}
        >
          <div className="hidden md:flex md:w-full max-w-[230px] sm:max-w-[unset] sm:w-[40%] items-center gap-[105px] flex-1 md:flex-[unset] justify-center md:justify-start">
            <Link href="/" className="h-[49px]">
              <Image alt="logo" className="h-full" src={logo} width={164} height={49}></Image>
            </Link>
            <div className="md:flex gap-[50px] text-base font-normal text-black-100 hidden">
              {MENU.map((z) => (
                <Link
                  href={z.pathname}
                  key={z.key}
                  className={cn(`hover:text-blue-100`, {
                    "text-blue-100": z.activePathname.some((pattern) =>
                      new RegExp(pattern).test(pathName)
                    ),
                  })}
                >
                  {z.label}
                </Link>
              ))}
              <a
                href="mailto:contact@blockademy.ai"
                className={cn(`hover:text-blue-100`)}
                target="_blank"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 block md:hidden">
            <Link href="/">
              <Image alt="logo" src={logo} width={164} height={49}></Image>
            </Link>
          </div>
          <div className="gap-2 w-auto prose hidden md:flex md:justify-normal justify-end">
            {isAuthenticated && token ? (
              <div className="flex gap-2 items-center">
                <div
                  className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] relative not-prose select-none"
                  ref={userIconRef}
                >
                  <Image
                    alt="avatar-user"
                    src={image || userDefault}
                    width={50}
                    height={50}
                    className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] rounded-full select-none object-cover cursor-pointer"
                    onClick={handleUserIconClick}
                  ></Image>

                  {isOpen && (
                    <ul
                      className="absolute w-[280px] sm:w-[400px] top-[50px] sm:top-[70px] right-0 py-[40px] px-[20px] bg-white-100 border rounded-lg shadow-[0_4px_20px_0_rgba(0,0,0,0.15)]"
                      ref={dropdownRef}
                    >
                      <div
                        className="flex items-center pb-[24px] cursor-pointer"
                        onClick={() => router.push("/account-setting")}
                      >
                        <Image
                          alt="avatar-user"
                          src={image || userDefault}
                          width={50}
                          height={50}
                          className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] rounded-full select-none object-cover"
                        />
                        <div className="font-bold ml-[8px] text-ellipsis max-w-[300px] overflow-hidden">
                          {email}
                        </div>
                      </div>
                      <ul className="capitalize flex flex-col border-t border-solid border-[#EDEDED]">
                        {/* <li className=" px-4 ">
                        <Link className="hover:text-blue-100 " href="/my-account">
                          My Account
                        </Link>
                      </li>
                      <li className=" px-4 ">
                        <Link className="hover:text-blue-100 " href="/my-courses">
                          My Courses
                        </Link>
                      </li>
                      {/* <li className=" px-4 ">
                        <Link className="hover:text-blue-100 " href="/courses">
                          My Courses
                        </Link>
                      </li> */}
                        <li className="pt-[16px]">
                          <Link
                            className="hover:text-blue-100 "
                            href="/my-learning"
                          >
                            My Learning
                          </Link>
                        </li>
                        <li className="pt-[16px]">
                          <Link
                            className="hover:text-blue-100 "
                            href="/accomplishments"
                          >
                            Accomplishments
                          </Link>
                        </li>
                        <li className="w-full pt-6">
                          <button
                            className="bg-red-200/10 leading-normal w-full hover:bg-red-200 hover:text-white-100 py-[13px] text-red-200 flex items-center justify-center rounded-[4px] transition-all duration-200 ease-linear"
                            onClick={handleLogout}
                          >
                            <span className="block text-base leading-6">
                              Logout
                            </span>
                          </button>
                        </li>
                      </ul>
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    size="small"
                    onClick={() => dispatch(setRefUrl(pathName))}
                    outlined
                    className="w-[94px]"
                  >
                    Log in
                  </Button>
                </Link>
              </>
            )}
          </div>
          <div
            className="-order-2 hambuger block md:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <span></span>
          </div>
          <div
            className={cn(
              "fixed top-0 left-0 right-0 bottom-0 transition-all duration-[0.6s] ease-in-out invisible",
              { "!visible": isShowMenu }
            )}
          >
            <div
              className={cn(
                "absolute inset-0 bg-black-100/30 invisible opacity-0 transition-all duration-[0.6s] ease-in-out",
                { "!visible opacity-100": isShowMenu }
              )}
              onClick={() => setShowMenu(false)}
            ></div>
            <div
              className={cn(
                "h-full gap-6 grid justify-between grid-cols-1 text-base font-normal text-black-100  max-w-[320px] bg-white-100 relative z-[10] pt-12 pb-6 transition-all duration-[0.6s] ease-in-out left-0 right-0 bottom-0 -translate-x-full px-4",
                { "!translate-x-0": isShowMenu }
              )}
            >
              <div className="w-full">
                {isAuthenticated && token ? (
                  <div className="">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center py-[24px]">
                        <Image
                          alt="avatar-user"
                          src={image || userDefault}
                          width={50}
                          height={50}
                          className="w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] rounded-full select-none object-cover"
                        />
                        <div className="font-light ml-[8px] text-base text-ellipsis max-w-[300px] overflow-hidden">
                          {email}
                        </div>
                      </div>
                      {isShowAccountMenu ? (
                        <Minus
                          size={20}
                          className="text-[#1E2329] cursor-pointer"
                          onClick={() =>
                            setIsShowAccountMenu(!isShowAccountMenu)
                          }
                        />
                      ) : (
                        <PlusLg
                          size={20}
                          className="text-[#1E2329] cursor-pointer"
                          onClick={() =>
                            setIsShowAccountMenu(!isShowAccountMenu)
                          }
                        />
                      )}
                    </div>

                    <div
                      className={cn(`relative overflow-hidden transition-all`, {
                        "h-0": !isShowAccountMenu,
                        "h-[96px]": isShowAccountMenu,
                      })}
                    >
                      <div className="grid gap-6 pb-4 ml-10">
                        <Link
                          href="/my-learning"
                          className="hover:text-blue-100 font-light text-xl text-[#616161]"
                          onClick={() => setShowMenu(false)}
                        >
                          My Learning
                        </Link>
                        <Link
                          href="/accomplishments"
                          className="hover:text-blue-100 font-light text-xl text-[#616161]"
                          onClick={() => setShowMenu(false)}
                        >
                          Accomplishments
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-[24px]">
                    <Link href="/login">
                      <Button
                        outlined
                        className="w-full"
                        onClick={() => {
                          dispatch(setRefUrl(pathName));
                          setShowMenu(false);
                        }}
                      >
                        Log in
                      </Button>
                    </Link>
                  </div>
                )}

                <div className="border-t border-[#EDEDED] pt-4 grid gap-6">
                  {MENU.map((z) => (
                    <Link
                      href={z.pathname}
                      key={z.key}
                      onClick={() => setShowMenu(false)}
                      className={cn(
                        `hover:text-blue-100 font-light text-xl text-[#616161]`,
                        {
                          "text-blue-100": z.activePathname.includes(pathName),
                        }
                      )}
                    >
                      {z.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <p className="font-light text-xl mb-2">Contact</p>
                <a
                  className="text-base text-[#616161]"
                  href="mailto:contact@blockademy.ai"
                >
                  contact@blockademy.ai
                </a>
                <div className="mt-2 mb-6">
                  <Socials />
                </div>
                {isAuthenticated && token ? (
                  <button
                    className="bg-red-200/10 leading-normal w-full hover:bg-red-200 hover:text-white-100 py-[13px] text-red-200 flex items-center justify-center rounded-[4px] transition-all duration-200 ease-linear"
                    onClick={handleLogout}
                  >
                    <span className="block text-base leading-6">Logout</span>
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
