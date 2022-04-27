import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const VideoBanner = () => {
  return (
    <div className="px-4 py-8 mt-20 bg-cover md:py-24 bg-courses-bg-one justify-items-center ">
      <h2 className="text-4xl font-medium text-center md:text-5xl text-color-one ">
        Software Testing
      </h2>
      <h2 className="mt-5 text-2xl font-medium text-center text-color-three">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "",
            };
          }}
        >
          Home
        </NavLink>
        <FontAwesomeIcon icon={faAngleRight} className="mx-2" />
        <NavLink
          to="/videoEditing"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "",
            };
          }}
        >
          Software Testing
        </NavLink>
      </h2>
    </div>
  );
};

export default VideoBanner;
