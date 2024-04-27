import React from "react";

const VideoPresentation = () => {
  return (
    <div className="max-w-[1370px]  mx-auto mb-[150px]">
      <p className="w-1/2 mx-auto text-[40px] font-medium text-center mb-10">
        Not just software it’s complete solution for your business
      </p>

      <div className="relative w-full h-[570px] bg-gradient-to-b from-[#75C9B040] to-[#75C9B000] rounded-[40px] mt-[170px]">
        <div className="absolute left-[200px] -top-[130px] w-[970px] h-[500px] rounded-[20px] bg-slate-200">
          <video className="h-full w-full object-cover rounded-[20px]" controls>
            <source
              src="https://storage.googleapis.com/madebygoog.appspot.com/grow-ext-cloud-images-uploads/home_desktop5_9DCE7153.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="absolute -bottom-16 flex ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="170"
              viewBox="0 0 170 170"
              fill="none"
            >
              <g opacity="0.25">
                <mask
                  id="mask0_3415_1217"
                  //   style="mask-type:alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="170"
                  height="170"
                >
                  <rect
                    x="170"
                    y="170"
                    width="170"
                    height="170"
                    transform="rotate(180 170 170)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_3415_1217)">
                  <path
                    d="M63.0833 88.6364H41.8333V110.455H63.0833V88.6364ZM126.833 88.6364H105.583V110.455H126.833V88.6364ZM63.0833 45L48.9167 74.0909H77.25V125H27.6667V74.0909L41.8333 45H63.0833ZM126.833 45L112.667 74.0909H141V125H91.4167V74.0909L105.583 45H126.833Z"
                    fill="#75C9B0"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="text-2xl font-light font-[#Roboto]">
          Sapien orci vel maecenas adipiscing sollicitudin quis. Ut cursus porttitor porta nec tempor. Ut vitae luctus ullamcorper lectus morbi. Luctus et cursus a lectus diam lectus in bibendum at. Varius eget risus tristique odio. Consectetur curabitur eget aliquet in. Vestibulum suscipit lectus arcu cursus quis quis donec. Sit condimentum dolor arcu convallis varius turpis purus. A cras a sed venenatis lectus facilisi fermentum vel condimentum. Amet suscipit pellentesque est varius quis
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="170"
              viewBox="0 0 170 170"
              fill="none"
            >
              <g opacity="0.25">
                <mask
                  id="mask0_3415_1214"
                  //   style="mask-type:alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="170"
                  height="170"
                >
                  <rect width="170" height="170" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_3415_1214)">
                  <path
                    d="M105.917 81.3636H127.167V59.5455H105.917V81.3636ZM42.1667 81.3636H63.4167V59.5455H42.1667V81.3636ZM105.917 125L120.083 95.9091H91.75V45H141.333V95.9091L127.167 125H105.917ZM42.1667 125L56.3333 95.9091H28V45H77.5833V95.9091L63.4167 125H42.1667Z"
                    fill="#75C9B0"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>

      </div>
        <hr className="mt-40" />
    </div>
  );
};

export default VideoPresentation;
