import React, { useState } from "react";
import CourseInformation from "../courseInformation/CourseInformation";
import "./CourseBody.css";
import ReactPlayer from "react-player/youtube";

const CourseBody = () => {
  const img1 = "https://i.ibb.co/0MyZxqL/img1.png";
  const mentor = "https://i.ibb.co/9vGxYbf/mentor.png";
  const star = "https://i.ibb.co/x5dcfBW/Frame-152.png";
  const playButton = "https://i.ibb.co/Qvv15bs/play.png";
  const [video, setVideoBtn] = useState(false);

  return (
    <div className="px-5 py-6 md:pt-16 md:pb-32 md:pl-36 md:pr-56">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 mr-4 md:mr-12">
          <div className="relative bg-black rounded-2xl">
            {!video ? (
              <>
                <img
                  className="rounded-2xl object-fill w-full h-full opacity-60"
                  src={img1}
                  alt="html and css"
                  style={{
                    width: "629px",
                    height: "416px",
                  }}
                />
                <button className="btn" onClick={() => setVideoBtn(true)}>
                  <img src={playButton} alt="play icon" />
                </button>
              </>
            ) : (
              <ReactPlayer
                url="https://www.youtube.com/watch?v=KkqS2bCbxZw"
                onError={(err) => console.log(err)}
                onEnded={() => setVideoBtn(false)}
                controls
                playing
                width="629px"
                height="416px"
              />
            )}
          </div>
          <div className="mt-8 md:mt-16">
            <CourseInformation />
          </div>
        </div>
        <div className="md:w-96">
          <div className="md:absolute  md:-mt-80">
            <div className=" py-12 shadow-md rounded-xl bg-color-four mb-9">
              <div className="flex items-center pl-7">
                <img src={mentor} alt="mentor" className=" mr-2" />
                <div>
                  <h2 className="text-color-one font-medium text-xl mb-1">
                    Syeda Rabaya
                  </h2>
                  <h5 className="text-color-two">Frontend Web Developer</h5>
                </div>
              </div>
              <div className=" bg-color-twelve py-5 pl-7 pr-14 mt-3">
                <img src={star} alt="star" />
              </div>
              <div className=" px-7 pt-3 pb-12">
                <h2 className=" text-xl font-medium mb-5 text-color-one">
                  Course features:
                </h2>
                <h5 className="text-color-two mb-3">
                  1. Welcome to the course{" "}
                </h5>
                <h5 className="text-color-two mb-3">
                  2. How to set up your photoshop workspace{" "}
                </h5>
                <h5 className="text-color-two mb-3">
                  3. How to set up your photoshop workspace{" "}
                </h5>
                <h5 className="text-color-two mb-3">
                  4. How to set up your photoshop workspace{" "}
                </h5>
                <h5 className="text-color-two">
                  5. How to set up your photoshop workspace{" "}
                </h5>
              </div>
              <div className="flex justify-center">
                <button className="bg-color-three md:py-5 py-4 md:px-20 px-10 font-bold text-2xl rounded-xl text-white hover:text-color-three hover:bg-white hover:border-color-three hover:border border">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="shadow-md rounded-xl bg-color-four md:w-96">
              <div className="flex items-center pl-7 mb-7 pt-7">
                <img src={mentor} alt="mentor" className=" mr-2" />
                <div>
                  <h2 className="text-color-one font-medium text-xl mb-1">
                    Syeda Rabaya
                  </h2>
                  <h5 className="text-color-two">Web developer at fiverr</h5>
                </div>
              </div>
              <div className="bg-color-twelve rounded-xl px-7 pt-7  pb-12">
                <h2 className="text-color-one text-xl font-medium mb-5">
                  Mentor Details
                </h2>
                <p className="text-color-two mb-12">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                  <br />
                  <br />
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className="flex justify-center">
                  <button className="bg-color-three py-5 px-6 font-bold text-2xl rounded-xl text-white hover:text-color-three border hover:bg-white hover:border-color-three hover:border">
                    Schedule A Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBody;
