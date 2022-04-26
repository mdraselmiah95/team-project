import React from "react";
import authStore from "../../../../utils/Store";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";

const ProfileBanner = () => {
  const mentor = "https://i.ibb.co/y6gKcFy/Ellipse-1841.png";
  const user = authStore((state) => state.user);

  return (
    <div className="mt-20 bg-color-three md:pt-28 md:pb-24 md:pl-36 py-12 px-9">
      <div className="flex items-center">
        <img src={mentor} alt="mentor" className="w-32	h-32 mr-5" />
        <div className="text-white">
          <h2 className=" text-3xl font-bold mb-2">{user.displayName}</h2>
          <h5 className=" text-xl mb-8">
            {" "}
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={user.userInfo?.description}
            />
          </h5>
          <Link to="/profileSetting">
            <button className=" py-3 px-8 font-semibold border-white rounded border hover:focus:ring ">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
