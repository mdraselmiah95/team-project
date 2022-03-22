import React, { useEffect, useState } from "react";
import Course from "../course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./coursesDetails.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const path = "https://i.ibb.co/SB2YTTq/path2.png";
  const menu = "https://i.ibb.co/f2z2Vkp/menu.png";

  const iconOne = "https://i.ibb.co/QK0wG19/Group2.png";
  const iconTwo = "https://i.ibb.co/wzGrm5v/Group1.png";

  return (
    <div className="px-6 py-8 lg:py-28 lg:px-36 bg-color-four">
      <div className="text-center">
        <h1 className="text-4xl font-medium text-color-one">Our All Courses</h1>
        <p className="mt-5 text-color-two lg:px-52">
          We believe in technology and our team to take care of your career
          journey. We guarantee you will get the best service that you have
          never experienced before
        </p>
      </div>
      <div className="items-center justify-between flex-none mt-16 md:flex">
        <div className="flex">
          <div className="flex items-center px-3 py-2 mr-3 border-2 md:px-5 md:py-3 md:mr-5 border-color-one">
            <img
              className="cursor-pointer"
              src={menu}
              alt="menu-icon"
              style={{ width: "25px", height: "17px" }}
            />
            <h1 className="ml-4 text-xl font-medium cursor-pointer md:text-2xl text-color-one">
              Filter
            </h1>
          </div>
          <div className="flex items-center px-3 py-2 border-2 md:px-5 md:py-3 border-color-one">
            <div>
              <h4 className="font-medium text-color-one">Sort by</h4>
              <h5 className="text-color-two">Most Popular</h5>
            </div>
            <img
              className="ml-5 cursor-pointer md:ml-10 "
              src={path}
              alt="path-icon"
              style={{ width: "16px", height: "9px" }}
            />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-medium text-color-two ">48 Results</h2>
        </div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-4 lg:gap-10 md:grid-cols-3 lg:grid-cols-4">
          {courses.map((data) => (
            <Course key={data.id} data={data} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 md:mt-14">
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
      </div>
    </div>
  );
};

export default Courses;
