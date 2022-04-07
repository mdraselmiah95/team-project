import React from "react";
import "./SectionTwo.css";

const SectionTwo = () => {
  const img = "https://i.ibb.co/tw0jffZ/Group.png";
  const imgTwo = "https://i.ibb.co/Qvv15bs/play.png";
  return (
    <div className=" grid md:grid-cols-2 items-center justify-center px-5 py-7 md:px-36">
      <div className="md:mr-14 md:mt-28">
        <h2 className="text-color-one font-medium text-2xl mb-6">Details</h2>
        <p className="text-color-two">
          pAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className="relative bg-black rounded-xl md:-mt-96 md:ml-28">
        <img
          src={img}
          alt="videoImage"
          className="object-fill opacity-50 cursor-pointer"
        />
        <button className="btn">
          <img
            src={imgTwo}
            alt="play icon"
            style={{ height: "75px" }}
            // onClick={() => setShowModal(false)}
          />
        </button>
      </div>
    </div>
  );
};

export default SectionTwo;
