import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[5px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-deep_purple-A400",
    cyan_400: "bg-cyan-400 text-white-A700",
    deep_purple_A400_33: "bg-deep_purple-A400_33 text-deep_purple-A400_01",
    blue_A200_03: "bg-blue-A200_03 text-black-900",
    blue_300: "bg-blue-300 text-black-900",
    pink_A400: "bg-pink-A400 shadow-bs1",
    indigo_800: "bg-indigo-800 text-white-A700",
    pink_400: "bg-pink-400 text-white-A700",
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700",
    deep_purple_100: "bg-deep_purple-100 text-deep_purple-A200",
    yellow_100: "bg-yellow-100 text-orange-700",
    green_50: "bg-green-50 text-teal-300",
    lime_100: "bg-lime-100 text-lime-600",
    deep_purple_A400_01: "bg-deep_purple-A400_01",
    black_900: "bg-black-900 text-white-A700",
    gray_100_02: "bg-gray-100_02 shadow-bs2 text-black-900",
    blue_gray_900_03: "bg-blue_gray-900_03",
    blue_A200_01: "bg-blue-A200_01 text-white-A700",
    blue_A200: "bg-blue-A200 text-white-A700",
    blue_A700_01: "bg-blue-A700_01 text-white-A700",
    amber_500: "bg-amber-500 text-black-900",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
    amber_300: "bg-amber-300 shadow-bs text-black-900",
  },
  outline: { gray_500_01: "border border-gray-500_01 border-solid" },
};
const sizes = {
  xs: "p-0.5",
  sm: "p-[5px]",
  md: "p-2",
  lg: "py-[9px]",
  xl: "p-[11px]",
  "2xl": "p-3.5",
  "3xl": "p-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "cyan_400",
    "deep_purple_A400_33",
    "blue_A200_03",
    "blue_300",
    "pink_A400",
    "indigo_800",
    "pink_400",
    "deep_purple_A200",
    "deep_purple_100",
    "yellow_100",
    "green_50",
    "lime_100",
    "deep_purple_A400_01",
    "black_900",
    "gray_100_02",
    "blue_gray_900_03",
    "blue_A200_01",
    "blue_A200",
    "blue_A700_01",
    "amber_500",
    "blue_gray_100",
    "amber_300",
    "gray_500_01",
  ]),
};

export { Button };
