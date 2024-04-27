import Image from "next/image";
import sft from "../../../images/software.png";
import SmallButton from "../common/button/bigButton";

const SoftwareQuality = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-[150px]">

        <p className="w-2/3 mb-20 mx-auto text-[40px] font-bold text-center  font-[#barlow-condensed]">Why our software is most preferred financial solution for business</p>

      <div className="relative">
        <div className="w-[470px] h-[757px] rounded-[40px] bg-gray-200">
          <Image
            className="w-full h-full rounded-[40px]"
            src={sft}
            alt="software quality"
          />
        </div>

        <div className="absolute top-28 left-[400px] w-[370px] h-[376px] rounded-[20px] bg-[#F1FAF7]">
          <div className="pl-3 pt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
            >
              <g filter="url(#filter0_d_3415_1468)">
                <rect
                  x="20"
                  y="10"
                  width="100"
                  height="100"
                  rx="15"
                  fill="white"
                />
              </g>
              <mask
                id="mask0_3415_1468"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="45"
                y="35"
                width="50"
                height="50"
              >
                <rect x="45" y="35" width="50" height="50" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_3415_1468)">
                <path
                  d="M67.8125 67.3957L79.5834 55.6248L76.6146 52.6561L67.8125 61.4582L63.4375 57.0832L60.4688 60.0519L67.8125 67.3957ZM70 80.8332C65.1737 79.6179 61.1896 76.8484 58.048 72.5248C54.9049 68.2026 53.3334 63.4026 53.3334 58.1248V45.4165L70 39.1665L86.6667 45.4165V58.1248C86.6667 63.4026 85.0959 68.2026 81.9542 72.5248C78.8112 76.8484 74.8264 79.6179 70 80.8332ZM70 76.4582C73.6112 75.3123 76.5973 73.0207 78.9584 69.5832C81.3195 66.1457 82.5 62.3262 82.5 58.1248V48.2811L70 43.5936L57.5 48.2811V58.1248C57.5 62.3262 58.6806 66.1457 61.0417 69.5832C63.4028 73.0207 66.3889 75.3123 70 76.4582Z"
                  fill="#75C9B0"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_3415_1468"
                  x="0"
                  y="0"
                  width="140"
                  height="140"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="10" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.45098 0 0 0 0 0.572549 0 0 0 0 0.580392 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3415_1468"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3415_1468"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <div className="pl-4">
              <p className="text-3xl font-medium font-[#barlow-condensed]">
                End-to-end secure system
              </p>
              <p className="pt-3">
                Fermentum odio ultrices nunc ornare. Tortor auctor felis diam
                justo augue at varius. Urna enim morbi non.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-28 right-28 w-[370px] h-[376px] rounded-[20px] bg-[#F1FAF7]">
          <div className="pl-3 pt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
            >
              <g filter="url(#filter0_d_3415_1477)">
                <rect
                  x="20"
                  y="10"
                  width="100"
                  height="100"
                  rx="15"
                  fill="white"
                />
              </g>
              <mask
                id="mask0_3415_1477"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="45"
                y="35"
                width="50"
                height="50"
              >
                <rect x="45" y="35" width="50" height="50" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_3415_1477)">
                <path
                  d="M53.3333 70.4167V74.5834H86.6666V70.4167H53.3333ZM59.5833 47.5001V43.3334C59.5833 42.1876 59.9916 41.2063 60.8083 40.3897C61.6236 39.5744 62.6041 39.1667 63.75 39.1667H76.25C77.3958 39.1667 78.377 39.5744 79.1937 40.3897C80.009 41.2063 80.4166 42.1876 80.4166 43.3334V47.5001H86.6666C87.8125 47.5001 88.7937 47.9084 89.6104 48.7251C90.4257 49.5404 90.8333 50.5209 90.8333 51.6667V74.5834C90.8333 75.7292 90.4257 76.7105 89.6104 77.5272C88.7937 78.3424 87.8125 78.7501 86.6666 78.7501H53.3333C52.1875 78.7501 51.2069 78.3424 50.3916 77.5272C49.575 76.7105 49.1666 75.7292 49.1666 74.5834V51.6667C49.1666 50.5209 49.575 49.5404 50.3916 48.7251C51.2069 47.9084 52.1875 47.5001 53.3333 47.5001H59.5833ZM53.3333 64.1667H86.6666V51.6667H80.4166V55.8334H76.25V51.6667H63.75V55.8334H59.5833V51.6667H53.3333V64.1667ZM63.75 47.5001H76.25V43.3334H63.75V47.5001Z"
                  fill="#75C9B0"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_3415_1477"
                  x="0"
                  y="0"
                  width="140"
                  height="140"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="10" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.45098 0 0 0 0 0.572549 0 0 0 0 0.580392 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3415_1477"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3415_1477"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <div className="pl-4">
              <p className="text-3xl font-medium font-[#barlow-condensed]">
                All business financial integrated features
              </p>
              <p className="pt-3">
                Arcu id suspendisse tortor mi bibendum ut aenean ullamcorper
                enim. Rhoncus tincidunt tristique donec ut egestas.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-[520px] left-[400px] w-[370px] h-[376px] rounded-[20px] bg-[#F1FAF7]">
          <div className="pl-3 pt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
            >
              <g filter="url(#filter0_d_3415_1486)">
                <rect
                  x="20"
                  y="10"
                  width="100"
                  height="100"
                  rx="15"
                  fill="white"
                />
              </g>
              <mask
                id="mask0_3415_1486"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="45"
                y="35"
                width="50"
                height="50"
              >
                <rect x="45" y="35" width="50" height="50" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_3415_1486)">
                <path
                  d="M68.9583 74.5833H71.0417V70.7292L78.3333 63.4375V53.75H61.6667V63.4375L68.9583 70.7292V74.5833ZM64.7917 78.75V72.5L57.5 65.2083V53.75C57.5 52.6042 57.9083 51.6229 58.725 50.8062C59.5403 49.991 60.5208 49.5833 61.6667 49.5833H63.75L61.6667 51.6667V41.25H65.8333V49.5833H74.1667V41.25H78.3333V51.6667L76.25 49.5833H78.3333C79.4792 49.5833 80.4604 49.991 81.2771 50.8062C82.0924 51.6229 82.5 52.6042 82.5 53.75V65.2083L75.2083 72.5V78.75H64.7917Z"
                  fill="#75C9B0"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_3415_1486"
                  x="0"
                  y="0"
                  width="140"
                  height="140"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="10" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.45098 0 0 0 0 0.572549 0 0 0 0 0.580392 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3415_1486"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3415_1486"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <div className="pl-4">
              <p className="text-3xl font-medium font-[#barlow-condensed]">
                Powerful add-ons with easy integrated system
              </p>
              <p className="pt-3">
                Congue eu turpis at nunc amet suspendisse dictum in amet. At
                quam nisi aliquet blandit mattis eros eros.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute top-[520px] right-28 w-[370px] h-[376px] rounded-[20px]">
          <div>
            <div className="pl-3 pt-20 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="140"
                height="140"
                viewBox="0 0 140 140"
                fill="none"
              >
                <g filter="url(#filter0_d_3415_1494)">
                  <rect
                    x="20"
                    y="10"
                    width="100"
                    height="100"
                    rx="15"
                    fill="#75C9B0"
                  />
                </g>
                <mask
                  id="mask0_3415_1494"
                  // style="mask-type:alpha"
                  maskUnits="userSpaceOnUse"
                  x="50"
                  y="40"
                  width="40"
                  height="40"
                >
                  <rect x="50" y="40" width="40" height="40" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_3415_1494)">
                  <path
                    d="M83.25 75C79.6667 75 76.1739 74.2011 72.7717 72.6033C69.3683 71.0067 66.3544 68.8956 63.73 66.27C61.1044 63.6456 58.9933 60.6317 57.3967 57.2283C55.7989 53.8261 55 50.3333 55 46.75C55 46.25 55.1667 45.8333 55.5 45.5C55.8333 45.1667 56.25 45 56.75 45H63.5C63.8889 45 64.2361 45.125 64.5417 45.375C64.8472 45.625 65.0278 45.9444 65.0833 46.3333L66.1667 52.1667C66.2222 52.5556 66.2156 52.9094 66.1467 53.2283C66.0767 53.5483 65.9167 53.8333 65.6667 54.0833L61.625 58.1667C62.7917 60.1667 64.2572 62.0417 66.0217 63.7917C67.785 65.5417 69.7222 67.0556 71.8333 68.3333L75.75 64.4167C76 64.1667 76.3267 63.9789 76.73 63.8533C77.1322 63.7289 77.5278 63.6944 77.9167 63.75L83.6667 64.9167C84.0556 65 84.375 65.1872 84.625 65.4783C84.875 65.7706 85 66.1111 85 66.5V73.25C85 73.75 84.8333 74.1667 84.5 74.5C84.1667 74.8333 83.75 75 83.25 75ZM60.0417 55L62.7917 52.25L62.0833 48.3333H58.375C58.5139 49.4722 58.7083 50.5972 58.9583 51.7083C59.2083 52.8194 59.5694 53.9167 60.0417 55ZM74.9583 69.9167C76.0417 70.3889 77.1461 70.7639 78.2717 71.0417C79.3961 71.3194 80.5278 71.5 81.6667 71.5833V67.9167L77.75 67.125L74.9583 69.9167Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_3415_1494"
                    x="0"
                    y="0"
                    width="140"
                    height="140"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.45098 0 0 0 0 0.572549 0 0 0 0 0.580392 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3415_1494"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3415_1494"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="pl-4 ">
                <p className="text-xl font-medium font-[barlow-condensed]">Call us on </p>
                <p className="text-4xl font-medium font-[barlow-condensed]">0123456789</p>
                <p className="text-xl font-medium font-[barlow-condensed]">For FREE live demo</p>
              </div>
            </div>
            <div className="ml-10">
              <SmallButton text="Get your FREE trial" BColor="[#FF9C55]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareQuality;
