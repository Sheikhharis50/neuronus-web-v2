import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`w-[95vw] md:w-[90vw] 2xl:w-360 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
