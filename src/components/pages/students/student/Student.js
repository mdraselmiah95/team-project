import React from "react";

const Student = ({ data }) => {
  const {
    name,
    expertise,
    points,
    language,
    projects,
    star,
    totalStar,
    image,
  } = data;
  return (
    <div className="flex">
      <img src={image} alt="student" />
      <div className="ml-7">
        <h2 className="mb-2 text-lg font-medium text-color-one">{name}</h2>
        <h6 className="mb-5 text-color-two">{expertise}</h6>
        <p className="mb-1 font-medium text-color-two">
          Eligibility Test:
          <span className="ml-1 font-bold text-color-eight">
            {points} Points
          </span>
        </p>
        <p className="mb-1 font-medium text-color-two">
          Language:
          <span className="ml-1 font-bold text-color-eight">{language}+</span>
        </p>
        <p className="font-medium text-color-two">
          Completed Projects:
          <span className="ml-1 font-bold text-color-eight">{projects}+</span>
        </p>
      </div>
    </div>
  );
};

export default Student;
