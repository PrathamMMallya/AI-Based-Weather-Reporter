import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`text-2xl font-bold mb-4 text-gray-900 dark:text-white ${className}`}
    >
      {children}
    </div>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent: React.FC<CardContentProps> = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`text-gray-700 dark:text-gray-300 ${className}`}>
      {children}
    </div>
  );
};
