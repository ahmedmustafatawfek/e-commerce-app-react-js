import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../images/eShopify-removebg-preview.png";
import profile from "../../images/user.png";
import cart from "../../images/cart.png";
import logout from "../../images/logout.png";
import { tokenContext } from "../../context/tokenContext";
import { CartContext } from "../../context/cartContext";


export default function NavBar() {
  const { cartCount } = useContext(CartContext);

  let { token, setToken } = useContext(tokenContext);
  let navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("userToken");
    setToken(null);
    navigate("/login");
  }

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <nav
        className={
          color
            ? `navbar navbar-expand-lg position-fixed  py-2 ${styles.navBar} ${styles.navBarBg}`
            : `navbar navbar-expand-lg position-fixed py-2 ${styles.navBar}`
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex align-items-center ">
                <img src={logo} alt="logo" className={styles.logo} />

                <Link className="navbar-brand fw-bold " to="/">
                  ESHOPIFY
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
              {/* mainul for home page */}
              <div
                className="collapse navbar-collapse d-flex  justify-content-between"
                id="navbarSupportedContent"
              >
                {token ? (
                  <>
                    {/* home menu */}
                    <ul
                      className={`navbar-nav  mb-2 mb-lg-0 ${styles.firstMenu}`}
                    >
                      <li className="nav-item">
                        <Link
                          className="nav-link text-black active"
                          aria-current="page"
                          to="/"
                        >
                          <div className="d-flex align-items-center">
                            <p className="m-0">Home</p>
                            <i className={`fa-solid fa-sort-down ms-2`}></i>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-black" to="products">
                          <div className="d-flex align-items-center">
                            <p className="m-0">Shop</p>
                            <i className={`fa-solid fa-sort-down ms-2`}></i>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-black" to="contactus">
                          <div className="d-flex align-items-center">
                            <p className="m-0">Contact us</p>
                            <i className={`fa-solid fa-sort-down ms-2`}></i>
                          </div>
                        </Link>
                      </li>
                    </ul>

                    {/* profile, cart, logout */}
                    <ul
                      className={`navbar-nav mb-2 mb-lg-0 ${styles.lastMenu}`}
                    >
                      <li className="nav-item">
                        <Link className="nav-link text-black" to="Profile">
                          <img
                            className={styles.icon}
                            src={profile}
                            alt="profile"
                          />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-black" to="Cart">
                          <div className="position-relative">
                            <img
                              className={styles.icon}
                              src={cart}
                              alt="cart"
                            />
                            <span className={styles.popUp}>{cartCount}</span>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-link text-black"
                          onClick={logOut}
                        >
                          <img
                            className={styles.icon}
                            src={logout}
                            alt="logout"
                          />
                        </button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    {/* register and login ul */}
                    <ul className="navbar-nav ms-auto   mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link text-black" to="register">
                          register
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-black" to="login">
                          login
                        </Link>
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
