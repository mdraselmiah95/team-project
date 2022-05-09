import React from "react";
import { Link } from "react-router-dom";
import "./fail.css";

const Fail = () => {
  return (
    <div className="mt-20 body">
      <div class="failCard">
        <div className="main">
          <i className="crossMark">X</i>
        </div>
        <h1>Fail</h1>
        <p>Payment is not Successful.</p>
        <Link to="/courses">
          <button className=" mt-8 px-6 py-2.5 mr-5 font-bold text-white hover:opacity-80 bg-red-400 border rounded-md">
            Go to Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Fail;
