import React from "react";
import CourseInformation from "../courseInformation/CourseInformation";

const CourseBody = () => {
  const img1 = "https://i.ibb.co/0MyZxqL/img1.png";
  const mentor = "https://i.ibb.co/9vGxYbf/mentor.png";
  const star = "https://i.ibb.co/x5dcfBW/Frame-152.png";
  return (
    <div className="px-5 py-6 md:pt-16 md:pb-32 md:pl-36 md:pr-56">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 mr-4 md:mr-12">
          <img
            className="rounded-2xl"
            src={img1}
            alt="html and css"
            style={{
              width: "629px",
              height: "416px",
            }}
          />
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
                <button className="bg-color-three md:py-5 py-4 md:px-20 px-10 font-bold text-2xl rounded-xl text-white">
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
                  <button className="bg-color-three py-5 px-6 font-bold text-2xl rounded-xl text-white">
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
