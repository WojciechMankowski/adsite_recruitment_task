import React from "react";
import Slider from "react-slick";
import { data_imgs } from "../helpers/data_imgs";

const SliderComponent = ({ isDesktop }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? 2 : 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const imgElements = data_imgs.map((img) => (
    <div className="p-4" key={img.id}>
      <img
        src={img.img}
        alt={`Slide ${img.id}`}
        className="w-full h-64 object-cover"
      />
    </div>
  ));

  return (
    <div className="h-screen w-full overflow-visible">
      <Slider {...sliderSettings}>{imgElements}</Slider>
    </div>
  );
};

export default SliderComponent;
