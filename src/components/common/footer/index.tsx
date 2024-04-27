import React from "react";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="lg:h-[540px] bg-[#374041]">
      <div className="max-w-screen-xl mx-auto py-10 md:py-[100px] text-white p-1">
        <div className="md:grid md:grid-cols-5  md:gap-10 lg:gap-[130px] mb-10 md:mt-0">
          <div className="col-span-2">
            <div className="pb-5 border-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="165"
                height="30"
                viewBox="0 0 165 30"
                fill="none"
              >
                <path
                  d="M73.4253 17.7385C73.4253 15.5885 73.8628 13.7135 74.7378 12.1135C75.6128 10.4885 76.8253 9.23848 78.3753 8.36348C79.9253 7.46348 81.7003 7.01348 83.7003 7.01348C86.2753 7.01348 88.4003 7.66348 90.0753 8.96348C91.7753 10.2385 92.9128 12.0385 93.4878 14.3635H87.8253C87.5253 13.4635 87.0128 12.7635 86.2878 12.2635C85.5878 11.7385 84.7128 11.476 83.6628 11.476C82.1628 11.476 80.9753 12.026 80.1003 13.126C79.2253 14.201 78.7878 15.7385 78.7878 17.7385C78.7878 19.7135 79.2253 21.251 80.1003 22.351C80.9753 23.426 82.1628 23.9635 83.6628 23.9635C85.7878 23.9635 87.1753 23.0135 87.8253 21.1135H93.4878C92.9128 23.3635 91.7753 25.151 90.0753 26.476C88.3753 27.801 86.2503 28.4635 83.7003 28.4635C81.7003 28.4635 79.9253 28.026 78.3753 27.151C76.8253 26.251 75.6128 25.001 74.7378 23.401C73.8628 21.776 73.4253 19.8885 73.4253 17.7385Z"
                  fill="white"
                />
                <path
                  d="M109.634 28.126L102.584 19.276V28.126H97.3339V0.375977H102.584V16.1635L109.559 7.35098H116.384L107.234 17.776L116.459 28.126H109.634Z"
                  fill="white"
                />
                <path
                  d="M117.883 17.6635C117.883 15.5635 118.296 13.701 119.121 12.076C119.971 10.451 121.108 9.20098 122.533 8.32598C123.983 7.45098 125.596 7.01348 127.371 7.01348C128.921 7.01348 130.271 7.32598 131.421 7.95098C132.596 8.57598 133.533 9.36348 134.233 10.3135V7.35098H139.521V28.126H134.233V25.0885C133.558 26.0635 132.621 26.876 131.421 27.526C130.246 28.151 128.883 28.4635 127.333 28.4635C125.583 28.4635 123.983 28.0135 122.533 27.1135C121.108 26.2135 119.971 24.951 119.121 23.326C118.296 21.676 117.883 19.7885 117.883 17.6635ZM134.233 17.7385C134.233 16.4635 133.983 15.376 133.483 14.476C132.983 13.551 132.308 12.851 131.458 12.376C130.608 11.876 129.696 11.626 128.721 11.626C127.746 11.626 126.846 11.8635 126.021 12.3385C125.196 12.8135 124.521 13.5135 123.996 14.4385C123.496 15.3385 123.246 16.4135 123.246 17.6635C123.246 18.9135 123.496 20.0135 123.996 20.9635C124.521 21.8885 125.196 22.601 126.021 23.101C126.871 23.601 127.771 23.851 128.721 23.851C129.696 23.851 130.608 23.6135 131.458 23.1385C132.308 22.6385 132.983 21.9385 133.483 21.0385C133.983 20.1135 134.233 19.0135 134.233 17.7385Z"
                  fill="white"
                />
                <path
                  d="M153.311 23.2885L158.561 7.35098H164.148L156.461 28.126H150.086L142.436 7.35098H148.061L153.311 23.2885Z"
                  fill="white"
                />
                <path
                  d="M51.5625 0H72.1875L54.375 30H33.75L51.5625 0Z"
                  fill="#FF9C55"
                />
                <path
                  d="M32.8125 0H47.8125L30 30H15L32.8125 0Z"
                  fill="#FF9C55"
                />
                <path
                  d="M17.8125 0H29.0625L11.25 30H0L17.8125 0Z"
                  fill="#FF9C55"
                />
              </svg>
            </div>

            <div className="lg:grid lg:grid-cols-2 mt-5 text-white">
              <div className="">
                <p className="text-xl font-medium font-[#BarlowCondensed]">
                  Give us a call
                </p>
                <p className="text-base font-normal font-[#Roboto]">
                  0123456789
                </p>

                <p className="text-xl font-medium font-[#BarlowCondensed] mt-4">
                  Email us on
                </p>
                <p className="text-base font-normal font-[#Roboto]">
                  enquiry@hospital.com
                </p>
              </div>
              <div className="mt-5 lg:mt-0">
                <p className="text-xl font-medium font-[#BarlowCondensed]">
                  Be the first to know
                </p>

                <div className="flex justify-between mt-2 p-2 border rounded-lg">
                  <input
                    className="bg-[#374041] w-3/4 "
                    type="text"
                    placeholder="Enter your email"
                  />
                  <CiMail className="text-2xl" />
                </div>

                <div className="flex justify-around text-yellow-500 mt-5">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaYoutube />
                  <FaInstagram />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 mt-10 md:mt-0">
            <div className="grid grid-cols-3 gap-10">
              <div>
                <p className="text-xl font-[#BarlowCondensed] pb-5 border-b ">
                  Features
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-5">Invoicing</p>
                <p className="text-base text-[#FFFFFFBF] pt-3">
                  Customer Portal
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">Vendor Portal</p>
                <p className="text-base text-[#FFFFFFBF] pt-3">Estimates</p>
                <p className="text-base text-[#FFFFFFBF] pt-3">Expense</p>
                <p className="text-base text-[#FFFFFFBF] pt-3">
                  Bill management
                </p>
              </div>
              <div>
                <p className="text-xl font-[#BarlowCondensed] pb-5 border-b ">
                  Solutions
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-5">Bookkeeping </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">Accounting </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">
                  Startup accounting{" "}
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">CRM system </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">
                  Customer management
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">
                  Banking solutions
                </p>
              </div>
              <div>
                <p className="text-xl font-[#BarlowCondensed] pb-5 border-b ">
                  Quick links
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-5">Why us</p>
                <p className="text-base text-[#FFFFFFBF] pt-3">pricing </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">plan compare </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">
                  Customer reviews
                </p>
                <p className="text-base text-[#FFFFFFBF] pt-3">Expense</p>
                <p className="text-base text-[#FFFFFFBF] pt-3">Support</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="md:flex justify-between mt-5 text-[#FFFFFFBF] font-[#Roboto]">
          <p>© C-Kav All Rights Reserved</p>
          <div className="md:flex justify-around gap-10 mt-5 md:mt-0">
            <p>Our Services</p>
            <p>Careers</p>
            <p>FAQs</p>
            <p>Privacy policy</p>
            <p>Terms and conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
