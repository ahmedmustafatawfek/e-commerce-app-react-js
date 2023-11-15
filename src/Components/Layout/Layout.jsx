import React from "react";
// import styles from "./Layout.module.css";
import NavBar from "../NavBar/NavBar";
import Discount from "../Discount/Discount";
import { Outlet } from "react-router";

export default function Layout() {
  return <>
  <Discount/>
  <NavBar/>
  <Outlet />
  
  </>;
}
