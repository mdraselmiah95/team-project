import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const CourseInformation = () => {
  return (
    <div>
      <div className="flex">
        <nav className="">
          <NavLink
            to="/courseDetails/overview"
            className="px-4 py-2 mr-1 font-medium text-white md:px-6 rounded-t-md bg-color-five"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#1E5DBC" : "",
              };
            }}
          >
            Courses Overview
          </NavLink>

          <NavLink
            to="/courseDetails/module"
            className="px-4 py-2 mr-1 font-medium text-white md:px-6 active rounded-t-md bg-color-five"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#1E5DBC" : "",
              };
            }}
          >
            Course Module
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default CourseInformation;
