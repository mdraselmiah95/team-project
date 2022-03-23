import Banner from "../banner/Banner";
import SectionEight from "../sectionEight/SectionEight";
import SectionFive from "../sectionFive/SectionFive";
import SectionFour from "../sectionFour/SectionFour";
import SectionFourPartTwo from "../sectionFourPartTwo/SectionFourPartTwo";
import SectionSeven from "../sectionSeven/SectionSeven";
import SectionSix from "../sectionSix/SectionSix";
import SectionThree from "../sectionThree/SectionThree";
import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <SectionThree />
      <SectionFour />
      <SectionFourPartTwo />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </>
  );
};

export default Home;
