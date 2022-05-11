import React, { useState } from "react";
import courseStore from "../../../../utils/Store";
import axios from "axios";

const CheckoutBody = () => {
  const [loading, setLoading] = useState(false);
  const courses = courseStore((state) => state.courses);

  const total = courses
    .map((item) => item.wholePrice)
    .reduce((acc, cc) => acc + cc, 0);

  const MobilePayment = async () => {
    setLoading(true);
    const { data } = await axios.post(
      // "https://freelancer-solutions.herokuapp.com/payment",
      "http://localhost:5000/payment",
      {
        total,
      }
    );

    if (data) {
      setLoading(false);
      window.location.replace(data);
    }
  };
  return (
    <div className="px-4 py-8 md:py-32 md:px-36">
      <h3 className="mb-8 text-lg font-medium text-color-one md:text-3xl">
        Admission Info
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-3">
          <h4 className="pb-2 text-xl border-b text-color-one">Student Info</h4>
          {/* Billing Info */}
          <form action="" className="w-full py-10">
            <div className="w-full mb-5">
              <label
                className="block mb-3 text-base font-medium text-color-one"
                htmlFor="grid-first-name"
              >
                Name *
              </label>
              {/* inputField Country */}
              <input
                className="block w-full px-4 py-3 border rounded appearance-none text-color-one focus:outline placeholder:text-color-one"
                type="text"
                required
                placeholder="First Name"
              ></input>
            </div>

            <div className="w-full mb-5">
              <label
                className="block mb-3 text-base font-medium text-color-one"
                htmlFor="grid-first-name"
              >
                Phone Number *
              </label>
              {/* inputField Phone Number */}
              <input
                className="block w-full px-4 py-3 border rounded appearance-none text-color-one focus:outline placeholder:text-color-one"
                type="number"
                required
                placeholder="+880 19411 99600"
              ></input>
            </div>

            <div className="flex flex-wrap ">
              <div className="w-full pr-0 mb-3 md:w-1/2 md:mb-0 md:pr-6">
                <label
                  className="block mb-3 text-base font-medium text-color-one"
                  htmlFor="grid-first-name"
                >
                  Email Address *
                </label>
                {/* inputField Email address */}
                <input
                  className="block w-full px-4 py-3 border rounded appearance-none text-color-one focus:outline placeholder:text-color-one"
                  type="text"
                  required
                  placeholder="Email Address"
                ></input>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block mb-3 text-base font-medium text-color-one"
                  htmlFor="grid-first-name"
                >
                  Confirm Email Address *
                </label>
                {/* inputField confirm Email address */}
                <input
                  className="block w-full px-4 py-3 border rounded appearance-none text-color-one focus:outline placeholder:text-color-one"
                  type="text"
                  required
                  placeholder="Confirm Email Address"
                ></input>
              </div>
            </div>

            <div className="flex flex-wrap mt-5">
              <div className="w-full pr-0 mb-3 md:w-1/2 md:mb-0 md:pr-6">
                <label
                  className="block mb-3 text-base font-medium text-color-one"
                  htmlFor="grid-first-name"
                >
                  Password *
                </label>
                {/* inputField Password */}
                <input
                  className="block w-full px-4 py-3 border rounded appearance-none text-color-one focus:outline placeholder:text-color-one"
                  type="text"
                  required
                  placeholder="Password"
                ></input>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block mb-3 text-base font-medium text-color-one"
                  htmlFor="grid-first-name"
                >
                  Confirm Password *
                </label>
                {/* inputField confirm password */}
                <input
                  className="block w-full px-4 py-3 border rounded appearance-none text-color-one focus:outline placeholder:text-color-one"
                  type="text"
                  placeholder="Confirm Password"
                ></input>
              </div>
            </div>
            {/* <p className="py-5 text-sm italic text-color-eleven ">
              A strong password is required. The password must be at least 6
              characters in length. Consider adding letters, numbers, and
              symbols to increase the password strength.
            </p> */}

            {/* <div className="flex flex-wrap ">
              <div className="w-full pr-0 mb-3 md:w-1/2 md:mb-0 md:pr-6">
                <label
                  className="block mb-3 text-base font-medium text-color-one"
                  htmlFor="grid-first-name"
                >
                  First Name *
                </label>
               
                <input
                  className="block w-full px-4 py-3 border rounded appearance-none text-color-one focus:outline placeholder:text-color-one"
                  type="text"
                  required
                  placeholder="First Name"
                ></input>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block mb-3 text-base font-medium text-color-one"
                  htmlFor="grid-first-name"
                >
                  Last Name *
                </label>
              
                <input
                  className="block w-full px-4 py-3 border rounded appearance-none text-color-one focus:outline placeholder:text-color-one"
                  type="text"
                  required
                  placeholder="Last Name"
                ></input>
              </div>
            </div> */}

            {/* <div className="flex flex-wrap py-5">
              <div className="w-full pr-0 mb-3 md:w-2/3 md:mb-0 md:pr-6">
                <label
                  className="block mb-3 text-base font-medium text-color-one"
                  htmlFor="grid-first-name"
                >
                  Street Address *
                </label>
                
                <input
                  className="block w-full px-4 py-3 border rounded appearance-none text-color-one focus:outline placeholder:text-color-one"
                  type="text"
                  required
                  placeholder="Street Address"
                ></input>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
                <label
                  className="block mb-3 text-base font-medium text-color-one"
                  htmlFor="grid-first-name"
                ></label>
                
                <input
                  className="block w-full px-4 py-3 border rounded appearance-none mt-9 text-color-one focus:outline placeholder:text-color-one"
                  type="text"
                  required
                  placeholder="Apartment, suite, or unit"
                ></input>
              </div>
            </div> */}

            {/* <div className="flex flex-wrap mb-5">
              <div className="w-full pr-0 mb-3 md:w-2/4 md:mb-0 md:pr-6">
                <label
                  className="block mb-3 text-base font-medium text-color-one"
                  htmlFor="grid-first-name"
                >
                  City *
                </label>
               
                <input
                  className="block w-full px-4 py-3 border rounded appearance-none text-color-one focus:outline placeholder:text-color-one"
                  type="text"
                  required
                  placeholder="City"
                ></input>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
                <label
                  className="block mb-3 text-base font-medium text-color-one"
                  htmlFor="grid-first-name"
                >
                  State *
                </label>
                
                <input
                  className="block w-full px-4 py-3 border rounded appearance-none text-color-one focus:outline placeholder:text-color-one"
                  type="text"
                  required
                  placeholder="State"
                ></input>
              </div>
              <div className="w-full px-3 mb-6 md:w-1/4 md:mb-0">
                <label
                  className="block mb-3 text-base font-medium text-color-one"
                  htmlFor="grid-first-name"
                >
                  Zip Code *
                </label>
                
                <input
                  className="block w-full px-4 py-3 border rounded appearance-none text-color-one focus:outline placeholder:text-color-one"
                  type="number"
                  required
                  placeholder="Zip Code"
                ></input>
              </div>
            </div> */}
          </form>
        </div>
        {/* Order Summery */}
        <div
          className="p-5 border rounded-md md:ml-8"
          style={{ height: "55%" }}
        >
          <h2 className="text-xl text-color-one mb-7">Order Summery</h2>
          <h5 className="mb-4">
            <span className="font-medium text-color-one">Courses: </span>
            <span className="text-base text-color-one">
              Web Design for Beginners: Start Learning HTML, Easy Way
            </span>
          </h5>
          <h4 className="pb-4 mb-4 font-medium border-b text-color-one">
            Total:{" "}
            <span className="font-normal ">
              <span>&#2547;</span>
              {total}
            </span>
          </h4>
          <button className="text-sm text-color-one">
            Have a coupon?
            <span className="ml-1 text-color-eight">
              Click here to enter your code
            </span>
          </button>
          {/* <Link to="/checkout"> */}
          <button
            onClick={MobilePayment}
            className="px-16 py-3 mt-20 font-bold text-white border rounded-md shadow bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three "
          >
            {loading ? "Loading..." : "Payment"}
          </button>
          {/* </Link> */}
          {/* <Link to="/checkout">
            <button className="px-16 py-3 mt-5 italic font-extrabold text-blue-600 bg-yellow-400 border rounded-md shadow hover:bg-white hover:border-yellow-500 hover:border hover:text-color-three">
              Checkout
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutBody;
