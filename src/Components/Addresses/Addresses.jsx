import React from "react";
import styles from "./Addresses.module.css";

export default function Addresses() {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className={styles.card}>
            <div className="d-flex justify-content-between">
              <h5>Billing address</h5>
              <p role="button"><i class="fa-solid fa-pen"></i> Edit</p>
            </div>
            <p className="w-50">
              Jill Dower<br /> Nayzak Design<br /> 10 Strudwick CourtLondonSW4 6TE United
              Kingdom (UK)
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className={styles.card}>
            <div className="d-flex justify-content-between">
              <h5>Billing address</h5>
              <p role="button"><i class="fa-solid fa-pen"></i> Edit</p>
            </div>
            <p className="w-50">
              Jill Dower<br /> Nayzak Design<br /> 10 Strudwick CourtLondonSW4 6TE United
              Kingdom (UK)
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className={styles.card}>
            <div className="d-flex justify-content-between">
              <h5>Billing address</h5>
              <p role="button"><i class="fa-solid fa-pen"></i> Edit</p>
            </div>
            <p className="w-50">
              Jill Dower<br /> Nayzak Design<br /> 10 Strudwick CourtLondonSW4 6TE United
              Kingdom (UK)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
