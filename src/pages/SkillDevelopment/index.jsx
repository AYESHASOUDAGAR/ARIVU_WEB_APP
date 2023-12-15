import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const SkillDevelopmentPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-16 items-center justify-start mx-auto pb-[98px] w-full">
        <div className="h-[492px] md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start mb-[-1.49px] mx-auto w-full z-[1]">
            <div className="bg-white-A700 flex flex-col items-center justify-start py-[17px] w-full">
              <div className="flex flex-col items-center justify-start mb-4 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[92%] md:w-full">
                  <Text
                    className="common-pointer text-black-900 text-xl"
                    size="txtInterSemiBold20Black900"
                    onClick={() => navigate("/dashboard")}
                  >
                    HOME
                  </Text>
                  <Img
                    className="common-pointer h-[7px] md:ml-[0] ml-[13px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                    onClick={() => navigate(-1)}
                  />
                  <Text
                    className="common-pointer md:ml-[0] ml-[1149px] text-black-900 text-xl"
                    size="txtInterSemiBold20Black900"
                    onClick={() => navigate("/profile")}
                  >
                    PROFILE
                  </Text>
                </div>
                <Line className="bg-gray-700_03 h-px mt-2.5 w-full" />
                <Img
                  className="h-[30px] mt-7 w-[30px]"
                  src="images/img_back.svg"
                  alt="back"
                />
              </div>
            </div>
            <Line className="bg-gray-700_03 h-px w-full" />
          </div>
          <div className="h-[345px] mt-auto mx-auto w-full">
            <Img
              className="absolute h-[345px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_academic2.png"
              alt="academicTwo"
            />
            <div className="absolute bg-gray-900_8c flex flex-col h-max inset-[0] items-center justify-center m-auto p-[138px] md:px-10 sm:px-5 w-full">
              <Text
                className="mt-1 sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtInterExtraBold50"
              >
                SKILL DEVELOPMENT
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1203px] mx-auto md:px-5 w-full">
          <div className="md:gap-5 gap-[63px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
            <div className="md:h-[477px] h-[481px] relative w-full">
              <div
                className="common-pointer absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-2.5 shadow-bs3 w-full"
                onClick={() => navigate("/clanguagecourse")}
              >
                <div className="flex flex-col items-start justify-start mb-2 mt-[257px] w-[99%] md:w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                    size="txtInterExtraBold26"
                  >
                    C Programming language
                  </Text>
                  <Text
                    className="ml-1.5 md:ml-[0] mt-2 text-gray-700 text-xs"
                    size="txtInterLight12"
                  >
                    <>
                      Vestibulum eget magna aliquet, ultrices
                      <br />
                      arcu non, suscipit urna. Aliquam porta,
                      <br />
                      lorem eu dictum rutrum
                    </>
                  </Text>
                  <div className="flex flex-row items-center justify-start ml-1 md:ml-[0] w-[36%] md:w-full">
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-[15px] ml-[5px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_One"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Two"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Three"
                    />
                    <Img
                      className="h-[15px] ml-1 w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Four"
                    />
                    <Text
                      className="ml-2 text-black-900 text-xs"
                      size="txtInterMedium12"
                    >
                      5.0
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[7px] items-start justify-start ml-0.5 md:ml-[0] mt-[11px] w-[26%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="mt-[3px] text-gray-700_01 text-xs"
                      size="txtInterMedium12Gray70001"
                    >
                      15+ hours
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-between ml-0.5 md:ml-[0] mt-[7px] w-[98%] md:w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <div className="flex flex-row gap-[7px] items-end justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <Text
                          className="mt-[5px] text-gray-700_02 text-xs"
                          size="txtInterMedium12Gray70002"
                        >
                          300+ students already enrolled
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1.5 items-end justify-start w-[64%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                        <Text
                          className="mt-[5px] text-gray-700_03 text-xs"
                          size="txtInterMedium12Gray70003"
                        >
                          Admission is open
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] mb-2 min-w-[95px] mt-3.5 text-center text-xs"
                      shape="round"
                      color="amber_300"
                      size="sm"
                      variant="fill"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray-200_02 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[13px] top-[0] w-full">
                <Img
                  className="h-[203px] md:h-auto mb-3 object-cover w-[56%]"
                  src="images/img_cprogramminglanguage.png"
                  alt="cprogramminglan_Two"
                />
              </div>
            </div>
            <div className="md:h-[476px] h-[481px] relative w-full">
              <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start mb-[5px] mt-[254px] w-[99%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterBold28"
                  >
                    HTML & CSS Bootcamp
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] mt-[5px] text-gray-700 text-xs"
                    size="txtInterLight12"
                  >
                    <>
                      Vestibulum eget magna aliquet, ultrices
                      <br />
                      arcu non, suscipit urna. Aliquam porta,
                      <br />
                      lorem eu dictum rutrum
                    </>
                  </Text>
                  <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] w-[37%] md:w-full">
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-[15px] ml-[5px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_One"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Two"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Three"
                    />
                    <Img
                      className="h-[15px] ml-1 w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Four"
                    />
                    <Text
                      className="ml-2 text-black-900 text-xs"
                      size="txtInterMedium12"
                    >
                      5.0
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[7px] items-start justify-start mt-[11px] w-[27%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="mt-[3px] text-gray-700_01 text-xs"
                      size="txtInterMedium12Gray70001"
                    >
                      15+ hours
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-between mt-[7px] w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <div className="flex flex-row gap-[7px] items-end justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <Text
                          className="mt-[5px] text-gray-700_02 text-xs"
                          size="txtInterMedium12Gray70002"
                        >
                          300+ students already enrolled
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-[63%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                        <Text
                          className="ml-[5px] mt-1 text-gray-700_03 text-xs"
                          size="txtInterMedium12Gray70003"
                        >
                          Admission is open
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] mb-2 min-w-[95px] mt-3.5 text-center text-xs"
                      shape="round"
                      color="amber_300"
                      size="sm"
                      variant="fill"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray-200_02 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[34px] sm:px-5 top-[0] w-full">
                <Img
                  className="h-[165px] md:h-auto mb-2 object-cover w-[97%]"
                  src="images/img_pngwing10.png"
                  alt="pngwingFive"
                />
              </div>
            </div>
            <div className="md:h-[478px] h-[481px] relative w-full">
              <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-3.5 shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start mb-[5px] mt-[253px] w-full">
                  <Text
                    className="md:ml-[0] ml-[5px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterExtraBold28"
                  >
                    MICROSOFT Office
                  </Text>
                  <Text
                    className="ml-1.5 md:ml-[0] mt-1.5 text-gray-700 text-xs"
                    size="txtInterLight12"
                  >
                    <>
                      Vestibulum eget magna aliquet, ultrices
                      <br />
                      arcu non, suscipit urna. Aliquam porta,
                      <br />
                      lorem eu dictum rutrum
                    </>
                  </Text>
                  <div className="flex flex-row items-center justify-start ml-1 md:ml-[0] w-[37%] md:w-full">
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-[15px] ml-[5px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_One"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Two"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Three"
                    />
                    <Img
                      className="h-[15px] ml-1 w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Four"
                    />
                    <Text
                      className="ml-2 text-black-900 text-xs"
                      size="txtInterMedium12"
                    >
                      5.0
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[7px] items-start justify-start ml-0.5 md:ml-[0] mt-[11px] w-[27%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="mt-[3px] text-gray-700_01 text-xs"
                      size="txtInterMedium12Gray70001"
                    >
                      15+ hours
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-between mt-[7px] w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <div className="flex flex-row gap-[7px] items-end justify-start ml-0.5 md:ml-[0] w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <Text
                          className="mt-[5px] text-gray-700_02 text-xs"
                          size="txtInterMedium12Gray70002"
                        >
                          300+ students already enrolled
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[9px] items-start justify-start w-[64%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                        <Text
                          className="mt-1 text-gray-700_03 text-xs"
                          size="txtInterMedium12Gray70003"
                        >
                          Admission is open
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] mb-2 min-w-[95px] mt-3.5 text-center text-xs"
                      shape="round"
                      color="amber_300"
                      size="sm"
                      variant="fill"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray-200_02 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[15px] top-[0] w-full">
                <Img
                  className="h-[121px] md:h-auto mb-[47px] mt-[43px] object-cover w-full"
                  src="images/img_pngwing6.png"
                  alt="pngwingSix"
                />
              </div>
            </div>
            <div className="md:h-[478px] h-[481px] relative w-full">
              <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start mb-[3px] mt-[252px] w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterExtraBold28"
                  >
                    Graphic Design
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] mt-[5px] text-gray-700 text-xs"
                    size="txtInterLight12"
                  >
                    <>
                      Vestibulum eget magna aliquet, ultrices
                      <br />
                      arcu non, suscipit urna. Aliquam porta,
                      <br />
                      lorem eu dictum rutrum
                    </>
                  </Text>
                  <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] w-[37%] md:w-full">
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-[15px] ml-[5px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_One"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Two"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Three"
                    />
                    <Img
                      className="h-[15px] ml-1 w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Four"
                    />
                    <Text
                      className="ml-2 text-black-900 text-xs"
                      size="txtInterMedium12"
                    >
                      5.0
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[7px] items-start justify-start mt-[11px] w-[27%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="mt-[3px] text-gray-700_01 text-xs"
                      size="txtInterMedium12Gray70001"
                    >
                      15+ hours
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-between mt-[7px] w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <div className="flex flex-row gap-[7px] items-end justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <Text
                          className="mt-[5px] text-gray-700_02 text-xs"
                          size="txtInterMedium12Gray70002"
                        >
                          300+ students already enrolled
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[7px] items-start justify-start w-[64%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                        <Text
                          className="mt-1 text-gray-700_03 text-xs"
                          size="txtInterMedium12Gray70003"
                        >
                          Admission is open
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] mb-2 min-w-[95px] mt-3.5 text-center text-xs"
                      shape="round"
                      color="amber_300"
                      size="sm"
                      variant="fill"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray-200_02 flex flex-col inset-x-[0] items-end justify-start mx-auto p-0.5 top-[0] w-full">
                <Img
                  className="h-[220px] my-2"
                  src="images/img_artistpana.svg"
                  alt="artistpana"
                />
              </div>
            </div>
            <div className="md:h-[477px] h-[481px] relative w-full">
              <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start mb-[3px] mt-64 w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterExtraBold28"
                  >
                    Hotel Management
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] text-gray-700 text-xs"
                    size="txtInterLight12"
                  >
                    <>
                      Vestibulum eget magna aliquet, ultrices
                      <br />
                      arcu non, suscipit urna. Aliquam porta,
                      <br />
                      lorem eu dictum rutrum
                    </>
                  </Text>
                  <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] w-[37%] md:w-full">
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-[15px] ml-[5px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_One"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Two"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Three"
                    />
                    <Img
                      className="h-[15px] ml-1 w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Four"
                    />
                    <Text
                      className="ml-2 text-black-900 text-xs"
                      size="txtInterMedium12"
                    >
                      5.0
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[7px] items-start justify-start mt-[11px] w-[27%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="mt-[3px] text-gray-700_01 text-xs"
                      size="txtInterMedium12Gray70001"
                    >
                      15+ hours
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-between mt-[7px] w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start">
                      <div className="flex flex-row gap-[7px] items-end justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <Text
                          className="mt-[5px] text-gray-700_02 text-xs"
                          size="txtInterMedium12Gray70002"
                        >
                          300+ students already enrolled
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-[63%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                        <Text
                          className="ml-[5px] mt-1 text-gray-700_03 text-xs"
                          size="txtInterMedium12Gray70003"
                        >
                          Admission is open
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] mb-2 min-w-[95px] mt-3.5 text-center text-xs"
                      shape="round"
                      color="amber_300"
                      size="sm"
                      variant="fill"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray-200_02 flex flex-col inset-x-[0] items-center justify-end mx-auto p-[7px] top-[0] w-full">
                <Img
                  className="h-[217px] mt-2.5"
                  src="images/img_femalechefpana.svg"
                  alt="femalechefpana"
                />
              </div>
            </div>
            <div className="md:h-[480px] h-[481px] relative w-full">
              <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto p-[15px] shadow-bs3 w-[93%]">
                <div className="flex flex-row gap-4 items-start justify-between mb-1 mt-[345px] w-full">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-center justify-start md:ml-[0] ml-[3px] w-[57%] md:w-full">
                      <Img
                        className="h-[15px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Img
                        className="h-[15px] ml-[5px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_One"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Two"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Three"
                      />
                      <Img
                        className="h-[15px] ml-1 w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Four"
                      />
                      <Text
                        className="ml-2 text-black-900 text-xs"
                        size="txtInterMedium12"
                      >
                        5.0
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[7px] items-start justify-start mt-[11px] w-[41%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="mt-[3px] text-gray-700_01 text-xs"
                        size="txtInterMedium12Gray70001"
                      >
                        15+ hours
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[7px] items-end justify-start mt-[7px] w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_group.svg"
                        alt="group"
                      />
                      <Text
                        className="mt-[5px] text-gray-700_02 text-xs"
                        size="txtInterMedium12Gray70002"
                      >
                        300+ students already enrolled
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start mt-1.5 w-[64%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_offer.svg"
                        alt="offer"
                      />
                      <Text
                        className="mt-1 text-gray-700_03 text-xs"
                        size="txtInterMedium12Gray70003"
                      >
                        Admission is open
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-2 min-w-[95px] mt-[68px] text-center text-xs"
                    shape="round"
                    color="amber_300"
                    size="sm"
                    variant="fill"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
              <div className="absolute bg-gray-200_02 flex flex-col items-end justify-end left-[0] p-1.5 top-[0] w-[93%]">
                <Img
                  className="h-[220px] mr-[58px] mt-[9px]"
                  src="images/img_architectamico.svg"
                  alt="architectamico"
                />
              </div>
              <Text
                className="absolute bottom-[35%] right-[0] md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                size="txtInterExtraBold26"
              >
                <>
                  Architecture <br />
                  Engineering
                </>
              </Text>
              <Text
                className="absolute bottom-1/4 left-[6%] text-gray-700 text-xs"
                size="txtInterLight12"
              >
                <>
                  Vestibulum eget magna aliquet, ultrices
                  <br />
                  arcu non, suscipit urna. Aliquam porta,
                  <br />
                  lorem eu dictum rutrum
                </>
              </Text>
            </div>
            <div className="md:h-[477px] h-[481px] relative w-full">
              <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start mb-[3px] mt-[252px] w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterExtraBold28"
                  >
                    Social Media Manager
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] mt-[5px] text-gray-700 text-xs"
                    size="txtInterLight12"
                  >
                    <>
                      Vestibulum eget magna aliquet, ultrices
                      <br />
                      arcu non, suscipit urna. Aliquam porta,
                      <br />
                      lorem eu dictum rutrum
                    </>
                  </Text>
                  <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] w-[37%] md:w-full">
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-[15px] ml-[5px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_One"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Two"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Three"
                    />
                    <Img
                      className="h-[15px] ml-1 w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Four"
                    />
                    <Text
                      className="ml-2 text-black-900 text-xs"
                      size="txtInterMedium12"
                    >
                      5.0
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[7px] items-start justify-start mt-[11px] w-[27%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="mt-[3px] text-gray-700_01 text-xs"
                      size="txtInterMedium12Gray70001"
                    >
                      15+ hours
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-between mt-[7px] w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <div className="flex flex-row gap-[7px] items-end justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <Text
                          className="mt-[5px] text-gray-700_02 text-xs"
                          size="txtInterMedium12Gray70002"
                        >
                          300+ students already enrolled
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[7px] items-end justify-start w-[64%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                        <Text
                          className="mt-[5px] text-gray-700_03 text-xs"
                          size="txtInterMedium12Gray70003"
                        >
                          Admission is open
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] mb-[7px] min-w-[95px] mt-3.5 text-center text-xs"
                      shape="round"
                      color="amber_300"
                      size="sm"
                      variant="fill"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray-200_ee flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <Img
                  className="h-60 md:h-auto object-cover w-[74%]"
                  src="images/img_pngwing7.png"
                  alt="pngwingSeven"
                />
              </div>
            </div>
            <div className="md:h-[477px] h-[481px] relative w-full">
              <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start mb-[3px] mt-[252px] w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterExtraBold28"
                  >
                    Crafting
                  </Text>
                  <Text
                    className="ml-1 md:ml-[0] mt-[5px] text-gray-700 text-xs"
                    size="txtInterLight12"
                  >
                    <>
                      Vestibulum eget magna aliquet, ultrices
                      <br />
                      arcu non, suscipit urna. Aliquam porta,
                      <br />
                      lorem eu dictum rutrum
                    </>
                  </Text>
                  <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] w-[37%] md:w-full">
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-[15px] ml-[5px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_One"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Two"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Three"
                    />
                    <Img
                      className="h-[15px] ml-1 w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Four"
                    />
                    <Text
                      className="ml-2 text-black-900 text-xs"
                      size="txtInterMedium12"
                    >
                      5.0
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[7px] items-start justify-start mt-[11px] w-[27%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="mt-[3px] text-gray-700_01 text-xs"
                      size="txtInterMedium12Gray70001"
                    >
                      15+ hours
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-between mt-[7px] w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <div className="flex flex-row gap-[7px] items-end justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <Text
                          className="mt-[5px] text-gray-700_02 text-xs"
                          size="txtInterMedium12Gray70002"
                        >
                          300+ students already enrolled
                        </Text>
                      </div>
                      <div className="flex flex-row items-end justify-start ml-0.5 md:ml-[0] w-[63%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                        <Text
                          className="ml-[5px] mt-[5px] text-gray-700_03 text-xs"
                          size="txtInterMedium12Gray70003"
                        >
                          Admission is open
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] mb-[7px] min-w-[95px] mt-3.5 text-center text-xs"
                      shape="round"
                      color="amber_300"
                      size="sm"
                      variant="fill"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray-200_ee flex flex-col inset-x-[0] items-center justify-start mx-auto p-5 top-[0] w-full">
                <Img
                  className="h-[200px] md:h-auto object-cover w-[200px]"
                  src="images/img_pngwing8.png"
                  alt="pngwingEight"
                />
              </div>
            </div>
            <div className="md:h-[477px] h-[481px] relative w-full">
              <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[15px] shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start mb-1 mt-[250px] w-full">
                  <Text
                    className="ml-1 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                    size="txtInterExtraBold28"
                  >
                    Autocad
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[5px] mt-2 text-gray-700 text-xs"
                    size="txtInterLight12"
                  >
                    <>
                      Vestibulum eget magna aliquet, ultrices
                      <br />
                      arcu non, suscipit urna. Aliquam porta,
                      <br />
                      lorem eu dictum rutrum
                    </>
                  </Text>
                  <div className="flex flex-row items-center justify-start md:ml-[0] ml-[3px] w-[37%] md:w-full">
                    <Img
                      className="h-[15px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-[15px] ml-[5px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_One"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Two"
                    />
                    <Img
                      className="h-[15px] ml-[3px] w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Three"
                    />
                    <Img
                      className="h-[15px] ml-1 w-[15px]"
                      src="images/img_signal.svg"
                      alt="signal_Four"
                    />
                    <Text
                      className="ml-2 text-black-900 text-xs"
                      size="txtInterMedium12"
                    >
                      5.0
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[7px] items-start justify-start mt-[11px] w-[27%] md:w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <Text
                      className="mt-[3px] text-gray-700_01 text-xs"
                      size="txtInterMedium12Gray70001"
                    >
                      15+ hours
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-between mt-[7px] w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <div className="flex flex-row gap-[7px] items-end justify-start w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_group.svg"
                          alt="group"
                        />
                        <Text
                          className="mt-[5px] text-gray-700_02 text-xs"
                          size="txtInterMedium12Gray70002"
                        >
                          300+ students already enrolled
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-end justify-start w-[64%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_offer.svg"
                          alt="offer"
                        />
                        <Text
                          className="mt-[5px] text-gray-700_03 text-xs"
                          size="txtInterMedium12Gray70003"
                        >
                          Admission is open
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] mb-[7px] min-w-[95px] mt-3.5 text-center text-xs"
                      shape="round"
                      color="amber_300"
                      size="sm"
                      variant="fill"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray-200_ee flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <Img
                  className="h-60 md:h-auto object-cover w-full"
                  src="images/img_pngwing9.png"
                  alt="pngwingNine"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillDevelopmentPage;
