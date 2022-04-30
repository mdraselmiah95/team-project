import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import authStore from "../../../utils/Store";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const NavBar = () => {
  const logo = "https://i.ibb.co/FYNmXRm/F.png";
  const cart = "https://i.ibb.co/5cZPtf6/shopping-car.png";
  let [open, setOpen] = useState(false);
  const logOut = authStore((state) => state.dispatch);
  const user = authStore((state) => state.user);
  const navigate = useNavigate();
  const courses = authStore((state) => state.courses);
  const dispatch = authStore((state) => state.dispatch);
  const userDetails = authStore((state) => state.userDetails);
  useQuery(["userDetails", user.userInfo?.id], async () => {
    const { data } = await axios({
      url: "https://lxnpjwwijxqnrluhcfsr.nhost.run/v1/graphql",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": "3a590f26c50099fdc779b212c090c1bf",
      },
      method: "POST",
      data: {
        query: `
        {
          userInfo_by_pk(id :${user.userInfo?.id}) {
            linkedin
            title
            github
            facebook
            description
            behance
            image
          }
        }`,
      },
    });
    dispatch({
      type: "add/userDetails",
      payload: data?.data?.userInfo_by_pk,
    });
    return data?.data?.userInfo_by_pk;
  });

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
            {/* <NavLink
              to="gkk"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#FFB201" : "",
                };
              }}
              className="py-3 text-base font-medium duration-500 text-color-three hover:text-blue-400 md:pr-11"
            >
              Careers
            </NavLink> */}
          </li>
        </ul>
        {user.length !== 0 ? (
          <>
            <div
              className={`md:flex mt-56 md:mt-0 md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px]"
              }`}
            >
              <div className="flex items-center cursor-pointer ">
                <span className="relative inline-block">
                  <NavLink to="cart">
                    <img
                      src={cart}
                      alt="shopping-cart"
                      className="mr-8 duration-500 hover:text-blue-400 relative"
                    />
                  </NavLink>
                  <span className="absolute top-0 left-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {courses.length === 0 ? 0 : courses.length}
                  </span>
                </span>
                {userDetails?.image !== null ? (
                  <NavLink to="profile">
                    <img
                      src={userDetails?.image}
                      alt="mentor"
                      className="mr-3 w-9 h-9 rounded-full"
                    />
                  </NavLink>
                ) : (
                  <NavLink
                    to="profile"
                    className="mr-8 duration-500 hover:text-blue-400 relative font-semibold"
                  >
                    Profile
                  </NavLink>
                )}

                <h2
                  onClick={handleSignOut}
                  className="mr-1 font-semibold duration-500 text-color-one hover:text-blue-400"
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
