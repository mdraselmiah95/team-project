import React, { useState } from "react";
import Popup from "reactjs-popup";
import ReactPlayer from "react-player/youtube";
import "./CourseModule.css";
import { Data } from "./data";
import { Quiz } from "./data";
import { useForm } from "react-hook-form";

const CourseModule = () => {
  const { register, handleSubmit } = useForm();
  const [answer, setAnswer] = useState([]);

  const onSubmit = (data) => {
    setAnswer(Object.values(data).filter((item) => item !== null));
    console.log(data);
  };
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
  const button =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1650232375/Project-images/button_ugh2zy.png";
  return (
    <div className="px-3 pt-10 pb-8 shadow-md md:px-8">
      {Data.map((item, index) => {
        return (
          <div className="mb-2" key={index}>
            <div onClick={() => toggle(index)}>
              <div className="flex items-center justify-between px-5 py-6 font-medium text-white cursor-pointer bg-color-three">
                <h1>{item.title?.name}</h1>
                <h1>{item.title?.time}</h1>
              </div>
            </div>
            {clicked === index ? (
              <>
                {item.classes.map((item) => (
                  <div
                    key={item.id}
                    className={`flex justify-between pl-5 cursor-pointer py-7 pr-7 ${
                      item.id % 2 === 0 && "bg-color-four"
                    }`}
                  >
                    <p>{item.title}</p>
                    <Popup
                      trigger={
                        <img src={icon} alt="play-icon" className="w-5 h-5" />
                      }
                      modal
                      nested
                    >
                      {(close) => (
                        <div>
                          <button
                            className="close absolute top-6 right-6"
                            onClick={close}
                          >
                            <img src={button} alt="button" />
                          </button>
                          <ReactPlayer
                            url={item.url}
                            onEnded={close}
                            controls
                            playing
                            width="100%"
                            height="458px"
                          />
                        </div>
                      )}
                    </Popup>
                  </div>
                ))}
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
              <div className="flex items-center justify-between px-5 py-6 font-medium text-white cursor-pointer bg-color-three">
                <h1>{item.title?.name}</h1>
                <h1>{item.title?.time}</h1>
              </div>
            </div>
            {quiz === index ? (
              <>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div
                    className="pt-10 pb-12 pl-8 overflow-y-scroll"
                    style={{ height: "450px" }}
                  >
                    <div className="">
                      <h2 className="mb-4 text-lg font-medium text-color-one">
                        {item.quizzes.quizOne.question}
                      </h2>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          id="flexRadioDefault1"
                          {...register("flexRadioDefault1")}
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault1"
                        >
                          {item.quizzes.quizOne.answerOne}
                        </label>
                      </div>

                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault2"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault2"
                        >
                          {item.quizzes.quizOne.answerTwo}
                        </label>
                      </div>

                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault3"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault3"
                        >
                          {item.quizzes.quizOne.answerThree}
                        </label>
                      </div>
                    </div>

                    <div className="mt-6 ">
                      <h2 className="mb-4 text-lg font-medium text-color-one">
                        {item.quizzes.quizTwo.question}
                      </h2>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault4"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault4"
                        >
                          {item.quizzes.quizTwo.answerOne}
                        </label>
                      </div>

                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          // name="flexRadioDefault2"
                          id="flexRadioDefault5"
                          {...register("flexRadioDefault2")}
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault5"
                        >
                          {item.quizzes.quizTwo.answerTwo}
                        </label>
                      </div>

                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault6"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault6"
                        >
                          {item.quizzes.quizTwo.answerThree}
                        </label>
                      </div>
                    </div>

                    <div className="mt-6 ">
                      <h2 className="mb-4 text-lg font-medium text-color-one">
                        {item.quizzes.quizThree.question}
                      </h2>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          // name="flexRadioDefault3"
                          id="flexRadioDefault1"
                          {...register("flexRadioDefault3")}
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault1"
                        >
                          {item.quizzes.quizThree.answerOne}
                        </label>
                      </div>

                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault3"
                          id="flexRadioDefault2"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault2"
                        >
                          {item.quizzes.quizThree.answerTwo}
                        </label>
                      </div>

                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault3"
                          id="flexRadioDefault3"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault3"
                        >
                          {item.quizzes.quizThree.answerThree}
                        </label>
                      </div>
                    </div>

                    <div className="mt-6 ">
                      <h2 className="mb-4 text-lg font-medium text-color-one">
                        {item.quizzes.quizFour.question}
                      </h2>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault4"
                          id="flexRadioDefault1"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault1"
                        >
                          {item.quizzes.quizFour.answerOne}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          // name="flexRadioDefault4"
                          id="flexRadioDefault2"
                          {...register("flexRadioDefault4")}
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault2"
                        >
                          {item.quizzes.quizFour.answerTwo}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault4"
                          id="flexRadioDefault3"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault3"
                        >
                          {item.quizzes.quizFour.answerThree}
                        </label>
                      </div>
                    </div>

                    <div className="mt-6 ">
                      <h2 className="mb-4 text-lg font-medium text-color-one">
                        {item.quizzes.quizFive.question}
                      </h2>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault5"
                          id="flexRadioDefault1"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault1"
                        >
                          {item.quizzes.quizFive.answerOne}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault5"
                          id="flexRadioDefault2"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault2"
                        >
                          {item.quizzes.quizFive.answerTwo}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          // name="flexRadioDefault5"
                          id="flexRadioDefault3"
                          {...register("flexRadioDefault5")}
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault3"
                        >
                          {item.quizzes.quizFive.answerThree}
                        </label>
                      </div>
                    </div>

                    <div className="mt-6 ">
                      <h2 className="mb-4 text-lg font-medium text-color-one">
                        {item.quizzes.quizSix.question}
                      </h2>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault6"
                          id="flexRadioDefault1"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault1"
                        >
                          {item.quizzes.quizSix.answerOne}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault6"
                          id="flexRadioDefault2"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault2"
                        >
                          {item.quizzes.quizSix.answerTwo}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          // name="flexRadioDefault6"
                          id="flexRadioDefault3"
                          {...register("flexRadioDefault6")}
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault3"
                        >
                          {item.quizzes.quizSix.answerThree}
                        </label>
                      </div>
                    </div>

                    <div className="mt-6 ">
                      <h2 className="mb-4 text-lg font-medium text-color-one">
                        {item.quizzes.quizSeven.question}
                      </h2>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault7"
                          id="flexRadioDefault1"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault1"
                        >
                          {item.quizzes.quizSeven.answerOne}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault7"
                          id="flexRadioDefault2"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault2"
                        >
                          {item.quizzes.quizSeven.answerTwo}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          // name="flexRadioDefault7"
                          id="flexRadioDefault3"
                          {...register("flexRadioDefault7")}
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault3"
                        >
                          {item.quizzes.quizSeven.answerThree}
                        </label>
                      </div>
                    </div>

                    <div className="mt-6 ">
                      <h2 className="mb-4 text-lg font-medium text-color-one">
                        {item.quizzes.quizEight.question}
                      </h2>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault8"
                          id="flexRadioDefault1"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault1"
                        >
                          {item.quizzes.quizEight.answerOne}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          // name="flexRadioDefault8"
                          id="flexRadioDefault2"
                          {...register("flexRadioDefault8")}
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault2"
                        >
                          {item.quizzes.quizEight.answerTwo}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault8"
                          id="flexRadioDefault3"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault3"
                        >
                          {item.quizzes.quizEight.answerThree}
                        </label>
                      </div>
                    </div>

                    <div className="mt-6 ">
                      <h2 className="mb-4 text-lg font-medium text-color-one">
                        {item.quizzes.quizNine.question}
                      </h2>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          // name="flexRadioDefault9"
                          id="flexRadioDefault1"
                          {...register("flexRadioDefault9")}
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault1"
                        >
                          {item.quizzes.quizNine.answerOne}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault9"
                          id="flexRadioDefault2"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault2"
                        >
                          {item.quizzes.quizNine.answerTwo}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault9"
                          id="flexRadioDefault3"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault3"
                        >
                          {item.quizzes.quizNine.answerThree}
                        </label>
                      </div>
                    </div>

                    <div className="mt-6 ">
                      <h2 className="mb-4 text-lg font-medium text-color-one">
                        {item.quizzes.quizTen.question}
                      </h2>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault10"
                          id="flexRadioDefault1"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault1"
                        >
                          {item.quizzes.quizTen.answerOne}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          // name="flexRadioDefault10"
                          id="flexRadioDefault2"
                          {...register("flexRadioDefault10")}
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault2"
                        >
                          {item.quizzes.quizTen.answerTwo}
                        </label>
                      </div>
                      <div className="mb-2 form-check">
                        <input
                          className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                          type="radio"
                          name="flexRadioDefault10"
                          id="flexRadioDefault3"
                        ></input>
                        <label
                          className="inline-block form-check-label text-color-two"
                          for="flexRadioDefault3"
                        >
                          {item.quizzes.quizTen.answerThree}
                        </label>
                      </div>
                    </div>

                    {/* finish checkBox */}
                  </div>
                  <button
                    type="submit"
                    className="py-4 my-12 ml-8 font-bold text-white rounded-md hover:text-color-three hover:bg-white hover:border-color-three hover:border border px-11 bg-color-three "
                  >
                    Submit Now
                  </button>
                  {answer.length !== 0 && (
                    <p
                      className={`py-4 my-4 ml-8 font-bold text-white text-center rounded-md  px-11 ${
                        answer.length <= 5 ? "bg-red-500" : "bg-green-500"
                      }`}
                    >
                      You form submission point is {answer.length}
                    </p>
                  )}
                </form>
              </>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default CourseModule;
