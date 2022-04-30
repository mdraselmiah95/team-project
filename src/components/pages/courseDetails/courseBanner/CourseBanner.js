import React from "react";

const CourseBanner = ({ findProduct }) => {
  const img1 = "https://i.ibb.co/nwzQy0Z/clock.png";
  const img2 = "https://i.ibb.co/YZ5TJ9n/book.png";
  const img3 = "https://i.ibb.co/7Q3mtMh/language.png";

  return (
    <div className="px-5 py-6 mt-20 bg-color-three md:pt-28 md:pb-20 md:pl-36 ">
      <div className="text-white ">
        <h1 className="mb-5 text-3xl font-semibold md:text-4xl">
          {/* Start Learning HTML, <br /> The Easy Way */}
          {findProduct?.title || findProduct?.titleTwo}
        </h1>
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={img1} alt="clock" />
            <p className="ml-3 text-lg font-medium md:text-2xl">3h 40 min</p>
          </div>
          <div className="flex items-center mx-3 md:mx-9">
            <img src={img2} alt="clock" />
            <p className="ml-3 text-lg font-medium md:text-2xl">20 Lessons</p>
          </div>
          <div className="flex items-center">
            <img src={img3} alt="clock" />
            <p className="ml-3 text-lg font-medium md:text-2xl">204 Enrolled</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
