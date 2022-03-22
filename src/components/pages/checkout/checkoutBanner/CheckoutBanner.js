import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const CheckoutBanner = () => {
  return (
    <div className="px-4 py-8 mt-20 bg-cover md:py-24 bg-courses-bg-one justify-items-center ">
      <h2 className="text-4xl font-medium text-center md:text-5xl text-color-one ">
        Checkout
      </h2>
      <h2 className="mt-5 text-xl font-medium text-center md:text-2xl text-color-three ">
        <NavLink
          to="/courses"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "",
            };
          }}
        >
          Enroll Now
        </NavLink>
        <FontAwesomeIcon icon={faAngleRight} className="mx-2" />
        <NavLink
          to="/cart"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "",
            };
          }}
        >
          Cart
        </NavLink>
        <FontAwesomeIcon icon={faAngleRight} className="mx-2" />
        <NavLink
          to="/checkout"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "",
            };
          }}
        >
          Checkout
        </NavLink>
      </h2>
    </div>
  );
};

export default CheckoutBanner;
