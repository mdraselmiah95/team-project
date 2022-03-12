import "./Banner.css";

const Banner = () => {
  const HeroImage = " https://i.ibb.co/KzgCF3j/Hero-Image.png";
  const icon = "https://i.ibb.co/rfh773h/Arrow-Down.png";
  return (
    <div className="mt-20 lg:pb-20 bg-color-four">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-11 py-14 lg:pt-28 lg:pl-36">
          <h1 className="text-4xl font-bold text-color-three lg:text-7xl">
            The Next Generation
          </h1>
          <h2 className="mt-3 mb-5 text-2xl font-medium lg:text-4xl text-color-five">
            Of Freelancers Education
          </h2>
          <p className="mb-4 text-xl text-color-two lg:mb-16">
            Enhance your skills anytime from the best professionals courses &
            Upload your course tutorial to become an online teacher.{" "}
          </p>
          <div className="lg:absolute">
            <div className="lg:flex">
              <button className="py-2 my-2 font-medium text-white rounded-t shadow lg:my-0 px-7 bg-color-three hover:opacity-75">
                Courses
              </button>
              <button className="py-2 mx-1 font-medium text-white rounded-t shadow px-7 bg-color-five hover:opacity-75">
                Mentor
              </button>
              <button className="py-2 font-medium text-white rounded-t shadow px-7 bg-color-five hover:opacity-75">
                Company
              </button>
            </div>
            <div className="py-4 pr-3 bg-white rounded lg:pl-6 lg:flex">
              <div className="mb-4 border-r border-color-seven lg:mb-0">
                <div className="flex items-center mr-14">
                  <h6 className="mr-6 text-color-six">Select Subject</h6>
                  <img
                    src={icon}
                    alt="icon"
                    style={{ height: "20px", width: "20px" }}
                    className="cursor-pointer"
                  />
                </div>
                <h4 className="text-lg text-color-one">Programming & Tech</h4>
              </div>
              <div className="mb-4 border-r border-color-seven lg:ml-14 lg:mb-0">
                <div className="flex items-center lg:mr-14">
                  <h6 className="lg:mr-6 text-color-six">Computer Skill</h6>
                  <img
                    src={icon}
                    alt="icon"
                    className="cursor-pointer"
                    style={{ height: "20px", width: "20px" }}
                  />
                </div>
                <h4 className="text-lg text-color-one">Beginner</h4>
              </div>
              <div className="mb-4 lg:mx-14 lg:mb-0">
                <div className="flex items-center lg:mr-14">
                  <h6 className="lg:mr-6 text-color-six">Locations</h6>
                  <img
                    src={icon}
                    alt="icon"
                    className="cursor-pointer"
                    style={{ height: "20px", width: "20px" }}
                  />
                </div>
                <h4 className="text-lg text-color-one">Dhaka</h4>
              </div>
              <button className="px-6 py-3 font-bold text-white border rounded shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three ">
                Search Now
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={HeroImage}
            alt="HeroImage"
            className="object-none banner"
            // style={{ height: "113.3%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
