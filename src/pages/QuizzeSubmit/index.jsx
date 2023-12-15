import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const QuizzeSubmitPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue-300 flex flex-col font-inter gap-[59px] justify-end mx-auto py-[46px] w-full">
        <Img
          className="common-pointer h-[25px] md:ml-[0] ml-[34px] mr-[1381px] mt-[45px] w-[25px]"
          src="images/img_back.svg"
          alt="back"
          onClick={() => navigate("/homequizzes")}
        />
        <div className="flex flex-col items-center w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[212px] md:px-10 sm:px-5 rounded-[100px] w-full">
            <div className="flex flex-col items-center justify-start mb-[129px] w-1/2 md:w-full">
              <div className="bg-blue-300 flex flex-col items-center justify-end p-[34px] sm:px-5 rounded-[42px] w-full">
                <Text
                  className="mb-1 mt-[23px] md:text-5xl text-[64px] text-black-900 w-[97%] sm:w-full"
                  size="txtInterBold64"
                >
                  Successfully Submitted !
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizzeSubmitPage;
