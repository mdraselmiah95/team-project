import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ slider, ...otherProps }) => {
  return <Slider {...otherProps}>{slider}</Slider>;
};

export default Carousel;
