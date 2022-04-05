import React from "react";
import Course from "../../../../Shared/course/Course";
import AppBanner from "../appBanner/AppBanner";
import AppBody from "../appBody/AppBody";

const AppHome = () => {
  return (
    <div>
      <AppBanner />
      <AppBody />
      <Course />
    </div>
  );
};

export default AppHome;
