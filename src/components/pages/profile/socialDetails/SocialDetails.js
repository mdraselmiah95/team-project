import React from "react";
import authStore from "../../../../utils/Store";

const SocialDetails = () => {
  const userDetails = authStore((state) => state.userDetails);

  const facebook =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/Facebook_xpxn6k.png";
  const linkedin =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/LinkedIN_bn5vez.png";
  const behance =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/Behance_xrmgik.png";
  const gitHub =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/Github_si5mw9.png";
  return (
    <div className=" md:pb-32 md:px-36 px-6 md:my-0 my-6">
      <h2 className="text-color-one font-medium text-2xl mb-6">
        Social Connection
      </h2>
      <div className="flex">
        {userDetails?.facebook && (
          <a
            href={userDetails?.facebook}
            className=" mr-5"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
        )}
        {userDetails?.linkedin && (
          <a
            href={userDetails?.linkedin}
            className=" mr-5"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        )}
        {userDetails?.behance && (
          <a
            href={userDetails?.behance}
            className=" mr-5"
            target="_blank"
            rel="noreferrer"
          >
            <img src={behance} alt="linkedin" />
          </a>
        )}

        {userDetails?.github && (
          <a
            href={userDetails?.github}
            className=" mr-5"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHub} alt="gitHub" />
          </a>
        )}
      </div>
    </div>
  );
};

export default SocialDetails;
