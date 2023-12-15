import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, List, Text } from "components";

const LibraryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[494px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start py-3.5 w-full">
            <div className="flex flex-col justify-start mb-[19px] w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start max-w-[1339px] mx-auto md:px-5 w-full">
                <Text
                  className="common-pointer sm:mt-0 mt-0.5 text-black-900 text-xl"
                  size="txtInterSemiBold20Black900"
                  onClick={() => navigate("/dashboard")}
                >
                  HOME
                </Text>
                <Img
                  className="h-[7px] sm:ml-[0] ml-[13px] sm:mt-0 mt-[11px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
                <Text
                  className="mb-0.5 sm:ml-[0] ml-[1173px] text-black-900 text-xl"
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
        <div className="h-[346px] md:px-5 relative w-full">
          <Img
            className="h-[346px] m-auto object-cover w-full"
            src="images/img_image1.png"
            alt="imageOne"
          />
          <div className="absolute bg-gray-900_8c flex flex-col h-full inset-[0] items-center justify-center m-auto p-[135px] md:px-10 sm:px-5 w-full">
            <Text
              className="mb-3.5 sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
              size="txtInterExtraBold50"
            >
              LIBRARY
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between max-w-[1335px] mt-24 mx-auto md:px-5 w-full">
          <div className="md:h-[349px] h-[404px] relative w-[27%] md:w-full">
            <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[29px] inset-x-[0] items-center justify-start mx-auto pb-[35px] rounded-br-[30px] rounded-tl-[30px] shadow-bs6 w-full">
              <div className="bg-amber-500 h-[230px] rounded-br-[130px] rounded-tl-[30px] shadow-bs w-full"></div>
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                size="txtInterSemiBold45"
              >
                Books
              </Text>
            </div>
            <div className="absolute md:h-[142px] h-[257px] inset-x-[0] mx-auto top-[0] w-[81%]">
              <div className="absolute md:h-[142px] h-[257px] inset-y-[0] my-auto right-[0] w-[95%]">
                <Img
                  className="absolute bottom-[0] h-[142px] inset-x-[0] mx-auto"
                  src="images/img_shadows_gray_300.svg"
                  alt="shadows"
                />
                <Img
                  className="absolute h-[124px] right-[2%] top-[23%]"
                  src="images/img_books.svg"
                  alt="books_One"
                />
                <Img
                  className="absolute h-[67px] left-[39%] top-[0]"
                  src="images/img_user_red_300.svg"
                  alt="user"
                />
              </div>
              <div className="absolute bottom-[2%] flex flex-col items-center justify-start left-[0] w-[71%]">
                <div className="md:h-[126px] h-[193px] relative w-full">
                  <div className="md:h-[126px] h-[193px] m-auto w-full">
                    <div className="md:h-[126px] h-[193px] m-auto w-full">
                      <div className="md:h-[126px] h-[193px] m-auto w-full">
                        <div className="md:h-[126px] h-[193px] m-auto w-full">
                          <div className="md:h-[126px] h-[193px] m-auto w-full">
                            <div className="absolute md:h-[126px] h-[193px] inset-[0] justify-center m-auto w-full">
                              <div className="md:h-[126px] h-[193px] m-auto w-full">
                                <div className="md:h-[126px] h-[193px] m-auto w-full">
                                  <div className="md:h-[126px] h-[193px] m-auto w-full">
                                    <div className="md:h-[126px] h-[193px] m-auto w-full">
                                      <div className="md:h-[126px] h-[193px] m-auto w-full">
                                        <div className="absolute md:h-[126px] h-[189px] inset-[0] justify-center m-auto w-full">
                                          <div className="absolute bottom-[0] md:h-[126px] h-[172px] right-[0] w-[89%]">
                                            <div className="absolute md:h-[126px] h-[172px] inset-[0] justify-center m-auto w-[172px]">
                                              <div className="absolute flex flex-col gap-[35px] h-full inset-[0] justify-center m-auto w-[98%]">
                                                <Img
                                                  className="h-[21px]"
                                                  src="images/img_user_blue_gray_700.svg"
                                                  alt="user_One"
                                                />
                                                <div className="h-[115px] md:h-[70px] md:ml-[0] ml-[85px] relative w-1/2">
                                                  <Img
                                                    className="absolute h-[70px] inset-x-[0] mx-auto top-[0]"
                                                    src="images/img_settings_deep_orange_200_02.svg"
                                                    alt="settings"
                                                  />
                                                  <Img
                                                    className="absolute h-[43px] left-[16%] top-[0]"
                                                    src="images/img_user_red_300_43x28.svg"
                                                    alt="user_Two"
                                                  />
                                                  <div
                                                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[60px] inset-x-[0] items-end justify-start mx-auto p-1.5 w-full"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group373.svg')",
                                                    }}
                                                  >
                                                    <Img
                                                      className="h-[13px] mb-[33px]"
                                                      src="images/img_settings_deep_orange_200_02_13x7.svg"
                                                      alt="settings_One"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <Img
                                                className="absolute h-[17px] left-[0] top-[1%]"
                                                src="images/img_user_blue_gray_800_17x8.svg"
                                                alt="user_Three"
                                              />
                                            </div>
                                            <Img
                                              className="absolute h-3.5 left-[0] top-[6%] w-[15px]"
                                              src="images/img_vector_deep_orange_200_02.svg"
                                              alt="vector"
                                            />
                                          </div>
                                          <Img
                                            className="absolute h-[33px] left-[0] top-[0]"
                                            src="images/img_close_blue_gray_700.svg"
                                            alt="close"
                                          />
                                        </div>
                                        <Img
                                          className="absolute h-[25px] left-[0] top-[0]"
                                          src="images/img_user_blue_gray_800_25x38.svg"
                                          alt="user_Four"
                                        />
                                        <div
                                          className="absolute bg-cover bg-no-repeat flex flex-col h-[98px] items-center justify-start left-[12%] top-[19%] w-[42%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group372.svg')",
                                          }}
                                        >
                                          <div
                                            className="bg-cover bg-no-repeat flex flex-col h-[98px] items-start justify-start w-full"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group376.svg')",
                                            }}
                                          >
                                            <Img
                                              className="h-[11px] mb-[84px] md:ml-[0] ml-[11px] w-3"
                                              src="images/img_user_deep_orange_200_02.svg"
                                              alt="user_Five"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-center justify-start left-[11%] my-auto w-[34%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group371.svg')",
                                        }}
                                      >
                                        <div
                                          className="bg-cover bg-no-repeat flex flex-col h-[103px] items-start justify-start p-[11px] w-full"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group377.svg')",
                                          }}
                                        >
                                          <Img
                                            className="h-2.5 mb-[33px] mt-9"
                                            src="images/img_settings_black_900.svg"
                                            alt="settings_Two"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <Img
                                      className="absolute bottom-[20%] h-[77px] right-1/4 w-[76px]"
                                      src="images/img_contrast.svg"
                                      alt="contrast"
                                    />
                                  </div>
                                  <Img
                                    className="absolute h-[47px] right-[15%] top-[17%]"
                                    src="images/img_play_blue_gray_900.svg"
                                    alt="play"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[21px] right-[29%] top-[38%]"
                                  src="images/img_user_deep_orange_200_02_21x17.svg"
                                  alt="user_Six"
                                />
                              </div>
                              <Img
                                className="absolute h-2.5 right-[34%] top-[34%]"
                                src="images/img_contrast_blue_gray_900.svg"
                                alt="contrast_One"
                              />
                            </div>
                            <Img
                              className="absolute h-[18px] right-[36%] top-[24%]"
                              src="images/img_contrast_blue_gray_900.svg"
                              alt="contrast_Two"
                            />
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-12 items-end justify-end p-1.5 right-[19%] top-[21%] w-1/5"
                              style={{
                                backgroundImage:
                                  "url('images/img_group374.svg')",
                              }}
                            >
                              <div className="flex flex-col gap-[9px] items-start justify-start mr-[5px] mt-[19px] w-[15%] md:w-full">
                                <Img
                                  className="h-[3px] w-[3px]"
                                  src="images/img_vector_blue_gray_900_3x3.svg"
                                  alt="vector_One"
                                />
                                <Img
                                  className="h-[3px] w-[3px]"
                                  src="images/img_vector_red_200.svg"
                                  alt="vector_Two"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-[35px] items-end justify-end p-[3px] right-[16%] top-[17%] w-1/5"
                            style={{
                              backgroundImage: "url('images/img_group375.svg')",
                            }}
                          >
                            <div className="flex flex-row gap-[11px] items-start justify-end mr-0.5 mt-6 w-1/2 md:w-full">
                              <Img
                                className="h-0.5 w-[3px]"
                                src="images/img_vector_blue_gray_900_2x3.svg"
                                alt="vector_Three"
                              />
                              <Img
                                className="h-[3px] w-[3px]"
                                src="images/img_vector_blue_gray_900_2x3.svg"
                                alt="vector_Four"
                              />
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute h-[5px] right-[36%] top-[22%] w-[5px]"
                          src="images/img_vector_blue_gray_900_2x3.svg"
                          alt="vector_Five"
                        />
                        <Img
                          className="absolute h-3 right-[29%] top-[40%]"
                          src="images/img_settings_red_200.svg"
                          alt="settings_Three"
                        />
                      </div>
                      <Img
                        className="absolute h-[3px] right-[20%] top-[34%] w-[3px]"
                        src="images/img_vector_blue_gray_900_3x3.svg"
                        alt="vector_Six"
                      />
                    </div>
                    <Img
                      className="absolute h-2.5 right-[22%] top-[35%]"
                      src="images/img_vector_red_200_10x5.svg"
                      alt="vector_Seven"
                    />
                    <Img
                      className="absolute bottom-[0] h-[105px] right-[26%]"
                      src="images/img_vector_deep_orange_200_02_105x60.svg"
                      alt="vector_Eight"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[29%] h-[52px] inset-x-[0] mx-auto"
                    src="images/img_user_red_300_52x27.svg"
                    alt="user_Seven"
                  />
                </div>
              </div>
            </div>
          </div>
          <List
            className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[135px] grid md:grid-cols-1 grid-cols-2 md:mt-0 mt-[21px] w-[64%] md:w-full"
            orientation="horizontal"
          >
            <div className="md:h-[349px] h-[379px] relative w-full">
              <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[26px] inset-x-[0] items-center justify-start mx-auto pb-[38px] rounded-br-[30px] rounded-tl-[30px] shadow-bs6 w-full">
                <div className="bg-amber-500 h-[230px] rounded-br-[130px] rounded-tl-[30px] shadow-bs w-full"></div>
                <Text
                  className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                  size="txtInterSemiBold45"
                >
                  AudioBooks
                </Text>
              </div>
              <Img
                className="absolute h-[250px] left-[13%] top-[0]"
                src="images/img_audiobookamico.svg"
                alt="audiobookamico"
              />
            </div>
            <div className="md:h-[349px] h-[383px] relative w-full">
              <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[26px] inset-x-[0] items-center justify-start mx-auto pb-[38px] rounded-br-[30px] rounded-tl-[30px] shadow-bs6 w-full">
                <div className="bg-amber-500 h-[230px] rounded-br-[130px] rounded-tl-[30px] shadow-bs w-full"></div>
                <Text
                  className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                  size="txtInterSemiBold45"
                >
                  Videos
                </Text>
              </div>
              <Img
                className="absolute h-[250px] inset-x-[0] mx-auto top-[0]"
                src="images/img_videofilesamico.svg"
                alt="videofilesamico"
              />
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default LibraryPage;
