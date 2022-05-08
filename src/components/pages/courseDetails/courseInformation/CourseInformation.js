import React, { useState } from "react";
import CourseModule from "../courseModule/CourseModule";
import CoursesOverview from "../coursesOverview/CoursesOverview";

const CourseInformation = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <div className="flex">
        <nav className="">
          <button
            className="px-4 py-2 mr-1 font-medium text-white md:px-6 rounded-t-md bg-color-five"
            onClick={() => setState(false)}
          >
            Courses Overview
          </button>

          <button
            onClick={() => setState(true)}
            className="px-4 py-2 mr-1 font-medium text-white md:px-6 active rounded-t-md bg-color-five"
          >
            Course Module
          </button>
        </nav>
      </div>
      {!state ? <CoursesOverview /> : <CourseModule />}
    </div>
  );
};

export default CourseInformation;
