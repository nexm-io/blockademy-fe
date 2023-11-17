import Image from "next/image";
const TopBanner = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 bg-blue-200 py-6 px-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="68"
        viewBox="0 0 31 68"
        fill="none"
        className="absolute left-0 top-1/2 -translate-y-1/2"
      >
        <g opacity="0.2">
          <path
            d="M30.1778 50.8744L15.1812 59.4244L15.1301 25.5913L30.1778 17.0996V50.8744Z"
            fill="#317BFF"
          />
          <path
            d="M-30.0046 50.8999L-14.9569 42.4082L0.0822334 50.8999L15.1299 42.4082L30.1776 50.8999L0.0822334 67.9999L-30.0046 50.8999Z"
            fill="#85B2F9"
          />
          <path
            d="M30.1776 17.1001L15.1299 25.5917L0.0822334 17.1001L-14.9569 25.5917L-30.0046 17.1001L0.0822334 0L30.1776 17.1001Z"
            fill="#85ACF9"
          />
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="68"
        viewBox="0 0 30 68"
        fill="none"
        className="absolute right-0 top-1/2 -translate-y-1/2"
      >
        <g opacity="0.2">
          <path
            d="M15.0477 25.651L0.0510359 17.101L0 50.9341L15.0477 59.4258V25.651Z"
            fill="#317BFF"
          />
          <path
            d="M0 50.8999L15.0477 42.4082L30.0869 50.8999L45.1346 42.4082L60.1823 50.8999L30.0869 67.9999L0 50.8999Z"
            fill="#85B2F9"
          />
          <path
            d="M60.1823 17.1001L45.1346 25.5917L30.0869 17.1001L15.0477 25.5917L0 17.1001L30.0869 0L60.1823 17.1001Z"
            fill="#85ACF9"
          />
        </g>
      </svg>
      <Image
        src="/images/hutech-logo.png"
        alt="hutech"
        width={101}
        height={34}
      />
      <p className="text-center text-blue-100 font-normal text-base md:text-xl">
        HUTECH Workshop on Blockchain and Smart Contracts
      </p>
      <Image src="/images/cert.png" alt="cert" width={36} height={30} />
    </div>
  );
};

export default TopBanner;
