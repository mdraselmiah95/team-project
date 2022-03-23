import "./Banner.css";
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const HeroImage = " https://i.ibb.co/KzgCF3j/Hero-Image.png";
  return (
    <div className="mt-20 lg:pb-20 bg-color-four">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-11 py-14 lg:pt-28 lg:pl-36">
          <h1 className="text-4xl font-bold text-color-three lg:text-7xl">
            The Next Generation
          </h1>
          <h2 className="mt-3 mb-5 text-2xl font-medium lg:text-4xl text-color-five">
            Of Freelancers Education
          </h2>
          <p className="mb-4 text-xl text-color-two lg:mb-10">
            Enhance your skills anytime from the best professionals courses &
            Upload your course tutorial to become an online teacher.
          </p>
          <div className="flex mb-8 md:mb-14">
            <Link to="/courses">
              <button className="px-6 py-2.5 mr-5 font-bold text-white border rounded shadow md:mt-0 bg-color-eight hover:bg-white hover:border-color-eight hover:border hover:text-color-eight">
                See All Courses
              </button>
            </Link>
            {/* <Link to="/register">
              <button className="px-6 py-2.5 mr-5 font-bold text-white border rounded shadow md:mt-0 bg-color-ten hover:bg-white hover:border-color-ten hover:border hover:text-color-ten">
                Register Now
              </button>
            </Link> */}
          </div>
          <div className="lg:absolute">
            <div className="py-3 text-center bg-white rounded md:pl-3 lg:flex rapperInput">
              <input
                type="text"
                placeholder="Search Courses/ Mentors/ Companies"
                className="px-6 py-3 rounded cursor-pointer md:pl-3 mainInput bg-color-four placeholder:text-color-two"
              />
              <button className="px-6 py-3 mt-3 ml-3 font-bold text-white border rounded shadow md:mt-0 bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three">
                Search Now
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={HeroImage} alt="HeroImage" className="object-none banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
