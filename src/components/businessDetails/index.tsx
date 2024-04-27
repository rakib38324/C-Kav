import React from "react";

const BusinessDetails = () => {
  return (
    <div className=" max-w-[1370px]  mx-auto mb-[250px] ">
      <div className="relative border border-white">
        <div className="w-full h-[450px] mt-[100px] bg-[#F1FAF7] rounded-[40px]">
          <div className="max-w-screen-xl mx-auto">
            <div className="w-1/4 py-[75px] ">
              <p className="text-[40px] font-medium font-barlow-condensed   leading-[50px]">
                Providing thousands of businesses
              </p>
              <p className="text-base font-normal mt-8  font-[#Roboto]">
                Sapien orci vel maecenas adipiscing sollicitudin quis. Ut cursus
                porttitor porta nec tempor. Ut vitae luctus ullamcorper lectus
                morbi. Luctus et cursus a lectus diam lectus in bibendum at.
                Varius eget risus tristique odio
              </p>
            </div>
            <div>
              <div className="absolute top-0 left-[390px] bg-[#75C9B0]  w-[470px] h-[720px] rounded-[20px]">
                <div className="w-full h-[350px] rounded-[20px]">
                  <video
                    className="h-full w-full object-cover rounded-[20px]"
                    controls
                  >
                    <source
                      src="https://storage.googleapis.com/madebygoog.appspot.com/grow-ext-cloud-images-uploads/home_desktop5_9DCE7153.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                <div className="mx-12 my-10 text-white">
                  <p className="text-xl ">Lawrence Horton</p>
                  <p className="text-base font-normal pt-1  text-[#656E77] font-[#Roboto]">
                    Tellus porttitor sit tellus donec.
                  </p>
                  <p className="text-base font-normal pt-5  text-[#656E77] font-[#Roboto]">
                    Amet tempus nec dictum ut. Egestas nec eget pharetra nisl
                    adipiscing vitae. Adipiscing commodo eget adipiscing posuere
                    eget mauris lorem. Sodales posuere hendrerit risus
                    ullamcorper tristique odio neque faucibus. Gravida tincidunt
                    a nulla ligula netus ut commodo aliquam purus. Senectus
                    purus tortor auctor scelerisque in neque est. Lectus eu enim
                    elit lacinia ut amet. Tortor interdum aliquet amet libero
                    varius nullam rhoncus montes. Massa egestas eget euismod.
                  </p>
                </div>
              </div>

              <div className="absolute top-0 right-5 bg-[#75C9B0] w-[370px] h-[720px] rounded-[20px]">
                <div className="mx-12 my-10 text-white">
                  <p className="text-xl ">Lawrence Horton</p>
                  <p className="text-base font-normal pt-1  text-[#656E77] font-[#Roboto]">
                    Tellus porttitor sit tellus donec.
                  </p>
                  <p className="text-base font-normal pt-5  text-[#656E77] font-[#Roboto]">
                    Amet tempus nec dictum ut. Egestas nec eget pharetra nisl
                    adipiscing vitae. Adipiscing commodo eget adipiscing posuere
                    eget mauris lorem. Sodales posuere hendrerit risus
                    ullamcorper tristique odio neque faucibus. Gravida tincidunt
                    a nulla ligula netus ut commodo aliquam purus. Senectus
                    purus tortor auctor scelerisque in neque est. Lectus eu enim
                    elit lacinia ut amet. Tortor interdum aliquet amet libero
                    varius nullam rhoncus montes. Massa egestas eget euismod.
                  </p>
                </div>

                <div className="w-full h-[252px] rounded-[20px]">
                  <video
                    className="h-full w-full object-cover rounded-[20px]"
                    controls
                  >
                    <source
                      src="https://storage.googleapis.com/madebygoog.appspot.com/grow-ext-cloud-images-uploads/home_desktop5_9DCE7153.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
