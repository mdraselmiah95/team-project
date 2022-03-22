import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import React from "react";
import nhost from "../../../../../utils/Nhost";
const Body = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const { session, error } = await nhost.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        displayName: data.name,
      },
    });

    console.log("session", session);
    console.log("error", error);
    reset();
  };
  return (
    <div className="px-6 py-10 lg:pl-56 lg:pr-48 md:pt-32">
      <div className="grid items-center grid-cols-1 md:grid-cols-2">
        <div className="">
          <img
            src="https://i.ibb.co/4VRhB9L/image-7.png"
            alt="registration"
            className="w-3/5 mx-auto md:w-4/5"
          />
        </div>
        <div className="p-4" style={{ marginBottom: "33%" }}>
          <h2 className="mb-12 text-3xl font-medium text-color-one">
            Create Your Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap ">
              <div className="w-full pr-5 mb-3 md:w-1/2">
                <label
                  class="block text-base text-color-one font-medium mb-3"
                  for="grid-first-name"
                >
                  First Name *
                </label>
                {/* inputField First Name */}
                <input
                  class="appearance-none block w-full text-color-one border rounded py-3 px-4 focus:outline placeholder:text-color-one"
                  type="text"
                  required
                  placeholder="First Name"
                  {...register("name", { required: true })}
                ></input>
              </div>
              <div className="w-full mb-6 md:w-1/2 md:mb-0">
                <label
                  class="block text-base text-color-one font-medium mb-3"
                  for="grid-first-name"
                >
                  Last Name *
                </label>
                {/* inputField Last Name */}
                <input
                  class="appearance-none block w-full  text-color-one border rounded py-3 px-4 focus:outline placeholder:text-color-one"
                  type="text"
                  required
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                ></input>
              </div>
            </div>

            <div className="w-full pr-0 mb-3">
              <label
                class="block text-base text-color-one font-medium mb-3"
                for="grid-first-name"
              >
                Username *
              </label>
              {/* inputField Username */}
              <input
                class="appearance-none block w-full text-color-one border rounded py-3 px-4 focus:outline placeholder:text-color-one"
                type="email"
                required
                placeholder="Username"
                name="email"
                {...register("email", { required: true })}
              ></input>
            </div>

            <div className="w-full pr-0 mb-3">
              <label
                class="block text-base text-color-one font-medium mb-3"
                for="grid-first-name"
              >
                Phone Number *
              </label>
              {/* inputField Phone Number*/}
              <input
                class="appearance-none block w-full text-color-one border rounded py-3 px-4 focus:outline placeholder:text-color-one"
                type="number"
                required
                placeholder="Phone Number"
                name="phone"
                {...register("phone", { required: true })}
              ></input>
            </div>

            <div className="w-full pr-0 mb-3">
              <label
                class="block text-base text-color-one font-medium mb-3"
                for="grid-first-name"
              >
                Email Address *
              </label>
              {/* inputField Email Address */}
              <input
                class="appearance-none block w-full text-color-one border rounded py-3 px-4 focus:outline placeholder:text-color-one"
                type="number"
                required
                placeholder="Email Address"
                name="email"
                {...register("email", { required: true })}
              ></input>
            </div>

            <div className="w-full pr-0 mb-3">
              <label
                class="block text-base text-color-one font-medium mb-3"
                for="grid-first-name"
              >
                Password *
              </label>
              {/* inputField Password */}
              <input
                class="appearance-none block w-full text-color-one border rounded py-3 px-4 focus:outline placeholder:text-color-one"
                type="number"
                required
                placeholder="Password"
                name="password"
                {...register("password", { required: true })}
              ></input>
            </div>

            <div className="w-full pr-0 mb-3">
              <label
                class="block text-base text-color-one font-medium mb-3"
                for="grid-first-name"
              >
                Confirm Password *
              </label>
              {/* inputField Confirm Password*/}
              <input
                class="appearance-none block w-full text-color-one border rounded py-3 px-4 focus:outline placeholder:text-color-one"
                type="number"
                required
                placeholder="Re-type your password"
                name="passwordTwo"
                {...register("passwordTwo", { required: true })}
              ></input>
            </div>

            <button
              className="py-3 mt-5 font-bold text-white border rounded-md shadow px-28 bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three "
              type="submit"
            >
              Register
            </button>
            <div>
              <Link to="/login">
                <button className="mt-4 text-sm text-color-one">
                  Already Registered?
                  <span className="ml-1 text-color-eight">Login Now</span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
