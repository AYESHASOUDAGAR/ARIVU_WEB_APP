import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const LandingPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 sm:h-[1022px] h-[1024px] md:h-[1378px] md:px-5 relative w-full">
            <Img
              className="h-[1022px] m-auto object-cover w-full"
              src="images/img_11.png"
              alt="Eleven"
            />
            <div className="absolute bg-black-900_99 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[114px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[127px] md:h-[99px] pb-7 relative w-full">
                  <div className="h-[99px] mx-auto w-full">
                    <Img
                      className="absolute bottom-[32%] h-px inset-x-[0] mx-auto"
                      src="images/img_navigation.svg"
                      alt="navigation"
                    />
                    <Img
                      className="absolute h-[99px] inset-y-[0] left-[0] my-auto object-cover w-[9%]"
                      src="images/img_arivulogo1removebgpreview.png"
                      alt="arivulogo1remov"
                    />
                  </div>
                  <div className="absolute flex flex-row md:gap-10 items-center justify-between right-[4%] top-[9%] w-[88%]">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                      size="txtInterBold40"
                    >
                      <span className="text-indigo-A400 font-inter font-bold">
                        A
                      </span>
                      <span className="text-blue-A200 font-inter font-bold">
                        R
                      </span>
                      <span className="text-amber-800 font-inter font-bold">
                        I
                      </span>
                      <span className="text-purple-500 font-inter font-bold">
                        V
                      </span>
                      <span className="text-purple-500_01 font-inter font-bold">
                        U
                      </span>
                    </Text>
                    <Button
                      className="common-pointer !text-black-900 border border-gray-900 border-solid cursor-pointer font-poppins leading-[normal] min-w-[98px] my-1 rounded-lg text-base text-center"
                      onClick={() => navigate("/schoollogin")}
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      Log in
                    </Button>
                  </div>
                </div>
                <Text
                  className="mt-[154px] md:text-5xl text-[75px] text-center text-white-A700"
                  size="txtInterBold75"
                >
                  <span className="text-white-A700 font-inter font-bold">
                    WELCOME TO{" "}
                  </span>
                  <span className="text-indigo-A400 font-inter font-bold">
                    A
                  </span>
                  <span className="text-blue-A200 font-inter font-bold">R</span>
                  <span className="text-amber-800 font-inter font-bold">I</span>
                  <span className="text-purple-500 font-inter font-bold">
                    V
                  </span>
                  <span className="text-purple-500_01 font-inter font-bold">
                    U
                  </span>
                </Text>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[45px] w-[98%] md:w-full">
                  <Img
                    className="h-[55px]"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                  <Text
                    className="md:ml-[0] ml-[220px] md:mt-0 mt-[9px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-[71%] sm:w-full"
                    size="txtInterLight30"
                  >
                    Explore a realm of possibilities, Where information breaks
                    boundaries & knowledge meets innovation & Bridging gaps for
                    a brighter tomorrow.
                  </Text>
                  <Img
                    className="h-[55px] md:ml-[0] ml-[139px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-around mt-[166px] w-[91%] md:w-full">
                  <div className="bg-amber-500 flex flex-col items-start justify-start md:mt-0 mt-[7px] p-[15px] rounded-bl-[30px] rounded-tr-[30px]">
                    <Text
                      className="mb-3 ml-4 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                      size="txtInterExtraBold30"
                    >
                      <>
                        ACADEMICS
                        <br />
                        EDUCATION
                      </>
                    </Text>
                  </div>                 

                  <div className="h-[114px] justify-center flex flex-col items-start justify-start md:mt-0 mt-[7px] p-[15px] rounded-bl-[30px] rounded-tr-[30px]" style={{backgroundColor: '#d541b5'}}>
                    <Text
                      className="mb-3 ml-4 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                      size="txtInterExtraBold30"
                    >
                      <>
                        RESOURCES
                      </>
                    </Text>
                  </div> 
                    <div className="bg-red-300 flex flex-col items-start justify-start md:mt-0 mt-[7px] p-[15px] rounded-bl-[30px] rounded-tr-[30px]">
                      <Text
                        className="mb-2.5 text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                        size="txtInterExtraBold30"
                      >
                        <>
                          VOCATIONAL
                          <br />
                          EDUCATION
                        </>
                      </Text>
                    </div>
                    <div className="bg-purple-500_cc flex flex-col items-start justify-start md:mt-0 mt-[7px] p-[15px] rounded-bl-[30px] rounded-tr-[30px]">
                      <Text
                        className="mb-3.5 text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                        size="txtInterExtraBold30"
                      >
                        <>
                          SKILL
                          <br />
                          DEVELOPMENT
                        </>
                      </Text>
                    </div>
                </div>
                <Text
                  className="mt-9 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtInterSemiBold40"
                >
                  <>&quot;Choose Your Destiny: Explore, Learn, Succeed!&quot;</>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[432px] md:h-[588px] mt-[157px] md:px-5 relative w-full">
          <Img
            className="absolute h-[431px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_backside21.png"
            alt="backsideTwentyOne"
          />
          <div className="absolute bg-indigo-900_99 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[177px] md:px-10 sm:px-5 w-full">
            <Text
              className="mb-4 text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
              size="txtInterBold48"
            >
              About Us
            </Text>
          </div>
        </div>
        <div className="flex max-w-[1397px] mt-[87px] mx-auto md:px-5 relative w-full items-center">
          <div className="bg-amber-500_cc flex flex-col items-center justify-start my-auto p-10 flex-[1] pl-[50px] pr-[50px]">
            <Text
              className="leading-[150.00%] mb-6 text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[1.10px]"
              size="txtInterLight22"
            >
              <span className="text-black-900 font-inter text-left font-semibold">
                ARIVU
              </span>
              <span className="text-black-900 font-inter text-left font-light">
                {" "}
                is a mission to mentor and nurture young souls to achieve
                academic excellence, pursue vibrant careers and build strong
                fundamentals in learning.ARIVU is structured by profound pillars
                of{" "}
              </span>
              <span className="text-black-900 font-inter text-left font-semibold">
                Indian Education System NEP 2020
              </span>
              <span className="text-black-900 font-inter text-left font-light">
                {" "}
                and{" "}
              </span>
              <span className="text-black-900 font-inter text-left font-semibold">
                SAMAGRA SHIKSHA ABHIYAAN
              </span>
              <span className="text-black-900 font-inter text-left font-light">
                <>
                  {" "}
                  ensuring holistic, integrated, enjoyable and engaging
                  learning. In ARIVU, we believe that each learner is unique and
                  must gain diverse skill set in conjunction with academic
                  education to gain eminence in their career. We have a vision,
                  to provide equitable access to the highest-quality education.
                  for all learners regardless of social or economic background
                  and leave no stone unturned to revolutionize teaching-learning
                  processes.
                  <br />
                  <br />
                  ARIVU is a transformative force in education, empowering
                  students, educators and communities in rural areas, ultimately
                  bridging the quality education gap
                </>
              </span>
            </Text>
          </div>
          <div className="h-[400px] md:h-[400px] ml-[-63px] w-[36%] sm:w-full z-[1] flex-basis-[25%]">
            <Img
                className="h-[400px] object-cover static w-full"
                src="images/img_istockphoto861.png"
                alt="istockphoto861"
              />
            <Text
              className="absolute right-[0] bottom-[31%] w-[186px] text-center sm:text-4xl md:text-[38px] text-[40px] text-white-A700 tracking-[2.00px]"
              size="txtInterBold40WhiteA700"
              style={{backgroundColor: '#fff'}}
            >
              <span className="text-indigo-A400 font-inter text-left font-bold leading-[normal]">
                A
              </span>
              <span className="text-blue-A200 font-inter text-left font-bold leading-[normal]">
                R
              </span>
              <span className="text-amber-800 font-inter text-left font-bold leading-[normal]">
                I
              </span>
              <span className="text-purple-500 font-inter text-left font-bold leading-[normal]">
                V
              </span>
              <span className="text-purple-500_01 font-inter text-left font-bold leading-[normal]">
                U
              </span>
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-end justify-start mt-[79px] md:pl-10 sm:pl-5 pl-[61px] w-full">
          <div className="flex md:flex-col flex-row gap-[15px] items-start justify-end w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[84px] justify-start md:mt-0 mt-[127px] w-[36%] md:w-full">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[7px] w-[86%] md:w-full">
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-amber-500 flex flex-col items-start justify-start mr-[140px] my-0 p-[15px] rounded-bl-[30px] rounded-tr-[30px]">
                    <Text
                      className="mb-3 ml-4 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                      size="txtInterExtraBold30"
                    >
                      <>
                        ACAEDMICS
                        <br />
                        EDUCATION
                      </>
                    </Text>
                  </div>
                  <div className="h-[161px] ml-[140px] my-0 relative w-[67%]">
                    <Line className="bg-black-900 h-[59px] mb-[-0.01px] ml-[68px] w-px z-[1]" />
                    <div className="bg-purple-500_cc flex flex-col items-center justify-start mt-auto mx-auto p-3.5 rounded-bl-[30px] rounded-tr-[30px] w-full">
                      <Text
                        className="mb-3.5 text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                        size="txtInterExtraBold30"
                      >
                        <>
                          SKILL
                          <br />
                          DEVELOPMENT
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="h-[161px] mr-[140px] my-0 relative w-[67%]">
                    <Line className="bg-black-900 h-[59px] mb-[-0.01px] ml-auto mr-[71px] w-px z-[1]" />
                    <div className="bg-red-300 flex flex-col items-center justify-start mt-auto mx-auto p-4 rounded-bl-[30px] rounded-tr-[30px] w-full">
                      <Text
                        className="mb-2.5 text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                        size="txtInterExtraBold30"
                      >
                        <>
                          VOCATIONAL
                          <br />
                          EDUCATION
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="h-[161px] ml-[140px] my-0 relative w-[67%]">
                    <Line className="bg-black-900 h-[59px] mb-[-0.01px] ml-[68px] w-px z-[1]" />
                    <div className="bg-purple-500_cc_01 flex flex-col items-start justify-end mt-auto mx-auto p-8 sm:px-5 rounded-bl-[30px] rounded-tr-[30px] w-full">
                      <Text
                        className="md:ml-[0] ml-[7px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                        size="txtInterExtraBold30"
                      >
                        RESOURCES
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <Text
                className="leading-[44.00px] md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                size="txtInterRegular26"
              >
                <>
                  To ensure engaging and enjoying we have day streaks and
                  gamified formats.
                  <br />
                  Thus, we aim to build an unified education platform.
                </>
              </Text>
            </div>
            <div className="bg-blue_gray-100 flex md:flex-1 flex-col justify-start p-[26px] sm:px-5 w-[64%] md:w-full">
              <Text
                className="ml-1 md:ml-[0] mt-[22px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                size="txtInterSemiBold45"
              >
                Our Mission
              </Text>
              <Line className="bg-amber-500 h-[5px] mr-[730px] mt-[3px] rotate-[1deg] w-[12%]" />
              <Text
                className="ml-7 md:ml-[0] mr-[75px] mt-[47px] md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-800"
                size="txtInterRegular26Bluegray800"
              >
                <span className="md:text-[28px] sm:text-[26px] text-blue_gray-800 font-inter text-left text-3xl font-bold">
                  ARIVU
                </span>
                <span className="text-blue_gray-800 font-inter text-left font-normal">
                  <>
                    {" "}
                    believes that education should be an ecosystem that nurtures
                    holistic development of a student and lets student follow
                    their passion. It should be a system that enhances quality
                    of education and is attainable by a vast community
                    especially pupils from rural areas which will bridge the
                    digital divide.
                    <br />
                    <br />
                    To accomplish this we have four modules:
                  </>
                </span>
              </Text>
              <Text
                className="ml-9 md:ml-[0] mt-[39px] md:text-2xl sm:text-[22px] text-[26px] text-black-900 w-[87%] sm:w-full"
                size="txtInterRegular26"
              >
                <span className="text-black-900 font-inter text-left font-semibold">
                  ACADEMICS EDUCATION
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  :{" "}
                </span>
                <span className="text-blue_gray-800 font-inter text-left font-normal">
                  Incorporating NEP 2020 policy of education designed to tutor
                  students with academic syllabus for STEM subjects
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  .
                </span>
              </Text>
              <Text
                className="ml-9 md:ml-[0] mt-3.5 md:text-2xl sm:text-[22px] text-[26px] text-black-900 w-[87%] sm:w-full"
                size="txtInterRegular26"
              >
                <span className="text-black-900 font-inter text-left font-semibold">
                  SKILL DEVELOPMENT
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  :{" "}
                </span>
                <span className="text-blue_gray-800 font-inter text-left font-normal">
                  To foster communicational skills, digital and problem solving
                  skills courses with exclusive syllabus.
                </span>
              </Text>
              <Text
                className="ml-9 md:ml-[0] mt-[25px] md:text-2xl sm:text-[22px] text-[26px] text-black-900 w-[87%] sm:w-full"
                size="txtInterRegular26"
              >
                <span className="text-black-900 font-inter text-left font-semibold">
                  VOCATIONAL COURSES
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  :{" "}
                </span>
                <span className="text-blue_gray-800 font-inter text-left font-normal">
                  To generate employment facilities pursue them and put into
                  practice.
                </span>
              </Text>
              <Text
                className="mb-[77px] ml-9 md:ml-[0] md:text-2xl sm:text-[22px] text-[26px] text-black-900 w-[87%] sm:w-full"
                size="txtInterRegular26"
              >
                <span className="text-black-900 font-inter text-left font-semibold">
                  OTHER INFORMATIVE RESOURCES
                </span>
                <span className="text-black-900 font-inter text-left font-normal">
                  :{" "}
                </span>
                <span className="text-blue_gray-800 font-inter text-left font-normal">
                  To offer connectivity to financially disadvantaged patrons
                  information about loans ,grants and incentives is stated.
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col items-center justify-start mt-[180px] p-[63px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start max-w-[1222px] mb-[163px] mx-auto w-full">
            <Text
              className="ml-1 md:ml-[0] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 tracking-[2.50px]"
              size="txtInterSemiBold50"
            >
              Our Courses
            </Text>
            <Line className="bg-amber-500 h-[5px] mt-4 w-[9%]" />
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[11px] mt-[42px] w-[98%] md:w-full">
              <Text
                className="md:text-5xl text-[80px] text-black-900 tracking-[4.00px]"
                size="txtInterBold80"
              >
                Featured Courses
              </Text>
              <List
                className="sm:flex-col flex-row gap-3 grid grid-cols-2 md:mt-0 mt-[43px]"
                orientation="horizontal"
              >
                <div className="bg-amber-500 flex flex-col items-start justify-end p-[7px] rounded-[5px] w-full">
                  <Img
                    className="h-[25px] ml-2 md:ml-[0]"
                    src="images/img_arrowleft_black_900.svg"
                    alt="arrowleft"
                  />
                </div>
                <div className="bg-amber-500 flex flex-col items-center justify-end p-[7px] rounded-[5px] w-full">
                  <Img
                    className="h-[25px]"
                    src="images/img_arrowright_black_900.svg"
                    alt="arrowright"
                  />
                </div>
              </List>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[63px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center md:ml-[0] ml-[43px] mt-[30px] w-[97%]"
              orientation="horizontal"
            >
              <div className="md:h-[477px] h-[481px] relative w-full">
                <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-2.5 shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start mb-2 mt-[257px] w-[99%] md:w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                      size="txtInterExtraBold26"
                    >
                      C Programming language
                    </Text>
                    <Text
                      className="ml-1.5 md:ml-[0] mt-2 text-gray-700 text-xs"
                      size="txtInterLight12"
                    >
                      <>
                        Vestibulum eget magna aliquet, ultrices
                        <br />
                        arcu non, suscipit urna. Aliquam porta,
                        <br />
                        lorem eu dictum rutrum
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-start ml-1 md:ml-[0] w-[36%] md:w-full">
                      <Img
                        className="h-[15px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Img
                        className="h-[15px] ml-[5px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_One"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Two"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Three"
                      />
                      <Img
                        className="h-[15px] ml-1 w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Four"
                      />
                      <Text
                        className="ml-2 text-black-900 text-xs"
                        size="txtInterMedium12"
                      >
                        5.0
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[7px] items-start justify-start ml-0.5 md:ml-[0] mt-[11px] w-[26%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="mt-[3px] text-gray-700_01 text-xs"
                        size="txtInterMedium12Gray70001"
                      >
                        15+ hours
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between ml-0.5 md:ml-[0] mt-[7px] w-[98%] md:w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <div className="flex flex-row gap-[7px] items-end justify-start w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_group.svg"
                            alt="group"
                          />
                          <Text
                            className="mt-[5px] text-gray-700_02 text-xs"
                            size="txtInterMedium12Gray70002"
                          >
                            300+ students already enrolled
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1.5 items-end justify-start w-[64%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_offer.svg"
                            alt="offer"
                          />
                          <Text
                            className="mt-[5px] text-gray-700_03 text-xs"
                            size="txtInterMedium12Gray70003"
                          >
                            Admission is open
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="common-pointer cursor-pointer font-medium leading-[normal] mb-2 min-w-[95px] mt-3.5 text-center text-xs"
                        onClick={() => navigate("/clanguagecourse")}
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
                <div className="absolute bg-gray-500_01 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[19px] top-[0] w-full">
                  <Img
                    className="h-[203px] md:h-auto object-cover w-[58%]"
                    src="images/img_cprogramminglanguage.png"
                    alt="cprogramminglan_Two"
                  />
                </div>
              </div>
              <div className="md:h-[476px] h-[481px] relative w-full">
                <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start mb-[5px] mt-[254px] w-[99%] md:w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtInterBold28"
                    >
                      HTML & CSS Bootcamp
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] mt-[5px] text-gray-700 text-xs"
                      size="txtInterLight12"
                    >
                      <>
                        Vestibulum eget magna aliquet, ultrices
                        <br />
                        arcu non, suscipit urna. Aliquam porta,
                        <br />
                        lorem eu dictum rutrum
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] w-[37%] md:w-full">
                      <Img
                        className="h-[15px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Img
                        className="h-[15px] ml-[5px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_One"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Two"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Three"
                      />
                      <Img
                        className="h-[15px] ml-1 w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Four"
                      />
                      <Text
                        className="ml-2 text-black-900 text-xs"
                        size="txtInterMedium12"
                      >
                        5.0
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[7px] items-start justify-start mt-[11px] w-[27%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="mt-[3px] text-gray-700_01 text-xs"
                        size="txtInterMedium12Gray70001"
                      >
                        15+ hours
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between mt-[7px] w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <div className="flex flex-row gap-[7px] items-end justify-start w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_group.svg"
                            alt="group"
                          />
                          <Text
                            className="mt-[5px] text-gray-700_02 text-xs"
                            size="txtInterMedium12Gray70002"
                          >
                            300+ students already enrolled
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-[63%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_offer.svg"
                            alt="offer"
                          />
                          <Text
                            className="ml-[5px] mt-1 text-gray-700_03 text-xs"
                            size="txtInterMedium12Gray70003"
                          >
                            Admission is open
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] mb-2 min-w-[95px] mt-3.5 text-center text-xs"
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
                <div className="absolute bg-gray-500_01 flex flex-col inset-x-[0] items-center justify-end mx-auto p-9 sm:px-5 top-[0] w-full">
                  <Img
                    className="h-[165px] md:h-auto mt-1 object-cover w-[99%]"
                    src="images/img_pngwing10.png"
                    alt="pngwingTen"
                  />
                </div>
              </div>
              <div className="md:h-[478px] h-[481px] relative w-full">
                <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 shadow-bs3 w-full">
                  <div className="flex flex-col items-start justify-start mb-[3px] mt-[247px] w-full">
                    <Text
                      className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                      size="txtInterExtraBold28"
                    >
                      English Master Course
                    </Text>
                    <Text
                      className="ml-1 md:ml-[0] mt-2.5 text-gray-700 text-xs"
                      size="txtInterLight12"
                    >
                      <>
                        Vestibulum eget magna aliquet, ultrices
                        <br />
                        arcu non, suscipit urna. Aliquam porta,
                        <br />
                        lorem eu dictum rutrum
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] w-[37%] md:w-full">
                      <Img
                        className="h-[15px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Img
                        className="h-[15px] ml-[5px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_One"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Two"
                      />
                      <Img
                        className="h-[15px] ml-[3px] w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Three"
                      />
                      <Img
                        className="h-[15px] ml-1 w-[15px]"
                        src="images/img_signal.svg"
                        alt="signal_Four"
                      />
                      <Text
                        className="ml-2 text-black-900 text-xs"
                        size="txtInterMedium12"
                      >
                        5.0
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[7px] items-start justify-start mt-[11px] w-[27%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="mt-[3px] text-gray-700_01 text-xs"
                        size="txtInterMedium12Gray70001"
                      >
                        15+ hours
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between mt-[7px] w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <div className="flex flex-row gap-[7px] items-end justify-start w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_group.svg"
                            alt="group"
                          />
                          <Text
                            className="mt-[5px] text-gray-700_02 text-xs"
                            size="txtInterMedium12Gray70002"
                          >
                            300+ students already enrolled
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start ml-0.5 md:ml-[0] w-[63%] md:w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_offer.svg"
                            alt="offer"
                          />
                          <Text
                            className="ml-[5px] mt-1 text-gray-700_03 text-xs"
                            size="txtInterMedium12Gray70003"
                          >
                            Admission is open
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] mb-2 min-w-[95px] mt-3.5 text-center text-xs"
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
                <div className="absolute bg-gray-500_01 flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <Img
                    className="h-[241px] md:h-auto object-cover w-full"
                    src="images/img_74548892.png"
                    alt="74548892"
                  />
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="h-[1024px] md:h-[1180px] sm:h-[1343px] mt-[156px] md:px-5 relative w-full">
          <Img
            className="h-[1024px] m-auto object-cover w-full"
            src="images/img_15581994.png"
            alt="15581994"
          />
          <div className="absolute bg-black-900_d8 flex flex-col h-full inset-y-[0] items-start justify-start my-auto p-[58px] md:px-10 sm:px-5 right-[0] w-[56%]">
            <div className="flex flex-col md:gap-10 gap-[90px] justify-start mb-[437px] w-[62%] md:w-full">
              <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-[82%] md:w-full">
                <Text
                  className="ml-1 md:ml-[0] sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                  size="txtInterExtraBold52"
                >
                  Our Facilities
                </Text>
                <Line className="bg-amber-500 h-[5px] mt-1 w-[29%]" />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[37px] items-end justify-start w-3/4 md:w-full">
                  <Img
                    className="h-[50px] mt-2 w-[50px]"
                    src="images/img_certificate.svg"
                    alt="certificate"
                  />
                  <Text
                    className="mb-[3px] sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                    size="txtInterMedium45"
                  >
                    Certificate
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[34px] items-start justify-start ml-0.5 md:ml-[0] mt-[74px] w-full">
                  <Img
                    className="h-[50px] w-[50px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <Text
                    className="sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                    size="txtInterMedium45"
                  >
                    Books & Library
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[42px] items-end justify-start md:ml-[0] ml-[11px] mt-16 w-[94%] md:w-full">
                  <Img
                    className="h-[37px] mb-[3px] sm:mt-0 mt-3.5 w-9"
                    src="images/img_play.svg"
                    alt="play"
                  />
                  <Text
                    className="sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                    size="txtInterMedium45"
                  >
                    Mentor access
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1024px] sm:h-[1190px] md:h-[1322px] mt-[166px] md:px-5 relative w-full">
          <Img
            className="h-[1024px] m-auto object-cover w-full"
            src="images/img_backside22.png"
            alt="backsideTwentyTwo"
          />
          <div className="absolute bg-gradient  flex flex-col md:gap-10 gap-[63px] h-full inset-[0] justify-center m-auto p-[37px] sm:px-5 w-full">
            <Text
              className="md:ml-[0] ml-[649px] mr-[285px] mt-[21px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
              size="txtInterBold50"
            >
              Upcoming Events
            </Text>
            <div className="flex flex-col md:gap-10 gap-[68px] justify-start mb-[11px] md:ml-[0] ml-[412px] w-[70%] md:w-full">
              <List
                className="flex flex-col gap-px items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-col ml-0.5 my-0 relative w-full">
                  <div className="flex flex-col items-center justify-start mx-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="bg-black-900_7f flex flex-col items-center justify-end mb-[30px] p-4 rounded-[41px]">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtInterMedium20"
                        >
                          23 DEC
                        </Text>
                        <Text
                          className="mt-[3px] text-[17px] text-gray-700"
                          size="txtInterMedium17"
                        >
                          2023
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[7px] justify-start md:mt-0 mt-0.5 w-[76%] md:w-full">
                        <Text
                          className="sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                          size="txtInterBold45"
                        >
                          Importance of Cybersecurity
                        </Text>
                        <div className="flex flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[5px] w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[59%] md:w-full">
                            <Img
                              className="h-5 md:h-auto sm:mt-0 mt-[5px] object-cover w-5"
                              src="images/img_pngwing2.png"
                              alt="pngwingTwo"
                            />
                            <Text
                              className="sm:ml-[0] ml-[9px] sm:mt-0 mt-[3px] text-white-A700 text-xl"
                              size="txtInterRegular20"
                            >
                              10am to 1pm
                            </Text>
                            <Img
                              className="h-7 md:h-auto sm:ml-[0] ml-[133px] object-cover w-[5%] sm:w-full"
                              src="images/img_pngwing3.png"
                              alt="pngwingThree"
                            />
                            <Text
                              className="ml-2.5 sm:ml-[0] text-white-A700 text-xl"
                              size="txtInterRegular20"
                            >
                              KOLHAPUR
                            </Text>
                          </div>
                          <Line className="bg-white-A700 h-px w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-500_02 h-[148px] ml-[71px] mt-[-30px] w-px z-[1]" />
                </div>
                <div className="flex flex-col my-0 relative w-full">
                  <div className="flex flex-col items-center justify-start mx-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="bg-black-900_7f flex flex-col items-center justify-end mb-[38px] p-[15px] rounded-[41px]">
                        <Text
                          className="mt-0.5 text-white-A700 text-xl"
                          size="txtInterMedium20"
                        >
                          30 DEC
                        </Text>
                        <Text
                          className="mt-[3px] text-[17px] text-gray-700"
                          size="txtInterMedium17"
                        >
                          2023
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[5px] justify-start md:mt-0 mt-[11px] w-[76%] md:w-full">
                        <Text
                          className="sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
                          size="txtInterBold45"
                        >
                          Design Thinking
                        </Text>
                        <div className="flex flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[5px] w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[59%] md:w-full">
                            <Img
                              className="h-5 md:h-auto sm:mt-0 mt-[5px] object-cover w-5"
                              src="images/img_pngwing2.png"
                              alt="pngwingTwo"
                            />
                            <Text
                              className="sm:ml-[0] ml-[9px] sm:mt-0 mt-1 text-white-A700 text-xl"
                              size="txtInterRegular20"
                            >
                              10am to 1pm
                            </Text>
                            <Img
                              className="h-7 md:h-auto sm:ml-[0] ml-[133px] object-cover w-[5%] sm:w-full"
                              src="images/img_pngwing3.png"
                              alt="pngwingThree"
                            />
                            <Text
                              className="ml-2.5 sm:ml-[0] sm:mt-0 mt-0.5 text-white-A700 text-xl"
                              size="txtInterRegular20"
                            >
                              KOLHAPUR
                            </Text>
                          </div>
                          <Line className="bg-white-A700 h-px w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-500_02 h-[189px] ml-[72px] mt-[-39px] w-px z-[1]" />
                </div>
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col gap-3 justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[79px] items-start justify-start mr-[25px] w-[98%] md:w-full">
                      <div className="bg-black-900_7f flex flex-col items-center justify-end mb-[37px] p-3.5 rounded-[41px]">
                        <Text
                          className="mt-1 text-white-A700 text-xl"
                          size="txtInterMedium20"
                        >
                          06 JAN
                        </Text>
                        <Text
                          className="mt-[3px] text-[17px] text-gray-700"
                          size="txtInterMedium17"
                        >
                          2024
                        </Text>
                      </div>
                      <Text
                        className="sm:text-[35px] md:text-[41px] text-[45px] text-white-A700 w-[76%] sm:w-full"
                        size="txtInterBold45"
                      >
                        Effective Time Management Techniques for Students{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[234px] w-[76%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[59%] md:w-full">
                        <Img
                          className="h-5 md:h-auto sm:mt-0 mt-[5px] object-cover w-5"
                          src="images/img_pngwing2.png"
                          alt="pngwingTwo"
                        />
                        <Text
                          className="sm:ml-[0] ml-[9px] sm:mt-0 mt-0.5 text-white-A700 text-xl"
                          size="txtInterRegular20"
                        >
                          10:00 AM - 3.00PM{" "}
                        </Text>
                        <Img
                          className="h-7 md:h-auto sm:ml-[0] ml-[71px] object-cover w-[5%] sm:w-full"
                          src="images/img_pngwing3.png"
                          alt="pngwingThree"
                        />
                        <Text
                          className="ml-2.5 sm:ml-[0] sm:mt-0 mt-0.5 text-white-A700 text-xl"
                          size="txtInterRegular20"
                        >
                          KOLHAPUR
                        </Text>
                      </div>
                      <Line className="bg-white-A700 h-px w-full" />
                    </div>
                  </div>
                </div>
              </List>
              <Img
                className="h-10 md:ml-[0] ml-[784px]"
                src="images/img_arrow.svg"
                alt="arrow"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-100 flex flex-col items-center justify-end mt-[131px] p-[18px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1329px] mt-[61px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col justify-start w-1/2 md:w-full">
              <Text
                className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                size="txtInterSemiBold35"
              >
                Featured Teachers
              </Text>
              <Line className="bg-amber-500 h-[3px] mr-[502px] mt-[7px] w-[24%]" />
              <Text
                className="ml-2 md:ml-[0] mt-[82px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900"
                size="txtInterBold50Black900"
              >
                Meet Our Mentors
              </Text>
              <Text
                className="md:ml-[0] ml-[27px] mt-[47px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[96%] sm:w-full"
                size="txtInterLight25"
              >
                Lorem ipsum gravida nibh vel velit auctor aliquetn
                sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh
                id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
                . Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                mauris.auci elit cons equat ipsutis sem nibh id elit. Duis sed
                odio sit amet nibh vulputate cursus a sit amet . Morbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt mauris
              </Text>
              <Button
                className="cursor-pointer font-light leading-[normal] min-w-[278px] md:ml-[0] ml-[61px] mr-[313px] mt-24 rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                color="amber_500"
                size="2xl"
                variant="fill"
              >
                Career with Us{" "}
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[84px] justify-start md:mt-0 mt-[163px] w-[46%] md:w-full">
              <div className="flex flex-col gap-[29px] justify-start mr-[19px] w-[97%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-end justify-start mr-[290px] p-[9px] rounded-[15px] w-1/2 md:w-full">
                  <Img
                    className="h-[215px]"
                    src="images/img_teacherstudentpana.svg"
                    alt="teacherstudentp"
                  />
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] mb-[22px] min-w-[200px] mr-[33px] mt-[5px] text-[22px] text-center sm:text-lg md:text-xl"
                    shape="square"
                    color="blue_gray_100"
                    size="md"
                    variant="fill"
                  >
                    Karan Yadav
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col justify-start md:ml-[0] ml-[290px] p-[15px] rounded-[15px] w-1/2 md:w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[55px] w-[66%] md:w-full">
                    <div className="md:h-[108px] h-[215px] relative w-full">
                      <div className="md:h-[108px] h-[215px] m-auto w-full">
                        <div className="md:h-[108px] h-[215px] m-auto w-full">
                          <div className="absolute md:h-[108px] h-[215px] inset-y-[0] my-auto right-[0] w-[94%]">
                            <div className="md:h-[108px] h-[215px] m-auto w-full">
                              <div className="md:h-[108px] h-[215px] m-auto w-full">
                                <div className="md:h-[108px] h-[215px] m-auto w-full">
                                  <div className="md:h-[108px] h-[215px] m-auto w-full">
                                    <div className="flex flex-col m-auto w-full">
                                      <div className="h-[108px] mx-auto w-full">
                                        <div className="h-[108px] m-auto w-full">
                                          <div className="h-[108px] m-auto w-full">
                                            <div className="h-[108px] m-auto w-full">
                                              <div className="h-[108px] m-auto w-full">
                                                <div className="h-[108px] m-auto w-full">
                                                  <div className="flex flex-row gap-9 h-full items-start justify-between m-auto w-full">
                                                    <div className="h-[108px] relative w-[61%]">
                                                      <div className="absolute flex flex-row gap-[17px] h-full inset-y-[0] items-center justify-between my-auto right-[0] w-[94%]">
                                                        <div className="h-3.5 relative w-[18%]">
                                                          <Img
                                                            className="absolute h-3.5 inset-y-[0] left-[0] my-auto w-[15px]"
                                                            src="images/img_user.svg"
                                                            alt="user"
                                                          />
                                                          <Img
                                                            className="absolute h-2 right-[0] top-[0]"
                                                            src="images/img_vector_deep_orange_300_01.svg"
                                                            alt="vector"
                                                          />
                                                        </div>
                                                        <Img
                                                          className="h-[108px]"
                                                          src="images/img_vector_blue_gray_900_108x56.svg"
                                                          alt="vector_One"
                                                        />
                                                      </div>
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[73px] items-start justify-start left-[0] p-2 w-[45%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group93.svg')",
                                                        }}
                                                      >
                                                        <Img
                                                          className="h-1.5 mb-[43px] mt-1.5"
                                                          src="images/img_contrast.svg"
                                                          alt="contrast"
                                                        />
                                                      </div>
                                                    </div>
                                                    <Img
                                                      className="h-[31px] mt-[58px]"
                                                      src="images/img_user_deep_orange_200_01.svg"
                                                      alt="user_One"
                                                    />
                                                  </div>
                                                  <Img
                                                    className="absolute h-[15px] inset-y-[0] my-auto right-[1%]"
                                                    src="images/img_videocamera.svg"
                                                    alt="videocamera"
                                                  />
                                                </div>
                                                <Img
                                                  className="absolute bottom-[23%] h-6 right-[6%]"
                                                  src="images/img_user_deep_orange_200_01_24x16.svg"
                                                  alt="user_Two"
                                                />
                                              </div>
                                              <Img
                                                className="absolute bottom-[23%] h-[25px] right-[6%]"
                                                src="images/img_user_deep_orange_300_02.svg"
                                                alt="user_Three"
                                              />
                                            </div>
                                            <Img
                                              className="absolute bottom-[34%] h-[11px] right-[0] w-2.5"
                                              src="images/img_settings.svg"
                                              alt="settings"
                                            />
                                          </div>
                                          <Img
                                            className="absolute bottom-[29%] h-[11px] right-[0]"
                                            src="images/img_settings_deep_orange_300_02.svg"
                                            alt="settings_One"
                                          />
                                        </div>
                                        <Img
                                          className="absolute bottom-[24%] h-[7px] right-[2%] w-2"
                                          src="images/img_settings_deep_orange_300_02_7x8.svg"
                                          alt="settings_Two"
                                        />
                                      </div>
                                      <Img
                                        className="h-1.5 ml-auto mr-0.5 mt-[-NaNpx] z-[1]"
                                        src="images/img_settings_deep_orange_300_02_6x8.svg"
                                        alt="settings_Three"
                                      />
                                      <div
                                        className="bg-cover bg-no-repeat flex h-[133px] md:h-[81px] justify-end mt-[-26.59px] mx-auto p-0.5 w-[82%] z-[1]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group89.svg')",
                                        }}
                                      >
                                        <div className="md:h-[107px] h-[120px] mt-auto mx-auto w-[87%]">
                                          <div className="md:h-[107px] h-[120px] m-auto w-full">
                                            <div className="md:h-[107px] h-[120px] m-auto w-full">
                                              <div className="md:h-[107px] h-[120px] m-auto w-full">
                                                <div className="md:h-[107px] h-[120px] m-auto w-full">
                                                  <div className="md:h-[107px] h-[120px] m-auto w-full">
                                                    <div className="md:h-[107px] h-[120px] m-auto w-full">
                                                      <div className="md:h-[107px] h-[120px] m-auto w-full">
                                                        <div className="md:h-[107px] h-[120px] m-auto w-full">
                                                          <div className="md:h-[107px] h-[120px] m-auto w-full">
                                                            <div className="absolute bottom-[0] h-[107px] right-[0] w-[107px]">
                                                              <div className="absolute flex flex-row gap-[11px] h-full inset-y-[0] items-start justify-between left-[0] my-auto w-[96%]">
                                                                <div className="md:h-[103px] h-[107px] relative w-[82%]">
                                                                  <div className="md:h-[103px] h-[107px] m-auto w-full">
                                                                    <div className="flex flex-col gap-11 h-full justify-start m-auto w-full">
                                                                      <div className="md:h-11 h-[47px] relative w-full">
                                                                        <div className="absolute bottom-[0] h-11 inset-x-[0] mx-auto w-full">
                                                                          <div className="h-11 m-auto w-full">
                                                                            <div className="absolute flex flex-row h-full inset-[0] items-start justify-between m-auto w-full">
                                                                              <Line className="bg-gray-50 h-4 mt-7 w-[5px]" />
                                                                              <div className="md:h-11 h-[33px] mb-[11px] relative w-[34px]">
                                                                                <div className="flex flex-row gap-2.5 h-full items-end justify-between m-auto w-[34px]">
                                                                                  <div className="h-[33px] relative w-[21%]">
                                                                                    <Img
                                                                                      className="h-[7px] mb-[-2.38px] z-[1]"
                                                                                      src="images/img_vector_blue_gray_900_7x3.svg"
                                                                                      alt="vector_Three"
                                                                                    />
                                                                                    <Img
                                                                                      className="h-7 mt-auto mx-auto"
                                                                                      src="images/img_settings_blue_gray_900.svg"
                                                                                      alt="settings_Four"
                                                                                    />
                                                                                  </div>
                                                                                  <div className="flex flex-row gap-[9px] h-4 items-start justify-between mb-1 mt-[11px] w-4">
                                                                                    <Line className="bg-gray-50 h-4 w-[5px]" />
                                                                                    <Img
                                                                                      className="h-3 mt-1"
                                                                                      src="images/img_vector_blue_gray_900_12x1.svg"
                                                                                      alt="vector_Five"
                                                                                    />
                                                                                  </div>
                                                                                </div>
                                                                                <div className="absolute bottom-[21%] flex flex-col inset-x-[0] items-start justify-start mx-auto w-[30%]">
                                                                                  <div className="flex flex-row items-start justify-evenly w-2.5 md:w-full">
                                                                                    <Img
                                                                                      className="h-1.5 w-1.5"
                                                                                      src="images/img_settings_gray_50.svg"
                                                                                      alt="settings_Five"
                                                                                    />
                                                                                    <Img
                                                                                      className="h-2"
                                                                                      src="images/img_vector_gray_50.svg"
                                                                                      alt="vector_Six"
                                                                                    />
                                                                                  </div>
                                                                                  <Img
                                                                                    className="h-0.5"
                                                                                    src="images/img_vector_gray_50_2x7.svg"
                                                                                    alt="vector_Seven"
                                                                                  />
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <Img
                                                                              className="absolute bottom-[14%] h-2 left-[0]"
                                                                              src="images/img_vector_gray_50_2x7.svg"
                                                                              alt="vector_Eight"
                                                                            />
                                                                            <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[2%] w-[9%]">
                                                                              <Img
                                                                                className="h-1.5 w-1.5"
                                                                                src="images/img_settings_gray_50.svg"
                                                                                alt="settings_Six"
                                                                              />
                                                                              <Img
                                                                                className="h-0.5 mt-1"
                                                                                src="images/img_vector_gray_50.svg"
                                                                                alt="vector_Nine"
                                                                              />
                                                                            </div>
                                                                            <Img
                                                                              className="absolute h-[15px] left-[39%] top-[0]"
                                                                              src="images/img_settings_gray_50_15x7.svg"
                                                                              alt="settings_Seven"
                                                                            />
                                                                          </div>
                                                                          <Img
                                                                            className="absolute h-1 left-[35%] top-[11%]"
                                                                            src="images/img_vector_gray_50_2x7.svg"
                                                                            alt="vector_Ten"
                                                                          />
                                                                        </div>
                                                                        <Img
                                                                          className="absolute h-[9px] left-[42%] top-[0]"
                                                                          src="images/img_vector_gray_50_9x2.svg"
                                                                          alt="vector_Eleven"
                                                                        />
                                                                        <Img
                                                                          className="absolute h-[7px] inset-x-[0] mx-auto top-[15%]"
                                                                          src="images/img_vector_gray_50.svg"
                                                                          alt="vector_Twelve"
                                                                        />
                                                                      </div>
                                                                      <Img
                                                                        className="h-[15px] ml-2 md:ml-[0]"
                                                                        src="images/img_settings_15x7.svg"
                                                                        alt="settings_Eight"
                                                                      />
                                                                    </div>
                                                                    <Img
                                                                      className="absolute bottom-[6%] h-1 left-[7%]"
                                                                      src="images/img_vector_gray_50_2x7.svg"
                                                                      alt="vector_Thirteen"
                                                                    />
                                                                  </div>
                                                                  <div className="absolute bottom-[3%] flex flex-row items-start justify-center left-[13%] w-[10%]">
                                                                    <Img
                                                                      className="h-[9px] mb-1.5"
                                                                      src="images/img_vector_gray_50_9x2.svg"
                                                                      alt="vector_Fourteen"
                                                                    />
                                                                    <Img
                                                                      className="h-[7px] mt-[7px]"
                                                                      src="images/img_vector_gray_50.svg"
                                                                      alt="vector_Fifteen"
                                                                    />
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  className="bg-cover bg-no-repeat flex flex-col h-3.5 items-start justify-start mt-0.5 pb-0.5 px-0.5 w-[8%]"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_settings_15x7.svg')",
                                                                  }}
                                                                >
                                                                  <Img
                                                                    className="h-[9px] mb-[3px]"
                                                                    src="images/img_vector_gray_50_2x7.svg"
                                                                    alt="vector_Sixteen"
                                                                  />
                                                                </div>
                                                              </div>
                                                              <Img
                                                                className="absolute h-[5px] right-[0] top-[4%]"
                                                                src="images/img_vector_gray_50_5x7.svg"
                                                                alt="vector_Seventeen"
                                                              />
                                                              <Img
                                                                className="absolute h-0.5 right-[2%] top-[13%]"
                                                                src="images/img_vector_gray_50.svg"
                                                                alt="vector_Eighteen"
                                                              />
                                                              <Img
                                                                className="absolute h-[7px] left-[3%] top-[16%]"
                                                                src="images/img_vector_gray_50_7x2.svg"
                                                                alt="vector_Nineteen"
                                                              />
                                                              <div className="absolute flex flex-row gap-3 items-end justify-between right-[8%] top-[26%] w-1/5">
                                                                <Img
                                                                  className="h-[7px] mt-[5px]"
                                                                  src="images/img_vector_gray_50_7x2.svg"
                                                                  alt="vector_Twenty"
                                                                />
                                                                <Img
                                                                  className="h-2 mb-1 w-[7px]"
                                                                  src="images/img_settings_gray_50_8x7.svg"
                                                                  alt="settings_Nine"
                                                                />
                                                              </div>
                                                              <Img
                                                                className="absolute bottom-[2%] h-2 right-[42%] w-[7px]"
                                                                src="images/img_settings_8x7.svg"
                                                                alt="settings_Ten"
                                                              />
                                                            </div>
                                                            <div className="absolute flex flex-row items-start justify-between right-[2%] top-[0] w-[55%]">
                                                              <Img
                                                                className="h-1.5 mt-1"
                                                                src="images/img_vector_gray_50_7x2.svg"
                                                                alt="vector_TwentyOne"
                                                              />
                                                              <Img
                                                                className="h-[7px] mb-0.5"
                                                                src="images/img_vector_gray_50_7x2.svg"
                                                                alt="vector_TwentyTwo"
                                                              />
                                                            </div>
                                                            <Img
                                                              className="absolute bottom-[2%] h-[5px] left-[0] w-[5px]"
                                                              src="images/img_vector_gray_50_7x2.svg"
                                                              alt="vector_TwentyThree"
                                                            />
                                                          </div>
                                                          <div className="absolute bottom-[3%] flex flex-col justify-start left-[2%] w-[59%]">
                                                            <Img
                                                              className="h-2 md:ml-[0] ml-[19px] w-[7px]"
                                                              src="images/img_settings_1.svg"
                                                              alt="settings_Eleven"
                                                            />
                                                            <div
                                                              className="bg-cover bg-no-repeat flex flex-col h-[79px] items-center justify-start mt-0.5 w-full"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group96.svg')",
                                                              }}
                                                            >
                                                              <Img
                                                                className="h-[79px]"
                                                                src="images/img_television_black_900.svg"
                                                                alt="television_One"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div
                                                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[61px] items-center justify-start right-[31%] w-[28%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group97.svg')",
                                                          }}
                                                        >
                                                          <div
                                                            className="bg-cover bg-no-repeat flex flex-col h-[61px] items-end justify-start p-[7px] w-full"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group101.svg')",
                                                            }}
                                                          >
                                                            <Img
                                                              className="h-[39px] my-[3px]"
                                                              src="images/img_checkmark.svg"
                                                              alt="checkmark"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <Img
                                                        className="absolute h-[25px] inset-x-[0] mx-auto top-[28%]"
                                                        src="images/img_contrast_gray_300.svg"
                                                        alt="contrast_One"
                                                      />
                                                    </div>
                                                    <Img
                                                      className="absolute h-[25px] left-1/4 top-[30%]"
                                                      src="images/img_videocamera.svg"
                                                      alt="videocamera_One"
                                                    />
                                                  </div>
                                                  <div
                                                    className="absolute bg-cover bg-no-repeat bottom-[29%] h-[33px] left-[20%] p-0.5 w-[32%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group98.svg')",
                                                    }}
                                                  >
                                                    <Img
                                                      className="h-[3px] mb-[-1.01px] ml-auto mr-3 mt-[9px] w-[3px] z-[1]"
                                                      src="images/img_vector_white_a700_3x3.svg"
                                                      alt="vector_TwentyFive"
                                                    />
                                                    <Img
                                                      className="h-[11px] mb-[5px] mt-auto"
                                                      src="images/img_vector.svg"
                                                      alt="vector_TwentyFour"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="absolute bottom-1/4 flex flex-col gap-[5px] justify-start left-[18%] w-2/5">
                                                  <Img
                                                    className="h-[18px] md:ml-[0] ml-[30px]"
                                                    src="images/img_settings_deep_orange_300_01.svg"
                                                    alt="settings_Twelve"
                                                  />
                                                  <Img
                                                    className="h-[13px] mr-3.5"
                                                    src="images/img_vector_white_a700.svg"
                                                    alt="vector_TwentySix"
                                                  />
                                                </div>
                                              </div>
                                              <Img
                                                className="absolute bottom-[23%] h-3 left-[16%]"
                                                src="images/img_vector_white_a700.svg"
                                                alt="vector_TwentySeven"
                                              />
                                            </div>
                                            <Img
                                              className="absolute bottom-[21%] h-3 left-[15%]"
                                              src="images/img_vector_white_a700.svg"
                                              alt="vector_TwentyEight"
                                            />
                                          </div>
                                          <Img
                                            className="absolute bottom-[6%] h-[26px] left-[20%]"
                                            src="images/img_thumbsup.svg"
                                            alt="thumbsup"
                                          />
                                        </div>
                                        <div
                                          className="absolute bg-cover bg-no-repeat bottom-[7%] flex flex-col h-[26px] items-end justify-start left-[24%] w-[32%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group99.svg')",
                                          }}
                                        >
                                          <div className="flex flex-col items-start justify-start mt-3 w-2/5 md:w-full">
                                            <Img
                                              className="h-[3px]"
                                              src="images/img_vector_deep_orange_300_02_3x15.svg"
                                              alt="vector_TwentyNine"
                                            />
                                            <Img
                                              className="h-[3px]"
                                              src="images/img_vector_deep_orange_300_02_3x14.svg"
                                              alt="vector_Thirty"
                                            />
                                            <Img
                                              className="h-0.5"
                                              src="images/img_vector_deep_orange_300_02_2x10.svg"
                                              alt="vector_ThirtyOne"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col h-[90px] items-start justify-center left-[19%] p-[3px] top-[6%] w-[29%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group92.svg')",
                                      }}
                                    >
                                      <div className="flex flex-row gap-[11px] items-start justify-end md:ml-[0] ml-[11px] mt-3 w-[67%] md:w-full">
                                        <Img
                                          className="h-[3px]"
                                          src="images/img_vector_blue_gray_900_12x1.svg"
                                          alt="vector_ThirtyTwo"
                                        />
                                        <Img
                                          className="h-0.5"
                                          src="images/img_vector_blue_gray_900_12x1.svg"
                                          alt="vector_ThirtyThree"
                                        />
                                      </div>
                                      <div className="h-11 mb-[22px] ml-3 md:ml-[0] relative w-[67%]">
                                        <div className="h-11 md:h-[22px] m-auto w-full">
                                          <div className="absolute h-4 right-[0] top-[0] w-[47%]">
                                            <div className="absolute flex flex-col h-1.5 items-center justify-start right-[0] top-[0] w-1.5">
                                              <div className="flex flex-col h-1.5 items-start justify-start w-1.5">
                                                <Img
                                                  className="h-0.5"
                                                  src="images/img_vector_blue_gray_900_12x1.svg"
                                                  alt="vector_ThirtyFour"
                                                />
                                                <Img
                                                  className="h-[3px] w-[3px]"
                                                  src="images/img_vector_blue_gray_900_3x3.svg"
                                                  alt="vector_ThirtyFive"
                                                />
                                              </div>
                                            </div>
                                            <Img
                                              className="absolute h-4 inset-y-[0] left-[0] my-auto"
                                              src="images/img_arrowright_blue_gray_900.svg"
                                              alt="arrowright_One"
                                            />
                                          </div>
                                          <div className="absolute flex flex-col h-1.5 items-center justify-start left-[0] top-[0] w-1.5">
                                            <Img
                                              className="h-0.5"
                                              src="images/img_vector_blue_gray_900_12x1.svg"
                                              alt="vector_ThirtySix"
                                            />
                                            <Img
                                              className="h-[3px] w-[3px]"
                                              src="images/img_vector_blue_gray_900_3x3.svg"
                                              alt="vector_ThirtySeven"
                                            />
                                          </div>
                                          <div className="absolute bottom-[0] flex flex-col gap-[11px] items-end justify-start left-[0] w-[70%]">
                                            <Img
                                              className="h-1 w-[5px]"
                                              src="images/img_vector_deep_orange_300_02_4x5.svg"
                                              alt="vector_ThirtyEight"
                                            />
                                            <Img
                                              className="h-[7px]"
                                              src="images/img_settings_deep_orange_300_02_7x18.svg"
                                              alt="settings_Thirteen"
                                            />
                                          </div>
                                        </div>
                                        <Img
                                          className="absolute h-[5px] inset-x-[0] mx-auto top-[41%] w-1.5"
                                          src="images/img_vector_blue_gray_900_12x1.svg"
                                          alt="vector_ThirtyNine"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute h-[21px] left-[30%] top-[3%]"
                                    src="images/img_group93.svg"
                                    alt="user_Four"
                                  />
                                </div>
                                <div
                                  className="absolute bg-cover bg-no-repeat h-[108px] md:h-[81px] left-[5%] top-[3%] w-[29%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group90.svg')",
                                  }}
                                >
                                  <div className="absolute md:h-20 h-[102px] inset-y-[0] my-auto right-[7%] w-[68%]">
                                    <Img
                                      className="absolute h-8 right-[0] top-[6%]"
                                      src="images/img_vector_blue_gray_700.svg"
                                      alt="vector_Forty"
                                    />
                                    <Img
                                      className="absolute h-[7px] right-[6%] top-[0]"
                                      src="images/img_settings_blue_gray_700.svg"
                                      alt="settings_Fourteen"
                                    />
                                    <Img
                                      className="absolute bottom-[0] h-20 left-[0]"
                                      src="images/img_favorite.svg"
                                      alt="favorite"
                                    />
                                  </div>
                                  <Img
                                    className="absolute bottom-[0] h-[81px] right-[17%]"
                                    src="images/img_favorite_blue_gray_700.svg"
                                    alt="favorite_One"
                                  />
                                </div>
                              </div>
                              <Img
                                className="absolute h-2.5 inset-x-[0] mx-auto top-[9%]"
                                src="images/img_vector_blue_gray_700_10x17.svg"
                                alt="vector_FortyOne"
                              />
                            </div>
                            <div className="absolute flex flex-col gap-[11px] items-end justify-start left-[2%] top-[2%] w-[53%]">
                              <Img
                                className="h-3.5"
                                src="images/img_vector_blue_gray_700_14x34.svg"
                                alt="vector_FortyTwo"
                              />
                              <div className="flex flex-row items-start justify-between w-full">
                                <Img
                                  className="h-[61px] mt-2.5"
                                  src="images/img_vector_blue_gray_700_61x24.svg"
                                  alt="vector_FortyThree"
                                />
                                <Img
                                  className="h-[57px]"
                                  src="images/img_favorite_blue_gray_700_57x9.svg"
                                  alt="favorite_Two"
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[9%] flex flex-col gap-2 h-[104px] items-start justify-center left-[0] p-2 w-[39%]"
                            style={{
                              backgroundImage: "url('images/img_group91.svg')",
                            }}
                          >
                            <div className="h-4 md:h-[37px] ml-1 md:ml-[0] mt-[21px] relative w-1/5">
                              <Line className="absolute bg-gray-50 h-4 inset-y-[0] my-auto right-[0] w-[5px]" />
                              <Img
                                className="absolute h-2 right-[0] top-[0]"
                                src="images/img_vector_gray_50.svg"
                                alt="vector_FortyFive"
                              />
                              <Img
                                className="absolute h-1.5 left-[0] top-[0] w-1.5"
                                src="images/img_settings_gray_50.svg"
                                alt="settings_Fifteen"
                              />
                              <Img
                                className="absolute bottom-[13%] h-0.5 left-[0]"
                                src="images/img_vector_gray_50_2x7.svg"
                                alt="vector_FortySix"
                              />
                            </div>
                            <Img
                              className="h-2 mb-8 w-[7px]"
                              src="images/img_settings_2.svg"
                              alt="settings_Sixteen"
                            />
                          </div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[9%] flex flex-row gap-[7px] h-10 items-end justify-center left-[6%] p-[9px] w-[33%]"
                          style={{
                            backgroundImage: "url('images/img_group95.svg')",
                          }}
                        >
                          <div className="h-3.5 md:h-[13px] mb-[7px] ml-0.5 relative w-[46%]">
                            <Img
                              className="absolute bottom-[21%] h-0.5 right-[0]"
                              src="images/img_vector_gray_50_2x15.svg"
                              alt="vector_FortySeven"
                            />
                            <Img
                              className="absolute bottom-[0] h-[5px] left-[29%] w-1.5"
                              src="images/img_vector_gray_50_2x7.svg"
                              alt="vector_FortyEight"
                            />
                            <Img
                              className="absolute h-[3px] left-[0] top-[29%]"
                              src="images/img_vector_gray_50_9x2.svg"
                              alt="vector_FortyNine"
                            />
                            <Img
                              className="absolute h-1.5 right-[18%] top-[0] w-[5px]"
                              src="images/img_vector_gray_50_6x5.svg"
                              alt="vector_Fifty"
                            />
                          </div>
                          <Img
                            className="h-[7px] mb-1 mr-[7px] mt-[9px]"
                            src="images/img_vector_gray_50_7x2.svg"
                            alt="vector_FiftyOne"
                          />
                        </div>
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[27%] flex flex-col h-10 items-start justify-start left-[15%] w-[8%]"
                        style={{
                          backgroundImage: "url('images/img_group94.svg')",
                        }}
                      >
                        <Img
                          className="h-[7px] mb-[29px] ml-0.5 md:ml-[0]"
                          src="images/img_vector_gray_50_7x2.svg"
                          alt="vector_FiftyTwo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-100 flex flex-col items-center justify-end mb-[15px] md:ml-[0] ml-[33px] mr-[27px] p-1">
                    <Text
                      className="mt-[3px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                      size="txtInterSemiBold22"
                    >
                      Sanchita Ghatge{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-amber-500 flex flex-col items-center justify-start md:ml-[0] ml-[559px] p-[7px] rounded-[5px] w-[7%] md:w-full">
                <Img
                  className="common-pointer h-[15px] my-2.5"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                  onClick={() => navigate("/")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900_01 flex flex-col items-center justify-start mt-[164px] md:pl-10 sm:pl-5 pl-[41px] py-[41px] w-full">
          <div className="flex flex-col justify-start max-w-[1398px] mb-[105px] mx-auto w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[78%] md:w-full">
              <div className="flex relative w-[23%] sm:w-full">
                <Img
                  className="h-[120px] my-auto object-cover w-[120px]"
                  src="images/img_arivulogo1removebgpreview_120x120.png"
                  alt="arivulogo1remov_One"
                />
                <Text
                  className="ml-[-3.39px] my-auto sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center z-[1]"
                  size="txtInterBold40"
                >
                  <span className="text-indigo-A400 font-inter font-bold">
                    A
                  </span>
                  <span className="text-blue-A200 font-inter font-bold">R</span>
                  <span className="text-amber-800 font-inter font-bold">I</span>
                  <span className="text-purple-500 font-inter font-bold">
                    V
                  </span>
                  <span className="text-purple-500_01 font-inter font-bold">
                    U
                  </span>
                </Text>
              </div>
              <Text
                className="sm:mt-0 mt-[62px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                size="txtInterSemiBold26"
              >
                Contact us
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="leading-[44.00px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                  size="txtInterRegular26WhiteA700"
                >
                  <>
                    &quot;ARIVU is revolutionizing education accessibility,
                    breaking barriers for all learners. Embrace the evolution,
                    educate yourself on our expansive learning platform.&quot;
                  </>
                </Text>
                <div className="flex flex-col gap-[43px] items-start justify-start">
                  <div className="flex sm:flex-col flex-row gap-7 items-start justify-start w-full">
                    <Img
                      className="h-10 sm:mt-0 mt-[7px] w-10"
                      src="images/img_home.svg"
                      alt="home"
                    />
                    <Text
                      className="sm:flex-1 leading-[44.00px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-[88%] sm:w-full"
                      size="txtInterMedium22"
                    >
                      D. Y. PATIL COLLEGE OF ENGINEERING & TECHNOLOGY, KASABA
                      BAWADA ,MAHARASHTRA,KOLHAPUR
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[27px] items-end justify-start md:ml-[0] ml-[5px] w-[84%] md:w-full">
                    <Img
                      className="h-10 w-10"
                      src="images/img_mail_white_a700.svg"
                      alt="mail"
                    />
                    <Text
                      className="sm:mt-0 mt-2 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtInterMedium24"
                    >
                      sourabhbandgar385@gmail.com
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[3px] w-[78%] md:w-full">
                <Img
                  className="h-[50px] mb-3 w-[50px]"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <Img
                  className="h-[50px] mb-[9px] md:ml-[0] ml-[45px] md:mt-0 mt-[3px] w-[50px]"
                  src="images/img_twitter.svg"
                  alt="twitter"
                />
                <Img
                  className="h-[50px] mb-[9px] md:ml-[0] ml-[49px] md:mt-0 mt-[3px] w-[50px]"
                  src="images/img_google.svg"
                  alt="google"
                />
                <Img
                  className="h-[50px] mb-[9px] md:ml-[0] ml-[49px] md:mt-0 mt-[3px] w-[50px]"
                  src="images/img_instagram.svg"
                  alt="instagram"
                />
                <Img
                  className="h-10 md:ml-[0] ml-[519px] md:mt-0 mt-[22px] w-10"
                  src="images/img_telephone.svg"
                  alt="telephone"
                />
                <Text
                  className="ml-8 md:ml-[0] md:mt-0 mt-[26px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterMedium24"
                >
                  7972826239
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
