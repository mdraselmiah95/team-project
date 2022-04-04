import Banner from "../banner/Banner";
import SectionFive from "../sectionFive/SectionFive";
import SectionFour from "../sectionFour/SectionFour";
import SectionFourPartTwo from "../sectionFourPartTwo/SectionFourPartTwo";
import React from "react";
import CarouselSlider from "../carouselSlider/CarouselSlider";

const Home = () => {
  return (
    <>
      <Banner />
      <CarouselSlider />
      <SectionFour />
      <SectionFourPartTwo />
      <SectionFive />
    </>
  );
};

export default Home;
