import React from "react";
import SectionFive from "../../Home/sectionFive/SectionFive";
import Courses from "../courses/Courses";
import SectionOne from "../sectionOne/SectionOne";

const CoursesHome = () => {
  return (
    <div>
      <SectionOne />
      <Courses />
      <SectionFive />
    </div>
  );
};

export default CoursesHome;
