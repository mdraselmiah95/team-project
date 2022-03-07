const Course = ({ data }) => {
  const { title, icon, details, backgroundImage } = data;
  console.log(data);
  return (
    <>
      <div
        className="p-12"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <img src={icon} alt="icon" />
        <h3 className="text-2xl text-color-one font-medium my-4">{title}</h3>
        <p className="text-color-two text-base">{details}</p>
      </div>
    </>
  );
};

export default Course;
