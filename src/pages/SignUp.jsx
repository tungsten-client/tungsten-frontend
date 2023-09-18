import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const buttonHandler = () => {};

  return (
    <section className="relative">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h1 className="h1">
              Welcome! Join the future of Minecraft clients.
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <label
                    className="block mb-1 text-sm font-medium text-gray-300"
                    htmlFor="full-name"
                  >
                    Username <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    className="w-full text-gray-300 form-input"
                    placeholder="First and last name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap mb-4 -mx-3">
                <div className="w-full px-3">
                  <label
                    className="block mb-1 text-sm font-medium text-gray-300"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
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
                    Password <span className="text-red-600">*</span>
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
              <div className="text-sm text-center text-gray-500">
                By clicking signup, I agree to be contacted by Tungsten about
                affairs pertaining to my account.
              </div>
              <div className="flex flex-wrap mt-6 -mx-3">
                <div className="w-full px-3">
                  <button
                    className="w-full text-white bg-purple-600 btn hover:bg-purple-700"
                    onClick={buttonHandler}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-6 text-center text-gray-400">
              Already using Tungsten?{" "}
              <Link
                to="/signin"
                className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
