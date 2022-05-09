import React from "react";
import StudentsBanner from "../studentsBanner/StudentsBanner";
import StudentsBody from "../studentsBody/StudentsBody";
import "./StudentsHome.css";

const StudentsHome = () => {
  return (
    <div>
      <StudentsBanner />
      <StudentsBody />
    </div>
  );
};

export default StudentsHome;
