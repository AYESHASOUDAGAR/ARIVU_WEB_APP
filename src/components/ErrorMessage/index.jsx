import React from "react";

export const ErrorMessage = ({ error = "", className = "" }) => {
  return (
    error && (
      <div
        className={`text-red-500 text-left text-xs w-full mt-1 ${className}`}
      >
        {error}
      </div>
    )
  );
};
