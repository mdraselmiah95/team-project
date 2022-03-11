const Partners = () => {
  const image = "https://i.ibb.co/BKRGTwJ/Group-1000001972.png";
  return (
    <div className="justify-items-center font-medium text-color-one text-center flex flex-col items-center my-10 xl:mx-72 mx-10">
      <h3 className="mb-5">Partnered With</h3>
      <img src={image} alt="partners" />
    </div>
  );
};

export default Partners;
