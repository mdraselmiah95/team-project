import React from "react";
import SectionEight from "../../Home/sectionEight/SectionEight";
import Courses from "../courses/Courses";
import SectionFour from "../sectionFour/SectionFour";
import SectionOne from "../sectionOne/SectionOne";
import SectionTwo from "../sectionTwo/SectionTwo";

const CoursesHome = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <Courses />
      <SectionFour />
      <SectionEight />
    </div>
  );
};

export default CoursesHome;
