import React from "react";
import MyCourses from "../myCourses/MyCourses";
import ProfileBanner from "../profileBanner/ProfileBanner";
import QuizResults from "../quizResults/QuizResults";
import SectionTwo from "../sectionTwo/SectionTwo";

const ProfileHome = () => {
  return (
    <div>
      <ProfileBanner />
      <SectionTwo />
      <MyCourses />
      <QuizResults />
    </div>
  );
};

export default ProfileHome;
