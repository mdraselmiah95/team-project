import React from "react";
import "./fail.css";
const Fail = () => {
  return (
    <div className="mt-20 body">
      <div class="card">
        <div className="main">
          <i className="crossMark">X</i>
        </div>
        <h1>Fail</h1>
        <p>Payment is not Successful.</p>
      </div>
    </div>
  );
};

export default Fail;
