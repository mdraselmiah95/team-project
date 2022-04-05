import React from "react";
import CourseInformation from "../courseInformation/CourseInformation";

const CourseBody = () => {
  const img1 = "https://i.ibb.co/0MyZxqL/img1.png";
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
        <div className="">
          <h2>two</h2>
        </div>
      </div>
    </div>
  );
};

export default CourseBody;
