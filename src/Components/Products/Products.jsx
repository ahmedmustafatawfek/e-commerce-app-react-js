import React from "react";
import styles from "./Products.module.css";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
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
              <div className={`${styles.fillterBtn} me-3`}>
                <i class="fa-solid fa-x me-2"></i>
                <p>shoes</p>
              </div>

              <div className={`${styles.fillterBtn} me-3`}>
                <i class="fa-solid fa-x me-2"></i>
                <p>shawl</p>
              </div>

              <div className={`${styles.fillterBtn} ${styles.clearFillter}`}>
                <i class="fa-solid fa-x me-2"></i>
                <p>Clear All</p>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className={`${styles.rightside}`}></div>
        </div>
        
        <AllProducts />
      </div>
    </>
  );
}
