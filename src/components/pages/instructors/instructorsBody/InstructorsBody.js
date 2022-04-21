import React, { useEffect, useState } from "react";
import Instructor from "../instructor/Instructor";

const InstructorsBody = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("./instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="px-6 py-8 lg:py-28 lg:px-36 ">
      <div className="text-center">
        <h1 className="text-4xl font-medium text-color-one">
          Our Expert Instructors
        </h1>
        <p className="mt-5 text-color-two lg:px-52">
          We believe in technology and our team to take care of your career
          journey. We guarantee you will get the best service that you have
          never experienced before
        </p>
      </div>
      <div className="items-center justify-between flex-none mt-16 md:flex">
        <div className="mb-8 text-center md:mb-0 md:text-left coursesTitle">
          <h1 className="text-xl font-medium md:text-4xl text-color-one">
            Eligible Instructors for Hire
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
            placeholder="Search"
            className="px-4 py-2 mr-1 border-2 rounded-md cursor-pointer md:px-6 md:py-3 border-color-two placeholder:text-color-two"
          />
          <button className="px-4 py-2 font-bold text-white border rounded-md shadow md:px-6 md:py-3 bg-color-one hover:bg-white hover:border-color-three hover:border hover:text-color-three ">
            Search Now
          </button>
        </div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 justify-items-center gap-9 md:grid-cols-2">
          {instructors.map((data) => (
            <Instructor key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorsBody;
