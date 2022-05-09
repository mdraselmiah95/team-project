import React from "react";
import { Link } from "react-router-dom";
import "./success.css";

const Success = () => {
  return (
    <div className="mt-20 body">
      <div className="card">
        <div className="main">
          <i className="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>Payment is Successful.</p>
        <Link to="/profile">
          <button className=" mt-8 px-6 py-2.5 mr-5 font-bold text-white hover:opacity-80  bg-green-300 border rounded-md">
            Go to Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
