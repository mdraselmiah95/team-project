import React from "react";
import { useParams, Link } from "react-router-dom";
import Course from "../../courses/course/Course";
import "./Courses.css";
import { fakeData } from "../../../../data/fakeData";
import { useQuery } from "react-query";
import axios from "axios";

const SearchResult = () => {
  const { title } = useParams();
  const url = "https://lxnpjwwijxqnrluhcfsr.nhost.run/v1/graphql";

  const { data, isLoading } = useQuery("products", async () => {
    const { data } = await axios({
      url: url,
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": "3a590f26c50099fdc779b212c090c1bf",
      },
      method: "POST",
      data: {
        query: `
        {
          products {
            base64
            category
            courseOverview
            creator
            description
            descriptionTow
            id
            image
            language
            price
            star
            starCount
            students
            subtitle
            title
            user_id
            wholePrice
          }
        }`,
      },
    });
    return data;
  });
  const newAddedProducts = fakeData.concat(
    data?.data?.products.map((item) => item)
  );

  const filterData = isLoading
    ? fakeData?.filter((item) =>
        Object.values(item).join("").toLowerCase().includes(title.toLowerCase())
      )
    : newAddedProducts?.filter((item) =>
        Object.values(item).join("").toLowerCase().includes(title.toLowerCase())
      );
  return (
    <div className="px-6 py-8 lg:py-28 lg:px-36 bg-color-four">
      <div className="items-center justify-between flex-none md:flex">
        <div className="mb-8 text-center md:mb-0 md:text-left coursesTitle">
          <h1 className="text-xl font-medium md:text-4xl text-color-one">
            {filterData.length !== 0 ? title : "No Result Found"}
          </h1>
        </div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-4 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {filterData?.map((data) => (
            <Course key={data.id} data={data} />
          ))}
        </div>
        <div className="flex justify-center">
          {filterData.length === 0 && (
            <Link to="/">
              <button className="py-4 my-12 ml-8 font-bold text-white rounded-md hover:text-color-three hover:bg-white hover:border-color-three hover:border border px-11 bg-color-three ">
                Go Back
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
