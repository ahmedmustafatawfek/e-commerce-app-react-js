import React from "react";
import styles from "./Cart.module.css";
import shipping from "../../images/Elements/Cart/shipping.png";
import cartItem from "../../images/Elements/Cart/Image Placeholder.png";

export default function Cart() {
  return (
    <div>
      <div className={`text-center ${styles.hero} mb-5`}>
        <h1 className="mb-5">cart</h1>
        <p>
          Shop for 500 EGP more to enjoy
          <span className="fw-bolder ms-1">FREE Shipping</span>
        </p>
        <img src={shipping} alt="shipping processing" className="w-25 mb-3" />
      </div>

      <div className={`${styles.cartTable} container`}>
        {/* head of cart table */}
        <div className={`row ${styles.row}`}>
          <div className="col-md-6 d-flex">
            <p className="me-auto">product</p>
          </div>
          <div className="col-md-2 d-flex">
            <p className="">Quantity</p>
          </div>
          <div className="col-md-2 d-flex">
            <p className="">Price</p>
          </div>
          <div className="col-md-2 d-flex">
            <p className="">Subtotal</p>
          </div>
        </div>

        {/* row of content  */}
        <div className={`row ${styles.row}`}>
          {/* first col */}
          <div className="col-md-6 d-flex align-items-center p-0">
            <img
              src={cartItem}
              alt="cart item"
              className={`${styles.cartItem} me-4`}
            />
            <div className={`${styles.info} text-start mt-3 ms-0`}>
              <p className={`text-black ${styles.title}`}>AirBrags® Sneakers</p>
              <p>Size: 42, Color: Orange</p>
              <div className="d-flex" role="button">
                <i class="fa-regular fa-trash-can me-2"></i>
                <p>Remove</p>
              </div>
            </div>
          </div>
          {/* second col */}
          <div className="col-md-2 d-flex align-items-center px-0">
            <div className={`d-flex p-0 ${styles.quantityBtn}`}>
              <p className={`mb-0 py-2 ps-2`} role="button">
                -
              </p>
              <p className={`mb-0 py-2 px-3`}>1</p>
              <p className={`mb-0 py-2 pe-2`} role="button">
                +
              </p>
            </div>
          </div>
          <div className="col-md-2 d-flex align-items-center px-0 pt-3">
            <p className="fw-bold">4520 EGP</p>
          </div>
          <div className="col-md-2 d-flex align-items-center pt-3">
            <p className="fw-bold">4520 EGP</p>
          </div>
        </div>

        {/* check out section */}
        <div className={`row mx-auto ${styles.checkout} `}>
          {/* left section */}
          <div className="col-md-6">
            <div className="left">
              <p className="fw-bold fs-6">Have a coupon?</p>
              <p className="fw-light">
                Add your code for an instant cart discount
              </p>
              <div className={styles.inputfield}>
                <input type="text" placeholder="Input" />
                <span role="button">Apply</span>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="col-md-6">
            <div className={styles.right}>
              <p className="fw-bold fs-6">Cart summary</p>
              {/* first option free shipping */}
              <div
                className={`d-flex align-items-center justify-content-between  px-3 my-3 ${styles.option}`}
                role="button"
              >
                <div class="form-check">
                  <input
                    role="button"
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Free Shipping
                  </label>
                </div>
                <p className="m-0">0 EGP</p>
              </div>

              {/* second option express shipping */}
              <div
                className={`d-flex align-items-center justify-content-between px-3 my-3 ${styles.option}`}
                role="button"
              >
                <div class="form-check">
                  <input
                    role="button"
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Express Shipping
                  </label>
                </div>
                <p className="m-0">50 EGP</p>
              </div>

              {/* subtotal price */}
              <div
                className={`d-flex align-items-center justify-content-between py-2 ${styles.price}`}
              >
                <p className="m-0 fs-6">Subtotal</p>
                <p className="m-0 fs-6">4520 EGP</p>
              </div>

              {/* total price */}
              <div
                className={`d-flex align-items-center justify-content-between py-2 fw-bold`}
              >
                <p className="m-0 fs-6">Total</p>
                <p className="m-0 fs-6">4520 EGP</p>
              </div>

              {/* checkout button */}
              <button className={`btn w-100 mt-4 mb-1 ${styles.checkoutBtn}`}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
