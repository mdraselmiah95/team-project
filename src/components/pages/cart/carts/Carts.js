import React from "react";
import { Link } from "react-router-dom";
import courseStore from "../../../../utils/courseStore";

const Carts = () => {
  const courses = courseStore((state) => state.courses);

  return (
    <div className="px-6 py-8 md:px-36 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* shopping cart */}
        <div className="col-span-2">
          <h3 className="mb-10 text-lg font-medium text-color-one md:text-3xl">
            Shopping Cart
          </h3>
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-lg text-justify border-b text-color-one ">
                  <th className="py-4"></th>
                  <th className="py-4"></th>
                  <th className="py-4">Course</th>
                  <th className="py-4">Price</th>
                  <th className="py-4">Subtotal</th>
                </tr>
              </thead>
              {courses.map((data) => (
                <tbody key={data.id} className="">
                  <tr className="border-b">
                    <td className="w-4 h-4 pr-2 font-bold cursor-pointer md:pr-5">
                      X
                    </td>
                    <td className="py-3 md:py-6">
                      <img
                        src={data.image}
                        alt="courseImage"
                        className="w-24 h-24 md:w-32 md:h-36 max-w-none"
                      />
                    </td>
                    <td className="text-base font-medium md:text-xl pl-7 text-color-one">
                      {data.titleTwo}
                    </td>
                    <td>
                      <div className="flex lg:pl-12 lg:pr-20">
                        <h2 className="mr-2 text-lg font-bold md:text-2xl text-color-eight">
                          ${data.wholePrice}
                        </h2>
                        <h5 className="font-medium text-color-two">
                          $<del>{data.price}</del>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <h2 className="text-2xl font-bold text-color-eight">
                        ${data.wholePrice}
                      </h2>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        {/* Cart Total */}
        <div className="text-center pl-7">
          <h3 className="mb-10 text-lg font-medium text-color-one md:text-3xl">
            Cart totals
          </h3>
          <div className="flex items-center justify-between py-4 border-b ">
            <h3 className="text-lg font-medium text-color-one">Subtotal</h3>
            <h3 className="text-2xl font-bold text-color-eight">$29</h3>
          </div>
          <div className="flex items-center justify-between text-lg font-medium pt-11 text-color-one">
            <h3>Shipping</h3>
            <h3>
              Free Shipping
              <input type="checkbox" className="ml-3 border rounded-full" />
            </h3>
          </div>
          <Link to="/checkout">
            <button className="px-16 py-4 mt-16 font-bold text-white border rounded shadow md:mt-24 md:px-20 bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three ">
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carts;
