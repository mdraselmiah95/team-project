import React from "react";
import "./AMentor.css";
const AMentor = () => {
  return (
    <div className="px-4 md:px-36">
      <div className="flex items-center justify-between px-6 py-12 md:py-20 md:px-14 bg-color-four rounded-2xl">
        <h1 className="text-4xl font-medium text-color-one">
          Are your a mentor?
        </h1>
        <div className="flex items-center">
          <label
            for="toggle"
            className="text-2xl font-medium cursor-pointer text-color-one"
          >
            No
          </label>
          <div className="relative inline-block w-16 mx-3 align-middle transition ease-in select-none duration-300">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="absolute block w-6 h-6 bg-white rounded-full appearance-none cursor-pointer toggle-checkbox"
            />
            <label
              for="toggle"
              className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer toggle-label"
            ></label>
          </div>
          <label
            for="toggle"
            className="text-2xl font-medium cursor-pointer text-color-one"
          >
            Yes
          </label>
        </div>
      </div>
    </div>
  );
};

export default AMentor;
