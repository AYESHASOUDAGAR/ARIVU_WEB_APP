import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const QuizzePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue-300 flex flex-col font-inter gap-3 justify-end mx-auto py-[38px] w-full">
        <Img
          className="common-pointer h-[25px] md:ml-[0] ml-[34px] mr-[1381px] mt-[53px] w-[25px]"
          src="images/img_back.svg"
          alt="back"
          onClick={() => navigate(-1)}
        />
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-tl-[100px] rounded-tr-[100px] w-full">
              <div className="flex flex-col md:gap-10 gap-[123px] items-center justify-start max-w-[1121px] mb-[18px] mx-auto md:px-5 w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInterBold40"
                >
                  ENGLISH QUIZZES
                </Text>
                <div className="flex flex-col gap-[29px] justify-start w-full">
                  <List
                    className="flex flex-col gap-[19px] mr-[46px] w-[96%]"
                    orientation="vertical"
                  >
                    <div className="md:h-40 h-[143px] relative w-full">
                      <Text
                        className="m-auto text-black-900 text-xl"
                        size="txtInterRegular20Black900"
                      >
                        <>
                          What is a noun?
                          <br />
                          <br /> <br /> a) Action word b) Person, place, or
                          thing c) Describing word
                        </>
                      </Text>
                      <div className="absolute flex md:h-40 h-[143px] inset-[0] justify-end m-auto w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start mb-[45px] ml-[59px] mt-auto w-[74%]">
                          <div className="bg-white-A700 border border-black-900 border-solid h-[25px] w-[25px]"></div>
                          <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[308px] w-[25px]"></div>
                          <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[403px] w-[25px]"></div>
                        </div>
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl"
                          size="txtInterRegular20Black900"
                        >
                          <>
                            What is a noun?
                            <br />
                            <br /> <br /> a) Action word b) Person, place, or
                            thing c) Describing word
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:h-40 h-[143px] justify-end relative w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start mb-[45px] ml-[59px] mt-auto w-[74%]">
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[308px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[403px] w-[25px]"></div>
                      </div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl"
                        size="txtInterRegular20Black900"
                      >
                        <>
                          What is a noun?
                          <br />
                          <br /> <br /> a) Action word b) Person, place, or
                          thing c) Describing word
                        </>
                      </Text>
                    </div>
                    <div className="flex md:h-40 h-[143px] justify-end relative w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start mb-[45px] ml-[59px] mt-auto w-[74%]">
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[308px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[403px] w-[25px]"></div>
                      </div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl"
                        size="txtInterRegular20Black900"
                      >
                        <>
                          What is a noun?
                          <br />
                          <br /> <br /> a) Action word b) Person, place, or
                          thing c) Describing word
                        </>
                      </Text>
                    </div>
                    <div className="flex md:h-40 h-[143px] justify-end relative w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start mb-[45px] ml-[59px] mt-auto w-[74%]">
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[308px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[403px] w-[25px]"></div>
                      </div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl"
                        size="txtInterRegular20Black900"
                      >
                        <>
                          What is a noun?
                          <br />
                          <br /> <br /> a) Action word b) Person, place, or
                          thing c) Describing word
                        </>
                      </Text>
                    </div>
                    <div className="flex md:h-40 h-[143px] justify-end relative w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start mb-[45px] ml-[59px] mt-auto w-[74%]">
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[308px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[403px] w-[25px]"></div>
                      </div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl"
                        size="txtInterRegular20Black900"
                      >
                        <>
                          What is a noun?
                          <br />
                          <br /> <br /> a) Action word b) Person, place, or
                          thing c) Describing word
                        </>
                      </Text>
                    </div>
                    <div className="flex md:h-40 h-[143px] justify-end relative w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start mb-[45px] ml-[59px] mt-auto w-[74%]">
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[308px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[403px] w-[25px]"></div>
                      </div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl"
                        size="txtInterRegular20Black900"
                      >
                        <>
                          What is a noun?
                          <br />
                          <br /> <br /> a) Action word b) Person, place, or
                          thing c) Describing word
                        </>
                      </Text>
                    </div>
                    <div className="flex md:h-40 h-[143px] justify-end relative w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start mb-[45px] ml-[59px] mt-auto w-[74%]">
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[308px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[403px] w-[25px]"></div>
                      </div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl"
                        size="txtInterRegular20Black900"
                      >
                        <>
                          What is a noun?
                          <br />
                          <br /> <br /> a) Action word b) Person, place, or
                          thing c) Describing word
                        </>
                      </Text>
                    </div>
                    <div className="flex md:h-40 h-[143px] justify-end relative w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start mb-[45px] ml-[59px] mt-auto w-[74%]">
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[308px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[403px] w-[25px]"></div>
                      </div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl"
                        size="txtInterRegular20Black900"
                      >
                        <>
                          What is a noun?
                          <br />
                          <br /> <br /> a) Action word b) Person, place, or
                          thing c) Describing word
                        </>
                      </Text>
                    </div>
                    <div className="flex md:h-40 h-[143px] justify-end relative w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start mb-[45px] ml-[59px] mt-auto w-[74%]">
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[308px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[403px] w-[25px]"></div>
                      </div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl"
                        size="txtInterRegular20Black900"
                      >
                        <>
                          What is a noun?
                          <br />
                          <br /> <br /> a) Action word b) Person, place, or
                          thing c) Describing word
                        </>
                      </Text>
                    </div>
                    <div className="flex md:h-40 h-[143px] justify-end relative w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 h-full items-center justify-start mb-[45px] ml-[59px] mt-auto w-[74%]">
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[308px] w-[25px]"></div>
                        <div className="bg-white-A700 border border-black-900 border-solid h-[25px] md:ml-[0] ml-[403px] w-[25px]"></div>
                      </div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-black-900 text-xl"
                        size="txtInterRegular20Black900"
                      >
                        <>
                          What is a noun?
                          <br />
                          <br /> <br /> a) Action word b) Person, place, or
                          thing c) Describing word
                        </>
                      </Text>
                    </div>
                  </List>
                  <Button
                    className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[250px] md:ml-[0] ml-[871px] rounded-[35px] sm:text-[31px] md:text-[33px] text-[35px] text-center"
                    onClick={() => navigate("/quizzesubmit")}
                    color="blue_300"
                    size="xl"
                    variant="fill"
                  >
                    SUBMIT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizzePagePage;
