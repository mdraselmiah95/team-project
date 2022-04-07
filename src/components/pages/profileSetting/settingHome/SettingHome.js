import React from "react";
import AMentor from "../aMentor/AMentor";
import ChangeDetails from "../changeDetails/ChangeDetails";
import SettingBanner from "../settingBanner/SettingBanner";
import UploadCourse from "../uploadCourse/UploadCourse";

const SettingHome = () => {
  return (
    <div>
      <SettingBanner />
      <ChangeDetails />
      <AMentor />
      <UploadCourse />
    </div>
  );
};

export default SettingHome;
