import React from "react";
import MyCourse from "../myCourse/MyCourse";
import authStore from "../../../../utils/Store";
import { useQuery } from "react-query";
import axios from "axios";

const MyCourses = () => {
  const url = "https://lxnpjwwijxqnrluhcfsr.nhost.run/v1/graphql";

  const user = authStore((state) => state.user);

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
    return data?.data?.products;
  });

  if (isLoading) {
    return "Loading...";
  }

  const filterItems = data.filter((item) => item.user_id === user.id);

  return (
    <div className=" md:px-36 md:py-16 px-10 py-6">
      <h2 className="text-color-one text-2xl font-medium mb-6">My Courses</h2>
      <div className="grid grid-cols-1 gap-4 lg:gap-10 md:grid-cols-3 lg:grid-cols-4">
        {filterItems.map((data) => (
          <MyCourse key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
