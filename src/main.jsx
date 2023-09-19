import "aos/dist/aos.css";
import "./css/style.css";

import React from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import Donation from "./pages/Donation";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Layout from "./Layout";
import NotFound from "./partials/404";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "donation",
        Component: Donation,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "reset-password",
        Component: ResetPassword,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
