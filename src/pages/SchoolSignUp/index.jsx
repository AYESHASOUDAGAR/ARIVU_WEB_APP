import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import { Field, Form, Formik } from "formik";


const SchoolsignupForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''    
  };

  const onSubmit = (values) => {
    // Handle form submission with values
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
    
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.confirmPassword)
    ) {
      errors.confirmPassword = 'Password should be of 8 or more characters with a mix of letters, numbers & symbols';
    } else if(values.password !== values.confirmPassword){
      errors.confirmPassword = 'Password & Confirm password should be same';
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
          <Text
            className="mt-[23px] text-base text-gray-700_04"
            size="txtPoppinsRegular16"
          >
            Password
          </Text>
          <Field
            name="confirmPassword"
            component={Input} 
            type="password"
            placeholder="password"
            className="!placeholder:text-blue_gray-900_01 !text-blue_gray-900_01 font-medium leading-[normal] md:text-[23px] p-0 sm:text-[21px] text-[25px] text-left w-full"
            wrapClassName="border border-black-900_59 border-solid mt-[7px] w-full"
            shape="round"
          />
          <div className="mt-[50px]">
            <Button
              type="submit"
              className="common-pointer cursor-pointer font-medium leading-[normal] mb-[34px] min-w-[250px] rounded-[32px] text-[22px] text-center sm:text-lg md:text-xl"
              color="blue_A200_01"
              size="2xl"
              variant="fill"
            >
                Sign up
            </Button>
          </div>
        </Form>
      </Formik>
  );
}

const SchoolSignUpPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="absolute left-[30px] top-[50px]">
              <Img
                  className="h-[72px] md:h-auto object-cover w-2/5"
                  src="images/img_arivulogo1removebgpreview_72x91.png"
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
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:px-5 w-[55%] md:w-full">
              <Img
                className="h-[952px] md:h-auto object-cover w-full"
                src="images/img_loginpage2.png"
                alt="loginpageTwo"
              />
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-start justify-start p-2.5 md:px-5 w-[46%] md:w-full">
              <div className="bg-blue_gray-50 flex flex-row font-dmsans gap-[9px] items-start justify-start md:ml-[0] ml-[34px] p-2 rounded-[35px] w-[49%] md:w-full">
                <Button
                  className="cursor-pointer font-medium min-w-[175px] my-0.5 rounded-[25px] text-base text-center"
                  color="white_A700"
                  size="2xl"
                  variant="fill"
                >
                  Schools/Individuals
                </Button>
                <div className="flex flex-col items-end justify-end p-[3px]">
                  <Text
                    className="mr-[3px] mt-[13px] text-base text-gray-600"
                    size="txtDMSansMedium16"
                    onClick={() => navigate("/instructorsignup")}
                  >
                    Instructor
                  </Text>
                </div>
                <Button
                  className="absolute right-[50px] top-[30px] border border-black-900 border-solid cursor-pointer font-poppins leading-[normal] min-w-[98px] rounded-lg text-base text-center"
                  color="black_900"
                  size="md"
                  variant="fill"
                  onClick={() => navigate("/schoollogin")}
                >
                  Login
                </Button>
              </div>
              <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[66px] mt-[100px] w-3/4 md:w-full">
                
                <div className="flex flex-col items-center justify-start pt-[3px]">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900_01"
                    size="txtPoppinsMedium32"
                  >
                    Sign up
                  </Text>
                </div>
                <SchoolsignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolSignUpPage;
