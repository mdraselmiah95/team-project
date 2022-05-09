import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Rating from "react-rating";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "15px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "15px",
      }}
      onClick={onClick}
    />
  );
}

const CarouselSlider = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./coursesDetails.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="px-6 py-8 md:py-32 md:px-24">
        <div className="flex items-center justify-between mb-11">
          <h1 className="text-4xl font-medium text-color-one">
            Popular Courses
          </h1>
          <Link to="/courses">
            <button className="px-6 py-3 font-bold border rounded-md text-color-three border-color-three">
              All Courses
            </button>
          </Link>
        </div>
        <Slider
          {...settings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course) => (
            <div key={course.id} className="px-5 mx-auto">
              <img
                src={course.image}
                alt="icon"
                className="cursor-pointer"
                type="button"
              />
              <h2 className="mt-4 font-medium text-color-one">
                {course.title}
              </h2>
              <p className="my-1 text-color-two">{course.description}</p>
              <div className="flex items-center">
                <h3 className="font-bold text-star-color">{course.star}</h3>
                <p className="font-bold text-star-color">
                  .0
                  <Rating
                    className="mx-3 text-star-color"
                    initialRating={course.star}
                    readonly
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"
                  />
                </p>
                <p className="text-color-two">({course.starCount})</p>
              </div>
              <div className="flex mt-1.5">
                <h2 className="mr-2 text-2xl font-bold text-color-eight">
                  <span className="text-2xl font-bold">&#2547;</span>
                  {course.wholePrice}
                </h2>
              </div>
              <Link to={`/courseDetails/${course.id}`}>
                <button className="w-full py-4 mt-5 font-bold text-white border rounded shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three">
                  Course Details
                </button>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CarouselSlider;
