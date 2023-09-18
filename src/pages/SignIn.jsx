import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <section className="relative">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h1 className="h1">Welcome back!</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <label
                    className="block mb-1 text-sm font-medium text-gray-300"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full text-gray-300 form-input"
                    placeholder="you@youremail.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <label
                    className="block mb-1 text-sm font-medium text-gray-300"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full text-gray-300 form-input"
                    placeholder="Password (at least 10 characters)"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                      />
                      <span className="ml-2 text-gray-400">
                        Keep me signed in
                      </span>
                    </label>
                    <Link
                      to="/reset-password"
                      className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mt-6 -mx-3">
                <div className="w-full px-3">
                  <button className="w-full text-white bg-purple-600 btn hover:bg-purple-700">
                    Sign in
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-6 text-center text-gray-400">
              Don’t you have an account?{" "}
              <Link
                to="/signup"
                className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
