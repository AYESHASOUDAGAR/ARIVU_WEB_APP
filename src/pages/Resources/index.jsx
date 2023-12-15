import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const ResourcesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[137px] items-center justify-start mx-auto pb-[152px] w-full">
        <div className="h-[603px] md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start mb-[-2.49px] mx-auto w-full z-[1]">
            <div className="bg-white-A700 flex flex-col items-center justify-start py-[18px] w-full">
              <div className="flex flex-col items-center justify-start mb-[15px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[92%] md:w-full">
                  <Text
                    className="common-pointer text-black-900 text-xl"
                    size="txtInterSemiBold20Black900"
                    onClick={() => navigate("/dashboard")}
                  >
                    HOME
                  </Text>
                  <Img
                    className="h-[7px] md:ml-[0] ml-[13px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <Text
                    className="common-pointer md:ml-[0] ml-[1146px] text-black-900 text-xl"
                    size="txtInterSemiBold20Black900"
                    onClick={() => navigate("/profile")}
                  >
                    PROFILE
                  </Text>
                </div>
                <Line className="bg-gray-700_03 h-px mt-[9px] w-full" />
                <Img
                  className="h-[30px] mt-7 w-[30px]"
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
            <div className="absolute bg-gray-900_8c flex flex-col h-max inset-[0] items-center justify-center m-auto p-[137px] md:px-10 sm:px-5 w-full">
              <Text
                className="mb-[120px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                size="txtInterExtraBold50"
              >
                INFORMATIVE RESORSES
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1170px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[114px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-[18px] items-center justify-start mb-3 pt-[5px] shadow-bs3 w-[28%] md:w-full">
                <Img
                  className="h-[255px] md:h-auto object-cover w-full"
                  src="images/img_gstcam927201.png"
                  alt="gstcam927201"
                />
                <div
                  className="common-pointer bg-gray-100_02 flex flex-col items-center justify-start p-7 sm:px-5 shadow-bs2 w-full"
                  onClick={() => navigate("/scholarship")}
                >
                  <Text
                    className="mb-[5px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterBold40"
                  >
                    Scholarships
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-3 shadow-bs3 w-[28%] md:w-full">
                <Img
                  className="h-[278px] md:h-auto object-cover w-full"
                  src="images/img_508479pihx4q410.png"
                  alt="508479pihx4q410"
                />
                <div
                  className="common-pointer bg-gray-100_02 flex flex-col items-center justify-start p-[23px] sm:px-5 shadow-bs2 w-full"
                  onClick={() => navigate("/loansandgrants")}
                >
                  <Text
                    className="mb-3 mt-1 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterBold40"
                  >
                    Loans/Grants
                  </Text>
                </div>
              </div>
              <div className="md:h-[390px] h-[402px] relative w-[28%] md:w-full">
                <div className="absolute bg-white-A700 flex flex-col gap-[11px] h-max inset-[0] items-center justify-center m-auto pt-2.5 shadow-bs3 w-full">
                  <Img
                    className="h-[257px] md:h-auto object-cover w-[93%]"
                    src="images/img_growingpana1.png"
                    alt="growingpanaOne"
                  />
                  <div
                    className="common-pointer bg-gray-100_02 h-28 shadow-bs2 w-full"
                    onClick={() => navigate("/comingsoon")}
                  ></div>
                </div>
                <Text
                  className="absolute bottom-[0] right-[0] sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[92%] sm:w-full"
                  size="txtInterBold40"
                >
                  Career Opportunities
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-[17px] justify-end md:mt-0 mt-3.5 pt-5 shadow-bs3 w-[28%] md:w-full">
                <Img
                  className="h-[241px] md:ml-[0] ml-[42px] mr-[55px]"
                  src="images/img_newspana.svg"
                  alt="newspana"
                />
                <div className="bg-gray-100_02 flex flex-col items-center justify-start shadow-bs2 w-full">
                  <Text
                    className="common-pointer sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center w-full"
                    size="txtInterBold45Black900"
                    onClick={() => navigate("/comingsoon")}
                  >
                    Current Affairs
                  </Text>
                </div>
              </div>
              <div className="md:h-[389px] h-[404px] relative w-[28%] md:w-full">
                <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto pt-[278px] shadow-bs3 w-full">
                  <div
                    className="common-pointer bg-gray-100_02 flex flex-col items-center justify-start p-[29px] sm:px-5 shadow-bs2 w-full"
                    onClick={() => navigate("/comingsoon")}
                  >
                    <Text
                      className="mb-1 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                      size="txtInterBold40"
                    >
                      Events
                    </Text>
                  </div>
                </div>
                <Img
                  className="absolute h-[271px] right-[16%] top-[0]"
                  src="images/img_cancelledeventamico.svg"
                  alt="cancelledeventa"
                />
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-4 items-center justify-start md:mt-0 mt-3.5 shadow-bs3 w-[28%] md:w-full">
                <div className="md:h-[189px] h-[262px] relative w-[73%]">
                  <div className="absolute md:h-[189px] h-[262px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute bottom-[0] md:h-[189px] h-[248px] inset-x-[0] mx-auto w-full">
                      <Img
                        className="absolute bottom-[0] h-[189px] inset-x-[0] mx-auto"
                        src="images/img_device.svg"
                        alt="device"
                      />
                      <div className="absolute md:h-[159px] h-[177px] right-[5%] top-[0] w-[63%]">
                        <Img
                          className="absolute bottom-[0] h-[41px] left-[13%]"
                          src="images/img_settings_black_900_9x16.svg"
                          alt="settings"
                        />
                        <div className="absolute md:h-[159px] h-[171px] inset-[0] justify-center m-auto w-full">
                          <div className="absolute bottom-[0] md:h-[31px] h-[33px] left-[16%] w-[42%]">
                            <Img
                              className="absolute h-[31px] right-[0] top-[0]"
                              src="images/img_thumbsup_blue_gray_800.svg"
                              alt="thumbsup"
                            />
                            <Img
                              className="absolute bottom-[0] h-[31px] left-[0]"
                              src="images/img_thumbsup_blue_gray_700_31x57.svg"
                              alt="thumbsup_One"
                            />
                          </div>
                          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                            <div className="md:h-[159px] h-[164px] relative w-full">
                              <div className="absolute md:h-[159px] h-[164px] inset-y-[0] my-auto right-[0] w-[85%]">
                                <div className="absolute md:h-16 h-[117px] right-[0] top-[0] w-[58%]">
                                  <div className="md:h-16 h-[117px] m-auto w-full">
                                    <div className="absolute bottom-[0] md:h-16 h-[71px] left-[0] w-[78%]">
                                      <div
                                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-start justify-end left-[0] my-auto w-[88%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group328.svg')",
                                        }}
                                      >
                                        <Img
                                          className="h-[51px] mt-[13px]"
                                          src="images/img_user_blue_gray_700_51x33.svg"
                                          alt="user"
                                        />
                                      </div>
                                      <Img
                                        className="absolute bottom-[0] h-[30px] right-[20%]"
                                        src="images/img_mobile_blue_gray_800.svg"
                                        alt="mobile"
                                      />
                                      <Img
                                        className="absolute h-[21px] right-[0] top-[0]"
                                        src="images/img_settings_red_200_21x14.svg"
                                        alt="settings_One"
                                      />
                                    </div>
                                    <Img
                                      className="absolute h-[50px] right-[0] top-[0]"
                                      src="images/img_maximize_purple_300.svg"
                                      alt="maximize"
                                    />
                                  </div>
                                  <Img
                                    className="absolute h-4 right-[19%] top-[33%]"
                                    src="images/img_user_deep_orange_200_02_16x13.svg"
                                    alt="user_One"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[27px] right-[19%] top-[24%]"
                                  src="images/img_user_deep_orange_200_02_27x11.svg"
                                  alt="user_Two"
                                />
                                <Img
                                  className="absolute h-[159px] inset-y-[0] left-[0] my-auto"
                                  src="images/img_chest.svg"
                                  alt="chest"
                                />
                              </div>
                              <Img
                                className="absolute bottom-[12%] h-[76px] left-[0]"
                                src="images/img_play_blue_gray_700.svg"
                                alt="play"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[73px] left-[4%] top-[0]"
                      src="images/img_mobile_blue_gray_700.svg"
                      alt="mobile_One"
                    />
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-16 items-center justify-start left-[0] p-[15px] top-[1%] w-[47%]"
                    style={{
                      backgroundImage: "url('images/img_group327.svg')",
                    }}
                  >
                    <Img
                      className="h-[33px]"
                      src="images/img_thumbsup_blue_gray_900_33x60.svg"
                      alt="thumbsup_Two"
                    />
                  </div>
                </div>
                <div
                  className="common-pointer bg-gray-100_02 flex flex-col items-center justify-start p-7 sm:px-5 shadow-bs2 w-full"
                  onClick={() => navigate("/comingsoon")}
                >
                  <Text
                    className="sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
                    size="txtInterBold45Black900"
                  >
                    NEWS
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

export default ResourcesPage;
