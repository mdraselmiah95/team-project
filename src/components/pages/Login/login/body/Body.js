import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import React from "react";
import nhost from "../../../../../utils/Nhost";

const Body = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const { session, mfa, error } = await nhost.auth.signIn({
      email: data.email,
      password: data.password,
    });

    console.log("session", session);
    console.log("mfa", mfa);
    console.log("error", error);
    reset();
  };
  return (
    <div className="px-6 py-10 mt-20">
      <div className="grid items-center grid-cols-1 md:grid-cols-2">
        <div className="">
          <img
            src="https://i.ibb.co/4scS6G6/Login.png"
            alt="registration"
            className=""
          />
        </div>
        <div className="p-4" style={{ marginBottom: "120px" }}>
          <h2 className="mb-12 text-3xl font-medium text-color-one">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full pr-0 mb-3 md:w-9/12">
              <label
                class="block text-base text-color-one font-medium mb-3"
                for="grid-first-name"
              >
                Username *
              </label>
              {/* inputField Email address */}
              <input
                class="appearance-none block w-full text-color-one border rounded py-3 px-4 focus:outline placeholder:text-color-one"
                type="email"
                placeholder="Email Address/ Phone Number"
                name="email"
                {...register("email", { required: true })}
              ></input>
            </div>

            <div className="w-full pr-0 mb-3 md:w-9/12">
              <label
                class="block text-base text-color-one font-medium mb-3"
                for="grid-first-name"
              >
                Password *
              </label>
              {/* inputField Password */}
              <input
                class="appearance-none block w-full text-color-one border rounded py-3 px-4 focus:outline placeholder:text-color-one"
                type="password"
                placeholder="Your Password"
                name="password"
                {...register("password", { required: true })}
              ></input>
            </div>

            <button
              className="py-3 mt-5 font-bold text-white border rounded-md shadow px-28 bg-color-three hover:bg-white hover:border-color-three hover:border hover:text-color-three "
              type="submit"
            >
              Login
            </button>
            <div>
              <Link to="/register">
                <button className="mt-4 text-sm text-color-one">
                  Are you a new user?
                  <span className="ml-1 text-color-eight">Register Now</span>
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
