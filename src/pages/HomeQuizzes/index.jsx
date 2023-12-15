import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const HomeQuizzesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue-300 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[63px] items-center justify-start mx-auto pb-[298px] w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-center p-[34px] sm:px-5 w-full">
          <Img
            className="common-pointer h-[25px] mr-[1200px] mt-[57px] w-[25px]"
            src="images/img_back.svg"
            alt="back"
            onClick={() => navigate(-1)}
          />
          <Text
            className="mb-[84px] mt-1 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterBold40"
          >
            QUIZZES
          </Text>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1300px] mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-3 rounded-[20px] shadow-bs w-full">
            <Img
              className="h-[196px] md:h-auto object-cover w-full"
              src="images/img_74548892.png"
              alt="74548893"
            />
            <Text
              className="mt-[19px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterBold36"
            >
              ENGLISH
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold leading-[normal] mb-4 min-w-[141px] mt-8 rounded-[20px] shadow-bs2 text-[15px] text-center"
              onClick={() => navigate("/quizzepage")}
              color="amber_500"
              size="xl"
              variant="fill"
            >
              START
            </Button>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-2.5 rounded-[20px] shadow-bs w-full">
            <Img
              className="h-[199px] md:h-auto object-cover w-[97%] sm:w-full"
              src="images/img_450pxmalayalam.png"
              alt="450pxmalayalam"
            />
            <Text
              className="mt-[19px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtInterBold32"
            >
              MALAYALAM
            </Text>
            <Button
              className="cursor-pointer font-bold leading-[normal] mb-[18px] min-w-[141px] mt-[37px] rounded-[20px] shadow-bs2 text-[15px] text-center"
              color="amber_500"
              size="xl"
              variant="fill"
            >
              START
            </Button>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[11px] rounded-[20px] shadow-bs w-full">
            <Img
              className="h-[195px] md:h-auto mt-[3px] object-cover w-full"
              src="images/img_43764412324019.png"
              alt="43764412324019"
            />
            <Text
              className="mt-[19px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
              size="txtInterBold28"
            >
              MATHEMATICS
            </Text>
            <Button
              className="cursor-pointer font-bold leading-[normal] mb-[17px] min-w-[141px] mt-[42px] rounded-[20px] shadow-bs2 text-[15px] text-center"
              color="amber_500"
              size="xl"
              variant="fill"
            >
              START
            </Button>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end py-7 rounded-[20px] shadow-bs w-full">
            <Img
              className="h-[172px] md:h-auto mt-1.5 object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_1078025419197640.png"
              alt="107802541919764"
            />
            <Text
              className="mt-[22px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterBold36"
            >
              ICT
            </Text>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[141px] mt-8 rounded-[20px] shadow-bs2 text-[15px] text-center"
              color="amber_500"
              size="xl"
              variant="fill"
            >
              START
            </Button>
          </div>
        </List>
      </div>
    </>
  );
};

export default HomeQuizzesPage;
