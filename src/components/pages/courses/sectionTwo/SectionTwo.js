import React from "react";

const SectionTwo = () => {
  const vector = "https://i.ibb.co/0fWb9QB/info-1.png";
  return (
    <div className="items-center justify-center flex-none py-16 px-7 md:flex">
      <img src={vector} alt="vector" className="mx-auto md:mx-0" />
      <h1 className="mt-4 text-2xl font-medium text-center md:text-4xl md:text-left md:mt-0 md:ml-8 text-color-one">
        Not Sure? All courses have a <br /> 30-day Money-back Guarantee
      </h1>
    </div>
  );
};

export default SectionTwo;
