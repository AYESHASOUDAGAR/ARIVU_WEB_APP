import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const ClassSubjectPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto py-[23px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1337px] mx-auto md:px-5 w-full">
              <Text
                className="text-black-900 text-xl"
                size="txtInterSemiBold20Black900"
              >
                HOME
              </Text>
              <Img
                className="h-2 md:ml-[0] ml-[13px] md:mt-0 mt-1 w-[9px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
              <Text
                className="common-pointer md:ml-[0] ml-[1171px] text-black-900 text-xl"
                size="txtInterSemiBold20Black900"
                onClick={() => navigate("/profile")}
              >
                PROFILE
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Line className="bg-gray-700_03 h-px w-full" />
              <Img
                className="common-pointer h-8 md:ml-[0] ml-[49px] mt-[18px]"
                src="images/img_back.svg"
                alt="back"
                onClick={() => navigate(-1)}
              />
              <Line className="bg-gray-700_03 h-px mt-[38px] w-full" />
            </div>
          </div>
        </div>
        <div className="bg-blue-300 flex flex-col items-start justify-start p-[65px] md:px-10 sm:px-5 w-full">
          <Text
            className="mb-[59px] mt-[55px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
            size="txtInterBold50Black900"
          >
            Class I
          </Text>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1250px] mt-[45px] mx-auto p-[25px] md:px-5 rounded-[10px] shadow-bs3 w-full">
          <div className="flex md:flex-col flex-row gap-[38px] items-start justify-between w-[96%] md:w-full">
            <div className="bg-red-300 flex flex-col items-center justify-start md:px-10 sm:px-5 px-[57px] rounded-[10px] shadow-bs2 w-[28%] md:w-full">
              <div className="md:h-[180px] h-[200px] relative w-[200px]">
                <div className="md:h-[180px] h-[200px] m-auto w-[200px]">
                  <div className="md:h-[180px] h-[200px] m-auto w-[200px]">
                    <div className="md:h-[180px] h-[200px] m-auto w-[200px]">
                      <div className="absolute h-48 inset-[0] justify-center m-auto w-full">
                        <Img
                          className="h-[69px] mb-[-32.7px] ml-[7px] mt-10 z-[1]"
                          src="images/img_settings_gray_200_01.svg"
                          alt="settings"
                        />
                        <Img
                          className="h-[83px] mb-[-6.84px] ml-auto z-[1]"
                          src="images/img_window.svg"
                          alt="window"
                        />
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[115px] items-end justify-end mt-auto mx-auto pb-[70px] pr-10 w-full"
                          style={{
                            backgroundImage: "url('images/img_group133.svg')",
                          }}
                        >
                          <Img
                            className="h-[90px] mr-1 mt-5 p-px"
                            src="images/img_shadows_gray_300_90x175.svg"
                            alt="shadows"
                          />
                        </div>
                      </div>
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[98%]">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col gap-1.5 justify-start w-[29%]">
                            <div className="flex flex-row gap-[7px] items-end justify-between md:ml-[0] ml-[5px] w-[92%] md:w-full">
                              <Img
                                className="h-3.5 mb-[3px] mt-[7px]"
                                src="images/img_molecules.svg"
                                alt="molecules"
                              />
                              <Img
                                className="h-[25px] w-[25px]"
                                src="images/img_user_blue_gray_700_25x25.svg"
                                alt="user"
                              />
                            </div>
                            <div className="md:h-[54px] h-[71px] relative w-[67%]">
                              <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[90%]">
                                <div className="flex flex-col gap-[11px] items-end justify-start w-full">
                                  <Img
                                    className="h-[17px]"
                                    src="images/img_search.svg"
                                    alt="search"
                                  />
                                  <Img
                                    className="h-[26px]"
                                    src="images/img_mail.svg"
                                    alt="mail"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute h-12 left-[0] top-[0]"
                                src="images/img_paperplane.svg"
                                alt="paperplane"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-[5px] items-end justify-start w-[51%]">
                            <div className="flex flex-row items-end justify-evenly w-full">
                              <Img
                                className="h-[21px] mt-[41px]"
                                src="images/img_thumbsup_white_a700.svg"
                                alt="thumbsup"
                              />
                              <div className="md:h-[51px] h-[62px] relative w-[82%]">
                                <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[85%]">
                                  <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                                    <Img
                                      className="h-7 mt-1.5"
                                      src="images/img_molecules_black_900.svg"
                                      alt="molecules_One"
                                    />
                                    <Img
                                      className="h-[25px]"
                                      src="images/img_graphics.svg"
                                      alt="graphics"
                                    />
                                  </div>
                                </div>
                                <Img
                                  className="absolute h-[51px] right-[0] top-[5%]"
                                  src="images/img_settings_gray_300.svg"
                                  alt="settings_One"
                                />
                                <Img
                                  className="absolute bottom-[11%] h-6 left-[30%] w-[23px]"
                                  src="images/img_thumbsup_blue_gray_700.svg"
                                  alt="thumbsup_One"
                                />
                                <Img
                                  className="absolute bottom-[0] h-[15px] left-[8%] w-3.5"
                                  src="images/img_send.svg"
                                  alt="send"
                                />
                              </div>
                            </div>
                            <Img
                              className="h-[22px]"
                              src="images/img_gears.svg"
                              alt="gears"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[136px] left-[20%] top-[11%]"
                      src="images/img_character.svg"
                      alt="character"
                    />
                  </div>
                  <div className="absolute bottom-[3%] flex flex-row items-start justify-start left-[6%] w-[83%]">
                    <Img
                      className="h-11 mt-[53px]"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                    <Img
                      className="h-[133px]"
                      src="images/img_desk.svg"
                      alt="desk"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-7 left-[40%] top-[2%] w-7"
                  src="images/img_laptop.svg"
                  alt="laptop"
                />
                <Img
                  className="absolute bottom-[21%] h-[43px] right-[5%]"
                  src="images/img_pi.svg"
                  alt="pi"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[70%] md:w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtInterBold50Black900"
              >
                Subject
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-3 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInterLight24"
                >
                  <span className="text-black-900 font-inter text-left font-light">
                    Duration :{" "}
                  </span>
                  <span className="text-black-900 font-inter text-left font-medium">
                    12 hour
                  </span>
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[200px] text-2xl md:text-[22px] text-center sm:text-xl"
                  onClick={() => navigate("/classonedetail")}
                  shape="square"
                  color="blue_A700_01"
                  size="md"
                  variant="fill"
                >
                  Explore
                </Button>
              </div>
              <Text
                className="mt-[31px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterLight24"
              >
                <span className="text-black-900 font-inter text-left font-light">
                  Sections :{" "}
                </span>
                <span className="text-black-900 font-inter text-left font-medium">
                  5
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1250px] mt-[45px] mx-auto p-[23px] md:px-5 rounded-[10px] shadow-bs3 w-full">
          <div className="flex md:flex-col flex-row gap-[38px] items-start justify-between mb-0.5 w-[96%] md:w-full">
            <div className="md:h-[200px] h-[202px] relative w-[28%] md:w-full">
              <div className="absolute bg-red-300 h-[200px] inset-[0] justify-center m-auto rounded-[10px] shadow-bs2 w-full"></div>
              <div className="absolute md:h-[195px] h-[200px] inset-[0] justify-center m-auto w-[200px]">
                <div className="absolute md:h-[195px] h-[199px] inset-[0] justify-center m-auto w-[200px]">
                  <div className="absolute md:h-[195px] h-[199px] inset-[0] justify-center m-auto w-[200px]">
                    <div className="absolute md:h-[195px] h-[199px] inset-[0] justify-center m-auto w-[200px]">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto w-[200px]"
                        style={{
                          backgroundImage: "url('images/img_group197.svg')",
                        }}
                      >
                        <div className="flex flex-row gap-[102px] items-center justify-start mb-[102px] w-[82%] md:w-full">
                          <div className="md:h-[89px] h-[93px] relative w-1/5">
                            <div className="md:h-[89px] h-[92px] m-auto w-full">
                              <div className="md:h-[89px] h-[92px] m-auto w-full">
                                <div className="absolute md:h-[89px] h-[90px] inset-y-[0] left-[19%] my-auto w-[57%]">
                                  <div className="absolute bottom-[0] h-14 md:h-[54px] inset-x-[0] mx-auto w-full">
                                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                                      <Img
                                        className="h-10"
                                        src="images/img_thumbsup_blue_gray_900.svg"
                                        alt="thumbsup_Two"
                                      />
                                      <div className="md:h-3.5 h-[15px] relative w-full">
                                        <Img
                                          className="h-3.5 m-auto"
                                          src="images/img_thumbsup_blue_gray_700_14x18.svg"
                                          alt="thumbsup_Three"
                                        />
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto py-1 w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group199.svg')",
                                          }}
                                        >
                                          <div className="flex flex-col items-center justify-start mb-[3px] w-full">
                                            <Img
                                              className="h-px"
                                              src="images/img_vector_white_a700_1x18.svg"
                                              alt="vector"
                                            />
                                            <Img
                                              className="h-px"
                                              src="images/img_vector_white_a700_1x18.svg"
                                              alt="vector_One"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute h-[3px] inset-x-[0] mx-auto top-[0] w-[3px]"
                                      src="images/img_vector_blue_gray_900_3x3.svg"
                                      alt="vector_Two"
                                    />
                                  </div>
                                  <div className="absolute flex flex-col gap-[54px] h-full inset-[0] items-start justify-center m-auto w-[6%]">
                                    <Line className="bg-blue_gray-900 h-[34px] w-px" />
                                    <Img
                                      className="h-px w-px"
                                      src="images/img_group145.svg"
                                      alt="vector_Four"
                                    />
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[0] h-[3px] left-[44%] w-0.5"
                                  src="images/img_vector_blue_gray_900_3x2.svg"
                                  alt="vector_Five"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[21%] flex flex-row h-[27px] inset-x-[0] items-start justify-start mx-auto pt-[5px] px-[5px] w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group198.svg')",
                                  }}
                                >
                                  <div className="h-3.5 md:h-[21px] mt-[7px] relative w-[28%]">
                                    <Img
                                      className="absolute h-3.5 inset-y-[0] my-auto right-[0]"
                                      src="images/img_close_blue_gray_900.svg"
                                      alt="close"
                                    />
                                    <Img
                                      className="absolute bottom-[0] h-1 left-[0] w-1"
                                      src="images/img_vector_blue_gray_900_12x1.svg"
                                      alt="vector_Six"
                                    />
                                  </div>
                                  <div className="flex flex-row items-end justify-center mt-2 w-[10%]">
                                    <Img
                                      className="h-3"
                                      src="images/img_vector_12x1.svg"
                                      alt="vector_Seven"
                                    />
                                    <Img
                                      className="h-[3px] mt-2"
                                      src="images/img_vector_12x1.svg"
                                      alt="vector_Eight"
                                    />
                                  </div>
                                </div>
                              </div>
                              <Line className="absolute bg-blue_gray-900 bottom-[21%] h-[21px] right-[31%] w-[5px]" />
                            </div>
                            <Img
                              className="absolute bottom-[20%] h-2.5 right-[22%]"
                              src="images/img_close_blue_gray_900.svg"
                              alt="close_One"
                            />
                          </div>
                          <Img
                            className="h-[30px] w-[29px]"
                            src="images/img_speechbubble.svg"
                            alt="speechbubble"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[0] md:h-40 h-[161px] inset-x-[0] mx-auto w-[42%]">
                        <div className="md:h-40 h-[161px] m-auto w-full">
                          <div className="md:h-40 h-[161px] m-auto w-full">
                            <div className="md:h-40 h-[161px] m-auto w-full">
                              <div className="md:h-40 h-[161px] m-auto w-full">
                                <div className="md:h-40 h-[161px] m-auto w-full">
                                  <div className="md:h-40 h-[161px] m-auto w-full">
                                    <div className="absolute md:h-40 h-[161px] inset-[0] justify-center m-auto w-full">
                                      <div className="absolute md:h-40 h-[161px] inset-y-[0] my-auto right-[0] w-[77%]">
                                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-4/5">
                                          <div className="flex flex-col gap-[37px] items-start justify-start w-full">
                                            <div className="flex flex-row gap-[5px] items-end justify-evenly w-full">
                                              <div
                                                className="bg-cover bg-no-repeat flex flex-col h-[55px] items-end justify-start w-[59%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_group202.svg')",
                                                }}
                                              >
                                                <Img
                                                  className="h-0.5 mb-[50px] mr-0.5"
                                                  src="images/img_vector_blue_gray_700_2x12.svg"
                                                  alt="vector_Ten"
                                                />
                                              </div>
                                              <Img
                                                className="h-[30px] mb-[3px] mt-[21px]"
                                                src="images/img_user_blue_gray_900.svg"
                                                alt="user_One"
                                              />
                                            </div>
                                            <div
                                              className="bg-cover bg-no-repeat flex flex-col h-[69px] items-end justify-end ml-0.5 md:ml-[0] pt-[7px] px-[7px] w-[85%] md:w-full"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group200.svg')",
                                              }}
                                            >
                                              <Line className="bg-blue_gray-700 h-[61px] w-0.5" />
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-col h-[61px] inset-x-[0] items-end justify-end mx-auto p-[9px] top-[23%] w-[62px]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group201.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-0.5 mr-2 mt-[41px]"
                                            src="images/img_vector_blue_gray_900_2x20.svg"
                                            alt="vector_Twelve"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute h-[23px] left-[0] top-[35%] w-[23px]"
                                        src="images/img_television_gray_300.svg"
                                        alt="television"
                                      />
                                    </div>
                                    <Img
                                      className="absolute h-[23px] left-[0] top-[35%]"
                                      src="images/img_thumbsup_gray_50.svg"
                                      alt="thumbsup_Four"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-[23px] items-center justify-end left-[0] top-[35%] w-[52%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group206.svg')",
                                      }}
                                    >
                                      <div className="flex flex-row items-center justify-between w-[61%] md:w-full">
                                        <Img
                                          className="h-2"
                                          src="images/img_vector_amber_400_8x3.svg"
                                          alt="vector_Thirteen"
                                        />
                                        <Line className="bg-blue_gray-900 h-5 w-[3px]" />
                                        <Img
                                          className="h-2 w-[7px]"
                                          src="images/img_vector_amber_400.svg"
                                          alt="vector_Fifteen"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-start justify-end left-[18%] my-auto w-[17%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group207.svg')",
                                    }}
                                  >
                                    <div className="flex flex-row items-start justify-evenly w-[5px] md:w-full">
                                      <Img
                                        className="h-[3px] mt-0.5"
                                        src="images/img_vector_deep_orange_300_02_3x1.svg"
                                        alt="vector_Sixteen"
                                      />
                                      <Img
                                        className="h-[5px]"
                                        src="images/img_vector_deep_orange_300_02_5x1.svg"
                                        alt="vector_Seventeen"
                                      />
                                      <Img
                                        className="h-1"
                                        src="images/img_vector_deep_orange_300_02_4x1.svg"
                                        alt="vector_Eighteen"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-[41px] items-start justify-center right-[21%] top-[4%] w-1/4"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group204.svg')",
                                    }}
                                  >
                                    <div className="flex flex-row gap-[5px] items-start justify-start mt-[3px] w-[58%] md:w-full">
                                      <Img
                                        className="h-px"
                                        src="images/img_vector_blue_gray_900_12x1.svg"
                                        alt="vector_Nineteen"
                                      />
                                      <Img
                                        className="h-px"
                                        src="images/img_vector_blue_gray_900_12x1.svg"
                                        alt="vector_Twenty"
                                      />
                                    </div>
                                    <div className="h-5 md:h-7 mb-[11px] relative w-[67%]">
                                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                        <div className="flex flex-col items-end justify-start w-full">
                                          <div className="flex flex-row items-start justify-evenly w-[86%] md:w-full">
                                            <div className="flex flex-col h-[3px] items-start justify-start w-[3px]">
                                              <Img
                                                className="h-px"
                                                src="images/img_vector_blue_gray_900_12x1.svg"
                                                alt="vector_TwentyOne"
                                              />
                                              <Img
                                                className="h-px w-px"
                                                src="images/img_vector_blue_gray_900_3x3.svg"
                                                alt="vector_TwentyTwo"
                                              />
                                            </div>
                                            <Img
                                              className="h-[7px]"
                                              src="images/img_vector_blue_gray_900_7x2.svg"
                                              alt="vector_TwentyThree"
                                            />
                                            <div className="flex flex-col h-[3px] items-start justify-start w-[3px]">
                                              <Img
                                                className="h-px"
                                                src="images/img_vector_blue_gray_900_12x1.svg"
                                                alt="vector_TwentyFour"
                                              />
                                              <Img
                                                className="h-px w-px"
                                                src="images/img_vector_blue_gray_900_3x3.svg"
                                                alt="vector_TwentyFive"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex flex-col gap-[5px] items-start justify-start w-[58%] md:w-full">
                                            <Img
                                              className="h-px w-0.5"
                                              src="images/img_vector_deep_orange_300_02_4x5.svg"
                                              alt="vector_TwentySix"
                                            />
                                            <Img
                                              className="h-1"
                                              src="images/img_vector_deep_orange_300_02_4x8.svg"
                                              alt="vector_TwentySeven"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute h-0.5 inset-x-[0] mx-auto top-[40%] w-0.5"
                                        src="images/img_vector_blue_gray_900_12x1.svg"
                                        alt="vector_TwentyEight"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-[53px] items-end justify-end pl-[3px] py-[3px] right-[8%] top-[2%] w-[24%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group203.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-1.5 mt-[38px] w-[5px]"
                                    src="images/img_vector_blue_gray_900_3x3.svg"
                                    alt="vector_TwentyNine"
                                  />
                                </div>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col pl-0.5 py-0.5 right-1/4 top-[27%] w-[11%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group205.svg')",
                                }}
                              >
                                <div className="md:h-1 h-1.5 ml-auto w-1.5">
                                  <div className="absolute md:h-1 h-1.5 inset-x-[0] mx-auto top-[0] w-1.5">
                                    <div className="absolute h-1 right-[0] top-[0] w-[3px]">
                                      <Img
                                        className="absolute h-1 inset-y-[0] my-auto right-[0]"
                                        src="images/img_vector_deep_orange_300_02_3x15.svg"
                                        alt="vector_Thirty"
                                      />
                                      <Img
                                        className="absolute bottom-[0] h-px left-[0] w-0.5"
                                        src="images/img_vector_deep_orange_300_02_1x2.svg"
                                        alt="vector_ThirtyOne"
                                      />
                                    </div>
                                    <Img
                                      className="absolute bottom-[0] h-0.5 left-[0]"
                                      src="images/img_vector_deep_orange_300_02_2x4.svg"
                                      alt="vector_ThirtyTwo"
                                    />
                                  </div>
                                  <Img
                                    className="absolute bottom-[0] h-0.5 left-[0] w-px"
                                    src="images/img_vector_deep_orange_300_02_1x2.svg"
                                    alt="vector_ThirtyThree"
                                  />
                                </div>
                                <Img
                                  className="h-[3px] mt-[-0.9px] mx-auto w-1 z-[1]"
                                  src="images/img_vector_deep_orange_300_02_3x4.svg"
                                  alt="vector_ThirtyFour"
                                />
                              </div>
                            </div>
                            <Img
                              className="absolute h-[22px] right-[6%] top-[40%] w-[22px]"
                              src="images/img_settings_blue_gray_900_22x22.svg"
                              alt="settings_Two"
                            />
                          </div>
                          <div className="absolute flex flex-col gap-10 items-end justify-start right-[12%] top-[2%] w-[46%]">
                            <div
                              className="bg-cover bg-no-repeat flex pt-0.5 relative w-[7px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group93.svg')",
                              }}
                            >
                              <Img
                                className="h-1.5 mt-auto"
                                src="images/img_vector_amber_400_6x3.svg"
                                alt="vector_ThirtyFive"
                              />
                              <Img
                                className="h-0.5 mb-0.5 ml-[-0.6px] mt-auto z-[1]"
                                src="images/img_vector_blue_gray_700_2x4.svg"
                                alt="vector_ThirtySix"
                              />
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start mr-0.5 w-[93%] md:w-full">
                              <div className="flex flex-row gap-[27px] items-end justify-between ml-1 md:ml-[0] w-[86%] md:w-full">
                                <Line className="bg-blue_gray-900 h-[18px] w-0.5" />
                                <Img
                                  className="h-[11px] mt-[5px]"
                                  src="images/img_vector_blue_gray_900_11x1.svg"
                                  alt="vector_ThirtyEight"
                                />
                              </div>
                              <Line className="bg-blue_gray-900 h-4 w-[5px]" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col items-start justify-start right-[18%] top-[4%] w-[15%]">
                          <Img
                            className="h-1"
                            src="images/img_vector_blue_gray_700_4x11.svg"
                            alt="vector_Forty"
                          />
                          <Img
                            className="h-[3px] ml-1 md:ml-[0]"
                            src="images/img_vector_blue_gray_700_3x7.svg"
                            alt="vector_FortyOne"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[0] h-4 left-[8%]"
                      src="images/img_group143.svg"
                      alt="table"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[83px] right-[11%]"
                    src="images/img_thumbsup_amber_400.svg"
                    alt="thumbsup_Five"
                  />
                  <Img
                    className="absolute bottom-[0] h-[68px] left-[30%]"
                    src="images/img_play_amber_400.svg"
                    alt="play"
                  />
                  <Img
                    className="absolute bottom-[0] h-[66px] left-[5%]"
                    src="images/img_play_amber_400_66x44.svg"
                    alt="play_One"
                  />
                </div>
                <Img
                  className="absolute bottom-[0] h-px inset-x-[0] mx-auto"
                  src="images/img_vector_12x1.svg"
                  alt="wall"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[3px] w-[70%] md:w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtInterBold50Black900"
              >
                Subject
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-3 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInterLight24"
                >
                  <span className="text-black-900 font-inter text-left font-light">
                    Duration :{" "}
                  </span>
                  <span className="text-black-900 font-inter text-left font-medium">
                    12 hour
                  </span>
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[200px] text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="square"
                  color="blue_A700_01"
                  size="md"
                  variant="fill"
                >
                  Explore
                </Button>
              </div>
              <Text
                className="mt-[31px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterLight24"
              >
                <span className="text-black-900 font-inter text-left font-light">
                  Sections :{" "}
                </span>
                <span className="text-black-900 font-inter text-left font-medium">
                  5
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1250px] mt-[45px] mx-auto p-[22px] md:px-5 rounded-[10px] shadow-bs3 w-full">
          <div className="flex md:flex-col flex-row gap-[38px] items-start justify-between mb-[3px] w-[96%] md:w-full">
            <div className="md:h-[200px] h-[203px] relative w-[28%] md:w-full">
              <div className="absolute bg-red-300 h-[200px] inset-[0] justify-center m-auto rounded-[10px] shadow-bs2 w-full"></div>
              <div className="absolute md:h-[196px] h-[200px] inset-[0] justify-center m-auto w-[200px]">
                <div className="md:h-[196px] h-[200px] m-auto w-[200px]">
                  <div className="absolute md:h-[196px] h-[200px] inset-[0] justify-center m-auto w-[95%]">
                    <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-full">
                      <div className="h-[178px] relative w-full">
                        <div className="h-[178px] m-auto w-full">
                          <div className="absolute flex flex-row gap-3.5 h-full inset-[0] items-start justify-between m-auto w-[99%]">
                            <div className="flex flex-row gap-[18px] items-start justify-between w-3/4">
                              <div className="bg-gray-300 h-[93px] mt-0.5 w-[37%]"></div>
                              <div className="flex flex-col items-end justify-start">
                                <div className="flex flex-row items-center justify-between w-full">
                                  <div className="flex flex-col gap-7 items-center justify-start">
                                    <div className="flex flex-row gap-4 items-end justify-between w-full">
                                      <Img
                                        className="h-[7px]"
                                        src="images/img_vector_gray_100_01.svg"
                                        alt="vector_FortyThree"
                                      />
                                      <Img
                                        className="h-0.5 mt-[5px] w-px"
                                        src="images/img_vector_gray_300.svg"
                                        alt="vector_FortyFour"
                                      />
                                    </div>
                                    <Img
                                      className="h-1 w-[3px]"
                                      src="images/img_vector_gray_300.svg"
                                      alt="vector_FortyFive"
                                    />
                                  </div>
                                  <Img
                                    className="h-0.5 w-px"
                                    src="images/img_vector_gray_300.svg"
                                    alt="vector_FortySix"
                                  />
                                  <Img
                                    className="h-1 w-[3px]"
                                    src="images/img_vector_gray_300.svg"
                                    alt="vector_FortySeven"
                                  />
                                </div>
                                <div className="flex flex-col gap-[7px] items-start justify-start w-[30%] md:w-full">
                                  <Img
                                    className="h-0.5 w-px"
                                    src="images/img_vector_gray_300.svg"
                                    alt="vector_FortyEight"
                                  />
                                  <Img
                                    className="h-[5px]"
                                    src="images/img_vector_gray_200.svg"
                                    alt="vector_FortyNine"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="md:h-[129px] h-[166px] sm:h-[173px] mt-[11px] relative w-[18%]">
                              <div className="md:h-[118px] sm:h-[162px] h-[166px] m-auto w-full">
                                <div className="md:h-[118px] sm:h-[162px] h-[166px] m-auto w-full">
                                  <div className="absolute md:h-[118px] sm:h-[162px] h-[166px] inset-[0] justify-center m-auto w-full">
                                    <div className="flex flex-col md:gap-10 gap-[84px] h-full items-start justify-start m-auto w-full">
                                      <div className="bg-gray-300 h-[34px] ml-0.5 md:ml-[0] w-[91%]"></div>
                                      <div className="md:h-11 h-[47px] relative w-[94%]">
                                        <div className="md:h-11 h-[47px] m-auto w-full">
                                          <div className="flex flex-col h-full justify-start m-auto w-full">
                                            <div className="flex flex-row items-end justify-start mr-1.5 w-6 md:w-full">
                                              <Img
                                                className="h-[17px] mt-1.5"
                                                src="images/img_contrast_gray_200.svg"
                                                alt="contrast"
                                              />
                                              <Img
                                                className="h-5 mb-0.5"
                                                src="images/img_contrast_gray_200_20x9.svg"
                                                alt="contrast_One"
                                              />
                                            </div>
                                            <div className="h-[19px] md:h-[21px] ml-4 md:ml-[0] mt-1 relative w-[46%]">
                                              <Img
                                                className="absolute h-2 right-[0] top-[0]"
                                                src="images/img_maximize.svg"
                                                alt="maximize"
                                              />
                                              <Img
                                                className="absolute bottom-[0] h-[17px] left-[0]"
                                                src="images/img_bookmark_gray_300.svg"
                                                alt="bookmark"
                                              />
                                            </div>
                                          </div>
                                          <Line className="absolute bg-gray-300 bottom-[0] h-[38px] right-[32%] w-1" />
                                        </div>
                                        <Img
                                          className="absolute h-[26px] inset-y-[0] left-[16%] my-auto"
                                          src="images/img_settings_gray_300_26x11.svg"
                                          alt="settings_Three"
                                        />
                                      </div>
                                    </div>
                                    <div className="absolute bg-gray-50 h-[34px] inset-x-[0] mx-auto top-[0] w-[91%]"></div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat md:h-[25px] h-[34px] inset-x-[0] mx-auto top-[0] w-[91%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group209.svg')",
                                    }}
                                  >
                                    <div className="md:h-[25px] h-[34px] m-auto w-full">
                                      <div className="absolute md:h-[25px] h-[29px] right-[0] top-[0] w-[87%]">
                                        <div className="absolute bg-gray-50 bottom-[0] h-[25px] left-[0] w-[85%]"></div>
                                        <Img
                                          className="absolute h-1 right-[0] top-[0] w-1"
                                          src="images/img_vector_gray_300_4x4.svg"
                                          alt="vector_FiftyFour"
                                        />
                                      </div>
                                      <div className="absolute bottom-[0] flex flex-row gap-[22px] inset-x-[0] items-center justify-between mx-auto w-full">
                                        <Img
                                          className="h-1 w-1"
                                          src="images/img_vector_gray_300_4x4.svg"
                                          alt="vector_FiftyFive"
                                        />
                                        <Img
                                          className="h-1 w-[3px]"
                                          src="images/img_vector_gray_300_4x4.svg"
                                          alt="vector_FiftySix"
                                        />
                                      </div>
                                      <Img
                                        className="absolute h-1 left-[0] top-[0] w-[3px]"
                                        src="images/img_vector_gray_300_4x4.svg"
                                        alt="vector_FiftySeven"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[7px] w-[74%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group212.svg')",
                                      }}
                                    >
                                      <div className="bg-gray-200 h-2 w-[7px]"></div>
                                    </div>
                                  </div>
                                  <div className="absolute bg-gray-300 h-[34px] right-[0] top-[26%] w-[91%]"></div>
                                </div>
                                <div className="absolute bg-gray-50 h-[34px] inset-x-[0] mx-auto top-[26%] w-[91%]"></div>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat md:h-[25px] h-[34px] inset-x-[0] mx-auto top-[26%] w-[91%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group209.svg')",
                                }}
                              >
                                <div className="md:h-[25px] h-[34px] m-auto w-full">
                                  <div className="absolute md:h-[25px] h-[29px] right-[0] top-[0] w-[87%]">
                                    <div className="absolute bg-gray-50 bottom-[0] h-[25px] left-[0] w-[85%]"></div>
                                    <Img
                                      className="absolute h-1 right-[0] top-[0] w-1"
                                      src="images/img_vector_gray_300_4x4.svg"
                                      alt="vector_SixtyTwo"
                                    />
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-row gap-[22px] inset-x-[0] items-center justify-between mx-auto w-full">
                                    <Img
                                      className="h-1 w-1"
                                      src="images/img_vector_gray_300_4x4.svg"
                                      alt="vector_SixtyThree"
                                    />
                                    <Img
                                      className="h-1 w-[3px]"
                                      src="images/img_vector_gray_300_4x4.svg"
                                      alt="vector_SixtyFour"
                                    />
                                  </div>
                                  <Img
                                    className="absolute h-1 left-[0] top-[0] w-[3px]"
                                    src="images/img_vector_gray_300_4x4.svg"
                                    alt="vector_SixtyFive"
                                  />
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[7px] w-[74%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group212.svg')",
                                  }}
                                >
                                  <div className="bg-gray-200 h-2 w-[7px]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bg-gray-200 flex flex-col items-center justify-start left-[0] top-[1%] w-[27%]">
                            <div className="bg-gray-50 md:h-[66px] h-[89px] p-2 relative w-[93%]">
                              <div className="absolute bg-gray-200 h-[66px] inset-[0] justify-center m-auto w-3/5"></div>
                              <Img
                                className="absolute bottom-[11%] h-12 inset-x-[0] mx-auto"
                                src="images/img_user_gray_300.svg"
                                alt="user_Two"
                              />
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[126px] left-[5%] top-[7%]"
                          src="images/img_elements.svg"
                          alt="elements"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[163px] w-[11%] md:w-full">
                        <div className="flex flex-col relative w-[19px]">
                          <div className="flex flex-col items-center justify-start mx-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="bg-gray-300 h-[5px] w-full"></div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-3 items-center justify-start py-0.5 w-[85%] md:w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_contrast_gray_300.svg')",
                                }}
                              >
                                <Img
                                  className="h-[3px] mb-1"
                                  src="images/img_vector_gray_100_01_3x16.svg"
                                  alt="vector_SixtyNine"
                                />
                              </div>
                            </div>
                          </div>
                          <Img
                            className="h-px mt-[-0.5px] mx-auto z-[1]"
                            src="images/img_vector_gray_200_1x19.svg"
                            alt="vector_Seventy"
                          />
                          <Img
                            className="h-px mt-[-NaNpx] mx-auto z-[1]"
                            src="images/img_group133.svg"
                            alt="vector_SeventyOne"
                          />
                        </div>
                        <div className="h-0.5 relative w-full">
                          <Img
                            className="absolute h-0.5 inset-[0] justify-center m-auto"
                            src="images/img_vector_gray_300_2x17.svg"
                            alt="vector_SeventyTwo"
                          />
                          <Img
                            className="absolute h-px inset-x-[0] mx-auto top-[0]"
                            src="images/img_group133.svg"
                            alt="vector_SeventyThree"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] md:h-[118px] h-[151px] right-[7%] w-[74%]">
                      <div className="absolute md:h-[118px] h-[150px] inset-[0] justify-center m-auto w-[98%]">
                        <div className="absolute md:h-[118px] h-[150px] inset-y-[0] left-[0] my-auto w-[86%]">
                          <div className="h-[150px] md:h-[75px] m-auto w-full">
                            <div className="absolute h-[150px] md:h-[75px] inset-[0] justify-center m-auto w-full">
                              <div className="h-[150px] md:h-[75px] m-auto w-full">
                                <div className="absolute h-[145px] md:h-[75px] inset-[0] justify-center m-auto w-full">
                                  <div className="absolute h-[139px] inset-[0] justify-center m-auto w-full">
                                    <Img
                                      className="h-[3px] mb-[undefinedpx] ml-3 mt-auto z-[1]"
                                      src="images/img_group146.svg"
                                      alt="vector_SeventyNine"
                                    />
                                    <Img
                                      className="h-[55px] mb-[-4.83px] ml-auto mr-7 z-[1]"
                                      src="images/img_television_blue_gray_900.svg"
                                      alt="television_Two"
                                    />
                                    <div className="md:h-[75px] h-[88px] mt-auto mx-auto w-full">
                                      <div className="md:h-[75px] h-[88px] m-auto w-full">
                                        <div className="md:h-[75px] h-[88px] m-auto w-full">
                                          <div className="absolute md:h-6 h-[88px] inset-y-[0] left-[7%] my-auto w-[61%]">
                                            <Img
                                              className="absolute h-6 right-[14%] top-[0]"
                                              src="images/img_television_deep_orange_200_01.svg"
                                              alt="television_One"
                                            />
                                            <div
                                              className="absolute bg-cover bg-no-repeat md:h-[11px] h-[87px] inset-[0] justify-center m-auto p-[23px] sm:px-5 w-full"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group214.svg')",
                                              }}
                                            >
                                              <Img
                                                className="absolute bottom-[31%] h-[9px] inset-x-[0] mx-auto"
                                                src="images/img_settings_black_900_9x16.svg"
                                                alt="settings_Four"
                                              />
                                              <Img
                                                className="absolute bottom-[34%] h-[11px] inset-x-[0] mx-auto"
                                                src="images/img_mobile.svg"
                                                alt="mobile"
                                              />
                                            </div>
                                          </div>
                                          <div
                                            className="absolute bg-cover bg-no-repeat md:h-9 h-[68px] inset-y-[0] my-auto right-[0] w-[36%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group217.svg')",
                                            }}
                                          >
                                            <Line className="absolute bg-blue_gray-900 bottom-[19%] h-9 left-[0] w-1" />
                                            <Line className="absolute bg-black-900 h-[23px] left-[5%] top-[22%] w-0.5" />
                                          </div>
                                          <div
                                            className="absolute bg-cover bg-no-repeat flex flex-col h-[78px] items-end justify-start left-[0] top-[3%] w-1/4"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group215.svg')",
                                            }}
                                          >
                                            <div className="flex flex-col gap-[58px] items-end justify-start w-[68%] md:w-full">
                                              <Line className="bg-blue_gray-900 h-4 w-1" />
                                              <Img
                                                className="h-px mr-[3px]"
                                                src="images/img_vector_blue_gray_900_1x15.svg"
                                                alt="vector_SeventySeven"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <Img
                                          className="absolute bottom-[27%] h-9 left-[17%]"
                                          src="images/img_settings_blue_gray_900_36x8.svg"
                                          alt="settings_Five"
                                        />
                                      </div>
                                      <Img
                                        className="absolute bottom-[23%] h-[9px] left-[8%]"
                                        src="images/img_vector_blue_gray_900.svg"
                                        alt="vector_SeventyEight"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-[71px] inset-x-[0] items-start justify-center mx-auto p-0.5 top-[0] w-[34%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group216.svg')",
                                    }}
                                  >
                                    <div className="flex flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[11px] mt-3.5 w-[65%] md:w-full">
                                      <Img
                                        className="h-0.5"
                                        src="images/img_vector_blue_gray_900_12x1.svg"
                                        alt="vector_Eighty"
                                      />
                                      <Img
                                        className="h-px"
                                        src="images/img_vector_blue_gray_900_12x1.svg"
                                        alt="vector_EightyOne"
                                      />
                                    </div>
                                    <div className="h-[37px] md:h-[47px] mb-2.5 md:ml-[0] ml-[7px] mt-0.5 relative w-[74%]">
                                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                        <div className="flex flex-col items-start justify-start w-full">
                                          <div className="flex flex-row items-start justify-evenly ml-1 md:ml-[0] w-[84%] md:w-full">
                                            <Img
                                              className="h-0.5"
                                              src="images/img_vector_blue_gray_900_12x1.svg"
                                              alt="vector_EightyTwo"
                                            />
                                            <Img
                                              className="h-3.5"
                                              src="images/img_vector_blue_gray_900_14x4.svg"
                                              alt="vector_EightyThree"
                                            />
                                            <Img
                                              className="h-px"
                                              src="images/img_vector_blue_gray_900_12x1.svg"
                                              alt="vector_EightyFour"
                                            />
                                          </div>
                                          <Img
                                            className="h-[3px] md:ml-[0] ml-[9px] mt-0.5 w-1"
                                            src="images/img_vector_3x4.svg"
                                            alt="vector_EightyFive"
                                          />
                                          <Img
                                            className="h-2 mt-2"
                                            src="images/img_settings_deep_orange_300_02_7x18.svg"
                                            alt="settings_Six"
                                          />
                                        </div>
                                      </div>
                                      <Img
                                        className="absolute h-[5px] inset-x-[0] mx-auto top-[41%] w-[5px]"
                                        src="images/img_vector_blue_gray_900_12x1.svg"
                                        alt="vector_EightySix"
                                      />
                                      <Img
                                        className="absolute h-0.5 right-[0] top-[14%] w-0.5"
                                        src="images/img_vector_blue_gray_900_3x3.svg"
                                        alt="vector_EightySeven"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="absolute h-[33px] left-[32%] top-[0]"
                                  src="images/img_thumbsup_blue_gray_900_33x27.svg"
                                  alt="thumbsup_Six"
                                />
                              </div>
                              <Img
                                className="absolute h-[30px] right-[30%] top-[0]"
                                src="images/img_settings_blue_gray_900_18x24.svg"
                                alt="settings_Seven"
                              />
                            </div>
                            <Img
                              className="absolute h-[7px] right-[43%] top-[0]"
                              src="images/img_vector_blue_gray_700_7x5.svg"
                              alt="vector_EightyEight"
                            />
                            <Img
                              className="absolute h-0.5 inset-x-[0] mx-auto top-[21%] w-0.5"
                              src="images/img_vector_blue_gray_900_3x3.svg"
                              alt="vector_EightyNine"
                            />
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col left-[14%] p-1.5 top-[0] w-[30%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group218.svg')",
                              }}
                            >
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[11px] items-start justify-start mb-3.5 ml-auto mt-auto w-[21%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group223.svg')",
                                }}
                              >
                                <Img
                                  className="h-1.5"
                                  src="images/img_vector_deep_orange_300_02_6x2.svg"
                                  alt="vector_Ninety"
                                />
                              </div>
                              <Img
                                className="h-1 mb-2.5 ml-auto mt-[-0.81px] w-1 z-[1]"
                                src="images/img_vector_4x4.svg"
                                alt="vector_NinetyOne"
                              />
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-row h-3.5 items-start justify-end right-[30%] top-[17%] w-[11%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group222.svg')",
                              }}
                            >
                              <Img
                                className="h-[5px] mt-[5px]"
                                src="images/img_vector_white_a700_5x1.svg"
                                alt="vector_NinetyTwo"
                              />
                              <Img
                                className="h-px mt-0.5 w-px"
                                src="images/img_vector_white_a700_1x1.svg"
                                alt="vector_NinetyThree"
                              />
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-row h-3.5 inset-x-[0] items-center justify-center mx-auto pl-0.5 py-0.5 top-[17%] w-[11%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group221.svg')",
                              }}
                            >
                              <Img
                                className="h-1.5"
                                src="images/img_vector_white_a700_6x1.svg"
                                alt="vector_NinetyFour"
                              />
                            </div>
                          </div>
                          <div className="absolute bottom-[0] flex flex-row items-start justify-center left-[17%] w-[52%]">
                            <div className="flex flex-col md:gap-10 gap-[90px] justify-start w-[92%]">
                              <div className="flex flex-row gap-3 items-start justify-end md:ml-[0] ml-[22px] w-[47%] md:w-full">
                                <Img
                                  className="h-px"
                                  src="images/img_vector_blue_gray_700_1x8.svg"
                                  alt="vector_NinetyFive"
                                />
                                <Img
                                  className="h-px"
                                  src="images/img_vector_blue_gray_700_2x4.svg"
                                  alt="vector_NinetySix"
                                />
                              </div>
                              <div
                                className="bg-cover bg-no-repeat flex flex-row h-[25px] items-start justify-center pb-[7px] px-[7px] w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group220.svg')",
                                }}
                              >
                                <div className="flex ml-[19px] mt-[3px] relative w-[30%]">
                                  <div className="h-3.5 my-auto w-[84%]">
                                    <Img
                                      className="absolute bottom-[0] h-2 left-[0]"
                                      src="images/img_vector_deep_orange_300_02_8x5.svg"
                                      alt="vector_NinetySeven"
                                    />
                                    <Img
                                      className="absolute h-3.5 inset-y-[0] my-auto right-[0]"
                                      src="images/img_vector_deep_orange_300_02.svg"
                                      alt="vector_NinetyEight"
                                    />
                                  </div>
                                  <Img
                                    className="h-px ml-[-0.65px] mt-auto w-0.5 z-[1]"
                                    src="images/img_vector_deep_orange_300_02_3x1.svg"
                                    alt="vector_NinetyNine"
                                  />
                                </div>
                                <div className="flex flex-col items-end justify-start mb-0.5 w-[15%]">
                                  <Img
                                    className="h-0.5 w-px"
                                    src="images/img_vector_deep_orange_300_02_2x1.svg"
                                    alt="vector_OneHundred"
                                  />
                                  <Img
                                    className="h-px mt-0.5"
                                    src="images/img_vector_deep_orange_300_02_1x2.svg"
                                    alt="vector_OneHundredOne"
                                  />
                                  <div className="flex flex-row items-start justify-evenly mt-[3px] w-full">
                                    <Img
                                      className="h-0.5"
                                      src="images/img_vector_deep_orange_300_02_1x2.svg"
                                      alt="vector_OneHundredTwo"
                                    />
                                    <Img
                                      className="h-px w-px"
                                      src="images/img_vector_deep_orange_300_02_1x1.svg"
                                      alt="vector_OneHundredThree"
                                    />
                                  </div>
                                  <Img
                                    className="h-0.5 w-px"
                                    src="images/img_vector_deep_orange_300_02_2x1.svg"
                                    alt="vector_OneHundredFour"
                                  />
                                </div>
                              </div>
                            </div>
                            <Img
                              className="h-[5px] mt-[11px]"
                              src="images/img_vector_gray_300_5x3.svg"
                              alt="vector_OneHundredFive"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[0] h-9 right-[0]"
                          src="images/img_airplane.svg"
                          alt="airplane"
                        />
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] h-9 md:h-[31px] right-[0] w-[56%]"
                        style={{
                          backgroundImage: "url('images/img_group219.svg')",
                        }}
                      >
                        <div className="md:h-[31px] h-[34px] m-auto w-[95%]">
                          <div className="absolute bottom-[0] flex flex-row items-start justify-evenly left-[0] w-[96%]">
                            <div className="h-[27px] md:h-[31px] mt-1 relative w-3/4">
                              <div className="absolute h-[27px] inset-[0] justify-center m-auto w-[97%]">
                                <Img
                                  className="absolute bottom-[7%] h-[17px] right-[0]"
                                  src="images/img_checkmark_blue_gray_900.svg"
                                  alt="checkmark"
                                />
                                <Img
                                  className="absolute h-[27px] inset-[0] justify-center m-auto"
                                  src="images/img_checkmark_gray_300.svg"
                                  alt="checkmark_One"
                                />
                              </div>
                              <Img
                                className="absolute h-[26px] inset-[0] justify-center m-auto"
                                src="images/img_checkmark_blue_gray_900_26x52.svg"
                                alt="checkmark_Two"
                              />
                            </div>
                            <Img
                              className="h-2.5"
                              src="images/img_settings_gray_300_10x14.svg"
                              alt="settings_Eight"
                            />
                          </div>
                          <Img
                            className="absolute h-[5px] right-[29%] top-[29%]"
                            src="images/img_vector_blue_gray_900_5x25.svg"
                            alt="vector_OneHundredSix"
                          />
                          <Img
                            className="absolute h-3.5 right-[0] top-[0]"
                            src="images/img_vector_blue_gray_900_14x19.svg"
                            alt="vector_OneHundredSeven"
                          />
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] md:h-1.5 h-[23px] right-[12%] w-[47%]"
                          style={{
                            backgroundImage: "url('images/img_group224.svg')",
                          }}
                        >
                          <div className="absolute bottom-[22%] h-1.5 right-1/4 w-[5px]">
                            <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[5px]">
                              <Img
                                className="h-px md:ml-[0] ml-[3px] w-0.5"
                                src="images/img_vector_deep_orange_300_02_2x1.svg"
                                alt="vector_OneHundredEight"
                              />
                              <Img
                                className="h-0.5 mt-0.5 w-0.5"
                                src="images/img_vector_deep_orange_300_02_1x2.svg"
                                alt="vector_OneHundredNine"
                              />
                            </div>
                            <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start my-auto right-[0] w-2/5">
                              <Img
                                className="h-[3px]"
                                src="images/img_vector_deep_orange_300_02_1x2.svg"
                                alt="vector_OneHundredTen"
                              />
                              <Img
                                className="h-px mt-0.5 w-px"
                                src="images/img_vector_deep_orange_300_02_2x1.svg"
                                alt="vector_OneHundredEleven"
                              />
                            </div>
                          </div>
                          <Img
                            className="absolute h-0.5 right-[8%] top-[9%] w-px"
                            src="images/img_vector_deep_orange_300_02_2x1.svg"
                            alt="vector_OneHundredTwelve"
                          />
                          <div className="absolute bottom-[0] flex flex-row items-center justify-start left-[0] w-1/2">
                            <Img
                              className="h-1.5"
                              src="images/img_settings_deep_orange_300_02_6x13.svg"
                              alt="settings_Nine"
                            />
                            <Img
                              className="h-0.5"
                              src="images/img_vector_deep_orange_300_02_3x15.svg"
                              alt="vector_OneHundredThirteen"
                            />
                          </div>
                          <Img
                            className="absolute bottom-[9%] h-px right-[33%] w-px"
                            src="images/img_vector_deep_orange_300_02_1x2.svg"
                            alt="vector_OneHundredFourteen"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-px inset-x-[0] mx-auto"
                    src="images/img_vector_12x1.svg"
                    alt="desk_One"
                  />
                </div>
                <Img
                  className="absolute bottom-[0] h-[54px] left-[3%]"
                  src="images/img_television_blue_gray_900_54x95.svg"
                  alt="television_Three"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:mt-0 mt-1 w-[70%] md:w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtInterBold50Black900"
              >
                Subject
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-3 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInterLight24"
                >
                  <span className="text-black-900 font-inter text-left font-light">
                    Duration :{" "}
                  </span>
                  <span className="text-black-900 font-inter text-left font-medium">
                    12 hour
                  </span>
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[200px] text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="square"
                  color="blue_A700_01"
                  size="md"
                  variant="fill"
                >
                  Explore
                </Button>
              </div>
              <Text
                className="mt-[31px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterLight24"
              >
                <span className="text-black-900 font-inter text-left font-light">
                  Sections :{" "}
                </span>
                <span className="text-black-900 font-inter text-left font-medium">
                  5
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1250px] mb-[29px] mt-[45px] mx-auto p-[21px] md:px-5 rounded-[10px] shadow-bs3 w-full">
          <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between mb-1 w-[96%] md:w-full">
            <div className="md:h-[200px] h-[204px] relative w-[28%] md:w-full">
              <div className="absolute bg-red-300 h-[200px] inset-[0] justify-center m-auto rounded-[10px] shadow-bs2 w-full"></div>
              <div className="absolute md:h-[196px] h-[200px] inset-y-[0] left-[15%] my-auto w-[200px]">
                <div className="absolute md:h-[196px] h-[198px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute flex flex-col gap-[33px] h-max inset-[0] items-end justify-center m-auto w-full">
                    <div className="h-[162px] relative w-full">
                      <div className="absolute bottom-[2%] flex flex-col items-center justify-start right-[0] w-[93%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                            <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                              <div className="bg-gray-200 h-[5px] w-[7%]"></div>
                              <div className="bg-gray-200 h-[5px] w-[7%]"></div>
                            </div>
                            <div className="flex flex-row items-start justify-start w-[99%] md:w-full">
                              <div className="flex flex-col items-center justify-start mt-1 w-[42%]">
                                <div className="h-10 md:h-[35px] relative w-full">
                                  <div className="h-10 md:h-[35px] m-auto w-full">
                                    <div className="h-10 md:h-[35px] m-auto w-full">
                                      <div className="h-10 md:h-[35px] m-auto w-full">
                                        <div className="absolute bottom-[0] md:h-7 h-9 inset-x-[0] mx-auto w-full">
                                          <div className="absolute bottom-[0] h-[35px] inset-x-[0] mx-auto w-full">
                                            <div className="bg-gray-400 flex flex-col items-center justify-start mb-[-0.01px] ml-[18px] py-[5px] w-[10%] z-[1]">
                                              <div className="bg-gray-300_04 h-px mb-[17px] rotate-[-90deg] w-full"></div>
                                            </div>
                                            <Line className="bg-gray-200 h-1 mt-auto mx-auto w-full" />
                                          </div>
                                          <div className="absolute bg-gray-300_04 h-[3px] left-1/4 rotate-[-90deg] top-[0] w-[10%]"></div>
                                          <div className="absolute bg-gray-300_04 bottom-[22%] h-[3px] left-1/4 rotate-[-90deg] w-[10%]"></div>
                                        </div>
                                        <div className="absolute h-[35px] left-[34%] top-[0] w-[6%]">
                                          <Line className="bg-gray-300_04 h-[35px] m-auto w-1" />
                                          <div className="absolute bg-gray-200 h-[13px] inset-x-[0] mx-auto rotate-[-90deg] top-[9%] w-1/2"></div>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[10%] flex flex-row items-start justify-center right-[11%] w-[47%]">
                                        <div className="bg-gray-500_04 flex flex-col items-center justify-end py-0.5 w-[24%]">
                                          <div className="bg-gray-400 h-0.5 mt-[18px] rotate-[-90deg] w-full"></div>
                                        </div>
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-7 items-end justify-start p-1.5 w-[77%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group226.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-[11px] mt-1 w-2.5"
                                            src="images/img_contrast_gray_300_04.svg"
                                            alt="contrast_Two"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[10%] flex flex-row gap-3 h-[25px] items-start justify-center left-[16%] w-[25px]">
                                      <div className="h-[25px] relative w-1/5">
                                        <Line className="bg-gray-500_04 h-[25px] m-auto w-[5px]" />
                                        <div className="absolute bg-gray-400 h-0.5 inset-x-[0] mx-auto rotate-[-90deg] top-[20%] w-full"></div>
                                        <div className="absolute bg-gray-400 h-px inset-x-[0] mx-auto rotate-[-90deg] top-[36%] w-full"></div>
                                      </div>
                                      <div className="bg-gray-400 h-px mb-[7px] mt-[17px] rotate-[-90deg] w-[32%]"></div>
                                    </div>
                                  </div>
                                  <div className="absolute bg-gray-400 bottom-[18%] h-0.5 left-[16%] rotate-[-90deg] w-[7%]"></div>
                                </div>
                                <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
                                  <div className="h-[15px] relative w-[7%]">
                                    <Line className="bg-gray-200 h-[15px] m-auto w-1" />
                                    <div className="absolute bg-gray-300_04 h-1 inset-x-[0] mx-auto top-[0] w-1"></div>
                                  </div>
                                  <div className="h-[15px] relative w-[7%]">
                                    <Line className="bg-gray-200 h-[15px] m-auto w-1" />
                                    <div className="absolute bg-gray-300_04 h-1 inset-x-[0] mx-auto top-[0] w-1"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start ml-[49px] mt-10 w-[13%]">
                                <div className="flex flex-row items-center justify-evenly w-full">
                                  <div className="bg-gray-200 h-[5px] w-[48%]"></div>
                                  <div className="bg-gray-200 h-[5px] w-[48%]"></div>
                                </div>
                                <div className="bg-gray-200 h-[5px] w-[48%]"></div>
                              </div>
                              <div className="bg-gray-200 h-[5px] mb-[54px] ml-[21px] w-[7%]"></div>
                            </div>
                            <div className="bg-gray-200 h-[5px] mt-[58px] w-[7%]"></div>
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="bg-gray-200 h-[5px] w-[6%]"></div>
                            <div className="bg-gray-200 h-[5px] w-[6%]"></div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[162px] inset-[0] justify-center m-auto"
                        src="images/img_elements_white_a700.svg"
                        alt="elements_One"
                      />
                    </div>
                    <Img
                      className="h-px"
                      src="images/img_table.svg"
                      alt="table_One"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[121px] right-[12%]"
                    src="images/img_character_amber_400.svg"
                    alt="character_One"
                  />
                </div>
                <Img
                  className="absolute bottom-[0] h-[37px] right-[0]"
                  src="images/img_user_gray_400.svg"
                  alt="user_Three"
                />
                <Img
                  className="absolute bottom-[0] h-[35px] left-[10%]"
                  src="images/img_reply.svg"
                  alt="reply"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[70%] md:w-full">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtInterBold50Black900"
              >
                Subject
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-3 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtInterLight24"
                >
                  <span className="text-black-900 font-inter text-left font-light">
                    Duration :{" "}
                  </span>
                  <span className="text-black-900 font-inter text-left font-medium">
                    12 hour
                  </span>
                </Text>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[200px] text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="square"
                  color="blue_A700_01"
                  size="md"
                  variant="fill"
                >
                  Explore
                </Button>
              </div>
              <Text
                className="mt-[31px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterLight24"
              >
                <span className="text-black-900 font-inter text-left font-light">
                  Sections :{" "}
                </span>
                <span className="text-black-900 font-inter text-left font-medium">
                  5
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassSubjectPage;
