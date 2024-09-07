import React from 'react';  
import { data_imgs } from "../helpers/data_imgs";
import IMg from "../assets/IMG/s (1).jpg";
const HeaderImage = () => {
  
  return (
  <div className="w-full lg:w-1/2 lg:relative">
   {data_imgs.map(img => <img src={img.img} alt=""/>)}
  </div>
);}

export default HeaderImage;
