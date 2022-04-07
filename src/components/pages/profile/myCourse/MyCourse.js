import React from "react";

const MyCourse = ({ data }) => {
  const { image, title, description } = data;
  return (
    <div className="px-6 mx-auto lg:px-0 md:border rounded-md">
      <img src={image} alt="icon" className="cursor-pointer" type="button" />
      <h2 className="mt-4 font-semibold text-color-one pl-5">{title}</h2>
      <p className="my-1 text-color-two pl-5 pb-4">{description}</p>
    </div>
  );
};

export default MyCourse;
