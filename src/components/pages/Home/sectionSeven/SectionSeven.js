import React from "react";

const SectionSeven = () => {
  const person = "https://i.ibb.co/K6B7pqv/bg-base.png";
  const btn1 = "https://i.ibb.co/MRbWJYV/button.png";
  const btn2 = "https://i.ibb.co/cCHYTD1/btn.png";
  const quotation = "https://i.ibb.co/qWRszKQ/icon.png";
  const start = "https://i.ibb.co/7yy9qXr/rating-icon.png";

  return (
    <div className="px-6 lg:py-36 lg:px-28 py-9 lg:mb-28">
      <h1 className="mb-16 text-3xl font-medium text-center lg:text-4xl text-color-one lg:px-80">
        96% our Students satisfied with our services
      </h1>
      <div className="items-center lg:flex swiper-slide">
        <img
          className="mb-4 cursor-pointer lg:mr-12 lg:mb-0 hover:opacity-75"
          src={btn1}
          alt="arrow"
          style={{ height: "60px", width: "60px" }}
        />
        <img src={person} alt="person" />
        <div className="lg:ml-24 ">
          <img className="mt-6 lg:mt-0" src={quotation} alt="quotation-icon" />
          <p className="mt-6 mb-10 text-2xl text-color-two">
            We make sure you have a fine distance with the sickness. We make you
            never lose hope. We make sure you have with the sickness.
          </p>
          <img src={start} alt="start-icon" />
          <h3 className="mt-6 mb-2 text-2xl font-medium text-color-one">
            Yunus Seyhan
          </h3>
          <h5 className="text-xl text-color-two">Postgraduate Student</h5>
        </div>
        <img
          className="mt-4 -ml-4 cursor-pointer lg:ml-8 lg:mt-0 hover:opacity-75"
          src={btn2}
          alt="arrow"
          style={{ height: "60px", width: "70px" }}
        />
      </div>
    </div>
  );
};

export default SectionSeven;

/*
https://i.ibb.co/K6B7pqv/bg-base.png
https://i.ibb.co/R0VpjCX/button-1.png
https://i.ibb.co/MRbWJYV/button.png
https://i.ibb.co/qWRszKQ/icon.png
https://i.ibb.co/7yy9qXr/rating-icon.png
*/
