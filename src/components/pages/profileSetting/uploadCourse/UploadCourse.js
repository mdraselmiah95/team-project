import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import authStore from "../../../../utils/Store";
import axios from "axios";
import { ADD_PRODUCT } from "../api";
import { toast, ToastContainer } from "react-toastify";

const UploadCourse = () => {
  const { register, handleSubmit, reset } = useForm();
  const url = "https://lxnpjwwijxqnrluhcfsr.nhost.run/v1/graphql";
  const user = authStore((state) => state.user);
  const queryClient = useQueryClient();

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const mutation = useMutation(
    async (product) => {
      const { data } = await axios({
        url: url,
        headers: {
          "Content-Type": "application/json",
          "x-hasura-admin-secret": "3a590f26c50099fdc779b212c090c1bf",
        },
        method: "POST",
        data: {
          variables: {
            title: product.title,
            price: +product.price,
            description: product.description,
            videoLink: product.videoLink,
            image,
            user_id: user.id,
          },
          query: ADD_PRODUCT,
        },
      });
      return data?.data?.insert_product_one;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
        toast.success("Successfully course added");
      },
    }
  );

  const onSubmit = async (data) => {
    try {
      await mutation.mutateAsync(data);
      reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="px-4 py-10 md:px-36 md:pt-20 md:pb-12">
      <ToastContainer />
      <h1 className="text-4xl font-medium text-center text-color-one">
        Upload A New Course
      </h1>
      <div className="grid md:grid-cols-2 md:mt-16 mt-7">
        {/* Course Details */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mr-4 md:mr-12">
            <h1 className="mb-6 text-2xl font-medium text-color-one">
              Course Details:
            </h1>
            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Course Title:
              </label>
              <input
                type="text"
                name="Course Title"
                placeholder="Enter Course Title"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("title", { required: true })}
              />
            </div>

            {/* <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Company(optional):
              </label>
              <input
                type="text"
                name="Company"
                placeholder="Name of your company"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div> */}

            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Course Price:
              </label>
              <input
                type="text"
                name="Course Price"
                placeholder="Enter course price"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("price", { required: true })}
              />
            </div>

            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Video Link
              </label>
              <input
                type="text"
                placeholder="Enter course youtube video link"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("videoLink", { required: true })}
              />
            </div>

            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Course Description:
              </label>
              <textarea
                type="text"
                name="Email"
                placeholder="Feature 01 .."
                className="block w-full h-32 px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("description", { required: true })}
              />
            </div>

            <div className="flex items-center">
              <h3 className="text-lg text-color-two mr-14">Thumbnail Image:</h3>
              <input
                type="file"
                placeholder="Feature 01 ..."
                className="px-4 py-2 font-medium text-white border rounded-lg hover:bg-white hover:border-color-three hover:text-color-three bg-color-three"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="px-4 py-4 my-4 font-medium text-white border rounded-lg hover:bg-white hover:border-color-three hover:text-color-three bg-color-three"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
        {/* Videos */}
        <div className="md:ml-12">
          {/* <h1 className="mb-6 text-2xl font-medium text-color-one">Videos:</h1> */}
          {/* <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Video 01 Title:
            </label>
            <input
              type="text"
              name="Video"
              placeholder="Enter video title"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div> */}
          {/* <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Video 01 Link:
            </label>
            <input
              type="url"
              name="Video"
              placeholder="Enter video link"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div> */}
          {/* <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Video 02 Title:
            </label>
            <input
              type="text"
              name="Video"
              placeholder="Enter video title"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-5 ">
            <label className="block mb-3 text-lg text-color-two">
              Video 02 Link:
            </label>
            <input
              type="url"
              name="Video"
              placeholder="Enter video link"
              className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button className="float-right px-4 py-2 font-medium text-white border rounded-lg hover:bg-white hover:border-color-three hover:text-color-three bg-color-three">
            Add More Video
          </button> */}
          {/* Quiz */}
          <div className="mt-24">
            <h1 className="mb-6 text-2xl font-medium text-color-one">Quiz:</h1>
            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Quiz 1: Question
              </label>
              <input
                type="text"
                name="Question"
                placeholder="Quiz 1: Question"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Option 1:
              </label>
              <input
                type="text"
                name="option"
                placeholder="Enter your option 1"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Option 2:
              </label>
              <input
                type="text"
                name="option"
                placeholder="Enter your option 2"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="mb-5 ">
              <label className="block mb-3 text-lg text-color-two">
                Option 3:
              </label>
              <input
                type="text"
                name="option"
                placeholder="Enter your option 3"
                className="block w-full px-5 py-4 border rounded-lg shadow-sm border-color-thirteen focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button className="float-right px-4 py-2 font-medium text-white border rounded-lg hover:bg-white hover:border-color-three hover:text-color-three bg-color-three">
              Add More Questions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCourse;
