import React from "react";
import { Link } from "react-router-dom";
import "./cancel.css";

const Cancel = () => {
  return (
    <div className="mt-20 body">
      <div class="cancelCard">
        <div className="main">
          <i className="crossMark">X</i>
        </div>
        <h1>Cancel</h1>
        {/* <p>Payment is not Successful.</p> */}
        <Link to="/home">
          <button className=" mt-8 px-6 py-2.5 mr-5 font-bold text-white hover:opacity-80 bg-color-eight border rounded-md">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
