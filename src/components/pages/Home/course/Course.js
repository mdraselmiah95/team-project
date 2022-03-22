import React from "react";

const Course = ({ data }) => {
  const { title, icon, details, backgroundImage } = data;
  console.log(data);
  return (
    <>
      <div
        className="p-12"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <img src={icon} alt="icon" />
        <h3 className="my-4 text-2xl font-medium text-color-one">{title}</h3>
        <p className="text-base text-color-two">{details}</p>
      </div>
    </>
  );
};

export default Course;
