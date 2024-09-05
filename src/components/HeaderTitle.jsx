import React from "react";

const HeaderTitle = ({ title }) => {
  return (
    <h1 className="font-bold font-header mb-4 text-4xl
     leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
      {title}
    </h1>
  );
};

export default HeaderTitle;
