import React from "react";
import styles from "./Orders.module.css";

export default function Orders() {
  return <>
    <div className="row mt-3">
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2 fw-bold">#98224</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2">July 24, 2023</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2">Delivered</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2">2530.00 EGP</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <button className={`btn w-50 me-auto ${styles.btn}`}>Track</button>
      </div>
    </div>

    <div className="row mt-3">
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2 fw-bold">#98554</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2">July 30, 2023</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2">Delivered</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2">3530.00 EGP</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <button className={`btn w-50 me-auto ${styles.btn}`}>Track</button>
      </div>
    </div>

    <div className="row mt-3">
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2 fw-bold">#99634</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2">October 18, 2023</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2">Delivered</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2">5570.00 EGP</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <button className={`btn w-50 me-auto ${styles.btn}`}>Track</button>
      </div>
    </div>

    <div className="row mt-3">
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2 fw-bold">#100224</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2">November 28, 2023</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2">Delivered</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <p className="py-2">6560.00 EGP</p>
      </div>
      <div className={`col-sm-2  ${styles.order}`}>
        <button className={`btn w-50 me-auto ${styles.btn}`}>Track</button>
      </div>
    </div>
  </>;
}
