import React from "react";
import styles from "./Discount.module.css";

export default function Discount() {
  return (
    <>
      <div className="container-fluid bg-black fixed-top text-white py-1">
        <p className={styles.text}>70% off Storewide-Limited time</p>
      </div>
    </>
  );
}
