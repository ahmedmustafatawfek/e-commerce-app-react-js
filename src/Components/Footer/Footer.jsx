import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../../images/eShopify-removebg-preview.png";

export default function Footer() {
  return (
    <>
      <div className="container ">
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <img src={logo} alt="logo" className={styles.logo} />

              <Link className="navbar-brand fs-5 fw-bold" to="/">
                ESHOPIFY
              </Link>
            </div>
            <p className={`mt-3 ${styles.p}`}>
              Experience the future of e-commerce design with SHOPR
            </p>
            <div className={`${styles.social} d-flex align-items-center my-4`}>
              <Link className="me-4" to="https://www.facebook.com">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>

              <Link className="mx-4" to="https://www.instagram.com">
                <i className="fa-brands fa-instagram"></i>
              </Link>

              <Link className="mx-4" to="https://www.twitter.com">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>

              <Link className="ms-4" to="https://www.gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </Link>
            </div>

            <p className={styles.copyright}>© 2023 SHOPR</p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <ul>
                  <li className="text-black">Shop</li>
                  <li>My account</li>
                  <li>Login</li>
                  <li>Wishlist</li>
                  <li>Cart</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul>
                  <li className="text-black">Information</li>
                  <li>Shipping Policy</li>
                  <li>Returns & Refunds</li>
                  <li>Cookies Policy</li>
                  <li>Frequently asked</li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul>
                  <li className="text-black">Company</li>
                  <li>About us</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
