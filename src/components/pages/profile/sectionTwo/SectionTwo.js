import React, { useState } from "react";
import "./SectionTwo.css";
import ReactPlayer from "react-player/youtube";
import authStore from "../../../../utils/Store";

const SectionTwo = () => {
  const [video, setVideoBtn] = useState(false);
  const user = authStore((state) => state.user);
  const userDetails = authStore((state) => state.userDetails);
  const img = "https://i.ibb.co/tw0jffZ/Group.png";
  const imgTwo = "https://i.ibb.co/Qvv15bs/play.png";
  const url = "https://www.youtube.com/watch?v=qz0aGYrrlhU&t=11s";
  return (
    <div className=" grid md:grid-cols-2 items-center justify-center px-5 py-7 md:px-36">
      <div className="md:mr-14 md:mt-28">
        <h2 className="text-color-one font-medium text-2xl mb-6">
          About "{user.displayName}"
        </h2>
        <p className="text-color-two">{userDetails?.description}</p>
      </div>
      <div className="relative bg-black rounded-xl md:-mt-96 md:ml-28">
        {!video ? (
          <>
            <img
              src={img}
              alt="icon"
              className="object-fill w-full h-full opacity-50 cursor-pointer "
              type="button"
            />

            <button className="btn" onClick={() => setVideoBtn(true)}>
              <img src={imgTwo} alt="play icon" style={{ height: "75px" }} />
            </button>
          </>
        ) : (
          <ReactPlayer
            url={url}
            onError={(err) => console.log(err)}
            onEnded={() => setVideoBtn(false)}
            controls
            playing
            width="422px"
            height="422px"
          />
        )}
      </div>
    </div>
  );
};

export default SectionTwo;
