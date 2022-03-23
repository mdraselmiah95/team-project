import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import courseStore from "../../../../utils/courseStore";
import Course from "../course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  // const count = courseStore((state) => state.courses);

  useEffect(() => {
    fetch("./coursesDetails.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const iconOne = "https://i.ibb.co/QK0wG19/Group2.png";
  const iconTwo = "https://i.ibb.co/wzGrm5v/Group1.png";

  return (
    <div className="px-6 py-8 lg:py-28 lg:px-36 bg-color-four">
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
            className="px-4 py-2 mr-1 border-2 rounded-md cursor-pointer md:px-6 md:py-3 border-color-two bg-color-four placeholder:text-color-two"
          />
          <button className="px-4 py-2 font-bold text-white border rounded-md shadow md:px-6 md:py-3 bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three ">
            Search Now
          </button>
        </div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-4 lg:gap-10 md:grid-cols-3 lg:grid-cols-4">
          {courses.map((data) => (
            <Course key={data.id} data={data} />
          ))}
        </div>
      </div>
      {/* <div className="flex items-center justify-center mt-8 md:mt-14">
        <img src={iconTwo} alt="icon" className="cursor-pointer" />
        <p className="mx-2 font-medium underline cursor-pointer md:mx-5 text-color-eight">
          1
        </p>
        <p className="mx-2 font-medium underline cursor-pointer md:mx-5 text-color-eight">
          2
        </p>
        <p className="mx-2 font-medium underline cursor-pointer md:mx-5 text-color-eight">
          3
        </p>
        <p className="mx-2 font-medium underline cursor-pointer md:mx-5 text-color-eight">
          4
        </p>
        <p className="mx-5 font-medium underline cursor-pointer text-color-eight">
          5
        </p>
        <p className="mx-2 font-medium underline cursor-pointer md:mx-5 text-color-eight">
          .
        </p>
        <p className="mx-2 font-medium underline cursor-pointer md:mx-5 text-color-eight">
          .
        </p>
        <p className="mx-2 font-medium underline cursor-pointer md:mx-5 text-color-eight">
          .
        </p>
        <p className="mx-2 font-medium underline cursor-pointer md:mx-5 text-color-eight">
          20
        </p>
        <img src={iconOne} alt="icon" className="cursor-pointer" />
      </div> */}
    </div>
  );
};

export default Courses;
