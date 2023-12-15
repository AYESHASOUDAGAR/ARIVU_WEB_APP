import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const LoansAndGrantsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-[19px] items-center justify-start mx-auto pb-[291px] w-full">
        <div className="h-[492px] md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start mb-[-1.49px] mx-auto w-full z-[1]">
            <div className="bg-white-A700 flex flex-col items-center justify-start py-4 w-full">
              <div className="flex flex-col justify-start mb-[17px] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[63px] w-[93%] md:w-full">
                  <Text
                    className="common-pointer mb-[3px] text-black-900 text-xl"
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
                    className="common-pointer md:ml-[0] ml-[1171px] md:mt-0 mt-[3px] text-black-900 text-xl"
                    size="txtInterSemiBold20Black900"
                    onClick={() => navigate("/dashboard")}
                  >
                    PROFILE
                  </Text>
                </div>
                <Line className="bg-gray-700_03 h-px mt-2 w-full" />
                <Img
                  className="h-[30px] md:ml-[0] ml-[49px] mt-7 w-[30px]"
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
            <div className="absolute bg-gray-900_8c flex flex-col h-max inset-[0] items-center justify-center m-auto p-[136px] md:px-10 sm:px-5 w-full">
              <Text
                className="mt-2 sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtInterExtraBold50"
              >
                LOANS/GRANTS
              </Text>
            </div>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1181px] mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <div className="md:h-[304px] h-[307px] relative w-full">
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] rounded-bl-[50px] rounded-tr-[50px] shadow-bs3 w-full">
              <div className="flex flex-col items-start justify-start mt-[118px] w-full">
                <Text className="text-gray-700 text-xs" size="txtInterLight12">
                  <>
                    Vestibulum eget magna aliquet, ultrices
                    <br />
                    arcu non, suscipit urna. Aliquam porta,
                    <br />
                    lorem eu dictum rutrum
                  </>
                </Text>
                <Text
                  className="text-gray-700_01 text-xs"
                  size="txtInterMedium12Gray70001"
                >
                  <>
                    Eligibility
                    <br />
                    class 6 to 12
                  </>
                </Text>
                <Text
                  className="mt-2 text-gray-700_02 text-xs"
                  size="txtInterMedium12Gray70002"
                >
                  <>
                    Award
                    <br />
                    INR 10,000 for one year
                  </>
                </Text>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="mt-[18px] text-gray-700_03 text-xs"
                    size="txtInterSemiBold12"
                  >
                    Last Update On : 05-12-2023
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-2 min-w-[95px] text-center text-xs"
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
            <div className="absolute bg-red-300 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[23px] sm:px-5 rounded-bl-[50px] rounded-tr-[50px] shadow-bs2 top-[0] w-full">
              <Text
                className="mb-6 mt-[27px] md:text-2xl sm:text-[22px] text-[26px] text-black-900 text-center"
                size="txtInterExtraBold26"
              >
                SBIF Asha Scholarship
              </Text>
            </div>
          </div>
          <div className="md:h-[304px] h-[307px] relative w-full">
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] rounded-bl-[50px] rounded-tr-[50px] shadow-bs3 w-full">
              <div className="flex flex-col items-start justify-start mt-[118px] w-full">
                <Text className="text-gray-700 text-xs" size="txtInterLight12">
                  <>
                    Vestibulum eget magna aliquet, ultrices
                    <br />
                    arcu non, suscipit urna. Aliquam porta,
                    <br />
                    lorem eu dictum rutrum
                  </>
                </Text>
                <Text
                  className="text-gray-700_01 text-xs"
                  size="txtInterMedium12Gray70001"
                >
                  <>
                    Eligibility
                    <br />
                    class 6 to 12
                  </>
                </Text>
                <Text
                  className="mt-2 text-gray-700_02 text-xs"
                  size="txtInterMedium12Gray70002"
                >
                  <>
                    Award
                    <br />
                    INR 10,000 for one year
                  </>
                </Text>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="mt-[18px] text-gray-700_03 text-xs"
                    size="txtInterSemiBold12"
                  >
                    Last Update On : 05-12-2023
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-2 min-w-[95px] text-center text-xs"
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
            <div className="absolute bg-red-300 flex flex-col inset-x-[0] items-center justify-start mx-auto p-1 rounded-bl-[50px] rounded-tr-[50px] top-[0] w-full">
              <Text
                className="mb-[19px] mt-[37px] md:text-2xl sm:text-[22px] text-[26px] text-black-900 text-center w-[97%] sm:w-full"
                size="txtInterExtraBold26"
              >
                Corteva Agriscience Scholarship
              </Text>
            </div>
          </div>
          <div className="md:h-[304px] h-[307px] relative w-full">
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] rounded-bl-[50px] rounded-tr-[50px] shadow-bs3 w-full">
              <div className="flex flex-col items-start justify-start mt-[118px] w-full">
                <Text className="text-gray-700 text-xs" size="txtInterLight12">
                  <>
                    Vestibulum eget magna aliquet, ultrices
                    <br />
                    arcu non, suscipit urna. Aliquam porta,
                    <br />
                    lorem eu dictum rutrum
                  </>
                </Text>
                <Text
                  className="text-gray-700_01 text-xs"
                  size="txtInterMedium12Gray70001"
                >
                  <>
                    Eligibility
                    <br />
                    class 6 to 12
                  </>
                </Text>
                <Text
                  className="mt-2 text-gray-700_02 text-xs"
                  size="txtInterMedium12Gray70002"
                >
                  <>
                    Award
                    <br />
                    INR 10,000 for one year
                  </>
                </Text>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="mt-[18px] text-gray-700_03 text-xs"
                    size="txtInterSemiBold12"
                  >
                    Last Update On : 05-12-2023
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-2 min-w-[95px] text-center text-xs"
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
            <div className="absolute bg-red-300 flex flex-col inset-x-[0] items-end justify-start mx-auto p-[41px] md:px-10 sm:px-5 rounded-bl-[50px] rounded-tr-[50px] top-[0] w-full">
              <Text
                className="mb-[5px] mt-2.5 md:text-2xl sm:text-[22px] text-[26px] text-black-900 text-center"
                size="txtInterExtraBold26"
              >
                PARAS Scholarship
              </Text>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

export default LoansAndGrantsPage;
