import Image from "next/image";
import React from "react";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";

const IcnFacebook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
        fill="white"
      />
    </svg>
  );
};

const IcnTwitter = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 20.9978H20.894C19.1813 20.9978 17.4684 20.9985 15.7553 20.9998C15.6718 20.9998 15.6217 20.9766 15.5747 20.9094C14.5927 19.5066 13.6095 18.1048 12.625 16.7038C12.0062 15.822 11.3869 14.9405 10.7673 14.0592C10.7553 14.0439 10.7425 14.0292 10.729 14.0152L10.1987 14.6171C8.81654 16.1882 7.43449 17.7593 6.0525 19.3305C5.58612 19.8608 5.12075 20.3918 4.6564 20.9233C4.63658 20.9488 4.61063 20.9691 4.58085 20.9824C4.55107 20.9957 4.51839 21.0016 4.48571 20.9996C3.99919 20.996 3.51267 20.9978 3 20.9978L10.0266 13.0072L3.00405 3.00931C3.0446 3.00634 3.07237 3.00238 3.10034 3.00238C4.82343 3.00238 6.54652 3.00159 8.26961 3C8.34746 3 8.38313 3.03409 8.42064 3.0878C8.9723 3.87461 9.52436 4.66077 10.0768 5.44626C10.9846 6.73846 11.8924 8.03072 12.8003 9.32305C12.8666 9.41759 12.9337 9.51193 13.0069 9.61558C13.1456 9.45881 13.2779 9.31017 13.4093 9.16093L17.7788 4.19172C18.1089 3.81634 18.4377 3.44018 18.7703 3.06699C18.8018 3.03152 18.8458 3.009 18.8936 3.00396C19.3766 2.9996 19.8597 3.00119 20.343 3.00139C20.3586 3.00139 20.3744 3.00377 20.4087 3.00654L13.7119 10.6218L21 20.9978ZM5.16319 4.1719C5.18346 4.20202 5.19278 4.21808 5.20373 4.23334C6.09325 5.47784 6.98284 6.72207 7.87249 7.96605C9.45044 10.1739 11.0282 12.3817 12.6057 14.5894C13.849 16.3291 15.0917 18.069 16.3337 19.8093C16.3742 19.8662 16.416 19.883 16.4825 19.883C17.2258 19.8813 17.9691 19.8813 18.7123 19.883H18.822C18.7922 19.8388 18.7762 19.814 18.7592 19.7899C17.6973 18.3049 16.6356 16.8198 15.5739 15.3346C14.503 13.835 13.4324 12.3355 12.3621 10.836C11.2928 9.3397 10.2235 7.8437 9.15406 6.34802C8.65309 5.64775 8.15163 4.94748 7.64971 4.24721C7.62619 4.21451 7.58078 4.17527 7.54531 4.17507C6.75816 4.17091 5.97101 4.1719 5.16319 4.1719Z"
        fill="white"
      />
    </svg>
  );
};

const IcnLinkedin = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.5 2H3.5C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5V20.5C2 20.8978 2.15804 21.2794 2.43934 21.5607C2.72064 21.842 3.10218 22 3.5 22H20.5C20.8978 22 21.2794 21.842 21.5607 21.5607C21.842 21.2794 22 20.8978 22 20.5V3.5C22 3.10218 21.842 2.72064 21.5607 2.43934C21.2794 2.15804 20.8978 2 20.5 2ZM8 19H5V10H8V19ZM6.5 8.25C6.15618 8.24017 5.82288 8.12924 5.54175 7.93108C5.26062 7.73291 5.04411 7.45629 4.9193 7.13578C4.79448 6.81527 4.76687 6.46508 4.83994 6.12897C4.913 5.79286 5.0835 5.48574 5.33011 5.24597C5.57673 5.00621 5.88853 4.84443 6.22656 4.78086C6.5646 4.71729 6.91387 4.75475 7.23074 4.88854C7.5476 5.02234 7.81802 5.24655 8.00819 5.53315C8.19836 5.81975 8.29986 6.15604 8.3 6.5C8.2921 6.97035 8.09834 7.41845 7.76105 7.74637C7.42376 8.07428 6.97039 8.25535 6.5 8.25ZM19 19H16V14.26C16 12.84 15.4 12.33 14.62 12.33C14.3913 12.3452 14.1679 12.4055 13.9625 12.5073C13.7572 12.6091 13.574 12.7505 13.4235 12.9234C13.273 13.0962 13.1581 13.2971 13.0854 13.5144C13.0127 13.7318 12.9837 13.9614 13 14.19C12.995 14.2365 12.995 14.2835 13 14.33V19H10V10H12.9V11.3C13.1925 10.855 13.5944 10.4926 14.0672 10.2474C14.54 10.0023 15.0677 9.88267 15.6 9.9C17.15 9.9 18.96 10.76 18.96 13.56L19 19Z"
        fill="white"
      />
    </svg>
  );
};

const LINKS = [
  {
    label: "Terms",
    href: "/pdf/Terms_of_Use.pdf",
    target: "_blank",
  },
  {
    label: "Privacy Policy",
    href: "/pdf/Privacy_Policy.pdf",
    target: "_blank",
  },
  {
    label: "Help & Support",
    href: "#",
    target: "_blank",
  },
  {
    label: "Contact us",
    href: "mailto:contact@blockademy.ai",
    target: "_blank",
  },
];

const SOCIALS = [
  {
    name: "facebook",
    href: "https://www.facebook.com/blockademyai",
    icon: <IcnFacebook />,
    target: "_blank",
  },
  {
    name: "twitter",
    href: "https://twitter.com/blockademy_ai",
    icon: <IcnTwitter />,
    target: "_blank",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/blockademy.ai",
    icon: <IcnLinkedin />,
    target: "_blank",
  },
];

const Footer = () => {
  return (
    <footer className="py-[28px] grid gap-6 mt-6">
      <div className="container flex flex-col gap-4 lg:flex-row justify-between items-center">
        <Link href="/">
          <Image
            alt="logo"
            width={164}
            height={49}
            src={logo}
            className=""
          ></Image>
        </Link>
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[60px]">
          {LINKS.map((z, i) => (
            <Link
              href={z.href}
              target={z.target}
              key={i}
              className="text-[#616161] text-xl font-normal text-center"
            >
              {z.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="border-t border-[#EDEDED] pt-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-[#616161] text-base">
            Copyright © 2023. All rights reserved.
          </p>
          <div className="flex gap-6">
            {SOCIALS.map((z, i) => (
              <Link key={i} href={z.href} className="group" target={z.target}>
                <div className="w-[44px] h-[44px] rounded-full bg-blue-100 group-hover:opacity-90 flex justify-center items-center">
                  {z.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
