import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const categoryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ClassOneLivePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[67px] w-full">
        <div className="flex flex-col gap-[33px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start py-4 w-full">
              <div className="flex flex-col justify-start mb-[17px] w-full">
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
                    className="sm:ml-[0] ml-[1171px] text-black-900 text-xl"
                    size="txtInterSemiBold20Black900"
                  >
                    PROFILE
                  </Text>
                </div>
                <Line className="bg-gray-700_03 h-px mt-2.5 w-full" />
                <Img
                  className="common-pointer h-[30px] md:ml-[0] ml-[49px] mt-7 w-[30px]"
                  src="images/img_back.svg"
                  alt="back"
                  onClick={() => navigate(-1)}
                />
              </div>
            </div>
            <Line className="bg-gray-700_03 h-px w-full" />
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1306px] mx-auto md:px-5 w-full">
            <div className="bg-gray-900_03 flex md:flex-1 flex-col items-center justify-start mb-[60px] rounded-[10px] w-[70%] md:w-full">
              <div className="bg-gray-900_04 flex flex-col items-center justify-start p-[15px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-row gap-2.5 items-end justify-start w-[17%] sm:w-full">
                    <Button
                      className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                      shape="circle"
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        src="images/img_arrowleft_blue_gray_900_01.svg"
                        alt="arrowleft"
                      />
                    </Button>
                    <Text
                      className="mb-1 mt-2 text-sm text-white-A700"
                      size="txtInterRegular14"
                    >
                      UI / UX Designs
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-row font-poppins items-start justify-between w-1/4 sm:w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-start mt-[3px]">
                      <Img
                        className="h-4 mt-[3px] w-4"
                        src="images/img_rewind.svg"
                        alt="rewind"
                      />
                      <Text
                        className="text-gray-500_05 text-sm"
                        size="txtPoppinsRegular14Gray50005"
                      >
                        Search{" "}
                      </Text>
                    </div>
                    <Button
                      className="border border-blue_gray-900_03 border-solid flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                      shape="circle"
                      color="blue_gray_900_03"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-3"
                        src="images/img_signal_white_a700.svg"
                        alt="signal"
                      />
                    </Button>
                    <Button
                      className="border border-blue_gray-900_03 border-solid flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                      shape="circle"
                      color="blue_gray_900_03"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-3.5"
                        src="images/img_map.svg"
                        alt="map"
                      />
                    </Button>
                    <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                      <Text
                        className="bg-blue_gray-900_03 border border-blue_gray-900_03 border-solid flex h-[30px] items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-[30px]"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        i
                      </Text>
                    </div>
                    <Button
                      className="border border-blue_gray-900_03 border-solid flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                      shape="circle"
                      color="blue_gray_900_03"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        src="images/img_group48copy3.svg"
                        alt="group48copyThree"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex font-poppins h-[31px] md:h-[46px] justify-end mt-[15px] relative w-[96%] md:w-full">
                <Text
                  className="mb-0.5 ml-auto mr-[53px] mt-auto text-[11px] text-black-900 text-center"
                  size="txtPoppinsRegular11"
                >
                  +4
                </Text>
                <div className="absolute flex flex-row sm:gap-10 h-full inset-[0] items-center justify-between m-auto w-full">
                  <div className="border border-solid border-white-A700 flex flex-col items-center justify-start rounded-[12px] w-[9%]">
                    <div className="flex flex-row gap-[7px] items-center justify-start w-[78%] md:w-full">
                      <div className="bg-green-800 h-1.5 my-[7px] rounded-[50%] w-1.5"></div>
                      <Text
                        className="text-center text-sm text-white-A700"
                        size="txtPoppinsRegular14WhiteA700"
                      >
                        02 : 30{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="h-[31px] relative w-[9%]">
                    <div className="absolute h-[31px] inset-y-[0] my-auto right-[0] w-[79%]">
                      <div className="absolute h-[31px] inset-y-[0] my-auto right-[0] w-3/4">
                        <div className="absolute bg-gray-300_05 flex flex-col h-full inset-y-[0] items-end justify-start my-auto pl-0.5 right-[0] rounded-[15px] w-[31px]">
                          <Img
                            className="h-[31px] md:h-auto object-cover rounded-[15px] w-[97%]"
                            src="images/img_image.png"
                            alt="image"
                          />
                        </div>
                        <div className="absolute bg-gray-300_05 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto rounded-[15px] w-[31px]">
                          <Img
                            className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                            src="images/img_image3.png"
                            alt="imageThree"
                          />
                        </div>
                      </div>
                      <div className="absolute bg-gray-300_05 flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto rounded-[15px] w-[31px]">
                        <Img
                          className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                          src="images/img_image3_31x31.png"
                          alt="imageThree_One"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-gray-300_05 h-[31px] inset-y-[0] left-[0] my-auto rounded-[15px] w-[31px]"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-poppins items-center justify-start mt-11 w-4/5 md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start w-[28%] md:w-full">
                    <div className="h-[200px] relative w-[200px]">
                      <div className="bg-blue_gray-100_02 flex flex-col h-full items-start justify-start m-auto p-[31px] sm:px-5 rounded-[50%] w-[200px]">
                        <Img
                          className="h-[120px] mb-[18px] md:ml-[0] ml-[25px]"
                          src="images/img_man.svg"
                          alt="man"
                        />
                      </div>
                      <Button
                        className="absolute bottom-[5%] flex h-10 inset-x-[0] items-center justify-center mx-auto shadow-bs1 w-10"
                        shape="circle"
                        color="white_A700"
                        size="xl"
                        variant="fill"
                      >
                        <Img src="images/img_music.svg" alt="music" />
                      </Button>
                    </div>
                    <Text
                      className="text-center text-sm text-white-A700"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      Elizabeth Julia
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[22px] items-center justify-start w-[36%] md:w-full">
                    <div className="border border-pink-400 border-solid md:h-[217px] h-[255px] p-4 relative rounded-[127px] w-[255px]">
                      <div className="bg-blue_gray-100_02 flex flex-col h-full items-center justify-start m-auto p-[30px] sm:px-5 rounded-[108px] w-[217px]">
                        <Img
                          className="h-[120px] mb-[37px]"
                          src="images/img_man.svg"
                          alt="man_One"
                        />
                      </div>
                      <Button
                        className="absolute bottom-[14%] flex h-10 inset-x-[0] items-center justify-center mx-auto w-10"
                        shape="circle"
                        color="pink_A400"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_user_white_a700.svg" alt="user" />
                      </Button>
                    </div>
                    <Text
                      className="text-center text-sm text-white-A700"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      Michael Simon
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start w-[28%] md:w-full">
                    <div className="h-[200px] relative w-[200px]">
                      <div className="bg-blue_gray-100_02 flex flex-col h-full items-center justify-start m-auto p-7 sm:px-5 rounded-[50%] w-[200px]">
                        <Img
                          className="h-[120px] mb-6"
                          src="images/img_man.svg"
                          alt="man_Two"
                        />
                      </div>
                      <Button
                        className="absolute bottom-[5%] flex h-10 items-center justify-center right-[37%] shadow-bs1 w-10"
                        shape="circle"
                        color="white_A700"
                        size="xl"
                        variant="fill"
                      >
                        <Img src="images/img_music.svg" alt="music_One" />
                      </Button>
                    </div>
                    <Text
                      className="text-center text-sm text-white-A700"
                      size="txtPoppinsRegular14WhiteA700"
                    >
                      Stewart Tim
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-poppins gap-[13px] items-center justify-start mt-14 w-[47%] md:w-full">
                <div className="md:h-[26px] h-[27px] relative w-full">
                  <div className="absolute bg-black-900_01 h-[26px] inset-x-[0] mx-auto top-[0] w-full"></div>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] mx-auto text-[17px] text-center text-white-A700 w-max"
                    size="txtPoppinsLight17"
                  >
                    Lorem Ipsum is simply dummy text of the printing
                  </Text>
                </div>
                <div className="h-[26px] relative w-[49%]">
                  <div className="absolute bg-black-900_01 h-[26px] inset-[0] justify-center m-auto w-full"></div>
                  <Text
                    className="absolute h-full inset-[0] justify-center m-auto text-[17px] text-center text-white-A700 w-max"
                    size="txtPoppinsLight17"
                  >
                    and typesetting industry
                  </Text>
                </div>
              </div>
              <div className="flex flex-row font-poppins sm:gap-10 items-start justify-between mt-[49px] w-[96%] md:w-full">
                <Text
                  className="text-center text-sm text-white-A700"
                  size="txtPoppinsRegular14WhiteA700"
                >
                  27 Jan 2023 10:15 AM
                </Text>
                <div className="flex flex-row gap-[9px] items-start justify-start">
                  <Img
                    className="h-[17px] w-4"
                    src="images/img_lock_white_a700.svg"
                    alt="lock"
                  />
                  <Text
                    className="text-center text-sm text-white-A700 underline"
                    size="txtPoppinsRegular14WhiteA700"
                  >
                    Invite Meeting URL
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex sm:flex-col flex-row font-inter sm:gap-10 items-center justify-between mt-2.5 p-3 rounded-bl-[10px] rounded-br-[10px] w-full">
                <Img
                  className="h-[35px] ml-1 sm:ml-[0]"
                  src="images/img_group22.svg"
                  alt="groupTwentyTwo"
                />
                <div className="flex flex-row gap-[9px] items-center justify-center mr-2">
                  <Text
                    className="bg-gray-900_03 border border-pink-A400 border-solid flex h-[35px] items-center justify-center rounded-[17px] text-center text-white-A700 text-xs w-[35px]"
                    size="txtInterRegular12"
                  >
                    CC
                  </Text>
                  <Button
                    className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                    color="blue_gray_100"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[17px]"
                      src="images/img_search_black_900.svg"
                      alt="search"
                    />
                  </Button>
                  <Button
                    className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                    color="blue_gray_100"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_user_black_900.svg" alt="user_One" />
                  </Button>
                  <Button
                    className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                    color="blue_gray_100"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_clock_black_900.svg" alt="clock" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col font-poppins gap-6 items-start justify-start w-[26%] md:w-full">
              <div className="flex flex-row gap-4 items-center justify-between w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[94px] outline outline-[0.5px] outline-blue_gray-100_03"
                  leftIcon={
                    <div className="mb-0.5 mr-[7px] w-[17px] bg-white-A700">
                      <Img
                        className="h-[18px]"
                        src="images/img_arrowleft_white_a700.svg"
                        alt="arrow_left"
                      />
                    </div>
                  }
                  shape="round"
                  color="indigo_800"
                  size="md"
                  variant="fill"
                >
                  <div className="leading-[normal] text-[13px] text-center">
                    Import
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[94px] outline outline-[0.5px] outline-blue_gray-100_03"
                  leftIcon={
                    <div className="mb-1 mr-[7px] w-[17px] bg-white-A700">
                      <Img
                        className="h-[18px]"
                        src="images/img_link.svg"
                        alt="link"
                      />
                    </div>
                  }
                  shape="round"
                  color="pink_400"
                  size="md"
                  variant="fill"
                >
                  <div className="leading-[normal] text-[13px] text-center">
                    Export
                  </div>
                </Button>
                <SelectBox
                  className="sm:flex-1 leading-[normal] outline outline-[0.5px] outline-blue_gray-100_03 text-[13px] text-center w-[34%] sm:w-full"
                  placeholderClassName="text-blue_gray-900_01"
                  indicator={
                    <Img
                      className="h-1.5 mr-[0] w-3"
                      src="images/img_arrowleft_blue_gray_900_01.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group16copyThree"
                  options={categoryOptionsList}
                  isSearchable={false}
                  placeholder="Category"
                  shape="round"
                  color="blue_gray_100_04"
                  size="xs"
                  variant="fill"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-[13px] rounded-[10px] w-full">
                    <div className="flex flex-col items-center justify-start mb-[9px] mt-[3px] w-full">
                      <Input
                        name="groupSixteen"
                        placeholder="Search Contact"
                        className="leading-[normal] p-0 placeholder:text-gray-500_05 text-left text-sm w-full"
                        wrapClassName="flex rounded-[5px] w-[99%]"
                        prefix={
                          <div className="h-4 mt-[3px] mb-px mr-[9px] w-4 bg-gray-500_05">
                            <Img
                              className="h-4 my-auto"
                              src="images/img_rewind.svg"
                              alt="rewind"
                            />
                          </div>
                        }
                        color="gray_100_02"
                        size="md"
                      ></Input>
                      <div className="flex flex-col items-center justify-start mt-[15px] w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row gap-9 items-center justify-between w-full">
                            <div className="flex flex-col relative w-[81%]">
                              <div className="flex flex-col items-center justify-start mx-auto w-full">
                                <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                                  <Img
                                    className="h-[45px]"
                                    src="images/img_settings_blue_gray_100_02.svg"
                                    alt="settings"
                                  />
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-[15px] text-black-900"
                                      size="txtPoppinsRegular15"
                                    >
                                      Jonathan
                                    </Text>
                                    <Text
                                      className="text-gray-500_05 text-xs"
                                      size="txtPoppinsLight12"
                                    >
                                      Lorem Ipsum is simply text..
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Text
                                className="mt-[-0.1px] mx-auto text-[10px] text-black-900 z-[1]"
                                size="txtPoppinsLight10"
                              >
                                Dec 12 2022 10:00AM
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[30px] items-start justify-start w-[6%]">
                              <div className="h-[15px] relative w-[15px]">
                                <div className="absolute bg-pink-A400 h-[15px] inset-[0] justify-center m-auto rounded-[7px] w-[15px]"></div>
                                <Text
                                  className="absolute h-full inset-y-[0] left-[33%] my-auto text-[10px] text-right text-white-A700"
                                  size="txtPoppinsRegular10"
                                >
                                  1
                                </Text>
                              </div>
                              <Img
                                className="h-[9px]"
                                src="images/img_maximize_deep_purple_a200.svg"
                                alt="maximize"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[9px] items-start justify-between mt-3.5 w-[99%] md:w-full">
                        <Img
                          className="h-11"
                          src="images/img_settings_blue_gray_100_02.svg"
                          alt="settings_One"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-col items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[15px] text-black-900"
                                size="txtPoppinsRegular15"
                              >
                                Elizabeth Jan
                              </Text>
                              <Text
                                className="text-gray-500_05 text-xs"
                                size="txtPoppinsLight12"
                              >
                                It is a long established fact{" "}
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-between mt-[3px] w-full">
                              <Text
                                className="text-[10px] text-black-900"
                                size="txtPoppinsLight10"
                              >
                                Dec 12 2022 10:40AM
                              </Text>
                              <Img
                                className="h-[9px] mt-[3px]"
                                src="images/img_checkmark_gray_500_05.svg"
                                alt="checkmark"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[9px] items-start justify-between mt-3.5 w-[99%] md:w-full">
                        <Img
                          className="h-[45px]"
                          src="images/img_close_blue_gray_100_02.svg"
                          alt="close"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[15px] text-black-900"
                                  size="txtPoppinsRegular15"
                                >
                                  Kevin
                                </Text>
                                <Text
                                  className="text-gray-500_05 text-xs"
                                  size="txtPoppinsLight12"
                                >
                                  Contrary to popular belief, Lor..
                                </Text>
                              </div>
                              <div className="h-[15px] md:h-[17px] mt-0.5 relative w-[15px]">
                                <div className="absolute bg-pink-A400 h-[15px] inset-[0] justify-center m-auto rounded-[7px] w-[15px]"></div>
                                <Text
                                  className="absolute h-full inset-[0] justify-center m-auto text-[10px] text-right text-white-A700 w-max"
                                  size="txtPoppinsRegular10"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-between mt-[3px] w-full">
                              <Text
                                className="text-[10px] text-black-900"
                                size="txtPoppinsLight10"
                              >
                                Dec 12 2022 01:00PM
                              </Text>
                              <Img
                                className="h-[9px] mt-[3px]"
                                src="images/img_maximize_deep_purple_a200.svg"
                                alt="maximize_One"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[9px] items-start justify-between mt-3.5 w-[99%] md:w-full">
                        <Img
                          className="h-[45px]"
                          src="images/img_close_blue_gray_100_02.svg"
                          alt="close_One"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-[15px] text-black-900"
                                  size="txtPoppinsRegular15"
                                >
                                  Michael Sean
                                </Text>
                                <Text
                                  className="text-gray-500_05 text-xs"
                                  size="txtPoppinsLight12"
                                >
                                  Great!!
                                </Text>
                              </div>
                              <div className="h-[15px] md:h-[17px] mt-0.5 relative w-[15px]">
                                <div className="absolute bg-pink-A400 h-[15px] inset-[0] justify-center m-auto rounded-[7px] w-[15px]"></div>
                                <Text
                                  className="absolute h-full inset-y-[0] left-[33%] my-auto text-[10px] text-right text-white-A700"
                                  size="txtPoppinsRegular10"
                                >
                                  1
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="text-[10px] text-black-900"
                                size="txtPoppinsLight10"
                              >
                                Dec 12 2022 01:46PM
                              </Text>
                              <Img
                                className="h-[9px] mt-[3px]"
                                src="images/img_maximize_deep_purple_a200.svg"
                                alt="maximize_Two"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between mt-5 w-[99%] md:w-full">
                        <Button
                          className="cursor-pointer leading-[normal] min-w-[125px] text-center text-sm"
                          shape="round"
                          color="deep_purple_A200"
                          size="xl"
                          variant="fill"
                        >
                          Meeting
                        </Button>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[46px] items-start justify-start p-3"
                          style={{
                            backgroundImage: "url('images/img_group181.svg')",
                          }}
                        >
                          <Text
                            className="md:ml-[0] ml-[13px] text-black-900 text-sm"
                            size="txtPoppinsRegular14Black900"
                          >
                            Schedule
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:h-[246px] h-[247px] relative w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group182.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between mb-[183px] w-[99%] md:w-full">
                        <Text
                          className="text-black-900 text-lg"
                          size="txtPoppinsMedium18"
                        >
                          Groups (5)
                        </Text>
                        <Text
                          className="text-black-900 text-lg text-right"
                          size="txtPoppinsMedium18"
                        >
                          +
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bottom-[9%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                      <div className="flex flex-row items-center justify-between w-[87%] md:w-full">
                        <div className="flex flex-row gap-[15px] items-start justify-start w-[66%]">
                          <Button
                            className="cursor-pointer h-[25px] leading-[normal] text-center text-xs w-[25px]"
                            shape="round"
                            color="deep_purple_100"
                            size="sm"
                            variant="fill"
                          >
                            A
                          </Button>
                          <Text
                            className="mt-[3px] text-black-900 text-sm"
                            size="txtPoppinsLight14"
                          >
                            App Development
                          </Text>
                        </div>
                        <div className="flex relative w-[15%]">
                          <div className="bg-gray-300_05 h-[25px] my-auto rounded-[12px] w-[25px]"></div>
                          <div className="flex flex-col h-[25px] items-center justify-start ml-[-12px] my-auto w-[25px] z-[1]">
                            <Text
                              className="bg-gray-300_05 flex h-[25px] items-center justify-center rounded-[12px] text-[10px] text-black-900 text-center w-[25px]"
                              size="txtPoppinsRegular10Black900"
                            >
                              +2
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-deep_purple-A200 flex flex-col items-center justify-start mt-[5px] p-[5px] w-full">
                        <div className="flex flex-row items-center justify-start w-[90%] md:w-full">
                          <div className="flex flex-row gap-[15px] items-center justify-start w-[54%]">
                            <Button
                              className="cursor-pointer h-[25px] leading-[normal] text-center text-xs w-[25px]"
                              shape="round"
                              color="yellow_100"
                              size="sm"
                              variant="fill"
                            >
                              D
                            </Button>
                            <Text
                              className="text-sm text-white-A700"
                              size="txtPoppinsLight14WhiteA700"
                            >
                              UI/UX Designs
                            </Text>
                          </div>
                          <Img
                            className="h-6 ml-9"
                            src="images/img_menu.svg"
                            alt="menu"
                          />
                          <div className="h-[25px] ml-[7px] relative w-[19%]">
                            <div className="absolute h-[25px] inset-y-[0] my-auto right-[0] w-3/4">
                              <div className="absolute bg-gray-300_05 h-[25px] inset-y-[0] my-auto right-[0] rounded-[12px] w-[25px]"></div>
                              <div className="absolute bg-gray-300_05 h-[25px] inset-y-[0] left-[0] my-auto rounded-[12px] w-[25px]"></div>
                            </div>
                            <div className="absolute bg-gray-300_05 h-[25px] inset-y-[0] left-[0] my-auto rounded-[12px] w-[25px]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start mt-[5px] w-[88%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[64%] md:w-full">
                          <div className="flex flex-row gap-[15px] items-start justify-start w-full">
                            <Text
                              className="bg-pink-50 flex h-[25px] items-center justify-center rounded-[5px] text-center text-pink-A400_01 text-xs w-[25px]"
                              size="txtPoppinsRegular12"
                            >
                              i
                            </Text>
                            <Text
                              className="mt-[3px] text-black-900 text-sm"
                              size="txtPoppinsLight14"
                            >
                              iSpring ABC Team
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-row gap-[15px] items-start justify-start w-[43%]">
                            <Button
                              className="cursor-pointer h-[25px] leading-[normal] text-center text-xs w-[25px]"
                              shape="round"
                              color="green_50"
                              size="sm"
                              variant="fill"
                            >
                              M
                            </Button>
                            <Text
                              className="mt-[3px] text-black-900 text-sm"
                              size="txtPoppinsLight14"
                            >
                              Marketing
                            </Text>
                          </div>
                          <div className="flex relative w-[15%]">
                            <div className="bg-gray-300_05 h-[25px] my-auto rounded-[12px] w-[25px]"></div>
                            <div className="flex flex-col h-[25px] items-center justify-start ml-[-12px] my-auto w-[25px] z-[1]">
                              <Text
                                className="bg-gray-300_05 flex h-[25px] items-center justify-center rounded-[12px] text-[10px] text-black-900 text-center w-[25px]"
                                size="txtPoppinsRegular10Black900"
                              >
                                +2
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
                          <div className="flex flex-row gap-[15px] items-start justify-start w-full">
                            <Button
                              className="cursor-pointer h-[25px] leading-[normal] text-center text-xs w-[25px]"
                              shape="round"
                              color="lime_100"
                              size="sm"
                              variant="fill"
                            >
                              A
                            </Button>
                            <Text
                              className="text-black-900 text-sm"
                              size="txtPoppinsLight14"
                            >
                              Accounts and Sales Team
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassOneLivePage;
