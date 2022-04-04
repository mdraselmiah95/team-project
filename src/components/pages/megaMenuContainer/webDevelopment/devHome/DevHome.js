import React from "react";
import Course from "../../../../Shared/course/Course";
import Banner from "../banner/Banner";
import DevBody from "../devBody/DevBody";

const DevHome = () => {
  return (
    <div>
      <Banner />
      <DevBody />
      <Course />
    </div>
  );
};

export default DevHome;
