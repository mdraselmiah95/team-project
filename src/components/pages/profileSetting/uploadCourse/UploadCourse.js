import React from "react";

const UploadCourse = () => {
  return (
    <div className="px-4 py-10 md:px-36 md:pt-20 md:pb-12">
      <h1 className="text-4xl font-medium text-center text-color-one">
        Upload A New Course
      </h1>
      <div className="grid md:grid-cols-2 md:mt-16 mt-7">
        {/* Course Details */}
        <div className="mr-4 md:mr-24">
          <h1 className="mb-6 text-2xl font-medium text-color-one">
            Course Details:
          </h1>
          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Course Title:
            </label>
            <input
              type="text"
              name="Course Title"
              placeholder="Enter Course Title"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Company(optional):
            </label>
            <input
              type="text"
              name="Company"
              placeholder="Name of your company"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        {/* Videos */}
        <div></div>
      </div>
    </div>
  );
};

export default UploadCourse;
