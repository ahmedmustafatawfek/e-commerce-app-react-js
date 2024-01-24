import React from "react";
import styles from "./Profile.module.css";
import { Link, Outlet } from "react-router-dom";
import profilePic from "../../images/Elements/Avatar.png"
import addPic from "../../images/Elements/Icon Box.png"
import Dashboard from "../Dashboard/Dashboard";

export default function Profile() {
  return <>
    <div className={`${styles.background}`}>
      <div className={`${styles.hero}`}>
        <h2>My account</h2>
      </div>

    </div>
    <Dashboard />


    <div className="container">
      <div className="row">
        <div className="col-md-2">

          {/* profile picture */}
          <div className={styles.pic}>
            <img src={profilePic} alt="profile_picture" className="" />
            <img src={addPic} alt="add_picture" className={styles.addPic} />
          </div>

          {/* inside menu */}
          <ul className={styles.menu}>

            {/* Orders link */}
            <li>
              <Link to="orders">
                Orders
              </Link>
            </li>

            {/* Addresses link */}
            <li>
              <Link to="addresses">
                Addresses
              </Link>
            </li>

            {/* Account Details link */}
            <li>
              <Link to="accountdetails">
                Account Details
              </Link>
            </li>

            {/* Wishlist link */}
            <li>
              <Link to="wishlist">
                Wishlist
              </Link>
            </li>

          </ul>
        </div>

        {/* content of menu appear here */}
        <div className="col-md-10 mb-5 mt-4">
          <Outlet />
        </div>
      </div>
    </div>

  </>;
}
