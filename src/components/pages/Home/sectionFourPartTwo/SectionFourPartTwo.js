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
    <div className="px-5 pb-5 lg:px-36 md:pb-32">
      <div className="container">
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
