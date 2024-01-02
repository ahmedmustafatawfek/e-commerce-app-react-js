import React from "react";
import styles from "./Products.module.css";
import AllProducts from "./AllProducts";

export default function Products() {
  return (
    <>
      <div className={`${styles.background}`}>
        <div className={`${styles.hero}`}>
          <h2>Shop</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis voluptatum deleniti.
          </p>
        </div>
      </div>
      <div className={`m-auto mt-5 ${styles.products}`}>
        <div className="d-flex justify-content-between">
          {/* left side */}
          <div className={`${styles.leftside} `}>
            <p className={styles.allproducts}>56 products</p>
            <div className={styles.btns}>
              <div className={`${styles.fillterBtn} me-3`} role="button">
                <i className="fa-solid fa-x me-2"></i>
                <p>shoes</p>
              </div>

              <div className={`${styles.fillterBtn} me-3`} role="button">
                <i className="fa-solid fa-x me-2"></i>
                <p>shawl</p>
              </div>

              <div
                className={`${styles.fillterBtn} ${styles.clearFillter}`}
                role="button"
              >
                <i className="fa-solid fa-x me-2"></i>
                <p>Clear All</p>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className={`${styles.rightside} d-flex me-4`}>
            <div
              className="d-flex justify-content-center align-item-center"
              role="button"
            >
              <p>Filter </p>
              <i className={`fa-solid fa-filter ms-2 ${styles.filterIcon}`}></i>
            </div>
            <div
              className="d-flex justify-content-center align-item-center ms-4"
              role="button"
            >
              <p>Sort by </p>
              <i className={`fa-solid fa-sort-down ms-2 `}></i>
            </div>
          </div>
        </div>

        <AllProducts />
      </div>
    </>
  );
}
