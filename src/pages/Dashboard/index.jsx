import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardRowperson from "components/DashboardRowperson";

import "react-circular-progressbar/dist/styles.css";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto pt-[29px] sm:px-5 px-[29px] w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1346px] mt-[34px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[15px] justify-start w-[17%] md:w-full">
            <Text
              className="md:ml-[0] ml-[30px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
              size="txtInterBold40"
            >
              <span className="text-indigo-A400 font-inter font-bold">A</span>
              <span className="text-blue-A200 font-inter font-bold">R</span>
              <span className="text-amber-800 font-inter font-bold">I</span>
              <span className="text-purple-500 font-inter font-bold">V</span>
              <span className="text-purple-500_01 font-inter font-bold">U</span>
            </Text>
            <div className="bg-white-A700 flex flex-col items-center justify-start p-3 shadow-bs w-full">
              <div className="flex flex-col items-start justify-start mb-16 mt-[21px] w-[97%] md:w-full">
                <div className="flex flex-row gap-7 items-start justify-start md:ml-[0] ml-[5px] w-[76%] md:w-full">
                  <Img
                    className="h-[26px] w-[26px]"
                    src="images/img_clock_blue_500.svg"
                    alt="clock"
                  />
                  <Text
                    className="mt-0.5 text-base text-blue-500"
                    size="txtInterSemiBold16"
                  >
                    Dashboard
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[136px] md:ml-[0] ml-[5px] mt-10"
                  onClick={() => navigate("/academicseducation")}
                  leftIcon={
                    <Img
                      className="h-6 mr-[30px]"
                      src="images/img_thumbsup_blue_gray_800_01.svg"
                      alt="thumbs_up"
                    />
                  }
                >
                  <div className="font-light leading-[normal] text-base text-black-900 text-left">
                    Academics
                  </div>
                </Button>
                <div
                  className="common-pointer flex flex-row gap-[27px] items-start justify-start md:ml-[0] ml-[5px] mt-[38px] w-[51%] md:w-full"
                  onClick={() => navigate("/skilldevelopment")}
                >
                  <Img
                    className="h-[27px] md:h-auto object-cover w-[27px]"
                    src="images/img_creativethinking.png"
                    alt="creativethinkin"
                  />
                  <Text
                    className="mt-1 text-base text-black-900"
                    size="txtInterLight16"
                  >
                    Skill’s
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-7 items-start justify-start ml-1 md:ml-[0] mt-[34px] w-[72%] md:w-full"
                  onClick={() => navigate("/vocationaldevelopment")}
                >
                  <Img
                    className="h-[27px] mt-1 w-[27px]"
                    src="images/img_speak.svg"
                    alt="speak"
                  />
                  <Button className="bg-transparent cursor-pointer font-light leading-[normal] text-base text-black-900 text-center">
                    <>
                      Vocational
                      <br />
                      Courses
                    </>
                  </Button>
                </div>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mt-[22px]"
                  onClick={() => navigate("/resources")}
                  leftIcon={
                    <Img
                      className="h-[35px] mb-[3px] mr-6"
                      src="images/img_information.svg"
                      alt="Information"
                    />
                  }
                >
                  <div className="leading-[normal] text-base text-blue_gray-800_02 text-left">
                    <>
                      Informative
                      <br />
                      Resources
                    </>
                  </div>
                </Button>
                <div
                  className="common-pointer flex flex-row gap-[26px] items-start justify-start ml-1 md:ml-[0] mt-[29px] w-[98%] md:w-full"
                  onClick={() => navigate("/comingsoon")}
                >
                  <Img
                    className="h-[27px] md:h-auto object-cover w-[27px]"
                    src="images/img_graphicprogression.png"
                    alt="graphicprogress"
                  />
                  <Text
                    className="text-base text-blue_gray-800_02"
                    size="txtInterRegular16"
                  >
                    <>
                      Holistic Progress
                      <br />
                      card{" "}
                    </>
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[26px] items-start justify-start ml-1 md:ml-[0] mt-[29px] w-[98%] md:w-full"
                  onClick={() => navigate("/comingsoon")}
                >
                  <Img
                    className="h-[27px] md:h-auto object-cover w-[27px]"
                    src="images/img_graphicprogression.png"
                    alt="graphicprogress"
                  />
                  <Text
                    className="text-base text-blue_gray-800_02"
                    size="txtInterRegular16"
                  >
                    <>
                      Research and Development
                    </>
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-[25px] items-end justify-start ml-2 md:ml-[0] mt-[15px] w-[76%] md:w-full"
                  onClick={() => navigate("/comingsoon")}
                >
                  <Img
                    className="h-[27px]"
                    src="images/img_fire.svg"
                    alt="fire"
                  />
                  <Text
                    className="mt-[7px] text-base text-blue_gray-800_02"
                    size="txtInterRegular16"
                  >
                    Day Streaks
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[138px] md:ml-[0] ml-[7px] mt-7"
                  onClick={() => navigate("/certificate")}
                  leftIcon={
                    <Img
                      className="h-[25px] mr-[26px]"
                      src="images/img_certificate_gray_800.svg"
                      alt="Certificate"
                    />
                  }
                >
                  <div className="font-light leading-[normal] text-base text-black-900 text-left">
                    Certificates
                  </div>
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[117px] ml-1 md:ml-[0] mt-[22px]"
                  onClick={() => navigate("/chatbot")}
                  leftIcon={
                    <Img
                      className="h-[27px] mr-7"
                      src="images/img_bot.svg"
                      alt="Bot"
                    />
                  }
                >
                  <div className="leading-[normal] text-base text-blue_gray-800_02 text-left">
                    Chatbot
                  </div>
                </Button>
                <div
                  className="common-pointer flex flex-row gap-[23px] items-center justify-start md:ml-[0] ml-[5px] mt-7 w-[88%] md:w-full"
                  onClick={() => navigate("/classonelive")}
                >
                  <Img
                    className="h-6 w-6"
                    src="images/img_settings_blue_gray_800_02.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-base text-blue_gray-800_02"
                    size="txtInterRegular16"
                  >
                    Mentor Access
                  </Text>
                </div>
                <div
                  className="common-pointer flex flex-row gap-5 items-start justify-start ml-1.5 md:ml-[0] mt-[29px] w-[86%] md:w-full"
                  onClick={() => navigate("/comingsoon")}
                >
                  <Img
                    className="h-6 w-6"
                    src="images/img_comment.svg"
                    alt="comment"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-800_02"
                    size="txtInterRegular16"
                  >
                    User Feedback
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[107px] md:ml-[0] ml-[5px] mt-[23px]"
                  onClick={() => navigate("/")}
                  leftIcon={
                    <Img
                      className="h-6 mb-px mr-[15px]"
                      src="images/img_television_pink_500.svg"
                      alt="television"
                    />
                  }
                >
                  <div className="leading-[normal] text-left text-lg text-pink-500">
                    Log Out
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[17px] md:mt-0 mt-4 w-1/2 md:w-full">
            <List
              className="sm:flex-col flex-row font-istokweb gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col gap-2 justify-start sm:ml-[0] py-[7px] rounded-[10px] shadow-bs4 w-full">
                <Text
                  className="ml-5 md:ml-[0] text-black-900 text-sm"
                  size="txtIstokWebRegular14"
                >
                  SUBJECT
                </Text>
                <div className="flex flex-col items-start justify-start mb-1.5 w-full">
                  <Line className="bg-gray-500_03 h-px w-full" />
                  <div className="h-2.5 md:h-[27px] ml-1 md:ml-[0] mt-[17px] relative w-[91%]">
                    <div className="absolute bg-gray-400_56 h-2.5 inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
                    <div className="absolute bg-pink-A200 h-2.5 inset-y-[0] left-[0] my-auto rounded-[5px] w-[76%]"></div>
                  </div>
                  <Text
                    className="ml-5 md:ml-[0] mt-3 text-purple-A700 text-xs"
                    size="txtIstokWebBold12"
                  >
                    77%
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] py-[7px] rounded-[10px] shadow-bs4 w-full">
                <Text
                  className="ml-5 md:ml-[0] text-black-900 text-sm"
                  size="txtIstokWebRegular14"
                >
                  SUBJECT
                </Text>
                <Line className="bg-gray-500_03 h-px mt-2 w-full" />
                <div className="h-2.5 md:h-[27px] md:ml-[0] ml-[7px] mt-[17px] relative w-[91%]">
                  <div className="absolute bg-gray-400_56 h-2.5 inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
                  <div className="absolute bg-pink-A200 h-2.5 inset-y-[0] left-[0] my-auto rounded-[5px] w-[84%]"></div>
                </div>
                <Text
                  className="mb-1.5 ml-5 md:ml-[0] mt-3 text-purple-A700 text-xs"
                  size="txtIstokWebBold12"
                >
                  82%
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] py-[7px] rounded-[10px] shadow-bs4 w-full">
                <Text
                  className="ml-5 md:ml-[0] text-black-900 text-sm"
                  size="txtIstokWebRegular14"
                >
                  SUBJECT
                </Text>
                <Line className="bg-gray-500_03 h-px mt-2 w-full" />
                <div className="h-2.5 md:h-[27px] ml-1.5 md:ml-[0] mt-[17px] relative w-[91%]">
                  <div className="absolute bg-gray-400_56 h-2.5 inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
                  <div className="absolute bg-pink-A200 h-2.5 inset-y-[0] left-[0] my-auto rounded-[5px] w-[91%]"></div>
                </div>
                <Text
                  className="mb-1.5 ml-5 md:ml-[0] mt-3 text-purple-A700 text-xs"
                  size="txtIstokWebBold12"
                >
                  90%
                </Text>
              </div>
            </List>
            <div className="bg-white-A700 flex flex-col font-istokweb items-center justify-end mt-10 py-[9px] rounded-[10px] shadow-bs4 w-[85%] md:w-full">
              <div className="flex flex-col gap-[9px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[22px] text-black-900 text-sm"
                  size="txtIstokWebRegular14"
                >
                  Subjects
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <Line className="bg-gray-500_03 h-px w-full" />
                  <div className="flex sm:flex-col flex-row gap-1.5 items-start justify-start md:ml-[0] ml-[22px] mt-[17px] w-[90%] md:w-full">
                    <div className="flex flex-col gap-[17px] items-end justify-start w-[6%] sm:w-full">
                      <Text
                        className="h-[18px] text-black-900 text-xs"
                        size="txtIstokWebRegular12"
                      >
                        3hr
                      </Text>
                      <div className="flex flex-col gap-4 items-end justify-start w-full">
                        <Text
                          className="text-black-900 text-xs"
                          size="txtIstokWebRegular12"
                        >
                          2.5hr
                        </Text>
                        <Text
                          className="h-[18px] text-black-900 text-xs"
                          size="txtIstokWebRegular12"
                        >
                          2hr
                        </Text>
                        <Text
                          className="text-black-900 text-xs"
                          size="txtIstokWebRegular12"
                        >
                          1.5hr
                        </Text>
                        <Text
                          className="text-black-900 text-xs"
                          size="txtIstokWebRegular12"
                        >
                          1hr
                        </Text>
                        <Text
                          className="text-black-900 text-xs"
                          size="txtIstokWebRegular12"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:mt-0 mt-[7px] w-[93%] sm:w-full">
                      <Line className="bg-gray-500_03 h-px w-full" />
                      <div className="h-[175px] sm:h-[2742px] relative w-full">
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col gap-[34px] items-center justify-start w-full">
                            <Line className="bg-gray-500_03 h-px w-full" />
                            <Line className="bg-gray-500_03 h-px w-full" />
                            <Line className="bg-gray-500_03 h-px w-full" />
                            <Line className="bg-gray-500_03 h-px w-full" />
                          </div>
                        </div>
                        <Line className="absolute bg-gray-500_03 h-[175px] inset-y-[0] left-[0] my-auto w-px" />
                        <div className="absolute bottom-[0] flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-end justify-start mx-auto w-[91%]">
                          <Line className="bg-pink-200 sm:h-1.5 h-[85px] sm:mt-0 mt-[61px] w-1.5 sm:w-full" />
                          <Line className="bg-amber-300 sm:h-1.5 h-[18px] ml-1 sm:ml-[0] sm:mt-0 mt-32 w-1.5 sm:w-full" />
                          <Line className="bg-blue-A200_01 sm:h-1.5 h-[30px] ml-1 sm:ml-[0] sm:mt-0 mt-[116px] w-1.5 sm:w-full" />
                          <Line className="bg-purple-A700 sm:h-1.5 h-[50px] ml-1 sm:ml-[0] sm:mt-0 mt-24 w-1.5 sm:w-full" />
                          <Line className="bg-pink-200 sm:h-1.5 h-[121px] sm:ml-[0] ml-[29px] sm:mt-0 mt-[25px] w-1.5 sm:w-full" />
                          <Line className="bg-amber-300 sm:h-1.5 h-[27px] ml-1 sm:ml-[0] sm:mt-0 mt-[119px] w-1.5 sm:w-full" />
                          <Line className="bg-blue-A200_01 sm:h-1.5 h-[41px] ml-1 sm:ml-[0] sm:mt-0 mt-[105px] w-1.5 sm:w-full" />
                          <Line className="bg-purple-A700_01 sm:h-1.5 h-[85px] ml-1 sm:ml-[0] sm:mt-0 mt-[61px] w-1.5 sm:w-full" />
                          <Line className="bg-pink-200 sm:h-1.5 h-14 sm:ml-[0] ml-[27px] sm:mt-0 mt-[90px] w-1.5 sm:w-full" />
                          <Line className="bg-amber-300 sm:h-1.5 h-[111px] ml-1 sm:ml-[0] sm:mt-0 mt-[35px] w-1.5 sm:w-full" />
                          <Line className="bg-blue-A200_01 sm:h-1.5 h-[76px] ml-1 sm:ml-[0] sm:mt-0 mt-[70px] w-1.5 sm:w-full" />
                          <Line className="bg-purple-A700_01 sm:h-1.5 h-[91px] ml-1 sm:ml-[0] sm:mt-0 mt-[55px] w-1.5 sm:w-full" />
                          <Line className="bg-pink-200 sm:h-1.5 h-[97px] ml-8 sm:ml-[0] sm:mt-0 mt-[49px] w-1.5 sm:w-full" />
                          <Line className="bg-amber-300 sm:h-1.5 h-[29px] ml-1 sm:ml-[0] sm:mt-0 mt-[117px] w-1.5 sm:w-full" />
                          <Line className="bg-blue-A200_01 sm:h-1.5 h-[125px] ml-1 sm:ml-[0] sm:mt-0 mt-[21px] w-1.5 sm:w-full" />
                          <Line className="bg-purple-A700_01 sm:h-1.5 h-[50px] ml-1 sm:ml-[0] sm:mt-0 mt-24 w-1.5 sm:w-full" />
                          <Line className="bg-pink-200 sm:h-1.5 h-6 ml-7 sm:ml-[0] sm:mt-0 mt-[122px] w-1.5 sm:w-full" />
                          <Line className="bg-amber-300 sm:h-1.5 h-[117px] ml-1 sm:ml-[0] sm:mt-0 mt-[29px] w-1.5 sm:w-full" />
                          <Line className="bg-blue-A200_01 sm:h-1.5 h-[85px] ml-1 sm:ml-[0] sm:mt-0 mt-[61px] w-1.5 sm:w-full" />
                          <Line className="bg-purple-A700_01 sm:h-1.5 h-[146px] ml-1 sm:ml-[0] w-1.5 sm:w-full" />
                          <Line className="bg-pink-200 sm:h-1.5 h-10 ml-8 sm:ml-[0] sm:mt-0 mt-[107px] w-1.5 sm:w-full" />
                          <Line className="bg-amber-300 sm:h-1.5 h-[105px] ml-1 sm:ml-[0] sm:mt-0 mt-[42px] w-1.5 sm:w-full" />
                          <Line className="bg-blue-A200_01 sm:h-1.5 h-[116px] ml-1 sm:ml-[0] sm:mt-0 mt-[31px] w-1.5 sm:w-full" />
                          <Line className="bg-purple-A700_01 sm:h-1.5 h-[120px] ml-1 sm:ml-[0] sm:mt-0 mt-[27px] w-1.5 sm:w-full" />
                          <Line className="bg-pink-200 sm:h-1.5 h-8 sm:ml-[0] ml-[31px] sm:mt-0 mt-[114px] w-1.5 sm:w-full" />
                          <Line className="bg-amber-300 sm:h-1.5 h-[100px] ml-1 sm:ml-[0] sm:mt-0 mt-[46px] w-1.5 sm:w-full" />
                          <Line className="bg-blue-A200_01 sm:h-1.5 h-[95px] ml-1 sm:ml-[0] sm:mt-0 mt-[52px] w-1.5 sm:w-full" />
                          <Line className="bg-purple-A700_01 sm:h-1.5 h-[130px] ml-1 sm:ml-[0] sm:mt-0 mt-[17px] w-1.5 sm:w-full" />
                        </div>
                      </div>
                      <Line className="bg-gray-500_03 h-px w-full" />
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end ml-9 md:ml-[0] mt-1.5 w-[89%] md:w-full">
                        <Text
                          className="text-black-900 text-xs"
                          size="txtIstokWebRegular12"
                        >
                          MAN
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[38px] text-black-900 text-xs"
                          size="txtIstokWebRegular12"
                        >
                          TUE
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[41px] text-black-900 text-xs"
                          size="txtIstokWebRegular12"
                        >
                          WED
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[37px] text-black-900 text-xs"
                          size="txtIstokWebRegular12"
                        >
                          THR
                        </Text>
                        <Text
                          className="ml-10 sm:ml-[0] text-black-900 text-xs"
                          size="txtIstokWebRegular12"
                        >
                          FRI
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[54px] text-black-900 text-xs"
                          size="txtIstokWebRegular12"
                        >
                          SAT
                        </Text>
                        <Text
                          className="sm:ml-[0] ml-[45px] text-black-900 text-xs"
                          size="txtIstokWebRegular12"
                        >
                          SUN
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-500_03 h-px mt-3.5 w-full" />
                  <div className="flex flex-row items-start justify-end md:ml-[0] ml-[253px] mt-2.5 w-[54%] md:w-full">
                    <div className="bg-pink-200 h-2.5 my-1 rounded-[50%] w-2.5"></div>
                    <Text
                      className="ml-2.5 text-black-900 text-xs"
                      size="txtIstokWebRegular12"
                    >
                      Malayalam
                    </Text>
                    <div className="bg-amber-300 h-2.5 ml-[11px] my-1 rounded-[50%] w-2.5"></div>
                    <Text
                      className="ml-2.5 text-black-900 text-xs"
                      size="txtIstokWebRegular12"
                    >
                      English
                    </Text>
                    <div className="bg-blue-A200_01 h-2.5 ml-3 my-1 rounded-[50%] w-2.5"></div>
                    <Text
                      className="ml-2.5 text-black-900 text-xs"
                      size="txtIstokWebRegular12"
                    >
                      ICT
                    </Text>
                    <div className="bg-purple-A700 h-2.5 ml-[15px] my-1 rounded-[50%] w-2.5"></div>
                    <Text
                      className="ml-2.5 text-black-900 text-xs"
                      size="txtIstokWebRegular12"
                    >
                      Mathematics
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="capitalize ml-1 md:ml-[0] mt-[43px] text-base text-gray-900_02"
              size="txtInterMedium16"
            >
              Continue watching
            </Text>
            <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-center justify-between md:ml-[0] ml-[30px] mt-3 w-[90%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-end p-2 rounded-[20px] shadow-bs w-[45%] sm:w-full">
                <div className="flex flex-col items-start justify-start mt-1.5 w-[97%] md:w-full">
                  <div className="bg-red-300 flex flex-col items-end justify-start p-1 rounded-[12px] shadow-bs2 w-full">
                    <Img
                      className="h-[100px] mb-[5px] mr-[59px] w-[100px]"
                      src="images/img_programmingpana.svg"
                      alt="programmingpana"
                    />
                  </div>
                  <Text
                    className="bg-purple-500_72 h-[15px] justify-center mt-2.5 px-3 py-0.5 rounded-[7px] text-[8px] text-purple-500_01 uppercase w-[68px]"
                    size="txtInterRegular8"
                  >
                    FRONTEND
                  </Text>
                  <Text
                    className="capitalize md:ml-[0] ml-[5px] mt-2 text-gray-900_02 text-sm"
                    size="txtInterMedium14"
                  >
                    <>
                      Beginner’s Guide to becoming a <br />
                      professional frontend developer
                    </>
                  </Text>
                  <div className="h-1.5 mt-[5px] overflow-hidden relative w-full">
                    <div className="w-full h-full absolute bg-gray_400_56 rounded-[3px]"></div>
                    <div
                      className="h-full absolute bg-blue_300  rounded-[3px]"
                      style={{ width: "59%" }}
                    ></div>
                  </div>
                  <div className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[5px] mt-[9px] w-[44%] md:w-full">
                    <Input
                      name="groupFortyTwo"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-5 mb-[5px] w-5"
                      suffix={
                        <div className="ml-1.5 sm:w-full sm:mx-0 w-[8%] bg-black-900">
                          <Img
                            className="my-auto"
                            src="images/img_lock.svg"
                            alt="lock"
                          />
                        </div>
                      }
                      shape="circle"
                      color="blue_gray_100"
                      size="xs"
                    ></Input>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="capitalize text-[10px] text-gray-900_02"
                        size="txtInterMedium10"
                      >
                        Karan Yadav
                      </Text>
                      <Text
                        className="capitalize mt-[3px] text-[8px] text-gray-700_01"
                        size="txtInterRegular8Gray70001"
                      >
                        software Developer
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end p-2 rounded-[20px] shadow-bs w-[45%] sm:w-full">
                <div className="flex flex-col items-start justify-start mt-1.5 w-[97%] md:w-full">
                  <div className="bg-red-300 flex flex-col items-end justify-start p-1 rounded-[12px] shadow-bs2 w-full">
                    <Img
                      className="h-[100px] mb-[5px] mr-[63px] w-[100px]"
                      src="images/img_television_gray_50.svg"
                      alt="television"
                    />
                  </div>
                  <Text
                    className="bg-purple-500_72 h-[15px] justify-center mt-2.5 px-3 py-0.5 rounded-[7px] text-[8px] text-purple-500_01 uppercase w-[68px]"
                    size="txtInterRegular8"
                  >
                    FRONTEND
                  </Text>
                  <Text
                    className="capitalize md:ml-[0] ml-[5px] mt-2 text-gray-900_02 text-sm"
                    size="txtInterMedium14"
                  >
                    <>
                      Beginner’s Guide to becoming a <br />
                      professional frontend developer
                    </>
                  </Text>
                  <div className="h-1.5 mt-[5px] overflow-hidden relative w-full">
                    <div className="w-full h-full absolute bg-gray_400_56 rounded-[3px]"></div>
                    <div
                      className="h-full absolute bg-blue_300  rounded-[3px]"
                      style={{ width: "59%" }}
                    ></div>
                  </div>
                  <div className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[5px] mt-[9px] w-[44%] md:w-full">
                    <Input
                      name="groupFortyFour"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex h-5 mb-[5px] w-5"
                      suffix={
                        <div className="ml-1.5 sm:w-full sm:mx-0 w-[8%] bg-black-900">
                          <Img
                            className="my-auto"
                            src="images/img_lock.svg"
                            alt="lock"
                          />
                        </div>
                      }
                      shape="circle"
                      color="blue_gray_100"
                      size="xs"
                    ></Input>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="capitalize text-[10px] text-gray-900_02"
                        size="txtInterMedium10"
                      >
                        Karan Yadav
                      </Text>
                      <Text
                        className="capitalize mt-[3px] text-[8px] text-gray-700_01"
                        size="txtInterRegular8Gray70001"
                      >
                        software Developer
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1013px] md:h-[889px] md:ml-[0] ml-[158px] md:mt-0 mt-1 relative w-[22%] md:w-full">
            <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto rounded-br-[20px] rounded-tr-[20px] shadow-bs5 top-[0] w-full">
              <div className="bg-white-A700 flex flex-col gap-[37px] items-center justify-start p-3.5 shadow-bs w-full">
                <div className="flex flex-col items-center justify-between mt-[17px] w-[248px]">
                  <Text
                    className="capitalize text-base text-gray-900_02 w-full"
                    size="txtInterMedium16"
                  >
                    Your Profie
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center px-5 w-[248px]">
                  <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
                    <div className="h-[100px] relative w-[100px]">
                      <div className="!w-[100px] h-[100px] m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[100px] h-[100px] m-auto overflow-visible"
                          value={47}
                          counterClockwise
                          strokeWidth={7}
                          styles={{
                            trail: { strokeWidth: 7, stroke: "#cccccc4c" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(114deg)",
                              stroke: "#702cff",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[76px]">
                        <Img
                          className="common-pointer h-[75px] md:h-auto rounded-[50%] w-[76px]"
                          src="images/img_memojiboys618.png"
                          alt="memojiboys618"
                          onClick={() => navigate("/profile")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <Text
                      className="capitalize text-base text-center text-gray-900_02 w-full"
                      size="txtInterMedium16"
                    >
                      Hello, Prashant
                    </Text>
                    <Text
                      className="capitalize max-w-[208px] md:max-w-full text-center text-gray-600_02 text-xs"
                      size="txtInterMedium12Gray60002"
                    >
                      continue your journey and achieve Your Target
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center w-auto">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row gap-6 items-center justify-end w-auto">
                        <Button
                          className="flex h-10 items-center justify-center w-10"
                          shape="circle"
                          color="gray_500_01"
                          size="2xl"
                          variant="outline"
                        >
                          <Img
                            className="h-4"
                            src="images/img_user_blue_gray_900_02.svg"
                            alt="user"
                          />
                        </Button>
                        <Button
                          className="flex h-10 items-center justify-center w-10"
                          shape="circle"
                          color="gray_500_01"
                          size="2xl"
                          variant="outline"
                        >
                          <Img
                            className="h-4"
                            src="images/img_btn.svg"
                            alt="btn"
                          />
                        </Button>
                        <Button
                          className="flex h-10 items-center justify-center w-10"
                          shape="circle"
                          color="gray_500_01"
                          size="2xl"
                          variant="outline"
                        >
                          <Img
                            className="h-4"
                            src="images/img_btn.svg"
                            alt="btn_One"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[116px] mb-[406px] w-[204px]"
                  src="images/img_graph.svg"
                  alt="graph"
                />
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col gap-3 h-[510px] md:h-auto inset-x-[0] items-center justify-start mx-auto w-auto">
              <div className="flex flex-row items-center justify-between w-[230px]">
                <Text
                  className="capitalize text-base text-gray-900_02 w-full"
                  size="txtInterMedium16"
                >
                  Your Mentor
                </Text>
                <Button
                  className="flex h-6 items-center justify-center rounded-[50%] w-6"
                  shape="circle"
                  color="gray_500_01"
                  size="md"
                  variant="outline"
                >
                  <Img className="h-3" src="images/img_plus.svg" alt="plus" />
                </Button>
              </div>
              <List
                className="bg-white-A700 flex flex-col gap-[31px] items-center p-3 rounded-[20px] w-full"
                orientation="vertical"
              >
                {new Array(5).fill({}).map((props, index) => (
                  <React.Fragment key={`DashboardRowperson${index}`}>
                    <DashboardRowperson
                      className="flex flex-row gap-2 items-center justify-center w-56"
                      {...props}
                    />
                    {index < new Array(5).fill({}).length - 1 && (
                      <Line className="self-center h-px bg-blue_gray-100_01 w-full" />
                    )}
                  </React.Fragment>
                ))}
              </List>
              <Button
                className="cursor-pointer font-medium leading-[normal] rounded-[15px] text-center text-xs w-[226px]"
                color="deep_purple_A400_33"
                size="md"
                variant="fill"
              >
                See All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
