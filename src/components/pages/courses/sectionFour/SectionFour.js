import React, { useEffect, useState } from "react";
import SectionFourCourse from "../sectionFourCourse/SectionFourCourse";

const SectionFour = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("./dataOne.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <div className="px-5 py-12 bg-cover lg:py-20 lg:px-28 bg-courses-bg-two lg:mb-40">
      <h2 className="mb-10 text-3xl font-medium text-center lg:text-4xl text-color-one">
        How to start my first course?
      </h2>
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {course.map((data) => (
            <SectionFourCourse key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
