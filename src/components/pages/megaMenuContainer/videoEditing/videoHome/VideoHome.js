import React from "react";
import Course from "../../../../Shared/course/Course";
import VideoBanner from "../videoBanner/VideoBanner";
import VideoBody from "../videoBody/VideoBody";

const VideoHome = () => {
  return (
    <div>
      <VideoBanner />
      <VideoBody />
      <Course />
    </div>
  );
};

export default VideoHome;
