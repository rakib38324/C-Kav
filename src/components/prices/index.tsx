import React from "react";
import SmallButton from "../common/button/smallButton";

const Prices = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-[150px]">
      <p className="w-1/2 mx-auto text-[40px] font-medium text-center mb-10">
        Simple and affordable pricing
      </p>

      <div className="flex gap-5 justify-around">
        <div className=" flex flex-col justify-between items-center  bg-[#F9F9F9] rounded-[20px] p-[30px]">
          <p className="uppercase text-xl font-semibold text-center">Free</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
            >
              <mask
                id="mask0_3415_1157"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="75"
                height="75"
              >
                <rect width="75" height="75" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_3415_1157)">
                <path
                  d="M12.5 53.125V59.375H62.5V53.125H12.5ZM12.5 18.75H19.375C19.1146 18.2812 18.9448 17.7865 18.8656 17.2656C18.7885 16.7448 18.75 16.1979 18.75 15.625C18.75 13.0208 19.6615 10.8073 21.4844 8.98438C23.3073 7.16146 25.5208 6.25 28.125 6.25C29.6875 6.25 31.1323 6.65313 32.4594 7.45938C33.7885 8.26771 34.9479 9.27083 35.9375 10.4687L37.5 12.5L39.0625 10.4687C40 9.21875 41.1458 8.20312 42.5 7.42188C43.8542 6.64062 45.3125 6.25 46.875 6.25C49.4792 6.25 51.6927 7.16146 53.5156 8.98438C55.3385 10.8073 56.25 13.0208 56.25 15.625C56.25 16.1979 56.2104 16.7448 56.1312 17.2656C56.0542 17.7865 55.8854 18.2812 55.625 18.75H62.5C64.2188 18.75 65.6906 19.3625 66.9156 20.5875C68.1385 21.8104 68.75 23.2812 68.75 25V59.375C68.75 61.0938 68.1385 62.5656 66.9156 63.7906C65.6906 65.0135 64.2188 65.625 62.5 65.625H12.5C10.7812 65.625 9.31042 65.0135 8.0875 63.7906C6.8625 62.5656 6.25 61.0938 6.25 59.375V25C6.25 23.2812 6.8625 21.8104 8.0875 20.5875C9.31042 19.3625 10.7812 18.75 12.5 18.75ZM12.5 43.75H62.5V25H46.5625L53.125 33.9063L48.125 37.5L37.5 23.125L26.875 37.5L21.875 33.9063L28.2812 25H12.5V43.75ZM28.125 18.75C29.0104 18.75 29.7531 18.451 30.3531 17.8531C30.951 17.2531 31.25 16.5104 31.25 15.625C31.25 14.7396 30.951 13.9969 30.3531 13.3969C29.7531 12.799 29.0104 12.5 28.125 12.5C27.2396 12.5 26.4979 12.799 25.9 13.3969C25.3 13.9969 25 14.7396 25 15.625C25 16.5104 25.3 17.2531 25.9 17.8531C26.4979 18.451 27.2396 18.75 28.125 18.75ZM46.875 18.75C47.7604 18.75 48.5031 18.451 49.1031 17.8531C49.701 17.2531 50 16.5104 50 15.625C50 14.7396 49.701 13.9969 49.1031 13.3969C48.5031 12.799 47.7604 12.5 46.875 12.5C45.9896 12.5 45.2479 12.799 44.65 13.3969C44.05 13.9969 43.75 14.7396 43.75 15.625C43.75 16.5104 44.05 17.2531 44.65 17.8531C45.2479 18.451 45.9896 18.75 46.875 18.75Z"
                  fill="#75C9B0"
                />
              </g>
            </svg>
          </div>
          <SmallButton text="Start now" BColor="[#FF9C55]" TColor="black" />
        </div>

        <div className=" flex flex-col justify-between items-center   bg-[#F9F9F9] rounded-[20px] ">
          <div>
            <div className="mt-[30px] mx-[30px]">
              <p className=" text-xl  text-center font-semibold">Standard</p>
              <div className=" mx-auto text-center">
                <p className="text-[50px] font-semibold">$10</p>
                <p className="text-center text-[#656E77]">
                  Month <br /> billed annually
                </p>
              </div>
            </div>
            <div className="mx-[30px]">
              <hr className="mt-5 mb-2" />
              <p className="text-center text-[#656E77]">$15 billed monthly</p>
            </div>
          </div>
          <div className="mb-[30px] mt-3">
            <SmallButton text="Start now" BColor="[#FF9C55]" TColor="black" />
          </div>
        </div>

        <div className="relative flex flex-col justify-between items-center border-2 border-[#FF9C55] bg-[#ff9c5538] rounded-[20px] ">
          <p className="absolute left-1/3 -top-2 rounded-[50px] text-xs font-normal font-[#Roboto] bg-[#FF9C55] px-4 py-1">
            Popular
          </p>

          <div>
            <div className="mt-[30px] mx-[30px]">
              <p className=" text-xl  text-center font-semibold">Standard</p>
              <div className=" mx-auto text-center">
                <p className="text-[50px] font-semibold">$20</p>
                <p className="text-center text-[#656E77]">
                  Month <br /> billed annually
                </p>
              </div>
            </div>
            <div className="mx-[30px]">
              <hr className="mt-5 mb-2" />
              <p className="text-center text-[#656E77]">$15 billed monthly</p>
            </div>
          </div>
          <div className="mb-[30px] mt-3">
            <SmallButton text="Start now" BColor="[#374041]" TColor="white" />
          </div>
        </div>

        <div className=" flex flex-col justify-between items-center  bg-[#F9F9F9] rounded-[20px] ">
          <div>
            <div className="mt-[30px] mx-[30px]">
              <p className=" text-xl  text-center font-semibold">Standard</p>
              <div className=" mx-auto text-center">
                <p className="text-[50px] font-semibold">$30</p>
                <p className="text-center text-[#656E77]">
                  Month <br /> billed annually
                </p>
              </div>
            </div>
            <div className="mx-[30px]">
              <hr className="mt-5 mb-2" />
              <p className="text-center text-[#656E77]">$15 billed monthly</p>
            </div>
          </div>
          <div className="mb-[30px] mt-3">
            <SmallButton text="Start now" BColor="[#FF9C55]" TColor="black" />
          </div>
        </div>

        <div className=" flex flex-col justify-between items-center  bg-[#F9F9F9] rounded-[20px] ">
          <div>
            <div className="mt-[30px] mx-[30px]">
              <p className=" text-xl  text-center font-semibold">Standard</p>
              <div className=" mx-auto text-center">
                <p className="text-[50px] font-semibold">$50</p>
                <p className="text-center text-[#656E77]">
                  Month <br /> billed annually
                </p>
              </div>
            </div>
            <div className="mx-[30px]">
              <hr className="mt-5 mb-2" />
              <p className="text-center text-[#656E77]">$15 billed monthly</p>
            </div>
          </div>
          <div className="mb-[30px] mt-3">
            <SmallButton text="Start now" BColor="[#FF9C55]" TColor="black" />
          </div>
        </div>

        <div className=" flex flex-col justify-between items-center  bg-[#F9F9F9] rounded-[20px] ">
          <div>
            <div className="mt-[30px] mx-[30px]">
              <p className=" text-xl  text-center font-semibold">Standard</p>
              <div className=" mx-auto text-center">
                <p className="text-[50px] font-semibold">$100</p>
                <p className="text-center text-[#656E77]">
                  Month <br /> billed annually
                </p>
              </div>
            </div>
            <div className="mx-[30px]">
              <hr className="mt-5 mb-2" />
              <p className="text-center text-[#656E77]">$15 billed monthly</p>
            </div>
          </div>
          <div className="mb-[30px] mt-3">
            <SmallButton text="Start now" BColor="[#FF9C55]" TColor="black" />
          </div>
        </div>
      </div>

      <p className="w-11/12  text-base font-normal  mx-auto text-center mt-10 text-[#656E77] font-[#Roboto]">
      Sapien orci vel maecenas adipiscing sollicitudin quis. Ut cursus porttitor porta nec tempor. Ut vitae luctus ullamcorper lectus morbi. Luctus et cursus a lectus diam lectus in bibendum at. Varius eget risus tristique odio. Consectetur curabitur eget aliquet in. Vestibulum suscipit lectus arcu cursus quis quis donec. Sit condimentum dolor arcu convallis varius turpis purus. A cras a sed venenatis lectus facilisi fermentum vel condimentum. Amet suscipit pellentesque est varius quis
      </p>
    </div>
  );
};

export default Prices;
