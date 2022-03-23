import Banner from "../banner/Banner";
import SectionFive from "../sectionFive/SectionFive";
import SectionFour from "../sectionFour/SectionFour";
import SectionFourPartTwo from "../sectionFourPartTwo/SectionFourPartTwo";
import React, { useEffect, useState } from "react";
import Carousel from "../../../Shared/Carousel";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./coursesDetails.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Banner />
      {/* <Partners /> */}
      {/* <SectionThree /> */}
      <SectionFour />
      <SectionFourPartTwo />
      <SectionFive />
      {/* <SectionSix /> */}
      {/* <SectionSeven /> */}
      {/* <SectionEight /> */}
      {/* <Carousel
        {...settings}
        slider={data.map((item) => (
          <div key={item.id} onClick={() => console.log(item)}>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      /> */}
    </>
  );
};

export default Home;
