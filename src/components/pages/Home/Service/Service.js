import React from "react";

const Service = ({ data }) => {
  const { title, icon, details, backgroundImage, iconTwo } = data;
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
        <img
          className="mt-2 cursor-pointer hover:opacity-75"
          src={iconTwo}
          alt="icon"
        />
      </div>
    </>
  );
};

export default Service;
