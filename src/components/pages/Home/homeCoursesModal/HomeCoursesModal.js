import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const HomeCoursesModal = ({ item, setShowModal }) => {
  const {
    image,
    star,
    starCount,
    descriptionTwo,
    wholePrice,
    language,
    students,
    subtitle,
    titleTwo,
    creator,
    lastUpdate,
    courseOverview,
  } = item;
  const img = "https://i.ibb.co/RDNh0GQ/Group-1000002095.png";
  const imgTwo = "https://i.ibb.co/Qvv15bs/play.png";
  return (
    <>
      <div
        className="sticky inset-0 z-50 items-center justify-center w-9/12 m-auto overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
        style={{ width: "360%", marginLeft: "-92%", marginTop: "-95%" }}
      >
        <div className="px-5 bg-white border shadow-lg outline-none py-7 focus:outline-none rounded-xl ">
          <img
            src={img}
            alt="cross"
            className="float-right -mt-3 cursor-pointer"
            type="button"
            onClick={() => setShowModal(false)}
          />
          <div className="flex flex-col md:flex-row lg:py-10 lg:px-7">
            <div className="relative bg-black md:w-6/12">
              <img
                src={image}
                alt="icon"
                className="object-fill w-full h-full opacity-50 cursor-pointer"
                type="button"
                // style={{ width: "307.26px", height: "438.65px" }}
                onClick={() => setShowModal(true)}
              />
              <button className="btn">
                <img
                  src={imgTwo}
                  alt="play icon"
                  style={{ height: "75px" }}
                  onClick={() => setShowModal(false)}
                />
              </button>
            </div>
            <div className="md:ml-6">
              <h1 className="text-2xl font-medium text-color-one md:text-4xl">
                {titleTwo}
              </h1>
              <h4 className="mt-6 text-xl text-color-one">{descriptionTwo}</h4>

              <div className="flex py-3 md:items-center">
                <h3 className="font-bold text-star-color">{star}</h3>
                <p className="font-bold text-star-color">
                  <span> .0</span>
                  <Rating
                    className="mx-3 text-star-color"
                    initialRating={star}
                    readonly
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"
                  />
                </p>
                <p className="px-3 text-lg text-color-ten">
                  ({starCount} rating)
                </p>
                <p className="h-4 border-l border-color-one "></p>
                <p className="ml-3 text-lg text-color-one">
                  {students} students
                </p>
              </div>
              <div className="flex flex-col md:items-center md:flex-row">
                <p className="mr-0 text-lg text-color-one md:mr-16">
                  Created by:
                  <span className="ml-1 text-color-ten">{creator}</span>
                </p>
                <p className="text-lg text-color-one">
                  Last update:
                  <span className="ml-1 text-color-ten">{lastUpdate}</span>
                </p>
              </div>
              <div className="flex flex-col mt-3 md:items-center md:flex-row">
                <p className="mr-0 text-lg text-color-one md:mr-9">
                  Language:
                  <span className="ml-1 text-color-ten">{language}</span>
                </p>
                <p className="text-lg text-color-one">
                  Subtitle:
                  <span className="ml-1 text-color-ten">{subtitle}</span>
                </p>
              </div>
              <div className="flex mt-3">
                <h2 className="text-3xl font-bold md:text-6xl text-color-eight">
                  ৳{wholePrice}
                </h2>
                {/* <h5 className="ml-1 text-xl font-medium text-color-two md:text-3xl">
                <del>${price}</del>
              </h5> */}
              </div>
              <Link to="/cart">
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="px-6 py-3 mt-10 font-bold text-white border rounded shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three"
                >
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-3 lg:py-10 lg:px-7 md:mt-0">
            <div className="md:flex">
              <button className="px-6 py-2 mr-1 font-medium text-white border rounded-t-md bg-color-three hover:bg-blue-900">
                Courses Overview
              </button>
              <button className="px-6 py-2 my-3 mr-1 font-medium text-white border rounded-t-md bg-color-five hover:bg-cyan-600 md:my-0">
                Course Lessons
              </button>
              <button className="px-6 py-2 mr-1 font-medium text-white border rounded-t-md bg-color-five hover:bg-cyan-600">
                Course Lessons
              </button>
            </div>
            <div className="mt-8 shadow-lg md:px-12 md:py-11 md:mt-0">
              <h2 className="mb-5 text-2xl font-medium text-color-one">
                Course Overview
              </h2>
              <p className="text-justify text-color-two">{courseOverview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCoursesModal;
