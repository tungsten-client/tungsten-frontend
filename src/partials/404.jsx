import Layout from "../Layout";

import { Link } from "react-router-dom";

export const NotFound = () => (
  <Layout>
    <div className="w-full h-screen pt-32 pb-10 md:pt-40 md:pb-16">
      <div className="container flex flex-col items-center justify-center h-full mx-auto text-center gap-y-8">
        <div className="flex flex-col items-center">
          <h1 className="flex w-full text-6xl font-bold text-white opacity-75 justify-evenly md:text-8xl">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
          <p className="-mt-4 text-4xl font-bold with-indigo-gradient">
            Page not found...
          </p>
        </div>

        <div className="flex flex-col items-center text-indigo-300 gap-y-2">
          <p>We couldn't find the page you were looking for.</p>
          <Link
            to="/"
            className="flex items-center justify-between py-2 pl-4 pr-1 text-sm font-semibold transition border-2 rounded-full group duration-400 hover:bg-indigo-700/25 hover:border-indigo-700 border-indigo-700/75 bg-indigo-600/10 gap-x-4 w-fit"
          >
            Go Home
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFound;

