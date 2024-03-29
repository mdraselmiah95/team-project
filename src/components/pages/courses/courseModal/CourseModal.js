import React, { useState } from "react";
import Rating from "react-rating";
import courseStore from "../../../../utils/Store";
import "./CourseModal.css";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";

const CourseModal = ({ data, setShowModal }) => {
  const [video, setVideoBtn] = useState(false);
  const {
    id,
    image,
    star,
    starCount,
    descriptionTwo,
    wholePrice,
    language,
    students,
    subtitle,
    titleTwo,
    title,
    creator,
    lastUpdate,
    videoLink,
  } = data;
  const img = "https://i.ibb.co/RDNh0GQ/Group-1000002095.png";
  const imgTwo = "https://i.ibb.co/Qvv15bs/play.png";

  const addCourse = courseStore((state) => state.dispatch);
  const courses = courseStore((state) => state.courses);
  const disableBtn = courses?.find((item) => item.id === id);

  return (
    <div className="fixed inset-0 z-50 items-center justify-center w-9/12 m-auto overflow-x-hidden overflow-y-auto outline-none focus:outline-none courseModal">
      <div className="px-5 bg-white border shadow-lg outline-none py-7 focus:outline-none rounded-xl ">
        <img
          src={img}
          alt="cross"
          className="float-right -mt-3 cursor-pointer"
          type="button"
          onClick={() => setShowModal(false)}
        />
        <div className="flex flex-col md:flex-row lg:py-10 lg:px-7">
          <div
            className="relative bg-black "
            style={{ width: "307.26px", height: "438.65px" }}
          >
            {!video ? (
              <>
                <img
                  src={image}
                  alt="icon"
                  className="object-fill w-full h-full opacity-50 cursor-pointer "
                  type="button"
                  style={{
                    width: "307.26px",
                    height: "438.65px",
                  }}
                />

                <button className="btn" onClick={() => setVideoBtn(true)}>
                  <img
                    src={imgTwo}
                    alt="play icon"
                    style={{ height: "75px" }}
                  />
                </button>
              </>
            ) : (
              <ReactPlayer
                url={videoLink}
                onError={(err) => console.log(err)}
                onEnded={() => setVideoBtn(false)}
                controls
                playing
                width="307.26px"
                height="438.65px"
              />
            )}
          </div>
          <div className="md:ml-6">
            <h1 className="text-2xl font-medium text-color-one md:text-4xl">
              {titleTwo || title}
            </h1>
            <h4 className="mt-6 text-xl text-color-one">{descriptionTwo}</h4>

            <div className="flex py-3 md:items-center">
              <h3 className="font-bold text-star-color">{star}</h3>
              <p className="font-bold text-star-color">
                <span> .0</span>
                <Rating
                  className="mx-3 text-star-color"
                  initialRating={data.star}
                  readonly
                  emptySymbol="far fa-star text-warning"
                  fullSymbol="fas fa-star text-warning"
                />
              </p>
              <p className="px-3 text-lg text-color-ten">
                ({starCount} rating)
              </p>
              <p className="h-4 border-l border-color-one "></p>
              <p className="ml-3 text-lg text-color-one">{students} students</p>
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
            </div>
            <div className="flex mt-10">
              <Link to="/cart">
                <button
                  onClick={() => {
                    setShowModal(false);
                    addCourse({ type: "add/courses", payload: data });
                  }}
                  className="px-6 py-3 mr-4 font-bold text-white border rounded-lg shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three disabled:cursor-not-allowed"
                  disabled={disableBtn}
                >
                  Enroll Now
                </button>
              </Link>
              {/* Changes required  */}
              <Link to={`/courseDetails/${id}`}>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="px-6 py-3 font-bold text-white border rounded-lg shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three"
                >
                  Course Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
