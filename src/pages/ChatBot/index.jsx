import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const ChatBotPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-center justify-start mx-auto p-[53px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start md:px-5 rounded-[20px] shadow-bs w-3/5 md:w-full">
          <div className="flex flex-col justify-start w-full">
            <div className="bg-blue-A200_04 flex md:flex-col flex-row md:gap-5 items-center justify-end p-2 rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[60px] md:h-auto object-cover w-[60px]"
                src="images/img_chatbot.png"
                alt="chatbot"
              />
              <div className="md:h-[47px] h-[83px] md:ml-[0] ml-[25px] md:mt-0 mt-[19px] relative w-[23%] md:w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-black-900 top-[0] w-max"
                  size="txtInterSemiBold40Black900"
                >
                  Chat bot
                </Text>
                <Text
                  className="absolute bottom-[0] left-[9%] text-3xl sm:text-[26px] md:text-[28px] text-gray-700_cc"
                  size="txtInterRegular30"
                >
                  online
                </Text>
                <div className="absolute bg-teal-300 border border-black-900 border-solid bottom-[13%] h-2.5 left-[0] rounded-[50%] w-2.5"></div>
              </div>
              <div className="bg-blue_gray-100 h-3 mb-[39px] md:ml-[0] ml-[371px] md:mt-0 mt-[51px] rounded-[50%] w-3"></div>
              <div className="bg-blue_gray-100 h-3 mb-[39px] ml-2 md:ml-[0] md:mt-0 mt-[51px] rounded-[50%] w-3"></div>
              <div className="bg-blue_gray-100 h-3 mb-[39px] md:ml-[0] ml-[9px] md:mt-0 mt-[51px] rounded-[50%] w-3"></div>
              <Img
                className="common-pointer h-[35px] md:ml-[0] ml-[35px] mr-[9px] w-[35px]"
                src="images/img_close.svg"
                alt="close"
                onClick={() => navigate("/dashboard")}
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-[22px] items-end justify-start md:ml-[0] ml-[29px] mt-[84px] w-[64%] md:w-full">
              <Img
                className="h-[60px] md:h-auto mb-[3px] sm:mt-0 mt-[17px] object-cover w-[60px]"
                src="images/img_chatbot.png"
                alt="chatbot_Two"
              />
              <div className="bg-blue-A700_01 flex flex-col items-start justify-start p-6 sm:px-5 rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]">
                <Text
                  className="mt-[5px] text-white-A700 text-xl"
                  size="txtInterSemiBold20"
                >
                  Hello there, How can I help you?{" "}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-end justify-end md:ml-[0] ml-[267px] mt-9 w-[64%] md:w-full">
              <div className="bg-blue_gray-100 flex flex-col items-center justify-end p-2.5 rounded-bl-[20px] rounded-tl-[20px] rounded-tr-[20px]">
                <Text
                  className="mt-2 text-black-900 text-xl w-[95%] sm:w-full"
                  size="txtInterMedium20Black900"
                >
                  I want to download a text book, how can I download it?
                </Text>
              </div>
              <Img
                className="h-[60px] md:h-auto mb-1 sm:mt-0 mt-4 object-cover w-[60px]"
                src="images/img_user_60x60.png"
                alt="user"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-[22px] items-end justify-start md:ml-[0] ml-[29px] mt-[59px] w-[64%] md:w-full">
              <Img
                className="h-[60px] md:h-auto mb-[5px] sm:mt-0 mt-[88px] object-cover w-[60px]"
                src="images/img_chatbot.png"
                alt="chatbot_Three"
              />
              <div className="bg-blue-A700_01 flex flex-col items-center justify-start p-4 rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]">
                <Text
                  className="mb-[77px] text-white-A700 text-xl w-[95%] sm:w-full"
                  size="txtInterMedium20"
                >
                  Just go to the Academic Education section then to the
                  Classes/Library then you will see the download icon on the top
                  left side, click it and it will download.{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-[17px] items-start justify-end md:ml-[0] ml-[465px] mt-[63px] w-[39%] md:w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[235px] rounded-bl-[20px] rounded-tl-[20px] rounded-tr-[20px] text-center text-xl"
                color="blue_gray_100"
                size="3xl"
                variant="fill"
              >
                <> Oh! That&#39;s so easy.</>
              </Button>
              <Img
                className="h-[60px] md:h-auto object-cover w-[60px]"
                src="images/img_user_60x60.png"
                alt="user_One"
              />
            </div>
            <div className="bg-blue-100 flex flex-row sm:gap-10 items-center justify-between mt-[98px] p-[7px] rounded-[20px] shadow-bs2 w-full">
              <Text
                className="ml-[26px] text-3xl sm:text-[26px] md:text-[28px] text-gray-700_b2"
                size="txtInterRegular30Gray700b2"
              >
                Ask your doubts .....
              </Text>
              <Img
                className="h-[60px] md:h-auto mr-4 mt-1.5 object-cover w-[60px]"
                src="images/img_happiness.png"
                alt="happiness"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBotPage;
