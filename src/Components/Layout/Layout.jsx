import React from "react";
// import styles from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Discount from "../Discount/Discount";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <>
      <Discount />
      <NavBar />
      <Outlet />
      <Toaster />

      <Footer />
    </>
  );
}
