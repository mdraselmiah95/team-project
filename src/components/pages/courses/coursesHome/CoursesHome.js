import React from "react";
// import Course from "../../../Shared/course/Course";
import Courses from "../courses/Courses";
import SectionOne from "../sectionOne/SectionOne";
import "./CoursesHome.css";

const CoursesHome = () => {
  return (
    <div>
      <SectionOne />
      <Courses />
      {/* <Course /> */}
    </div>
  );
};

export default CoursesHome;
