import React, { useState } from "react";
import "./CourseModule.css";
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
    <div className=" pt-10 pb-8 md:px-8 px-3 shadow-md ">
      {Data.map((item, index) => {
        return (
          <div className="mb-2" key={index}>
            <div onClick={() => toggle(index)}>
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
          </div>
        );
      })}

      {/* Quiz section */}
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
                <div
                  className="pt-10 pb-12 pl-8 overflow-y-scroll"
                  style={{ height: "450px" }}
                >
                  <div className="">
                    <h2 className="text-color-one font-medium text-lg mb-4">
                      {item.quizzes.quizOne.question}
                    </h2>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault1"
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
                        name="flexRadioDefault1"
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
                        name="flexRadioDefault1"
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

                  <div className=" mt-6">
                    <h2 className="text-color-one font-medium text-lg mb-4">
                      {item.quizzes.quizTwo.question}
                    </h2>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault2"
                        id="flexRadioDefault4"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault4"
                      >
                        {item.quizzes.quizTwo.answerOne}
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault2"
                        id="flexRadioDefault5"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault5"
                      >
                        {item.quizzes.quizTwo.answerTwo}
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault2"
                        id="flexRadioDefault6"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault6"
                      >
                        {item.quizzes.quizTwo.answerThree}
                      </label>
                    </div>
                  </div>

                  <div className=" mt-6">
                    <h2 className="text-color-one font-medium text-lg mb-4">
                      {item.quizzes.quizThree.question}
                    </h2>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault3"
                        id="flexRadioDefault1"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault1"
                      >
                        {item.quizzes.quizThree.answerOne}
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault3"
                        id="flexRadioDefault2"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault2"
                      >
                        {item.quizzes.quizThree.answerTwo}
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault3"
                        id="flexRadioDefault3"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault3"
                      >
                        {item.quizzes.quizThree.answerThree}
                      </label>
                    </div>
                  </div>

                  <div className=" mt-6">
                    <h2 className="text-color-one font-medium text-lg mb-4">
                      {item.quizzes.quizFour.question}
                    </h2>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault4"
                        id="flexRadioDefault1"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault1"
                      >
                        {item.quizzes.quizFour.answerOne}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault4"
                        id="flexRadioDefault2"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault2"
                      >
                        {item.quizzes.quizFour.answerTwo}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault4"
                        id="flexRadioDefault3"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault3"
                      >
                        {item.quizzes.quizFour.answerThree}
                      </label>
                    </div>
                  </div>

                  <div className=" mt-6">
                    <h2 className="text-color-one font-medium text-lg mb-4">
                      {item.quizzes.quizFive.question}
                    </h2>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault5"
                        id="flexRadioDefault1"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault1"
                      >
                        {item.quizzes.quizFive.answerOne}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault5"
                        id="flexRadioDefault2"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault2"
                      >
                        {item.quizzes.quizFive.answerTwo}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault5"
                        id="flexRadioDefault3"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault3"
                      >
                        {item.quizzes.quizFive.answerThree}
                      </label>
                    </div>
                  </div>

                  <div className=" mt-6">
                    <h2 className="text-color-one font-medium text-lg mb-4">
                      {item.quizzes.quizSix.question}
                    </h2>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault6"
                        id="flexRadioDefault1"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault1"
                      >
                        {item.quizzes.quizSix.answerOne}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault6"
                        id="flexRadioDefault2"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault2"
                      >
                        {item.quizzes.quizSix.answerTwo}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault6"
                        id="flexRadioDefault3"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault3"
                      >
                        {item.quizzes.quizSix.answerThree}
                      </label>
                    </div>
                  </div>

                  <div className=" mt-6">
                    <h2 className="text-color-one font-medium text-lg mb-4">
                      {item.quizzes.quizSeven.question}
                    </h2>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault7"
                        id="flexRadioDefault1"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault1"
                      >
                        {item.quizzes.quizSeven.answerOne}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault7"
                        id="flexRadioDefault2"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault2"
                      >
                        {item.quizzes.quizSeven.answerTwo}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault7"
                        id="flexRadioDefault3"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault3"
                      >
                        {item.quizzes.quizSeven.answerThree}
                      </label>
                    </div>
                  </div>

                  <div className=" mt-6">
                    <h2 className="text-color-one font-medium text-lg mb-4">
                      {item.quizzes.quizEight.question}
                    </h2>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault8"
                        id="flexRadioDefault1"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault1"
                      >
                        {item.quizzes.quizEight.answerOne}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault8"
                        id="flexRadioDefault2"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault2"
                      >
                        {item.quizzes.quizEight.answerTwo}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault8"
                        id="flexRadioDefault3"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault3"
                      >
                        {item.quizzes.quizEight.answerThree}
                      </label>
                    </div>
                  </div>

                  <div className=" mt-6">
                    <h2 className="text-color-one font-medium text-lg mb-4">
                      {item.quizzes.quizNine.question}
                    </h2>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault9"
                        id="flexRadioDefault1"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault1"
                      >
                        {item.quizzes.quizNine.answerOne}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault9"
                        id="flexRadioDefault2"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault2"
                      >
                        {item.quizzes.quizNine.answerTwo}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault9"
                        id="flexRadioDefault3"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault3"
                      >
                        {item.quizzes.quizNine.answerThree}
                      </label>
                    </div>
                  </div>

                  <div className=" mt-6">
                    <h2 className="text-color-one font-medium text-lg mb-4">
                      {item.quizzes.quizTen.question}
                    </h2>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault10"
                        id="flexRadioDefault1"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault1"
                      >
                        {item.quizzes.quizTen.answerOne}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault10"
                        id="flexRadioDefault2"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault2"
                      >
                        {item.quizzes.quizTen.answerTwo}
                      </label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="flexRadioDefault10"
                        id="flexRadioDefault3"
                      ></input>
                      <label
                        className="form-check-label inline-block text-color-two"
                        for="flexRadioDefault3"
                      >
                        {item.quizzes.quizTen.answerThree}
                      </label>
                    </div>
                  </div>

                  {/* finish checkBox */}
                </div>
                <button className="hover:text-color-three hover:bg-white hover:border-color-three hover:border ml-8 py-4 px-11 text-white font-bold bg-color-three rounded-md my-12">
                  Submit Now
                </button>
              </>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default CourseModule;
