import React from "react";
import Rating from "react-rating";

const Student = ({ data }) => {
  const {
    name,
    expertise,
    points,
    language,
    projects,
    star,
    totalStar,
    image,
  } = data;
  return (
    <div className="items-center justify-center md:flex">
      <img src={image} alt="student" />
      <div className="mt-3 md:ml-7 md:mt-0">
        <h2 className="mb-2 text-lg font-medium text-color-one">{name}</h2>
        <h6 className="mb-5 text-color-two">{expertise}</h6>
        <p className="mb-2 font-medium text-color-two">
          Eligibility Test:
          <span className="ml-1 font-bold text-color-eight">
            {points} Points
          </span>
        </p>
        <p className="mb-2 font-medium text-color-two">
          Language:
          <span className="ml-1 font-bold text-color-eight">{language}+</span>
        </p>
        <p className="mb-2 font-medium text-color-two">
          Completed Projects:
          <span className="ml-1 font-bold text-color-eight">{projects}+</span>
        </p>
        <div className="flex items-center">
          <h3 className="font-bold text-star-color">{star}</h3>
          <p className="font-bold text-star-color">
            .0
            <Rating
              className="mx-3 text-star-color"
              initialRating={star}
              readonly
              emptySymbol="far fa-star text-warning"
              fullSymbol="fas fa-star text-warning"
            />
          </p>
          <p className="text-color-two">({totalStar})</p>
        </div>
        <button className="py-3 mt-6 font-bold text-white border rounded-md px-9 bg-color-three hover:text-color-three hover:bg-white hover:border-color-three">
          Hire Now
        </button>
      </div>
    </div>
  );
};

export default Student;
