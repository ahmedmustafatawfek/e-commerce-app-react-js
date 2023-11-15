// import React, { useContext } from "react";
import styles from "./Home.module.css";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import homeImge from "../../images/PasteImage.png";
import coats from "../../images/Elements/coats.png";
import bags from "../../images/Elements/bags.png";
import accessories from "../../images/Elements/Accessories.png";
export default function Home() {
  return (
    <>
      <div className="position-relative">
        <div className={`${styles.hero}`}>
          {/* HEADER OF HOME PAGE */}
        <div className={`${styles.headSection} row`}>
          <div className={styles.welcome}>
            <p className={styles.p}>New Arrivals</p>
            <h1 className={styles.header}>Create your dream shop instantly.</h1>
            <p className={styles.subHeader}>
              Keep your everyday style chic and on-trend with our selection 20+
              styles to choose from.
            </p>
            <button className={styles.btn}>See Collection</button>
          </div>
          <br />
        </div>
        </div>

        <div className="container">
          {/* CATEGORIES SECTION */}
          <div className={`row ${styles.cards}`}>
            <div className="col-md-6 ms-auto">
              <div className={styles.card}>
                <img
                  src={coats}
                  alt="Coats"
                  className={`${styles.Img} img-fluid`}
                />
                <div className={`${styles.contentCoat}`}>
                  <h5>Coats</h5>
                  <p>
                    <button className={`${styles.buton}`}>Explore</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 me-auto">
              <div className={`row ${styles.bags}`}>
                <div className={styles.card}>
                  <img
                    src={bags}
                    alt="Bags"
                    className={`${styles.Img} img-fluid`}
                  />
                  <div className={`${styles.content}`}>
                    <h5>Purses</h5>
                    <p>
                      <button className={`${styles.buton}`}>Explore</button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className={styles.card}>
                  <img
                    src={accessories}
                    alt="Coats"
                    className={`${styles.Img} img-fluid`}
                  />
                  <div className={`${styles.content}`}>
                    <h5>Accessories</h5>
                    <p>
                      <button className={`${styles.buton}`}>Explore</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCTS SECTION */}
          <FeatureProducts />
        </div>
      </div>
    </>
  );
}
