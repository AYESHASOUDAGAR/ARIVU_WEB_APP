import React from "react";

import { Button, Img, Text } from "components";

const DashboardRowperson = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-5 items-center justify-center rounded-[50%] w-5"
          shape="circle"
          color="blue_gray_100"
          size="xs"
          variant="fill"
        >
          <Img className="h-[15px]" src="images/img_person.svg" alt="person" />
        </Button>
        <div className="flex flex-col gap-1 items-start justify-start w-full">
          <Text
            className="capitalize text-[10px] text-gray-900_02 w-full"
            size="txtInterMedium10"
          >
            {props?.username}
          </Text>
          <Text
            className="capitalize text-[8px] text-gray-700_01 w-full"
            size="txtInterRegular8Gray70001"
          >
            {props?.userrole}
          </Text>
        </div>
        <Button
          className="!text-white-A700 capitalize cursor-pointer font-inter font-medium leading-[normal] min-w-[41px] rounded-lg text-[8px] text-center"
          color="deep_purple_A400_01"
          size="xs"
          variant="fill"
        >
          {props?.followbutton}
        </Button>
      </div>
    </>
  );
};

DashboardRowperson.defaultProps = {
  username: "Karan Yadav",
  userrole: "software Developer",
  followbutton: "Follow",
};

export default DashboardRowperson;
