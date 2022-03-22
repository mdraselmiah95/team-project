import React from "react";

const SectionFourCourse = ({ data }) => {
  const { title, icon, details } = data;
  return (
    <>
      <div className="p-12 bg-color-four">
        <img src={icon} alt="icon" />
        <h3 className="my-4 text-2xl font-medium text-color-one">{title}</h3>
        <p className="text-base text-color-two">{details}</p>
      </div>
    </>
  );
};

export default SectionFourCourse;
