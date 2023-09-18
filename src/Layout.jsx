import AOS from "aos";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./partials/Header";
import Banner from "./partials/Banner";
import PageIllustration from "./partials/PageIllustration";

export function Layout() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []);

  useEffect(() => {
    const html = document.body.parentNode;
    html.style.scrollBehavior = "auto";

    window.scroll({ top: 0 });

    html.style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative h-0 max-w-6xl mx-auto pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <Outlet />
      </main>

      <Banner />
    </div>
  );
}

export default Layout;

