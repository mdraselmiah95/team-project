import React, { useEffect, useState } from "react";
import MyCourse from "../myCourse/MyCourse";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./coursesDetails.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const filterItems = courses.filter((data) => data.creator === "Creative IT");

  return (
    <div className=" md:px-36 md:py-16 px-10 py-6">
      <h2 className="text-color-one text-2xl font-medium mb-6">My Courses</h2>
      <div className="grid grid-cols-1 gap-4 lg:gap-10 md:grid-cols-3 lg:grid-cols-4">
        {filterItems.map((data) => (
          <MyCourse key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
