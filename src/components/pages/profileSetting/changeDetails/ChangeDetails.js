import React, { useState } from "react";
import authStore from "../../../../utils/Store";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { ADD_USERINFO } from "../api";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const ChangeDetails = () => {
  const url = "https://lxnpjwwijxqnrluhcfsr.nhost.run/v1/graphql";
  const user = authStore((state) => state.user);
  const userDetails = authStore((state) => state.userDetails);
  const logOut = authStore((state) => state.dispatch);
  const dispatch = authStore((state) => state.dispatch);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const { data } = useQuery(["userDetails", user.userInfo?.id], async () => {
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

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (formData) => {
    try {
      if (user.userInfo === null) {
        const { data } = await axios({
          url: url,
          headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret": "3a590f26c50099fdc779b212c090c1bf",
          },
          method: "POST",
          data: {
            variables: {
              behance: formData.behance || userDetails?.behance,
              description: formData.description || userDetails?.description,
              facebook: formData.facebook || userDetails?.facebook,
              github: formData.github || userDetails?.github,
              linkedin: formData.linkedin || userDetails?.linkedin,
              title: formData.title || userDetails?.title,
              image: image || userDetails?.image,
              user_id: user.id,
            },
            query: ADD_USERINFO,
          },
        });
        if (data) {
          toast.success("Successfully details Created");
          queryClient.invalidateQueries("userDetails");
          logOut({ type: "remove/user", payload: [] });
          localStorage.removeItem("userInfo");
          navigate("/");
        }
      } else {
        const { data } = await axios({
          url: url,
          headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret": "3a590f26c50099fdc779b212c090c1bf",
          },
          method: "POST",
          data: {
            variables: {
              behance: formData.behance || userDetails?.behance,
              description: formData.description || userDetails?.description,
              facebook: formData.facebook || userDetails?.facebook,
              github: formData.github || userDetails?.github,
              linkedin: formData.linkedin || userDetails?.linkedin,
              image: image || userDetails?.image,
              title: formData.title || userDetails?.title,
            },
            query: `mutation UPDATE_USER_INFO(
              $behance: String
              $description: String
              $facebook: String
              $github: String
              $linkedin: String
              $image: String
              $title: String
            ) {
              update_userInfo_by_pk(
                pk_columns: {id: ${user.userInfo?.id}},
                _set: {
                  behance: $behance
                  description: $description
                  facebook: $facebook
                  github: $github
                  linkedin: $linkedin
                  image : $image
                  title: $title
                }
              ) {
                behance
                description
                facebook
                github
                id
                linkedin
                title
                image
              }
            }`,
          },
        });
        if (data) {
          toast.success("Successfully details Updated");
          queryClient.invalidateQueries("userDetails");
        }
      }
      reset();
    } catch (error) {
      if (error) {
        toast.error("something went wrong");
      }
    }
  };

  const facebook =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/Facebook_xpxn6k.png";
  const linkedin =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/LinkedIN_bn5vez.png";
  const behance =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/Behance_xrmgik.png";
  const gitHub =
    "https://res.cloudinary.com/mdraselmia/image/upload/v1649326201/social/Github_si5mw9.png";
  return (
    <div className="px-5 py-10 md:px-36 md:py-32">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2">
          {/* Change Details */}
          <div className="mr-5 md:mr-16">
            <h1 className="mb-6 text-2xl font-medium text-color-one">
              Change Details
            </h1>
            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue={user.displayName}
                readOnly
              />
            </div>

            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">Email</label>
              <input
                type="text"
                name="Email"
                placeholder="Enter email address"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue={user.email}
                readOnly
              />
            </div>

            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">Title</label>
              <input
                type="text"
                {...register("title")}
                placeholder="Enter profile title"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue={data?.title}
              />
            </div>
            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Description
              </label>
              <textarea
                type="text"
                {...register("description")}
                placeholder="Write about yourself"
                className="block w-full h-32 px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue={data?.description}
              />
            </div>
            <div className="flex items-center mb-4">
              <h3 className="text-lg text-color-two mr-14">Profile Picture</h3>
              <input
                type="file"
                placeholder="Feature 01 ..."
                className="px-4 py-2 font-medium text-white border rounded-lg hover:bg-white hover:border-color-three hover:text-color-three bg-color-three"
                onChange={handleImageChange}
              />
            </div>
            <button
              type="submit"
              className="py-6 font-bold text-white border rounded-md hover:bg-white hover:border-color-three hover:text-color-three px-14 bg-color-three"
            >
              Update Now
            </button>
          </div>
          {/* Social Details */}
          <div className="ml-5 md:ml-16">
            <h1 className="mb-6 text-2xl font-medium text-color-one">
              Social Details
            </h1>
            <div className="flex items-center mb-6">
              <img src={facebook} alt="facebook" className=" mr-7" />
              <input
                type="text"
                placeholder="Enter facebook profile link"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("facebook")}
                defaultValue={data?.facebook}
              />
            </div>

            <div className="flex items-center mb-6">
              <img src={linkedin} alt="linkedin" className=" mr-7" />
              <input
                type="text"
                placeholder="Enter linkedin profile link"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("linkedin")}
                defaultValue={data?.linkedin}
              />
            </div>

            <div className="flex items-center mb-6">
              <img src={behance} alt="bechance" className=" mr-7" />
              <input
                type="text"
                placeholder="Enter behance profile link"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("behance")}
                defaultValue={data?.behance}
              />
            </div>

            <div className="flex items-center mb-6">
              <img src={gitHub} alt="gitHub" className=" mr-7" />
              <input
                type="text"
                placeholder="Enter github profile link"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("github")}
                defaultValue={data?.github}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangeDetails;
