import React from "react";
import styles from "./ProtectedSigning.module.css";
import { Navigate } from "react-router";

export default function ProtectedSigning(props) {
  if (localStorage.getItem("userToken")) {
    return <Navigate to={"/"} />;
  } else {
    return props.children;
  }
}
