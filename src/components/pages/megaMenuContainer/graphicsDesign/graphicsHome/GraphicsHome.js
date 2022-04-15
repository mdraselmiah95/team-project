import React from "react";
import Course from "../../../../Shared/course/Course";
import GraphicsBanner from "../graphicsBanner/GraphicsBanner";
import GraphicsBody from "../graphicsBody/GraphicsBody";

const GraphicsHome = () => {
  return (
    <div>
      <GraphicsBanner />
      <GraphicsBody />
      <Course />
    </div>
  );
};

export default GraphicsHome;
