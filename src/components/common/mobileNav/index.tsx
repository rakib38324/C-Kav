import Link from "next/link";
import { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { TProps } from "@/components/header";

const MobileNav: React.FC<TProps> = ({ setOpen }) => {
  const navigation = [
    { label: "home", url: "/" },
    { label: "About us", url: "/" },
    { label: "Features", url: "/" },
    { label: "Pricing", url: "/" },
    { label: "contact us", url: "/" },
  ];

  return (
    <aside className="bg-[#374041] border fixed top-0 left-0 w-[300px] h-full  z-[100]">
      <nav className="px-[1.25rem]">
        <div className="flex items-center justify-between py-[1.5rem]">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="165"
              height="30"
              viewBox="0 0 165 30"
              fill="none"
            >
              <path
                d="M73.4253 17.7383C73.4253 15.5883 73.8628 13.7133 74.7378 12.1133C75.6128 10.4883 76.8253 9.23834 78.3753 8.36334C79.9253 7.46334 81.7003 7.01334 83.7003 7.01334C86.2753 7.01334 88.4003 7.66334 90.0753 8.96334C91.7753 10.2383 92.9128 12.0383 93.4878 14.3633H87.8253C87.5253 13.4633 87.0128 12.7633 86.2878 12.2633C85.5878 11.7383 84.7128 11.4758 83.6628 11.4758C82.1628 11.4758 80.9753 12.0258 80.1003 13.1258C79.2253 14.2008 78.7878 15.7383 78.7878 17.7383C78.7878 19.7133 79.2253 21.2508 80.1003 22.3508C80.9753 23.4258 82.1628 23.9633 83.6628 23.9633C85.7878 23.9633 87.1753 23.0133 87.8253 21.1133H93.4878C92.9128 23.3633 91.7753 25.1508 90.0753 26.4758C88.3753 27.8008 86.2503 28.4633 83.7003 28.4633C81.7003 28.4633 79.9253 28.0258 78.3753 27.1508C76.8253 26.2508 75.6128 25.0008 74.7378 23.4008C73.8628 21.7758 73.4253 19.8883 73.4253 17.7383Z"
                fill="white"
              />
              <path
                d="M109.634 28.1258L102.584 19.2758V28.1258H97.3339V0.375837H102.584V16.1633L109.559 7.35084H116.384L107.234 17.7758L116.459 28.1258H109.634Z"
                fill="white"
              />
              <path
                d="M117.883 17.6633C117.883 15.5633 118.296 13.7008 119.121 12.0758C119.971 10.4508 121.108 9.20084 122.533 8.32584C123.983 7.45084 125.596 7.01334 127.371 7.01334C128.921 7.01334 130.271 7.32584 131.421 7.95084C132.596 8.57584 133.533 9.36334 134.233 10.3133V7.35084H139.521V28.1258H134.233V25.0883C133.558 26.0633 132.621 26.8758 131.421 27.5258C130.246 28.1508 128.883 28.4633 127.333 28.4633C125.583 28.4633 123.983 28.0133 122.533 27.1133C121.108 26.2133 119.971 24.9508 119.121 23.3258C118.296 21.6758 117.883 19.7883 117.883 17.6633ZM134.233 17.7383C134.233 16.4633 133.983 15.3758 133.483 14.4758C132.983 13.5508 132.308 12.8508 131.458 12.3758C130.608 11.8758 129.696 11.6258 128.721 11.6258C127.746 11.6258 126.846 11.8633 126.021 12.3383C125.196 12.8133 124.521 13.5133 123.996 14.4383C123.496 15.3383 123.246 16.4133 123.246 17.6633C123.246 18.9133 123.496 20.0133 123.996 20.9633C124.521 21.8883 125.196 22.6008 126.021 23.1008C126.871 23.6008 127.771 23.8508 128.721 23.8508C129.696 23.8508 130.608 23.6133 131.458 23.1383C132.308 22.6383 132.983 21.9383 133.483 21.0383C133.983 20.1133 134.233 19.0133 134.233 17.7383Z"
                fill="white"
              />
              <path
                d="M153.311 23.2883L158.561 7.35084H164.148L156.461 28.1258H150.086L142.436 7.35084H148.061L153.311 23.2883Z"
                fill="white"
              />
              <path
                d="M51.5625 0H72.1875L54.375 30H33.75L51.5625 0Z"
                fill="#75C9B0"
              />
              <path d="M32.8125 0H47.8125L30 30H15L32.8125 0Z" fill="#75C9B0" />
              <path
                d="M17.8125 0H29.0625L11.25 30H0L17.8125 0Z"
                fill="#75C9B0"
              />
            </svg>
          </Link>
          <p onClick={() => setOpen(false)}>
            <FaAngleDoubleLeft className="text-2xl text-white " />
          </p>
        </div>

        <ul className="flex flex-col gap-[12px] ">
          {navigation?.map((item) => (
            <li
              key={item.label}
              className="relative group text-white uppercase"
            >
              <Link href={item?.url}>{item.label}</Link>
            </li>
          ))}

          <li className="mt-5">
            <button className="lg:hidden px-2 py-2 bg-white text-xs rounded-lg font-semibold font-[#Roboto]">
              Book Your Appointment
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default MobileNav;
