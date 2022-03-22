import React from "react";

const SectionSix = () => {
  const icon1 = "https://i.ibb.co/crtTQyp/Icon1.png";
  const icon2 = "https://i.ibb.co/CwLLXfd/Icon2.png";
  const icon3 = "https://i.ibb.co/tZDYQLL/Icon3.png";

  return (
    <div className="bg-cover bg-bg-six">
      <div className="flex flex-wrap mx-auto">
        <div className="w-full p-5 lg:pt-20 lg:pb-32 lg:pr-32 lg:w-1/2 bg-color-four lg:pl-28">
          <div className="p-6">
            <h2 className="mb-2 text-2xl font-medium text-color-one">
              Government Approved
            </h2>
            <p className="text-base text-color-two">
              Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim dicit
              lobortis molestiae no,{" "}
            </p>
          </div>
          <div>
            <div className="flex p-6">
              <img
                className="mr-6"
                style={{ height: "56px", width: "56px" }}
                src={icon1}
                alt="icon"
              />
              <div>
                <h2 className="mb-2 text-2xl font-medium text-color-one">
                  24/7 helping support
                </h2>
                <p className="text-base text-color-two">
                  Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim
                  dicit lobortis molestiae no,{" "}
                </p>
              </div>
            </div>
            <div className="flex p-6">
              <img
                className="mr-6"
                style={{ height: "56px", width: "56px" }}
                src={icon2}
                alt="icon"
              />
              <div>
                <h2 className="mb-2 text-2xl font-medium text-color-one">
                  Easy payment methods
                </h2>
                <p className="text-base text-color-two">
                  Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim
                  dicit lobortis molestiae no,{" "}
                </p>
              </div>
            </div>
            <div className="flex p-6">
              <img
                className="mr-6"
                style={{ height: "56px", width: "56px" }}
                src={icon3}
                alt="icon"
              />
              <div>
                <h2 className="mb-2 text-2xl font-medium text-color-one">
                  Ensure quality contents
                </h2>
                <p className="text-base text-color-two">
                  Lorem ipsum dolor sit amet, ad vix fuisset assentior. Vim
                  dicit lobortis molestiae no,{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-8 py-6 lg:pt-20 lg:pb-40 lg:pl-24 lg:pr-20 lg:w-1/2">
          <h1 className="mb-6 text-2xl font-medium lg:text-4xl text-color-one">
            Here's what makes us different from other learning platform
          </h1>
          <p className="text-base text-color-two">
            we work for complete freelancing solutions for learner, mentors,
            professionals, companies, freelancers and outsourcers needs.
          </p>
          <div className="flex my-10 lg:my-16">
            <div>
              <h1 className="mb-1 text-4xl font-medium text-color-one">500</h1>
              <p className="text-base text-color-two">
                Professional mentors working actively
              </p>
            </div>
            <div className="mx-4 lg:mx-10">
              <h1 className="mb-1 text-4xl font-medium text-color-one">
                7.5K+
              </h1>
              <p className="text-base text-color-two">
                Active student whole Bangladesh
              </p>
            </div>
            <div>
              <h1 className="mb-1 text-4xl font-medium text-color-one">70</h1>
              <p className="text-base text-color-two">
                Active companies at different platform
              </p>
            </div>
          </div>
          <button className="px-6 py-4 font-bold text-white border rounded shadow bg-color-three hover:text-color-three hover:bg-white hover:border-color-three hover:border">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
