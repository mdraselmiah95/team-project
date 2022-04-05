import React from "react";
import Course from "../../../../Shared/course/Course";
import ContentBanner from "../contentBanner/ContentBanner";
import ContentBody from "../contentBody/ContentBody";

const ContentHome = () => {
  return (
    <div>
      <ContentBanner />
      <ContentBody />
      <Course />
    </div>
  );
};

export default ContentHome;
