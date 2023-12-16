import React from "react";
import { Formik, Form, Field } from 'formik';

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";


const LoginForm = () => {

  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: ''
  };

  const onSubmit = (values) => {
    // Handle form submission with values
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": values.email,
      "password": values.password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/school/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result,typeof(result))
        localStorage.setItem('user', result.user);
        localStorage.setItem('token', result.token);
      })
      .catch(error => console.log('error', error));


      console.log(values);
      
      navigate("/dashboard");
    };





  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)
    ) {
      errors.password = 'Password should be of 8 or more characters with a mix of letters, numbers & symbols';
    }    

    return errors;
  };
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form>
        <Text
          className="text-base text-gray-700_04"
          size="txtPoppinsRegular16"
        >
          Email address
        </Text>
        <Field
          name="email"
          component={Input}
          placeholder="Email"
          className="!placeholder:text-blue_gray-900_01 !text-blue_gray-900_01 font-medium leading-[normal] md:text-[23px] p-0 sm:text-[21px] text-[25px] text-left w-full"
          wrapClassName="border border-black-900_59 border-solid mt-[7px] w-full"
          shape="round"
        />
        <Text
          className="mt-[23px] text-base text-gray-700_04"
          size="txtPoppinsRegular16"
        >
          Password
        </Text>
        <Field
          name="password"
          component={Input} 
          type="password"
          placeholder="password"
          className="!placeholder:text-blue_gray-900_01 !text-blue_gray-900_01 font-medium leading-[normal] md:text-[23px] p-0 sm:text-[21px] text-[25px] text-left w-full"
          wrapClassName="border border-black-900_59 border-solid mt-[7px] w-full"
          shape="round"
        />
        <Text
          className="md:ml-[0] ml-[5px] mt-1 text-gray-700_04 text-sm"
          size="txtPoppinsRegular14"
        >
          Use 8 or more characters with a mix of letters, numbers &
          symbols
        </Text>
        <div className="mt-[50px]">                
          <Button
              type="submit"
              className="common-pointer cursor-pointer font-medium leading-[normal] mb-[34px] min-w-[250px] rounded-[32px] text-[22px] text-center sm:text-lg md:text-xl"
              color="blue_A200_01"
              size="2xl"
              variant="fill"
            >
              Login
          </Button>
        </div>
      </Form>
    </Formik>
  );
}



const SchoolLoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-dmsans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="absolute left-[30px] top-[50px]">
              <Img
                  className="h-[72px] md:h-auto object-cover w-2/5"
                  src="images/img_arivulogo1removebgpreview_72x120.png"
                  alt="arivulogo1remov"
                />
                <Text
                  className="mb-2 ml-[11px] mt-3.5 sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtInterBold40"
                >
                  <span className="text-indigo-A400 font-inter font-bold">A</span>
                  <span className="text-blue-A200 font-inter font-bold">R</span>
                  <span className="text-amber-800 font-inter font-bold">I</span>
                  <span className="text-purple-500 font-inter font-bold">V</span>
                  <span className="text-purple-500_01 font-inter font-bold">
                    U
                  </span>
                </Text>
            </div>
          </div>
          <div className="absolute flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:px-5 w-[55%] md:w-full">
              <Img
                className="md:h-auto object-cover w-full"
                src="images/img_loginpage2.png"
                alt="loginpageTwo"
              />
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-[29px] justify-start p-[7px] md:px-5 w-[46%] md:w-full">
              <div className="bg-blue_gray-50 flex md:flex-col flex-row gap-[9px] items-start justify-start md:ml-[0] ml-[41px] mr-[275px] mt-[30px] p-2 rounded-[35px] w-1/2 md:w-full">
                <Button
                  className="cursor-pointer font-medium min-w-[175px] md:mt-0 my-0.5 rounded-[25px] text-base text-center"
                  color="white_A700"
                  size="2xl"
                  variant="fill"
                >
                  Schools/Individuals
                </Button>
                <div className="flex flex-col items-end justify-end p-[3px]">
                  <Text
                    className="common-pointer mr-0.5 mt-3 text-base text-gray-600"
                    size="txtDMSansMedium16"
                    onClick={() => navigate("/instructorlogin")}
                  >
                    Instructor
                  </Text>
                </div>
                <Button
                  className="absolute right-[50px] top-[30px] border border-black-900 border-solid cursor-pointer font-poppins leading-[normal] min-w-[98px] my-4 rounded-lg text-base text-center"
                  color="white_A700"
                  size="md"
                  variant="fill"
                  onClick={() => navigate("/instructorsignup")}
                >
                  Sign up
                </Button>
              </div>
              <div className="flex flex-col font-poppins justify-start md:ml-[0] ml-[78px] mt-[63px] pt-[3px]">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsRegular32"
                >
                  Log in
                </Text>
              </div>
              <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[68px] mr-[87px] mt-[22px] w-[76%] md:w-full">
              <LoginForm />
              </div>
              <div className="font-poppins md:h-[492px] mb-[311px] md:ml-[0] ml-[20px] relative w-[57%]">
                <Text
                  className="common-pointer absolute bottom-[3%] right-[0] text-base text-blue_gray-900_01"
                  size="txtPoppinsRegular16Bluegray90001"
                  onClick={() => navigate("/schoolsignup")}
                >
                  <span className="text-blue_gray-900_01 font-poppins text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-blue_gray-900_01 font-poppins text-left font-normal">
                    Don’t have an account?{" "}
                  </span>
                  <span className="text-blue_gray-900_01 font-poppins text-left font-bold">
                    Create one here
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolLoginPage;
