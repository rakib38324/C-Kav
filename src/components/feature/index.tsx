import Image from "next/image";
import feature from "../../../images/feature.png";
import feature3 from "../../../images/feature2.webp";
import feature2 from "../../../images/feature3.png";
import circle1 from "../../../images/circle1.png";
import SmallButton from "../common/button/smallButton";

const Features = () => {
  return (
    <div className="max-w-[1370px]  mx-auto pb-[150px]">
      <p className="text-[40px] font-medium text-center mb-10">
        Features at glance
      </p>

      <div className="max-w-screen-xl mx-auto flex justify-between gap-8 mb-[73px]">
        <div className="border cursor-pointer hover:bg-[#75C9B0] hover:text-white rounded-[20px]">
          <p className="text-center p-6 text-xl font-medium ">
            Financial features
          </p>
        </div>
        <div className="border cursor-pointer hover:bg-[#75C9B0] hover:text-white rounded-[20px]">
          <p className="text-center p-6 text-xl font-medium ">
            Detail financial reports
          </p>
        </div>
        <div className="border cursor-pointer hover:bg-[#75C9B0] hover:text-white rounded-[20px]">
          <p className="text-center p-6 text-xl font-medium ">
            Timesheet management
          </p>
        </div>
        <div className="border cursor-pointer hover:bg-[#75C9B0] hover:text-white rounded-[20px]">
          <p className="text-center p-6 text-xl font-medium ">
            Banking integration
          </p>
        </div>
        <div className="border cursor-pointer hover:bg-[#75C9B0] hover:text-white rounded-[20px]">
          <p className="text-center p-6 text-xl font-medium ">
            Inventory management
          </p>
        </div>
        <div className="border cursor-pointer hover:bg-[#75C9B0] hover:text-white rounded-[20px]">
          <p className="text-center p-6 text-xl font-medium ">
            Contact management
          </p>
        </div>
      </div>

      <div className="w-full h-[940px] px-[100px] py-[77px] bg-gray-100 rounded-[40px] grid grid-cols-2 gap-28">
        <div>
          <div className=" relative w-[440px] h-[342px] bg-gray-200 rounded-[20px]">
            <Image
              className="w-full h-full rounded-[20px]"
              src={feature}
              alt="feature"
            />

            <div className="absolute top-20 -right-10 size-[88px] rounded-full border-4 border-white shadow-xl">
              <Image
                className="w-full h-full rounded-[20px]"
                src={circle1}
                alt="feature"
              />
            </div>

            <div className="absolute -bottom-40 -right-40 bg-gray-200 w-[400px] h-[252px] rounded-[20px] shadow-xl">
              <Image
                className="w-full h-full rounded-[20px]"
                src={feature2}
                alt="feature"
              />
            </div>

            <div className="absolute top-[470px] -right-1 size-[80px] rounded-full border-4 border-white shadow-xl">
              <Image
                className="w-full h-full rounded-[20px]"
                src={circle1}
                alt="feature"
              />
            </div>

            <div className="absolute -bottom-80  size-[252px] bg-gray-200 rounded-[20px] shadow-xl">
              <Image
                className="w-full h-full rounded-[20px]"
                src={feature3}
                alt="feature"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[35px] font-semibold font-barlow-condensed leading-10">
            Blandit congue commodo feugiat cursus nibh et mauris tincidunt
          </p>

          <p className="text-2xl font-light font-[#Roboto] mt-8">
            Eu non varius eget congue adipiscing quisque porttitor egestas quis.
            Ac neque mattis sed tellus vitae Augue amet nec arcu ac habitasse.
          </p>

          <hr className="my-8" />

          <div className="relative w-[470px] mx-auto h-[160px] bg-white flex gap-8 rounded-[20px]">
            <div className="absolute top-10 -left-8 ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
              >
                <rect width="75" height="75" rx="20" fill="#FF9C55" />
                <path
                  d="M36.3333 53H26.3333C25.4167 53 24.6317 52.6739 23.9783 52.0217C23.3261 51.3683 23 50.5833 23 49.6667V26.3333C23 25.4167 23.3261 24.6317 23.9783 23.9783C24.6317 23.3261 25.4167 23 26.3333 23H36.3333V53ZM33 49.6667V26.3333H26.3333V49.6667H33ZM39.6667 36.3333V23H49.6667C50.5833 23 51.3683 23.3261 52.0217 23.9783C52.6739 24.6317 53 25.4167 53 26.3333V36.3333H39.6667ZM43 33H49.6667V26.3333H43V33ZM39.6667 53V39.6667H53V49.6667C53 50.5833 52.6739 51.3683 52.0217 52.0217C51.3683 52.6739 50.5833 53 49.6667 53H39.6667ZM43 49.6667H49.6667V43H43V49.6667Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="absolute left-14 top-8">
              <p className="text-lg font-semibold font-barlow-condensed leading-10">
                Elementum viverra vulputate commodo enim.
              </p>
              <p className="text-base font-normal">
                Sed eget nibh volutpat tempor pellentesque vivamus eros sed. Sit
                dignissim nec sem enim ipsum. Lectus dignissim quam facilisi.
              </p>
            </div>
          </div>

          <div className="relative w-[470px] mx-auto h-[160px] bg-white flex gap-8 rounded-[20px] mt-8">
            <div className="absolute top-10 -left-8 ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
              >
                <rect width="75" height="75" rx="20" fill="#FF9C55" />
                <path
                  d="M32 41H44V40.175C44 39.075 43.45 38.1875 42.35 37.5125C41.25 36.8375 39.8 36.5 38 36.5C36.2 36.5 34.75 36.8375 33.65 37.5125C32.55 38.1875 32 39.075 32 40.175V41ZM38 35C38.825 35 39.5315 34.706 40.1195 34.118C40.7065 33.531 41 32.825 41 32C41 31.175 40.7065 30.469 40.1195 29.882C39.5315 29.294 38.825 29 38 29C37.175 29 36.469 29.294 35.882 29.882C35.294 30.469 35 31.175 35 32C35 32.825 35.294 33.531 35.882 34.118C36.469 34.706 37.175 35 38 35ZM23 53V26C23 25.175 23.294 24.4685 23.882 23.8805C24.469 23.2935 25.175 23 26 23H50C50.825 23 51.5315 23.2935 52.1195 23.8805C52.7065 24.4685 53 25.175 53 26V44C53 44.825 52.7065 45.5315 52.1195 46.1195C51.5315 46.7065 50.825 47 50 47H29L23 53ZM26 45.7625L27.7625 44H50V26H26V45.7625Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="absolute left-14 top-8">
              <p className="text-lg font-semibold font-barlow-condensed leading-10">
                Varius phasellus sit ullamcorper in. Magna at.
              </p>
              <p className="text-base font-normal">
                Nam pellentesque in cras odio ornare pulvinar. Leo dolor morbi
                sed lorem placerat suscipit penatibus. Non id ornare netus diam.
                Id egestas dictum et amet.
              </p>
            </div>
          </div>

          <hr className="my-10" />

          <SmallButton text="Learn more..."  BColor="[#75C9B0]" TColor="black" />
        </div>
      </div>
    </div>
  );
};

export default Features;
