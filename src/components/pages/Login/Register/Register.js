import {
  faAngleDoubleLeft,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      // alert("Your password did not match");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your password did not match!",
      });
      return;
    }
    e.preventDefault();
  };
  return (
    <div className="py-10 pb-10 mx-6">
      <h2 className="px-3 mb-4 text-3xl font-bold text-center md:text-4xl text-color-one">
        Create New Account:
      </h2>
      <div className="grid items-center grid-cols-1 md:grid-cols-2">
        <div className="">
          <img
            src="https://i.ibb.co/6Pq31jq/Mypass.png"
            alt="registration"
            className=""
          />
        </div>
        <div className="p-4">
          <form onSubmit={handleRegisterSubmit}>
            <input
              className="block w-4/5 px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md required focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your Name"
              name="name"
              type="text"
              onBlur={handleOnBlur}
            />
            <input
              className="block w-4/5 px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md required focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your Email"
              name="email"
              type="email"
              onBlur={handleOnBlur}
            />
            <input
              className="block w-4/5 px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md required focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
            />
            <input
              className="block w-4/5 px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md required focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Re-Type Your Password"
              type="password"
              name="password2"
              onBlur={handleOnBlur}
            />
            <button
              className="px-4 py-3 font-bold text-white rounded-md cursor-pointer md:px-7 hover:text-color-three hover:bg-white hover:border-color-three hover:border md:py-3 bg-color-three focus:shadow-outline focus:outline-none"
              type="submit"
            >
              <FontAwesomeIcon icon={faUserLock} className="mr-2" />
              Register
            </button>
            <div>
              <button className="px-4 py-2 my-2 font-semibold bg-white border rounded shadow hover:bg-gray-100 text-color-three border-btn-border">
                <FontAwesomeIcon icon={faAngleDoubleLeft} className="mr-2" />
                Already Registered? Please Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

/*
https://i.ibb.co/4scS6G6/Login.png
https://i.ibb.co/7grLmvR/registeration.png

*/
