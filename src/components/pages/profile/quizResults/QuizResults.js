import React from "react";

const QuizResults = () => {
  return (
    <div className="md:px-36 px-6 pb-16">
      <h2 className="text-color-one font-medium text-2xl mb-10">
        Quiz Results
      </h2>
      <div>
        <div className="flex py-7 px-5 justify-between items-center">
          <h2>Start Learning HTML, The Easy Way</h2>
          <h3>70/100</h3>
        </div>
        <div className="flex py-7 px-5 justify-between items-center bg-color-four">
          <h2>Beginner's UI/UX Design Using Figma</h2>
          <h3>90/100</h3>
        </div>
        <div className="flex py-7 px-5 justify-between items-center">
          <h2>Be a Javascript Hero into 3 months</h2>
          <h3>60/100</h3>
        </div>
        <div className="flex py-7 px-5 justify-between items-center bg-color-four">
          <h2>Content Writing Fundamentals with Priyom</h2>
          <h3>70/100</h3>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
