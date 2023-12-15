import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const ComingSoonPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-gradient1  md:h-[1216px] sm:h-[1335px] h-[963px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="h-[529px] relative w-[39%] md:w-full">
                <Img
                  className="h-[529px] m-auto object-cover w-full"
                  src="images/img_ellipse2.png"
                  alt="ellipseTwo"
                />
                <Img
                  className="common-pointer absolute h-[50px] left-[13%] top-[13%] w-[50px]"
                  src="images/img_back.svg"
                  alt="back"
                  onClick={() => navigate(-1)}
                />
              </div>
              <Img
                className="h-[647px] md:h-auto md:mt-0 mt-[316px] object-cover rotate-[1deg]"
                src="images/img_ellipse3.png"
                alt="ellipseThree"
              />
            </div>
          </div>
          <div className="absolute flex flex-col h-max inset-y-[0] justify-start my-auto right-[20%] w-[56%]">
            <Text
              className="md:ml-[0] ml-[39px] md:text-5xl text-8xl text-white-A700"
              size="txtPoppinsRegular96"
            >
              Launching Soon
            </Text>
            <List
              className="sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 mt-[26px] w-[93%]"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                  <div className="flex flex-row font-digitalnumbers gap-[15px] items-center justify-between w-full">
                    <div className="bg-gradient2  border border-solid border-white-A700_87 flex flex-col items-center justify-end p-3.5 rounded-[5px]">
                      <Text
                        className="mt-[7px] md:text-5xl text-8xl text-white-A700"
                        size="txtDigitalNumbersRegular96"
                      >
                        2
                      </Text>
                    </div>
                    <div className="bg-gradient2  border border-solid border-white-A700_87 flex flex-col items-center justify-end p-3.5 rounded-[5px]">
                      <Text
                        className="mt-[7px] md:text-5xl text-8xl text-white-A700"
                        size="txtDigitalNumbersRegular96"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                    size="txtPoppinsRegular48"
                  >
                    DAYS
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                  <div className="flex flex-row font-digitalnumbers gap-[15px] items-center justify-between w-full">
                    <div className="bg-gradient2  border border-solid border-white-A700_87 flex flex-col items-center justify-end p-3.5 rounded-[5px]">
                      <Text
                        className="mt-[7px] md:text-5xl text-8xl text-white-A700"
                        size="txtDigitalNumbersRegular96"
                      >
                        2
                      </Text>
                    </div>
                    <div className="bg-gradient2  border border-solid border-white-A700_87 flex flex-col items-center justify-end p-3.5 rounded-[5px]">
                      <Text
                        className="mt-[7px] md:text-5xl text-8xl text-white-A700"
                        size="txtDigitalNumbersRegular96"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                    size="txtPoppinsRegular48"
                  >
                    HOURS
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                  <div className="flex flex-row font-digitalnumbers gap-[15px] items-center justify-between w-full">
                    <div className="bg-gradient2  border border-solid border-white-A700_87 flex flex-col items-center justify-end p-3.5 rounded-[5px]">
                      <Text
                        className="mt-[7px] md:text-5xl text-8xl text-white-A700"
                        size="txtDigitalNumbersRegular96"
                      >
                        5
                      </Text>
                    </div>
                    <div className="bg-gradient2  border border-solid border-white-A700_87 flex flex-col items-center justify-end p-3.5 rounded-[5px]">
                      <Text
                        className="mt-[7px] md:text-5xl text-8xl text-white-A700"
                        size="txtDigitalNumbersRegular96"
                      >
                        6
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                    size="txtPoppinsRegular48"
                  >
                    MINUTES
                  </Text>
                </div>
              </div>
            </List>
            <Text
              className="md:ml-[0] ml-[74px] mt-[82px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
              size="txtPoppinsRegular32WhiteA700"
            >
              We’ll let you know when we are Launching
            </Text>
            <div className="bg-white-A700 flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-3 md:ml-[0] mr-[9px] mt-[26px] px-4 rounded-[10px] w-[98%] md:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900_99"
                size="txtPoppinsRegular28"
              >
                Email Address
              </Text>
              <Button
                className="cursor-pointer leading-[normal] min-w-[238px] mr-3.5 rounded-br-[10px] rounded-tr-[10px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                color="cyan_400"
                size="2xl"
                variant="fill"
              >
                Notify Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPage;
