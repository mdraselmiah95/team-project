import React from "react";
import MyCourses from "../myCourses/MyCourses";
import ProfileBanner from "../profileBanner/ProfileBanner";
import SectionTwo from "../sectionTwo/SectionTwo";

const ProfileHome = () => {
  return (
    <div>
      <ProfileBanner />
      <SectionTwo />
      <MyCourses />
    </div>
  );
};

export default ProfileHome;
