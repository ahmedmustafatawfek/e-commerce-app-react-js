// import React, { useContext } from "react";
import styles from "./Home.module.css";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import coats from "../../images/Elements/coats.png";
import bags from "../../images/Elements/bags.png";
import accessories from "../../images/Elements/Accessories.png";
import { Link } from "react-router-dom";
import nike from "../../images/Pieces/nike.png";
import puma from "../../images/Pieces/puma.png";
import hush from "../../images/Pieces/hush.png";
import marc from "../../images/Pieces/marc.png";
import supreme from "../../images/Pieces/supreme.png";
import union from "../../images/Pieces/Union.png";

export default function Home() {
  return (
    <>
      <div className="position-relative">
        <div className={`${styles.hero}`}>
          {/* HEADER OF HOME PAGE */}
          <div className={`${styles.headSection} row`}>
            <div className={styles.welcome}>
              <p className={styles.p}>New Arrivals</p>
              <h1 className={styles.header}>
                Create your dream shop instantly.
              </h1>
              <p className={styles.subHeader}>
                Keep your everyday style chic and on-trend with our selection
                20+ styles to choose from.
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

          {/* BANNER FOR BRANDS */}
          <div className={`row ${styles.banner} my-5`}>
            <div className={`col-md-6 p-5`}>
              <h3 className="py-3 ">Loved Brands</h3>
              <p>
                At vero et accusamus et iusto odio dignissimos ducimus qui
                blanditiis deleniti atqu.
              </p>

              <Link to="Products" className={`${styles.link}`}>
                See All <i class="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>

            <div className={`col-md-6 p-5`}>
              <div className="row py-3">
                <div className="col-md-4">
                  <img src={nike} alt="" />
                </div>
                <div className="col-md-4">
                  <img src={hush} alt="" />
                </div>
                <div className="col-md-4">
                  <img src={puma} alt="" />
                </div>
              </div>

              <div className="row pt-5">
                <div className="col-md-4">
                  <img src={union} alt="" />
                </div>
                <div className="col-md-4">
                  <img src={marc} alt="" />
                </div>
                <div className="col-md-4">
                  <img src={supreme} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* JOIN OUR NEWSLETTER */}
          <div className={`text-center`}>
            
          </div>
        </div>
      </div>
    </>
  );
}
