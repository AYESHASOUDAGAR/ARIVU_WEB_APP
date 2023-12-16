import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const AcademicsEducationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[73px] items-center justify-start mx-auto pb-[126px] w-full">
        <div className="h-[603px] md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start mb-[-2.49px] mx-auto w-full z-[1]">
            <div className="bg-white-A700 flex flex-col items-center justify-start py-3.5 w-full">
              <div className="flex flex-col justify-start mb-[19px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[63px] w-[93%] md:w-full">
                  <Text
                    className="common-pointer text-black-900 text-xl"
                    size="txtInterSemiBold20Black900"
                    onClick={() => navigate("/dashboard")}
                  >
                    HOME
                  </Text>
                  <Img
                    className="common-pointer h-[7px] md:ml-[0] ml-[13px] md:mt-0 mt-[9px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                    onClick={() => navigate(-1)}
                  />
                  <Text
                    className="common-pointer md:ml-[0] ml-[1164px] text-black-900 text-xl"
                    size="txtInterSemiBold20Black900"
                    onClick={() => navigate("/profile")}
                  >
                    {localStorage.getItem("user")}
                  </Text>
                </div>
                <Line className="bg-gray-700_03 h-px mt-3 w-full" />
                <Img
                  className="h-[30px] md:ml-[0] ml-[49px] mt-7 w-[30px]"
                  src="images/img_back.svg"
                  alt="back"
                />
              </div>
            </div>
            <Line className="bg-gray-700_03 h-px w-full" />
          </div>
          <div className="md:h-[456px] h-[457px] mt-auto mx-auto w-full">
            <Img
              className="absolute h-[456px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_academic1.png"
              alt="academicOne"
            />
            <div className="absolute bg-gray-900_8c flex flex-col h-max inset-[0] items-center justify-center m-auto p-[147px] md:px-10 sm:px-5 w-full">
              <Text
                className="mb-[100px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                size="txtInterExtraBold50"
              >
                ACAEDMICS EDUCATION
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1170px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[111px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end md:mt-0 mt-[49px] pt-[13px] shadow-bs3 w-[28%] md:w-full">
                <Img
                  className="h-[265px] md:h-auto object-cover w-full"
                  src="images/img_webinarpana1.png"
                  alt="webinarpanaOne"
                />
                <div
                  className="common-pointer bg-gray-100_02 flex flex-col items-center justify-end p-6 sm:px-5 shadow-bs2 w-full"
                  onClick={() => navigate("/classes")}
                >
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                    size="txtInterBold50Black900"
                  >
                    Classes
                  </Text>
                </div>
              </div>
              <div className="md:h-[388px] h-[439px] relative w-[28%] md:w-full">
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pt-[278px] shadow-bs3 w-full">
                  <div
                    className="common-pointer bg-gray-100_02 flex flex-col items-center justify-end p-5 shadow-bs2 w-full"
                    onClick={() => navigate("/library")}
                  >
                    <Text
                      className="mt-[9px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                      size="txtInterBold50Black900"
                    >
                      Library
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[310px] inset-x-[0] mx-auto object-cover top-[0] w-[310px]"
                  src="images/img_bibliophileamico.png"
                  alt="bibliophileamic"
                />
              </div>
              <div className="h-[390px] md:mt-0 mt-[49px] relative w-[28%] md:w-full">
                <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto pt-[278px] shadow-bs3 w-[99%]">
                  <Button
                    className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[320px] py-[25px] sm:text-[40px] md:text-[46px] text-[50px] text-center"
                    onClick={() => navigate("/homequizzes")}
                    shape="square"
                    color="gray_100_02"
                    variant="fill"
                  >
                    Quizzes
                  </Button>
                </div>
                <Img
                  className="absolute h-[278px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  src="images/img_questionspana1.png"
                  alt="questionspanaOne"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <div className="md:h-[390px] h-[419px] relative w-[28%] md:w-full">
                <div className="absolute bg-white-A700 border-black-900 border-solid border-t bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pt-[278px] shadow-bs3 w-full">
                  <div className="bg-gray-100_02 flex flex-col items-center justify-start shadow-bs2 w-full">
                    <Text
                      className="common-pointer sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
                      size="txtInterBold45Black900"
                      onClick={() => navigate("/comingsoon")}
                    >
                      <>
                        Gamified
                        <br />
                        Version
                      </>
                    </Text>
                  </div>
                </div>
                <div className="absolute md:h-[198px] h-[300px] inset-x-[0] mx-auto top-[0] w-[91%]">
                  <div className="md:h-[177px] h-[300px] m-auto w-full">
                    <div className="md:h-[177px] h-[300px] m-auto w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[177px] inset-x-[0] items-end justify-end mx-auto p-1 w-full"
                        style={{
                          backgroundImage: "url('images/img_group133.svg')",
                        }}
                      >
                        <Img
                          className="h-[84px] mb-[23px] mt-[59px]"
                          src="images/img_shadows.svg"
                          alt="shadows"
                        />
                      </div>
                      <Img
                        className="absolute bottom-[26%] h-14 left-[0]"
                        src="images/img_plants.svg"
                        alt="plants"
                      />
                      <Img
                        className="absolute h-[177px] right-[3%] top-[0]"
                        src="images/img_screen.svg"
                        alt="screen"
                      />
                    </div>
                    <div className="absolute bottom-[20%] flex flex-col items-center justify-start left-[24%] w-[42%]">
                      <div className="h-[159px] md:h-[95px] relative w-full">
                        <div className="h-[159px] md:h-[95px] m-auto w-full">
                          <div className="h-[159px] md:h-[95px] m-auto w-full">
                            <div className="h-[159px] md:h-[95px] m-auto w-full">
                              <div className="absolute bottom-[0] h-[152px] md:h-[95px] inset-x-[0] mx-auto w-full">
                                <div className="h-[152px] md:h-[95px] m-auto w-full">
                                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto w-full">
                                    <Img
                                      className="h-1.5 md:ml-[0] ml-[70px]"
                                      src="images/img_vector_pink_800.svg"
                                      alt="vector"
                                    />
                                    <div className="h-[130px] md:h-[89px] relative w-full">
                                      <div className="absolute h-[125px] md:h-[89px] inset-[0] justify-center m-auto w-full">
                                        <div className="h-[125px] md:h-[89px] m-auto w-full">
                                          <div className="h-[125px] md:h-[89px] m-auto w-full">
                                            <div className="h-[125px] md:h-[89px] m-auto w-full">
                                              <div className="flex flex-col gap-6 h-full justify-start m-auto w-full">
                                                <Img
                                                  className="h-6 md:ml-[0] ml-[17px]"
                                                  src="images/img_settings_blue_gray_700_24x26.svg"
                                                  alt="settings"
                                                />
                                                <div className="md:h-[41px] h-[77px] relative w-full">
                                                  <div className="md:h-[41px] h-[77px] m-auto w-full">
                                                    <div className="absolute bottom-[0] md:h-10 h-[68px] right-[0] w-[62%]">
                                                      <div className="md:h-10 h-[68px] m-auto w-full">
                                                        <div className="absolute md:h-10 h-[59px] left-[0] top-[0] w-[90%]">
                                                          <div className="absolute md:h-10 h-14 left-[0] top-[0] w-[79%]">
                                                            <div className="absolute bottom-[0] md:h-[18px] h-[21px] right-[0] w-[57%]">
                                                              <div className="md:h-[18px] h-[21px] m-auto w-full">
                                                                <Img
                                                                  className="absolute h-3 left-[0] top-[0]"
                                                                  src="images/img_user_red_300_01.svg"
                                                                  alt="user"
                                                                />
                                                                <Img
                                                                  className="absolute bottom-[0] h-[18px] right-[0]"
                                                                  src="images/img_settings_blue_gray_900_18x24.svg"
                                                                  alt="settings_One"
                                                                />
                                                              </div>
                                                              <div
                                                                className="absolute bg-cover bg-no-repeat flex flex-col h-[19px] items-center justify-start right-[0] top-[0] w-[90%]"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group138.svg')",
                                                                }}
                                                              >
                                                                <div
                                                                  className="bg-cover bg-no-repeat md:h-1 h-[19px] p-[3px] relative w-full"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group140.svg')",
                                                                  }}
                                                                >
                                                                  <div className="absolute md:h-1 h-[5px] right-[31%] top-[16%] w-1.5">
                                                                    <Img
                                                                      className="absolute h-[3px] right-[0] top-[0] w-1"
                                                                      src="images/img_vector_gray_50_3x4.svg"
                                                                      alt="vector_One"
                                                                    />
                                                                    <Img
                                                                      className="absolute bottom-[0] h-1 left-[0] w-1"
                                                                      src="images/img_vector_gray_50_4x4.svg"
                                                                      alt="vector_Two"
                                                                    />
                                                                  </div>
                                                                  <Img
                                                                    className="absolute h-1 left-[35%] top-[16%] w-[3px]"
                                                                    src="images/img_vector_gray_50_3x4.svg"
                                                                    alt="vector_Three"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <Img
                                                              className="absolute h-10 left-[0] top-[0]"
                                                              src="images/img_bookmark.svg"
                                                              alt="bookmark"
                                                            />
                                                          </div>
                                                          <Img
                                                            className="absolute bottom-[0] h-3 right-[0]"
                                                            src="images/img_user_red_300_01.svg"
                                                            alt="user_One"
                                                          />
                                                        </div>
                                                        <Img
                                                          className="absolute bottom-[0] h-[17px] right-[0]"
                                                          src="images/img_settings_blue_gray_900_18x24.svg"
                                                          alt="settings_Two"
                                                        />
                                                      </div>
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[19px] items-center justify-start right-[0] w-2/5"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group139.svg')",
                                                        }}
                                                      >
                                                        <div
                                                          className="bg-cover bg-no-repeat h-[19px] md:h-[5px] p-0.5 relative w-full"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group141.svg')",
                                                          }}
                                                        >
                                                          <div className="absolute md:h-1 h-[5px] right-[28%] top-[11%] w-1.5">
                                                            <Img
                                                              className="absolute h-1 right-[0] top-[0] w-1"
                                                              src="images/img_vector_gray_50_3x4.svg"
                                                              alt="vector_Four"
                                                            />
                                                            <Img
                                                              className="absolute bottom-[0] h-1 left-[0] w-1"
                                                              src="images/img_vector_gray_50_4x4.svg"
                                                              alt="vector_Five"
                                                            />
                                                          </div>
                                                          <Img
                                                            className="absolute h-[5px] left-[34%] top-[11%]"
                                                            src="images/img_vector_gray_50_3x4.svg"
                                                            alt="vector_Six"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <Img
                                                      className="absolute bottom-[19%] h-[41px] right-[18%]"
                                                      src="images/img_bookmark_blue_gray_700.svg"
                                                      alt="bookmark_One"
                                                    />
                                                    <Img
                                                      className="absolute h-[17px] left-[0] top-[0]"
                                                      src="images/img_arrowup_blue_gray_800.svg"
                                                      alt="arrowup"
                                                    />
                                                  </div>
                                                  <Img
                                                    className="absolute h-[37px] left-[0] top-[0]"
                                                    src="images/img_close_blue_gray_700.svg"
                                                    alt="close"
                                                  />
                                                </div>
                                              </div>
                                              <div
                                                className="absolute bg-cover bg-no-repeat flex flex-col h-[23px] items-center justify-start p-1.5 right-[9%] top-[16%] w-[33%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group136.svg')",
                                                }}
                                              >
                                                <Img
                                                  className="h-2"
                                                  src="images/img_vector_blue_gray_900_8x4.svg"
                                                  alt="vector_Seven"
                                                />
                                              </div>
                                            </div>
                                            <Img
                                              className="absolute h-[11px] right-[9%] top-[24%]"
                                              src="images/img_close_blue_gray_700_11x6.svg"
                                              alt="close_One"
                                            />
                                          </div>
                                          <div
                                            className="absolute bg-cover bg-no-repeat flex flex-col h-5 items-center justify-start right-[9%] top-[16%] w-[33%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group137.svg')",
                                            }}
                                          >
                                            <div
                                              className="bg-cover bg-no-repeat md:h-2.5 h-5 pb-[5px] px-[5px] relative w-full"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group142.svg')",
                                              }}
                                            >
                                              <div className="md:h-2.5 h-[11px] ml-auto w-[52%]">
                                                <div className="flex flex-col h-full justify-start m-auto w-full">
                                                  <Img
                                                    className="h-1 mr-[13px]"
                                                    src="images/img_vector_blue_gray_800_4x7.svg"
                                                    alt="vector_Eight"
                                                  />
                                                  <div className="md:h-1.5 h-[3px] ml-3.5 md:ml-[0] mt-[3px] relative w-[30%]">
                                                    <div className="absolute h-[3px] inset-x-[0] mx-auto top-[0] w-full">
                                                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                                                        <div className="flex flex-row items-start justify-evenly w-full">
                                                          <Img
                                                            className="h-px w-0.5"
                                                            src="images/img_vector_blue_gray_800_1x2.svg"
                                                            alt="vector_Nine"
                                                          />
                                                          <div
                                                            className="bg-cover bg-no-repeat flex flex-row h-px items-center justify-evenly w-0.5"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group145.svg')",
                                                            }}
                                                          >
                                                            <Img
                                                              className="h-px w-0.5"
                                                              src="images/img_vector_blue_gray_700_1x2.svg"
                                                              alt="vector_Ten"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat flex flex-row h-px items-center justify-evenly left-[0] top-[0] w-0.5"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group146.svg')",
                                                        }}
                                                      >
                                                        <Img
                                                          className="h-px w-0.5"
                                                          src="images/img_vector_blue_gray_700_1x2.svg"
                                                          alt="vector_Eleven"
                                                        />
                                                      </div>
                                                    </div>
                                                    <div
                                                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-row h-px items-center justify-evenly right-[0] w-0.5"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group144.svg')",
                                                      }}
                                                    >
                                                      <Img
                                                        className="h-px w-0.5"
                                                        src="images/img_vector_blue_gray_700_1x2.svg"
                                                        alt="vector_Twelve"
                                                      />
                                                    </div>
                                                    <Img
                                                      className="absolute bottom-[0] h-px left-[0] w-0.5"
                                                      src="images/img_vector_blue_gray_700_1x2.svg"
                                                      alt="vector_Thirteen"
                                                    />
                                                  </div>
                                                </div>
                                                <div
                                                  className="absolute bg-cover bg-no-repeat flex flex-col h-[3px] items-center justify-start left-[0] top-[0] w-[30%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group143.svg')",
                                                  }}
                                                >
                                                  <div className="flex flex-row items-start justify-evenly w-full">
                                                    <Img
                                                      className="h-px w-px"
                                                      src="images/img_vector_blue_gray_900_1x1.svg"
                                                      alt="vector_Fourteen"
                                                    />
                                                    <Img
                                                      className="h-px w-px"
                                                      src="images/img_vector_blue_gray_900_1x1.svg"
                                                      alt="vector_Fifteen"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="absolute flex flex-row items-start justify-center left-[36%] top-[15%] w-[13%]">
                                                <Img
                                                  className="h-px w-px"
                                                  src="images/img_vector_blue_gray_900_1x1.svg"
                                                  alt="vector_Sixteen"
                                                />
                                                <Img
                                                  className="h-px w-px"
                                                  src="images/img_vector_blue_gray_900_1x1.svg"
                                                  alt="vector_Seventeen"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <Img
                                          className="absolute h-1.5 right-[31%] top-[16%]"
                                          src="images/img_user_red_300_01_6x13.svg"
                                          alt="user_Two"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-1 right-[35%] top-[18%]"
                                        src="images/img_vector_red_300_01.svg"
                                        alt="vector_Eighteen"
                                      />
                                      <Img
                                        className="absolute h-[17px] left-[34%] top-[0]"
                                        src="images/img_lightbulb.svg"
                                        alt="lightbulb"
                                      />
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute h-[31px] left-[36%] top-[0]"
                                    src="images/img_user_red_300_01_31x27.svg"
                                    alt="user_Three"
                                  />
                                </div>
                                <Img
                                  className="absolute h-0.5 right-[42%] top-[18%]"
                                  src="images/img_vector_pink_800_2x8.svg"
                                  alt="vector_Nineteen"
                                />
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-[37px] items-start justify-start left-[32%] pr-1.5 py-1.5 top-[0] w-9"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group135.svg')",
                                }}
                              >
                                <Img
                                  className="h-[3px] mb-[21px] w-[3px]"
                                  src="images/img_vector_3x3.svg"
                                  alt="vector_Twenty"
                                />
                              </div>
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-start left-[3%] top-[22%] w-[53%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group134.svg')",
                              }}
                            >
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[70px] items-center justify-end pt-[17px] w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group147.svg')",
                                }}
                              >
                                <Img
                                  className="h-[52px]"
                                  src="images/img_checkmark_blue_300.svg"
                                  alt="checkmark"
                                />
                              </div>
                            </div>
                          </div>
                          <Img
                            className="absolute h-[51px] right-[13%] top-[28%]"
                            src="images/img_settings_red_300_01.svg"
                            alt="settings_Three"
                          />
                        </div>
                        <Img
                          className="absolute h-[38px] right-[40%] top-[28%]"
                          src="images/img_sort.svg"
                          alt="sort"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[14%] flex flex-col gap-[30px] justify-start right-[3%] w-[87%]">
                    <Img
                      className="h-[53px] md:ml-[0] ml-[7px]"
                      src="images/img_thumbsup_blue_300.svg"
                      alt="thumbsup"
                    />
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        className="h-[115px]"
                        src="images/img_puff.svg"
                        alt="puff"
                      />
                      <Img
                        className="h-[50px]"
                        src="images/img_user_blue_gray_800.svg"
                        alt="user_Four"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[390px] md:mt-0 mt-[29px] relative w-[28%] md:w-full">
                <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto pt-[278px] shadow-bs3 w-[99%]">
                  <Button
                    className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[320px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                    onClick={() => navigate("")}
                    shape="square"
                    color="gray_100_02"
                    size="lg"
                    variant="fill"
                  >
                    General Knowledge
                  </Button>
                </div>
                <Img
                  className="absolute h-[278px] inset-x-[0] mx-auto object-cover top-[0] w-[99%]"
                  src="images/img_manthinkingpana.png"
                  alt="manthinkingpana"
                />
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[29px] shadow-bs3 w-[28%] md:w-full">
                <Img
                  className="h-[278px] md:h-auto object-cover w-[92%]"
                  src="images/img_virtualrealityamico.png"
                  alt="virtualrealitya"
                />
                <div className="bg-gray-100_02 flex flex-col items-center justify-start shadow-bs2 w-full">
                  <Text
                    className="common-pointer sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
                    size="txtInterBold45Black900"
                    onClick={() => navigate("/comingsoon")}
                  >
                    <>
                      Virtual <br />
                      Lab
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicsEducationPage;
