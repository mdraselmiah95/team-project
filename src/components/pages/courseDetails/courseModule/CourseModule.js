import React, { useState } from "react";
import { Data } from "./data";
import { Quiz } from "./data";
const CourseModule = () => {
  //For Videos
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };

  //For Quiz

  const [quiz, setQuiz] = useState(false);

  const toggleQuiz = (index) => {
    if (quiz === index) {
      //if clicked question is already active, then close it
      return setQuiz(null);
    }
    setQuiz(index);
  };

  const icon =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649250262/Project-images/circle_btawqa.png";

  return (
    <div className=" pt-10 pb-8 px-8 shadow-md">
      {Data.map((item, index) => {
        return (
          <>
            <div onClick={() => toggle(index)} key={index}>
              <div className="flex items-center justify-between text-white font-medium bg-color-three py-6 px-5 cursor-pointer">
                <h1>{item.title?.name}</h1>
                <h1>{item.title?.time}</h1>
              </div>
            </div>
            {clicked === index ? (
              <>
                <div className="flex justify-between py-7 pl-5 pr-7 cursor-pointer">
                  <p>{item.classes?.one}</p>
                  <img src={icon} alt="play-icon" className="w-4 h-4" />
                </div>
                <div className="flex justify-between py-7 pl-5 pr-7 cursor-pointer bg-color-four">
                  <p>{item.classes?.two}</p>
                  <img src={icon} alt="play-icon" className="w-4 h-4" />
                </div>
                <div className="flex justify-between py-7 pl-5 pr-7 cursor-pointer">
                  <p>{item.classes?.three}</p>
                  <img src={icon} alt="play-icon" className="w-4 h-4" />
                </div>
                <div className="flex justify-between py-7 pl-5 pr-7 cursor-pointer bg-color-four">
                  <p>{item.classes.four}</p>
                  <img src={icon} alt="play-icon" className="w-4 h-4" />
                </div>
                <div className="flex justify-between py-7 pl-5 pr-7 cursor-pointer">
                  <p>{item.classes?.five}</p>
                  <img src={icon} alt="play-icon" className="w-4 h-4" />
                </div>
              </>
            ) : null}
          </>
        );
      })}

      {Quiz.map((item, index) => {
        // console.log(item);
        return (
          <>
            <div onClick={() => toggleQuiz(index)} key={index}>
              <div className="flex items-center justify-between text-white font-medium bg-color-three py-6 px-5 cursor-pointer">
                <h1>{item.title?.name}</h1>
                <h1>{item.title?.time}</h1>
              </div>
            </div>
            {quiz === index ? (
              <>
                <div className="pt-10 pb-12 pl-8">
                  <div className="">
                    <h2 className="text-color-one font-medium text-lg mb-4">
                      {item.quizzes.quizOne.question}
                    </h2>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault1"
                      >
                        {item.quizzes.quizOne.answerOne}
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault2"
                      >
                        {item.quizzes.quizOne.answerTwo}
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault3"
                      >
                        {item.quizzes.quizOne.answerThree}
                      </label>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default CourseModule;
