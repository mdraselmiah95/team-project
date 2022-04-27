import React from "react";

const CoursesOverview = () => {
  return (
    <div className="px-4 py-5 rounded-md shadow-md  md:pt-14 md:pb-9 md:px-7">
      <h2 className="mb-5 text-2xl font-medium text-color-one">
        Course Overview
      </h2>
      {/* <p className="text-color-two ">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
        minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam
        consequat sunt nostrud amet.
      </p> */}
      <p className="text-color-two ">
        Software Testing is evaluation of the software against requirements
        gathered from users and system specifications. Testing is conducted at
        the phase level in software development life cycle or at module level in
        program code. Software testing comprises of Validation and Verification.
        Validation is process of examining whether or not the software satisfies
        the user requirements. Verification is the process of confirming if the
        software is meeting the business requirements. This is interesting,
        isn’t it?
      </p>
    </div>
  );
};

export default CoursesOverview;
