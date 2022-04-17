import React from "react";
import { Link } from "react-router-dom";
import courseStore from "../../../../utils/Store";

const Carts = () => {
  const courses = courseStore((state) => state.courses);
  const removeItem = courseStore((state) => state.dispatch);
  const total = courses
    .map((item) => item.wholePrice)
    .reduce((acc, cc) => acc + cc, 0);

  return courses.length === 0 ? (
    <div className="px-5 py-12 bg-cover lg:py-20 lg:px-28 bg-courses-bg-two">
      <Link to="/courses">
        <h2 className="mb-10 text-3xl font-medium text-center cursor-pointer lg:text-4xl text-color-one">
          Go to courses
        </h2>
      </Link>
    </div>
  ) : (
    <div className="px-6 py-8 md:px-36 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* shopping cart */}
        <div className="col-span-2">
          <h3 className="mb-10 text-lg font-medium text-color-one md:text-3xl">
            Applied Courses
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
                    <td
                      className="w-4 h-4 pr-2 font-bold cursor-pointer md:pr-5"
                      onClick={() =>
                        removeItem({ type: "remove/courses", payload: data })
                      }
                    >
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
                      {data.title}
                    </td>
                    <td>
                      <div className="flex lg:pl-12 lg:pr-20">
                        <h2 className="mr-2 text-lg font-bold md:text-2xl text-color-eight">
                          <span>&#2547;</span>
                          {data.wholePrice}
                        </h2>
                        <h5 className="font-medium text-color-two">
                          <span>&#2547;</span>
                          <del>{data.price}</del>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <h2 className="text-2xl font-bold text-color-eight">
                        <span>&#2547;</span>
                        {data.wholePrice}
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
            Course Total
          </h3>
          <div className="flex items-center justify-between py-4 border-b ">
            <h3 className="text-lg font-medium text-color-one">Subtotal</h3>
            <h3 className="text-2xl font-bold text-color-eight">
              <span>&#2547;</span>
              {total}
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
