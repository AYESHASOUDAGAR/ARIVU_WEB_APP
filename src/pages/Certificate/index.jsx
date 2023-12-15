import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const CertificatePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-poppins h-[1024px] items-center justify-end mx-auto pt-[70px] w-full"
        style={{ backgroundImage: "url('images/img_certifecate.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[762px] justify-start w-full">
          <Img
            className="common-pointer h-[50px] md:ml-[0] ml-[71px] w-[50px]"
            src="images/img_back_white_a700.svg"
            alt="back"
            onClick={() => navigate(-1)}
          />
          <div className="bg-black-900_7f flex flex-row items-center justify-center p-[26px] sm:px-5 rounded-tl-[20px] rounded-tr-[20px] w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mb-[17px] md:px-5 w-[31%]">
              <Text
                className="sm:mt-0 mt-4 text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtPoppinsRegular30"
              >
                Share
              </Text>
              <Img
                className="common-pointer h-[50px] sm:ml-[0] ml-[15px] sm:mt-0 mt-3 w-[50px]"
                src="images/img_share.svg"
                alt="share_One"
                onClick={() => navigate("/certificateshare")}
              />
              <Text
                className="sm:ml-[0] ml-[52px] sm:mt-0 mt-[17px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtPoppinsRegular30"
              >
                Download
              </Text>
              <Img
                className="h-[73px] md:h-auto ml-1 sm:ml-[0] object-cover w-[16%] sm:w-full"
                src="images/img_pngwing13.png"
                alt="pngwingThirteen"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificatePage;
