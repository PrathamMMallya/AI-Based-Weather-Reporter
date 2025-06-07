import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = ({ children, className = "", ...props }) => {
  return (
    <label
      {...props}
      className={`block mb-1 font-semibold text-gray-700 dark:text-gray-200 ${className}`}
    >
      {children}
    </label>
  );
};
