import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Slider, Text } from "components";

const VocationalDevelopmentPage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[100px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start py-4 w-full">
            <div className="flex flex-col items-start justify-start mb-3.5 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start max-w-[1337px] mx-auto md:px-5 w-full">
                <Text
                  className="common-pointer text-black-900 text-xl"
                  size="txtInterSemiBold20Black900"
                  onClick={() => navigate("/dashboard")}
                >
                  HOME
                </Text>
                <Img
                  className="h-[7px] sm:ml-[0] ml-[13px] sm:mt-0 mt-[9px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
                <Text
                  className="common-pointer sm:ml-[0] ml-[1171px] text-black-900 text-xl"
                  size="txtInterSemiBold20Black900"
                  onClick={() => navigate("/profile")}
                >
                  PROFILE
                </Text>
              </div>
              <Line className="bg-gray-700_03 h-px mt-2.5 w-full" />
              <Img
                className="common-pointer h-[30px] md:ml-[0] ml-[63px] mt-[31px] w-[30px]"
                src="images/img_back.svg"
                alt="back"
                onClick={() => navigate(-1)}
              />
            </div>
          </div>
          <Line className="bg-gray-700_03 h-px w-full" />
        </div>
        <div className="h-[344px] md:px-5 relative w-full">
          <Img
            className="h-[344px] m-auto object-cover w-full"
            src="images/img_academic2_344x1440.png"
            alt="academicTwo"
          />
          <div className="absolute bg-gray-900_8c flex flex-col h-max inset-[0] items-center justify-center m-auto p-[137px] md:px-10 sm:px-5 w-full">
            <Text
              className="mt-[5px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
              size="txtInterExtraBold50"
            >
              VOCATIONAL DEVELOPMENT
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1174px] mt-[47px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[63px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="md:h-[477px] h-[497px] sm:ml-[0] relative w-full">
                <div className="absolute md:h-[477px] h-[481px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 shadow-bs3 w-full">
                    <div className="flex flex-col items-start justify-start mb-0.5 mt-[247px] w-full">
                      <Text
                        className="ml-0.5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                        size="txtInterExtraBold28"
                      >
                        Typewriting Bootcamp
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-2.5 text-gray-700 text-xs"
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
                  <div className="absolute bg-gray-200_03 h-[241px] inset-x-[0] mx-auto top-[0] w-full"></div>
                </div>
                <Img
                  className="absolute h-[236px] left-[8%] top-[0]"
                  src="images/img_typingpana.svg"
                  alt="typingpana"
                />
              </div>
              <div className="sm:h-[478px] h-[481px] md:h-[494px] sm:ml-[0] sm:mt-0 mt-4 relative w-full">
                <div className="absolute md:h-[478px] h-[481px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 shadow-bs3 w-full">
                    <div className="flex flex-col items-start justify-start mb-[3px] mt-[247px] w-full">
                      <Text
                        className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                        size="txtInterExtraBold28"
                      >
                        English Master Course
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-2.5 text-gray-700 text-xs"
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
                  <div className="absolute bg-gray-200_03 h-[241px] inset-x-[0] mx-auto top-[0] w-full"></div>
                </div>
                <Img
                  className="absolute h-[223px] inset-x-[0] mx-auto top-[4%]"
                  src="images/img_englishteacherpana.svg"
                  alt="englishteacherp"
                />
              </div>
              <div className="sm:h-[478px] h-[486px] md:h-[489px] sm:ml-[0] sm:mt-0 mt-[11px] relative w-full">
                <div className="absolute md:h-[478px] h-[481px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-3.5 shadow-bs3 w-full">
                    <div className="flex flex-col items-start justify-start mb-[5px] mt-[249px] w-full">
                      <Text
                        className="md:ml-[0] ml-[5px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                        size="txtInterExtraBold28"
                      >
                        Video Editing
                      </Text>
                      <Text
                        className="ml-1.5 md:ml-[0] mt-2.5 text-gray-700 text-xs"
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
                  <div className="absolute bg-gray-200_03 h-[241px] inset-x-[0] mx-auto top-[0] w-full"></div>
                </div>
                <Img
                  className="absolute h-60 left-[13%] top-[0] w-60"
                  src="images/img_videouploadamico.svg"
                  alt="videouploadamic"
                />
              </div>
            </List>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[76px] w-full">
              <div className="md:h-[478px] h-[483px] relative w-[30%] md:w-full">
                <div className="absolute md:h-[478px] h-[481px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 shadow-bs3 w-full">
                    <div className="flex flex-col items-start justify-start mb-[3px] mt-[247px] w-full">
                      <Text
                        className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                        size="txtInterExtraBold28"
                      >
                        Photography
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-2.5 text-gray-700 text-xs"
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
                  <div className="absolute bg-gray-200_03 h-[241px] inset-x-[0] mx-auto top-[0] w-full"></div>
                </div>
                <div className="absolute md:h-[235px] h-[241px] inset-x-[0] mx-auto top-[0] w-[72%]">
                  <div className="absolute md:h-[235px] h-[241px] inset-y-[0] left-[0] my-auto w-[90%]">
                    <div className="md:h-[235px] h-[241px] m-auto w-full">
                      <div className="absolute flex flex-col gap-[41px] h-max inset-[0] justify-center m-auto w-full">
                        <Img
                          className="h-[173px] mr-[109px]"
                          src="images/img_photos.svg"
                          alt="photos"
                        />
                        <Img
                          className="h-[21px] md:ml-[0] ml-[179px]"
                          src="images/img_contrast_gray_300_21x45.svg"
                          alt="contrast"
                        />
                      </div>
                      <div className="absolute bottom-[0] h-[100px] md:h-[94px] left-1/4 w-[41%]">
                        <div className="absolute h-[100px] md:h-[52px] inset-[0] justify-center m-auto w-full">
                          <Img
                            className="absolute bottom-[0] h-[52px] left-[0]"
                            src="images/img_lightbulb_blue_gray_900.svg"
                            alt="lightbulb"
                          />
                          <Img
                            className="absolute h-[51px] inset-x-[0] mx-auto top-[0]"
                            src="images/img_close_blue_gray_700_51x90.svg"
                            alt="close"
                          />
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start my-auto p-0.5 right-[0] w-[94%]"
                          style={{
                            backgroundImage: "url('images/img_group255.svg')",
                          }}
                        >
                          <div className="flex flex-row items-start justify-evenly my-[5px] w-[79px] md:w-full">
                            <div className="flex flex-col items-start justify-start mt-[50px] w-[7%]">
                              <Img
                                className="h-[3px] ml-0.5 md:ml-[0] w-0.5"
                                src="images/img_vector_blue_gray_900_12x1.svg"
                                alt="vector"
                              />
                              <div className="flex flex-row items-center justify-evenly mt-0.5 w-full">
                                <Img
                                  className="h-px w-px"
                                  src="images/img_vector_blue_gray_900_12x1.svg"
                                  alt="vector_One"
                                />
                                <Img
                                  className="h-[13px]"
                                  src="images/img_vector_blue_gray_900_13x1.svg"
                                  alt="vector_Two"
                                />
                              </div>
                            </div>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-20 items-end justify-end pt-1.5 w-[79%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group256.svg')",
                              }}
                            >
                              <Img
                                className="h-1.5 mr-[3px] w-[5px]"
                                src="images/img_vector_white_a700_6x5.svg"
                                alt="vector_Three"
                              />
                              <div className="h-16 md:h-[61px] mt-0.5 relative w-full">
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start mt-[13px] w-1/5"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group258.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-[17px]"
                                    src="images/img_user_white_a700_17x12.svg"
                                    alt="user"
                                  />
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[3px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group257.svg')",
                                  }}
                                >
                                  <div className="flex flex-col gap-[21px] items-start justify-start mt-3.5 w-[97%] md:w-full">
                                    <div className="flex flex-row items-start justify-between w-full">
                                      <Img
                                        className="h-[9px] mb-0.5"
                                        src="images/img_vector_white_a700_9x5.svg"
                                        alt="vector_Four"
                                      />
                                      <Img
                                        className="h-[9px] mt-0.5"
                                        src="images/img_vector_white_a700_9x5.svg"
                                        alt="vector_Five"
                                      />
                                    </div>
                                    <Img
                                      className="h-1.5 w-[5px]"
                                      src="images/img_vector_white_a700_6x5.svg"
                                      alt="vector_Six"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Img
                              className="h-[7px] mt-[15px]"
                              src="images/img_vector_blue_gray_900_12x1.svg"
                              alt="vector_Seven"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[78px] right-[1%] top-[26%]"
                      src="images/img_user_blue_gray_800_78x95.svg"
                      alt="user_One"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[3%] h-[121px] right-[0]"
                    src="images/img_character_black_900.svg"
                    alt="character"
                  />
                </div>
              </div>
              <div className="md:h-[478px] h-[481px] relative w-[30%] md:w-full">
                <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start mb-[3px] mt-[247px] w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtInterExtraBold28"
                    >
                      Digital Marketing
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] mt-2.5 text-gray-700 text-xs"
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
                        alt="signal_Five"
                      />
                      <Img
                        className="h-[15px] ml-[5px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Six"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Seven"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Eight"
                      />
                      <Img
                        className="h-[15px] ml-1 w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Nine"
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
                        alt="clock_One"
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
                            alt="group_One"
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
                            alt="offer_One"
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
                <div className="absolute bg-gray-200_03 flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <Img
                    className="h-60"
                    src="images/img_ecommercewebpagerafiki.svg"
                    alt="ecommercewebpag"
                  />
                </div>
              </div>
              <div className="md:h-[478px] h-[481px] relative w-[30%] md:w-full">
                <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[15px] shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start mb-1 mt-[248px] w-full">
                    <Text
                      className="ml-1 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtInterExtraBold28"
                    >
                      Fashion Design
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[5px] mt-2.5 text-gray-700 text-xs"
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
                        alt="signal_Ten"
                      />
                      <Img
                        className="h-[15px] ml-[5px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Eleven"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Twelve"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Thirteen"
                      />
                      <Img
                        className="h-[15px] ml-1 w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Fourteen"
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
                        alt="clock_Two"
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
                            alt="group_Two"
                          />
                          <Text
                            className="mt-[5px] text-gray-700_02 text-xs"
                            size="txtInterMedium12Gray70002"
                          >
                            300+ students already enrolled
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-start w-[64%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_offer.svg"
                            alt="offer_Two"
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
                <div className="absolute bg-gray-200_03 flex flex-col inset-x-[0] items-end justify-start mx-auto p-0.5 top-[0] w-full">
                  <div className="h-[236px] mr-10 relative w-[70%]">
                    <div className="h-[236px] m-auto w-full">
                      <div className="absolute bottom-[11%] h-[168px] right-[0] w-[95%]">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <div className="flex flex-row gap-5 items-start justify-between w-full">
                            <div className="flex flex-col items-center justify-start mt-[19px] w-1/2">
                              <div className="md:h-[100px] h-[149px] relative w-full">
                                <Img
                                  className="absolute bottom-[0] h-[87px] left-[0]"
                                  src="images/img_chair.svg"
                                  alt="chair"
                                />
                                <div className="absolute md:h-[100px] h-[138px] inset-x-[0] mx-auto top-[0] w-[98%]">
                                  <Img
                                    className="absolute bottom-[0] h-[79px] left-[5%]"
                                    src="images/img_settings_blue_gray_700_79x55.svg"
                                    alt="settings"
                                  />
                                  <div className="absolute md:h-[100px] h-[108px] inset-x-[0] mx-auto top-[0] w-full">
                                    <div className="md:h-[100px] h-[108px] m-auto w-full">
                                      <div className="md:h-[100px] h-[108px] m-auto w-full">
                                        <div className="md:h-[100px] h-[108px] m-auto w-full">
                                          <div className="md:h-[100px] h-[108px] m-auto w-full">
                                            <Img
                                              className="absolute h-10 left-[0] top-[0] w-[39px]"
                                              src="images/img_vector_blue_gray_800.svg"
                                              alt="vector_Eight"
                                            />
                                            <div className="absolute md:h-[100px] h-[108px] inset-y-[0] my-auto right-[0] w-3/4">
                                              <div
                                                className="absolute bg-cover bg-no-repeat flex flex-col h-7 items-end justify-start left-[0] pb-1 px-1 top-[18%] w-1/2"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group260.svg')",
                                                }}
                                              >
                                                <div className="flex flex-col items-start justify-start mb-4 w-[7px] md:w-full">
                                                  <Img
                                                    className="h-px"
                                                    src="images/img_vector_deep_orange_a100.svg"
                                                    alt="vector_Nine"
                                                  />
                                                  <Img
                                                    className="h-[5px]"
                                                    src="images/img_vector_deep_orange_a100_5x7.svg"
                                                    alt="vector_Ten"
                                                  />
                                                </div>
                                              </div>
                                              <div className="absolute md:h-[100px] h-[108px] inset-y-[0] my-auto right-[0] w-[96%]">
                                                <div className="md:h-[100px] h-[108px] m-auto w-full">
                                                  <div className="md:h-[100px] h-[108px] m-auto w-full">
                                                    <div className="md:h-[100px] h-[108px] m-auto w-full">
                                                      <div className="md:h-[100px] h-[108px] m-auto w-full">
                                                        <div className="absolute md:h-[100px] h-[108px] inset-[0] justify-center m-auto w-[97%]">
                                                          <div className="md:h-[100px] h-[108px] m-auto w-full">
                                                            <div className="md:h-[100px] h-[108px] m-auto w-full">
                                                              <div className="md:h-[100px] h-[108px] m-auto w-full">
                                                                <div className="md:h-[100px] h-[108px] m-auto w-full">
                                                                  <div className="md:h-[100px] h-[108px] m-auto w-full">
                                                                    <div className="absolute md:h-[100px] h-[108px] inset-[0] justify-center m-auto w-full">
                                                                      <div className="absolute md:h-[100px] h-[106px] inset-[0] justify-center m-auto w-full">
                                                                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                                                                          <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                                                                            <Img
                                                                              className="h-[25px]"
                                                                              src="images/img_vector_purple_a400.svg"
                                                                              alt="vector_Eleven"
                                                                            />
                                                                            <div
                                                                              className="bg-cover bg-no-repeat flex flex-col h-[58px] items-end justify-start pb-0.5 px-0.5 w-full"
                                                                              style={{
                                                                                backgroundImage:
                                                                                  "url('images/img_group262.svg')",
                                                                              }}
                                                                            >
                                                                              <Img
                                                                                className="h-[55px]"
                                                                                src="images/img_settings_blue_gray_800.svg"
                                                                                alt="settings_One"
                                                                              />
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                        <Img
                                                                          className="absolute bottom-[0] h-[55px] left-[3%]"
                                                                          src="images/img_checkmark_black_900.svg"
                                                                          alt="checkmark"
                                                                        />
                                                                      </div>
                                                                      <Img
                                                                        className="absolute bottom-[0] h-[57px] left-[18%]"
                                                                        src="images/img_checkmark_black_900.svg"
                                                                        alt="checkmark_One"
                                                                      />
                                                                      <Img
                                                                        className="absolute bottom-[31%] h-[30px] right-[0] w-[31px]"
                                                                        src="images/img_contrast_black_900.svg"
                                                                        alt="contrast_One"
                                                                      />
                                                                    </div>
                                                                    <Img
                                                                      className="absolute bottom-1/4 h-[37px] right-[0]"
                                                                      src="images/img_checkmark_black_900.svg"
                                                                      alt="checkmark_Two"
                                                                    />
                                                                  </div>
                                                                  <Img
                                                                    className="absolute bottom-[22%] h-[38px] right-[7%]"
                                                                    src="images/img_checkmark_black_900.svg"
                                                                    alt="checkmark_Three"
                                                                  />
                                                                </div>
                                                                <div className="absolute bottom-[3%] flex flex-row items-start justify-center right-[20%] w-[47%]">
                                                                  <Img
                                                                    className="h-[54px] mt-0.5"
                                                                    src="images/img_checkmark_black_900.svg"
                                                                    alt="checkmark_Four"
                                                                  />
                                                                  <Img
                                                                    className="h-[52px]"
                                                                    src="images/img_vector_black_900.svg"
                                                                    alt="vector_Twelve"
                                                                  />
                                                                </div>
                                                              </div>
                                                              <Img
                                                                className="absolute bottom-[14%] h-[45px] right-[16%]"
                                                                src="images/img_vector_black_900.svg"
                                                                alt="vector_Thirteen"
                                                              />
                                                            </div>
                                                            <Img
                                                              className="absolute bottom-[16%] h-11 right-[8%]"
                                                              src="images/img_checkmark_black_900.svg"
                                                              alt="checkmark_Five"
                                                            />
                                                          </div>
                                                          <Img
                                                            className="absolute bottom-[0] h-[57px] inset-x-[0] mx-auto"
                                                            src="images/img_contrast_black_900.svg"
                                                            alt="contrast_Two"
                                                          />
                                                        </div>
                                                        <div className="absolute flex flex-col gap-[15px] h-max inset-y-[0] items-start justify-start my-auto right-[28%] w-[22%]">
                                                          <Img
                                                            className="h-[25px]"
                                                            src="images/img_checkmark_black_900_25x12.svg"
                                                            alt="checkmark_Six"
                                                          />
                                                          <Img
                                                            className="h-[50px]"
                                                            src="images/img_checkmark_black_900.svg"
                                                            alt="checkmark_Seven"
                                                          />
                                                        </div>
                                                        <Img
                                                          className="absolute bottom-[0] h-14 left-[0]"
                                                          src="images/img_checkmark_black_900.svg"
                                                          alt="checkmark_Eight"
                                                        />
                                                      </div>
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat flex flex-row h-[22px] inset-x-[0] items-start justify-center mx-auto top-[26%] w-[24%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group264.svg')",
                                                        }}
                                                      >
                                                        <div className="h-2.5 md:h-[18px] mt-2 relative w-[34%]">
                                                          <Img
                                                            className="absolute h-2.5 inset-y-[0] my-auto right-[0]"
                                                            src="images/img_vector_blue_gray_900_10x3.svg"
                                                            alt="vector_Fourteen"
                                                          />
                                                          <Img
                                                            className="absolute bottom-[0] h-[9px] left-[0]"
                                                            src="images/img_vector_blue_gray_900_10x3.svg"
                                                            alt="vector_Fifteen"
                                                          />
                                                        </div>
                                                        <div className="flex flex-row items-start justify-center mt-[5px] mx-0.5 w-[17%]">
                                                          <Img
                                                            className="h-[11px]"
                                                            src="images/img_vector_blue_gray_900_10x3.svg"
                                                            alt="vector_Sixteen"
                                                          />
                                                          <Img
                                                            className="h-[9px]"
                                                            src="images/img_vector_blue_gray_900_10x3.svg"
                                                            alt="vector_Seventeen"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="absolute flex flex-row inset-x-[0] items-end justify-center mx-auto top-[8%] w-[33%]">
                                                      <Img
                                                        className="h-[17px] mt-3"
                                                        src="images/img_user_blue_gray_800_17x12.svg"
                                                        alt="user_Two"
                                                      />
                                                      <Img
                                                        className="h-[26px] mb-[3px]"
                                                        src="images/img_user_blue_gray_800_17x12.svg"
                                                        alt="user_Three"
                                                      />
                                                    </div>
                                                  </div>
                                                  <div className="absolute flex flex-row inset-x-[0] items-end justify-center mx-auto top-[8%] w-[33%]">
                                                    <div
                                                      className="bg-cover bg-no-repeat md:h-6 h-[19px] mt-2.5 p-0.5 relative w-[48%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group265.svg')",
                                                      }}
                                                    >
                                                      <div className="absolute h-3.5 inset-y-[0] my-auto right-[11%] w-[67%]">
                                                        <Img
                                                          className="absolute h-2 right-[0] top-[0]"
                                                          src="images/img_vector_black_900_8x6.svg"
                                                          alt="vector_Eighteen"
                                                        />
                                                        <Img
                                                          className="absolute h-3.5 inset-y-[0] left-[0] my-auto"
                                                          src="images/img_vector_black_900_14x7.svg"
                                                          alt="vector_Nineteen"
                                                        />
                                                      </div>
                                                      <Img
                                                        className="absolute h-[13px] left-[11%] top-[11%]"
                                                        src="images/img_vector_black_900_13x3.svg"
                                                        alt="vector_Twenty"
                                                      />
                                                    </div>
                                                    <div
                                                      className="bg-cover bg-no-repeat md:h-6 h-[26px] mb-[3px] relative w-[48%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group265.svg')",
                                                      }}
                                                    >
                                                      <div className="absolute bottom-[0] h-[21px] inset-x-[0] mx-auto w-[67%]">
                                                        <Img
                                                          className="absolute h-[15px] inset-y-[0] left-[0] my-auto"
                                                          src="images/img_vector_black_900_8x6.svg"
                                                          alt="vector_TwentyOne"
                                                        />
                                                        <Img
                                                          className="absolute h-[21px] inset-y-[0] my-auto right-[0]"
                                                          src="images/img_vector_black_900_8x6.svg"
                                                          alt="vector_TwentyTwo"
                                                        />
                                                      </div>
                                                      <Line className="absolute bg-black-900 h-4 right-[0] top-[0] w-[3px]" />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col gap-[9px] h-[94px] inset-x-[0] justify-start mx-auto p-1.5 w-[97%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group261.svg')",
                                                  }}
                                                >
                                                  <Img
                                                    className="h-1.5 md:ml-[0] ml-[11px] mr-[38px]"
                                                    src="images/img_user_deep_orange_100.svg"
                                                    alt="user_Four"
                                                  />
                                                  <Img
                                                    className="h-[7px] mb-[59px] md:ml-[0] ml-[5px]"
                                                    src="images/img_vector_deep_orange_a100_7x3.svg"
                                                    alt="vector_TwentyFour"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <Img
                                            className="absolute h-10 left-[5%] top-[23%]"
                                            src="images/img_play_gray_200_01.svg"
                                            alt="play"
                                          />
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-col h-8 items-start justify-start left-[11%] top-[4%] w-1/5"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group259.svg')",
                                          }}
                                        >
                                          <div
                                            className="bg-cover bg-no-repeat flex flex-col h-1 items-center justify-start mb-3.5 mt-[11px] w-[5px] md:w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group266.svg')",
                                            }}
                                          >
                                            <Img
                                              className="h-1 w-[5px]"
                                              src="images/img_vector_black_900_4x5.svg"
                                              alt="vector_TwentyFive"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute h-[15px] left-[15%] top-[23%]"
                                        src="images/img_mobile_purple_a400.svg"
                                        alt="mobile"
                                      />
                                    </div>
                                    <Img
                                      className="absolute h-[33px] left-[5%] top-1/4"
                                      src="images/img_settings_deep_orange_100.svg"
                                      alt="settings_Two"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[41%]">
                              <div className="md:h-[108px] h-[140px] relative w-full">
                                <div className="absolute md:h-[104px] h-[122px] left-[0] top-[0] w-[91%]">
                                  <div className="absolute h-28 md:h-[104px] left-[0] top-[0] w-[96%]">
                                    <div className="absolute h-[104px] inset-x-[0] mx-auto top-[0] w-full">
                                      <div className="h-[104px] m-auto w-full">
                                        <div className="flex m-auto w-full">
                                          <Img
                                            className="h-[104px] my-auto"
                                            src="images/img_vector_gray_200_01_104x21.svg"
                                            alt="vector_TwentySix"
                                          />
                                          <Img
                                            className="h-[33px] ml-[-6.32px] z-[1]"
                                            src="images/img_vector_gray_200_01.svg"
                                            alt="vector_TwentySeven"
                                          />
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-end justify-start left-[4%] my-auto pb-3.5 px-3.5 w-[47%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group268.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-0.5 mb-[76px] w-[3px]"
                                            src="images/img_vector_gray_200_01_2x3.svg"
                                            alt="vector_TwentyEight"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-end justify-start left-[26%] my-auto pb-3.5 px-3.5 w-[43%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group269.svg')",
                                        }}
                                      >
                                        <Img
                                          className="h-0.5 mb-[66px] w-[3px]"
                                          src="images/img_vector_gray_200_01_2x3.svg"
                                          alt="vector_TwentyNine"
                                        />
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0] flex flex-col right-[14%] w-[38%]">
                                      <div className="flex h-7 md:h-[25px] justify-end mx-auto w-full">
                                        <Img
                                          className="h-[15px] mb-0.5 mt-auto mx-auto w-4"
                                          src="images/img_mobile_blue_gray_900.svg"
                                          alt="mobile_One"
                                        />
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group271.svg')",
                                          }}
                                        >
                                          <div
                                            className="bg-cover bg-no-repeat flex flex-col h-7 items-end justify-start pb-[11px] px-[11px] w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group272.svg')",
                                            }}
                                          >
                                            <Img
                                              className="h-0.5 mb-3 w-[3px]"
                                              src="images/img_vector_gray_200_01_2x3.svg"
                                              alt="vector_Thirty"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="bg-cover bg-no-repeat flex flex-col h-[83px] justify-center mt-[-18.37px] mx-auto pr-0.5 py-0.5 w-[77%] z-[1]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group270.svg')",
                                        }}
                                      >
                                        <Line className="bg-blue_gray-900 h-[18px] md:ml-[0] ml-[15px] mt-[39px] w-[5px]" />
                                        <Img
                                          className="h-3.5 mb-[5px] mr-3.5"
                                          src="images/img_settings_blue_gray_900_14x6.svg"
                                          alt="settings_Three"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-24 items-end justify-start pb-[13px] px-[13px] right-[0] w-[41%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group267.svg')",
                                    }}
                                  >
                                    <Img
                                      className="h-0.5 mb-[79px] w-[3px]"
                                      src="images/img_vector_gray_200_01_2x3.svg"
                                      alt="vector_ThirtyTwo"
                                    />
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[0] h-[108px] right-[0]"
                                  src="images/img_vector_gray_200_01_108x21.svg"
                                  alt="vector_ThirtyThree"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[22%] h-[33px] right-[23%]"
                          src="images/img_user_white_a700_33x50.svg"
                          alt="user_Five"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[16%] h-[31px] right-[34%]"
                        src="images/img_checkmark_white_a700.svg"
                        alt="checkmark_Nine"
                      />
                      <Img
                        className="absolute h-[236px] inset-y-[0] left-[0] my-auto"
                        src="images/img_post.svg"
                        alt="post"
                      />
                    </div>
                    <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[113px] justify-start right-[2%] w-[70%]">
                      <Img
                        className="h-[42px] md:ml-[0] ml-[11px]"
                        src="images/img_settings_purple_a400.svg"
                        alt="settings_Four"
                      />
                      <div className="flex flex-row gap-2 items-start justify-between w-full">
                        <Img
                          className="h-[47px] mt-[17px]"
                          src="images/img_comments.svg"
                          alt="comments"
                        />
                        <Img
                          className="h-14 mb-2"
                          src="images/img_bag.svg"
                          alt="bag"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[73px] w-full">
              <div className="md:h-[477px] h-[486px] relative w-[30%] md:w-full">
                <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start mb-[3px] mt-[247px] w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtInterExtraBold28"
                    >
                      Beauty & Wellness
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] mt-2.5 text-gray-700 text-xs"
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
                        alt="signal_Fifteen"
                      />
                      <Img
                        className="h-[15px] ml-[5px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Sixteen"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Seventeen"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Eighteen"
                      />
                      <Img
                        className="h-[15px] ml-1 w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Nineteen"
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
                        alt="clock_Three"
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
                            alt="group_Three"
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
                            alt="offer_Three"
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
                <div className="absolute overflow-x-auto right-[0] top-[0] w-full">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    activeIndex={sliderState}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 4 },
                      1050: { items: 7 },
                    }}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    activeSlideCSS="scale-[0.11]"
                    magnifiedIndex={1}
                    centerMode
                    ref={sliderRef}
                    className="w-full"
                    items={[...Array(21)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="bg-gray-200_03 h-[241px] mx-2.5"></div>
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[30%] md:w-full">
                <div className="bg-blue_gray-100 flex flex-col items-center justify-end p-4 shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start mb-[3px] mt-[247px] w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtInterExtraBold28"
                    >
                      Hospitality & Tourism
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] mt-2.5 text-gray-700 text-xs"
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
                        alt="signal_Twenty"
                      />
                      <Img
                        className="h-[15px] ml-[5px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_TwentyOne"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_TwentyTwo"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_TwentyThree"
                      />
                      <Img
                        className="h-[15px] ml-1 w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_TwentyFour"
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
                        alt="clock_Four"
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
                            alt="group_Four"
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
                            alt="offer_Four"
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
              </div>
              <div className="md:h-[477px] h-[481px] relative w-[30%] md:w-full">
                <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[15px] shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start mb-1 mt-[248px] w-full">
                    <Text
                      className="ml-1 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtInterExtraBold28"
                    >
                      Data Analytics
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[5px] mt-2.5 text-gray-700 text-xs"
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
                        alt="signal_TwentyFive"
                      />
                      <Img
                        className="h-[15px] ml-[5px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_TwentySix"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_TwentySeven"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_TwentyEight"
                      />
                      <Img
                        className="h-[15px] ml-1 w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_TwentyNine"
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
                        alt="clock_Five"
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
                            alt="group_Five"
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
                            alt="offer_Five"
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
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto pt-[137px] top-[0] w-[57%]">
                  <Img
                    className="h-[107px]"
                    src="images/img_shadows_gray_300_107x200.svg"
                    alt="shadows"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VocationalDevelopmentPage;
