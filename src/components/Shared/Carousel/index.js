import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ slider, ...otherProps }) => {
  return (
    <Slider
      {...otherProps}
      className="px-6 py-8 overflow-hidden md:py-32 md:px-24 "
    >
      {slider}
    </Slider>
  );
};

export default Carousel;
