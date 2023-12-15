import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Input, Line, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-200_e2 flex sm:flex-col md:flex-col flex-row font-inter gap-[52px] items-start mx-auto md:pr-10 sm:pr-5 pr-[41px] w-full">
        <Sidebar className="!sticky !w-[306px] bg-gray-300_03 flex h-screen md:hidden justify-start overflow-auto md:px-5 shadow-bs top-[0]">
          <div className="flex ml-6 md:ml-[0] mr-[29px] mt-7 relative w-[83%]">
            <Img
              className="common-pointer h-[25px] my-auto w-[25px]"
              src="images/img_back.svg"
              alt="back"
              onClick={() => navigate(-1)}
            />
            <div className="flex flex-col items-center justify-between ml-[-20px] mr-auto mt-auto w-[248px] z-[1]">
              <Text
                className="capitalize md:ml-[0] ml-[50px] my-1 text-base text-gray-900_02 w-full"
                size="txtInterMedium16"
              >
                Your Profie
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center mt-[37px] mx-auto px-5 w-[248px]">
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
                    className="h-[75px] md:h-auto rounded-[50%] w-[76px]"
                    src="images/img_memojiboys618.png"
                    alt="memojiboys618"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 items-center justify-start w-full">
              <Text
                className="capitalize text-base text-center text-gray-900_02 w-full"
                size="txtInterMedium16"
              >
                good Morning Prashant
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
                  <div className="border border-gray-500_01 border-solid flex flex-col items-center justify-center p-3 rounded-[50%] w-10">
                    <Img
                      className="h-4 w-4"
                      src="images/img_user_blue_gray_900_02.svg"
                      alt="user"
                    />
                  </div>
                  <div className="border border-gray-500_01 border-solid flex flex-col items-center justify-center p-3 rounded-[50%] w-10">
                    <Img
                      className="h-4 w-4"
                      src="images/img_btn.svg"
                      alt="directnormal"
                    />
                  </div>
                  <div className="border border-gray-500_01 border-solid flex flex-col items-center justify-center p-3 rounded-[50%] w-10">
                    <Img
                      className="h-4 w-4"
                      src="images/img_btn.svg"
                      alt="directnormal_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-start justify-start mb-[237px] md:ml-[0] ml-[26px] mr-[29px] mt-12 p-5 rounded-[5px] shadow-bs w-[83%]">
            <div className="flex flex-col gap-[17px] items-center justify-start mt-1.5 w-[91%] md:w-full">
              <Text
                className="capitalize text-black-900 text-xl"
                size="txtInterMedium20Black900"
              >
                View Public Profile
              </Text>
              <Line className="bg-gray-700_7f h-px w-full" />
            </div>
            <div className="flex flex-col gap-4 justify-start mt-7 w-[91%] md:w-full">
              <Text
                className="capitalize md:ml-[0] ml-[7px] text-black-900 text-xl"
                size="txtInterMedium20Black900"
              >
                Profile
              </Text>
              <Line className="bg-gray-700_7f h-px w-full" />
            </div>
            <div className="flex flex-col gap-4 justify-start mt-[17px] w-[91%] md:w-full">
              <Text
                className="capitalize ml-2 md:ml-[0] text-black-900 text-xl"
                size="txtInterMedium20Black900"
              >
                Photo
              </Text>
              <Line className="bg-gray-700_7f h-px w-full" />
            </div>
            <div className="flex flex-col gap-[21px] justify-start mt-[30px] w-[91%] md:w-full">
              <Text
                className="capitalize md:ml-[0] ml-[7px] text-black-900 text-xl"
                size="txtInterMedium20Black900"
              >
                Subscription
              </Text>
              <Line className="bg-gray-700_7f h-px w-full" />
            </div>
            <div className="flex flex-col gap-[18px] justify-start mt-[18px] w-[91%] md:w-full">
              <Text
                className="capitalize ml-1.5 md:ml-[0] text-black-900 text-xl"
                size="txtInterMedium20Black900"
              >
                Notification
              </Text>
              <Line className="bg-gray-700_7f h-px w-full" />
            </div>
            <Text
              className="capitalize mb-[9px] md:ml-[0] ml-[7px] mt-[25px] text-black-900 text-xl"
              size="txtInterMedium20Black900"
            >
              Close Account
            </Text>
          </div>
        </Sidebar>
        <div className="bg-blue_gray-100 flex flex-1 flex-col items-center justify-start mb-[30px] md:mt-0 mt-[50px] p-[38px] md:px-5 rounded-[10px] shadow-bs w-full">
          <Text
            className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterMedium40"
          >
            Public Profile
          </Text>
          <Text
            className="capitalize mt-[15px] text-gray-700_cc text-xl"
            size="txtInterMedium20Gray700cc"
          >
            Add information about you
          </Text>
          <div className="flex flex-col items-center justify-start mb-[79px] mt-[29px] w-[95%] md:w-full">
            <Input
              name="groupSix"
              placeholder="NAME : Prashant"
              className="capitalize font-medium leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
              wrapClassName="w-full"
              shape="square"
              size="xl"
            ></Input>
            <Input
              name="groupFive"
              placeholder="MIDDLE NAME : Sourabh"
              className="capitalize font-medium leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
              wrapClassName="mt-[54px] w-full"
              shape="square"
              size="2xl"
            ></Input>
            <Input
              name="price"
              placeholder="LAST NAME : Patil"
              className="capitalize font-medium leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
              wrapClassName="mt-[50px] w-full"
              shape="square"
              size="2xl"
            ></Input>
            <Input
              name="groupThree"
              placeholder="Mob NO. : 1234567891"
              className="capitalize font-medium leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
              wrapClassName="mt-[50px] w-full"
              shape="square"
              size="lg"
            ></Input>
            <Input
              name="groupTwo"
              placeholder="CLASS : Class 11th"
              className="capitalize font-medium leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
              wrapClassName="mt-[50px] w-full"
              shape="square"
              size="xl"
            ></Input>
            <Input
              name="groupOne"
              placeholder="Email ID : Temp@gmail.com"
              className="capitalize font-medium leading-[normal] p-0 placeholder:text-black-900 text-left text-xl w-full"
              wrapClassName="mt-[50px] w-full"
              shape="square"
              size="xl"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
