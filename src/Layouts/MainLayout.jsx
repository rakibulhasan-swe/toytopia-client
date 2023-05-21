import React, { useEffect } from "react";
import NavigationBar from "../pages/shared/NavigationBar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const MainLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <NavigationBar />
      <div style={{ minHeight: "40vh" }}>
        <Outlet />
      </div>
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
