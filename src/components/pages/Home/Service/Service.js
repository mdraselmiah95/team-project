import React from "react";
import { Link } from "react-router-dom";

const Service = ({ data }) => {
  const { title, icon, details, backgroundImage, iconTwo, id } = data;
  // console.log(data);
  return (
    <>
      <div
        className="px-16 py-12"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <img src={icon} alt="icon" />
        <h3 className="mt-5 mb-2 text-2xl font-medium text-color-one">
          {title}
        </h3>
        <p className="text-base text-color-two">{details}</p>
        {id === 1 ? (
          <Link to="/studentsList">
            <img
              className="mt-2 cursor-pointer hover:opacity-75"
              src={iconTwo}
              alt="icon"
            />
          </Link>
        ) : (
          <Link to="/instructorsList">
            <img
              className="mt-2 cursor-pointer hover:opacity-75"
              src={iconTwo}
              alt="icon"
            />
          </Link>
        )}
      </div>
    </>
  );
};

export default Service;
