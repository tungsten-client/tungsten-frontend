import Layout from "../Layout";

import { Link } from "react-router-dom";

export function NotFound() {
  return (
    // we have to include the layout here cause react's router shits itself as usual
    <Layout>
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
        <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
          <h1
            className="mb-4 h1"
            data-aos="fade-up"
          >
            404 - Page Not Found
          </h1>
          <p
            className="mb-8 text-xl text-gray-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The page you are looking for could not be found.
          </p>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <Link
              className="w-full mb-4 text-white bg-purple-600 btn hover:bg-purple-700 sm:w-auto sm:mb-0"
              data-aos="fade-up"
              data-aos-delay="400"
              to="/"
            >
              Homepage
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;

