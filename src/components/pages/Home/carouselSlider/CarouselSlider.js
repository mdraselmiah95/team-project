import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

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
  };
  const img1 = "https://i.ibb.co/gzzGCkL/image1.png";
  const img2 = "https://i.ibb.co/F7SXcnh/image2.png";
  const img3 = "https://i.ibb.co/4WnWz71/image3.png";
  const star = "https://i.ibb.co/Tr4MksG/Frame-65.png";

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
          {/* 1 */}
          <div className="mx-auto lg:px-0">
            <img
              src={img1}
              alt="icon"
              className="cursor-pointer"
              type="button"
            />
            <h2 className="mt-4 font-medium text-color-one">
              Start Learning HTML, The Easy Way
            </h2>
            <p className="my-1 text-color-two">Framework Tech Media</p>
            <img src={star} alt="star" />
            <div className="flex mt-1.5">
              <h2 className="mr-2 text-2xl font-bold text-color-eight">৳29</h2>
            </div>
            <button className="px-16 py-4 mt-4 font-bold text-white border rounded shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three">
              Course Details
            </button>
          </div>
          {/* 2 */}
          <div className="mx-auto lg:px-0">
            <img
              src={img2}
              alt="icon"
              className="cursor-pointer"
              type="button"
            />
            <h2 className="mt-4 font-medium text-color-one">
              Wordpress Customization with 10
            </h2>
            <p className="my-1 text-color-two">Journey IT</p>
            <img src={star} alt="star" />
            <div className="flex mt-1.5">
              <h2 className="mr-2 text-2xl font-bold text-color-eight">৳119</h2>
            </div>
            <button className="px-16 py-4 mt-4 font-bold text-white border rounded shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three">
              Course Details
            </button>
          </div>
          {/* 3 */}

          <div className="mx-auto lg:px-0">
            <img
              src={img3}
              alt="icon"
              className="cursor-pointer"
              type="button"
            />
            <h2 className="mt-4 font-medium text-color-one">
              Learn Shopify & Dropshipping with
            </h2>
            <p className="my-1 text-color-two">Codeman BD</p>
            <img src={star} alt="star" />
            <div className="flex mt-1.5">
              <h2 className="mr-2 text-2xl font-bold text-color-eight">৳144</h2>
            </div>
            <button className="px-16 py-4 mt-4 font-bold text-white border rounded shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three">
              Course Details
            </button>
          </div>
          {/* 4 */}

          <div className="mx-auto lg:px-0">
            <img
              src={img1}
              alt="icon"
              className="cursor-pointer"
              type="button"
            />
            <h2 className="mt-4 font-medium text-color-one">
              Start Learning HTML, The Easy Way
            </h2>
            <p className="my-1 text-color-two">Framework Tech Media</p>
            <img src={star} alt="star" />
            <div className="flex mt-1.5">
              <h2 className="mr-2 text-2xl font-bold text-color-eight">৳29</h2>
            </div>
            <button className="px-16 py-4 mt-4 font-bold text-white border rounded shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three">
              Course Details
            </button>
          </div>
          {/* 5 */}
          <div className="mx-auto lg:px-0">
            <img
              src={img2}
              alt="icon"
              className="cursor-pointer"
              type="button"
            />
            <h2 className="mt-4 font-medium text-color-one">
              Wordpress Customization with 10
            </h2>
            <p className="my-1 text-color-two">Journey IT</p>
            <img src={star} alt="star" />
            <div className="flex mt-1.5">
              <h2 className="mr-2 text-2xl font-bold text-color-eight">৳119</h2>
            </div>
            <button className="px-16 py-4 mt-4 font-bold text-white border rounded shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three">
              Course Details
            </button>
          </div>
          {/* 6 */}
          <div className="mx-auto lg:px-0">
            <img
              src={img1}
              alt="icon"
              className="cursor-pointer"
              type="button"
            />
            <h2 className="mt-4 font-medium text-color-one">
              Start Learning HTML, The Easy Way
            </h2>
            <p className="my-1 text-color-two">Framework Tech Media</p>
            <img src={star} alt="star" />
            <div className="flex mt-1.5">
              <h2 className="mr-2 text-2xl font-bold text-color-eight">৳29</h2>
            </div>
            <button className="px-16 py-4 mt-4 font-bold text-white border rounded shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three">
              Course Details
            </button>
          </div>
          {/* 7 */}
          <div className="mx-auto lg:px-0">
            <img
              src={img3}
              alt="icon"
              className="cursor-pointer"
              type="button"
            />
            <h2 className="mt-4 font-medium text-color-one">
              Learn Shopify & Dropshipping with
            </h2>
            <p className="my-1 text-color-two">Codeman BD</p>
            <img src={star} alt="star" />
            <div className="flex mt-1.5">
              <h2 className="mr-2 text-2xl font-bold text-color-eight">৳144</h2>
            </div>
            <button className="px-16 py-4 mt-4 font-bold text-white border rounded shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three">
              Course Details
            </button>
          </div>
          {/* 8 */}
          <div className="mx-auto lg:px-0">
            <img
              src={img1}
              alt="icon"
              className="cursor-pointer"
              type="button"
            />
            <h2 className="mt-4 font-medium text-color-one">
              Start Learning HTML, The Easy Way
            </h2>
            <p className="my-1 text-color-two">Framework Tech Media</p>
            <img src={star} alt="star" />
            <div className="flex mt-1.5">
              <h2 className="mr-2 text-2xl font-bold text-color-eight">৳29</h2>
            </div>
            <button className="px-16 py-4 mt-4 font-bold text-white border rounded shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three">
              Course Details
            </button>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default CarouselSlider;
