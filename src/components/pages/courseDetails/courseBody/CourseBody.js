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
                  className="object-fill w-full h-full rounded-2xl opacity-60"
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
                url="https://www.youtube.com/watch?v=qz0aGYrrlhU&t=11s"
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
          <div className="md:absolute md:-mt-80">
            <div className="py-12 shadow-md rounded-xl bg-color-four mb-9">
              <div className="flex items-center pl-7">
                <img src={mentor} alt="mentor" className="mr-2 " />
                <div>
                  <h2 className="mb-1 text-xl font-medium text-color-one">
                    Syeda Rabaya
                  </h2>
                  <h5 className="text-color-two">Frontend Web Developer</h5>
                </div>
              </div>
              <div className="py-5 mt-3 bg-color-twelve pl-7 pr-14">
                <img src={star} alt="star" />
              </div>
              <div className="pt-3 pb-12 px-7">
                <h2 className="mb-5 text-xl font-medium text-color-one">
                  Course features:
                </h2>
                <h5 className="mb-3 text-color-two">
                  1. Welcome to the course{" "}
                </h5>
                <h5 className="mb-3 text-color-two">
                  2. How to set up your photoshop workspace{" "}
                </h5>
                <h5 className="mb-3 text-color-two">
                  3. How to set up your photoshop workspace{" "}
                </h5>
                <h5 className="mb-3 text-color-two">
                  4. How to set up your photoshop workspace{" "}
                </h5>
                <h5 className="text-color-two">
                  5. How to set up your photoshop workspace{" "}
                </h5>
              </div>
              <div className="flex justify-center">
                <button className="px-10 py-4 text-2xl font-bold text-white border bg-color-three md:py-5 md:px-20 rounded-xl hover:text-color-three hover:bg-white hover:border-color-three hover:border">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="shadow-md rounded-xl bg-color-four md:w-96">
              <div className="flex items-center pl-7 mb-7 pt-7">
                <img src={mentor} alt="mentor" className="mr-2 " />
                <div>
                  <h2 className="mb-1 text-xl font-medium text-color-one">
                    Syeda Rabaya
                  </h2>
                  <h5 className="text-color-two">Web developer at fiverr</h5>
                </div>
              </div>
              <div className="pb-12 bg-color-twelve rounded-xl px-7 pt-7">
                <h2 className="mb-5 text-xl font-medium text-color-one">
                  Mentor Details
                </h2>
                <p className="mb-12 text-color-two">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                  <br />
                  <br />
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
                <div className="flex justify-center">
                  <button className="px-6 py-5 text-2xl font-bold text-white border bg-color-three rounded-xl hover:text-color-three hover:bg-white hover:border-color-three hover:border">
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
