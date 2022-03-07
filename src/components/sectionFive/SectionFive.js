import { useEffect, useState } from "react";
import Course from "../course/Course";

const SectionFive = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("./dataOne.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div className="lg:py-20 lg:px-28 px-5 py-24 bg-cover bg-section-five">
      <h2 className="text-4xl font-medium text-color-one text-center mb-10">
        How to start my first course?
      </h2>
      <div className="container">
        <div className="lg:grid-cols-3	grid-cols-1 grid gap-10">
          {course.map((data) => (
            <Course key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
