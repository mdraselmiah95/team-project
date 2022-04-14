import React, { useState } from "react";
import AMentor from "../aMentor/AMentor";
import ChangeDetails from "../changeDetails/ChangeDetails";
import SettingBanner from "../settingBanner/SettingBanner";
import UploadCourse from "../uploadCourse/UploadCourse";

const SettingHome = () => {
  const [mentor, setMentor] = useState(false);
  return (
    <div>
      <SettingBanner />
      <ChangeDetails />
      <AMentor setMentor={setMentor} mentor={mentor} />
      {mentor && <UploadCourse />}
    </div>
  );
};

export default SettingHome;
