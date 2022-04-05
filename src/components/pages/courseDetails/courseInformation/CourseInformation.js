import React from "react";
import { Outlet, Link, Routes, Route } from "react-router-dom";
import CourseModule from "../courseModule/CourseModule";
import CoursesOverview from "../coursesOverview/CoursesOverview";

const CourseInformation = () => {
  return (
    <div>
      <nav className="flex">
        <Link
          to="/courseDetails/body/information/courseOverview"
          className="px-6 py-2 mr-1 text-white rounded-t-md bg-color-five"
        >
          Courses Overview
        </Link>

        <Link
          to="/courseDetails/body/information/courseModule"
          className="px-6 py-2 mr-1 text-white rounded-t-md bg-color-five"
        >
          Course Module
        </Link>
        <Outlet />
      </nav>
      <Routes>
        <Route path="courseOverview" element={<CoursesOverview />} />
        <Route path="courseModule" element={<CourseModule />} />
      </Routes>
    </div>
  );
};

export default CourseInformation;
