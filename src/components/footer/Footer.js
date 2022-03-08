const Footer = () => {
  const logo = "https://i.ibb.co/6w1KJ6d/Logo.png";
  return (
    <div className="px-4 py-5 pb-12 bg-color-four lg:px-28 lg:pt-44">
      <div className="grid grid-cols-2 md:grid-cols-6">
        <div className="m-6 lg:m-0 md:col-span-2">
          <img src={logo} alt="Footer logo" />
          <h5 className="mt-2 mb-1 text-base text-color-one">
            f.solutions@gmail.com
          </h5>
          <h5 className="text-base text-color-one">+(880) 19411 99607</h5>
        </div>
        <div className="m-6 lg:m-0">
          <h4 className="text-base font-bold lg:mb-3 text-color-one">
            Site Map
          </h4>
          <h5 className="text-base lg:mb-2 text-color-two">About Us</h5>
          <h5 className="text-base lg:mb-2 text-color-two">Location</h5>
          <h5 className="text-base text-color-two">Careers</h5>
        </div>
        <div className="m-6 lg:m-0">
          <h4 className="text-base font-bold lg:mb-3 text-color-one">
            Resources
          </h4>
          <h5 className="text-base lg:mb-2 text-color-two">FAQ</h5>
          <h5 className="text-base lg:mb-2 text-color-two">Blog</h5>
          <h5 className="text-base text-color-two">COVID-19</h5>
        </div>
        <div className="m-6 lg:m-0">
          <h4 className="text-base font-bold lg:mb-3 text-color-one">
            Support
          </h4>
          <h5 className="text-base lg:mb-2 text-color-two">FAQ</h5>
          <h5 className="text-base lg:mb-2 text-color-two">Privacy Policy</h5>
          <h5 className="text-base text-color-two">Term of Use</h5>
        </div>
        <div className="m-6 lg:m-0">
          <h4 className="text-base font-bold lg:mb-3 text-color-one">Follow</h4>
          <h5 className="text-base lg:mb-2 text-color-two">Facebook</h5>
          <h5 className="text-base lg:mb-2 text-color-two">Instagram</h5>
        </div>
      </div>
      <hr className="my-4 lg:my-8" />
      <p className="text-base text-center text-color-two">
        © 2021 Freelancer’s Solution.gov.bd. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
