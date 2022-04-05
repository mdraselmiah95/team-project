import React, { useEffect, useState } from "react";
import SingleCourse from "../singleCourse/SingleCourse";

const VideoBody = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./coursesDetails.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="px-6 py-8 lg:py-28 lg:px-36 ">
      <div className="items-center justify-between flex-none md:flex">
        <div className="mb-8 text-center md:mb-0 md:text-left coursesTitle">
          <h1 className="text-xl font-medium md:text-4xl text-color-one">
            Our All Courses
          </h1>
          <p className="mt-5 text-color-two">
            We believe in technology and our team to take care of your career
            journey. We guarantee you will get the best service that you have
            never experienced before
          </p>
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="Search Related Courses"
            className="px-4 py-2 mr-1 border-2 rounded-md cursor-pointer md:px-6 md:py-3 border-color-two placeholder:text-color-two"
          />
          <button className="px-4 py-2 font-bold text-white border rounded-md shadow md:px-6 md:py-3 bg-color-one hover:bg-white hover:border-color-three hover:border hover:text-color-three ">
            Search Now
          </button>
        </div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-4 lg:gap-10 md:grid-cols-3 lg:grid-cols-4">
          {courses.map((data) => (
            <SingleCourse key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoBody;
