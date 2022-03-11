const SectionEight = () => {
  return (
    <div className="lg:relative">
      <div className="bg-cover lg:absolute lg:w-10/12 lg:-mt-40 lg:ml-28 bg-bg-eight">
        <h1 className="pt-16 text-2xl font-medium text-center text-white lg:text-4xl">
          I’m confused, I want a proper guideline
        </h1>
        <div className="flex justify-center pt-10 pb-14">
          <button className="px-4 py-3 mr-3 font-bold bg-white rounded shadow hover:bg-gray-100 text-color-three lg:py-4 lg:px-6">
            Visit Our Support Center
          </button>
          <button className="px-4 py-3 font-bold text-white border border-white rounded shadow hover:bg-blue-400 hover:text-slate-600 lg:py-4 lg:px-6">
            All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
