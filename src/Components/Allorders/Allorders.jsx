import React, { useContext } from "react";
import styles from "./Allorders.module.css";
import { CartContext, handleError } from "../../context/cartContext";
import shipping from "../../images/Elements/Cart/shipping.png";
import orderOne from "../../images/Elements/orders/Thumbnail Images.png"
import nikeShose from "../../images/Elements/orders/nike.png"
import bag from "../../images/Elements/orders/bag.png"

export default function Allorders() {
  // use context 
  let { setCartCount, updatedCartCount } = useContext(CartContext);

  // handle error after payment
  function handlePaymentError(updatedCartCount) {
    handleError(setCartCount, updatedCartCount);
  }

  return (
    <div className="mt-5 w-75 mx-auto py-5 fs-1">
      {/* fire handle error after payment function here  */}
      {handlePaymentError(updatedCartCount)}

      <div className={`text-center ${styles.hero} mb-5`}>
        <h1 className="mb-4">All Orders</h1>
        <p className="mb-0">
          Shop for 2000 EGP more to enjoy
          <span className="fw-bold ms-1">FREE Shipping</span>
        </p>
        <img src={shipping} alt="shipping processing" className="w-25 mb-3" />
      </div>

      <div className={`${styles.cartTable} container`}>
        {/* row of content  */}
        {/* head of cart table */}
        <div className={`row ${styles.row}`}>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <p className="me-auto">Order</p>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <p className="">Items</p>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <p className="">Payment method</p>
          </div>
          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <p className="">Total price</p>
          </div>
        </div>

        {/* body of the all orders table */}
        <>
          {/* first row */}
          <div className={`row ${styles.row}`}>
            <div className="col-md-6 d-flex align-items-center">
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
              <p className="fw-bold">2</p>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <p className="fw-bold">Visa Card</p>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <p className="fw-bold">840 EGP</p>
            </div>
          </div>
          {/* seconf row */}
          <div className={`row ${styles.row}`}>
            <div className="col-md-6 d-flex align-items-center">
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
              <p className="fw-bold">1</p>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <p className="fw-bold">Visa Card</p>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <p className="fw-bold">3620 EGP</p>
            </div>
          </div>
          {/* third row */}
          <div className={`row ${styles.row}`}>
            <div className="col-md-6 d-flex align-items-center">
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
              <p className="fw-bold">1</p>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <p className="fw-bold">Visa Card</p>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <p className="fw-bold">279 EGP</p>
            </div>
          </div>
        </>
        {/* end body of the all orders table */}
      </div>
    </div>
  );
}
