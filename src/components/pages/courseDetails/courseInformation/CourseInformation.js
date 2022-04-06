import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const CourseInformation = () => {
  return (
    <div>
      <div className="flex">
        <nav>
          <NavLink
            to="/courseDetails/overview"
            className="px-6 font-medium py-2 mr-1 text-white rounded-t-md bg-color-five"
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
            className="px-6 py-2 font-medium mr-1 text-white rounded-t-md bg-color-five"
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
