import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    gray_100_02: "bg-gray-100_02 text-gray-500_05",
    blue_gray_100: "bg-blue_gray-100",
    white_A700: "bg-white-A700 shadow-bs text-black-900",
  },
};
const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[12px]",
  square: "rounded-none",
};
const sizes = {
  xs: "pb-[3px] pr-[3px] pt-1",
  sm: "pb-1.5 pt-[11px] px-1.5",
  md: "p-3",
  lg: "pb-[22px] pt-[21px] sm:px-5 px-[21px]",
  xl: "pb-[19px] pt-6 px-[19px]",
  "2xl": "pb-4 pt-[27px] px-4",
};

const Input = React.forwardRef(
  (
    {
      field,
      wrapClassName = "",
      className = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      shape = "",
      size = "sm",
      variant = "fill",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            {...field}
            className={`${className} bg-transparent border-0`}
            type={type}
            // onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {}
        {restProps?.form?.touched?.[field.name] && restProps?.form?.errors?.[field.name] && <ErrorMessage error={restProps.form.errors[field.name]} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["circle", "round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_100_02", "blue_gray_100", "white_A700"]),
};

export { Input };
