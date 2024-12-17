import React from "react";
import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = ({ title, size = "medium", shape = "rounded-md", customStyles = "" }) => {
  // Define styles for size
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Combine base styles, size, shape, and any additional custom styles
  const buttonClass = `bg-indigo-700 text-white ${sizeClasses[size]} ${shape} ${customStyles}`;

  return (
    <button className={buttonClass}>
      {title}
    </button>
  );
};

export default Button;
