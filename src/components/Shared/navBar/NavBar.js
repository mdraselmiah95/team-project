import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import nhost from "../../../utils/Nhost";

const NavBar = () => {
  const logo = "https://i.ibb.co/FYNmXRm/F.png";
  let [open, setOpen] = useState(false);
  const user = nhost.auth.getUser();
  console.log(user);
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="items-center justify-between py-4 bg-white md:flex md:px-36 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="pt-2 mr-1">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-8 top-6 md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex mt-8 sm:mt-0 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="grid text-xl md:block md:my-0 my-7">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#FFB201" : "",
                };
              }}
              className="py-3 text-base font-medium duration-500 text-color-three hover:text-blue-400 md:pr-11"
            >
              Home
            </NavLink>
            <a
              href="gkk"
              className="py-3 text-base font-medium duration-500 text-color-three hover:text-blue-400 md:pr-11"
            >
              About Us
            </a>
            <NavLink
              to="/courses"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#FFB201" : "",
                };
              }}
              className="py-3 text-base font-medium duration-500 text-color-three hover:text-blue-400 md:pr-11"
            >
              Courses
            </NavLink>
            <a
              href="gkk"
              className="py-3 text-base font-medium duration-500 text-color-three hover:text-blue-400 md:pr-11"
            >
              Eligibility test
            </a>
            <a
              href="gkk"
              className="py-3 text-base font-medium duration-500 text-color-three hover:text-blue-400"
            >
              Careers
            </a>
          </li>
        </ul>
        <div
          className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <Link to="/login">
            <button className="px-4 py-3 font-bold rounded-md cursor-pointer md:px-6 md:py-4 text-color-three hover:text-white hover:bg-color-three">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-4 py-3 font-bold text-white border rounded-md cursor-pointer hover:text-color-three hover:bg-white hover:border-color-three hover:border md:px-8 md:py-4 bg-color-three">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
