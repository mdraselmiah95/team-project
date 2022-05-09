import React from "react";
import CourseBanner from "../courseBanner/CourseBanner";
import CourseBody from "../courseBody/CourseBody";
import "./CourseHome.css";
import { useParams } from "react-router-dom";
import { fakeData } from "../../../../data/fakeData";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const CourseHome = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  // const { data } = queryClient.getQueryData("products");

  const url = "https://lxnpjwwijxqnrluhcfsr.nhost.run/v1/graphql";

  const { data, isLoading } = useQuery(
    ["products", id],
    async () => {
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
    },
    {
      initialData: () => queryClient.getQueryData("products"),
    }
  );
  const newAddedProducts = fakeData.concat(
    data?.data?.products.map((item) => item)
  );
  const findProduct = isLoading
    ? fakeData?.find((item) => item.id === id)
    : newAddedProducts?.find((item) => item.id === id);

  return (
    <div>
      <CourseBanner findProduct={findProduct} />
      <CourseBody findProduct={findProduct} />
    </div>
  );
};

export default CourseHome;
