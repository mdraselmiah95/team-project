import React from "react";
import Course from "../../../../Shared/course/Course";
import AppBanner from "../appBanner/AppBanner";

const AppHome = () => {
  return (
    <div>
      <AppBanner />
      <Course />
    </div>
  );
};

export default AppHome;
