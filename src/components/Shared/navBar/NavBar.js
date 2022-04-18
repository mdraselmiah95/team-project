import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import authStore from "../../../utils/Store";

const NavBar = () => {
  const logo = "https://i.ibb.co/FYNmXRm/F.png";
  const downArrow = "https://i.ibb.co/rfh773h/Arrow-Down.png";
  const mentor = "https://i.ibb.co/9vGxYbf/mentor.png";
  const cart = "https://i.ibb.co/5cZPtf6/shopping-car.png";
  let [open, setOpen] = useState(false);
  const logOut = authStore((state) => state.dispatch);
  const user = authStore((state) => state?.user);

  const icon = "https://i.ibb.co/SB2YTTq/path2.png";

  const handleSignOut = async () => {
    logOut({ type: "remove/user", payload: [] });
    localStorage.removeItem("userInfo");
  };

  return (
    <div className="fixed top-0 left-0 w-full z-30">
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
            <NavLink
              to="/courses"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#FFB201" : "",
                };
              }}
              className="relative py-3 text-base font-medium duration-500 dropdown text-color-three hover:text-blue-400 md:pr-11"
            >
              Courses
              <img
                src={icon}
                alt="icon"
                className="inline-block w-2.5 h-2 ml-2"
              />
              <div className="absolute flex px-12 py-8 bg-white rounded-md shadow-md dropdown-content w-max ">
                <div className="mr-32 font-normal text-color-two">
                  <NavLink
                    to="/webDevelopment"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#FFB201" : "",
                      };
                    }}
                  >
                    <a
                      href="link"
                      className="block duration-500 hover:text-blue-400"
                    >
                      Web Design & Development
                    </a>
                  </NavLink>
                  <NavLink
                    to="/graphicsDesign"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#FFB201" : "",
                      };
                    }}
                  >
                    <a
                      href="link"
                      className="block mt-3 duration-500 hover:text-blue-400"
                    >
                      Graphics Design
                    </a>
                  </NavLink>
                </div>

                <div className="mr-32 font-normal text-color-two">
                  <NavLink
                    to="/digitalProductDesign"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#FFB201" : "",
                      };
                    }}
                  >
                    <a href="link" className="duration-500 hover:text-blue-400">
                      Digital Product Design
                    </a>
                  </NavLink>
                  <NavLink
                    to="/contentWriting"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#FFB201" : "",
                      };
                    }}
                  >
                    <a
                      href="link"
                      className="block mt-3 duration-500 hover:text-blue-400"
                    >
                      Content Writing
                    </a>
                  </NavLink>
                </div>

                <div className="font-normal mr-11 text-color-two">
                  <NavLink
                    to="/appDevelopment"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#FFB201" : "",
                      };
                    }}
                  >
                    <a href="link" className="duration-500 hover:text-blue-400">
                      App Development
                    </a>
                  </NavLink>
                  <NavLink
                    to="/videoEditing"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#FFB201" : "",
                      };
                    }}
                  >
                    <a
                      href="link"
                      className="block mt-3 duration-500 hover:text-blue-400"
                    >
                      Video Editing
                    </a>
                  </NavLink>
                </div>
              </div>
            </NavLink>
            <a
              href="gkk"
              className="py-3 text-base font-medium duration-500 text-color-three hover:text-blue-400"
            >
              Careers
            </a>
          </li>
        </ul>
        {user.length !== 0 ? (
          <div
            className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            <button className="px-4 py-3 font-bold rounded-md cursor-pointer md:px-6 md:py-4 text-color-three hover:text-white hover:bg-color-three">
              {user.displayName}
            </button>
            <button
              onClick={handleSignOut}
              className="px-4 py-3 font-bold text-white border rounded-md cursor-pointer hover:text-color-three hover:bg-white hover:border-color-three hover:border md:px-8 md:py-4 bg-color-three"
            >
              Sign Out
            </button>
          </div>
        ) : (
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
        )}
        {/* mentor Nav part */}
        <div
          className={`md:flex mt-56 md:mt-0 md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <div className="flex items-center">
            <img src={cart} alt="shopping-cart" className=" mr-8" />
            <img src={mentor} alt="mentor" className=" mr-3 w-9 h-9" />
            <h2 className="text-color-one font-semibold mr-1">Rabaya</h2>
            <img src={downArrow} alt="arrow" />
          </div>

          {/* dropdown user  */}
          <div className="absolute flex flex-col  items-center justify-center bg-white rounded-md shadow-md profile-dropdown ">
            <div className="p-6 ">
              <NavLink
                to="/appDevelopment"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#FFB201" : "",
                  };
                }}
              >
                <a href="link" className="duration-500 hover:text-blue-400">
                  Rabaya’s Profile
                </a>
              </NavLink>
              <NavLink
                to="/appDevelopment"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#FFB201" : "",
                  };
                }}
              >
                <a href="link" className="duration-500 hover:text-blue-400">
                  Setting
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
