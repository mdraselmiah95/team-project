import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const logo = "https://i.ibb.co/6w1KJ6d/Logo.png";
  return (
    <div className="px-4 py-5 pt-20 pb-7 bg-color-four lg:px-28">
      <div className="">
        <div className="">
          <img src={logo} alt="Footer logo" className="mx-auto mb-10" />
        </div>
        <div className="flex justify-center">
          <NavLink to="/courses">
            <h5 className="px-8 text-base cursor-pointer text-color-two">
              Courses
            </h5>
          </NavLink>
          <h5 className="px-8 text-base cursor-pointer text-color-two">
            Location
          </h5>
          <h5 className="px-8 text-base cursor-pointer text-color-two">
            Careers
          </h5>
        </div>
      </div>
      <hr className="my-4 lg:my-8" />
      <div className="flex justify-between">
        <div>
          <p className="text-base text-center text-color-two">
            &copy; {new Date().getFullYear()} Freelancer’s Solution.gov.bd. All
            rights reserved.
          </p>
        </div>
        <div className="md:flex">
          <h5 className="px-8 text-base cursor-pointer text-color-two">
            Facebook
          </h5>
          <h5 className="px-8 text-base cursor-pointer text-color-two">
            Instagram
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
