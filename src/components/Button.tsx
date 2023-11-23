import React, { ComponentProps, FC } from "react";
import Loading from "./Loading";

interface Props extends ComponentProps<"button"> {
  isLoading?: boolean;
}
const Button: FC<Props> = ({ isLoading, ...rest }) => {
  return (
    <button
      disabled={isLoading}
      {...rest}
      className={`text-white focus:ring-4 w-40 flex flex-row justify-center focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${
        isLoading
          ? "bg-gray-500 gap-2"
          : "bg-gradient-to-br from-green-400 to-blue-600 "
      }`}
    >
      {isLoading && <Loading />}
      Refetch User
    </button>
  );
};

export default Button;
