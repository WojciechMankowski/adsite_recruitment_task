import React from "react";
import Slider from "react-slick";
import s1 from "../assets/IMG/s (1).jpg";
import s2 from "../assets/IMG/s (2).jpg";
import s3 from "../assets/IMG/s (3).jpg";
import s4 from "../assets/IMG/s (4).jpg";
import s5 from "../assets/IMG/s (5).jpg";
import s6 from "../assets/IMG/s (6).jpg";


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "60px",
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

const SliderComponent = () => {
  const imageArray = [s1, s2, s3, s4, s5, s6];

  const imgElements = imageArray.map((imageUrl, index) => (
    <div className="p-4" key={index}>
      <img src={imageUrl} alt={`Slide ${index}`} className="w-full h-64 object-cover" />
    </div>
  ));

  return (
    <div className="h-screen w-full overflow-visible">
      <Slider {...sliderSettings}>{imgElements}</Slider>
    </div>
  );
};

export default SliderComponent
