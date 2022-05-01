import Banner from "../banner/Banner";
import SectionFive from "../sectionFive/SectionFive";
import SectionFourPartTwo from "../sectionFourPartTwo/SectionFourPartTwo";
import React from "react";
import CarouselSlider from "../carouselSlider/CarouselSlider";
import "./Home.css";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const location = useLocation();
  if (location.hash.split("=").includes("emailVerify")) {
    toast.success("Successfully logged, Please login with your account");
  }
  return (
    <div>
      <ToastContainer />
      <Banner />
      <CarouselSlider />
      <SectionFourPartTwo />
      <SectionFive />
    </div>
  );
};

export default Home;
