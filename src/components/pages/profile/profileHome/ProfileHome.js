import React from "react";
import MyCourses from "../myCourses/MyCourses";
import ProfileBanner from "../profileBanner/ProfileBanner";
import QuizResults from "../quizResults/QuizResults";
import SectionTwo from "../sectionTwo/SectionTwo";
import SocialDetails from "../socialDetails/SocialDetails";
import axios from "axios";
import authStore from "../../../../utils/Store";
import { useQuery } from "react-query";

const ProfileHome = () => {
  const url = "https://lxnpjwwijxqnrluhcfsr.nhost.run/v1/graphql";
  const user = authStore((state) => state.user);
  const dispatch = authStore((state) => state.dispatch);
  useQuery(["userDetails", user.userInfo?.id], async () => {
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
          userInfo_by_pk(id :${user.userInfo?.id}) {
            linkedin
            title
            github
            facebook
            description
            behance
            image
          }
        }`,
      },
    });
    dispatch({
      type: "add/userDetails",
      payload: data?.data?.userInfo_by_pk,
    });
    return data?.data?.userInfo_by_pk;
  });

  return (
    <div>
      <ProfileBanner />
      <SectionTwo />
      <MyCourses />
      <QuizResults />
      <SocialDetails />
    </div>
  );
};

export default ProfileHome;
