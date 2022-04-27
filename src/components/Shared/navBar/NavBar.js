import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import authStore from "../../../utils/Store";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const logo = "https://i.ibb.co/FYNmXRm/F.png";
  const downArrow = "https://i.ibb.co/rfh773h/Arrow-Down.png";
  const mentor = "https://i.ibb.co/9vGxYbf/mentor.png";
  const cart = "https://i.ibb.co/5cZPtf6/shopping-car.png";
  let [open, setOpen] = useState(false);
  const logOut = authStore((state) => state.dispatch);
  const user = authStore((state) => state.user);
  const navigate = useNavigate();

  const icon = "https://i.ibb.co/SB2YTTq/path2.png";

  const handleSignOut = async () => {
    logOut({ type: "remove/user", payload: [] });
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 z-30 w-full">
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
                      Software Testing
                    </a>
                  </NavLink>
                </div>
              </div>
            </NavLink>
            <NavLink
              to="gkk"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#FFB201" : "",
                };
              }}
              className="py-3 text-base font-medium duration-500 text-color-three hover:text-blue-400 md:pr-11"
            >
              Careers
            </NavLink>

            {user.length !== 0 && (
              <>
                <NavLink
                  to="/profile"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#FFB201" : "",
                    };
                  }}
                  className="py-3 text-base font-medium duration-500 text-color-three hover:text-blue-400 md:pr-11"
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/profileSetting"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#FFB201" : "",
                    };
                  }}
                  className="py-3 text-base font-medium duration-500 text-color-three hover:text-blue-400 md:pr-11"
                >
                  Profile Settings
                </NavLink>
              </>
            )}
          </li>
        </ul>
        {user.length !== 0 ? (
<<<<<<< HEAD
          <div className="absolute hidden bg-white profile-dropdown">
            <div className="flex flex-col items-center justify-center py-6 pl-6 pr-11">
              <NavLink
                to="/profile"
                className="pt-6 mb-5"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#FFB201" : "",
                  };
                }}
              >
                <a
                  href="link"
                  className="font-medium duration-500 hover:text-blue-400"
=======
          <>
            <div
              className={`md:flex mt-56 md:mt-0 md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px]"
              }`}
            >
              <div className="flex items-center cursor-pointer ">
                <img
                  src={cart}
                  alt="shopping-cart"
                  className="mr-8 duration-500 hover:text-blue-400"
                />
                <img src={mentor} alt="mentor" className="mr-3 w-9 h-9" />
                <h2
                  onClick={handleSignOut}
                  className="mr-1 font-semibold duration-500 text-color-one hover:text-blue-400"
>>>>>>> e2a8856aa5df1f553fe95e9e96d079e6b8d19244
                >
                  Logout
                </h2>
                {/* <img
                  src={downArrow}
                  alt="arrow"
                  className="duration-500 hover:text-blue-400"
                /> */}
              </div>
            </div>
            <div className="absolute bg-white profile-dropdown hidden">
              <div className="flex flex-col items-center justify-center py-6 pl-6 pr-11">
                <NavLink
                  to="/profile"
                  className="pt-6 mb-5"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#FFB201" : "",
                    };
                  }}
                >
                  <a
                    href="link"
                    className="font-medium duration-500 hover:text-blue-400"
                  >
                    {user.displayName}
                  </a>
                </NavLink>
                <NavLink
                  to="/profileSetting"
                  className="mb-5 "
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#FFB201" : "",
                    };
                  }}
                >
                  <a
                    href="link"
                    className="font-medium duration-500 hover:text-blue-400"
                  >
                    Profile Setting
                  </a>
                </NavLink>
                <a
                  href="link"
                  className="font-semibold duration-500 hover:text-blue-400 logOut"
                  onClick={handleSignOut}
                >
                  LogOut
                </a>
              </div>
            </div>
          </>
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
      </div>
    </div>
  );
};

export default NavBar;
