'use client'

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[2520px] mx-auto xl:px-10 px-5 md:px-10 sm:px-4">{children}</div>;
};
export default Container;
