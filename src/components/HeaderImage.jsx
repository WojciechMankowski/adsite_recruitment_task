import React from "react";
import HeaderImg from "../assets/IMG/header1.png";

const HeaderImage = () => (
  <div className="absolute top-0 right-0 w-full lg:w-1/2 -z-10">
    <img src={HeaderImg} alt="Samochody z Europy" className="w-full h-auto" />
  </div>
);

export default HeaderImage;
