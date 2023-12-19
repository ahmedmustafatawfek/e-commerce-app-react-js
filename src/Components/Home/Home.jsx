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
import img1 from "../../images/instagram/img1.png";
import img2 from "../../images/instagram/img2.png";
import img3 from "../../images/instagram/img3.png";
import img4 from "../../images/instagram/img4.png";
import Footer from "../Footer/Footer";

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
          <div className={`row mx-0 ${styles.banner} my-5`}>
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
          <div className={`text-center py-5 my-4 ${styles.joinus}`}>
            <h3 className="h2 pb-3">Join Our Newsletter</h3>
            <p>Big discounts and right to your inbox.</p>
            <form className={`${styles.email}`}>
              <i class="fa-regular fa-envelope fa-xl"></i>
              <input type="email" placeholder="Email address" />
              <p itemType="submit" className={`fs-6 ${styles.submit}`}>
                Signup
              </p>
            </form>
          </div>

          {/* ON INSTAGRAM SECTION */}
          <div id="instagram" className={`py-5 text-center ${styles.insta}`}>
            <h5>CHECK US OUT</h5>
            <h3 className="h2 pb-3">On Instagram</h3>
            <p className={`w-50 m-auto`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti.
            </p>
            <div className="row">
              <div className="col-md-3 ">
                <img src={img1} alt="" className="w-100" />
              </div>
              <div className="col-md-3 ">
                <img src={img2} alt="" className="w-100" />
              </div>
              <div className="col-md-3 ">
                <img src={img3} alt="" className="w-100" />
              </div>
              <div className="col-md-3 ">
                <img src={img4} alt="" className="w-100" />
              </div>
            </div>
          </div>

          {/* SHIPPING AND SUPPORT SECTION */}
          <div className={`py-4 row ${styles.support}`}>
            <div className="col-md-3 ">
              <div className="row">
                <div className="col-md-2">
                  <i class="fa-solid fa-truck-fast fa-l"></i>
                </div>
                <div className="col-md-10">
                  <h5>Free Shipping</h5>
                  <p>Orders above $200</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="row">
                <div className="col-md-2">
                  <i class="fa-solid fa-money-check-dollar"></i>
                </div>
                <div className="col-md-10">
                  <h5>Money-back</h5>
                  <p>30 day Guarantee</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="row">
                <div className="col-md-2">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div className="col-md-10">
                  <h5>Premium Support</h5>
                  <p>Phone and email support</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="row">
                <div className="col-md-2">
                  <i class="fa-solid fa-lock"></i>
                </div>
                <div className="col-md-10">
                  <h5>Secure Payments</h5>
                  <p>Secured by Stripe</p>
                </div>
              </div>
            </div>
          </div>

          <Footer/>
        </div>
      </div>
    </>
  );
}
