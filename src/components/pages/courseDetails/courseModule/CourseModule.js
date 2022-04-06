import React, { useState } from "react";
import { Data } from "./data";
const CourseModule = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  const icon =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649250262/Project-images/circle_btawqa.png";

  return (
    <div className=" pt-10 pb-8 px-8">
      {Data.map((item, index) => {
        return (
          <>
            <div onClick={() => toggle(index)} key={index}>
              <div className="flex items-center justify-between text-white font-medium bg-color-three py-6 px-5 cursor-pointer">
                <h1>{item.question.name}</h1>
                <h1>{item.question.time}</h1>
              </div>
            </div>
            {clicked === index ? (
              <div className="flex justify-between py-7 pl-5 pr-7 cursor-pointer">
                <p>{item.answer}</p>
                <img src={icon} alt="play-icon" className="w-4 h-4" />
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default CourseModule;
