import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SelectBox, Text } from "components";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ClassesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[118px] w-full">
        <div className="h-[444px] md:px-5 relative w-full">
          <Img
            className="h-[444px] m-auto object-cover w-full"
            src="images/img_screenshot20231209.png"
            alt="screenshot20231"
          />
          <div className="absolute bg-indigo-900_99 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[110px] md:px-10 sm:px-5 w-full">
            <Text
              className="mb-[26px] text-5xl sm:text-[38px] md:text-[44px] text-center text-red-50"
              size="txtInterBold48Red50"
            >
              Academic Education
            </Text>
          </div>
          <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto pt-4 top-[0] w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between w-[93%] md:w-full">
                <SelectBox
                  className="common-pointer font-semibold leading-[normal] mb-[3px] text-black-900 text-left text-xl w-[7%] sm:w-full"
                  placeholderClassName="text-black-900"
                  indicator={
                    <Img
                      className="h-1.5 mr-[0] w-[9px]"
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group409"
                  options={homeOptionsList}
                  isSearchable={false}
                  placeholder="HOME"
                  onClick={() => navigate("/dashboard")}
                />
                <Text
                  className="common-pointer mt-[3px] text-black-900 text-xl"
                  size="txtInterSemiBold20Black900"
                  onClick={() => navigate("/profile")}
                >
                  PROFILE
                </Text>
              </div>
              <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                <Line className="bg-gray-700_03 h-px w-full" />
                <Img
                  className="common-pointer h-[30px] md:ml-[0] ml-[49px] w-[30px]"
                  src="images/img_back.svg"
                  alt="back"
                  onClick={() => navigate(-1)}
                />
                <Line className="bg-gray-700_03 h-px w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-[47px] md:px-10 sm:px-5 px-[97px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[1.80px]"
            size="txtInterBold36"
          >
            <span className="text-black-900 font-inter text-left font-bold">
              Select{" "}
            </span>
            <span className="text-black-900 font-inter text-left font-medium">
              Your Class
            </span>
          </Text>
        </div>
        <div className="md:h-[1727px] sm:h-[1865px] h-[853px] max-w-[1178px] mt-[53px] mx-auto md:px-5 relative shadow-bs7 w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between w-full">
                <div className="bg-red-50 flex md:flex-1 flex-col items-center justify-end outline outline-[1px] outline-black-900 pl-3 pt-3 w-[31%] md:w-full">
                  <div className="flex flex-row gap-[33px] items-start justify-between w-full">
                    <div className="flex flex-col gap-[47px] items-center justify-start mb-[17px]">
                      <Text
                        className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center"
                        size="txtInterSemiBold42"
                      >
                        Class I
                      </Text>
                      <Button
                        className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[130px] text-[19px] text-center"
                        onClick={() => navigate("/classsubject")}
                        shape="round"
                        color="blue_A200"
                        size="md"
                        variant="fill"
                      >
                        Explore →
                      </Button>
                    </div>
                    <div className="bg-blue-A200 h-[115px] mt-10 rounded-tl-[50px] shadow-bs2 w-[52%]"></div>
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[49px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-red-50 flex flex-col items-center justify-end sm:ml-[0] outline outline-[1px] outline-black-900 pl-2.5 pt-2.5 w-full">
                    <div className="flex flex-row gap-[21px] items-start justify-between w-full">
                      <div className="flex flex-col gap-[51px] items-center justify-start mb-[17px]">
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center"
                          size="txtInterSemiBold42"
                        >
                          Class II
                        </Text>
                        <div className="bg-purple-500 flex flex-col items-center justify-end p-1.5 rounded-[5px]">
                          <Text
                            className="mt-1 text-[19px] text-white-A700"
                            size="txtInterMedium19"
                          >
                            Explore →
                          </Text>
                        </div>
                      </div>
                      <div className="bg-pink-500_01 h-[115px] mt-11 rounded-tl-[50px] shadow-bs2 w-[52%]"></div>
                    </div>
                  </div>
                  <div className="bg-red-50 flex flex-col items-end justify-end sm:ml-[0] outline outline-[1px] outline-black-900 pl-3.5 pt-3.5 w-full">
                    <div className="flex flex-row items-start justify-end w-[98%] md:w-full">
                      <div className="flex flex-col gap-[47px] items-start justify-start mb-[17px] w-[47%]">
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center"
                          size="txtInterSemiBold42"
                        >
                          Class III
                        </Text>
                        <div className="bg-amber-500 flex flex-col items-center justify-end p-1.5 rounded-[5px]">
                          <Text
                            className="mt-1 text-[19px] text-white-A700"
                            size="txtInterMedium19"
                          >
                            Explore →
                          </Text>
                        </div>
                      </div>
                      <div className="bg-amber-500 h-[115px] mt-10 rounded-tl-[50px] shadow-bs2 w-[54%]"></div>
                    </div>
                  </div>
                </List>
              </div>
              <List
                className="flex flex-col gap-[43px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex-1 gap-[49px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                  <div className="bg-red-50 md:h-[115px] h-[170px] outline outline-[1px] outline-black-900 pl-[11px] pt-[11px] relative w-full">
                    <div className="absolute bg-blue-A200 bottom-[0] h-[115px] right-[0] rounded-tl-[50px] shadow-bs2 w-1/2"></div>
                    <Button
                      className="absolute bottom-[10%] cursor-pointer font-medium leading-[normal] left-[4%] min-w-[130px] text-[19px] text-center"
                      shape="round"
                      color="blue_A200"
                      size="md"
                      variant="fill"
                    >
                      Explore →
                    </Button>
                    <Text
                      className="absolute left-[4%] sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center top-[6%]"
                      size="txtInterSemiBold42"
                    >
                      Class IV
                    </Text>
                  </div>
                  <div className="bg-red-50 flex flex-1 flex-col items-center justify-end outline outline-[1px] outline-black-900 pl-[11px] pt-[11px] w-full">
                    <div className="flex flex-row gap-[11px] items-start justify-between w-full">
                      <div className="flex flex-col gap-[50px] justify-start mb-[17px]">
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center"
                          size="txtInterSemiBold42"
                        >
                          Class V
                        </Text>
                        <div className="bg-purple-500 flex flex-col items-center justify-end md:ml-[0] ml-[5px] mr-5 p-1.5 rounded-[5px]">
                          <Text
                            className="mt-1 text-[19px] text-white-A700"
                            size="txtInterMedium19"
                          >
                            Explore →
                          </Text>
                        </div>
                      </div>
                      <div className="bg-pink-500_02 h-[115px] mt-[43px] rounded-tl-[50px] shadow-bs2 w-[53%]"></div>
                    </div>
                  </div>
                  <div className="bg-red-50 md:h-[115px] h-[170px] outline outline-[1px] outline-black-900 pl-[11px] pt-[11px] relative w-full">
                    <div className="absolute bg-amber-500 bottom-[0] h-[115px] right-[0] rounded-tl-[50px] shadow-bs2 w-1/2"></div>
                    <div className="absolute bg-amber-500 bottom-[10%] flex flex-col items-center justify-end left-[6%] p-1.5 rounded-[5px]">
                      <Text
                        className="mt-1 text-[19px] text-white-A700"
                        size="txtInterMedium19"
                      >
                        Explore →
                      </Text>
                    </div>
                    <Text
                      className="absolute left-[5%] sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center top-[6%]"
                      size="txtInterSemiBold42"
                    >
                      Class VI
                    </Text>
                  </div>
                </div>
                <div className="flex-1 gap-[49px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                  <div className="bg-red-50 md:h-[115px] h-[170px] outline outline-[1px] outline-black-900 pl-[11px] pt-[11px] relative w-full">
                    <div className="absolute bg-blue-A200 bottom-[0] h-[115px] right-[0] rounded-tl-[50px] shadow-bs2 w-1/2"></div>
                    <Button
                      className="absolute bottom-[10%] cursor-pointer font-medium leading-[normal] left-[4%] min-w-[130px] text-[19px] text-center"
                      shape="round"
                      color="blue_A200"
                      size="md"
                      variant="fill"
                    >
                      Explore →
                    </Button>
                    <Text
                      className="absolute left-[4%] sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center top-[6%]"
                      size="txtInterSemiBold42"
                    >
                      Class VII
                    </Text>
                  </div>
                  <div className="bg-red-50 md:h-[115px] h-[170px] outline outline-[1px] outline-black-900 pl-[11px] pt-[11px] relative w-full">
                    <div className="absolute bg-pink-500_02 bottom-[0] h-[115px] right-[0] rounded-tl-[50px] shadow-bs2 w-1/2"></div>
                    <div className="absolute bg-purple-500 bottom-[10%] flex flex-col items-center justify-end left-[5%] p-1.5 rounded-[5px]">
                      <Text
                        className="mt-1 text-[19px] text-white-A700"
                        size="txtInterMedium19"
                      >
                        Explore →
                      </Text>
                    </div>
                    <Text
                      className="absolute left-[6%] sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center top-[6%]"
                      size="txtInterSemiBold42"
                    >
                      Class VIII
                    </Text>
                  </div>
                  <div className="bg-red-50 md:h-[115px] h-[170px] outline outline-[1px] outline-black-900 pl-[11px] pt-[11px] relative w-full">
                    <div className="absolute bg-amber-500 bottom-[0] h-[115px] right-[0] rounded-tl-[50px] shadow-bs2 w-1/2"></div>
                    <div className="absolute bg-amber-500 bottom-[10%] flex flex-col items-center justify-end left-[6%] p-1.5 rounded-[5px]">
                      <Text
                        className="mt-1 text-[19px] text-white-A700"
                        size="txtInterMedium19"
                      >
                        Explore →
                      </Text>
                    </div>
                    <Text
                      className="absolute left-[5%] sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center top-[6%]"
                      size="txtInterSemiBold42"
                    >
                      Class IX
                    </Text>
                  </div>
                </div>
                <div className="flex-1 gap-[49px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                  <div className="bg-red-50 flex flex-1 flex-col items-end justify-end outline outline-[1px] outline-black-900 pl-3.5 pt-3.5 w-full">
                    <div className="flex flex-row gap-1.5 items-start justify-end w-full">
                      <div className="flex flex-col gap-[47px] items-start justify-start mb-[17px] w-[46%]">
                        <Text
                          className="md:ml-[0] ml-[3px] sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center"
                          size="txtInterSemiBold42"
                        >
                          Class X
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[130px] text-[19px] text-center"
                          shape="round"
                          color="blue_A200"
                          size="md"
                          variant="fill"
                        >
                          Explore →
                        </Button>
                      </div>
                      <div className="bg-blue-A200_01 h-[115px] mt-10 rounded-tl-[50px] shadow-bs2 w-[53%]"></div>
                    </div>
                  </div>
                  <div className="bg-red-50 flex flex-1 flex-col items-center justify-end outline outline-[1px] outline-black-900 pl-[3px] pt-[3px] w-full">
                    <div className="flex flex-row gap-[13px] items-start justify-between mt-2.5 w-full">
                      <div className="flex flex-col gap-[47px] items-center justify-start mb-[17px]">
                        <Text
                          className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center"
                          size="txtInterSemiBold42"
                        >
                          Class XI
                        </Text>
                        <div className="bg-purple-500 flex flex-col items-center justify-end p-1.5 rounded-[5px]">
                          <Text
                            className="mt-1 text-[19px] text-white-A700"
                            size="txtInterMedium19"
                          >
                            Explore →
                          </Text>
                        </div>
                      </div>
                      <div className="bg-pink-500_02 h-[115px] mt-10 rounded-tl-[50px] shadow-bs2 w-[51%]"></div>
                    </div>
                  </div>
                  <div className="bg-red-50 md:h-[115px] h-[170px] outline outline-[1px] outline-black-900 pl-3 pt-3 relative w-full">
                    <div className="absolute bg-amber-500 bottom-[0] h-[115px] right-[0] rounded-tl-[50px] shadow-bs2 w-1/2"></div>
                    <div className="absolute bg-amber-500 bottom-[10%] flex flex-col items-center justify-end left-[6%] p-1.5 rounded-[5px]">
                      <Text
                        className="mt-1 text-[19px] text-white-A700"
                        size="txtInterMedium19"
                      >
                        Explore →
                      </Text>
                    </div>
                    <Text
                      className="absolute left-[7%] sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center top-[8%]"
                      size="txtInterSemiBold42"
                    >
                      Class XII
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <Img
            className="absolute h-[845px] inset-y-[0] my-auto right-[2%]"
            src="images/img_teachers.svg"
            alt="teachers"
          />
        </div>
      </div>
    </>
  );
};

export default ClassesPage;
