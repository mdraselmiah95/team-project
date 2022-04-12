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
    <div>
      <img src={image} alt="student" />
      <div></div>
    </div>
  );
};

export default Student;
