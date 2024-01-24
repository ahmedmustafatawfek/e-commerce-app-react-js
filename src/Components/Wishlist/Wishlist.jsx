import React from "react";
import styles from "./Wishlist.module.css";
import orderOne from "../../images/Elements/orders/Thumbnail Images.png"
import nikeShose from "../../images/Elements/orders/nike.png"
import bag from "../../images/Elements/orders/bag.png"

export default function Wishlist() {
  return (
    <div>
      <>
        {/* first row */}
        <div className="row">
          <div className="col-md-7 d-flex align-items-center">
            <img src={orderOne} alt="order item" className="w-25 my-4" role="button" />
            <div className="ms-4">
              <p className={`text-black fw-bold`}>
                V-Neck Fit & Flare Dress
              </p>
              <p>Size: M , Color: black</p>
              <div
                className="d-flex"
                role="button"
              >
                <i className="fa-regular fa-trash-can me-2 fs-6"></i>
                <p>Remove</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <p className="fw-bold">840 EGP</p>
          </div>
        </div>
        {/* seconf row */}
        <div className="row">
          <div className="col-md-7 d-flex align-items-center">
            <img src={nikeShose} alt="order item" className="w-25 my-4" role="button" />
            <div className="ms-4">
              <p className={`text-black fw-bold`}>
                Revolution 6 Running Shoes
              </p>
              <p>Size: 38 , Color: pink</p>
              <div
                className="d-flex"
                role="button"
              >
                <i className="fa-regular fa-trash-can me-2 fs-6"></i>
                <p>Remove</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <p className="fw-bold">3620 EGP</p>
          </div>
        </div>
        {/* third row */}
        <div className="row">
          <div className="col-md-7 d-flex align-items-center">
            <img src={bag} alt="order item" className="w-25 my-4" role="button" />
            <div className="ms-4">
              <p className={`text-black fw-bold`}>
                Women's Handbag brown
              </p>
              <p>Size: one size , Color: brown</p>
              <div
                className="d-flex"
                role="button"
              >
                <i className="fa-regular fa-trash-can me-2 fs-6"></i>
                <p>Remove</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <p className="fw-bold">279 EGP</p>
          </div>
        </div>
      </>
    </div>
  );
}
