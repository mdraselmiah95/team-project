import React, { useState } from "react";
import CourseInformation from "../courseInformation/CourseInformation";
import "./CourseBody.css";
import ReactPlayer from "react-player/youtube";

const CourseBody = ({ findProduct }) => {
  // const img1 = "https://i.ibb.co/0MyZxqL/img1.png";
  const mentorTwo = "https://i.ibb.co/m5QSj5n/mentor.png";
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
                  src={findProduct?.image}
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
              <div className="flex items-center pl-7 mb-7 pt-7">
                <img
                  src={mentorTwo}
                  alt="mentor"
                  className="mr-2 rounded-full"
                />
                <div>
                  <h2 className="mb-1 text-xl font-medium text-color-one">
                    Ripon-al-wasim
                  </h2>
                  <h5 className="text-color-two">
                    Lead software designer (SQA)
                  </h5>
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
                  1. Practice an online cloud environment
                </h5>
                <h5 className="mb-3 text-color-two">
                  2. Task based course outline
                </h5>
                <h5 className="mb-3 text-color-two">
                  3. Testing tools for automatic testing
                </h5>
                <h5 className="mb-3 text-color-two">
                  4. Professional Instructor
                </h5>
                <h5 className="text-color-two">
                  5. Vendor Certification help for ISTQB-CTFL
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
                <img
                  src={mentorTwo}
                  alt="mentor"
                  className="mr-2 rounded-full"
                />
                <div>
                  <h2 className="mb-1 text-xl font-medium text-color-one">
                    Ripon-al-wasim
                  </h2>
                  <h5 className="text-color-two">
                    Lead software designer (SQA)
                  </h5>
                </div>
              </div>
              <div className="pb-12 bg-color-twelve rounded-xl px-7 pt-7">
                <h2 className="mb-5 text-xl font-medium text-color-one">
                  Mentor Details
                </h2>

                <p className="mb-12 text-color-two">
                  1. About 16 years development experience in java platform.{" "}
                  <br /> 2. Expertise in design development OA (Orthogonal
                  Array), BVA (Boundary Value Analysis), EP (Equivalence
                  Partitioning), Decision Table technique, State Transition, Use
                  Case, Error Guessing, Exploratory testing etc. <br /> 3.
                  Expertise in QA Documentation <br /> 4. Strong exposure in
                  designing and writing Automated Test Case using Selenium 3
                  (WebDriver) with Java. <br /> 5. Very good experience and
                  strong understanding of the all phases of SDLC, STLC and Agile
                  (Scrum) development methodologies.
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
