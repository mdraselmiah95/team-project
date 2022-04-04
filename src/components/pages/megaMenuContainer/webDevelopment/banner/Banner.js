import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-4 py-8 mt-20 bg-cover md:py-24 bg-courses-bg-one justify-items-center ">
      <h2 className="text-4xl font-medium text-center md:text-5xl text-color-one ">
        Web Development
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
          to="/webDevelopment"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "",
            };
          }}
        >
          Web Development
        </NavLink>
      </h2>
    </div>
  );
};

export default Banner;
