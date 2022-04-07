import React from "react";

const ChangeDetails = () => {
  const facebook =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/Facebook_xpxn6k.png";
  const linkedin =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/LinkedIN_bn5vez.png";
  const behance =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/Behance_xrmgik.png";
  const gitHub =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/Github_si5mw9.png";
  return (
    <div className="px-5 py-10 md:px-36 md:py-32">
      <div className="grid md:grid-cols-2">
        {/* Change Details */}
        <div className="mr-5 md:mr-16">
          <h1 className="mb-6 text-2xl font-medium text-color-one">
            Change Details
          </h1>
          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">Email</label>
            <input
              type="text"
              name="Email"
              placeholder="Enter email address"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">Title</label>
            <input
              type="text"
              name="Email"
              placeholder="Enter profile title"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Description
            </label>
            <textarea
              type="text"
              name="Email"
              placeholder="Write about yourself"
              className="block w-full h-32 px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center mb-16">
            <h3 className="mr-4 text-lg text-color-two">
              Upload featured video:
            </h3>
            <button className="px-4 py-2 font-medium text-white border rounded-lg hover:bg-white hover:border-color-three hover:text-color-three bg-color-three">
              Choose File
            </button>
          </div>
          <button className="py-6 font-bold text-white border rounded-md hover:bg-white hover:border-color-three hover:text-color-three px-14 bg-color-three">
            Update Now
          </button>
        </div>
        {/* Social Details */}
        <div className="ml-5 md:ml-16">
          <h1 className="mb-6 text-2xl font-medium text-color-one">
            Social Details
          </h1>
          <div className="flex items-center mb-6">
            <img src={facebook} alt="facebook" className=" mr-7" />
            <input
              type="text"
              placeholder="Enter facebook profile link"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex items-center mb-6">
            <img src={linkedin} alt="linkedin" className=" mr-7" />
            <input
              type="text"
              placeholder="Enter linkedin profile link"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex items-center mb-6">
            <img src={behance} alt="bechance" className=" mr-7" />
            <input
              type="text"
              placeholder="Enter behance profile link"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex items-center mb-6">
            <img src={gitHub} alt="gitHub" className=" mr-7" />
            <input
              type="text"
              placeholder="Enter github profile link"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeDetails;