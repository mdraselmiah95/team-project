import React, { useEffect, useState } from "react";
import Course from "../course/Course";
import "./Courses.css";
import axios from "axios";
import { useQuery } from "react-query";

const Courses = () => {
  const url = "https://lxnpjwwijxqnrluhcfsr.nhost.run/v1/graphql";

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
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
            videoLink
          }
        }`,
      },
    });
    console.log(data);
    return data;
  });
  const newAddedProducts = courses?.concat(
    data?.data?.products.map((item) => item)
  );

  const filterData = isLoading
    ? courses?.filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    : newAddedProducts?.filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase())
      );

  useEffect(() => {
    fetch("./coursesDetails.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="px-6 py-8 lg:py-28 lg:px-36 bg-color-four">
      <div className="items-center justify-between flex-none md:flex">
        <div className="mb-8 text-center md:mb-0 md:text-left coursesTitle">
          <h1 className="text-xl font-medium md:text-4xl text-color-one">
            Our All Courses
          </h1>
          <p className="mt-5 text-color-two">
            We believe in technology and our team to take care of your career
            journey. We guarantee you will get the best service that you have
            never experienced before
          </p>
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="Search categorically  courses"
            className="w-72 px-4 py-2 mr-1 border-2 rounded-md cursor-pointer md:px-6 md:py-3 border-color-two bg-color-four placeholder:text-color-two"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <button className="px-4 py-2 font-bold text-white border rounded-md shadow md:px-6 md:py-3 bg-color-one hover:bg-white hover:border-color-three hover:border hover:text-color-three ">
            Search Now
          </button> */}
        </div>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-4 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {filterData.map((data) => (
            <Course key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
