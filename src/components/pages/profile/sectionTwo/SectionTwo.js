import React from "react";
import "./SectionTwo.css";
import authStore from "../../../../utils/Store";

const SectionTwo = () => {
  const user = authStore((state) => state.user);
  const userDetails = authStore((state) => state.userDetails);
  const img = "https://i.ibb.co/tw0jffZ/Group.png";
  const imgTwo = "https://i.ibb.co/Qvv15bs/play.png";
  return (
    <div className=" grid md:grid-cols-2 items-center justify-center px-5 py-7 md:px-36">
      <div className="md:mr-14 md:mt-28">
        <h2 className="text-color-one font-medium text-2xl mb-6">
          About "{user.displayName}"
        </h2>
        <p className="text-color-two">{userDetails?.description}</p>
      </div>
      <div className="relative bg-black rounded-xl md:-mt-96 md:ml-28">
        <img
          src={img}
          alt="videoImage"
          className="object-fill opacity-50 cursor-pointer"
        />
        <button className="btn">
          <img
            src={imgTwo}
            alt="play icon"
            style={{ height: "75px" }}
            // onClick={() => setShowModal(false)}
          />
        </button>
      </div>
    </div>
  );
};

export default SectionTwo;
