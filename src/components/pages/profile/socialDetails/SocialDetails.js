import React from "react";

const SocialDetails = () => {
  const facebook =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/Facebook_xpxn6k.png";
  const linkedin =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/LinkedIN_bn5vez.png";
  const behance =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/Behance_xrmgik.png";
  const gitHub =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/Github_si5mw9.png";
  return (
    <div className=" md:pb-32 md:px-36 px-6">
      <h2 className="text-color-one font-medium text-2xl mb-6">Quiz Results</h2>
      <div className="flex">
        <a href="https://www.facebook.com/" className=" mr-5">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.linkedin.com/feed/" className=" mr-5">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.behance.net/" className=" mr-5">
          <img src={behance} alt="behance" />
        </a>
        <a href="https://github.com/" className=" mr-5">
          <img src={gitHub} alt="gitHub" />
        </a>
      </div>
    </div>
  );
};

export default SocialDetails;
