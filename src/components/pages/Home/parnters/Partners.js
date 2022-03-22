import React from "react";

const Partners = () => {
  const image = "https://i.ibb.co/BKRGTwJ/Group-1000001972.png";
  return (
    <div className="flex flex-col items-center mx-10 my-10 font-medium text-center justify-items-center text-color-one xl:mx-72">
      <h3 className="mb-5">Partnered With</h3>
      <img src={image} alt="partners" />
    </div>
  );
};

export default Partners;
