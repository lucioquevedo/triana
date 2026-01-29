import React from "react";

const SectionBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-gray-600 my-3 tracking-tight xl:text-2xl">{children}</p>
  );
};

export default SectionBody;
