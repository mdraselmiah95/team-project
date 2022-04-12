import Banner from "../banner/Banner";
import SectionFive from "../sectionFive/SectionFive";
import SectionFourPartTwo from "../sectionFourPartTwo/SectionFourPartTwo";
import React from "react";
import CarouselSlider from "../carouselSlider/CarouselSlider";
import "./Home.css";
const Home = () => {
  return (
    <div className="responsive">
      <Banner />
      <CarouselSlider />
      <SectionFourPartTwo />
      <SectionFive />
    </div>
  );
};

export default Home;
