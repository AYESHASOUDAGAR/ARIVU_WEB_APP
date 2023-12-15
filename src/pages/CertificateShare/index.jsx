import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const CertificateSharePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[156px] h-[1024px] justify-start mx-auto p-[70px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_certifecate.png')" }}
      >
        <Img
          className="common-pointer h-[50px] w-[50px]"
          src="images/img_back_white_a700.svg"
          alt="back"
          onClick={() => navigate(-1)}
        />
        <div className="flex flex-col items-center mb-[219px] mr-[87px] md:pl-10 pl-16 sm:pl-5 w-[94%] md:w-full">
          <div className="bg-gray-700_03 flex flex-col items-center justify-start p-[29px] sm:px-5 rounded-[20px] w-full">
            <div className="flex flex-col justify-start mb-[45px] w-[98%] md:w-full">
              <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[13px] w-[15%] md:w-full">
                <Text
                  className="mt-1 text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtPoppinsRegular30"
                >
                  Share
                </Text>
                <Img
                  className="h-[50px] w-[50px]"
                  src="images/img_share.svg"
                  alt="share_One"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-11 md:ml-[0] mt-12 w-[95%] md:w-full">
                <Img
                  className="h-32 md:h-auto object-cover w-32"
                  src="images/img_linkedin.png"
                  alt="linkedin"
                />
                <Img
                  className="h-32 md:h-auto md:ml-[0] ml-[72px] object-cover w-32"
                  src="images/img_whatsapp.png"
                  alt="whatsapp"
                />
                <Img
                  className="h-32 md:h-auto md:ml-[0] ml-[81px] object-cover w-32"
                  src="images/img_facebook_128x128.png"
                  alt="facebook"
                />
                <Img
                  className="h-32 md:h-auto md:ml-[0] ml-[94px] object-cover w-32"
                  src="images/img_gmail.png"
                  alt="gmail"
                />
                <Img
                  className="h-32 md:h-auto ml-28 md:ml-[0] object-cover w-32"
                  src="images/img_twitter_128x128.png"
                  alt="twitter"
                />
              </div>
              <div className="bg-black-900 flex sm:flex-col flex-row gap-[31px] items-center justify-end mt-[42px] p-3 rounded-[20px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtPoppinsRegular30"
                >
                  https://youtu.be/Sh-LfrzRAWI?si=8TW32W67oT7m3tgM
                </Text>
                <Button
                  className="cursor-pointer leading-[normal] min-w-[158px] mr-1.5 sm:mt-0 mt-0.5 rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                  color="blue_A200_03"
                  size="md"
                  variant="fill"
                >
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateSharePage;
