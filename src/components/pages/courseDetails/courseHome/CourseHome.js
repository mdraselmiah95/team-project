import React from "react";
import CourseBanner from "../courseBanner/CourseBanner";
import CourseBody from "../courseBody/CourseBody";
import "./CourseHome.css";

const CourseHome = () => {
  return (
    <div className="responsive">
      <CourseBanner />
      <CourseBody />
    </div>
  );
};

export default CourseHome;
