import { type ButtonProps } from "@/interfaces";
import React from "react";

function Button({ size, shape }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-blue-700 hover:bg-blue-700/60 text-white  ${
        size === "small"
          ? "text-sm"
          : size === "medium"
          ? "text-base"
          : "text-lg"
      } ${shape}`}
    >
      Click me
    </button>
  );
}

export default Button;
