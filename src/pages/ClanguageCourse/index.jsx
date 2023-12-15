import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const ClanguageCoursePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300_06 flex flex-col font-inter items-center justify-start mx-auto pb-[198px] w-full">
        <div className="flex flex-col gap-[41px] items-center justify-start w-full">
          <div className="h-[375px] md:px-5 relative w-full">
            <div className="flex flex-col items-center justify-start mb-[-1.49px] mx-auto w-full z-[1]">
              <div className="bg-white-A700 flex flex-col items-center justify-start py-4 w-full">
                <div className="flex flex-col justify-start mb-[18px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[63px] w-[94%] md:w-full">
                    <Text
                      className="common-pointer text-black-900 text-xl"
                      size="txtInterSemiBold20Black900"
                      onClick={() => navigate("/profile")}
                    >
                      HOME
                    </Text>
                    <Img
                      className="h-[7px] md:ml-[0] ml-[13px] md:mt-0 mt-[9px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                    <Text
                      className="common-pointer md:ml-[0] ml-[1180px] text-black-900 text-xl"
                      size="txtInterSemiBold20Black900"
                      onClick={() => navigate("/profile")}
                    >
                      PROFILE
                    </Text>
                  </div>
                  <Line className="bg-gray-700_03 h-px mt-2.5 w-full" />
                  <Img
                    className="common-pointer h-[30px] md:ml-[0] ml-[49px] mt-[27px] w-[30px]"
                    src="images/img_back.svg"
                    alt="back"
                    onClick={() => navigate(-1)}
                  />
                </div>
              </div>
              <Line className="bg-gray-700_03 h-px w-full" />
            </div>
            <div className="bg-blue-700 flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-auto mx-auto p-[30px] sm:px-5 w-full">
              <Text
                className="ml-5 sm:ml-[0] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                size="txtInterExtraBold50"
              >
                C Programming Language
              </Text>
              <Img
                className="h-[167px] md:h-auto mr-[74px] object-cover"
                src="images/img_cprogramminglanguage.png"
                alt="cprogramminglan_Two"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between max-w-[1350px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end py-[11px] rounded-[10px] shadow-bs6 w-[64%] md:w-full">
              <div className="flex flex-col justify-start mt-[30px] w-full">
                <Text
                  className="md:ml-[0] ml-[27px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900 w-[85%] sm:w-full"
                  size="txtInterSemiBold45"
                >
                  <span className="text-black-900 font-inter text-left font-semibold">
                    Learn basic C Programming Language
                  </span>
                  <span className="text-black-900 font-inter text-left font-bold">
                    {" "}
                  </span>
                  <span className="text-black-900 font-inter text-left font-semibold">
                    from start for beginner
                  </span>
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] ml-[37px] mt-[51px] w-[74%] md:w-full">
                  <Button
                    className="flex h-[50px] items-center justify-center mb-[5px] rounded-[50%] w-[50px]"
                    shape="circle"
                    color="blue_gray_100"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-10"
                      src="images/img_person_black_900.svg"
                      alt="person"
                    />
                  </Button>
                  <Text
                    className="md:ml-[0] ml-[34px] md:mt-0 mt-[7px] text-black-900 text-xl"
                    size="txtInterBold20"
                  >
                    <span className="text-gray-400_01 font-inter text-left text-lg font-bold">
                      <>
                        Teacher
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-inter text-left font-medium">
                      Indrajit Bandgar{" "}
                    </span>
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[15px] md:mt-0 mt-[7px] text-purple-500_01 text-xl"
                    size="txtInterBold20Purple50001"
                  >
                    <span className="text-gray-400_02 font-inter text-left text-lg font-bold">
                      <>
                        Category
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-inter text-left font-semibold">
                      Programming
                    </span>
                  </Text>
                  <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[37px] md:mt-0 mt-2 w-[19%] md:w-full">
                    <Text
                      className="text-[17px] text-gray-400_02"
                      size="txtInterSemiBold17"
                    >
                      Review
                    </Text>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Img
                        className="h-[15px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Img
                        className="h-[15px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_One"
                      />
                      <Img
                        className="h-[15px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Two"
                      />
                      <Img
                        className="h-[15px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Three"
                      />
                      <Img
                        className="h-[15px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Four"
                      />
                      <Text
                        className="text-black-900 text-xs"
                        size="txtInterMedium12"
                      >
                        5.0
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start mt-[41px] w-full">
                  <div className="bg-white-A700 border-[30px] border-gray-300 border-solid flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[690px] md:h-auto object-cover w-full"
                      src="images/img_teacherstudentrafiki.png"
                      alt="teacherstudentr"
                    />
                  </div>
                  <div className="bg-white-A700 border border-black-900_4c border-solid flex flex-col items-center justify-start pb-[30px] sm:pl-5 pl-[30px] w-full">
                    <div className="flex flex-col gap-[33px] items-center justify-start mb-[73px] w-full">
                      <div className="flex md:flex-col flex-row md:gap-[43px] items-center justify-between w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                          size="txtInterMedium28"
                        >
                          Overview
                        </Text>
                        <div className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[18px]">
                          <Text
                            className="ml-2 sm:ml-[0] sm:mt-0 my-0.5 sm:text-2xl md:text-[26px] text-[28px] text-gray-700_01"
                            size="txtInterMedium28Gray70001"
                          >
                            Curriculam
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[67px] sm:mt-0 my-0.5 sm:text-2xl md:text-[26px] text-[28px] text-gray-700_01"
                            size="txtInterMedium28Gray70001"
                          >
                            Instructor
                          </Text>
                          <Text
                            className="mb-[3px] sm:ml-[0] ml-[89px] sm:text-2xl md:text-[26px] text-[28px] text-gray-700_01"
                            size="txtInterMedium28Gray70001"
                          >
                            Review
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtInterLight25"
                      >
                        <span className="text-black-900 font-inter text-left font-semibold">
                          <>
                            Course Summery
                            <br />
                          </>
                        </span>
                        <span className="text-black-900 font-inter text-left font-light">
                          <>
                            <br />
                          </>
                        </span>
                        <span className="text-gray-700_01 font-inter text-left font-light">
                          Lorem ipsum gravida nibh vel velit auctor aliquetn
                          sollicitudirem quibibendum auci elit cons equat
                          ipsutis sem nibh id elit. Duis sed odio sit amet nibh
                          vulputate cursus a sit amet mauris. Morbi accumsan
                          ipsum velit. Nam nec tellus .
                        </span>
                      </Text>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                        size="txtInterLight25"
                      >
                        <span className="text-black-900 font-inter text-left font-semibold">
                          <>
                            Requirements
                            <br />
                          </>
                        </span>
                        <span className="text-black-900 font-inter text-left font-light">
                          <>
                            <br />
                          </>
                        </span>
                        <span className="text-gray-700_01 font-inter text-left font-light">
                          Lorem ipsum gravida nibh vel velit auctor aliquetn
                          sollicitudirem quibibendum auci elit cons equat
                          ipsutis sem nibh id elit. Duis sed odio sit amet nibh
                          vulputate cursus a sit amet mauris. Morbi accumsan
                          ipsum velit. Nam nec tellus .
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[43px] items-center justify-start w-[33%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-[10px] shadow-bs8 w-full">
                <div className="flex flex-col gap-[35px] justify-start mb-3.5 mt-2 w-full">
                  <Text
                    className="md:ml-[0] ml-[11px] sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900"
                    size="txtInterBold40Bluegray900"
                  >
                    Course Features
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row items-start justify-start w-[92%] md:w-full">
                      <Img
                        className="h-6 mt-1 w-6"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="ml-4 sm:text-[21px] md:text-[23px] text-[25px] text-gray-700_01"
                        size="txtInterMedium25"
                      >
                        Duration :
                      </Text>
                      <Text
                        className="ml-[111px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-700"
                        size="txtInterMedium25Gray700"
                      >
                        10Hours
                      </Text>
                    </div>
                    <Line className="bg-black-900 h-px md:ml-[0] ml-[23px] mt-2 w-[88%]" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[43px] w-[94%] md:w-full">
                      <Img
                        className="h-6 sm:mt-0 mt-1.5 w-6"
                        src="images/img_television_gray_900_01.svg"
                        alt="television"
                      />
                      <Text
                        className="ml-4 sm:ml-[0] sm:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-gray-700_01"
                        size="txtInterMedium25"
                      >
                        Lectures :
                      </Text>
                      <Text
                        className="mb-0.5 sm:ml-[0] ml-[183px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-700 text-right"
                        size="txtInterMedium25Gray700"
                      >
                        09
                      </Text>
                    </div>
                    <Line className="bg-black-900 h-px ml-6 md:ml-[0] mt-[5px] w-[88%]" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[43px] w-[94%] md:w-full">
                      <Img
                        className="h-6 sm:mt-0 mt-[3px] w-6"
                        src="images/img_profile.svg"
                        alt="profile_One"
                      />
                      <Text
                        className="mb-0.5 ml-4 sm:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-gray-700_01"
                        size="txtInterMedium25"
                      >
                        Quizzes :
                      </Text>
                      <Text
                        className="h-[31px] sm:ml-[0] ml-[193px] sm:mt-0 mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-gray-700 text-right"
                        size="txtInterMedium25Gray700"
                      >
                        05
                      </Text>
                    </div>
                    <Line className="bg-black-900 h-px ml-6 md:ml-[0] mt-0.5 w-[88%]" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[30px] w-[94%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_group.svg"
                        alt="group"
                      />
                      <Text
                        className="ml-4 sm:ml-[0] sm:text-[21px] md:text-[23px] text-[25px] text-gray-700_01"
                        size="txtInterMedium25"
                      >
                        Students :
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[168px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-700 text-right"
                        size="txtInterMedium25Gray700"
                      >
                        100
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[77px] items-center justify-end md:ml-[0] ml-[27px] mt-[74px] w-[94%] md:w-full">
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-700_01"
                        size="txtInterMedium25"
                      >
                        Price : FREE
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold leading-[normal] min-w-[140px] text-center text-xl"
                        shape="round"
                        color="amber_300"
                        size="xl"
                        variant="fill"
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-[38px] justify-center p-[23px] sm:px-5 rounded-[10px] shadow-bs w-full">
                <Text
                  className="ml-2.5 md:ml-[0] mr-[154px] mt-[18px] sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-700"
                  size="txtInterBold35"
                >
                  You make like
                </Text>
                <List
                  className="flex flex-col gap-[47px] items-center mb-[105px] md:ml-[0] ml-[17px] w-[96%]"
                  orientation="vertical"
                >
                  <div className="h-[172px] relative w-full">
                    <Img
                      className="h-[172px] m-auto object-cover w-full"
                      src="images/img_1501659035.png"
                      alt="1501659035"
                    />
                    <div className="absolute bg-black-900_99 flex flex-col h-full inset-[0] items-start justify-center m-auto p-6 sm:px-5 w-full">
                      <div className="flex flex-col gap-7 justify-start mb-[11px] mt-[25px] w-[81%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[57px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtInterExtraBold28WhiteA700"
                        >
                          Graphic Design
                        </Text>
                        <div className="flex flex-row items-center justify-start w-[48%] md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_lock_white_a700_24x24.svg"
                            alt="lock"
                          />
                          <Text
                            className="ml-[11px] text-white-A700 text-xl"
                            size="txtInterRegular20"
                          >
                            50
                          </Text>
                          <Text
                            className="ml-[19px] text-amber-500 text-xl"
                            size="txtInterSemiBold20Amber500"
                          >
                            FREE
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[172px] relative w-full">
                    <Img
                      className="h-[172px] m-auto object-cover w-full"
                      src="images/img_1501659035.png"
                      alt="1501659036"
                    />
                    <div className="absolute bg-black-900_99 flex flex-col h-full inset-[0] items-start justify-center m-auto p-6 sm:px-5 w-full">
                      <div className="flex flex-col gap-[43px] justify-start my-[9px] w-[92%] md:w-full">
                        <Text
                          className="ml-10 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtInterExtraBold28WhiteA700"
                        >
                          MICROSOFT Office
                        </Text>
                        <div className="flex flex-row items-start justify-start w-[43%] md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_lock_white_a700_24x24.svg"
                            alt="lock"
                          />
                          <Text
                            className="ml-[11px] text-white-A700 text-xl"
                            size="txtInterRegular20"
                          >
                            50
                          </Text>
                          <Text
                            className="ml-[19px] text-amber-500 text-xl"
                            size="txtInterSemiBold20Amber500"
                          >
                            FREE
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[172px] relative w-full">
                    <Img
                      className="h-[172px] m-auto object-cover w-full"
                      src="images/img_1501659035.png"
                      alt="1501659037"
                    />
                    <div className="absolute bg-black-900_99 flex flex-col h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 w-full">
                      <div className="flex flex-col gap-[47px] justify-start my-2 w-[99%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[11px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                          size="txtInterBold28WhiteA700"
                        >
                          HTML & CSS Bootcamp
                        </Text>
                        <div className="flex flex-row items-center justify-start w-[38%] md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_lock_white_a700_24x24.svg"
                            alt="lock"
                          />
                          <Text
                            className="ml-1.5 text-white-A700 text-xl"
                            size="txtInterRegular20"
                          >
                            50
                          </Text>
                          <Text
                            className="ml-[19px] text-amber-500 text-xl"
                            size="txtInterSemiBold20Amber500"
                          >
                            FREE
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClanguageCoursePage;
