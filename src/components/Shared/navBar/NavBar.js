import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  //NavLinks
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Courses", link: "/" },
    { name: "Resources", link: "/" },
    { name: "Careers", link: "/" },
  ];
  const logo = "https://i.ibb.co/FYNmXRm/F.png";
  let [open, setOpen] = useState(false);
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="text-xl md:ml-8 md:my-0 my-7">
              <a
                href={link.link}
                className="text-base font-medium duration-500 text-color-three hover:text-blue-400 "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <Link to="/login">
            <button className="px-4 py-3 font-bold rounded-md cursor-pointer md:px-6 md:py-4 text-color-three hover:text-white hover:bg-color-three">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-4 py-3 font-bold text-white rounded-md cursor-pointer hover:text-color-three hover:bg-white hover:border-color-three hover:border md:px-8 md:py-4 bg-color-three">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
