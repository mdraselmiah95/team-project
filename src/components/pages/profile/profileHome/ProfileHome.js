import React from "react";
import MyCourses from "../myCourses/MyCourses";
import ProfileBanner from "../profileBanner/ProfileBanner";
import QuizResults from "../quizResults/QuizResults";
import SectionTwo from "../sectionTwo/SectionTwo";
import SocialDetails from "../socialDetails/SocialDetails";

const ProfileHome = () => {
  return (
    <div>
      <ProfileBanner />
      <SectionTwo />
      <MyCourses />
      <QuizResults />
      <SocialDetails />
    </div>
  );
};

export default ProfileHome;
