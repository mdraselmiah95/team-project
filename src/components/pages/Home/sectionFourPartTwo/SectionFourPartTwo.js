import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const SectionFourPartTwo = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./dataTwo.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services); JSON response
  return (
    <div className="px-5 py-5 lg:px-36 md:py-32 bg-color-four">
      <div className="container">
        <h1 className="mb-12 text-3xl font-medium text-center lg:text-4xl text-color-one">
          Service That Help You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3">
          {services.map((data) => (
            <Service key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFourPartTwo;
