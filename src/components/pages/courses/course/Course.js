import React from "react";
import Rating from "react-rating";
import CourseModal from "../courseModal/CourseModal";

const Course = ({ data }) => {
  const { image, star, starCount, title, description, wholePrice } = data;
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="px-6 mx-auto lg:px-0">
        <img
          src={image}
          alt="icon"
          className="cursor-pointer"
          type="button"
          // onClick={() => setShowModal(true)}
        />
        <h2 className="mt-4 font-medium text-color-one">{title}</h2>
        <p className="my-1 text-color-two">{description}</p>
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
          <p className="text-color-two">({starCount})</p>
        </div>
        <div className="flex mt-1.5">
          <h2 className="mr-2 text-2xl font-bold text-color-eight">
            <span className="text-2xl font-bold">&#2547;</span>
            {wholePrice}
          </h2>
        </div>
        <button
          className="w-full py-4 mt-5 font-bold text-white border rounded shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three"
          onClick={() => setShowModal(true)}
        >
          Course Details
        </button>
      </div>

      {showModal ? (
        <>
          <CourseModal setShowModal={setShowModal} data={data} />
          <div className="fixed inset-0 z-40 bg-black opacity-70"></div>
        </>
      ) : null}
    </>
  );
};

export default Course;
