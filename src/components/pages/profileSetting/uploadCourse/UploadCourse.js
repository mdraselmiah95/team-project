import React from "react";
import { useForm } from "react-hook-form";

const UploadCourse = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="px-4 py-10 md:px-36 md:pt-20 md:pb-12">
      <h1 className="text-4xl font-medium text-center text-color-one">
        Upload A New Course
      </h1>
      <div className="grid md:grid-cols-2 md:mt-16 mt-7">
        {/* Course Details */}
        <div className="mr-4 md:mr-12">
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

          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Course Price:
            </label>
            <input
              type="number"
              name="Course Price"
              placeholder="Enter course price"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Course Features List:
            </label>
            <textarea
              type="text"
              name="Email"
              placeholder="Feature 01 .."
              className="block w-full h-32 px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex items-center">
            <h3 className="text-lg text-color-two mr-14">Thumbnail Image:</h3>
            <button className="px-4 py-2 font-medium text-white border rounded-lg hover:bg-white hover:border-color-three hover:text-color-three bg-color-three">
              Choose File
            </button>
          </div>
          <div className="flex items-center">
            <button className="px-4 py-2 font-medium text-white border rounded-lg hover:bg-white hover:border-color-three hover:text-color-three bg-color-three">
              Choose File
            </button>
          </div>
        </div>
        {/* Videos */}
        <div className="md:ml-12">
          <h1 className="mb-6 text-2xl font-medium text-color-one">Videos:</h1>
          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Video 01 Title:
            </label>
            <input
              type="text"
              name="Video"
              placeholder="Enter video title"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Video 01 Link:
            </label>
            <input
              type="url"
              name="Video"
              placeholder="Enter video link"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Video 02 Title:
            </label>
            <input
              type="text"
              name="Video"
              placeholder="Enter video title"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Video 02 Link:
            </label>
            <input
              type="url"
              name="Video"
              placeholder="Enter video link"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button className="float-right px-4 py-2 font-medium text-white border rounded-lg hover:bg-white hover:border-color-three hover:text-color-three bg-color-three">
            Add More Video
          </button>
          {/* Quiz */}
          <div className="mt-24">
            <h1 className="mb-6 text-2xl font-medium text-color-one">Quiz:</h1>
            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Quiz 1: Question
              </label>
              <input
                type="text"
                name="Question"
                placeholder="Quiz 1: Question"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Option 1:
              </label>
              <input
                type="text"
                name="option"
                placeholder="Enter your option 1"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Option 2:
              </label>
              <input
                type="text"
                name="option"
                placeholder="Enter your option 2"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Option 3:
              </label>
              <input
                type="text"
                name="option"
                placeholder="Enter your option 3"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button className="float-right px-4 py-2 font-medium text-white border rounded-lg hover:bg-white hover:border-color-three hover:text-color-three bg-color-three">
              Add More Questions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCourse;
